import React from "react";

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
function Navbar() {
  return (
    <div>
      <div className="logo_header">
        <img src={logo} alt="not found" />
        <img src={rajLogo} alt="not found" />
        <div className="contact-info">
          <p>Email: info@theindiatourism.com</p>
          <div className="contact_phone">
            <img src={Phone} alt="not found" />
            <p>+91-9549279999</p>
          </div>
        </div>
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
          <Route path="india_tour/odisha" element={<Odisha />} />
          <Route path="india_tour/goa_1" element={<GoaTour />} />
          <Route path="india_tour/bihar" element={<Bihar />} />
          <Route path="india_tour/asam" element={<Asam />} />
          <Route path="india_tour/arunachal" element={<Arunachal />} />
          <Route path="india_tour/andhra_pradesh" element={<AndraPradesh />} />
          <Route path="tour_offer/honeymoon" element={<Honeymoon />} />
          <Route path="tour_offer/beaches" element={<Beaches />} />
          <Route path="tour_offer/hill_stations" element={<HillStation />} />
          <Route
            path="tour_offer/golden_triangles"
            element={<GoldenTriangle />}
          />
        </Routes>
      </Store>
    </div>
  );
}

export default Navbar;
