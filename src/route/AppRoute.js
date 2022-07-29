import React, { Fragment, Component } from 'react';
import AppURL from '../api/AppURL';
import HomePage from '../pages/HomePage';
import UserLoginPage from '../pages/UserLoginPage';
import { Switch, Route, } from "react-router-dom";
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
import ProductsSubCategoryPage from '../pages/ProductsSubCategoryPage';
import SearchPage from '../pages/SearchPage';
import RegisterPage from '../pages/RegisterPage';
import ForgetPasswordPage from '../pages/ForgetPasswordPage';
import ResetPasswordPage from '../pages/ResetPasswordPage';
import ProfilePage from '../pages/ProfilePage';
import axios from 'axios' 
import NavMenuDesktop from '../components/common/NavMenuDesktop';

class AppRoute extends Component {

        constructor(){
                super();
                this.state={
                     user:{}
                }
           }
      
           componentDidMount(){
                axios.get(AppURL.UserData).then(response =>{ 
                     this.setUser(response.data)
                }).catch(error=>{
      
                });
           }
      
      
           setUser = (user) => {
                this.setState({user:user})
           }

                render() {
        return (
                <Fragment>
                    <NavMenuDesktop user={this.state.user} setUser={this.setUser} />  
                        <BrowserRouter>
                                <Switch>
                                        {/* <Route exact path="/" component={HomePage} />   */}

                                        <Route exact path="/" render={(props) => <HomePage {...props} key={Date.now()
                                        } />} />



                                        <Route exact path="/contact" render={(props) => <ContactPage {...props} key={Date.now()
                                        } />} />
                                        <Route exact path="/PurchasePage" render={(props) => <PurchasePage {...props} key={Date.now()
                                        } />} />
                                        <Route exact path="/privacy" render={(props) => <PrivacyPage {...props} key={Date.now()
                                        } />} />
                                        <Route exact path="/refund" render={(props) => <RefundPage {...props} key={Date.now()
                                        } />} />
                                        <Route exact path="/about" render={(props) => <AboutPage {...props} key={Date.now()
                                        } />} />
                                        <Route exact path="/productdetails/:code" render={(props) => <ProductDetailsPage {...props} key={Date.now()
                                        } />} />
                                        <Route exact path="/notification" render={(props) => <NotificationPage {...props} key={Date.now()
                                        } />} />
                                        <Route exact path="/favourite" render={(props) => <FavouritePage {...props} key={Date.now()
                                        } />} />
                                        <Route exact path="/cart" render={(props) => <CartPage {...props} key={Date.now()
                                        } />} />
                                        <Route exact path="/productcategory/:category" render={(props) => <ProductCategoryPage {...props} key={Date.now()
                                        } />} />
                                        <Route exact path="/productsubcategory/:category/:subcategory" render={(props) => <ProductsSubCategoryPage {...props} key={Date.now()
                                        } />} />

                                        <Route exact path="/productbysearch/:searchkey" render={(props) => <SearchPage {...props} key={Date.now()
                                        } />} />

                                        <Route exact path="/login" render={(props) => <UserLoginPage user={this.state.user} setUser={this.setUser} {...props} key={Date.now()
                                        } />} />
                                        <Route exact path="/register" render={(props) => <RegisterPage user={this.state.user} setUser={this.setUser} {...props} key={Date.now()} />} />

                                        <Route exact path="/forget" render={(props) => <ForgetPasswordPage {...props} key={Date.now()} />} />

                                        <Route exact path="/reset/:id" render={(props) => <ResetPasswordPage {...props} key={Date.now()} />} />
                                        <Route exact path="/profile" render={(props) => <ProfilePage user={this.state.user} setUser={this.setUser}   {...props} key={Date.now()} />} />

                                </Switch>

                        </BrowserRouter>
                </Fragment>
        )

                }
        }

export default AppRoute;
