import React from "react" //, { useState }
import NavBar from "./NavBar"
import  "./Dashboard.css"
import Footer from "./Footer"

class SampleTemplates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      templateName: '',
    };
  }

ChangeHandler = (event) => {
  // eslint-disable-next-line react/no-direct-mutation-state
  this.state.templateName = event.target.id;

  localStorage.setItem('templateChoiceSample', this.state.templateName);
  //window.location.href='/edittemplatesample';
  this.props.history.push('/edittemplatesample');
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
            <button className="btn btn-outline-dark" id="Good Luck" onClick={this.ChangeHandler}>Good Luck</button>
            <div>
              <br></br>
            </div>
            <button className="btn btn-outline-dark" id="Christmas" onClick={this.ChangeHandler}>Christmas</button>
            <div>
              <br></br>
            </div>
            <Footer></Footer>
        </div>
    );
}
}

export default SampleTemplates;