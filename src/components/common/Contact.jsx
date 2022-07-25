import axios from 'axios';
import React, { Component, Fragment } from 'react';
import { Container, Row, Col, Form, Button, FormControl, Breadcrumb } from 'react-bootstrap'
import AppURL from '../../api/AppURL';
import validation from '../../validation/validation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

export class Contact extends Component {

     constructor() {
          super();
          this.state = {
               name: "",
               email: "",
               message: ""
          }
     }

     nameOnChange = (event) => {
          let name = event.target.value;
          // alert(name);
          this.setState({ name: name })
     }

     emailOnChange = (event) => {
          let email = event.target.value;
          // alert(email);
          this.setState({ email: email })
     }

     messageOnChange = (event) => {
          let message = event.target.value;
          // alert(message);
          this.setState({ message: message })
     }

     onFormSubmit = (event) => {
          let name = this.state.name;
          let email = this.state.email;
          let message = this.state.message;

          let sendBtn = document.getElementById('sendBtn');
          let contactform = document.getElementById('contactform');

          if (message.length == 0) {
               toast.error('Please write Your Message')

          } else if (name.length == 0) {
               toast.error('Please Write Your Name')
          } else if (email.length == 0) {
               toast.error('Please Write Down Your Email')
          }
          else if(!(validation.NameRegx).test(name)) {
               toast.error('Invalid Name')
          }
          else{
               sendBtn.innerHTML="sending...";
               let MyFromData = new FormData();
               MyFromData.append('name', name);
               MyFromData.append('email', email);
               MyFromData.append('message', message);

               axios.post(AppURL.PostContact,MyFromData )
                  .then(function (response) {
                       if(response.status==200 && response.data==1){
                         toast.success('Message sent successfully');
                        
                            sendBtn.innerHTML="Send";
                            contactform.reset();
                       }
                       else{
                         toast.error('error');
                         sendBtn.innerHTML="Send";
                       }
                  })
                  .catch(function (error) {
                    toast.error('error');
                       sendBtn.innerHTML="Send";
                  });


          }




          event.preventDefault();

     }



     render() {
          return (
               <Fragment>
                    <Container>
                    <Breadcrumb>
     <Breadcrumb.Item> <Link to="/"> Home</Link>  </Breadcrumb.Item>
     <Breadcrumb.Item> <Link to="/contact"> Contact </Link>  </Breadcrumb.Item>

</Breadcrumb>
                         <Row className="p-2">
                              <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>

                                   <Row className="text-center">
                                        <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
                                             <Form id="contactform" onSubmit={this.onFormSubmit} className="onboardForm">
                                                  <h4 className="section-title-login">CONTACT WITH US </h4>
                                                  <h6 className="section-sub-title">Please Contact With Us </h6>
                                                  <input onChange={this.nameOnChange} className="form-control m-2" type="text" placeholder="Enter Your Name" />

                                                  <input onChange={this.emailOnChange} className="form-control m-2" type="email" placeholder="Enter Email" />

                                                  <Form.Control onChange={this.messageOnChange} as="textarea" placeholder="Enter Your Message" className="form-control m-2" rows={3} />

                                                  <Button id="sendBtn" type="submit" className="btn btn-primary-block m-2 site-btn-login"> Send </Button>

                                             </Form>


                                        </Col>

                                        <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                                             <br></br><br></br>
                                             <p className="section-title-contact">
                                                  15 katasur mohammadpur, Dhaka
                                                  Email: Support@sultanshopbd.com
                                             </p>

                                             <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.8127931163976!2d90.35745342916488!3d23.754054345270326!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf55418a5563%3A0xc5c71bb308933571!2sSultan%20Food%20Place!5e0!3m2!1sen!2sbd!4v1653300474061!5m2!1sen!2sbd" width="550" height="450" styles="border:0;" allowfullscreen="" loading="lazy"></iframe>

                                        </Col>
                                   </Row>






                              </Col>
                         </Row>

                         <ToastContainer />  
                    </Container>
               </Fragment>
          )
     }
}

export default Contact