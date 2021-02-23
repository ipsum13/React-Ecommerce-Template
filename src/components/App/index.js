import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Shelf from '../Shelf';
import Filter from '../Shelf/Filter';
import GithubCorner from '../github/Corner';
import FloatCart from '../FloatCart';

import Home from '../Home';
import Shop from '../Shop'

import Footer from '../Footer';

const App = () => (
  <Switch>
      
      <Route exact path="/home" component={Home} />
      <Route exact path="/shop" component={Shop} />
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
     
    </Switch>
);

export default App;
