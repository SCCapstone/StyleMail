/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
import './CustomTemplates.css'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Footer from "./Footer"
import NavBar from "./NavBar"
import React, { useState, useRef } from 'react'
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { stateToHTML } from 'draft-js-export-html'
import { Modal, Form, InputGroup, FormControl, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom"
import { GetTemplates, addTemplate, updateTemplate, removeTemplate } from "../api/FireApi"
/**
 * Private Visability
 * Allows listing and adding of templates
 */
function CustomTemplates() {
  const history = useHistory()
  const [editShow, setEditShow] = useState(false)
  const [addShow, setAddShow] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [valID, getValID] = useState('')
  const [title, getValTitle] = useState('')
  const titleRef = useRef()
  const [description, setDescription] = useState(() => EditorState.createEmpty());
  const handleEditClose = () => setEditShow(false);
  const handleEditShow = () => setEditShow(true);
  const handleAddShow = () => setAddShow(true);
  const handleAddClose = () => setAddShow(false);
  const [newTemplate, setNewTemplate] = useState({
    title: '',
    html: '',
    dateCreated: '',
  });

  // Calls 'addTemplate' function to create a new template in user's sub-collection
  const handleAddSubmit = e => {
    e.preventDefault()
    setNewTemplate({
      title: '',
      html: stateToHTML(description.getCurrentContent()),
      dateCreated: '',
      rawHTML: convertToRaw(description.getCurrentContent()),
    });
    addTemplate(newTemplate, stateToHTML(description.getCurrentContent()), convertToRaw(description.getCurrentContent()))
    setDescription(EditorState.createEmpty())
    handleAddClose()
  };

  // Handle title change
  const handleAddChange = e => {
    setNewTemplate({ ...addTemplate, [e.target.name]: e.target.value});
  };
  
  // Calls 'GetTemplates' function to query usre's created templates
  let templates = GetTemplates()

  // Loads HTML for in-text editor inside Modal
  function loadHTML(htmlInput) {
    const contentState = convertFromRaw(htmlInput);
    const editorState = EditorState.createWithContent(contentState);
    setDescription(editorState);
  }
  
  // Calls 'updateTemplate' function to update user's template values
  const handleModelSubmit = e => {
    e.preventDefault()
    const raw = convertToRaw(description.getCurrentContent())
    const editedHTML = stateToHTML(description.getCurrentContent())
    updateTemplate(valID, titleRef.current.value, editedHTML, raw) //eTitle
    handleEditClose()
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
  
  return (
    <div>
      <NavBar/>
        <div style={{backgroundColor: 'white'}}>
          <div style={{margin: '0px 60px 0px 60px'}}>
          <div className="text-center">
            <h4 style={{padding: '10px 0px 0px 0px', textDecoration: 'underline'}}>Custom Templates</h4>
            <InputGroup style={{textAlign: 'center'}}>
              <FormControl
                id="searchbar"
                type='text'
                placeholder="Type here to search by title or date"   
                onChange={event => {setSearchTerm(event.target.value)}}
              />
              <InputGroup.Append>
                <Button type="button" variant="outline-primary" onClick={() => {handleAddShow()}}>Add Template</Button>
              </InputGroup.Append>
            </InputGroup>
          </div>
          <br/>
          <ul className="list-group" style={{padding: '0px 20px 20px 20px'}}>
            {templates.filter((val) => {
              if (searchTerm === "") {return val} 
              else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {return val}
              else if (val.dateCreated.includes(searchTerm)) {return val}})
              .map(val => (
              <li key={val.id} className="list-group-item list-group-item-secondary d-flex">
                <p className="p-0 m-0 flex-grow-1">
                  <strong>Title:</strong> {val.title}<br />
                  <strong>Created:</strong> {val.dateCreated}<br />
                  <strong>HTML:</strong> {val.html}
                </p> 
                <button style={{margin: '20px 10px 20px 0px'}}  className="btn btn-primary" 
                  onClick={() => {SendTemplate(val.title, val.html)}}>Send</button>
                <button type="button" style={{margin: '20px 10px 20px 0px'}} className="btn btn-secondary" 
                  onClick={() => {handleEditShow(); getValID(val.id); getValTitle(val.title); loadHTML(val.rawHTML);}} >Edit</button>
                <button style={{margin: '20px 10px 20px 0px'}}  className="btn btn-danger" 
                  onClick={() => deleteTemplate(val.id)}>Delete</button>
              </li>
            ))}
          </ul>
          <Modal show={editShow} onHide={handleEditClose} backdrop="static" keyboard={false} size="lg" centered>
            <Modal.Header style={{justifyContent: 'center', fontSize: '20px'}}>Edit Template</Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleModelSubmit}>
                <InputGroup style={{width: '100%'}}>
                  <InputGroup.Prepend>
                    <InputGroup.Text>Title</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl
                    type="text"
                    ref={titleRef}
                    defaultValue={title}
                  />
                </InputGroup>
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
                  }}
                  wrapperStyle={{ border: "2px solid lightgray", marginBottom: "20px", backgroundColor: "#F6F6F6" }}
                  onEditorStateChange={editorState => setDescription(editorState)}
                />
                <Modal.Footer>
                  <button className="btn btn-secondary" onClick={() => {handleEditClose()}}>
                    Close
                  </button>
                  <button className="btn btn-primary" type="submit">
                    Save It!
                  </button>
                </Modal.Footer>
              </Form>
            </Modal.Body>
          </Modal>
          <Modal show={addShow} onHide={handleAddClose} size="lg" centered>
            <Modal.Header style={{justifyContent: 'center', fontSize: '20px'}}>Add Template</Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleAddSubmit}>
                <div style={{paddingBottom: '10px'}} className='input-field center'>
                  <InputGroup style={{width: '100%'}}>
                    <InputGroup.Prepend>
                      <InputGroup.Text>Title</InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      type='text'
                      id='title'
                      name='title'
                      defaultValue={addTemplate.title}
                      onChange={handleAddChange}
                      className='form-control validate'
                      required
                    />
                  </InputGroup>
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
                    }}
                    wrapperStyle={{ border: "2px solid lightgray", marginBottom: "20px", backgroundColor: "#F6F6F6" }}
                    onEditorStateChange={editorState => setDescription(editorState)}
                  />
                  </div>
                  <Modal.Footer>
                    <button className="btn btn-secondary" onClick={() => {handleAddClose()}}>
                      Close
                    </button>
                    <button className="btn btn-primary" type="submit">
                      Add Template
                    </button>
                  </Modal.Footer>
                </Form>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      <Footer/>
    </div>
  )
}

export default CustomTemplates;