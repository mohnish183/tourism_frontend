import React from "react";
import indianTour_img from "../Images/indiatourism.jpg";
import "../ComponentUI/indianTour.css";
import { StoreData } from "../Store/Store";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
function IndianTour() {
  const IndianTourData = useContext(StoreData);
  console.log(IndianTourData);
  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <>
      <div className="indianTour_header_img">
        <img src={indianTour_img} alt="not found" />
      </div>
      <div className="IndiaTour-main-container">
        <div className="tourism_india">
          <h1>Tourism Of India</h1>
          <hr />
          <p>
            India Tourism, Himachal Pradesh, Kerala, Goa, Madhya Pradesh,
            Gujarat, Maharashtra along with a few others are some of the best
            places to visit in India. With a variety of attractions, these
            places urge you to travel to your heart's content. And, whatever you
            are going to explore, will surely leave a long-lasting impression on
            you. Beaches, backwaters, vast stretches of deserts, snow-laden
            peaks and Indian wildlife sanctuaries make the country one of the
            best winter destinations. Tourism India during the winter season are
            perfect ways of bidding farewell to the previous year and welcoming
            the new one excitingly. When the sun starts shining brightly, people
            throng the picturesque hill stations with snow-laden peaks. A
            perfect escape from the scorching heat and soaring temperature can
            be found only in India.
          </p>
        </div>
        <div className="IndiaTour_flex_container">
          {IndianTourData.tourData
            .filter((item, index) => item.section === "IndianTourism")
            .map((item, index) => {
              return (
                <>
                  <NavLink
                    to={`${item.name}`}
                    className="IndianTour_items"
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

export default IndianTour;
