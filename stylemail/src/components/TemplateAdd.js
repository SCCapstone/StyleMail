import React, { useState } from 'react';
import { useAuth } from "../contexts/AuthContext";
import firebase from 'firebase/app';
import "firebase/firestore";
const db = firebase.firestore();

const TemplateAdd = () => {
  const { currentUser } = useAuth()
  var userTemps = db.collection('users').doc(currentUser.email).collection('templates');

  const [template, setTemplate] = useState({
    title: '',
    html: ''
  });

  const handleSubmit = e => {
    e.preventDefault();
    userTemps.add(template);
    setTemplate({
      title: '',
      html: ''
    });
  };

  const handleChange = e => {
    setTemplate({ ...template, [e.target.name]: e.target.value });
  };

  return (
    <div className='section'>
      <div className='container'>
        <h6>New Template</h6>
        <form onSubmit={handleSubmit}>
          <div className='input-field'>
            <input
              type='text'
              id='title'
              name='title'
              value={template.title}
              onChange={handleChange}
              placeholder='e.x. Christmas Party'
              className='validate'
              required
            />
            <label className='active' htmlFor='title'>
              Title
            </label>
          </div>
          <div className='input-field'>
            <input
              type='text'
              id='html'
              name='html'
              value={template.html}
              onChange={handleChange}
              placeholder='e.x. <h1>html</h1>'
              className='validate'
              required
            />
            <label className='active' htmlFor='html'>
              html
            </label>
          </div>
          <div className='input-field center'>
            <button type='submit'>
              <i></i>Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TemplateAdd;