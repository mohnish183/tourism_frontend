import React from "react";

import "../ComponentUI/Home.css";
import "../Component/scroll";
import indiatour from "../Images/tourism-india.jpg";
import { StoreData } from "../Store/Store";
import { useContext } from "react";
import { NavLink } from "react-router-dom";

function Home() {
  let HomeData = useContext(StoreData);
  console.log(HomeData.tourData);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <>
      <div className="india-tour">
        <img src={indiatour} alt="not found" />
      </div>

      <div className="home_container">
        <div className="home_tour_container">
          <div className="home_tour_txt">
            <h1 className="headingtext">
              The India Tourism - Guided &amp; Customized Private Tour to India
            </h1>
            <p>
              <b>India Tourism</b> is an unequivocally welcoming nation, that
              bestows reverence and love for its visitors. A nation which
              follows only one belief blindly <b>“Atithi Devo Bhava”</b> which
              means “Guest is equivalent to God”. There is so much to discover,
              a land with varied civilizations, deep-rooted ideologies,
              uncountable faiths, that is also related to particular historical
              stories. <b>India Tourism</b> provides an outstanding rich
              heritage, tasty cuisines from numerous parts of the world, a
              multitude of enticing sightseeing spots, and much more while
              visiting this beautiful country. An avid traveler will simply find
              his place here.
              <br />
              <br />
              <b>Culture - India Tourism</b>
              <br />
              India is the country that quickly and last experiences on their
              mind get into one's heart. Perhaps there is no other nation with
              such a rich mixture of races, vivid colors, language, food, a land
              overloaded with vibrancy and intense inconsistencies. His country
              is the birthplace of Hinduism, Buddhism, Jainism and Sikhism;
              People in any area can be spotted adopting their own special
              cultural and religious traditions. Yoga is undeniably the biggest
              destination for spiritual visitors, and Rishikesh, situated in
              Northern India, is commonly regarded as the country's Yoga hub.
              Your trip to India will definitely send you goosebumps and a
              memory like a rollercoaster ride.
              <br />
              <br />
              <b>Architecture of India - India Tourism</b>
              <br />
              India has <b>32 UNESCO World Heritage-listed sites</b> around the
              country, making it an epitome of historical wonders, if we speak
              about the architectural beauty of India has an extensive array of
              attractive forts, palaces, temples and its ruins and shrines as
              well. India itself is an international tourist bundle, they only
              need to select a destination according to their desires and
              prepare their itinerary. If you have a deep urge to discover a
              wonderland on this planet, then pack our bags and come to India, a
              land that is truly blessed with an abundance of natural wonder.
              <br />
              <br />
              <b>Explore India - India Tourism</b>
              <br />
              Well, every part of the world has a different tale to tell, with
              enchanting elegance and majestic culture, Northern India is truly
              blessed, one can get absolutely soaked in valleys and waterfalls
              and lush greenery of Himalayan ranges. The western part of the
              world has a striking beauty of architectural wonder, and what
              people enjoy about this place is the contemporary lifestyle. And
              we're talking about the regions of the Sunderbans or the eastern
              part of India, well, no one can argue that this area is blessed
              with the scenic beauty of high hills, ondulating rivers and
              waterfalls. Finally, the southern area is blessed with planting
              and foliage loads, an exotic destination in the entire world, a
              combination of enticing beach sites, Tourists continue to see
              hills and waterfalls again and again! There are plenty of great
              reasons to visit India Tourism, so we have already offered a
              mini-tour.
              <br />
              <br />
              <b>Why Travel to India? - India Tourism</b>
              <br />
              Plan a trip once, and you will come to know that this nation
              embellishes exotic and energetic metropolitan conventions with
              both serene and plain village life. Welcoming you to "The Soul of
              Incredible India" with open arms and intriguing taglines such as,{" "}
              <b>"God's Own Country",</b> this country has its own special ways
              of making people fall in love with her!
              <br />
              Foreign tourists who fly to India, You are certainly in for a
              surprise, particularly for the first time. Things can seem a
              little messy, overwhelming, and out of reach before you start to
              become attuned to the way of life in this diverse country. You
              will better plan for the trip ahead by becoming acquainted with
              the terrain, climate, history, languages and other important
              pieces of knowledge. Here are a few specifics that would be
              helpful.
            </p>

            <h2 className="headingtext2">Find your Ideal Tour Packages</h2>
            <hr />
            <p className="target_txt">
              Travel in India is like nothing you've ever experienced, from the
              magnificence Taj Mahal to the highlights of Kerala, Goa and India,
              this is a great trip for first-time visitors as it encompasses all
              of the major tourist destinations.
            </p>
          </div>
          <div className="idealtool-container">
            {HomeData.tourData
              .filter((item, index) => item.heading === "Ideal Tour")
              .map((item, index) => {
                return (
                  <>
                    <NavLink
                      to={`${item.link}`}
                      className="block"
                      onClick={() => scrollToTop()}
                    >
                      <img src={item.img} alt="not found" />
                      <h4>{item.name}</h4>
                    </NavLink>
                  </>
                );
              })}
          </div>
          <div className="perfectHoliday-container">
            <h2>Find Your Perfect Holiday Destination</h2>
            <hr />
            <p>
              Check out this India most iconic heritage, natural beauty,
              colourful, cultural and spiritual Attractions India. Beaches,
              backwaters, vast stretches of deserts, snow-Laden peaks and Indian
              wildlife sanctuaries make the country one of the best winter
              destinations.
            </p>
            <div className="perfectHoliday-block">
              {HomeData.tourData
                .filter((item, index) => item.heading === "Perfect Holiday")
                .map((item, index) => {
                  return (
                    <>
                      <NavLink
                        to={item.link}
                        className="perfect-item-block"
                        onClick={() => scrollToTop()}
                      >
                        <img src={item.img} alt="not found" />
                        <h4>{item.name}</h4>
                        <p>{item.place}</p>
                      </NavLink>
                    </>
                  );
                })}
            </div>
          </div>
          <div className="yourStyle-container">
            <h1>Choose Your Style of Tour Packages</h1>
            <hr />
            <p>
              Our collection of tour are themed by a style to help you get the
              most out of your wonderful holiday in India whether you're looking
              for a small group tour, private tailor made holiday to see India,
              These packages are meant to cater every of your interest, and that
              too without hampering your comfort in the travel. The intriguing
              land of India has so much to explore.
            </p>
            <div className="yourStyle-block">
              {HomeData.tourData
                .filter((item, index) => item.heading === "Yourstyle Tour")
                .map((item, index) => {
                  return (
                    <>
                      <NavLink
                        to={item.link}
                        onClick={() => scrollToTop()}
                        className="yourstyle-item-block"
                      >
                        <img src={item.img} alt="not found" />
                        <p>{item.name}</p>
                      </NavLink>
                    </>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
