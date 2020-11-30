import React, {Component} from 'react'
import TemplateEdit from './TemplateEdit'

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
      })
    });
  }      
  
  
  updateTemplate(event) {
    event.preventDefault();
    
    this.setState({
      starterData: this.state.starterData.map((item) => {
        if (item.id === this.state.id) {
          item["title"] = event.target.updatedItem.value;
          return item;
        }

        return item;
      })
    });
    this.setState({
        editMenuOpen: false
    });
  }
  onEditHandle(event) {
    this.setState({
        editMenuOpen: true,
      id: arguments[0],
      title: arguments[1]
    });
  }
  
  handleBack() {
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
                <button className="Add">Add</button>
                </form>        
                {this.state.starterData.map((item) => (
                <li>                          
                {item.title}
                <button onClick={this.deleteItem.bind(this, item.id)}>
                  X
                </button>      
                <button
                  onClick={this.onEditHandle.bind(this, item.id, item.title)}
                >
                  edit
                </button>       
                              
            </li> 
            ))}   
            
            </>
            )}                   
      </div>
    );
  }
}

export default Template;
