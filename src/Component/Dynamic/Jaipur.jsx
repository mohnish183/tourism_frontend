import React from "react";
import "../../ComponentUI/Dynamic.css";
import { StoreData } from "../../Store/Store";
import { useContext } from "react";
function Jaipur() {
  const jaipurData = useContext(StoreData);
  return (
    <>
      <div className="dynamic_img">
        <img src={jaipurData.headerImg[0].jaipur} alt="" />
      </div>
      <div className="dynamic_main_container">
        <div className="dynamic_discription">
          <h1>Jaipur Tour Package</h1>
          <hr />
          <p>
            Jaipur, also known as the Pink City, is the capital of Indian state
            of Rajasthan and its largest city. The city was built in the 18th
            century by Sawai Jai Singh as India's first planned city, and today
            it's a major tourist attraction for Indians and for international
            visitors. It is a very picturesque city with splendid palaces, forts
            and historical monuments and belongs to the tourist Golden Triangle
            along with Delhi and Agra. It hosts several attractions including
            the City Palace, Govind Dev ji Temple, Vidhan Sabha, Birla Temple
            and several massive Rajput forts. It also serves as a stepping stone
            for those heading to the desert cities of Jodhpur and Jaisalmer.
          </p>
          <p>
            This royal place is rich in heritage, culture and architecture. With
            splendid fortresses, majestic palaces, tranquil temples and
            beautiful havelis; Jaipur turns out to be an ideal tourist
            destination. It is not just the royal buildings and palaces that
            this city offers. Other than these captivating attractions, Jaipur
            displays exquisite handicrafts and spectacular jewellery. These
            intricate works of art add life and colour to this Pink City's
            uniqueness. Also, the serenity of lush gardens and floral array acts
            as the cherry on the cake of fabulous landscapes. All this make a
            picturesque view that tends to enthral any visitor.
          </p>
          <p>
            The best time to visit this place is between October and March.
            Since the weather is pleasant during these months, that allows one
            to explore more of this place without getting scorched in the
            seething heat. This city of Rajputs is well known for its fairs and
            fests that are held on a grand level. The festivals include kite
            festival, camel festival, teej, gangaur, elephant festival, to name
            a few. The city witnesses maximum tourists during these days. To add
            on to its liveliness, this place has brilliant bazaars filled with
            bright turbans and ethnic attire, hand-dyed and embroidered
            textiles, pretty jewellery and delicious food. All these things can
            draw anyone towards them. Dressed in pink, this royal city of
            Rajasthan, Jaipur is the apt blend of heritage, palaces, culture and
            art and the flamboyance of this place can be experienced only by
            visiting it.
          </p>
          <p className="place_txt">Fairs & Festivals Of Jaipur</p>
          <p>
            Elephant Festival, Jaipur Jaipur, popularly known as the Pink City,
            other than the vibrant culture and heritage palaces and forts, is
            immensely famous for the numerous fairs and festivals it holds in
            its backyard. People rejoice various festivals all through the year
            along with the exciting and alluring fairs. Every region of
            Rajasthan has its own form of folk entertainment, songs, traditions,
            dressing sense, etc. which shows the true Indian diversity. Also,
            the people of Rajasthan are well known for their warm welcome,
            delicacies, traditional attires, rituals, culture, etc. Irrespective
            of caste and creed, people come together and enjoy the festivals and
            fairs held in the state. In the capital city of Rajasthan, the
            festivals such as Teej, Diwali, Gangaur, Kite Festival, Elephant
            Festival, Camel Festival, etc. are celebrated with great fervour and
            joy. Originating from old traditions, these festivals and fairs are
            being rejoiced since ages. The lively colours and the means of
            merriment during these festivals bind the people with harmony and
            peace. Read to know more about the fairs and festivals held in
            Jaipur.
          </p>
          <p className="place_txt">Shopping In Jaipur</p>
          <p>
            Jaipur. 'Haldiyon Ka Rasta', 'M.I Road', 'Bapu Bazar', 'Kishanpol
            Bazar', etc are some of the main bazaars in Jaipur. These are places
            where you can find some excellent fabrics and carpets. If you are
            looking for handicrafts, the marketplace is rich in variety as
            Jaipur is recognized as the crafts capital of India. For something
            different, Jaipur is famous for their camel leather also so don't
            forget to check out some of that also. And last, but not the least,
            a pair of 'jutis' or 'mojaris' from Jaipur would make your trip
            worth the while. Get one pair or a dozen; you will love it for sure.
            A trip to Jaipur is incomplete without shopping in this beautiful
            city! So make sure you factor in enough time for that as well.
          </p>
          <p className="place_txt">How To Reach Jaipur</p>
          <p>
            People from all parts of the world come to observe the beauty and to
            know about cultural legacy of Jaipur. Being the major city of the
            country, Jaipur is well connected to almost every corner of India
            via different means of public transport including air, rail and
            road. Every day the public transport is used by over millions of
            travellers travelling to and around Jaipur with various purposes and
            destinations. Jaipur International Airport is located about 7-10 km
            from the main city and can easily be reached with ease by taxi or
            bus. The Indian Railways on the other hand provides the best service
            to the passengers and as for the bus service, the roads and the
            highways are very well constructed and smooth with less chances of
            getting any dump in between the way. Read to know more about how to
            reach Jaipur.
          </p>
        </div>
        <div className="dynamic_flex_container">
          {jaipurData.tourData
            .filter((item, index) => item.section === "jaipur")
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

export default Jaipur;
