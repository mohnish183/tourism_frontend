import React from "react";
import "../../ComponentUI/Dynamic.css";
import { StoreData } from "../../Store/Store";
import { useContext } from "react";
function KeralaOne() {
  const keralaOneData = useContext(StoreData);
  return (
    <>
      <div className="dynamic_img">
        <img src={keralaOneData.headerImg[0].kerala_1} alt="not found" />
      </div>
      <div className="dynamic_main_container">
        <div className="dynamic_discription">
          <h1>Kerala Tour Package</h1>
          <hr />
          <p>
            Kerala, a state situated on the tropical Malabar Coast of
            southwestern India, is one of the most popular tourist destinations
            in the country. Named as one of the ten paradises of the world by
            National Geographic Traveler, Kerala is famous especially for its
            ecotourism initiatives and beautiful backwaters. Its unique culture
            and traditions, coupled with its varied demography, have made Kerala
            one of the most popular tourist destinations in the world. Growing
            at a rate of 13.31%, the tourism industry is a major contributor to
            the state's economy. Until the early 1980s, Kerala was a relatively
            unknown destination, with most tourism circuits concentrated around
            the north of the country. Aggressive marketing campaigns launched by
            the Kerala Tourism Development Corporation-the government agency
            that oversees tourism prospects of the state-laid the foundation for
            the growth of the tourism industry. In the decades that followed,
            Kerala Tourism was able to transform itself into one of the niche
            holiday destinations in India. The tag line Kerala God's Own Country
            was adopted in its tourism promotions and became a global
            superbrand. Kerala is regarded as one of the destinations with the
            highest brand recall. In 2010, Kerala attracted 660,000 foreign
            tourist arrivals.
          </p>
          <p className="place_txt">History</p>
          <p>
            The history of Kerala, India, dates back many millennia. Stone Age
            carvings in the Edakkal Caves feature pictorial writings believed to
            date to at least the Neolithic era around 5,000 BC, indicating the
            presence of a prehistoric civilization or settlement in this region.
            From as early as 3000 BC, Chera nadu, currently known as Kerala had
            established itself as a major spice trade center. Keralam, the then
            Chera nadu had direct contact across the Arabian Sea with all the
            major Mediterranean and Red Sea ports as well those of the Far East.
            The spice trade between Kerala and much of the world was one of the
            main drivers of the world economy. For much of history, ports in
            Kerala were the busiest (Muziris) among all trade and travel routes
            in the history of the world.
          </p>
          <p className="place_txt">Fairs & Festivals</p>
          <p>
            Kerala with its beautiful landscapes has more than enough reason to
            celebrate. And the varied culture of the state has given expression
            to a colorful mosaic of festivals and fairs. The spirit of
            celebration is very much a part of the ethos of the state of Kerala
            and for visitors to this state, its fairs and festivals are a
            must-see event to be included in their travel.
          </p>
          <p className="place_txt">Best Time to Visit Kerala:</p>
          <p>
            Kerala has two rainy seasons. One with the rest of the country and
            one in the winters and spring. While summers make the state too hot
            for comfort, the main monsoons leave no day wet with water. The
            monsoons can be an amalgamation of festivals, beautiful scenic views
            and the much talked about Ayurveda treatments. The backwaters would
            be flowing with monsoon water, and the temperatures would be down to
            enjoy the view to the fullest.
          </p>
          <p className="place_txt">How to Reach:</p>
          <p>
            <span className="place_txt">BY AIR -</span> Kerala has 2
            international airports - in Thiruvananthapuram and in Kochi while
            the domestic airport in Kozhikode is also strategically located.
            Flights of all the public and private airlines fly between these
            airports and link them to the main airports in India as well as
            abroad.
          </p>
          <p>
            <span className="place_txt">BY RAIL -</span> Kerala has more than
            200 railway stations, connecting various major cities as well as
            small towns of the state. Direct trains to various destinations in
            Kerala can be availed from major Indian cities such as Delhi,
            Mumbai, Chennai, Bangalore, and Kolkata, among others. Superfast and
            express trains such as Rajdhani and Duronto connect the larger
            junctions, whereas mail and passenger trains are also easily
            available. Kerala's railway network runs from Kasargod, a
            northwestern point of the state, to the southwestern
            Thiruvananthapuram.
          </p>
          <p>
            <span className="place_txt">BY ROAD -</span> You can reach Kerala
            from any part of the country using national Highways 17, 47 and 49.
            Karnataka and Tamil Nadu are directly linked to Kerala through a
            good network of roads. Many important cities fall on the way.
          </p>
        </div>
        <div className="dynamic_flex_container">
          {keralaOneData.tourData
            .filter((item, index) => item.section === "kerala_1")
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

export default KeralaOne;
