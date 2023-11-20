import React from "react";
import PropTypes from "prop-types";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="detail">
        <h1>Matrix Info Labs</h1>
        <p>
          Discover a world of technology solutions at our store! From expert
          computer repairs and upgrades to cutting-edge gadgets and accessories,
          we're your one-stop destination for all things tech. Come explore and
          experience innovation firsthand – we look forward to welcoming you!
        </p>
      </div>
      <div className="pages">
        <h3>Pages</h3>
        <ul>
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
      </div>
      <div className="services">
        <h3>Service</h3>
        <ul>
          <li>
            <a href="#main">Website Development </a>
          </li>
          <li>
            <a href="#product">Android Application</a>
          </li>
          <li>
            <a href="#service">IOS Application</a>
          </li>
        </ul>
      </div>

      <div className="address">
        <h4>Address</h4>
        <address>
          13C, Balaji Nagar 2ND Cross Opp Meera Mahal, Hosur-635109, Krishnagiri
          District
        </address>
      </div>
      <hr></hr>
      <div className="icons">
        <i class="fa-brands fa-facebook fa-lg"></i>
        <i class="fa-brands fa-instagram fa-lg"></i>
        <i class="fa-brands fa-twitter fa-lg"></i>
      </div>
    </div>
  );
};

export default Footer;
