import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom';

 class Profile extends Component {
   render() {
    
    let name;
    let email;
    if(this.props.user){
         name = this.props.user.name;
         email = this.props.user.email;
     }

     // if user is not logged in, redirect to login page
     if (!localStorage.getItem('token')) {
        return <Redirect to="/login"/>
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