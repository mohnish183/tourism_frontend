import React from "react";
import axios from "axios";
import "../ComponentUI/Touroffer.css";

import tour_img from "../Images/touroffer.jpg";
import { useEffect, useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { StoreData } from "../Store/Store";
function TourOffer() {
  const navigate = useNavigate();
  const tourofferData = useContext(StoreData);
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);

    if (!token) {
      navigate("/login");
    } else {
      axios
        .get("http://localhost:8000/pages/dashboard", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          const responseData = res.data;
          alert(responseData.msg);
          // setMessage(responseData.msg);
        });
    }
  }, [navigate]);
  return (
    <>
      <div className="touroffer_header_img">
        <img src={tour_img} alt="not found" />
      </div>
      <div className="touroffer_main_container">
        <div className="tourpackage_discription">
          <h1>India Special Offer Tour Packages</h1>
          <hr />
          <p>
            India Special Offer Tour contains the particularly special
            experience of India. Such as Luxury Tours,Pilgrimage tours for all
            the religion people, Festival tours of India etc. Do Dham, char
            Dham,Hemkund Saheb, Ponta Saheb, Yamnotri, Gangotri, Kedarnath,
            Badrinath, Mosque & Dargah tours under Pilgrimage tour. Festivals of
            North East, Ladakh, Rajasthan etc are very popular among the
            tourist. We also organize tour for some particular interest like
            short trekking in the Himalayan region,camel safari in Rajasthan,
            Honeymoon tours, trout fishing in the still lakes of Himalayan
            valleys, house boat holidays in Kerala or Kashmir, White water
            rafting on Ganges and other rivers and so on. Create memoirs that
            last a lifetime by exploring the much admired places of India. We
            tender affordable and attractive India Tour Packages to suit the
            needs of every tourist. Choosing any of these holiday packages will
            provide you with wholesome experiences that you will love to
            treasure with your friends in joyful time. India Special Offer Tour
            contains the particularly special experience of India. Such as
            Luxury Tours, Pilgrimage tours for all the religion people, Festival
            tours of India etc. Do Dham, char Dham, Hemkund Saheb, Ponta Saheb,
            Yamnotri, Gangotri, Kedarnath, Badrinath, Mosque & Dargah tours
            under Pilgrimage tour. Festivals of North East, Ladakh, Rajasthan
            etc are very popular among the tourist. We also organize tour for
            some particular interest like short trekking in the Himalayan
            region, camel safari in Rajasthan, Honeymoon tours, trout fishing in
            the still lakes of Himalayan valleys, house boat holidays in Kerala
            or Kashmir, White water rafting on Ganges and other rivers and so
            on. Create memoirs that last a lifetime by exploring the much
            admired places of India. We tender affordable and attractive India
            Tour Packages to suit the needs of every tourist. Choosing any of
            theseholiday packages will provide you with wholesome
          </p>
        </div>
        <div className="tourpackage_flex_container">
          {tourofferData.tourData
            .filter((item, index) => item.section === "touroffer")
            .map((item, index) => {
              return (
                <>
                  <NavLink
                    to={item.link}
                    className="touroffer_items"
                    onClick={() => scrollToTop()}
                  >
                    <img src={item.img} alt="not found" />
                    <p>{item.name}</p>
                  </NavLink>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default TourOffer;
