import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import Login from './views/login/index';
import Meun from './views/Meun/Menu';
// import indexPage from './views/IndexPage';
// import Home from './views/home';
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/questions" component={Meun} />
        <Redirect from="/" to="questions"></Redirect>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
