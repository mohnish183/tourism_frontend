import React from "react";
import "../../ComponentUI/Dynamic.css";
import { StoreData } from "../../Store/Store";
import { useContext } from "react";
function HillStation() {
  const hillstationData = useContext(StoreData);
  return (
    <>
      <div className="dynamic_img">
        <img src={hillstationData.headerImg[0].hill_station} alt="not found" />
      </div>
      <div className="dynamic_main_container">
        <div className="dynamic_discription">
          <h1>India Hill Station Tour</h1>
          <hr />
          <p>
            Hill stations are the best places to escape from the sweltering
            heat, pollution, and chaos of the city. In India, hill stations are
            always a popular choice for friends, families, couples, students,
            honeymooners, and professionals looking to spend their vacations at
            a slower pace, away from the hustle and bustle. People, particularly
            those living in urban areas, favor the relaxing environment of a
            hill station as it provides a welcome relief from everyday life.
            Hill stations in India are famous for their abundance in pristine
            natural beauty and flora and fauna. We offer tours to destinations
            such as Nainital, Shimla, Manali, Kullu, Mussoorie, Almora,
            Ranikhet, Gulmarg, Dharamshala, Dalhousie, Lansdowne, and Gangtok.
            With Delhi Weekend Tours, you can experience magnificent landscapes,
            pure oxygen, and peace of mind, away from the everyday hustle and
            bustle.
          </p>
          <p>
            <span>1.Manali - Valley of the Gods -</span>
          </p>
          <p>
            location : in the central region of Himachal Pradesh and is at the
            head of the Kullu valley. It is situated 280 km north of the state
            capital Shimla and 108 km from Mandi, and is perched at an altitude
            of 2050 meters above sea level, spread along the banks of the river
            Beas. Tourist destinations in Manali include the Hidimba or Dhungri
            Temple, which is a frequently visited site, and the town is known
            for its shiny gompas or Buddhist monasteries. The Gadhan
            Thekchhokling Gompa, built in 1969, is famous here and houses the
            highest concentration of Tibetan refugees in the entire Kullu
            valley. The smaller and more modern Himalayan Nyingamapa Gompa,
            which stands near the bazaar in a garden blooming with sunflowers,
            is also worth a visit. The Museum of Traditional Himachal Culture,
            near the Hidimba temple, houses artifacts of folk art of the entire
            Kullu valley and is worth a visit.
          </p>
          <p>
            <span>2.Dalhousie - The Strawberry City</span>
          </p>
          <p>
            location : Dalhousie situated 80-kilometer from{" "}
            <span>Pathankot</span> and offers a unique and peaceful atmosphere.
            Spread over five hills, this charming town features serene cottages
            and villas nestled in deodar and pine forests. The main center of
            Dalhousie is Portreyn, which is a popular walk for tourists.
            Attractions in Dalhousie include Kalatope, a viewpoint located 8 km
            away, and Panchpulla, a good picnic spot with significant
            connections to India's freedom struggle. Satdhara is famous for its
            mineral water, and Dainkund, known as the Singing Hill, boasts a
            unique sound caused by the passage of mountain winds through the
            forest. Visitors can also shop for regional specialties like Chamba
            chappals, cane baskets, colorful woolens, and Chamba dolls.
          </p>
          <p>
            <span>3.Mussoorie - The Hill Resort</span>
          </p>
          <p>
            was established in the 1820s by British colonials seeking to escape
            the heat of the plains. The name "Mussoorie" is derived from the
            Mansur shrub, which is common in the Himalayan foothills. Popular
            tourist destinations in Mussoorie include Gun Hill, Hawa Ghar, and
            the two-kilometer walk from Library Chowk to the Municipal Garden or
            Company Bagh. For those looking for a more challenging hike, Benog
            Hill and Lal Tibba, the highest peak in Mussoorie, offer stunning
            views of the surrounding mountains and snow-capped peaks. The estate
            of Colonel George Everest, the first Surveyor General of India, can
            also be found near Cloud End.
          </p>
          <p>
            <span>4.Nainital - THe Abode of Naina Devi</span>
          </p>
          <p>
            location : on the Kathgodam-Nainital Highway and is surrounded by
            the beautiful Naini Lake. The discovery of the lake is attributed to
            G.W. Traill, Commissioner of Kumaon and Garhwal, and P. Barron, a
            sugar trader from Shahjahanpur. The main area of Nainital, known as
            Mallital, is located at the upper end of the lake and has several
            attractions such as the Naina Devi temple complex and the Gurudwara
            Sri Guru Singh Sabha. Visitors can enjoy a boat ride on the lake or
            take part in yachting at the yacht club. Nainital is surrounded by
            seven hills, which provide excellent trekking opportunities. The
            highest peak is Cheena (Naina) Peak, which offers stunning views of
            the Himalayas and Nainital. Other popular destinations include
            Tiffin Top, Land's End, Hanuman Garhi, and the Uttaranchal
            Government Observatory.
          </p>
          <p>
            <span>5.Ranikhet - The Road to Himalayan Panorama</span>
          </p>
          <p>
            location : in the Kumaon hills of Uttarakhand at an altitude of 1824
            meters above sea level. It is known for its ancient temples and
            offers a magnificent view of the great Himalayan peak of Nanda Devi.
            Tourist destinations in Ranikhet include Jhula Devi temple and
            Chaubatia orchards, which are within walking distance of the main
            town. Bhaludham is an artificial lake located 3 km away, and Upat
            Kalika offers a panoramic view of the Himalayan ranges along with a
            nine-hole golf course. Visitors can also take trips to nearby
            destinations like Nainital, Almora, Dwarahat, Sitalakhet, Tarikhet,
            and Khairna.
          </p>
        </div>
        <div className="dynamic_flex_container">
          {hillstationData.tourData
            .filter((item, index) => item.section === "hillstation")
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

export default HillStation;
