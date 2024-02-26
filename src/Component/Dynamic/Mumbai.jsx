import React from "react";
import "../../ComponentUI/Dynamic.css";
import { StoreData } from "../../Store/Store";
import { useContext } from "react";
function Mumbai() {
  const mumbaiData = useContext(StoreData);
  return (
    <>
      <div className="dynamic_img">
        <img src={mumbaiData.headerImg[0].mumbai} alt="not found" />
      </div>
      <div className="dynamic_main_container">
        <div className="dynamic_discription">
          <h1>Mumbai Tour Package</h1>
          <hr />
          <p>
            Mumbai is in all ways a mega-city driven by power, wealth, glamour
            and fame which attracts people to give shape to their dreams and
            aspirations. But it is also a city with strong historical links,
            wonderful British architecture, museums, beaches, places of worship,
            and above all, a true galaxy of stars where Bollywood reigns
            supreme.
          </p>
          <p>
            It is said that every train that comes to Mumbai brings on it
            hundreds of people from across India who are not only drawn to
            'experience' the city's mesmerising attractions but would also like
            to make it their home. A city of diverse cultures and a melting pot
            of commerce, industry, entertainment, enterprise, and politics,
            Mumbai's trysts with wealth and fame have, however, been recent. It
            wasn't a cosmopolitan finance centre to begin with. Its history has
            witnessed several shifts in power, and the seven islands changed
            hands frequently.
          </p>
          <p>
            Mumbai undeniably is the business capital of India and one of the
            major port cities in the country. Mumbai has a diverse nature and
            multi-cultural lifestyle. On one hand, this city is the hometown of
            Bollywood, and on the other, this city has India's largest slum
            population. With the huge inflow of migrants, this city welcomes all
            with open arms. The city developed its identity from these
            communities that are settled in here. The culture here is a fine
            amalgamation of festivities, religions, music, food, music and
            theatres. Mumbai is said to have most active nightlife in comparison
            to other cities.
          </p>
          <p>
            This city celebrates the festivals of every religion with grandeur
            and fervour. The popular festivals celebrated in Mumbai are Diwali,
            Holi, Ɛid, Christmas, Navratri, Good Friday, Dussehra, Moharram,
            Ganesh Chaturthi, Durga Puja and Maha Shivratri. Fairs and fests add
            on to the glitter of the city; Kala Ghoda Arts Festival is an
            exhibition that displays works of various renowned artists in the
            fields of music, dance, theatre, and films. Also, Bandra fair is an
            annual fair that begins on the next Sunday after September 8 each
            year. This festival commemorates the nativity of Mother Mary on
            September 8. This city has a lot to offer in terms of attractions,
            for those who want to explore this vividly colourful place.
          </p>
        </div>
        <div className="dynamic_flex_container">
          {mumbaiData.tourData
            .filter((item, index) => item.section === "mumbai")
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

export default Mumbai;
