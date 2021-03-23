import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import React, { useState } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { stateToHTML } from 'draft-js-export-html'
import { addTemplate } from "../api/FireApi"
/**
 * Private Visability
 * Allows adding of templates to authenticated users
 */
const TemplateAdd = () => {
  const [description, setDescription] = useState('');
  const [template, setTemplate] = useState({
    title: '',
    html: '',
    dateCreated: '',
  });
  // Calls 'addTemplate' function to create a new template in user's sub-collection
  const handleSubmit = e => {
    e.preventDefault()
    setTemplate({
      title: '',
      html: stateToHTML(description.getCurrentContent()),
      dateCreated: '',
      rawHTML: convertToRaw(description.getCurrentContent()),
    });
    addTemplate(template, stateToHTML(description.getCurrentContent()), convertToRaw(description.getCurrentContent()))
    setDescription(EditorState.createEmpty())
  };
  // Handle title change
  const handleChange = e => {
    setTemplate({ ...template, [e.target.name]: e.target.value});
  };
  // Handle upload of image from text editor **IN PROGRESS**
  function uploadImageCallBack(file) {
    return new Promise(
      (resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('POST', 'https://api.imgur.com/3/image');
        xhr.setRequestHeader('Authorization', 'f08b5db66f8061d 2f35a961a6bcb22cc9aaf7e20fe172bffdc2242a');
        const data = new FormData();
        data.append('image', file);
        xhr.send(data);
        xhr.addEventListener('load', () => {
          const response = JSON.parse(xhr.responseText);
          resolve(response);
        });
        xhr.addEventListener('error', () => {
          const error = JSON.parse(xhr.responseText);
          reject(error);
        });
      }
    );
  }

  return (
    <div className='section'>
      <div className='container'>
      <div>
        <br></br>
      </div>
      <div>
        <br></br>
      </div>
        <h4>Add New Template</h4>
        <form onSubmit={handleSubmit}>
          <div style={{paddingBottom: '10px'}} className='input-field center'>
            <input
              type='text'
              id='title'
              name='title'
              value={template.title}
              onChange={handleChange}
              placeholder='e.x. Christmas Party'
              className='form-control validate'
              required
            />
          </div>
          <div className='input-field center'>
            <Editor
              editorState={description}
              placeholder={"Create template here!"}
              wrapperClassName="wrapper-class"
              editorClassName="editor-class"
              toolbarClassName="toolbar-class"
              toolbar={{
                inline: { inDropdown: true },
                list: { inDropdown: true },
                textAlign: { inDropdown: true },
                link: { inDropdown: true },
                history: { inDropdown: true },
                image: { uploadCallback: uploadImageCallBack, alt: { present: true, mandatory: true } },
              }}
              wrapperStyle={{ border: "2px solid lightgray", marginBottom: "20px", backgroundColor: "#F6F6F6" }}
              onEditorStateChange={editorState => setDescription(editorState)}
            />
          </div>
          <div className='input-field center'>
          <button type="submit" className="btn btn-secondary btn-sm">Add Template</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TemplateAdd;