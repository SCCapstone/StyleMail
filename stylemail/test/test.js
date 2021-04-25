const assert = require('assert');
const firebase = require('@firebase/rules-unit-testing');
const fs = require("fs");
// Variables
const MY_PROJECT_ID = "stylemail-edf5f"
const myId = "something";
const theirId = "some";
const myEmail = "test@stylemail.com"
const myAuth = {uid:myId};

function getFirestore(auth) {
    return firebase.initializeTestApp({projectId: MY_PROJECT_ID, auth: auth}).firestore();
}

    const rules = fs.readFileSync("../firestore.rules", "utf8");
    firebase.loadFirestoreRules({ projectId: MY_PROJECT_ID, rules });

// Basic functionality Unit tests
describe("StyleMail App Basic Functions", () => {
    
    it("A test to test the tests", () => {
        assert.equal(5*2, 10)
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