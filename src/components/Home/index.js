import React from "react";
import { Route, Switch, Redirect, Link } from "react-router-dom";
import Shelf from "../Shelf";
import Filter from "../Shelf/Filter";
import GithubCorner from "../github/Corner";
import FloatCart from "../FloatCart";

import Header from "../Header";
import Footer from "../Footer";
import NewArrival from "../NewArrival";
import "./home.css";

import banner from "../../static/banner.jpg";

const Home = () => (
  <>
    <Header />
    <FloatCart />
    <div className="banner">
      <div className="banner-desc">
        <h1 className="text-thin">
          <strong>Shop</strong> the latest in menswear <strong>now</strong>
        </h1>
        <p>
          Our clothing collections for 2021 include some of our bestselling
          tweed suits, jackets, knitwear, accessories and more – all perfect for
          beating the chill now, and for transitioning into warmer months ahead.
        </p>
        <br />
        <Link to="/shop" className="button">
          Shop Now
        </Link>
      </div>
      <div className="banner-img">
        <img src={banner} alt="" />
      </div>
    </div>
    <NewArrival />
    <Footer />
  </>
);

export default Home;
