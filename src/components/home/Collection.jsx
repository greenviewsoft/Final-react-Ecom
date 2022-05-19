import React, { Component, Fragment } from 'react'
import {Container,Row,Col,Card} from 'react-bootstrap'

class Collection extends Component {
     render() {
          return (
              <Fragment>
                   <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55"><h2> PRODUCT COLLECTION</h2>
          <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>

     <Row>
          <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className="image-box card w-100">
          <img className="center w-75" src="https://static-01.daraz.com.bd/p/8dc31e8b8ce7bbe2905551f15c38bf42.jpg" />   
          <Card.Body> 
          <p className="product-name-on-card">Striped Men Hooded Neck Red</p>
          <p className="product-price-on-card">Price : $120</p>

          </Card.Body>
          </Card>          
          </Col>


          <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className="image-box card w-100">
          <img className="center w-75" src="https://static-01.daraz.com.bd/p/30cc409c4b076dd509fdc2ef7373feeb.jpg" />   
          <Card.Body> 
          <p className="product-name-on-card">Striped Men Round Neck Maroon, Grey</p>
          <p className="product-price-on-card">Price : $120</p>

          </Card.Body>
          </Card>          
          </Col>



          <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className="image-box card w-100">
          <img className="center w-75" src="https://static-01.daraz.com.bd/p/2eefde5d7412b57734187b4363285b02.jpg" />   
          <Card.Body> 
          <p className="product-name-on-card">Color Block Men Round Neck Grey</p>
          <p className="product-price-on-card">Price : $120</p>

          </Card.Body>
          </Card>          
          </Col>



          <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className="image-box card w-100">
          <img className="center w-75" src="https://static-01.daraz.com.bd/p/b5c4e8dd0b8d13f8371fa5069fcbd69c.jpg" />   
          <Card.Body> 
          <p className="product-name-on-card">Printed Men Hooded Neck Red T-Shirt</p>
          <p className="product-price-on-card">Price : $120</p>

          </Card.Body>
          </Card>          
          </Col>


          <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className="image-box card w-100">
          <img className="center w-75" src="https://static-01.daraz.com.bd/p/b854680b82b5d93c190c276b4b58d783.jpg" />   
          <Card.Body> 
          <p className="product-name-on-card">Printed Men Hooded Neck Red T-Shirt</p>
          <p className="product-price-on-card">Price : $120</p>

          </Card.Body>
          </Card>          
          </Col>



          <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className="image-box card w-100">
          <img className="center w-75" src="https://static-01.daraz.com.bd/p/92e4ba4a23d55e0e1da9c2a4a2916bab.jpg" />   
          <Card.Body> 
          <p className="product-name-on-card">Printed Men Hooded Neck Red T-Shirt</p>
          <p className="product-price-on-card">Price : $120</p>

          </Card.Body>
          </Card>          
          </Col>



          <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className="image-box card w-100">
          <img className="center w-75" src="https://static-01.daraz.com.bd/p/cb24c5d01ae0f12b14400c89eb01620a.jpg" />   
          <Card.Body> 
          <p className="product-name-on-card">Printed Men Hooded Neck Red T-Shirt</p>
          <p className="product-price-on-card">Price : $120</p>

          </Card.Body>
          </Card>          
          </Col>



          <Col className="p-0" xl={3} lg={3} md={3} sm={6} xs={6}>
          <Card className="image-box card w-100">
          <img className="center w-75" src="https://static-01.daraz.com.bd/p/66a380b84f2ea3dd9509e0585be0d618.jpg" />   
          <Card.Body> 
          <p className="product-name-on-card">Printed Men Hooded Neck Red T-Shirt</p>
          <p className="product-price-on-card">Price : $120</p>

          </Card.Body>
          </Card>          
          </Col>


     </Row>
                   </Container>
              </Fragment>
          )
     }
}

export default Collection