import React, { Component, Fragment } from 'react'
import FooterMobile from '../components/common/FooterMobile'
import NavMenuDesktop from '../components/common/NavMenuDesktop'
import NavMenuMobile from '../components/common/NavMenuMobile'
import FooterDesktop from '../components/common/FooterDesktop'
import ForgetPassword from '../components/common/ForgetPassword'


class ForgetPasswordPage extends Component {
    componentDidMount(){
        window.scroll(0,0)
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

               <ForgetPassword /> 

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

export default ForgetPasswordPage
