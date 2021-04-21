import { useState, useEffect } from "react"
import { auth, db } from "../firebase"
/**
 * Exported functions for quick Firestore read, write, and update queries
 */
function dateTime() {
    const date = new Date();
    const formattedDT = date.toLocaleString([], {month: 'long', day: '2-digit', year: 'numeric',
      hour: 'numeric', minute: 'numeric', second: 'numeric'});
  return formattedDT;
}
// Query of all email send logs from authenticated user
export function GetLogs() {
    const [entries, setEntries] = useState([])
    useEffect(() => {
        var userLogs = db.collection('users').doc(auth.currentUser.uid).collection('sendlog');
        const unsub = userLogs.onSnapshot(snapshot => {
          const allEntries = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setEntries(allEntries);
        });
        return () => {
          unsub();
        };
    },[]);
  return entries
}
// Query of all created templates from authenticated user
export function GetTemplates() {
    const [templates, setTemplates] = useState([])
    useEffect(() => {
        const userTemps = db.collection('users').doc(auth.currentUser.uid).collection('templates')
        const unsub = userTemps.onSnapshot(snapshot => {
            const allTemplates = snapshot.docs.map(doc => ({
              id: doc.id,
              ...doc.data()
            }));
            setTemplates(allTemplates);
          });
        return () => {
          unsub()
        };
    }, [])
  return templates
}
// Gets the number of templates in a user's collection
export function GetTemplateNum() {
  const [tempNum, setTempNum] = useState(false)
  useEffect(() => {
    const userTemps = db.collection('users').doc(auth.currentUser.uid).collection('templates')
    const unsub = userTemps.onSnapshot(snapshot => {
        const allTemplates = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        if (allTemplates.length === 0) {
          setTempNum(true)
        } else {
          setTempNum(false)
        }
      });
    return () => {
      unsub()
    };
  }, [])
  return tempNum
}
// Adds a created template from authenticated user
export function addTemplate(template, html, rawHTML) {
    db.collection('users').doc(auth.currentUser.uid).collection('templates')
    .add({
      title: template.title,
      html: html,
      dateCreated: dateTime(),
      rawHTML: rawHTML,
    })
}
// Updates an existing template for authenticated user
export function updateTemplate(docID, title, editedHTML, raw) {
    db.collection('users').doc(auth.currentUser.uid).collection('templates')
    .doc(docID).update({
      'title': title,
      'html': editedHTML,
      'rawHTML': raw,
    })
}
// Removes an existing template for authenticated user
export function removeTemplate(docID) {
    db.collection('users').doc(auth.currentUser.uid).collection('templates')
    .doc(docID).delete()
}
// Logs email send entry for authenticated user
export function sendLogEntry(to, subject) {
    db.collection('users').doc(auth.currentUser.uid).collection('sendlog')
    .add({
        timeSent: dateTime(),
        emailTo: to,
        emailSubject: subject,
    }).catch((error) => {
      console.log("Error saving Send Log entry", error)
    })
}