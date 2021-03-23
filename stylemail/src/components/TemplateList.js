/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
import './TemplateList.css'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import React, { useState } from 'react'
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { stateToHTML } from 'draft-js-export-html'
import { Button, Modal } from 'react-bootstrap';
import { useHistory } from "react-router-dom"
import { GetTemplates, updateTemplate, removeTemplate } from "../api/FireApi"
/**
 * Private Visability
 * Allows listing of templates
 */
function TemplateList() {
  const history = useHistory()
  const [show, setShow] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [eTitle, setTitle] = useState('')
  const [valID, getValID] = useState('')
  const [title, getValTitle] = useState('')
  const [description, setDescription] = useState('')
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // Calls 'GetTemplates' function to query usre's created templates
  let templates = GetTemplates(eTitle, description)
  // Handle title update
  const handleInput = event => {
    setTitle(event.target.value)
  };
  // Loads HTML for in-text editor inside Modal
  function loadHTML(htmlInput) {
    const contentState = convertFromRaw(htmlInput);
    const editorState = EditorState.createWithContent(contentState);
    setDescription(editorState);
  }
  // Calls 'updateTemplate' function to update user's template values
  const handleModelSubmit = () => {
    const raw = convertToRaw(description.getCurrentContent())
    const editedHTML = stateToHTML(description.getCurrentContent())
    updateTemplate(valID, eTitle, editedHTML, raw)
    setDescription(EditorState.createEmpty())
  }
  // Calls 'removeTemplate' function to remove user's template
  const deleteTemplate = id => {
    removeTemplate(id)
  };
  // Sends the user, template's title and HTML to 'EditTemlpateSample' module
  async function SendTemplate(title, html) {
    try {
      localStorage.setItem('templateChoiceCustom', title);
      localStorage.setItem('templateHTMLCustom', html);
      history.push('/edittemplatecustom');
    } catch(e) {
      console.log("Error Sending Template", e.message);
    }
  }
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
    <div>
      <div>
        <div className="center">
          <h4 className="center">Custom Templates</h4>
            <input
              className="form-control form-control-lg"
              id="searchbar"
              type='text'
              placeholder="Type here to search by title"   
              onChange={event => {setSearchTerm(event.target.value)}}   
            />
          </div>
        <br/>
        <ul className="list-group">
        {templates.filter((val) => {
          if (searchTerm == "") {return val} 
          else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {return val}
          else if (val.dateCreated.includes(searchTerm)) {return val}})
          .map(val => (
            <li key={val.id} className="list-group-item list-group-item-secondary d-flex">
              <p className="p-0 m-0 flex-grow-1">
                <strong>Title:</strong> {val.title}<br />
                <strong>Created:</strong> {val.dateCreated}<br />
                <strong>HTML:</strong> {val.html}
                {console.log("Loaded:", templates.length, "templates")}
              </p> 
              <button className="btn btn-primary extra-btn" onClick={() => {SendTemplate(val.title, val.html)}}>Send</button>
              <button type="button" className="btn btn-secondary extra-btn" 
                onClick={() => {handleShow(); getValID(val.id); getValTitle(val.title); loadHTML(val.rawHTML);}} >Edit</button>
              <button className="btn btn-danger extra-btn" onClick={() => deleteTemplate(val.id)}>Delete</button>
            </li>
          ))}
        </ul>
        <Modal size="lg" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Editor</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div>
              Title
              <br/>
              <input placeholder={title} onChange={handleInput} type="text"/>
            </div>
            <div>
              HTML
              <br/>
              <Editor
                editorState={description}
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
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => {handleClose()}}>
              Close
            </Button>
            <Button variant="primary" onClick={() => {handleClose(); handleModelSubmit();}}>
              Save It!
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </div>
  )
}

export default TemplateList;
