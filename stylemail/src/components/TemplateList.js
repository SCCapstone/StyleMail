import React, {useState, useEffect} from 'react'
import { useAuth } from "../contexts/AuthContext";
import firebase from 'firebase/app';
import "firebase/firestore";
import './TemplateList.css'
const db = firebase.firestore();


const TemplateList = () => {
  const [templates, setTemplates] = useState([]);
  const { currentUser } = useAuth()
  const[searchTerm, setSearchTerm] = useState('')
 


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
  }, []);

  const deleteTemplate = id => {
    db.collection('users').doc(currentUser.email).collection('templates')
    .doc(id)
    .delete();
  };

  return (
    <div>
      <div>
        <h6>Templates</h6>
          <input
            id="searchbar"
            type='text'
            placeholder="Search"   
            onChange={event =>{setSearchTerm(event.target.value)}}   
          />
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
                  <input 
                    placeholder={val.title}                    
                    onChange={e=> {
                      db.collection('users').doc(currentUser.email).collection('templates').doc(val.id).update( {
                        'title': e.target.value 
                      })
                    }  
                  }
                    />
                                                                  
                  <input 
                    placeholder={val.html}
                    onChange={e=> {
                      db.collection('users').doc(currentUser.email).collection('templates').doc(val.id).update( {
                        'html': e.target.value 
                      })
                    }  
                  }
                    />                                       
                </div>
                <div
                  onClick={() => deleteTemplate(val.id)}
                  style={{ cursor: 'pointer' }} // add
                >
                  <i>Delete</i>
                  </div>                  
          </div>
        );
      })}    
      </div>
    </div>
  );
}
export default TemplateList;
