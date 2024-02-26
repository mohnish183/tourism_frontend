import React from "react";
import paypal from "../Images/paypal.jpg";
import footer from "../Images/India-tour-footer.jpg";
import "../ComponentUI/Footer.css";
import { NavLink } from "react-router-dom";
function Footer() {
  return (
    <div className="footer-main-container">
      <div className="footer-link">
        <div className="footer-navlink">
          <NavLink>Contact Us</NavLink>
          <NavLink>Sitemap</NavLink>
          <NavLink>Sitemap Xml</NavLink>
          <NavLink>Payment Procedure</NavLink>
          <NavLink>Term & Condition</NavLink>
          <NavLink>Link exchange</NavLink>
          <NavLink>Blog</NavLink>
          <NavLink>Rajasthan Tour</NavLink>
        </div>
      </div>
      <div className="footer-img">
        <div className="img-footer-col">
          <div className="footer-block1">
            <h4>The Indian Tourism</h4>
            <p>info@theindiatourism.com</p>
            <img src={paypal} alt="not found" />
          </div>
          <div className="footer-block2">
            <img src={footer} alt="not found" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
