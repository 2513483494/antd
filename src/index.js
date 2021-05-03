import React from 'react';
import ReactDOM from 'react-dom';
import { mainRoutes } from'./routes'
import App from './App'
import { HashRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
ReactDOM.render(
  <Router>
    <Switch>
      <Route path='/admin' render={routeProps=><App {...routeProps} />} />
      {mainRoutes.map(route => {
        return <Route key={route.path} {...route} />
      })}
      <Redirect to='/admin' from='/' />
      <Redirect to='/404' />
    </Switch>
  </Router>,
  document.getElementById('root')
);

