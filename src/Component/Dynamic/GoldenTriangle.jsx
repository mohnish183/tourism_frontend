import React from "react";
import "../../ComponentUI/Dynamic.css";
import { StoreData } from "../../Store/Store";
import { useContext } from "react";
function GoldenTriangle() {
  const goldenData = useContext(StoreData);
  return (
    <>
      <div className="dynamic_img">
        <img src={goldenData.headerImg[0].golden_triangle} alt="not found" />
      </div>
      <div className="dynamic_main_container">
        <div className="dynamic_discription">
          <h1>Golden Triangle Tour India</h1>
          <hr />
          <p>
            India's golden triangle is a tourist circuit which connects the
            national capital Delhi, Agra and Jaipur. The Golden Triangle is so
            called because of the triangular shape formed by the locations of
            New Delhi, Agra and Rajasthan on a map. But now Amritsar is emerging
            as the fourth angle of this triangle. The trips usually start in
            Delhi, moving south to the site of Taj Mahal at Agra, then west to
            the desert landscapes of Rajasthan. It is normally possible to do
            the trip by coach or private journey through most tour operators.
            The Golden Triangle is now a well-traveled route, providing a good
            spectrum of the country's different landscapes. The circuit is about
            720 km by road, with each leg being about 4 to 6 hours of drive. The
            Shatabdi express train also connects Delhi with Agra and Jaipur.
            Golden triangle India welcomes tourists to the best of Indian
            destinations that will make your journey memorable. So, if you want
            to taste the culture and religion of India, a golden triangle
            package is a good choice for you. The India Tourism has clubbed this
            Golden Triangle Tour with many splendid places of India like
            Amritsar, Goa, Kerala, Varanasi, Himachal, Khajuraho and many more.
            Then still, what are you thinking? Set forth on any Golden Triangle
            Tour & nearby Destination Packages listed below and enjoy a rich
            holiday experience in India. If you still haven't found the right
            tour that you were looking for, email us or talk to our dedicated
            tour consultants who will be happy to tailor-make one for you.
          </p>
        </div>
        <div className="dynamic_flex_container">
          {goldenData.tourData
            .filter((item, index) => item.section === "golden")
            .map((item, index) => {
              return (
                <>
                  <div className="dynamic_items">
                    <img src={item.img} alt="not found" />
                    <p>{item.name}</p>
                  </div>
                </>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default GoldenTriangle;
