import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { adminRoutes } from './routes';
import Frame from './components/Frame/index'
import './App.css' 
import { isLoginind } from './utils/author'
function App() {
  return (
    isLoginind()? 
    <Frame>
      <Switch>
        {adminRoutes.map(route => {
          return (
            <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            render={routeProps => {
              return <route.component {...routeProps}
            />
            }} />
          );
        })}
        <Redirect to={adminRoutes[0].path} from='/admin'/>
        <Redirect to='/404'/>
      </Switch>
    </Frame> : <Redirect to='/login'/>
  );
}

export default App;
