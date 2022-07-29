import React, { Component, Fragment } from 'react'

 class Profile extends Component {
   render() {
    
    let name;
    let email;
    if(this.props.user){
         name = this.props.user.name;
         email = this.props.user.email;
     }
     
    return (
        <Fragment> 
            
            <h1> User Profile page </h1>

            <ul className="list-group">

                <li class="list-group-item">Name: {name} </li>
                <li class="list-group-item">Email: {email} </li>

            </ul>
            
  </Fragment>
    )
  }
}

export default Profile