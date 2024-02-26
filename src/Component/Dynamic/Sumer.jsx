import React from "react";
import "../../ComponentUI/Dynamic.css";
import { StoreData } from "../../Store/Store";
import { useContext } from "react";
function Sumer() {
  const summerData = useContext(StoreData);
  return (
    <>
      <div className="dynamic_img">
        <img src={summerData.headerImg[0].summer} alt="not found" />
      </div>
      <div className="dynamic_main_container">
        <div className="dynamic_discription">
          <h1>Summer Tour Package in India</h1>
          <p>
            <span className="place_txt">Summer Holidays India</span> is a time
            to decompress and unstrain, a time to see new sights along with
            going to favorite places.{" "}
            <span className="place_txt"> Summer vacation packages</span> offer
            one of the best opportunities to spend some quality time with your
            family. During the summer months, the cities placed on the northern
            plains such as <span className="place_txt">Jaipur, Agra</span> and{" "}
            <span className="place_txt">Delhi </span> etc. face the scorching
            heat and a vacation up towards the north and northeast to places
            like <span className="place_txt">Kashmir, Leh, Ooty</span> and{" "}
            <span className="place_txt">Ranikhet</span> becomes almost
            necessary. For exploring and experiencing the splendor of the{" "}
            <span className="place_txt">hill stations</span> of India, summer is
            the best time. <span className="place_txt">Summer vacation</span> in
            India is a lot of fun with a whole lot of activities in which one
            can indulge. You can take a stroll at the serene beaches of{" "}
            <span className="place_txt">Goa, Kerala</span>
            or Andamans. Planning a trip to 'heaven on earth'-Kashmir or
            partaking in adventure activities in{" "}
            <span className="place_txt">Leh</span> would also be a great idea.
            Whitewater rafting in <span className="place_txt">Rishikesh</span>{" "}
            is a wonderful option too.
          </p>
          <p className="place_txt">Top 5 Summer Holidays In India</p>
          <p>
            <span className="place_txt">1.Ladakh -</span> Ladakh is a thrilling
            holiday destination and such an ultimate gateway. With a myriad of
            interesting places to visit in Ladakh, there are mighty mountain
            peaks, breathtaking views, beautiful lakes, and perfect weather that
            make it a perfect vacation destination.
          </p>
          <p>
            <span className="place_txt">2.Manali -</span> Manali is like a
            backpacker's paradise. It is the most popular backpacking and
            honeymoon destination located in Himachal Pradesh. It has been one
            of the most visited best summer destinations in India, but it is
            also very famous for adventure activities and holy places too.
          </p>
          <p>
            <span className="place_txt">3.Nainital -</span> It is a land of tals
            and devis located in Uttarakhand. Nainital is the most popular hill
            station for holidays. There are lots of places to visit in Nainital,
            but it can take a pretty long time, like Naini Lake, Naina Devi
            temple, and many others, which attract the maximum number of
            tourists. As you can't plan your summer vacation without including
            Nainital.
          </p>
          <p>
            <span className="place_txt">4.Mussoorie -</span> Mussoorie is
            extremely very famous and popular to spend your summer vacation in
            India, and it is an undoubted queen of hill stations. Varied flora
            and lush green hilly lands attract lots of tourists to the little
            fairyland.
          </p>
          <p>
            <span className="place_txt">5.Ooty -</span> Ooty is extremely famous
            summer destinations in Tamil Nadu to spend your quality time with
            your family. This hill station is often called the queen of hills.
            Famous Toy Train is the main reason to visit this place.
          </p>
        </div>
        <div className="dynamic_flex_container">
          {summerData.tourData
            .filter((item, index) => item.section === "summer")
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

export default Sumer;
