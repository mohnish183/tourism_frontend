import React from "react";
import "../../ComponentUI/Dynamic.css";
import { StoreData } from "../../Store/Store";
import { useContext } from "react";
function GoaTour() {
  const goa_1Data = useContext(StoreData);
  return (
    <>
      <div className="dynamic_img">
        <img src={goa_1Data.headerImg[0].goa_1} alt="not found" />
      </div>
      <div className="dynamic_main_container">
        <div className="dynamic_discription">
          <h1>Goa Tourism</h1>
          <hr />
          <p>
            The state of Goa, in India, is famous for its beaches and places of
            worship, and tourism is its primary industry. Tourism is generally
            focused on the coastal areas of Goa, with decreased tourist activity
            inland. Foreign tourists, mostly from Europe, arrive in Goa in
            winter whilst the summer and monsoon seasons see a large number of
            Indian tourists. Goa handled 2.29% of all foreign tourist arrivals
            in the country in 2011. This relatively small state is situated on
            the western coast of India, between the borders of Maharashtra and
            Karnataka and is better known to the world as a former Portuguese
            enclave on Indian soil. Tourism is said to be the backbone of Goa's
            economy.
          </p>
          <p className="place_txt">History</p>
          <p>
            The history of Goa dates back to prehistoric times, though the
            present-day state of Goa was only established as recently as 1987.
            In spite of being India's smallest state by area, Goa's history is
            both long and diverse. It shares a lot of similarities with Indian
            history, especially with regard to colonial influences and a
            multi-cultural aesthetic. Situated on the Konkan Coast in Western
            India, Goa was, at various points in its history, one of the major
            trade centers in India. It attracted influential dynasties,
            seafarers, merchants, traders, monks and missionaries since its
            earliest known history. Throughout its history, Goa has undergone
            continual transformation, leaving an indelible impression on various
            aspects of its cultural and socio-economic development.
          </p>
          <p className="place_txt">Fairs & Festivals</p>
          <p>
            Fairs and Festivals in Goa are a refreshing and exciting experience
            for both local town dwellers and visitors to the enchanting beach
            town. Numerous festivals and events in Goa are celebrated with great
            enthusiasm and showmanship. The most popular Fairs and Festivals in
            Goa include the Monsoon Festival, Christmas & New Year Celebrations,
            and the Festival of Three Kings. Goa's Christmas and New Year
            Celebrations are world-renowned, attracting people from all over the
            globe to enjoy their grandeur. The much-anticipated Goa Carnival
            Festival 2012 was celebrated last February.
          </p>
          <p className="place_txt">Best Time To Visit</p>
          <p>
            November to February is widely considered the best time to visit
            Goa. The weather is comfortable, neither too cold nor too hot,
            making it an ideal time to enjoy the beaches and water sports.
            During these months, most beach shacks are open and water sports
            like banana boat rides, jet skiing, and parasailing are available on
            popular beaches. Additionally, several music festivals, including
            the Sunburn festival, take place around December and January,
            attracting large crowds and offering a fun party atmosphere. Goa is
            also known for its lively Christmas and New Year celebrations,
            making it one of the best places in India to enjoy the festive
            season.
          </p>
          <p className="place_txt">How To Reach :-</p>
          <p>
            <span>By Air:</span> Nearest airport from Goa (Panjim) is Dabolim
            Airport (Goa International Airport), located at a distance of 29 Km.
            Dabolim Airport operates regular flights from Mumbai, Bangalore,
            Delhi and other major cities of India, as well as cities in the U.K
            and Germany. You can hire a taxi to reach your further destination.
          </p>
          <p>
            <span>By Rail:</span> Goa's main railway stations are in Madgaon,
            and Thivim. Other railway stations include Vasco Da Gama, Karmali,
            Sanverdam Church, Cancona, Pernem and Karmali. These railway
            stations are well connected with the major cities and towns of the
            country. Taxis and traveler buses are readily available from these
            stations.
          </p>
          <p>
            <span>By Road:</span> There are numerous state and privately owned
            buses that run in and around the state. It is easy to get buses to
            commute to nearby cities and towns from Goa.
          </p>
          <p className="place_txt">Tourist Attraction</p>
          <p>
            Goa is a tropical paradise, and rightly so, owing to its amazing
            charms. Tourist attractions in Goa are abundant and suitable for all
            ages, interests, and moods. Nature lovers are sure to have a great
            time as the list of tourist attractions in Goa state has wildlife
            sanctuaries, untouched forests, waterfalls, and the lesser-known
            backwaters. Party lovers are surely in heaven when they are in Goa.
            The small paradise has clubs, pubs, bars, beach parties, casinos,
            etc. In fact, name it and you have it in Goa.
          </p>
        </div>
        <div className="dynamic_discription">
          <h1>Things To See In Goa</h1>
          <hr />
        </div>
        <div className="dynamic_flex_container">
          {goa_1Data.tourData
            .filter((item, index) => item.section === "goa_1")
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
          <h1>Goa Tour Packages</h1>
          <hr />
          <p>
            Goa tour packages - plan your holiday in Goa amidst the swaying
            palms, white sands, and sparkling waters. Savor the delicious
            cuisine and enjoy the vibrant nightlife. Let go of yourself with the
            characteristic "sussegado" (a unique Goan term for relaxation).
            Practice yoga and meditation or rejuvenate yourself with therapeutic
            spa sessions at one of the fine luxury hotels in Goa with our Goa
            packages.
          </p>
        </div>
        <div className="dynamic_flex_container">
          {goa_1Data.tourData
            .filter((item, index) => item.section === "goa_2")
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

export default GoaTour;
