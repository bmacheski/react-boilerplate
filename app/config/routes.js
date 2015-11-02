'use strict';

import React from 'react';
import Main from '../components/Main';
import Home from '../components/Home';
import { Router, IndexRoute, Route } from 'react-router';

module.exports = (
  <Route name="app" path="/" component={Main}>
    <IndexRoute component={Home} />
  </Route>
)
