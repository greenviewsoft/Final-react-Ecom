import React, { Component, Fragment } from 'react'
import FooterDesktop from '../components/common/FooterDesktop'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import axios from 'axios'
import AppURL from '../api/AppURL'
import SubCategory from '../components/ProductDetails/SubCategory'
class ProductsSubCategoryPage extends Component {

    constructor({match}){
        super();
        this.state={
            Category: match.params.category,
            subCategory:match.params.subCategory,
             ProductData:[] 
        }
   }

     componentDidMount(){
          window.scroll(0,0)
          axios.get(AppURL.ProductListByCategory(this.state.Category,this.state.subCategory)).then
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

            <SubCategory Category={this.state.Category}  subCategory={this.state.subCategory}   ProductData={this.state.ProductData} />


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

export default ProductsSubCategoryPage
