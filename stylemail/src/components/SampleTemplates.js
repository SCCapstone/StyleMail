import React, { useState } from "react"
import NavBar from "./NavBar"
import  "./Dashboard.css"
import Footer from "./Footer"
import { Link } from "react-router-dom";

//export default function SampleTemplates() {

    const SampleTemplates = props => {
        const [state, setState] = useState({
          template: "",
        });
    
    const TemplateHandler = event => {
        const { name, value } = event.target;
        setState(prevState => ({
          ...prevState,
          [name]: value
        }));
        //console.log(this.template);
      };

      /*function setTemplate(name) {
          let newName = '';
          newName = name;
          this.template = newName;
      }*/

    return (
        <div>
            <NavBar />
            <h1> This will be where you will see our 10 default templates. Picking a template will take you to the edit template page. Add image thumbnail previews for these!</h1>
            <h1>Pick a Template</h1>
            <Link
          className="btn btn-primary" onClick={TemplateHandler}
          to={{
            pathname: "/edittemplate",
            state
          }}
        >
          Get Well
        </Link>
            <h2>Get Well</h2>
            <h2>Teacher Appreciation</h2>
            <h2>Graduation Announcement</h2>
            <h2>Save the Date</h2>
            <h2>Thank You</h2>
            <h2>Valentines</h2>
            <h2>Happy Birthday</h2>
            <h2>Business Memo</h2>
            <Footer></Footer>
        </div>
    )
}
//}
export default SampleTemplates;
