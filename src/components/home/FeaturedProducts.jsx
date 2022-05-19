import React, { Component, Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export class FeaturedProducts extends Component {
  render() {
    return (
      <Fragment>
          <Container> 
              <div>
                  <h2 className="section-title">Featured Products</h2>
                  <p>Some Of Our Exclusive, You May Like</p>
              </div>
              <Row>
                  <Col>
                  
                  </Col>
              </Row>
          </Container>
      </Fragment>
    )
  }
}

export default FeaturedProducts
