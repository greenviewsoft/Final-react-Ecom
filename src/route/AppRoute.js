import React, { Component, Fragment } from 'react';
import HomePage from '../pages/HomePage';
import UserLoginPage from '../pages/UserLoginPage';
import { Routes, Route, Link } from "react-router-dom";
import ContactPage from '../pages/ContactPage';
import PurchasePage from '../pages/PurchasePage';
import PrivacyPage from '../pages/PrivacyPage';
import RefundPage from '../pages/RefundPage';
import AboutPage from '../pages/AboutPage';
import ProductDetailsPage from '../pages/ProductDetailsPage';
import NotificationPage from '../pages/NotificationPage';
import FavouritePage from '../pages/FavouritePage'

function AppRoute() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<UserLoginPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/PurchasePage" element={<PurchasePage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/refund" element={<RefundPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/productdetails" element={<ProductDetailsPage />} />
        <Route path="/notification" element={<NotificationPage />} />
        <Route path="/favourite" element={<FavouritePage />} />
      </Routes>
      </Fragment>
  )
}

export default AppRoute
