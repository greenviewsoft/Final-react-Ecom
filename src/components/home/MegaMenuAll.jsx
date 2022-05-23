import React, { Component } from 'react'

class MegaMenuAll extends Component {
     constructor(){
          super();
          this.MegaMenu = this.MegaMenu.bind(this);
     }

     componentDidMount(){
          this.MegaMenu();
     }



     MegaMenu(){
          var acc = document.getElementsByClassName("accordionAll");
          var accNum = acc.length;
          var i;
          for(i=0;i<accNum;i++){
               acc[i].addEventListener("click",function (){
                    this.classList.toggle("active");
                    var panel = this.nextElementSibling;
                    if(panel.style.maxHeight){
                         panel.style.maxHeight = null;
                    }else{
                         panel.style.maxHeight= panel.scrollHeight+ "px"
                    }
               })
          }
     }


     render() {
          return (
                <div className="accordionMenuDivAll">
                   <div className="accordionMenuDivInsideAll">


           <button className="accordionAll">
                 <img className="accordionMenuIconAll" src="https://cdn-icons.flaticon.com/png/512/395/premium/395630.png?token=exp=1653299316~hmac=069fc0b7894ef47dce386f11fb7f6fc6" />&nbsp; Men's Clothing 
                        </button>
<div className="panelAll">
     <ul>
          <li><a href="#" className="accordionItemAll" > Mans Tshirt 1</a></li>
          <li><a href="#" className="accordionItemAll" > Mans Tshirt 2</a></li>
     </ul>
</div>

<button className="accordionAll">
                 <img className="accordionMenuIconAll" src="https://cdn-icons.flaticon.com/png/512/395/premium/395630.png?token=exp=1653299316~hmac=069fc0b7894ef47dce386f11fb7f6fc6" />&nbsp; Men's Clothing 
                        </button>
<div className="panelAll">
     <ul>
          <li><a href="#" className="accordionItemAll" > Mans Tshirt 1</a></li>
          <li><a href="#" className="accordionItemAll" > Mans Tshirt 2</a></li>
     </ul>
</div>


<button className="accordionAll">
                 <img className="accordionMenuIconAll" src="https://cdn-icons.flaticon.com/png/512/395/premium/395630.png?token=exp=1653299316~hmac=069fc0b7894ef47dce386f11fb7f6fc6" />&nbsp; Men's Clothing 
                        </button>
<div className="panelAll">
     <ul>
          <li><a href="#" className="accordionItemAll" > Mans Tshirt 1</a></li>
          <li><a href="#" className="accordionItemAll" > Mans Tshirt 2</a></li>
     </ul>
</div>


<button className="accordionAll">
                 <img className="accordionMenuIconAll" src="https://cdn-icons.flaticon.com/png/512/395/premium/395630.png?token=exp=1653299316~hmac=069fc0b7894ef47dce386f11fb7f6fc6" />&nbsp; Men's Clothing 
                        </button>
<div className="panelAll">
     <ul>
          <li><a href="#" className="accordionItemAll" > Mans Tshirt 1</a></li>
          <li><a href="#" className="accordionItemAll" > Mans Tshirt 2</a></li>
     </ul>
</div>


<button className="accordionAll">
                 <img className="accordionMenuIconAll" src="https://cdn-icons.flaticon.com/png/512/395/premium/395630.png?token=exp=1653299316~hmac=069fc0b7894ef47dce386f11fb7f6fc6" />&nbsp; Men's Clothing 
                        </button>
<div className="panelAll">
     <ul>
          <li><a href="#" className="accordionItemAll" > Mans Tshirt 1</a></li>
          <li><a href="#" className="accordionItemAll" > Mans Tshirt 2</a></li>
     </ul>
</div>


<button className="accordionAll">
                 <img className="accordionMenuIconAll" src="https://cdn-icons.flaticon.com/png/512/395/premium/395630.png?token=exp=1653299316~hmac=069fc0b7894ef47dce386f11fb7f6fc6" />&nbsp; Men's Clothing 
                        </button>
<div className="panelAll">
     <ul>
          <li><a href="#" className="accordionItemAll" > Mans Tshirt 1</a></li>
          <li><a href="#" className="accordionItemAll" > Mans Tshirt 2</a></li>
     </ul>
</div>


















                   </div>

              </div>
          )
     }
}

export default MegaMenuAll