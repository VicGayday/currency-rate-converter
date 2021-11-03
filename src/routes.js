import React from "react"
import { Switch, Route } from "react-router-dom"

import Main from './pages/main/Main'
import Rates from './pages/rates/Rates'

const RouteComponent = () => {
    return (
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/rates" component={Rates} />
      </Switch>
    )
}

export default RouteComponent
