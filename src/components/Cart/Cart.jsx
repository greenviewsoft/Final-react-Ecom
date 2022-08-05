import React, { Component, Fragment } from 'react'
import {Navbar,Container, Row, Col,Button,Card} from 'react-bootstrap';
import AppURL from '../../api/AppURL';
import axios from 'axios'
import cogoToast from 'cogo-toast';
import { Redirect } from 'react-router-dom';

class Cart extends Component {
     constructor(){
          super();
          this.state={
               ProductData:[],
               isLoading:"",
               mainDiv:"d-none",
               PageRefreshStatus:false,
          }
     }
     componentDidMount(){
          axios.get(AppURL.CartList(this.props.user.email)).then(response =>{

               this.setState({ProductData:response.data,isLoading:"d-none",
               mainDiv:" "});         

          }).catch(error=>{

          });
     } 

     removeItem = (id) => {
          axios.get(AppURL.RemoveCartList(id)).then(response =>{         
               if(response.data===1){
                    cogoToast.success("Cart Item Removed",{position:'top-right'}); 
                    this.setState({PageRefreshStatus:true})   
               }else{
                    cogoToast.error("Your Request is not done ! Try Aagain",{position:'top-right'});
               }
          }).catch(error=>{
               cogoToast.error("Your Request is not done ! Try Aagain",{position:'top-right'});
          });
     }

     PageRefresh =() => {
          if(this.state.PageRefreshStatus===true){
               let URL = window.location;
               return (

                    <Redirect to={URL} />
               )
          }
     }


     ItemPlus = (id,quantity,price) => {

          axios.get(AppURL.CartItemPlus(id,quantity,price)).then(response =>{ 

         if(response.data===1){
              cogoToast.success("Item Quantity Increased",{position:'top-right'}); 
              this.setState({PageRefreshStatus:true})   
         }else{
              cogoToast.error("Your Request is not done ! Try Aagain",{position:'top-right'});
         }
              }).catch(error=>{
                   cogoToast.error("Your Request is not done ! Try Aagain",{position:'top-right'});

              });

         } // End ItemPlus Method 


         ItemMinus = (id,quantity,price) => {

          axios.get(AppURL.CartItemMinus(id,quantity,price)).then(response =>{ 

         if(response.data===1){
              cogoToast.success("Item Quantity Decreased",{position:'top-right'}); 
              this.setState({PageRefreshStatus:true})   
         }else{
              cogoToast.error("Your Request is not done ! Try Aagain",{position:'top-right'});
         }
              }).catch(error=>{
                   cogoToast.error("Your Request is not done ! Try Aagain",{position:'top-right'});

              });

         } // End ItemMinus Method 


     
     render() {
          const MyList = this.state.ProductData;
          let totalPriceSum=0;
          const MyView = MyList.map((ProductList, i) => {
               totalPriceSum = totalPriceSum+parseInt(ProductList.total_price)    
               return <div>
               <Card >                
     <Card.Body>
     <Row>
          <Col md={3} lg={3} sm={6} xs={6}>
               <img className="cart-product-img" src={ProductList.image} />
          </Col>

          <Col md={6} lg={6} sm={6} xs={6}>
          <h5 className="product-name">{ProductList.product_name}</h5>
          <h6> Quantity = {ProductList.quantity} </h6>
          <p>{ProductList.size} | {ProductList.color}</p>
          <h6>Price = {ProductList.unit_price} x {ProductList.quantity} = {ProductList.total_price}$</h6>
          </Col>

          <Col md={3} lg={3} sm={12} xs={12}>

          <Button onClick={()=>this.removeItem(ProductList.id)} className="btn mt-2 mx-1 btn-lg site-btn"><i className="fa fa-trash-alt"></i> </Button>

          <Button onClick={()=>this.ItemPlus(ProductList.id,ProductList.quantity,ProductList.unit_price)} className="btn mt-2 mx-1 btn-lg site-btn"><i className="fa fa-plus"></i> </Button>

                                        
          <Button onClick={()=>this.ItemMinus(ProductList.id,ProductList.quantity,ProductList.unit_price)} className="btn mt-2 mx-1 btn-lg site-btn"><i className="fa fa-minus"></i> </Button>


          </Col>
     </Row>              
     </Card.Body>               
</Card>
 </div> 
          })
          return (
              <Fragment>

<Container fluid={true}>   

    <div className="section-title text-center mb-55"><h2>Product Cart List</h2>   
          </div>
                   <Row>


     <Col className="p-1" lg={7} md={7} sm={12} xs={12} >
        {MyView}
                              </Col> 
                              

                              <Col className="p-1" lg={5} md={12} sm={12} xs={12} >

                              <div className="card p-2">
               <div className="card-body">
                    <div className="container-fluid ">
                         <div className="row">
<div className="col-md-12 p-1  col-lg-12 col-sm-12 col-12">
     <h5 className="Product-Name text-danger">Total Due: {totalPriceSum}  $</h5>
</div>
</div>
<div className="row">
<div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
     <label className="form-label">Choose City</label>
     <select className="form-control">
     <option value="">Choose</option>
     <option value="Dhaka">Assam</option>
     <option value="Dhaka">Bihar </option>
     <option value="Dhaka">Goa </option>
     <option value="Dhaka">Gujarat </option>
     <option value="Dhaka">Himachal Pradesh </option>
     <option value="Dhaka">Punjab  </option>
     </select>
</div>
<div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
     <label className="form-label">Choose Payment Method</label>
     <select   className="form-control">
     <option value="">Choose</option>
     <option value="Cash On Delivery">Cash On Delivery</option>
     <option value="Cash On Delivery">Stripe</option>
     </select>
</div>
<div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
     <label className="form-label">Your Name</label>
     <input  className="form-control" type="text" placeholder=""/>
</div>

<div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
     <label className="form-label">Delivery Address</label>
     <textarea   rows={2}  className="form-control" type="text" placeholder=""/>
</div>
<div className="col-md-12 p-1 col-lg-12 col-sm-12 col-12">
     <button   className="btn  site-btn">Confirm Order </button>
</div>
</div>
                    </div>
               </div>
               </div>
      
                              </Col> 



                   </Row>

               </Container>

                    {this.PageRefresh()}
                    
              </Fragment>
          )
     }
}

export default Cart