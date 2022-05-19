import React, { Component, Fragment } from 'react'
import {Switch, Router,Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'

export class AppRoute extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
<Route exact to="/" component={HomePage} />


        </Switch>

      </Fragment>



    )
  }
}

export default AppRoute
