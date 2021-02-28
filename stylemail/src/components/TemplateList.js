/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
import React, {useState, useEffect} from 'react'
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router-dom"
import firebase from 'firebase/app';
import "firebase/firestore";
import './TemplateList.css'
const db = firebase.firestore();

export default function TemplateList() {
  const [templates, setTemplates] = useState([]);
  const { currentUser } = useAuth()
  const history = useHistory();
  const[searchTerm, setSearchTerm] = useState('')

  async function SendTemplate(title, html) {
    try {
      //localStorage.clear();
      localStorage.setItem('templateChoiceCustom', title);
      localStorage.setItem('templateHTMLCustom', html);
      history.push('/edittemplatesample');
    } catch(e) {
      console.log(e.message);
    }
  }

  var userTemps = db.collection('users').doc(currentUser.email).collection('templates');

  useEffect(() => {
    const unsub = userTemps.onSnapshot(snapshot => {
      const allTemplates = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setTemplates(allTemplates);
    });
    return () => {
      unsub();
    };
  },);

  const deleteTemplate = id => {
    db.collection('users').doc(currentUser.email).collection('templates')
    .doc(id)
    .delete();
  };
  
  return (
    <div>
      <div>
        <h4>Custom Templates</h4>
          <input
            id="searchbar"
            type='text'
            placeholder="Type here to search by title"   
            onChange={event =>{setSearchTerm(event.target.value)}}   
          />
          <div>
            <br></br>
          </div>
          <div>
            <br></br>
          </div>
          {templates.filter((val) => {
          if(searchTerm == "") {
            return val
          }  
          else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val
          }                 
          }).map((val,key)=>{
            return (
            <div className="user" key={key}>
              <div>
                  Title
                  <br/>
                  <input 
                    placeholder={val.title}                    
                    onChange={e=> {
                      db.collection('users').doc(currentUser.email).collection('templates').doc(val.id).update( {
                        'title': e.target.value 
                      })
                    }  
                  }
                    />
                         <br/>HTML<br/>                                         
                  <textarea rows="5" cols="100" placeholder={val.html}
                    onChange={e=> {
                      db.collection('users').doc(currentUser.email).collection('templates').doc(val.id).update( {
                        'html': e.target.value 
                      })
                    }  
                  }></textarea>                                    
                </div>
                <button
                  class="btn btn-outline-dark"
                  onClick={() => deleteTemplate(val.id)}
                  
                >
                  <i>Delete</i>
                  </button>
                  <button class="btn btn-outline-dark" id={val.html} onClick={ () => {SendTemplate(val.title, val.html)}}>
                  <i>Send</i>
                  </button>
                  <div>
                    <br></br>
                  </div>
          </div>
        );
      })}    
      </div>
    </div>
  );
}
//export default TemplateList;
