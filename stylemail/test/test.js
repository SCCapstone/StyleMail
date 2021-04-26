const assert = require('assert');
const firebase = require('@firebase/rules-unit-testing');
const fs = require("fs");
// Variables
const MY_PROJECT_ID = "stylemail-edf5f"
const myId = "JKFDA25648F1F5D9S2";
const myAuth = {uid:myId};

// Creates a firestore instance that is authenticated
function getFirestore(auth) {
    return firebase.initializeTestApp({projectId: MY_PROJECT_ID, 
        auth: {uid: auth, email: 'test@stylemail.com'}}).firestore();
}

// Gets the firebase rules for tests to test
const rules = fs.readFileSync("../firestore.rules", "utf8");
firebase.loadFirestoreRules({ projectId: MY_PROJECT_ID, rules });

// Unit tests
describe("StyleMail App Basic Functions", () => {
    
    it("A test to test the tests", () => {
        assert.equal(5*2, 10)
    })
    it('Can a non-authed user create an account', async(done) => {
        const db = firebase.initializeTestApp({projectId: MY_PROJECT_ID}).firestore();
        const testDoc = db.collection("users");
        await firebase.assertFails(testDoc
            .add({email: 'new@stylemail.com', provider: 'firebase'}).then(done()));
    })
    it("Can a new user create an account", async(done) => {
        const db = getFirestore(myAuth)
        const testDoc = db.collection('users');
        await firebase.assertSucceeds(testDoc
            .add({email: 'new@stylemail.com', provider: 'firebase'}).then(done()));
    })
    it("Can a user update their email", async(done) => {
        const db = getFirestore(myAuth)
        const testDoc = db.collection('users').doc(myId);
        await firebase.assertSucceeds(testDoc
            .set({email: 'edituser@stylemail.com'}).then(done()));
    })
    it("Can a user delete their account", async(done) => {
        const db = getFirestore(myAuth)
        const testDoc = db.collection('users').doc(myId);
        await firebase.assertSucceeds(testDoc.delete(myId).then(done()));
    })
    it("Can a user access their send log", async(done) => {
        const db = getFirestore(myAuth)
        const testDoc = db.collection('users').doc(myId).collection('sendlog');
        await firebase.assertSucceeds(testDoc.get().then(done()));
    })
    it("Can a user update their send log", async(done) => {
        const db = getFirestore(myAuth)
        const testDoc = db.collection('users').doc(myId).collection('sendlog');
        await firebase.assertSucceeds(testDoc
            .add({to: 'friend@gmail.com', subject: 'testing'}).then(done()));
    })
    it("Can a user access their templates", async(done) => {
        const db = getFirestore(myAuth)
        const testDoc = db.collection('users').doc(myId).collection('templates');
        await firebase.assertSucceeds(testDoc.get().then(done()));
    })
    it("Can a user edit their templates", async(done) => {
        const db = getFirestore(myAuth)
        const testDoc = db.collection('users').doc(myId).collection('templates');
        await firebase.assertSucceeds(testDoc.add({foo: 'bar'}).then(done()));
    })
    it("Can a user delete their templates", async(done) => {
        const db = getFirestore(myAuth)
        const testDoc = db.collection('users').doc(myId).collection('templates').doc('test-template');
        await firebase.assertSucceeds(testDoc.delete('test-template').then(done()));
    })
})