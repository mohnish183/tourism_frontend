import React from "react";
import "../../ComponentUI/Dynamic.css";
import { StoreData } from "../../Store/Store";
import { useContext } from "react";
function Beaches() {
  const beachesData = useContext(StoreData);
  return (
    <>
      <div className="dynamic_img">
        <img src={beachesData.headerImg[0].beaches} alt="not found" />
      </div>
      <div className="dynamic_main_container">
        <div className="dynamic_discription">
          <h1>India Special Offer Tour Packages</h1>
          <hr />
          <p>
            <span>Beach Tour Packages</span> in India are designed keeping in
            mind discerning needs of the tourists. Some tourists want to relish
            holidays besides the beaches. Many tourists prefer beach holidaying
            in the last leg of their India tour. Still, the foremost choices of{" "}
            <span>beach travel</span> in India include the beautiful sea shores
            of <span>Goa</span>, where the tropical sun-bathed beaches of
            Anjuna, Baga & Dona Paula have something for every visitor. Other
            beaches such as <span>Kovalam, Marina and Juhu</span>, not just
            focus on tourism; they are also venues for recreation and
            entertainment for the local population and the outstation tourists.
            Go through our various <span>India Beach Tour Packages</span> to
            pick the one that best fits your budget and duration of your tour
            and enjoy a memorable beach holiday in India. We have every type of
            India beach tour packages to fulfill your desires, whether you are
            looking for a<span> honeymoon package</span> to <span>Goa</span> or
            a beach holiday in Kerala, you can pick the best as per your choice
            from our comprehensive India beach tour packages at exciting prices.
            So, without giving it a second thought, book your India beach
            holiday package online through Rover Holidays and be ready to
            experience the most rejuvenating <span>beach holiday in India</span>
            .
          </p>
          <p>
            <span>Goa Beach Tour Package :-</span>Goa, is the 'beach paradise'
            of India and also the home to some of the world's finest beaches
            that can be explored during a beach holiday in India. Goa Beach Tour
            Packages - Goa, is the 'beach paradise' of India and also the home
            to some of the world's finest beaches that can be explored during a
            beach holiday in India.
          </p>
          <p>
            <span>Kerala Beach Tour Packages :-</span> Kerala has numerous
            enchanting beaches, most of which are utterly pristine and unspoilt.
            The most famous of the beaches of Kerala is Kovalam Beach, which is
            located near Thiruvananthapuram.
          </p>
          <p>
            <span>Andaman Beach Tour Packages :- </span>Andaman is a popular
            beach destination of India. In fact, it is a group of islands, and
            Andaman comes under some of the best beaches of the world. Andaman
            has some of the best beaches, named Neil Island and Radhanagar
            Beach, which receives the maximum numbers of tourists on Andaman
            Tours.
          </p>
          <p>
            <span>Gujarat Beach Tour Packages :-</span> A trip to Gujarat is
            rejuvenating, relaxing, and exciting as one could enjoy viewing best
            beaches, historical sites, and picturesque landscapes. Find our
            collection of elegantly crafted Gujarat Tour Beach Packages and
            explore the main tourist places and attractions of Gujarat. Mandvi,
            Veraval, and Diu are some of the best beaches of Gujarat; you must
            try out our Best Gujarat Beach Tour Packages.
          </p>
          <p>
            <span>Lakshadweep Beach Tour Packages :-</span> Discover the beauty
            of Lakshadweep! Lakshadweep is a tropical paradise with 36 islands,
            of which only 10 are inhabited and only five are open to tourists.
            It is the only place in India where you can find a coral reef
            formation. Book our Lakshadweep Beach tour packages and explore the
            beauty of Lakshadweep at its best.
          </p>
        </div>
        <div className="dynamic_flex_container">
          {beachesData.tourData
            .filter((item, index) => item.section === "beaches")
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

export default Beaches;
