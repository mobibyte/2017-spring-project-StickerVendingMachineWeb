import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import Home from './containers/Home';
import TrackOrder from './containers/TrackOrder';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Home} />
    <Route path="/order/:id" component={TrackOrder} />
  </Router>,
  document.getElementById('root')
);
