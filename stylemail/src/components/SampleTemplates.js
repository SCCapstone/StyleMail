import React from "react"
import NavBar from "./NavBar"
import Footer from "./Footer"
/* Importing thumbnails */
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

/**
 * Private Visability
 * Allows authenticated user to pick from premade templates
 */
class SampleTemplates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      templateName: '',
    };
  }

  // Handles collecting and sending the selected template to send page
  ChangeHandler = (event) => {
    // eslint-disable-next-line react/no-direct-mutation-state
    this.state.templateName = event.target.id;

    localStorage.setItem('templateChoiceSample', this.state.templateName);
    this.props.history.push('/edittemplatesample');
  }

  render() {
    return (
        <div style={{backgroundColor: 'white'}}>
          <NavBar />
          <br/>
            <h1 className="text-center">Pick a Template</h1>
              
              <div className="d-flex flex-wrap justify-content-center">
              <img 
              src={getWEll}
              width = '300'
              height = '150'                 
              className="btn btn-outline-dark" 
              id="Get Well" 
              onClick={this.ChangeHandler}
              alt="Get Well Template"
              />

             <img 
              src={teacher}
              width = '300'
              height = '150'            
              className="btn btn-outline-dark" 
              id="Teacher Appreciation" 
              onClick={this.ChangeHandler}
              alt="Teacher Template"
              />         
             <br></br>

             <img 
              src={grad}
              width = '300'
              height = '150'            
              className="btn btn-outline-dark" 
              id="Graduation Announcement" 
              onClick={this.ChangeHandler}
              alt="Grad Template"
              />         
             <br></br>
             <img 
              src={savedate}
              width = '300'
              height = '150'            
              className="btn btn-outline-dark" 
              id="Save The Date" 
              onClick={this.ChangeHandler}
              alt="Save the Date Template"
              />         
             <br></br>
             <img 
              src={thankyou}
              width = '300'
              height = '150'            
              className="btn btn-outline-dark" 
              id="Thank You" 
              onClick={this.ChangeHandler}
              alt="Thank you Template"
              />         
             <br></br>

             <img 
              src={val}
              width = '300'
              height = '150'             
              
              className="btn btn-outline-dark" 
              id="Valentines Day" 
              onClick={this.ChangeHandler}
              alt="Valentines Template"
              />         
             <br></br>

             <img 
              src={hb}
              width = '300'
              height = '150'
              className="btn btn-outline-dark" 
              id="Happy Birthday" 
              onClick={this.ChangeHandler}
              alt="Happy Birthday Template"
              />         
             <br></br>

             <img 
              src={memo}
              width = '300'
              height = '150'
              className="btn btn-outline-dark" 
              id="Business Memo" 
              onClick={this.ChangeHandler}
              alt="Memo Template"
              />         
             <br></br>

             <img 
              src={luck}
              width = '300'
              height = '150'
              className="btn btn-outline-dark" 
              id="Good Luck" 
              onClick={this.ChangeHandler}
              alt="Good Luck Template"
              />         
             <br></br>

             <img 
              src={christmas}
              width = '300'
              height = '150'           
              className="btn btn-outline-dark" 
              id="Christmas" 
              onClick={this.ChangeHandler}
              alt="Christmas Template"
              />
              </div>  
             <br/>
            <Footer></Footer>
        </div>
    );
  }
}

export default SampleTemplates;