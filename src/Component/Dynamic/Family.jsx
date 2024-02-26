import React from "react";
import "../../ComponentUI/Dynamic.css";
import { StoreData } from "../../Store/Store";
import { useContext } from "react";
function Family() {
  const familyData = useContext(StoreData);
  return (
    <>
      <div className="dynamic_img">
        <img src={familyData.headerImg[0].family} alt="not found" />
      </div>
      <div className="dynamic_main_container">
        <div className="dynamic_discription">
          <h1>Family Tour Packages In India</h1>
          <hr />
          <p>
            <span className="place_txt"> Family Holidays</span> in India include
            a variety of memorable experiences, destinations, and attractions,
            which harmonize with the preferences of family members with
            different tastes. You can choose to travel to popular{" "}
            <span className="place_txt">hill stations</span> like{" "}
            <span className="place_txt">
              {" "}
              Darjeeling, Shimla, Nainital, Ooty, Sikkim, Munnar, Mussoorie
            </span>{" "}
            etc or opt for offbeat places like Majuli Island, Khajjiar, or
            Kasol. India never fails to amuse you with something or the other
            special. You can go for a{" "}
            <span className="place_txt">desert safari</span> amidst sand dunes
            in
            <span className="place_txt">Jaisalmer</span> or explore the
            wilderness at well-known national parks in India. Your tours to
            India include all these and much more.
          </p>
        </div>
      </div>
    </>
  );
}

export default Family;
