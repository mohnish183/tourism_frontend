import React from "react";
import "../../ComponentUI/Dynamic.css";
import { StoreData } from "../../Store/Store";
import { useContext } from "react";
function Bihar() {
  const biharData = useContext(StoreData);
  return (
    <>
      <div className="dynamic_img">
        <img src={biharData.headerImg[0].bihar} alt="not found" />
      </div>
      <div className="dynamic_main_container">
        <div className="dynamic_discription">
          <h1>Bihar Tourism</h1>
          <hr />
          <p>
            Bihar is the third largest state by population and twelfth largest
            state in terms of geographical size. The name Bihar is derived from
            the word "vihara" meaning monastery. Bihar was a great religious
            center for Jains, Hindus and most importantly Buddhists. It was at
            Bodh Gaya that Lord Buddha attained enlightenment. It is here also
            that Lord Mahavira, the founder of another great religion, Jainism,
            was born and attained nirvana. The state of Bihar is bordered by
            Uttar Pradesh to its west, Nepal to the north, the northern part of
            West Bengal to the east and Jharkhand to the south. Bihar is the
            third largest state by population and twelfth largest state in terms
            of geographical size. The name Bihar is derived from the word
            "vihara" meaning monastery. Bihar was a great religious center for
            Jains, Hindus and most importantly Buddhists. It was at Bodh Gaya
            that Lord Buddha attained enlightenment. It is here also that Lord
            Mahavira, the founder of another great religion, Jainism, was born
            and attained nirvana. The state of Bihar is bordered by Uttar
            Pradesh to its west, Nepal to the north, the northern part of West
            Bengal to the east and Jharkhand to the south.
          </p>
          <p className="place_txt">History</p>
          <p>
            The documented history of tourism in Bihar region dates back to the
            4th century BCE. Greek geographer Megasthenes (c. 350-290 BC)
            visited the region in reign of Chandragupta Maurya. His observations
            were recorded in Indika. Dionysius was son of Megasthenes, who
            visited Pataliputra in reign of Ashoka. Hsuan-Tsang and I Ching
            visited Nalanda to study in the 7th century, educational tourism as
            Bihar was home of some prominent ancient universities like Nalanda
            and Vikramashila.
          </p>
          <p className="place_txt">Fairs & Festivals</p>
          <p>
            Bihar is an eastern state in India and it shares the passion and
            zeal of celebrating the established and spiritual fairs and
            festivals of India with the rest of the country. Fairs and festivals
            have always been an essential part of life in Bihar. Each state of
            the country has some festivals that are a unique part of its
            cultural heritage and are different from the rest. It is fascinating
            to witness these festivities. Bihar wholeheartedly celebrates
            festivals like Durga Puja, Bhaiya Dooj, Holi, Saraswati Puja, etc.
            Bihar is an eastern state in India and it shares the passion and
            zeal of celebrating the established and spiritual fairs and
            festivals of India with the rest of the country. Fairs and festivals
            have always been an essential part of life in Bihar. Each state of
            the country has some festivals that are a unique part of its
            cultural heritage and are different from the rest. It is fascinating
            to witness these festivities. Bihar wholeheartedly celebrates
            festivals like Durga Puja, Bhaiya Dooj, Holi, Saraswati Puja, etc.
          </p>
          <p className="place_txt">Best Time To Visit</p>
          <p>
            October to March are the best months to visit Bihar. While Bihar
            sweats in the scorching heat during Summers, the state experiences
            high rainfall and humidity during Monsoon. October to Bihar, when
            the weather is pleasant with sunny days and cool nights, rainfall is
            moderate, and the paddy fields look resplendent, is the best time to
            visit Bihar. October to March are the best months to visit Bihar.
            While Bihar sweats in the scorching heat during Summers, the state
            experiences high rainfall and humidity during Monsoon. October to
            Bihar, when the weather is pleasant with sunny days and cool nights,
            rainfall is moderate, and the paddy fields look resplendent, is the
            best time to visit Bihar.
          </p>
          <p className="place_txt">How To Reach :-</p>
          <p>
            <span>By Air:</span> Bihar has two airports at Patna and Ranchi
            connected to Delhi, Mumbai, Lucknow, Calcutta, as well as Kathmandu,
            the capital of Nepal. Indian Airlines and Sahara Airways have direct
            flights between Patna and Delhi.
          </p>
          <p>
            <span>By Rail:</span> The state has a well-developed railway network
            with almost all the major and minor places connected through good
            trains. Major railway stations like Patna, Dhanbad, Muzaffarpur,
            Gaya, and Ranchi are connected to all the major cities of India by
            regular trains.
          </p>
          <p>
            <span>By Road: </span>There is good network of roads connecting all
            the major parts of the state with Patna, the state capital. National
            Highways like 2, 23, 28, 30, 31, and 33 connect the state to places
            all over India. The distance of some of the major places in the
            state from Patna are Sonepur 25 km, Vaishali 55 km, Nalanda 90 km,
            Gaya 97 km, Bodhgaya 110 km, and Ranchi 289 km.
          </p>
          <p className="place_txt">Tourist Attraction</p>
          <p>
            Bihar, a state in eastern India, is known for its rich history and
            cultural heritage. It was the center of the first republic in the
            world at Vaishali. The city of Patna, the capital of Bihar, was once
            the largest and grandest city in the world during the Mauryan
            empire. Emperor Ashoka, a famous ruler of this dynasty, was known
            for his edicts promoting non-violence. Bihar was called Magadha in
            ancient times. It was surrounded by the Indian states of Uttar
            Pradesh to the west, Jharkhand to the south, and West Bengal to the
            east. The Kingdom of Nepal was located to the north of Bihar. The
            Vikramshila and Nalanda Universities, which were among the oldest
            and best centers of education in ancient India, were destroyed by
            wars in the medieval period.
          </p>
        </div>
        <div className="dynamic_discription">
          <h1>Things To See In Bihar</h1>
          <hr />
        </div>
        <div className="dynamic_flex_container">
          {biharData.tourData
            .filter((item, index) => item.section === "bihar")
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
          <h1>Bihar Tour Packagesr</h1>
          <hr />
          <p>
            The India Tourism provides tour packages for blissful Bihar that are
            tastefully designed to provide the best experience as you visit the
            sites in Bodhgaya, Nalanda, Patna, and Vaishali that are praised for
            their uniqueness and worth visiting. The heartwarming cultures and
            traditions are also the element to be enjoyed during the trip.
          </p>
        </div>
        <div className="dynamic_flex_container">
          {biharData.tourData
            .filter((item, index) => item.section === "bihar_1")
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

export default Bihar;
