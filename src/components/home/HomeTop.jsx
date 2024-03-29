import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HomeSlider from './HomeSlider';
import MegaMenu from './MegaMenu';
import axios from 'axios'
import parse from 'html-react-parser';
import AppURL from '../../api/AppURL';
import SliderLoading from '../PlaceHolder/SliderLoading';

class HomeTop extends Component {


    constructor(){
        super();
        this.state={
            MenuData: [],
            SliderData:[],
               isLoading:"",
               mainDiv:"d-none"
        }
   }

   componentDidMount(){
    axios.get(AppURL.AllCategoryDetails).then(response =>{ 
          this.setState({MenuData:response.data});

    }).catch(error=>{

    });
       //slider api
    axios.get(AppURL.AllSlider).then(response =>{ 
        this.setState({SliderData:response.data,isLoading:"d-none",mainDiv:""});
  }).catch(error=>{

  }); 
       
}


    render() {
        return (
            <Fragment>
                <SliderLoading isLoading={this.state.isLoading} />

<div className={this.state.mainDiv}>
               <Container className="p-0 m-0  overflow-hidden" fluid={true}>
                   <Row>
                       <Col lg={3} md={3}  sm={12}>
                       <MegaMenu data={this.state.MenuData} />
                       </Col>

                       <Col lg={9} md={9}  sm={12}>
                       <HomeSlider data={this.state.SliderData}></HomeSlider>
                       </Col>
                   </Row>
                    </Container>
                    </div>
           </Fragment>
        );
    }
}

export default HomeTop;