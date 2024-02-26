import React from "react";
import "../../ComponentUI/Dynamic.css";
import { StoreData } from "../../Store/Store";
import { useContext } from "react";
function Goa() {
  const goaData = useContext(StoreData);
  console.log(goaData);
  return (
    <>
      <div className="dynamic_img">
        <img src={goaData.headerImg[0].goa} alt="not found" />
      </div>
      <div className="dynamic_main_container">
        <div className="dynamic_discription">
          <h1>Goa Tour Package</h1>
          <hr />
          <p>
            <em className="place_txt">Goa tour packages</em> help you cherish
            memorable holidays in Goa amidst the swaying palms, white sands &
            sparkling waters. Savor delicious cuisines, enjoy the vibrant
            nightlife and just let go of yourself with the characteristic
            susegad vibe. Practice yoga and meditation or rejuvenate yourself
            with therapeutic spa sessions at one of the fine{" "}
            <em className="place_txt">luxury hotels in Goa</em>. With our{" "}
            <em className="place_txt">Goa holiday packages</em>,you can visit
            popular beaches of God, churches and temples.{" "}
            <em className="place_txt">Goa family tour</em> and Goa honeymoon
            package can be made unforgettable by exploring the beautiful beaches
            of Goa and by tasting the amazing seafood cuisine of Goa. Enjoy your
            honeymoon on the sandy beaches or witness a party spirit at beaches.
            The magical charm of Goa lies in each one of its aspects, be it the
            endless sea, incredible landscapes, spicy sea food.{" "}
            <em className="place_txt">Baga beach</em> is a popular spot for
            water sports. Baga beach market features stalls selling handicrafts
            and textiles. Baga is known for its long and sandy beach in Goa.
            Some other popular beaches of Goa include{" "}
            <em className="place_txt">
              Calangute, Anjuna, Colva, Vagator, Candolim, Agonda, Dona Paula,
              Panaji
            </em>{" "}
            etc. The period from October to March is very pleasant for tourists
            travelling to Goa. During this period, the sea condition remains
            normal and is good for swimming and water sports.
          </p>
        </div>
        <div className="dynamic_flex_container">
          {goaData.tourData
            .filter((item, index) => item.section === "goa")
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

export default Goa;
