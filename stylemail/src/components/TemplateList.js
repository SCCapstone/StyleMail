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

  
  // const [title, setTitle] = React.useState();
  // const [html, setHTML] = React.useState();
  
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
    db.collection('users').doc(currentUser.email).collection('templates').doc(id).set({...template})    
  };
  


// const tempHelper = (e) => {
//   setTemplate((previousState) => ({
//     ...previousState,
//     [e.target.name]: e.target.value  
//   }));
// }

// const handleSubmit = e => {
//   e.preventDefault();
//   userTemps.add(template);
//   setTemplate({
//     title: '',
//     html: ''
//   });
// };

// const handleChange = e => {
//   setTemplate({ ...template, [e.target.name]: e.target.value });
// };
// const handleChange = e => {
//   d({ ...template, [e.target.name]: e.target.value });
// };




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
          {templates.filter((val)=> {
          if(searchTerm =="") {
            return val
          }  
          else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())){
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
                  <div
                  onClick={() => editTemplate(val.id)}
                  style={{ cursor: 'pointer' }} 
                >
                  <i>Update</i>                  
                </div>
          </div>
        );
      })}    
      </div>
    </div>
  );
}
export default TemplateList;
