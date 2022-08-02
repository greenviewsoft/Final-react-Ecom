import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import ReactDOM from 'react-dom'
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import { Link } from 'react-router-dom'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';
import SuggestedProduct from './SuggestedProduct'
import ReviewList from './ReviewList'

class ProductDetails extends Component {

     constructor() {
          super();
          this.state = {
               previewImg: "0",
          }
     }

     imgOnClick = (event) => {
          let imgSrc = event.target.getAttribute('src');
          this.setState({previewImg: imgSrc});
     }

     PriceOption(price, special_price) {
          if (special_price == "na") {
               return (
                    <p className="product-price-on-card"> Price : {price}$ </p>
               )
          } else {

               return (
                    <p className="product-price-on-card">
                         Price : <strike className="text-secondary">{price}$ </strike> {special_price}$
                    </p>
               )

          }
     }

     render() {
          let ProductAllData = this.props.data;
          let title = ProductAllData['productList'][0]['title'];
          let brand = ProductAllData['productList'][0]['brand'];
          let category = ProductAllData['productList'][0]['category'];
          let subcategory = ProductAllData['productList'][0]['subcategory'];
          let image = ProductAllData['productList'][0]['image'];

          if (this.state.previewImg === '0') {
               this.setState({ previewImg: image })
           }
          let price = ProductAllData['productList'][0]['price'];

          let product_code = ProductAllData['productList'][0]['product_code'];
          let remark = ProductAllData['productList'][0]['remark'];
          let special_price = ProductAllData['productList'][0]['special_price'];
          let star = ProductAllData['productList'][0]['star'];


          let image_one = ProductAllData['ProductDetails'][0]['image_one'];
          let image_two = ProductAllData['ProductDetails'][0]['image_two'];
          let image_three = ProductAllData['ProductDetails'][0]['image_three'];
          let image_four = ProductAllData['ProductDetails'][0]['image_four'];
          let color = ProductAllData['ProductDetails'][0]['color'];
          let size = ProductAllData['ProductDetails'][0]['size'];

          let product_id = ProductAllData['ProductDetails'][0]['product_id'];
          let short_description = ProductAllData['ProductDetails'][0]['short_description'];
          let long_description = ProductAllData['ProductDetails'][0]['long_description'];

          var ColorDiv = "d-none"
          if (color != "na") {
               let ColorArray = color.split(',');
               var ColorOption = ColorArray.map((ColorList, i) => {
                    return <option value={ColorList}> {ColorList} </option>
               })
               ColorDiv = ""
          }
          else {
               ColorDiv = "d-none"
          }


          var SizeDiv = "d-none"
          if (size != "na") {
               let SizeArray = size.split(',');
               var SizeOption = SizeArray.map((SizeList, i) => {
                    return <option value={SizeList}> {SizeList} </option>
               })
               SizeDiv = ""
          }
          else {
               SizeDiv = "d-none"
          }


          return (
               <Fragment>
                    <Container className="BetweenTwoSection">

                         <div className="breadbody">
                              <Breadcrumb>
                                   <Breadcrumb.Item> <Link to="/"> Home </Link> </Breadcrumb.Item>

                                   <Breadcrumb.Item> <Link to={"/productcategory/" + category}> {category} </Link> </Breadcrumb.Item>

                                   <Breadcrumb.Item> <Link to={"/productsubcategory/" + category + "/" + subcategory}> {subcategory} </Link> </Breadcrumb.Item>

                                   <Breadcrumb.Item> <Link to={"/productdetails/" + product_id}> {title} </Link> </Breadcrumb.Item>

                              </Breadcrumb>
                         </div>

                         <Row className="p-2">
                              <Col className="shadow-sm bg-white pb-3 mt-4" md={12} lg={12} sm={12} xs={12}>
                                   <Row>
                                        <Col className="p-3" md={6} lg={6} sm={12} xs={12}>
                                         

                                          
                                             <InnerImageZoom className="detailimage" zoomScale={1.8} zoomType={"hover"} src={this.state.previewImg} zoomSrc={this.state.previewImg} />


                    
                                             <Container className="my-3">
                                                  <Row>
                                                       <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                                                            <img onClick={this.imgOnClick} className="w-100 smallimage product-sm-img " src={image_one} />
                                                       </Col>
                                                       <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                                                            <img onClick={this.imgOnClick} className="w-100 smallimage product-sm-img" src={image_two} />
                                                       </Col>
                                                       <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                                                            <img onClick={this.imgOnClick} className="w-100 smallimage product-sm-img" src={image_three} />
                                                       </Col>
                                                       <Col className="p-0 m-0" md={3} lg={3} sm={3} xs={3}>
                                                            <img onClick={this.imgOnClick} className="w-100 smallimage product-sm-img" src={image_four} />
                                                       </Col>
                                                  </Row>
                                             </Container>
                                        </Col>
                                        <Col className="p-3 " md={6} lg={6} sm={12} xs={12}>
                                             <h5 className="Product-Name">{title}</h5>
                                             <h6 className="section-sub-title">{short_description}</h6>

                                             {this.PriceOption(price, special_price)}

                                             <h6 className="mt-2">Category : <b>{category}</b>  </h6>

                                             <h6 className="mt-2">SubCategory : <b>{subcategory}</b></h6>

                                             <h6 className="mt-2">Brand : <b>{brand}</b></h6>

                                             <h6 className="mt-2">Product Code : <b>{product_code}</b></h6>

                                             <div className={ColorDiv}>
                                                  <h6 className="mt-2"> Choose Color  </h6>
                                                  <select className="form-control form-select">
                                                       <option>Choose Color</option>
                                                       {ColorOption}
                                                  </select>
                                             </div>


                                             <div className={SizeDiv}>
                                                  <h6 className="mt-2"> Choose Size  </h6>
                                                  <select className="form-control form-select">
                                                       <option>Choose Size</option>
                                                       {SizeOption}
                                                  </select>
                                             </div>

                                             <div className="" >
                                                  <h6 className="mt-2"> Choose Quantity  </h6>
                                                  <select className="form-control form-select">
                                                       <option>Choose Quantity</option>
                                                       <option value="01">01</option>
                                                       <option value="02">02</option>
                                                       <option value="03">03</option>
                                                       <option value="04">04</option>
                                                       <option value="05">05</option>
                                                       <option value="06">06</option>
                                                       <option value="07">07</option>
                                                       <option value="08">08</option>
                                                       <option value="09">09</option>
                                                       <option value="10">10</option>

                                                  </select>
                                             </div>


                                             <div className="input-group mt-3">
                                                  <button className="btn site-btn m-1 "> <i className="fa fa-shopping-cart"></i>  Add To Cart</button>
                                                  <button className="btn btn-primary m-1"> <i className="fa fa-car"></i> Order Now</button>
                                                  <button className="btn btn-primary m-1"> <i className="fa fa-heart"></i> Favourite</button>
                                             </div>
                                        </Col>
                                   </Row>

                                   <Row>
                                        <Col className="" md={6} lg={6} sm={12} xs={12}>
                                             <h6 className="mt-2">DETAILS</h6>
                                             <p>{long_description}</p>
                                        </Col>

                                        <Col className="" md={6} lg={6} sm={12} xs={12}>
                                             
                                        <ReviewList code={product_id} />

                                        </Col>
                                   </Row>

                              </Col>
                         </Row>
                    </Container>

                    <SuggestedProduct subcategory={subcategory} />

               </Fragment>
          )
     }
}

export default ProductDetails