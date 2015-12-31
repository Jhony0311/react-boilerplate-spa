import React from 'react';
import Main from './../containers/Main';
import Hello from './../components/Hello';
import Hello2 from './../components/Hello2';
import { Router, Route, IndexRoute } from 'react-router';

export default (
  <Router>
    <Route path="/" component={Main}>
    	<IndexRoute component={Hello}/>
    	<Route path="another" handler={Hello2} />
    </Route>
  </Router>
)
