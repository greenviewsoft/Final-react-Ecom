import React, { Component, Fragment } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import HomeSlider from './HomeSlider';
import MegaMenu from './MegaMenu';
import axios from 'axios'
import parse from 'html-react-parser';
import AppURL from '../../api/AppURL';


class HomeTop extends Component {


    constructor(){
        super();
        this.state={
        MenuData: []
        }
   }

   componentDidMount(){
    axios.get(AppURL.AllCategoryDetails).then(response =>{ 
          this.setState({MenuData:response.data});

    }).catch(error=>{

    });
}


    render() {
        return (
           <Fragment>
               <Container className="p-0 m-0  overflow-hidden" fluid={true}>
                   <Row>
                       <Col lg={3} md={3}  sm={12}>
                       <MegaMenu data={this.state.MenuData} />
                       </Col>

                       <Col lg={9} md={9}  sm={12}>
                       <HomeSlider></HomeSlider>
                       </Col>
                   </Row>
               </Container>
           </Fragment>
        );
    }
}

export default HomeTop;