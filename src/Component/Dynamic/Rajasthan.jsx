import React from "react";
import "../../ComponentUI/Dynamic.css";
import { StoreData } from "../../Store/Store";
import { useContext } from "react";
function Rajasthan() {
  const rajasthanData = useContext(StoreData);

  return (
    <>
      <div className="dynamic_img">
        <img src={rajasthanData.headerImg[0].rajasthan} alt="not found" />
      </div>
      <div className="dynamic_main_container">
        <div className="dynamic_discription">
          <h1>Rajasthan Tour Package</h1>
          <hr />
          <p>
            Rajasthan tour packages bring you a complete collection of unique
            tour packages. After all, Rajasthan is not just a state, it is the
            pride of its bygone rulers and the joy in the voice of people who
            say 'Padharo mhare Desh'. The desire to experience the floating
            bubbles of culture, traditions, history and its royalty never ends,
            but travelers can at least start from somewhere with our Rajasthan
            tour packages. Enjoy camel fairs, wildlife attractions, historic
            forts & palaces, lakes and much more. The best places to visit in
            Rajasthan are Jaipur, Udaipur, Jaisalmer, Jodhpur, Mandawa,
            Ranakapur, Mount Abu, and Ajmer-Pushkar. There are hundreds of
            attractions and activities to enjoy.The very name of Rajasthan
            conjures up the image of hilltop fortresses, maharajas with
            scimitars riding the painted elephants, the exquisitely carved
            havelis and the royal hunting grounds. Our Rajasthan holiday
            packages are designed to offer you a peek into the era where all you
            get to relish are opulence and artistry. These small things counted
            together make Rajasthan one of the most popular tourist places in
            India.
          </p>
          <p>
            Ajmer-Pushkar: Ajmer (pronounced 'Uh-j-mare') is a popular
            pilgrimage center famous for its Dargah Sharif-tomb of the Sufi
            saint Khwaja Moinuddin Chisti. Ajmer is also the base for visiting
            Pushkar (pronounced 'Push-cur'), a 30-minute uphill drive from
            Ajmer. Pushkar is a famous tourist destination renowned for its
            Hindu pilgrimage spots, flea market, and great roadside food. You
            can get some amazing pictures of Indian sadhus here.
          </p>
          <p className="place_txt">Bikaner</p>
          <p>
            Bikaner (pronounced 'Beeka-nair') is famous for its palaces and its
            intricately sculptured red and yellow sandstone temples. The climate
            in Bikaner is characterized by extreme variations in temperature, so
            be sure to carry weather-appropriate clothing while visiting.
            However, despite its rugged climate, it is said that Bikaner was
            once an oasis town used as a stop-over on the trade route between
            Central Asia and India. It's always interesting to plan a trip
            around the time of the Bikaner Camel festival, usually held in
            January.
          </p>
          <p className="place_txt">Jaipur</p>
          <p>
            Aptly nicknamed 'The Pink City' for its peculiar affinity for pink
            stone buildings Jaipur is part of the famous Golden Triangle of
            cities formed with Delhi and Agra as the other two corners. A
            bustling capital city and business centre today, Jaipur still
            retains a royal charm that never fails to surprise. Jaipur is home
            to several stunning ancient forts. A great time to visit is during
            January when the annual Literary Festival is held.
          </p>
          <p className="place_txt">Jaisalmer</p>
          <p>
            'The Golden City' of Jaisalmer (pronounced 'Jey-sull-mare') is
            popular for its 12th century Jaisalmer Fort as well as beautiful
            havelis, miles of smooth yellow sand dunes, and camel safaris. Well
            known for its camel hide artefacts and the stupendous musical and
            dance talent of its native people, Jaisalmer is the very heart of
            the Thar Desert.
          </p>{" "}
          <p className="place_txt">Jodhpur</p>
          <p>
            Jodhpur is a city with a long and captivating history. While India
            was still under British colonization, the walled city of Jodhpur had
            the largest land area of all Rajputana provinces. Today, it is a
            flourishing centre of handicraft export and tourism, with tons of
            hotels and palace resorts. Jodhpur has contributed significantly to
            the culinary traditions of the country. We strongly recommend a
            visit to the famous Umaid Bhavan Palace to soak in some history.
          </p>
          <p className="place_txt">Ranthambore</p>
          <p>
            Once a princely game conserve, the sanctuary at Ranthambore
            (pronounced 'Run-thum-bore') is home to the beautiful Indian tiger.
            Ranthambore national Park is open from October to may every year.
            You will also get a chance to see an abandoned fortress and lake and
            take pictures of the gazillion monkeys that are oddly human in their
            behaviour. Don't miss a chance to visit the majestic nahargarh
            Palace Hotel run by the very hospitable royal family there. It's
            gorgeous, especially at night. Katy Perry had her much publicised
            royal wedding there.
          </p>
          <p className="place_txt">Udaipur</p>
          <p>
            Udaipur is known as the 'City of Lakes' in view of the 8 prominent
            lakes within its limits. The Lake Palace Hotel in the middle of Lake
            Pichola is a spectacular sight especially when lit up at night.
            Other big tourist attractions include the 'Shilpgram Fair' which is
            a craftsmen's village showcasing ethnic craft, art & culture and the
            'City Palace' with its various towers, domes, arches and courtyards.
            The live cultural show at 'Bagore ki Haveli' is worth a visit.
            Udaipur has been used as a backdrop for lots of movies including the
            James Bond flick 'Octopussy.
          </p>
          <p className="place_txt">Mount Abu</p>
          <p>
            Rajasthan has a hill station, and it is like a breath of fresh air
            in the midst of all that desert aridity. Mount Abu was once the
            summer capital of Maharajas. Today, it makes for a fine holiday
            destination, situated as it is on a hill. The place also holds
            special religious importance for Jains. Boating in Lake Nakki,
            visiting Dhrudhiya waterfalls, and exploring the lush Mount Abu
            Wildlife Sanctuary are just some of the attractions here. The most
            famous one is the Dilwara Jain Temple.
          </p>
          <p className="place_txt">Chittorgarh</p>
          <p>
            Chittorgarh is a town not too far from Udaipur. It has a glorious
            past with some of the most valiant Rajasthani rulers, from Rawal
            Ratan Singh of Chittor to Samar Singh, who became one of the topmost
            allies of Prithviraj Chauhan's army. The revered Queen Padmavati,
            who was as beautiful as she was brave, is also credited to this
            land. Today, Chittorgarh is home to many forts, ruins, and temples,
            making it a historian's paradise. A 1-2 day trip is a must to
            Chittorgarh when you are visiting Udaipur.
          </p>
        </div>
        <div className="dynamic_flex_container">
          {rajasthanData.tourData
            .filter((item, index) => item.section === "rajasthan")
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

export default Rajasthan;
