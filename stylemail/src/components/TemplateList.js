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
  const[searchTerm, setSearchTerm] = useState('')

  
  const [title, setTitle] = React.useState();
  const [html, setHTML] = React.useState();
  const [template, setTemplate] = useState({
    title: '',
    html: ''
  });



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
    db.collection('users').doc(currentUser.email).collection('templates').doc(id).set({...template,title}) 
  };
  

  return (
    <div>
      <div>
        <h6>Templates</h6>

        <input
      type='text'
      placeholder="Search"   
      onChange={event =>{setSearchTerm(event.target.value)}}   
      />
      
       {templates.filter((val)=> {
        if(searchTerm =="") {
          return val
        } else if 
         (val.title.toLowerCase().includes(searchTerm.toLowerCase())){
          return val
      }                 

    }).map((val,key)=>{
        return (
          <div className="user" key={key}>
          <p>{val.title}</p>
          </div>
        );
      })}    


        {/* <ul>
          {templates.map(template => (
            <li key={template.id}>
              <div>
                <div>
                  <input 
                    placeholder={template.title}                    
                    onChange={e => {
                    setTitle(e.target.value);                    
                  }                
                }                  
                  />       
                                          
                  <input 
                    placeholder={template.html}
                    onChange={e => {
                    setHTML(e.target.value);                    
                  }                
                }                  
                  />                                                 
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
                  <i>Update</i>                  
                </div>
              </div>
            </li>
          ))}
        </ul> */}
      </div>
    </div>
  );
}
export default TemplateList;
