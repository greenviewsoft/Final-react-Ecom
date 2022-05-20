import React, { Component, Fragment } from 'react'
import {Navbar,Container, Row, Col,Button} from 'react-bootstrap';
import Logo from '../../assets/images/logo.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export class NavMenuDesktop extends Component {
  render() {
    return (
      <Fragment>
        <div className="TopSectionDown">  
 <Navbar fixed="top" class="navbar"  bg="light  ">
    <Container fluid={"true"} className="fixed-top shadow-sm p-2 mb-0 bg-white">
     <Row>

       <Col className="p-1 mt-1" Lg={4} md={4}  sm={12} xs={12}>
       <Link to="/">  <img  className="nav-logo"  src={Logo} /> </Link>
       
       </Col>

       <Col Lg={4} md={4}  sm={12} xs={12}>
         <div className="input-group w-100"> 
       <input type='text' className="form-control" />
       <Button type="button"  variant="success" className="btn site-btn"> <i className="fa fa-search" > </i> </Button>
       </div>
       </Col>

       <Col className="p-1 mt-1"  Lg={4} md={4}  sm={12} xs={12}>
       
       <Link to="/" className="btn "><i className="fa h4 fa-bell"></i><sup> <span className="badge text-white bg-danger"> 5</span></sup> </Link>   
       <a className="btn"> <i className="fa h4 fa-mobile-alt"> </i> </a>
       <Link to="/" className="h4 btn">  Login    </Link>   

       </Col>

     </Row>


    </Container>
  </Navbar>
  

  </div>
      </Fragment>
    )
  }
}

export default NavMenuDesktop
