import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Breadcrumb, } from 'react-bootstrap'
import AppURL from '../../api/AppURL';
import axios from 'axios'
import parse from 'html-react-parser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';


export class Purchase extends Component {




     constructor() {
          super();
          this.state = {
               purchase: "",
               loaderDiv:"",
               mainDiv:"d-none",
          }
     }


     componentDidMount() {

          let SiteInfoPurchase = sessionStorage.getItem("AllSiteInfo");

          if(SiteInfoPurchase == null){

               axios.get(AppURL.AllSiteInfo).then(response =>{
                    let StatusCode = response.status;
                    if(StatusCode==200){
                         let JsonData = (response.data)[0]['parchase_guide'];
                         this.setState({purchase:JsonData,loaderDiv:"d-none",mainDiv:"d-none"});

                         sessionStorage.setItem("SiteInfoPurchase",JsonData)
                    } 
                    else{
                         toast.error("Somthing Went Wrong",{
                              position: "bottom-center"
                         });
                    }


          }).catch(error=>{
               toast.error("Somthing Went Wrong",{
                    position: "bottom-center"
               });
          });

     }  // end If Condition 
     else{
          this.setState({purchase:SiteInfoPurchase,loaderDiv:"d-none",mainDiv:""});
     }

     } 



     render() {
          return (
               <Fragment>
                    <Container>

                    <div className="breadbody">

<Breadcrumb>
     <Breadcrumb.Item> <Link to="/"> Home</Link>  </Breadcrumb.Item>
     <Breadcrumb.Item> <Link to="/PurchasePage"> PurchasePage </Link>  </Breadcrumb.Item>

</Breadcrumb>
</div>

                         <Row className="p-2">
                              <Col className="shadow-sm bg-white mt-2" md={12} lg={12} sm={12} xs={12}>


                              <div className={this.state.loaderDiv}>

<div class="ph-item">
<div class="ph-col-12">        
<div class="ph-row">           
<div class="ph-col-4"></div>
<div class="ph-col-8 empty"></div>
<div class="ph-col-6"></div>
<div class="ph-col-6 empty"></div>
<div class="ph-col-12"></div>
<div class="ph-col-12"></div>
<div class="ph-col-12"></div>
<div class="ph-col-12"></div>
</div>
</div>
</div>


<div class="ph-item">
<div class="ph-col-12">        
<div class="ph-row">           
<div class="ph-col-4"></div>
<div class="ph-col-8 empty"></div>
<div class="ph-col-6"></div>
<div class="ph-col-6 empty"></div>
<div class="ph-col-12"></div>
<div class="ph-col-12"></div>
<div class="ph-col-12"></div>
<div class="ph-col-12"></div>
</div>
</div>
</div>



</div>



                                   
                                   <h4 className="section-title-login">Purchase Page </h4>
                                   <p className="section-title-contact">
                                        {parse(this.state.purchase)}
                                   </p>


                              </Col>
                         </Row>
                    </Container>
                    <ToastContainer />  
               </Fragment>
          )
     }
}

export default Purchase