import React, { Component } from "react";
import logo from "../../static/logo.png";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header className="header-outer">
      <div className="header-inner responsive-wrapper">
        <div className="header-logo">
          <Link to="/home">
            <img src={logo} />
          </Link>
        </div>
        <nav className="header-navigation">
          <a href="/home">Home</a>
          <a href="/shop">Shop</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
