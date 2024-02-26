import React from "react";
import "../../ComponentUI/Dynamic.css";
import { StoreData } from "../../Store/Store";
import { useContext } from "react";
function Honeymoon() {
  const honeymoonData = useContext(StoreData);
  return (
    <>
      <div className="dynamic_img">
        <img src={honeymoonData.headerImg[0].honeymoon} alt="not found" />
      </div>
      <div className="dynamic_main_container">
        <div className="dynamic_discription">
          <h1>India Honeymoon Tour</h1>
          <hr />
          <p>
            Honeymoon is a special time when everything appears{" "}
            <span className="place_txt">romantic</span> and ecstatic. It is not
            just a simple vacation focused on{" "}
            <span className="place_txt">hill station</span>
            destinations, but a memorable vacation that you and your special one
            will cherish throughout your lives. Ask any of your married friends
            about their <span className="place_txt">honeymoon tour</span> and
            you will see their faces light up. For a royal honeymoon experience
            in India, Rajasthan is an ideal destination. It offers historic
            sites, culturally-enriched places, majestic forts, palaces, temples,
            the <span className="place_txt">Thar Desert</span>, and stays in
            heritage hotels. Udaipur is one of the most romantic places in
            Rajasthan, and other important markers of the tour include{" "}
            <span className="place_txt">
              Jaipur, Jaisalmer, Mount Abu, Bikaner, and Jodhpur.
            </span>{" "}
            On the other hand, for beach bums who want some time alone, several
            itineraries offer the perfect beach honeymoon experience in India.
            Popular destinations include{" "}
            <span className="place_txt">Goa, Kerala</span>, and Andaman, while
            others are{" "}
            <span className="place_txt">
              Pondicherry, Alibag, Daman & Diu, Lakshadweep,
            </span>{" "}
            Gokarna, and many more.{" "}
            <span className="place_txt">Kerala tour packages</span> earn bonus
            points here, owing to its blissful spread of backwaters, hill
            stations,
            <span className="place_txt"> wildlife</span> sanctuaries, pampering{" "}
            <span className="place_txt">Ayurveda</span> sessions, culture, and
            scenic beaches.
          </p>
        </div>
        <div className="dynamic_flex_container">
          {honeymoonData.tourData
            .filter((item, index) => item.section === "honeymoon")
            .map((item, index) => {
              return (
                <>
                  <div className="dynamic_items">
                    <img src={item.img} alt="not found" />
                    <p>{item.name}</p>
                    <p>{item.duration}</p>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Honeymoon;
