import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Login from './views/login/index';
import Meun from './views/Meun/Menu';
import indexPage from './views/IndexPage';
// import Home from './views/home';
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/meun" exact component={Meun} />
        <Route path="/login" exact component={Login} />
        <Route path="/" exact component={indexPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
