import React from "react";
import "../../ComponentUI/Dynamic.css";
import { StoreData } from "../../Store/Store";
import { useContext } from "react";

function Arunachal() {
  const arunachalData = useContext(StoreData);
  return (
    <>
      <div className="dynamic_img">
        <img src={arunachalData.headerImg[0].arunachal} alt="not found" />
      </div>
      <div className="dynamic_main_container">
        <div className="dynamic_discription">
          <h1>Arunachal Pradesh Tourism</h1>
          <hr />
          <p>
            Arunachal Pradesh Tourism Arunachal Pradesh, located in north
            eastern India, is known as the "Land of the Rising Sun". The
            literary meaning of this phrase is "the land of the dawn lit
            mountains." The state has its capital in Itanagar, which is also its
            largest city. Arunachal Pradesh is known for its natural beauty and
            is backed by a strong agricultural economy, with pulses, sugarcane,
            rice, wheat, and maize being its main crops. The state also has a
            considerable amount of forest cover, which ensures that forest
            products contribute to its economy. However, the tourism sector of
            the state has not been fully utilized.
          </p>
          <p className="place_txt">History</p>
          <p>
            The history of pre-modern Arunachal Pradesh is unclear. According to
            the Arunachal Pradesh government, the Hindu texts Mahabharata
            mention the region as the Prabhu Mountains of the Puranas, and where
            sage Parashurama washed away sins, the sage Vyasa meditated, King
            Bhishmaka founded his kingdom, and Lord Krishna married his consort
            Rukmini. On the other hand, the Kalika Purana written in the 10th
            century mentions the region to be ruled by the descendants of a king
            named Bhirmuko of the Chutika (today's Chutia) clan. Recorded
            history only became available in the Chutiya chronicles. The Monpa
            and Sherdukpen do keep historical records of the existence of local
            chiefdoms in the northwest as well. Northwestern parts of this area
            came under the control of the Monpa kingdom of Monyul, which
            flourished between 500 B.C. and 600 A.D. The remaining parts of the
            state, especially those bordering Myanmar, were under the control of
            the Chutiya Kings. However, most Arunachali tribes remained in
            practice largely autonomous up until Indian independence and the
            formalisation of indigenous administration in 1947. Recent
            excavations of ruins of Hindu temples, such as the 14th century
            Malinithan at the foot of the Siang hills in West Siang, indicate
            they were built during the Chutiya reign. Another notable heritage
            site, Bhismaknagar (built in 8th century), has led to suggestions
            that the Chutiya people had an advanced culture and administration
            in prehistoric times. The third heritage site, the 400-year-old
            Tawang Monastery in the extreme north-west of the state, provides
            some historical evidence of the Buddhist tribal people. The sixth
            Dalai Lama Tsangyang Gyatso was born in Tawang.
          </p>
          <p className="place_txt">Fairs & Festivals</p>
          <p>
            Fairs and festivals in Arunachal Pradesh are a fine way to
            understand the state's rich culture and traditional practices. They
            are an extension of the lives of the people of the state and are
            characterized by a lot of color. There are festivals with religious
            undertones as well as merry affairs, and many of them are closely
            linked to agriculture, the main occupation of the state. These
            festivals are celebrated on a grand scale and are characterized by
            prayers that are later followed by merry making. Among the most
            popular festivals of Arunachal Pradesh are Ziro Festival of Music,
            Losar Festival, Tamladu Festival, and Sangken Festival.
          </p>
          <p className="place_txt">Best Time To Visit</p>
          <p>
            Arunachal Pradesh is located at a high altitude and has pleasant
            weather throughout the year. However, not all activities may be
            available at all times, so it is advisable to cross-check the
            availability and seasons for each site or activity. The most
            preferable months to plan your trip to Arunachal Pradesh are from
            October to April when the weather is pleasant, and you can move
            around happily under the clear blue sky to have the most fun. It is
            recommended to avoid June to September when the rains come down
            hard, and it becomes a bit tough for tourists to travel in the
            state.
          </p>
          <p className="place_txt">How To Reach :-</p>
          <p>
            <span>By Air:</span> Lilabari in Assam is the nearest airport at a
            distance of 67 km from Itanagar, the state capital. There are
            connecting flights to Guwahati from Lilabari. Flights from Mumbai,
            Delhi, Chennai, Kolkata, Jaipur, Bengaluru, Ahmadabad, etc. operate
            to Guwahati. Taxis and buses are available from Guwahati to reach
            Itanagar. Pawan Hans operates helicopter services from Guwahati to
            Itanagar thrice a week. Kolkata is the nearest international airport
            at a distance of 760 km.
          </p>
          <p>
            <span>By Rail:</span> The nearest train station connecting Arunachal
            Pradesh to other major cities of India is Harmuti train station in
            Assam, which is around 43 km away (just an hour's drive) from
            Itanagar, the state capital. Once you reach Harmuti, you can take a
            bus or hire a taxi for your onward journey towards Arunachal
            Pradesh.
          </p>
          <p>
            <span>By Road:</span> Itanagar is well connected to most neighboring
            regions of Arunachal Pradesh. Daily overnight buses from Guwahati
            ply to Itanagar. AST buses also connect Itanagar to Shillong, Ziro,
            Guwahati, Balijan, Poma, Lilabari, Jote, Raga, Sagalee, Pasighat,
            Dibrugarh, Tezpur, Bombdila, etc.
          </p>
          <p className="place_txt">Tourist Attraction</p>
          <p>
            Malinithan is a temple site located in the north-eastern state of
            Arunachal Pradesh in India, situated at the foot of the Siang hills
            under the Likabali Sub-Division of West Siang District. It is a holy
            place of worship visited by a huge number of visitors and pilgrims
            every year. According to legend, on the way to Dwarka from
            Bhismaknagar, Lord Krishna with his newly married wife Rukmini Devi
            begged blessings of Goddess Parvati. Devi Parvati greeted the newly
            married couple with a garland. The stringing of the garland was so
            unique that overwhelmed Krishna called Devi Parvati as "Sucharu
            Malini," or a lady who strings garlands beautifully, and hence, the
            name Malinithan was achieved. The nearest airport from Malinithan is
            Leelabari or Dibrugarh in Assam. A helipad is also situated at
            Along. From here, one can take a bus to Malinithan. By bus or car,
            one can easily reach Malinithan from Guwahati or Itanagar.
          </p>
        </div>
        <div className="dynamic_discription">
          <h1>Things To See In Arunachal Pradesh</h1>
          <hr />
        </div>
        <div className="dynamic_flex_container">
          {arunachalData.tourData
            .filter((item, index) => item.section === "arunachal")
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
          <h1>Things To See In Arunachal Pradesh</h1>
          <hr />
        </div>
        <div className="dynamic_flex_container">
          {arunachalData.tourData
            .filter((item, index) => item.section === "arunachal_1")
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

export default Arunachal;
