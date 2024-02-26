import React from "react";
import "../../ComponentUI/Dynamic.css";
import { StoreData } from "../../Store/Store";
import { useContext } from "react";
function Asam() {
  const assamData = useContext(StoreData);
  return (
    <>
      <div className="dynamic_img">
        <img src={assamData.headerImg[0].assam} alt="not found" />
      </div>
      <div className="dynamic_main_container">
        <div className="dynamic_discription">
          <h1>Assam Tourism</h1>
          <hr />
          <p>
            Assam is poised to become one of the greatest tourism hotspots in
            the days to come, as it has vast expanses of green natural
            surroundings and an abundant wildlife and bird-life. The famed tea
            gardens of Hathkhuli and Behora are among the prominent attractions
            that are visited by plenty of travelers every year. Many of them are
            all praise for the traditional "Bihu" folk dance which is performed
            during festive seasons or cultural events at some of the hotels and
            resorts. People who wish to shop for souvenirs and gift items can
            explore the stores that sell local handicrafts. Items such as local
            lady sarong and local shawl (gamcha) are among the most preferred
            articles that tourists of Assam purchase from such stores. In recent
            times, eco-tourism is gaining popularity among the travelers who
            come from different parts of the world to explore the flora and
            fauna of rainforests. Of the various wildlife reserves in India,
            Kaziranga National Park has achieved tremendous success in
            conservation of endangered species. It is famous for one-horned
            rhinoceros, and has a significant population of this species in
            addition to different kinds of wild animals. Kaziranga is also a
            tiger reserve and bird sanctuary, having numerous species of
            resident and migratory birds. The famous Teak trees are found in the
            forests of this region, and add beauty to the marvelous surroundings
            that have been instrumental in attracting the attention of tourists
            worldwide. River cruises and a green eco-friendly environment are
            enjoyed by most of them, other than the wildlife safaris. Great
            potential of Assam tourism is concealed in its rich culture,
            biodiversity, variety of animal and bird life, ancient temples and
            last but not the least many wildlife sanctuaries and reserves.
            Assamese culture is a mix pot of various cultural groups and
            ethnicities. The state with a composite cultural pattern is
            reflected in its many colorful festivals, some of which are popular
            as tribal festivals. These tribal festivals make the celebrators
            forget their routine life varies and immerse in the joy of festive
            celebrations. These tribal festivals are a mark of explicit tribal
            folk music and folk dances, which mesmerize the tourists with their
            simplicity and rich cultural background. Bihu, a tribal dance,
            usually performed between January and November is the special
            entertainment for the tourists.
          </p>
          <p className="place_txt">History</p>
          <p>
            The history of Assam is the history of a confluence of people from
            the east, west and the north; the confluence of the Tibeto-Burman
            (Sino-Tibetan), Indo-Aryan and Austroasiatic cultures. Although
            invaded over the centuries, it was never a vassal or a colony to an
            external power until the third Burmese invasion in 1821, and,
            subsequently, the British ingress into Assam in 1824 during the
            first Anglo-Burmese War. The Assamese history has been derived from
            multiple sources. The Ahom kingdom of medieval Assam maintained
            chronicles, called Buranjis, written in the Ahom and the Assamese
            languages. History of ancient Assam comes from a corpus of Kamarupa
            inscriptions on rock, copper plates, clay; royal grants, etc. that
            the Kamarupa kings issued during their reign. Protohistory has been
            reconstructed from folklore: epics like Mahabharata, and two
            medieval texts compiled in the Assam region-the Kalika Purana and
            the Yogini Tantra. The history of Assam can be divided into four
            eras. The ancient era began in the 4th century with the mention of
            Kamarupa in Samudragupta's inscriptions on the Allahabad pillar and
            the establishment of the Kamarupa kingdom. The medieval era began
            with the attacks from the Bengal Sultanate, the first of which took
            place in 1206 by Bakhtiyar Khilji as mentioned in the
            Kanai-boroxiboa rock inscription, after the breakup of the ancient
            kingdom and the sprouting of medieval kingdoms and chieftain-ships
            in its place. The colonial era began with the establishment of
            British control after the Treaty of Yandaboo in 1826, and the
            post-colonial era began in 1947 after the Independence of India.
          </p>
          <p className="place_txt">Fairs & Festivals</p>
          <p>
            Assam is a land of fairs and festivals. Most of the festivals
            celebrated in Assam have their roots in the diverse faith and belief
            of her inhabitants, but a spirit of accommodation and togetherness
            characterizes the celebration of all festivals. The perfect fusion
            of the heritage of her numerous races has made Assam the home of the
            most colorful festivals which are passionate, compelling, and
            mesmerizing, reflecting the true spirit, tradition, and lifestyle of
            the people of Assam. The people of Assam also celebrate all the
            national festivals of India. From the lights of{" "}
          </p>
          <p className="place_txt">Best Time To Visit</p>

          <p>
            October to April are the best months to visit Assam. While the state
            sweats in the scorching heat during summers and experiences high
            rainfall and humidity during monsoon, the period from October to
            April is ideal to visit Assam. During these months, the weather is
            pleasant with sunny days and cool nights, rainfall is moderate, and
            the paddy fields look resplendent, making it the best time to
            explore the beauty of Assam.
          </p>
          <p className="place_txt">How To Reach :-</p>
          <p>
            <span>By Air:</span> The main airport in Assam is the Lokpriya
            Gopinath Bordoloi International Airport in Guwahati, the largest
            city of Assam. The airport links to major cities in India with daily
            flights. Other airports in Assam are at Jorhat, Dibrugarh, Tezpur
            and Silchar. Regular back and forth flights operate from these
            airports too.
          </p>
          <p>
            <span>By Rail:</span> The North Eastern Railway zone of the Indian
            Railways connects the largest city of Assam, Guwahati and the rest
            of the country together. Guwahati is the railway headquarters of the
            northeast region. Travelers can reach conveniently to Assam via rail
            as it is well connected to all major cities of India. Some cities
            within the state are linked up through train services from Guwahati.
          </p>
          <p>
            <span>By Road:</span> Being the gateway of Northeast India, Assam
            has a well connected network of national highways and other roads to
            different cities and towns in and around the state. The national
            Highway number 37, 31, 40, 38 and 52 connects Assam with other
            states in India. The State Transport and other private operators run
            daily bus services for commuters. Taxis and jeeps can also be hired
            for commuting within the state.
          </p>
          <p className="place_txt">Tourist Attraction</p>
          <p>
            Assam, the gateway to North East frontiers of India, is one of the
            unexplored states of the country. Snuggled at the base of the
            northeast Himalayas and nurtured by the mighty Brahmaputra River, it
            is one of the most beautiful places in India. The popular stopover
            for tourists on a north-east Indian sojourn, there are innumerable
            tourist attractions in Assam.
          </p>
        </div>
        <div className="dynamic_discription">
          <h1>Things To See In Assam</h1>
          <hr />
        </div>
        <div className="dynamic_flex_container">
          {assamData.tourData
            .filter((item, index) => item.section === "assam")
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
          <h1>Assam Tour Packages</h1>
          <hr />
        </div>
        <div className="dynamic_flex_container">
          {assamData.tourData
            .filter((item, index) => item.section === "assam_1")
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

export default Asam;
