import React from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import Shelf from '../Shelf';
import Filter from '../Shelf/Filter';
import GithubCorner from '../github/Corner';
import FloatCart from '../FloatCart';

import Header from '../Header'
import Footer from '../Footer';

const Shop = () => (
  <React.Fragment>
    <Header />
    <main>
      <Filter />
      <Shelf />
    </main>
    <FloatCart />
    <Footer />
    
  </React.Fragment>
);

export default Shop;
