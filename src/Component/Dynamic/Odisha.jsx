import React from "react";
import "../../ComponentUI/Dynamic.css";
import { StoreData } from "../../Store/Store";
import { useContext } from "react";
function Odisha() {
  const odishaData = useContext(StoreData);
  return (
    <>
      <div className="dynamic_img">
        <img src={odishaData.headerImg[0].odisha} alt="not found" />
      </div>
      <div className="dynamic_main_container">
        <div className="dynamic_discription">
          <h1>Odisha Tourism</h1>
          <hr />
          <p>
            Tourism in Odisha is a significant contributor to the economy of
            Odisha, India, boasting a 500 km (310 mi) long coastline, towering
            mountains, serene lakes, and frolicking rivers. Odisha is one of the
            major tourism sectors in India, offering a wide range of tourist
            attractions, including wildlife reserves, beaches, temples,
            monuments, arts, and festivals. The Odisha Tourism Development
            Corporation, a Public Sector Undertaking of the Government of
            Odisha, is also actively developing the tourism sector of Odisha and
            India.
          </p>
          <p className="place_txt">History</p>
          <p>
            The name Odisha refers to the current state in India. In different
            eras, the region and parts of the region were known by different
            names, and the boundaries of the region have varied over the ages.
            Human history in Odisha begins in the Lower Paleolithic era, as
            Acheulian tools dating to that period have been discovered in
            various places in the region.[1] The early history of Odisha can be
            traced back to mentions found in ancient texts like the Mahabharata,
            Maha Govinda Sutta, and some Puranas. In 261 BCE, Ashoka of the
            Mauryan dynasty conquered the region in the bloody Kalinga War,
            which was fought at the banks of River Daya near present-day
            Bhubaneswar. The resulting bloodshed and suffering of the war deeply
            affected Ashoka, leading him to turn into a pacifist and convert to
            Buddhism. He sent peace emissaries to various neighboring nations,
            which indirectly caused the spread of Buddhism in Asia.
          </p>
          <p>
            The region was also known to other kingdoms in the region of East
            Indies due to maritime trade relations.The year 1568 CE is
            considered a pivotal point in the region's history. In 1568 CE, the
            region was conquered by the armies of the Sultanate of Bengal led by
            the iconoclast general Kalapahad. The region lost its political
            identity, with following rulers acting more as tributary lords than
            actual kings. The Marathas gained control of the region for almost
            half a decade after 1751, and the British took control in 1803,
            dividing the region into parts of other provinces. In 1936, the
            province of Odisha was formed based on populations of Odia-speaking
            people.
          </p>
          <p className="place_txt">Fairs & Festivals</p>
          <p>
            Fairs & Festivals in Odisha (Orissa) - With numerous religions,
            ancient temples, local shrines, tribes, and an array of sacred
            places, Odisha (Orissa) observes an uncountable number of festivals
            and fairs round the year. Major Odisha (Orissa) Festivals include
            the Jagannath Puri Rath Yatra and Durga Puja. The flourishing of
            three different religions on the holy land of Odisha (Orissa) makes
            it mandatory to celebrate various religious Odisha festivals with
            great fanfare. Odisha's cultural and religious festivals are
            well-known throughout India.
          </p>
          <p className="place_txt">Best Time To Visit</p>
          <p>
            The best time to visit Orissa is from October to March, which is the
            peak season for tourists. During these months, the weather is
            pleasant and ideal for sightseeing, exploring beaches, wildlife, and
            temples. Additionally, it is the time when migratory birds arrive in
            Orissa, making it a perfect time for bird watching at Chilka Lake
            and other national parks. So, if you are planning a holiday vacation
            in Orissa, it is recommended to book your holiday packages during
            these months to enjoy the best of weather and natural attractions.
          </p>
          <p className="place_txt">How To Reach :-</p>
          <p>
            <span className="place_txt">By Air:</span> Biju Patnaik Airport in
            Bhubaneswar is the best way to reach Odisha by air. The airport is
            well connected to major cities in India like Delhi, Mumbai, Kolkata,
            and Chennai.
          </p>
          <p>
            <span className="place_txt">By Rail:</span> Odisha is well connected
            to the rest of India via its extensive railway network. Trains to
            all metro cities in India operate from and to Odisha.
          </p>
          <p>
            <span className="place_txt">By Road:</span> Odisha is very well
            connected to other parts of the country by road. You can easily get
            taxis and buses for traveling to various cities in Odisha.
          </p>
        </div>
        <div className="dynamic_discription">
          <h1>Things To See In Odisha</h1>
          <hr />
        </div>
        <div className="dynamic_flex_container">
          {odishaData.tourData
            .filter((item, index) => item.section === "odisha")
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
        <div className="dynamic_discription">
          <h1>Odisha Tour Packages</h1>
          <hr />
          <p>
            Orissa tour packages are ideal for planning a peaceful vacation in a
            wonderful place like this. The historical and cultural state of
            Orissa is placed amidst the Lush Eastern Ghats. A tour to Orissa has
            various natural charms such as gleaming lakes, gushing waterfalls,
            bustling beaches, meandering rivers, and mountains of Eastern Ghats
            that are home to a variety of flora and fauna.
          </p>
        </div>
        <div className="dynamic_flex_container">
          {odishaData.tourData
            .filter((item, index) => item.section === "odisha_1")
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

export default Odisha;
