import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faHouse, faBars } from "@fortawesome/free-solid-svg-icons";
import { LogOut } from "./Login";
import { NavLink, Routes, Route } from "react-router-dom";
import logo from "../Images/logo.jpg";
import rajLogo from "../Images/raj_logo.jpg";
import Phone from "../Images/phone.jpg";
import "../ComponentUI/Navbar.css";
import Home from "./Home";
import IndianTour from "./IndianTour";
import TourPackage from "./TourPackage";
import Visit from "./Visit";
import TourOffer from "./TourOffer";
import Contact from "./Contact";
import Store from "../Store/Store";
import Register from "./Register";
import Login from "./Login";
import Rajasthan from "./Dynamic/Rajasthan";
import SouthIndia from "./Dynamic/SouthIndia";
import Kerala from "./Dynamic/Kerala";
import Goa from "./Dynamic/Goa";
import KeralaOne from "./Dynamic/KeralaOne";
import Varanasi from "./Dynamic/Varanasi";
import Jaipur from "./Dynamic/Jaipur";
import Mumbai from "./Dynamic/Mumbai";
import Honeymoon from "./Dynamic/Honeymoon";
import Family from "./Dynamic/Family";
import Sumer from "./Dynamic/Sumer";
import Adventure from "./Dynamic/Adventure";
import Odisha from "./Dynamic/Odisha";
import GoaTour from "./Dynamic/GoaTour";
import Bihar from "./Dynamic/Bihar";
import Asam from "./Dynamic/Asam";
import Arunachal from "./Dynamic/Arunachal";
import AndraPradesh from "./Dynamic/AndraPradesh";
import Beaches from "./Dynamic/Beaches";
import HillStation from "./Dynamic/HillStation";
import GoldenTriangle from "./Dynamic/GoldenTriangle";
import { useState, useEffect } from "react";
function Navbar() {
  const [isActive, setIsActive] = useState("none");
  const token = localStorage.getItem("token");
  console.log(token);
  useEffect(() => {
    if (token) {
      setIsActive("none");
    } else {
      setIsActive("block");
    }
  }, [token]);

  // if (token) {
  //   registerBtn.classList.add("display_register_none ");
  //   registerBtn.classList.remove("display_register_block ");
  // } else {
  //   registerBtn.classList.add("display_register_none ");
  //   registerBtn.classList.remove("display_register_block ");
  // }
  var navBar = document.getElementsByClassName("navbar_link");
  var childNode;

  let toggleValue = true;
  const toggleMenu = () => {
    if (toggleValue === true) {
      navBar[0].classList.add("childnodeOn");

      console.log("red");
      navBar[0].classList.remove("childnodeOff");
      childNode = navBar[0].children;
      for (var i = 0; i < childNode.length; i++) {
        childNode[i].classList.add("childNodeDisplay");
        childNode[i].classList.remove("childNode");
      }
      toggleValue = false;
    } else {
      navBar[0].classList.remove("childnodeOn");
      navBar[0].classList.add("childnodeOff");
      childNode = navBar[0].children;
      for (i = 0; i < childNode.length; i++) {
        childNode[i].classList.add("childNode");
        childNode[i].classList.remove("childNodeDisplay");
      }
      toggleValue = true;
    }
  };
  window.addEventListener("resize", (e) => {
    if (window.matchMedia(`(min-width: 600px)`).matches) {
      navBar[0].classList.remove("childnodeOff");
      navBar[0].classList.remove("childnodeOn");
      childNode = navBar[0].children;
      for (var i = 0; i < childNode.length; i++) {
        childNode[i].classList.remove("childNode");
        childNode[i].classList.remove("childNodeDisplay");
      }
    }
    if (window.matchMedia(`(max-width:620px)`).matches) {
      navBar[0].classList.add("childnodeOff");
    }
  });
  return (
    <div>
      <div className="logo_header">
        <div className="image_indian_tourism">
          <img src={logo} alt="not found" />
        </div>
        <div className="second_header_part">
          <div className="second_header_logo">
            <img src={rajLogo} alt="not found" />
            <div className="contact-info">
              <p>Email: info@theindiatourism.com</p>
              <div className="contact_phone">
                <img src={Phone} alt="not found" />
                <p>+91-9549279999</p>
              </div>
            </div>
          </div>
          <div className="register-part">
            <NavLink to={`/login`}>
              <FontAwesomeIcon
                className="fa-nav"
                icon={faUser}
                style={{ color: "brown" }}
                size="2x"
              />
            </NavLink>

            <NavLink to={`/register`}>
              {" "}
              <FontAwesomeIcon
                className="fa-nav register"
                id={
                  isActive
                    ? "display_register_none "
                    : "display_register_block "
                }
                icon={faHouse}
                style={{ color: "brown", display: isActive }}
                size="2x"
              />
            </NavLink>
            <LogOut />
          </div>
        </div>
      </div>
      <div className="hamburger_icon" onClick={toggleMenu}>
        {" "}
        <FontAwesomeIcon icon={faBars} />
      </div>

      <div className="navbar_link">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/India_tour"}>India Tourism</NavLink>
        <NavLink to={"/tour_package"}>Tour Package</NavLink>
        <NavLink to={"/visit"}>Place to Visit</NavLink>
        <NavLink to={"/tour_offer"}>Tour Offer</NavLink>
        <NavLink to={"/contact_us"}>contact</NavLink>
      </div>
      <Store>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/India_tour"} element={<IndianTour />} />
          <Route path={"/tour_package"} element={<TourPackage />} />
          <Route path={"/visit"} element={<Visit />} />
          <Route path={"/tour_offer"} element={<TourOffer />} />
          <Route path={"/contact_us"} element={<Contact />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/login"} element={<Login />} />
          {/* dynamic routes */}
          <Route path={"/:rajasthan"} element={<Rajasthan />} />
          <Route path={"/southindia"} element={<SouthIndia />} />
          <Route path={"/goa"} element={<Goa />} />
          <Route path={"/kerala"} element={<Kerala />} />
          <Route path={"/kerala_1"} element={<KeralaOne />} />
          <Route path={"/varanasi"} element={<Varanasi />} />
          <Route path="/jaipur" element={<Jaipur />} />
          <Route path="/mumbai" element={<Mumbai />} />
          <Route path="/honeymoon" element={<Honeymoon />} />
          <Route path="/familytour" element={<Family />} />
          <Route path="/summertour" element={<Sumer />} />
          <Route path="/adventure" element={<Adventure />} />
          <Route path="India_tour/Odisha Tourism" element={<Odisha />} />
          <Route path="India_tour/Goa Tourism" element={<GoaTour />} />
          <Route path="India_tour/Bihar Tourism" element={<Bihar />} />
          <Route path="India_tour/Asam Tourism" element={<Asam />} />
          <Route
            path="India_tour/Arunachal Pradesh Tourism"
            element={<Arunachal />}
          />
          <Route
            path="India_tour/Andhra Pradesh Tourism"
            element={<AndraPradesh />}
          />
          <Route
            path="tour_offer/Honeymoon Packages India"
            element={<Honeymoon />}
          />
          <Route
            path="tour_offer/Beach Holiday in India"
            element={<Beaches />}
          />
          <Route
            path="tour_offer/Hill Station Holidays"
            element={<HillStation />}
          />
          <Route
            path="tour_offer/Golden Triangle India Tour"
            element={<GoldenTriangle />}
          />
        </Routes>
      </Store>
    </div>
  );
}

export default Navbar;
