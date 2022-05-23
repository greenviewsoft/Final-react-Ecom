import React, { Component, Fragment } from 'react';
import HomePage from '../pages/HomePage';
import UserLoginPage from '../pages/UserLoginPage';
import { Routes, Route, Link } from "react-router-dom";
import ContactPage from '../pages/ContactPage';

function AppRoute() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<UserLoginPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      </Fragment>
  )
}

export default AppRoute
