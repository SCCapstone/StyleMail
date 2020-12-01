import React, {Component} from 'react'
import TemplateEdit from './TemplateEdit'
import {ReactComponent as ReactLogo} from './Images/editPic.svg';
import {ReactComponent as ReactLogo2} from './Images/deletePic.svg';
import {ReactComponent as ReactLogo3} from './Images/add.svg';
import {ReactComponent as ReactLogo4} from './Images/square.svg';
import './Template.css'



class Template extends Component {     
  constructor(props) {
    super(props);   

    this.state = {
      editMenuOpen: false,      
      starterData: [
        {
          id: Math.floor(Math.random() * 1000),
          title: "Happy Easter:",          
        },
        {
          id: Math.floor(Math.random() * 1000),
          title: "Finance Memo.",    
        },
        {
          id: Math.floor(Math.random() * 1000),
          title: "Birthday Card",
        }
      ]
    };
  }  

  addItem(e) {
    e.preventDefault();
    this.setState({
      starterData: [
        ...this.state.starterData,
        {
          id: Math.floor(Math.random() * 1000),
          title: e.target.item.value,
        }
      ]
    });
    e.target.item.value = "";
  }

  deleteItem() {
    let id = arguments[0];
    this.setState({
      starterData: this.state.starterData.filter((item) => {
        if (item.id !== id) {
          return item;
        }
        else {
            return null;
        }
      })
    });
  }      
  
  
  updateTemplate(e) {
    e.preventDefault();
    
    this.setState({
      starterData: this.state.starterData.map((item) => {
        if (item.id === this.state.id) {
          item["title"] = e.target.updatedItem.value;
          return item;
        }
        return item;
      })
    });
    this.setState({
        editMenuOpen: false
    });
  }
  onEditHandle(e) {
    this.setState({
        editMenuOpen: true,
      id: arguments[0],
      title: arguments[1]
    });
  }
  
  handleBack() {
    console.log("hee");
    this.setState({
      editMenuOpen: false,    
  });

  }



  render() {
    return (
        <div className = "idk"> 

           {this.state.editMenuOpen ? (
            <>
             <TemplateEdit/>


             <button Back
               onClick={()=> this.setState({editMenuOpen: false})}
              >
                Back
             </button>
            </>
           ) : (
            <>                             
                <h1>Manage Templates</h1>             
                <form onSubmit={this.addItem.bind(this)}>
                 <input 
                type="text" 
                name="item" 
                className="item" 
                />
                <button 
                className="AddTemplate">
                  <ReactLogo3/>
                    New Template
                  </button>
                </form>        
                {this.state.starterData.map((item) => (
                <ul>                          
                 
                {item.title}
                <br/>
                <ReactLogo4/>
                <button 
                class = "deleteBtn"
                 onClick={this.deleteItem.bind(this, item.id)}>
                <ReactLogo2/>
                </button>      
                <button
                  class = "editBtn"
                  onClick={this.onEditHandle.bind(this, item.id, item.title)}
                  >
                    <ReactLogo />
                </button>   
                
              <div> 
                <br/>
              </div>          


            </ul> 
            ))}   
            
            </>
            )}                   
      </div>
    );
  }
}

export default Template;
