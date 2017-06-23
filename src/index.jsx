import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'
import { Route, Switch } from 'react-router-dom'
import 'semantic-ui-css/semantic.min.css'
import './base-style.scss'

import store, { history } from './App/store'
import App from './App/App'
import LandingPage from './App/LandingPage/component'
import PageNotFound from './App/PageNotFound'

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route component={PageNotFound} />
        </Switch>
      </App>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root'),
)
