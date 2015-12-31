import React from 'react';
import Main from './../containers/Main';
import Hello from './../components/Hello';
import Hello2 from './../components/Hello2';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
      <Route path="another" component={Hello2}/>
      <IndexRoute component={Hello}/>
    </Route>
  </Router>
)