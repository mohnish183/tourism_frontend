import React from "react";
import "../../ComponentUI/Dynamic.css";
import { StoreData } from "../../Store/Store";
import { useContext } from "react";
function Adventure() {
  const adventureData = useContext(StoreData);
  return (
    <>
      <div className="dynamic_img">
        <img src={adventureData.headerImg[0].adventure} alt="not found" />
      </div>
      <div className="dynamic_main_container">
        <div className="dynamic_discription">
          <h1>India Adventure Tours</h1>
          <hr />
          <p>
            India is a big center of most popular adventure activities that
            offers wonderful prospects for adventure tourism all across the
            world. Manali, a beautiful well-known hill station of Himachal
            Pradesh, is a perfect place to enjoy a number of adventure sports
            such as fishing, white water rafting, paragliding, skiing,
            mountaineering, hiking and a few more. Uttarakhand, Himachal
            Pradesh, Jammu & Kashmir, Sikkim, Upper fringes of North Eastern
            Himalayan ranges are main adventure spots in India. Other thrilling
            adventure sports in India are scuba diving, surfing through Arabian
            Sea and Bay of Bengal. Some of the best treks in the world, which
            are elaborated in our India adventure tours. Jeep safaris to deep
            jungles as well as high mountains, biking on winding roads of
            mountains or along tropical beaches of Goa, elephant safaris to some
            of the most celebrated tiger reserves & national parks in India can
            all be included in your adventure trip during your Indian Adventure
            Tours.
          </p>
          <p className="place_txt">ANGLING:</p>
          <p>
            India is an angler's paradise. This sport has existed from the days
            of British Raj, Anglingthough not as popular as it is around the
            world, is gathering momentum very fast. The wide variety of fishes,
            innumerable fresh water streams and beautiful countryside as
            backdrop provide a perfect ambience to attract tourist for Angling.
            Angling in India can be conveniently classified into:
          </p>
          <p>
            <span className="place_txt">Mahseer (Barbus Tor) fishing:</span> The
            Barbus Tor, popularly called the Mahseer or the Tiger of the Indian
            Rivers, is one of the largest freshwater fish and one of the
            greatest fighting fish in the world. It is natural to Indian lakes
            and streams and can attain sizes upto 5.5 ft and weigh over 50 kgs.
            Mahseer is generally found in the rivers of the Terai regions of the
            Himalayas, the Shivalik Hills in the north, and the river Kaveri in
            the south, where it has been fished for successfully with rod and
            line. The areas where angling for Mahseer can be profitably pursued.
          </p>
          <p>
            <span className="place_txt">Trout fishing:</span> Unlike the
            Mahseer, the Trout is not indigenous to Indian waters. The Snow
            Trout is however fond in all high altitude streams and lakes. It was
            introduced into various predetermined lakes and river in various
            parts of the country. Trout hatcheries are in operation in the
            Kashmir valley, Kullu valley. Agoda near Uttrakashi and Avalanche in
            the Nilgiris. The Snow Trout is however, touch in all high altitude
            streams and lakes.
          </p>
          <p>
            <span className="place_txt">Sea Fishing:</span> Sea fishing as a
            sport has not bet been well developed in India. But there is a good
            variety of game fish off the coasts of India like Baracuda, Mullet,
            Perch, Tuna, Marlin, Blue Marlin, Sail Fish and Sear. So the
            enterprising angler can put together a rewarding and memorable trip
            in some very exotic regions of India.
          </p>
          <p className="place_txt">
            Mountaineering. Trekking and Rock Climbing
          </p>
          <p>
            The main attraction of the summer months in the Himalayan states is
            trekking and mountain climbing. Trekkers, without any prior
            experience, can easily manage the altitudes the range from 2500 to
            4000 meters above sea level in the hilly areas of Jammu and Kashmir,
            Himachal Pradesh, Uttar Pradesh and Sikkim. In Ladakh, the Nun Kun
            massif, The Zanskar group, The central Himalayas, Arunachal Pradesh,
            Nanda devi, Kamet and Dunagiri offer challenging peaks for
            mountaineering.
          </p>
          <p className="place_txt">SAFARIS</p>
          <p>
            The Indian Himalayas is prime Safari in India, be it on a jeep, a
            bike, cycle or an elephant!! And can well be described as one of the
            last travel frontiers on earth!
          </p>
          <p className="place_txt">Snow SPORTS</p>
          <p>
            Winter sports in India are centered around Kashmir, Uttar Pradesh
            and Himachal Pradesh. Skiing usually starts by the end of DECEMBER
            and lasts till the end of MARCH. Gulmarg in Kashmir, Auli in Uttar
            Pradesh and Manali in Himachal Pradesh provide good snow ski slopes.
            Heli skiing in Manali and Gulmarg provides an enormous varieties of
            ski runs and routes.
          </p>
          <p className="place_txt">WATER SPORTS</p>
          <p>
            India's coastal states are good for water sports during OCTOBER and
            MARCH. Goa is blend d serenity and excitement down a 10km coastline
            studded with some of the world's most beautiful beaches. Lakshadweep
            offers excellent wind surfing, Snorkeling and Scuba diving in the
            crystal clear waters of the lagoons which surround each island.
          </p>
        </div>
        <div className="dynamic_flex_container">
          {adventureData.tourData
            .filter((item, index) => item.section === "adventure")
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

export default Adventure;
