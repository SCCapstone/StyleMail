/* eslint-disable array-callback-return */
/* eslint-disable eqeqeq */
import './CustomTemplates.css'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import Footer from "./Footer"
import NavBar from "./NavBar"
import React, { useState, useRef } from 'react'
import { EditorState, convertToRaw, convertFromRaw } from 'draft-js';
import { convertToHTML } from 'draft-convert'
import { Editor } from 'react-draft-wysiwyg';
import { stateToHTML } from 'draft-js-export-html'
import { Modal, Form, InputGroup, FormControl, Button, Alert } from 'react-bootstrap';
import { useHistory } from "react-router-dom"
import { GetTemplates, GetTemplateNum, addTemplate, updateTemplate, removeTemplate } from "../api/FireApi"
/**
 * Private Visability
 * Allows listing and adding of templates
 */
function CustomTemplates() {
  const history = useHistory()
  const [editShow, setEditShow] = useState(false)
  const [addShow, setAddShow] = useState(false)
  const [deleteShow, setDeleteShow] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [valID, getValID] = useState('')
  const [title, getValTitle] = useState('')
  const titleRef = useRef()
  const [description, setDescription] = useState(() => EditorState.createEmpty())
  const handleEditClose = () => setEditShow(false)
  const handleEditShow = () => setEditShow(true)
  const handleAddShow = () => setAddShow(true)
  const handleAddClose = () => setAddShow(false)
  const handleDeleteClose = () => setDeleteShow(false)
  const handleDeleteShow = () => setDeleteShow(true)
  const [newTemplate, setNewTemplate] = useState({
    title: '',
    html: '',
    dateCreated: '',
  })

  // Calls 'addTemplate' function to create a new template in user's sub-collection
  const handleAddSubmit = e => {
    e.preventDefault()
    setNewTemplate({
      title: '',
      html: stateToHTML(description.getCurrentContent()),
      dateCreated: '',
      rawHTML: convertToRaw(description.getCurrentContent()),
    });
    const html = convertToHTML({
      styleToHTML: (style) => {
        switch (style) {
          case 'color-rgb(26,188,156)':
            return <span style={{color: 'rgb(26,188,156)'}} />;
          case 'color-rgb(84,172,210)':
            return <span style={{color: 'rgb(84,172,210)'}} />;
          case 'color-rgb(204,204,204)':
            return <span style={{color: 'rgb(204,204,204)'}} />;
          case 'color-rgb(61,142,185)':
            return <span style={{color: 'rgb(61,142,185)'}} />;
          case 'color-rgb(65,168,95)':
            return <span style={{color: 'rgb(65,168,95)'}} />;
          case 'color-rgb(0,168,133)':
            return <span style={{color: 'rgb(0,168,133)'}} />;
          case 'color-rgb(97,189,109)':
            return <span style={{color: 'rgb(97,189,109)'}} />;
          case 'color-rgb(71,85,119)':
            return <span style={{color: 'rgb(71,85,119)'}} />;
          case 'color-rgb(147,101,184)':
            return <span style={{color: 'rgb(147,101,184)'}} />;
          case 'color-rgb(41,105,176)':
            return <span style={{color: 'rgb(41,105,176)'}} />;
          case 'color-rgb(44,130,201)':
            return <span style={{color: 'rgb(44,130,201)'}} />;
          case 'color-rgb(85,57,130)':
            return <span style={{color: 'rgb(85,57,130)'}} />;
          case 'color-rgb(243,121,52)':
            return <span style={{color: 'rgb(243,121,52)'}} />;
          case 'color-rgb(251,160,38)':
            return <span style={{color: 'rgb(251,160,38)'}} />;
          case 'color-rgb(209,213,216)':
            return <span style={{color: 'rgb(209,213,216)'}} />;
          case 'color-rgb(40,50,78)':
            return <span style={{color: 'rgb(40,50,78)'}} />;
          case 'color-rgb(250,197,28)':
            return <span style={{color: 'rgb(250,197,28)'}} />;
          case 'color-rgb(184,49,47)':
            return <span style={{color: 'rgb(184,49,47)'}} />;
          case 'color-rgb(247,218,100)':
            return <span style={{color: 'rgb(247,218,100)'}} />;
          case 'color-rgb(124,112,107)':
            return <span style={{color: 'rgb(124,112,107)'}} />;
          case 'color-rgb(209,72,65)':
            return <span style={{color: 'rgb(209,72,65)'}} />;
          case 'color-rgb(255,255,255)':
            return <span style={{color: 'rgb(255,255,255)'}} />;
          case 'color-rgb(226,80,65)':
            return <span style={{color: 'rgb(226,80,65)'}} />;
          case 'color-rgb(0,0,0)':
            return <span style={{color: 'rgb(0,0,0)'}} />;
          case 'color-rgb(163,143,132)':
            return <span style={{color: 'rgb(163,143,132)'}} />;
          case 'color-rgb(235,107,86)':
            return <span style={{color: 'rgb(235,107,86)'}} />;
          case 'color-rgb(239,239,239)':
            return <span style={{color: 'rgb(239,239,239)'}} />;
          case 'fontsize-8':
            return <span style={{fontSize: '8x'}} />;
          case 'fontsize-9':
            return <span style={{fontSize: '9x'}} />;
          case 'fontsize-10':
            return <span style={{fontSize: '10x'}} />;
          case 'fontsize-11':
            return <span style={{fontSize: '11x'}} />;
          case 'fontsize-12':
            return <span style={{fontSize: '12x'}} />;
          case 'fontsize-14':
            return <span style={{fontSize: '14x'}} />;
          case 'fontsize-16':
            return <span style={{fontSize: '16x'}} />;
          case 'fontsize-18':
            return <span style={{fontSize: '18x'}} />;
          case 'fontsize-24':
            return <span style={{fontSize: '24x'}} />;
          case 'fontsize-30':
            return <span style={{fontSize: '30x'}} />;
          case 'fontsize-36':
            return <span style={{fontSize: '36x'}} />;
          case 'fontsize-48':
            return <span style={{fontSize: '48x'}} />;
          case 'fontsize-60':
            return <span style={{fontSize: '60x'}} />;
          case 'fontsize-72':
            return <span style={{fontSize: '72x'}} />;
          case 'fontsize-96':
            return <span style={{fontSize: '96x'}} />;
          case 'fontfamily-Arial':
            return <span style={{fontFamily: 'Arial'}} />;
          case 'fontfamily-Georgia':
            return <span style={{fontFamily: 'Georgia'}} />;
          case 'fontfamily-Impact':
            return <span style={{fontFamily: 'Impact'}} />;
          case 'fontfamily-Tahoma':
            return <span style={{fontFamily: 'Tahoma'}} />;
          case 'fontfamily-Times New Roman':
            return <span style={{fontFamily: 'Times New Roman'}} />;
          case 'fontfamily-Verdana':
            return <span style={{fontFamily: 'Verdana'}} />;
          default:
            return null;
        }
      },
      entityToHTML: (entity, originalText) => {
        if (entity.type === 'LINK') {
          return <a href={entity.data.url}>{originalText}</a>;
        }
        return originalText;
      }
    })(description.getCurrentContent());
    addTemplate(newTemplate, html, convertToRaw(description.getCurrentContent()))
    setDescription(EditorState.createEmpty())
    handleAddClose()
  };

  // Handle title change
  const handleAddChange = e => {
    setNewTemplate({ ...addTemplate, [e.target.name]: e.target.value});
  };
  
  // Calls 'GetTemplates' function to query usre's created templates
  let templates = GetTemplates()

  // Calls 'GetTemplateNum' funciton to check the number of templates present
  // returns true or false
  let noTemps = GetTemplateNum();

  // Loads HTML for in-text editor inside Modal
  function loadHTML(htmlInput) {
    const contentState = convertFromRaw(htmlInput);
    const editorState = EditorState.createWithContent(contentState);
    setDescription(editorState);
  }
  
  // Calls 'updateTemplate' function to update user's template values
  const handleEditSubmit = e => {
    e.preventDefault()
    const raw = convertToRaw(description.getCurrentContent())
    //const editedHTML = stateToHTML(description.getCurrentContent())
    const editedHTML = convertToHTML({
      styleToHTML: (style) => {
        switch (style) {
          case 'color-rgb(26,188,156)':
            return <span style={{color: 'rgb(26,188,156)'}} />;
          case 'color-rgb(84,172,210)':
            return <span style={{color: 'rgb(84,172,210)'}} />;
          case 'color-rgb(204,204,204)':
            return <span style={{color: 'rgb(204,204,204)'}} />;
          case 'color-rgb(61,142,185)':
            return <span style={{color: 'rgb(61,142,185)'}} />;
          case 'color-rgb(65,168,95)':
            return <span style={{color: 'rgb(65,168,95)'}} />;
          case 'color-rgb(0,168,133)':
            return <span style={{color: 'rgb(0,168,133)'}} />;
          case 'color-rgb(97,189,109)':
            return <span style={{color: 'rgb(97,189,109)'}} />;
          case 'color-rgb(71,85,119)':
            return <span style={{color: 'rgb(71,85,119)'}} />;
          case 'color-rgb(147,101,184)':
            return <span style={{color: 'rgb(147,101,184)'}} />;
          case 'color-rgb(41,105,176)':
            return <span style={{color: 'rgb(41,105,176)'}} />;
          case 'color-rgb(44,130,201)':
            return <span style={{color: 'rgb(44,130,201)'}} />;
          case 'color-rgb(85,57,130)':
            return <span style={{color: 'rgb(85,57,130)'}} />;
          case 'color-rgb(243,121,52)':
            return <span style={{color: 'rgb(243,121,52)'}} />;
          case 'color-rgb(251,160,38)':
            return <span style={{color: 'rgb(251,160,38)'}} />;
          case 'color-rgb(209,213,216)':
            return <span style={{color: 'rgb(209,213,216)'}} />;
          case 'color-rgb(40,50,78)':
            return <span style={{color: 'rgb(40,50,78)'}} />;
          case 'color-rgb(250,197,28)':
            return <span style={{color: 'rgb(250,197,28)'}} />;
          case 'color-rgb(184,49,47)':
            return <span style={{color: 'rgb(184,49,47)'}} />;
          case 'color-rgb(247,218,100)':
            return <span style={{color: 'rgb(247,218,100)'}} />;
          case 'color-rgb(124,112,107)':
            return <span style={{color: 'rgb(124,112,107)'}} />;
          case 'color-rgb(209,72,65)':
            return <span style={{color: 'rgb(209,72,65)'}} />;
          case 'color-rgb(255,255,255)':
            return <span style={{color: 'rgb(255,255,255)'}} />;
          case 'color-rgb(226,80,65)':
            return <span style={{color: 'rgb(226,80,65)'}} />;
          case 'color-rgb(0,0,0)':
            return <span style={{color: 'rgb(0,0,0)'}} />;
          case 'color-rgb(163,143,132)':
            return <span style={{color: 'rgb(163,143,132)'}} />;
          case 'color-rgb(235,107,86)':
            return <span style={{color: 'rgb(235,107,86)'}} />;
          case 'color-rgb(239,239,239)':
            return <span style={{color: 'rgb(239,239,239)'}} />;
          case 'fontsize-8':
            return <span style={{fontSize: '8x'}} />;
          case 'fontsize-9':
            return <span style={{fontSize: '9x'}} />;
          case 'fontsize-10':
            return <span style={{fontSize: '10x'}} />;
          case 'fontsize-11':
            return <span style={{fontSize: '11x'}} />;
          case 'fontsize-12':
            return <span style={{fontSize: '12x'}} />;
          case 'fontsize-14':
            return <span style={{fontSize: '14x'}} />;
          case 'fontsize-16':
            return <span style={{fontSize: '16x'}} />;
          case 'fontsize-18':
            return <span style={{fontSize: '18x'}} />;
          case 'fontsize-24':
            return <span style={{fontSize: '24x'}} />;
          case 'fontsize-30':
            return <span style={{fontSize: '30x'}} />;
          case 'fontsize-36':
            return <span style={{fontSize: '36x'}} />;
          case 'fontsize-48':
            return <span style={{fontSize: '48x'}} />;
          case 'fontsize-60':
            return <span style={{fontSize: '60x'}} />;
          case 'fontsize-72':
            return <span style={{fontSize: '72x'}} />;
          case 'fontsize-96':
            return <span style={{fontSize: '96x'}} />;
          case 'fontfamily-Arial':
            return <span style={{fontFamily: 'Arial'}} />;
          case 'fontfamily-Georgia':
            return <span style={{fontFamily: 'Georgia'}} />;
          case 'fontfamily-Impact':
            return <span style={{fontFamily: 'Impact'}} />;
          case 'fontfamily-Tahoma':
            return <span style={{fontFamily: 'Tahoma'}} />;
          case 'fontfamily-Times New Roman':
            return <span style={{fontFamily: 'Times New Roman'}} />;
          case 'fontfamily-Verdana':
            return <span style={{fontFamily: 'Verdana'}} />;
          default:
            return null;
        }
      },
      blockToHTML: (blocks) => {
        if (blocks.type.data === 'center') {
          return <span style={{textAlign: 'center'}} />;
        }
      },
      entityToHTML: (entity, originalText) => {
        if (entity.type === 'LINK') {
          return <a href={entity.data.url}>{originalText}</a>;
        }
        return originalText;
      }
    })(description.getCurrentContent());
    updateTemplate(valID, titleRef.current.value, editedHTML, raw) //eTitle
    setDescription(EditorState.createEmpty())
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
            <h4 style={{padding: '10px 0px 10px 0px'}}>Custom Templates</h4>
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
            <Alert show={noTemps} style={{textAlign: 'center'}}>
              No Templates
          </Alert>
          </div>
          <br></br>
          <br></br>
          <ul className="list-group" style={{padding: '0px 20px 20px 20px'}}>
            {templates.filter((val) => {
              if (searchTerm === "") {return val}
              else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {return val}
              else if (val.dateCreated.includes(searchTerm)) {return val}})
              .map(val => (
              <li key={val.id} className="list-group-item list-group-item-secondary d-flex">
                <p className="p-0 m-0 flex-grow-1" style={{width: '650px'}}>
                  <strong>Title:</strong> {val.title}<br />
                  <strong>Created:</strong> {val.dateCreated}<br />
                  <strong>HTML:</strong> {val.html}
                </p>
                <div>
                  <button style={{margin: '20px 10px 20px 5px', width: '72px', height: '38px'}}  className="btn btn-primary" 
                    onClick={() => {SendTemplate(val.title, val.html)}}>Send</button>
                  <button type="button" style={{margin: '20px 10px 20px 0px', width: '72px', height: '38px'}} className="btn btn-secondary" 
                    onClick={() => {handleEditShow(); getValID(val.id); getValTitle(val.title); loadHTML(val.rawHTML);}} >Edit</button>
                  <button style={{margin: '20px 10px 20px 0px', width: '72px', height: '38px'}}  className="btn btn-danger" 
                    onClick={() => {getValID(val.id); handleDeleteShow()}}>Delete</button>
                </div>
              </li>
            ))}
          </ul>
          <Modal show={deleteShow} onHide={handleDeleteClose} backdrop="static" keyboard={false} centered>
            <Modal.Header style={{justifyContent: 'center', fontSize: '20px'}}>Are you sure?</Modal.Header>
            <Modal.Body style={{textAlign: 'center'}}>
              <span>Deleting this template will remove it forever!</span>
            </Modal.Body>
            <Modal.Footer>
              <button className="btn btn-secondary" onClick={() => {handleDeleteClose()}}>
                Close
              </button>
              <button className="btn btn-danger" onClick={() => {deleteTemplate(valID); handleDeleteClose()}}>
                Delete
              </button>
            </Modal.Footer>
          </Modal>
          <Modal show={editShow} onHide={handleEditClose} backdrop="static" keyboard={false} size="lg" centered>
            <Modal.Header style={{justifyContent: 'center', fontSize: '20px'}}>Edit Template</Modal.Header>
            <Modal.Body>
              <Form onSubmit={handleEditSubmit}>
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
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </div>
      <Footer/>
    </div>
  )
}

export default CustomTemplates;