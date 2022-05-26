import React, { Component } from 'react'
import { Fragment } from 'react'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import Category from '../components/ProductDetails/Category'
import axios from 'axios'
import AppURL from '../api/AppURL'


 class ProductCategoryPage extends Component {

    constructor({match}){
        super();
        this.state={
             Category:match.params.category,
             ProductData:[] 
        }
   }

     componentDidMount(){
          window.scroll(0,0)
          axios.get(AppURL.ProductListByCategory(this.state.Category)).then
          (response => {

            this.setState({ ProductData: response.data });
      
          }).catch(error => {
          });
          
     } 

     render() {
          return (
              <Fragment> 
               <div className="Desktop">
                <NavMenuDesktop /> 
               </div>

               <div className="Mobile">
               <NavMenuMobile />  
               </div>                       

               <Category Category={this.state.Category} ProductData={this.state.ProductData} /> 

               <div className="Desktop">
               <FooterDesktop/>
               </div>

               <div className="Mobile">
               <FooterMobile/>
               </div>

          </Fragment>
          )
     }
}

export default ProductCategoryPage