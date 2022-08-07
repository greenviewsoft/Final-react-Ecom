import React, { Component, Fragment } from 'react'
import {Navbar,Container, Row, Col,Button,Card,Modal,ListGroup,ListGroupItem} from 'react-bootstrap';
import { Link, Redirect } from 'react-router-dom';
import Ariyan from '../../assets/images/profile.png'


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
          
        
        <div className="section-title text-center mb-55"><h2>User Profile page </h2>
          
        </div>
        <Container className="mt-5">

          <Row>
            
          <Col lg={4} md={4} sm={12} >

          <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Ariyan} className="userprofile" />

  <ListGroup className="list-group-flush">

    <ListGroupItem> <Link className="text-link" to="/orderlist"> <p className="product-name-on-card"> Order List </p></Link> </ListGroupItem>

    <ListGroupItem> <Link className="text-link" to="/orderlist"> <p className="product-name-on-card"> Order List </p></Link> </ListGroupItem>

    <ListGroupItem> <Link className="text-link" to="/orderlist"> <p className="product-name-on-card"> Order List </p></Link> </ListGroupItem>
  </ListGroup>

</Card>
            </Col>
            

                 
            <Col lg={8} md={8} sm={12} >
            <ul className="list-group">

<li class="list-group-item">Name: {name} </li>
<li class="list-group-item">Email: {email} </li>

</ul>

            </Col>
            
</Row>

                  </Container>



           
            
  </Fragment>
    )
  }
}

export default Profile