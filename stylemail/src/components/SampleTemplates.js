import React, { useState } from "react"
import NavBar from "./NavBar"
import  "./Dashboard.css"
import Footer from "./Footer"
import { Link } from "react-router-dom";

class SampleTemplates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      templateName: '',
    };
  }

ChangeHandler = (event) => {
  this.state.templateName = event.target.id;

  localStorage.setItem('templateChoiceSample', JSON.stringify(this.state.templateName));
  window.location.href='/EditTemplateSample'
}

render() {
    return (
        <div>
            <NavBar />
            <h1>Pick a Template</h1>
            <div>
              <br></br>
            </div>
            <button className="btn btn-outline-dark" id="Get Well" onClick={this.ChangeHandler}>Get Well</button>
            <div>
              <br></br>
            </div>
            <button className="btn btn-outline-dark" id="Teacher Appreciation" onClick={this.ChangeHandler}>Teacher Appreciation</button>
            <div>
              <br></br>
            </div>
            <button className="btn btn-outline-dark" id="Grad Announcement" onClick={this.ChangeHandler}>Graduation Announcement</button>
            <div>
              <br></br>
            </div>
            <button className="btn btn-outline-dark" id="Save The Date" onClick={this.ChangeHandler}>Save the Date</button>
            <div>
              <br></br>
            </div>
            <button className="btn btn-outline-dark" id="Thank You" onClick={this.ChangeHandler}>Thank You</button>
            <div>
              <br></br>
            </div>
            <button className="btn btn-outline-dark" id="Valentines" onClick={this.ChangeHandler}>Valentines</button>
            <div>
              <br></br>
            </div>
            <button className="btn btn-outline-dark" id="Happy Birthday" onClick={this.ChangeHandler}>Happy Birthday</button>
            <div>
              <br></br>
            </div>
            <button className="btn btn-outline-dark" id="Business Memo" onClick={this.ChangeHandler}>Business Memo</button>
            <div>
              <br></br>
            </div>
            <Footer></Footer>
        </div>
    );
}
}

export default SampleTemplates;