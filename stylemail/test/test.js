const assert = require('assert');
const firebase = require('@firebase/testing');
// Variables
const MY_PROJECT_ID = "stylemail-edf5f"
const myId = "user_test";
const theirId = "user_altTest";
const myAuth = {uid:myId, email: "test@stylemail.com"};

function getFirestore(auth) {
    return firebase.initializeTestApp({projectId: MY_PROJECT_ID, auth: auth}).firestore();
}
// Unit tests
describe("StyleMail App", () => {
    
    it("A test to test the tests", () => {
        assert.equal(5*2, 10)
    })
    // Testing if user can edit their own document from the database
    it("Can write to a user document with the same ID as our user", async() => {
        const db = getFirestore(myAuth);
        const testDoc = db.collection("users").doc(myId);
        await firebase.assertSucceeds(testDoc.set({foo: "bar"}));
    })
    // Testing if user can edit a different user's document from the database
    it("Can't write to a user document with a different ID as our user", async() => {
        const db = getFirestore(myAuth);
        const testDoc = db.collection("users").doc(theirId);
        await firebase.assertFails(testDoc.set({foo: "bar"}));
    })
})