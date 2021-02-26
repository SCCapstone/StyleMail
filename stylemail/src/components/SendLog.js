import "./SendLog.css"
import NavBar from "./NavBar"
import Footer from "./Footer"
import React, { useState, useEffect } from 'react';
import { useAuth } from "../contexts/AuthContext";
import firebase from 'firebase/app';
import "firebase/firestore";
const db = firebase.firestore();

const SendLogs = () => {
    const [entries, setEntry] = useState([]);
    const { currentUser } = useAuth()

    var userLogs = db.collection('users').doc(currentUser.email).collection('sendlog');
  
    useEffect(() => {
      const unsub = userLogs.onSnapshot(snapshot => {
        const allEntries = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setEntry(allEntries);
      });
      return () => {
        unsub();
      };
    },);
  
    return (
        <div>
            <NavBar />
            <div>
                <h3>Send Log</h3>
                    <div class="list-group listElem">
                        {entries.map(entry => (
                            // eslint-disable-next-line jsx-a11y/anchor-is-valid
                            <a class="list-group-item list-group-item-action list-group-item-secondary cur">
                                <span class="title">Sent: </span>{entry.timeSent}<br></br>
                                <span class="title">To: </span>{entry.emailTo}<br></br>
                                <span class="title">Subject </span>{entry.emailSubject}
                            </a>
                        ))}
                    </div>
                </div>
                <Footer></Footer>
        </div>
    )
  };
  
  export default SendLogs;