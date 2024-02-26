import React from "react";
import "../ComponentUI/contact.css";
import contact_img from "../Images/contact.jpg";
import paypal from "../Images/paypal.jpg";
import raj_logo from "../Images/raj_logo.jpg";
function Contact() {
  return (
    <>
      <div className="contact-img">
        <img src={contact_img} alt="not found" />
      </div>
      <div className="contact-container">
        <div className="contact-us">
          <h2>Contact Us</h2>
          <hr />
          <p>
            Thank you for showing your interest in The India Tourism Tour &
            Travel services. Please provide the information about your tour
            requirements in order to help us to serve you better. This
            information will enable us to route your request to the appropriate
            person. You should receive a response within 24 hours.
          </p>
          <div className="contact-us-block">
            <div className="contactus-txt">
              <h4>The India Tourism</h4>
              <h4>Prakash Singh Shekhawat</h4>
              <h6>+91 - 9549279999</h6>
              <h4>Office Hours : (9:30 am to 5:30 pm)</h4>
              <h6>Email- info@theindiatourism.com</h6>
            </div>
            <div className="paypal">
              <img src={paypal} alt="not found" />
            </div>
            <div className="social_media">
              <h4>Follow Us</h4>
              <img src={raj_logo} alt="not found" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
