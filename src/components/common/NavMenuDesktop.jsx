import React, { Component, Fragment } from 'react'
import {Navbar,Container, Row, Col,Button} from 'react-bootstrap';
import Logo from '../../assets/images/logo.png'
import Bars from '../../assets/images/bars.png';
import {

  Link, Redirect
} from "react-router-dom";
import MegaMenuAll from '../home/MegaMenuAll';
import axios from 'axios';
import AppURL from '../../api/AppURL';


 class NavMenuDesktop extends Component {

  constructor(){
    super();
    this.state={
         SideNavState: "sideNavClose",
      ContentOverState: "ContentOverlayClose",
      Searchkey: "",
      SearchRedirectStatus: false,
      cartCount: 0,
      FavCount:0,
    }

    this.SearchOnChange = this.SearchOnChange.bind(this);
    this.SearchOnClick = this.SearchOnClick.bind(this);
    this.searchRedirect = this.searchRedirect.bind(this);
}

componentDidMount(){
  let product_code = this.props.product_code;
  axios.get(AppURL.CartCount(product_code)).then((response)=>{
       this.setState({cartCount:response.data})

  })


  let product_code2 = this.props.product_code2;
  axios.get(AppURL.FavCount(product_code2)).then((response)=>{
       this.setState({FavCount:response.data})

  })
}

   logout = () => {

     localStorage.clear();
    }
   
   
SearchOnChange = (e) => {
     let Searchkey = e.target.value;
     this.setState({Searchkey: Searchkey});
    //  alert(Searchkey);
     
     
    }

    SearchOnClick() {
      if(this.state.Searchkey.length >=2){
        this.setState({SearchRedirectStatus: true});
      }
     
   }
   
   searchRedirect(){
      if(this.state.SearchRedirectStatus===true){
           return <Redirect to={"/productbysearch/"+this.state.Searchkey} />
      }
 }
   
   
   
   
   
   


MenuBarClickHandler=()=>{
    this.SideNavOpenClose();
}

ContentOverlayClickHandler=()=>{
    this.SideNavOpenClose();
}


SideNavOpenClose=()=>{
    let SideNavState = this.state.SideNavState;
    let ContentOverState = this.state.ContentOverState;
    if(SideNavState==="sideNavOpen"){
         this.setState({SideNavState:"sideNavClose",ContentOverState:"ContentOverlayClose"})

    }
    else{
         this.setState({SideNavState:"sideNavOpen",ContentOverState:"ContentOverlayOpen"})
    }
}



   render() {
    
     let buttons;
     if (localStorage.getItem('token')) {
       buttons = (
         
         <div>  
            <Link to="/favourite" className="btn"><i className="fa h4 fa-heart"></i><sup><span className="badge text-white bg-danger">{this.state.FavCount}</span></sup> </Link>
       <Link to="/notification" className="btn"><i className="fa h4 fa-bell"></i><sup><span className="badge text-white bg-danger">5</span></sup> </Link>                   
       <a className="btn"> <i className="fa h4 fa-mobile-alt"> </i> </a>
                  <Link to="/profile" className="h4 btn">  Profile    </Link>   
                  <Link to="/" onClick={this.logout} className="h4 btn">Logout</Link>

       <Link to="/cart" className="cart-btn"><i className="fa fa-shopping-cart"></i> {this.state.cartCount} Items </Link>

         </div>
       )
       
     } else {
      buttons = (
         
        <div>  
           <Link to="/favourite" className="btn"><i className="fa h4 fa-heart"></i><sup><span className="badge text-white bg-danger">0</span></sup> </Link>
      <Link to="/notification" className="btn"><i className="fa h4 fa-bell"></i><sup><span className="badge text-white bg-danger">5</span></sup> </Link>                   
      <a className="btn"> <i className="fa h4 fa-mobile-alt"> </i> </a>
                 <Link to="/login" className="h4 btn">  Login    </Link>   
                 <Link to="/register" className="h4 btn">REGISTER</Link>

      <Link to="/cart" className="cart-btn"><i className="fa fa-shopping-cart"></i> 0 Items </Link>

        </div>
      )
       
     }
       
       
       
    return (
      <Fragment>
        <div className="TopSectionDown">  
 <Navbar fixed="top" class="navbar"  bg="light  ">
    <Container fluid={"true"} className="fixed-top shadow-sm p-2 mb-0 bg-white">
     <Row>

       <Col className="p-1 mt-1" lg={4} md={4}  sm={12} xs={12}>
       <img onClick={this.MenuBarClickHandler} className="bar-img" src={Bars} />
       <Link to="/">  <img  className="nav-logo"  src={Logo} /> </Link>
       
       </Col>

       <Col lg={4} md={4}  sm={12} xs={12}>
         <div className="input-group w-100"> 
       <input onChange={this.SearchOnChange} type='text' className="form-control" />
       <Button  onClick={this.SearchOnClick} type="button"  variant="success" className="btn site-btn"> <i className="fa fa-search" > </i> </Button>
       </div>
       </Col>

       <Col className="p-1 mt-1"  lg={4} md={4}  sm={12} xs={12}>
      {buttons}
       </Col>

     </Row>

{this.searchRedirect()}
    </Container>
  </Navbar>
  
  <div className={this.state.SideNavState}>
             <MegaMenuAll />
          </div>

          <div onClick={this.ContentOverlayClickHandler} className={this.state.ContentOverState}>

               </div>



  </div>
      </Fragment>
    )
  }
}

export default NavMenuDesktop
