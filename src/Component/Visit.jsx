import React from "react";
import "../ComponentUI/Visit.css";
import placevisit_img from "../Images/placeVisit.jpg";
import { StoreData } from "../Store/Store";
import { useContext } from "react";
function Visit() {
  const placevisitData = useContext(StoreData);
  return (
    <>
      <div className="placevisit_img">
        <img src={placevisit_img} alt="not found" />
      </div>
      <div className="placevist_main_container">
        <div className="placevisit_discription">
          <h1>Top Tourist Destination India</h1>
          <hr className="break_line" />
          <p>
            Top Tourist Destination India is the home to numerous attractions,
            amenities, activities and beauties. It is not hard to believe that a
            land as diverse as India has a long list of travel destinations
            within its border. Starting from the valleys of Kashmir to the
            tri-colored sea of Kanchipuram, you will find numerous tourist
            attractions, which would suit your taste. If you were visiting India
            in winter, Rajasthan, Agra, Maharashtra, Tamil Nadu, Kerala,
            Chandigarh, Karnataka, Goa and other places would be in the top
            choice. If you choose to visit India in the monsoon, Uttarakhand,
            Munnar, Mussoorie, Cherrapunji and Coorg are some of the places to
            choose.
          </p>
        </div>
        <div className="placevisit_flex_container">
          {placevisitData.tourData
            .filter((item, index) => item.section === "placevisit")
            .map((item, index) => {
              return (
                <>
                  <div className="placevisit_items">
                    <h2>{item.name}</h2>
                    <img src={item.img} alt="not found" />
                    <div className="placeNameItem">
                      {item.place.map((items, index) => {
                        return (
                          <>
                            <li type="none">>{items}</li>
                            <hr />
                          </>
                        );
                      })}
                    </div>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Visit;
