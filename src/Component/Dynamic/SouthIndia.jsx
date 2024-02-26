import React from "react";
import "../../ComponentUI/Dynamic.css";
import { StoreData } from "../../Store/Store";
import { useContext } from "react";
function SouthIndia() {
  const southindiaData = useContext(StoreData);
  return (
    <>
      <div className="dynamic_img">
        <img src={southindiaData.headerImg[0].southindia} alt="not found" />
      </div>
      <div className="dynamic_main_container">
        <div className="dynamic_discription">
          <h1>South India Tours</h1>
          <hr />
          <p>
            <em className="place_txt">South India Tours</em> online offer a
            large variety of South India. Scroll through the list of tour
            package below and you will find tour package covering almost every
            important destination in Southern India. Southern India is a farm
            for its temple, its architecture and its rich{" "}
            <em className="place_txt">cultural heritage</em>. We have several
            tour packages that include Savdhan India best known tourism
            destination like{" "}
            <em className="place_txt">Chennai, Mahabalipuram, Mysore</em> etc.
            specialized in taylor made South India tour in compass state like
            Andhra Pradesh, <em className="place_txt">Kerala, Tamil Nadu</em>{" "}
            and <em className="place_txt">Karnataka</em>. The state come under
            Southern India speak their own states official language like
            Kannada, Malayalam, Telugu and Tamil EC surround by the Bay of
            Bengal, Arabian Sea, Indian Ocean and the East, West and South
            respectively. South India is a blessed with unlimited tourism
            attraction like <em className="place_txt">wildlife</em> sanctuary{" "}
            <em className="place_txt">beaches</em>.{" "}
            <em className="place_txt">Hill station</em>, churches, temple{" "}
            <em className="place_txt">fair and festivals</em> and houseboat stay
            in backwater.
          </p>
        </div>
        <div className="dynamic_flex_container">
          {southindiaData.tourData
            .filter((item, index) => item.section === "southindia")
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

export default SouthIndia;
