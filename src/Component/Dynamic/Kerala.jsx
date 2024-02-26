import React from "react";
import "../../ComponentUI/Dynamic.css";
import { StoreData } from "../../Store/Store";
import { useContext } from "react";
function Kerala() {
  const keralaData = useContext(StoreData);
  return (
    <>
      <div className="dynamic_img">
        <img src={keralaData.headerImg[0].kerala} alt="not found" />
      </div>
      <div className="dynamic_main_container">
        <div className="dynamic_discription">
          <h1>Kerala Tour Package</h1>
          <hr />
          <p>
            <em className="place_txt">Kerala tour packages</em> which have been
            tailored to various themes and specialties so as to suit you whether
            you are planning a <em className="place_txt">family holiday</em> in
            Kerala, a spa break in some of the best Ayurveda retreats in India
            or whether you are looking for a beautiful beginning with romantic{" "}
            <em className="place_txt">honeymoon tour packages</em>. Kerala tour
            packages offered by the india tourism includes Hill station
            packages, houseboat packages, wildlife century packages, back water
            and <em className="place_txt">beach packages</em>. These packages
            start at very reasonable rates and can hike up to the level of your
            comfort. We can also design custom{" "}
            <em className="place_txt">Kerala tour packages</em> by understanding
            your taste, budget and comfort and includes one of the most famous
            places to visit in Kerala. The india tourism comes in the category
            of standard Kerala
            <em className="place_txt">tour operator</em> that assures you to
            experience the same adventure and joy that seems in the brochures or
            over websites. Kerala tour of the india tourism covers vast range of
            destination and provide one day tour packages to one month packages.
            The most popular Kerala packages includes hill station & houseboat
            package and hill station,
            <em className="place_txt">houseboat & beach Kerala package.</em>
          </p>
        </div>
        <div className="dynamic_flex_container">
          {keralaData.tourData
            .filter((item, index) => item.section === "kerala")
            .map((item, index) => {
              return (
                <>
                  <div className="dynamic_items">
                    <img src={item.img} alt="not found" />
                    <p>{item.name}</p>
                    <p>Duration : {item.duration}</p>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default Kerala;
