import React, { Component, Fragment } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export class FeaturedProducts extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>Featured Products</h2>
            <p>Some Of Our Exclusive, You May Like</p>
          </div>
          <Row>
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6} >
            <Link to="/productdetails">

              <Card className="image-box card">
                <img className="center" src="https://rukminim2.flixcart.com/image/416/416/kqjtd3k0/mobile/o/4/x/c11-2021-rmx3231-realme-original-imag4j4yrdt7d9cj.jpeg?q=70" />
                <Card.Body>
                  <p className="product-name-on-card" >realme C11 2021 (Cool Blue, 64 GB)  (4 GB RAM)</p>
                  <p className="product-price-on-card" >Price : $120</p>
                </Card.Body>
              </Card>
              </Link>
            </Col>




            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6} >
              <Card className="image-box card">
                <img className="center" src="https://rukminim2.flixcart.com/image/416/416/jl2m7ww0/mobile/s/f/e/xiaomi-pocophone-f1-na-original-imaf8afgrdbqtsta.jpeg?q=70" />
                <Card.Body>
                  <p className="product-name-on-card" >realme C11 2021 (Cool Blue, 64 GB)  (4 GB RAM)</p>
                  <p className="product-price-on-card" >Price : $120</p>
                </Card.Body>
              </Card>
            </Col>





            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6} >
              <Card className="image-box card">
                <img className="center" src="https://rukminim2.flixcart.com/image/416/416/kg8avm80/mobile/n/p/d/apple-iphone-12-mini-dummyapplefsn-original-imafwgbfwkfrerak.jpeg?q=70" />
                <Card.Body>
                  <p className="product-name-on-card" >realme C11 2021 (Cool Blue, 64 GB)  (4 GB RAM)</p>
                  <p className="product-price-on-card" >Price : $120</p>
                </Card.Body>
              </Card>
            </Col>





            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6} >
              <Card className="image-box card">
                <img className="center" src="https://rukminim2.flixcart.com/image/416/416/ktketu80/mobile/e/l/9/iphone-13-mini-mlk53hn-a-apple-original-imag6vp6fhvdvm8d.jpeg?q=70" />
                <Card.Body>
                  <p className="product-name-on-card" >realme C11 2021 (Cool Blue, 64 GB)  (4 GB RAM)</p>
                  <p className="product-price-on-card" >Price : $120</p>
                </Card.Body>
              </Card>
            </Col>





            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6} >
              <Card className="image-box card">
                <img className="center" src="https://rukminim2.flixcart.com/image/416/416/l1ch4sw0/mobile/j/w/m/-original-imagcx87wdcfmvqn.jpeg?q=70" />
                <Card.Body>
                  <p className="product-name-on-card" >realme C11 2021 (Cool Blue, 64 GB)  (4 GB RAM)</p>
                  <p className="product-price-on-card" >Price : $120</p>
                </Card.Body>
              </Card>
            </Col>




            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6} >
              <Card className="image-box card">
                <img className="center" src="https://rukminim2.flixcart.com/image/416/416/l1ch4sw0/mobile/c/o/p/-original-imagcx87u8enugqf.jpeg?q=70" />
                <Card.Body>
                  <p className="product-name-on-card" >realme C11 2021 (Cool Blue, 64 GB)  (4 GB RAM)</p>
                  <p className="product-price-on-card" >Price : $120</p>
                </Card.Body>
              </Card>
            </Col>


          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default FeaturedProducts
