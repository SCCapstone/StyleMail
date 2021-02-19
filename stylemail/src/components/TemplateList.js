import React, {useState, useEffect} from 'react'
import TemplateEdit from './TemplateEdit'
import { useAuth } from "../contexts/AuthContext";
import firebase from 'firebase/app';
import "firebase/firestore";
import './TemplateList.css'
const db = firebase.firestore();


const TemplateList = () => {
  const [templates, setTemplates] = useState([]);
  const { currentUser } = useAuth()

  var userTemps = db.collection('users').doc(currentUser.email).collection('templates');

  useEffect(() => {
    console.log('effect');
    const unsub = userTemps.onSnapshot(snapshot => {
      const allTemplates = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setTemplates(allTemplates);
    });
    return () => {
      console.log('cleanup');
      unsub();
    };
  }, []);

  const deleteTemplate = id => {
    db.collection('users').doc(currentUser.email).collection('templates')
    .doc(id)
    .delete();
  };


  const editTemplate = id => {
    db.collection('users').doc(currentUser.email).collection('templates')
    .doc(id)
    .delete();
  };




  return (
    <div>
      <div>
        <h6>Templates</h6>
        <ul>
          {templates.map(template => (
            <li key={template.id}>
              <div>
                <div>
                  <div>{template.title}</div>
                  <div>{template.html}</div>
                </div>
                <div
                  onClick={() => deleteTemplate(template.id)}
                  style={{ cursor: 'pointer' }} // add
                >
                  <i>Delete</i>
                  </div>
                  <div
                  onClick={() => editTemplate(template.id)}
                  style={{ cursor: 'pointer' }} 
                >
                  <i>Edit</i>
                  
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default TemplateList;
