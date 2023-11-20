import React from "react";
import PropTypes from "prop-types";
import "./Header.css";
import SMALLCARD from "../../SMALL CARD.png";

const Header = () => {

  function search(){

  }

  return (
    <div className="Header" data-testid="Header">
      <div className="img"></div>
      <header>
        <img className="logo" src={SMALLCARD} alt="logo" />
        <nav>
          <ul className="nav-links">
            <li>
              <a href="#main">Home</a>
            </li>
            <li>
              <a href="#product">Product</a>
            </li>
            <li>
              <a href="#service">Service</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div>
          <span>
            <i className="fa-solid fa-magnifying-glass" onClick={search()}></i>
            <i className="fa-solid fa-cart-shopping"></i>
            <i className="fa-solid fa-user"></i>
          </span>
          
        </div>
      </header>
    </div>
  );
};
export default Header;
