import React, { Component, Fragment } from 'react'


class MegaMenu extends Component {
  constructor(){
    super();
  
}

MenuItemClick=(event)=>{
event.target.classList.toggle("active");
var panel = event.target.nextElementSibling;
if(panel.style.maxHeight){
     panel.style.maxHeight = null;
}else{
     panel.style.maxHeight= panel.scrollHeight+ "px"
}

}




  render() {
    return (
      <div className="accordionMenuDiv">
        <div className="accordionMenuDivInside">


        <button onClick={this.MenuItemClick} className="accordion">
            <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/512/3342/3342212.png" alt=' Menu Icon' />&nbsp; Men's Clothing

          </button>

          <div className="panel">
            <ul>
              <li><a href="#" className="accordionItem" > Mans Tshirt 1</a></li>
              <li><a href="#" className="accordionItem" > Mans Tshirt 2</a></li>
            </ul>

          </div>
          <button onClick={this.MenuItemClick} className="accordion">
            <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/512/3342/3342212.png" alt=' Menu Icon' />&nbsp; Men's Clothing

          </button>

          <div className="panel">
            <ul>
              <li><a href="#" className="accordionItem" > Mans Tshirt 1</a></li>
              <li><a href="#" className="accordionItem" > Mans Tshirt 2</a></li>
            </ul>

          </div>


          <button onClick={this.MenuItemClick} className="accordion">
            <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/512/3342/3342212.png" alt=' Menu Icon' />&nbsp; Men's Clothing

          </button>

          <div className="panel">
            <ul>
              <li><a href="#" className="accordionItem" > Mans Tshirt 1</a></li>
              <li><a href="#" className="accordionItem" > Mans Tshirt 2</a></li>
            </ul>

          </div>

          <button onClick={this.MenuItemClick} className="accordion">
            <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/512/3342/3342212.png" alt=' Menu Icon' />&nbsp; Men's Clothing

          </button>

          <div className="panel">
            <ul>
              <li><a href="#" className="accordionItem" > Mans Tshirt 1</a></li>
              <li><a href="#" className="accordionItem" > Mans Tshirt 2</a></li>
            </ul>

          </div>

          <button onClick={this.MenuItemClick} className="accordion">
            <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/512/3342/3342212.png" alt=' Menu Icon' />&nbsp; Men's Clothing

          </button>

          <div className="panel">
            <ul>
              <li><a href="#" className="accordionItem" > Mans Tshirt 1</a></li>
              <li><a href="#" className="accordionItem" > Mans Tshirt 2</a></li>
            </ul>

          </div>

          <button onClick={this.MenuItemClick} className="accordion">
            <img className="accordionMenuIcon" src="https://cdn-icons-png.flaticon.com/512/3342/3342212.png" alt=' Menu Icon' />&nbsp; Men's Clothing

          </button>

          <div className="panel">
            <ul>
              <li><a href="#" className="accordionItem" > Mans Tshirt 1</a></li>
              <li><a href="#" className="accordionItem" > Mans Tshirt 2</a></li>
            </ul>

          </div>
        </div>

      </div>
    )
  }
}

export default MegaMenu
