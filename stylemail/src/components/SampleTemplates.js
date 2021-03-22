import React from "react" //, { useState }
import NavBar from "./NavBar"
import  "./Dashboard.css"
import Footer from "./Footer"
import getWEll from './Images/getwell.JPG'
import grad from './Images/gradpic.JPG'
import teacher from './Images/teacher.JPG'
import savedate from './Images/savedate.JPG'
import thankyou from './Images/thankyou.JPG'
import val from './Images/Val.JPG'
import hb from './Images/hb.JPG'
import memo from './Images/memo.JPG'
import luck from './Images/luck.JPG'
import christmas from './Images/christmas.JPG'

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
            
              <br></br>
              <img 
              src={getWEll}
              width = '300'
              height = '150'                 
              className="btn btn-outline-dark" 
              id="Get Well" 
              onClick={this.ChangeHandler}
              />         
             <br></br>
            

             <img 
              src={teacher}
              width = '300'
              height = '150'            
              className="btn btn-outline-dark" 
              id="Teacher Appreciation" 
              onClick={this.ChangeHandler}
              />         
             <br></br>

             <img 
              src={grad}
              width = '300'
              height = '150'            
              className="btn btn-outline-dark" 
              id="Grad Announcement" 
              onClick={this.ChangeHandler}
              />         
             <br></br>
             <img 
              src={savedate}
              width = '300'
              height = '150'            
              className="btn btn-outline-dark" 
              id="Save The Date" 
              onClick={this.ChangeHandler}
              />         
             <br></br>
             <img 
              src={thankyou}
              width = '300'
              height = '150'            
              className="btn btn-outline-dark" 
              id="Thank You" 
              onClick={this.ChangeHandler}
              />         
             <br></br>

             <img 
              src={val}
              width = '300'
              height = '150'             
              
              className="btn btn-outline-dark" 
              id="Valentines" 
              onClick={this.ChangeHandler}
              />         
             <br></br>

             <img 
              src={hb}
              width = '300'
              height = '150'             
              
              className="btn btn-outline-dark" 
              id="Happy Birthday" 
              onClick={this.ChangeHandler}
              />         
             <br></br>

             <img 
              src={memo}
              width = '300'
              height = '150'             
              
              className="btn btn-outline-dark" 
              id="Business Memo" 
              onClick={this.ChangeHandler}
              />         
             <br></br>

             <img 
              src={luck}
              width = '300'
              height = '150'             
              
              className="btn btn-outline-dark" 
              id="Good Luck" 
              onClick={this.ChangeHandler}
              />         
             <br></br>

             <img 
              src={christmas}
              width = '300'
              height = '150'           
              className="btn btn-outline-dark" 
              id="Christmas" 
              onClick={this.ChangeHandler}
              />         
             <br></br>

            <Footer></Footer>
        </div>
    );
}
}

export default SampleTemplates;