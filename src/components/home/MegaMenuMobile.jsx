import React, { Component } from 'react'

export class MegaMenuMobile extends Component {
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
        <div className="accordionMenuDivMobile">
        <div className="accordionMenuDivInsideMobile">


        <button onClick={this.MenuItemClick} className="accordionMobile">
            <img className="accordionMenuIconMobile" src="https://cdn-icons-png.flaticon.com/512/3342/3342212.png" alt=' Menu Icon' />&nbsp; Men's Clothing

          </button>

          <div className="panelMobile">
            <ul>
              <li><a href="#" className="accordionItemMobile" > Mans Tshirt 1</a></li>
              <li><a href="#" className="accordionItemMobile" > Mans Tshirt 2</a></li>
            </ul>

          </div>
         
          <button onClick={this.MenuItemClick} className="accordionMobile">
            <img className="accordionMenuIconMobile" src="https://cdn-icons-png.flaticon.com/512/3342/3342212.png" alt=' Menu Icon' />&nbsp; Men's Clothing

          </button>

          <div className="panelMobile">
            <ul>
              <li><a href="#" className="accordionItemMobile" > Mans Tshirt 1</a></li>
              <li><a href="#" className="accordionItemMobile" > Mans Tshirt 2</a></li>
            </ul>

          </div>

          <button onClick={this.MenuItemClick} className="accordionMobile">
            <img className="accordionMenuIconMobile" src="https://cdn-icons-png.flaticon.com/512/3342/3342212.png" alt=' Menu Icon' />&nbsp; Men's Clothing

          </button>

          <div className="panelMobile">
            <ul>
              <li><a href="#" className="accordionItemMobile" > Mans Tshirt 1</a></li>
              <li><a href="#" className="accordionItemMobile" > Mans Tshirt 2</a></li>
            </ul>

          </div>

          <button onClick={this.MenuItemClick} className="accordionMobile">
            <img className="accordionMenuIconMobile" src="https://cdn-icons-png.flaticon.com/512/3342/3342212.png" alt=' Menu Icon' />&nbsp; Men's Clothing

          </button>

          <div className="panelMobile">
            <ul>
              <li><a href="#" className="accordionItemMobile" > Mans Tshirt 1</a></li>
              <li><a href="#" className="accordionItemMobile" > Mans Tshirt 2</a></li>
            </ul>

          </div>

          <button onClick={this.MenuItemClick} className="accordionMobile">
            <img className="accordionMenuIconMobile" src="https://cdn-icons-png.flaticon.com/512/3342/3342212.png" alt=' Menu Icon' />&nbsp; Men's Clothing

          </button>

          <div className="panelMobile">
            <ul>
              <li><a href="#" className="accordionItemMobile" > Mans Tshirt 1</a></li>
              <li><a href="#" className="accordionItemMobile" > Mans Tshirt 2</a></li>
            </ul>

          </div>


        </div>
      </div>
    )
  }
}

export default MegaMenuMobile
