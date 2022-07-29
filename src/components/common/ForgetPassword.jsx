import axios from 'axios';
import React, { Component, Fragment } from 'react'
import { Container,Row,Col, Form,Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AppURL from '../../api/AppURL';
import forget from '../../assets/images/forgetpass.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



class ForgetPassword extends Component {
      
     constructor() {
          super();
          this.state = {
               email: '',
               message: '',
          }

     }


      // Login Form Submit Method 
      formSubmit = (e) => {
          e.preventDefault();
          const data={
               email:this.state.email,
               password:this.state.password
          }

          axios.post(AppURL.UserForgetPassword,data).then(response =>{ 
          //    console.log(response.data);
               this.setState({ message: response.data.message })

               toast.success(this.state.message,{
                    position: "top-right"
               });
               

          }).catch(error=>{
               this.setState({ message:error.response.data.message })

               toast.error(this.state.message,{
                    position: "top-right"
                    
               });
          }); 

     }

  render() {
    return (
        <Fragment>
        <Container>
             <Row className="p-2">
     <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>

             <Row className="text-center">
      <Col className="d-flex justify-content-center" md={6} lg={6} sm={12} xs={12}>
        <Form className="onboardForm" onSubmit={this.formSubmit} >
             <h4 className="section-title-login"> ForgetPassword </h4>
             <input className="form-control m-2"  onChange={(e)=>{this.setState({email:e.target.value})}} type="email" placeholder="Enter Your Email" />
             <Button type="submit" className="btn btn-primaryblock m-2 site-btn-login"> Reset Password </Button>
<br></br> <br></br>
<hr />


        </Form>


                  </Col>

     <Col className="p-0 Desktop m-0" md={6} lg={6} sm={6} xs={6}>
                       <img className="onboardBanner" src={forget} />
                  </Col>
             </Row>






                  </Col>
             </Row>
              </Container>
              <ToastContainer />  
   </Fragment>
    )
  }
}

export default ForgetPassword
