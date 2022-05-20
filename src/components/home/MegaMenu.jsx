import React, { Component, Fragment } from 'react'


export class MegaMenu extends Component {
  render() {
    return (
    <div className='accordionMenuDiv'>
      <div className='accordionMenuDivInside'> 
      <button className='accordion'>
      <img className='accordionMenuIcon' src="https://cdn-icons-png.flaticon.com/512/3342/3342212.png" alt=' Menu Icon'   /> Men's Clothing
      
      </button>
<div className='panel'>
  <ul>
    <li><a href='#' className='accordionItem'>Mans Tshirt</a></li>
    <li><a href='#' className='accordionItem'>Mans Tshirt</a></li>
    <li><a href='#' className='accordionItem'>Mans Tshirt</a></li>
    <li><a href='#' className='accordionItem'>Mans Tshirt</a></li>
    <li><a href='#' className='accordionItem'>Mans Tshirt</a></li>
  </ul>

</div>

      </div>

    </div>
    )
  }
}

export default MegaMenu
