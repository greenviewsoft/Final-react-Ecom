import axios from 'axios';
import React, { Component, Fragment } from 'react'
import { Container,Row,Col} from 'react-bootstrap'
import AppURL from '../../api/AppURL';
import parse from 'html-react-parser';

class Refund extends Component {

     constructor(){
          super();
          this.state={
               refund:"",
               loaderDiv:"",
               mainDiv:"d-none"
          }
     }

     componentDidMount(){
          axios.get(AppURL.AllSiteInfo).then(response =>{
               let StatusCode = response.status;
               if(StatusCode==200){
                    let JsonData = (response.data)[0]['refund'];
                    this.setState({refund:JsonData,loaderDiv:"d-none",mainDiv:""});
               } 

          }).catch(error=>{

          });
     }

     render() {
          return (
               <Fragment>
               <Container>
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
<div class="ph-col-12"></div>
<div class="ph-col-12"></div>
<div class="ph-col-12"></div>
<div class="ph-col-12"></div>
<div class="ph-col-12"></div>
</div>
</div>
</div>



</div>

<div className={this.state.mainDiv}>

      <h4 className="section-title-login">Refund Page </h4>
      <p className="section-title-contact">
      { parse(this.state.refund) }
      </p>

      </div>


                         </Col>
                    </Row>
               </Container>
          </Fragment>
          )
     }
}

export default Refund