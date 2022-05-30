import React, { Fragment } from 'react';
import HomePage from '../pages/HomePage';
import UserLoginPage from '../pages/UserLoginPage';
import { Switch, Route,  } from "react-router-dom";
import ContactPage from '../pages/ContactPage';
import PurchasePage from '../pages/PurchasePage';
import PrivacyPage from '../pages/PrivacyPage';
import RefundPage from '../pages/RefundPage';
import AboutPage from '../pages/AboutPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import NotificationPage from '../pages/NotificationPage';
import FavouritePage from '../pages/FavouritePage'
import CartPage from '../pages/CartPage';
import ProductCategoryPage from '../pages/ProductCategoryPage';
import { BrowserRouter } from 'react-router-dom';

function AppRoute() {
  return (
    <Fragment>

<BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />  
        <Route exact path="/login" component={UserLoginPage} />   
        <Route exact path="/contact"  component={ContactPage} />  
        <Route exact path="/PurchasePage" component={PurchasePage} />  
        <Route exact path="/privacy" component={PrivacyPage} /> 


        <Route exact path="/refund"   component={RefundPage}  />
        <Route exact path="/about"  component={AboutPage}  /> 
        <Route exact path="/productdetails" component={ProductDetailsPage}  />
        <Route exact path="/notification" component={NotificationPage} />
        <Route exact path="/favourite"   component={FavouritePage} />
        <Route exact path="/cart"   component={CartPage}         />

        <Route exact path="/productcategory/:category" component={ProductCategoryPage} />
      </Switch>

      </BrowserRouter>
      </Fragment>
  )
}

export default AppRoute
