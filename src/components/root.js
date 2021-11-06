import React from 'react'
import { Switch, Route } from 'react-router'

import Main from './main/main'
import Rates from './rates/rates'


const Root = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path='/' component={() => <Main />} />
        <Route exact path='/rates' component={() => <Rates />} />
      </Switch>
    </React.Fragment>
  )
}

export default Root