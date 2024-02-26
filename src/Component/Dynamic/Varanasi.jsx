import React from "react";
import "../../ComponentUI/Dynamic.css";
import { StoreData } from "../../Store/Store";
import { useContext } from "react";
function Varanasi() {
  const varanasiData = useContext(StoreData);
  return (
    <>
      <div className="dynamic_img">
        <img src={varanasiData.headerImg[0].varanasi} alt="not found" />
      </div>
      <div className="dynamic_main_container">
        <div className="dynamic_discription">
          <h1>Varanasi Tour Package</h1>
          <hr />
          <p>
            Varanasi, known to be the city of lights, is a district situated in
            the Indian state of Uttar Pradesh. Spread over an area of 73.90
            sq.kms, with an approximate population of 36, 82194, the city is
            known by many names. Banaras, as it is most commonly called, was
            officially renamed as Varanasi in 1956. It was first known as Kashi,
            the city of light, when it was the capital of the kingdom of the
            same name about 500 B.C. for over 2000 years. Banaras, the eternal
            city, has been the religious capital of India. Built on the banks of
            the sacred Ganga, it is said to combine the virtues of all other
            places of pilgrimage, and anyone who ends his earthly cycle here is
            said to be transported straight to heaven. Banaras was also
            celebrated as the place where the most profound wisdom dwelt, the
            seat of all enlightenment and learning. Its permanent advantages
            include the highest sanctity, fertile soil, and its location on a
            great river.
          </p>
          <p>
            Hindu rulers built great palaces, temples and ghats in the city. It
            is one of the oldest living cities in the world and the ultimate
            pilgrimage for Hindus who believe that to die in the city is to
            attain instant salvation. Situated on the bank of Ganga, Varanasi is
            the tract of holy land lying between the river Varuna and Assi,
            which flow into the Ganga. It derives its name from these two
            streams. It is also mentioned in late Vedic literature and in the
            Hindu epics Ramayana and Mahabharata. The city encompasses Sarnath,
            where Buddha preached his first sermon in about 530 B.C. Since one
            of the twelve 'Jyotirlinga' is installed here, it is believed to be
            the greatest 'Tirth' or crossing place between the earth and heaven.
            For a Hindu, to visit Varanasi and bathe in the water of the Ganga
            is said to be cleansed of the sins of the thousand of past rebirths.
            The combination of Kashi, the holy city, Ganga the celestial river
            and Shiva, the supreme god, makes Varanasi an immortal place on the
            earth. Varanasi has been a great cultural centre, especially in the
            field of music, learning and the craft of weaving. Some of the most
            renowned exponents of music have drawn their inspiration from
            Varanasi. Banaras brocades are treasured textiles and considered as
            collector's items.
          </p>
          <p>
            <span className="place_txt">Tourist Attractions in Varanasi:</span>
            The Ghats of Varanasi: In this ancient city of pilgrimage, the
            bathing ghats are the main attraction. People flock here in large
            numbers every day to take a bath and worship in the temples built
            beside the river bank. The centuries-old tradition of offering puja
            to the rising sun is still maintained.
          </p>
          <p>
            <span className="place_txt">The Kashi Vishwanath Temple:</span> This
            temple is dedicated to Lord Shiva and is popularly known as the
            golden temple due to the Gold plating done on its 15.5-meter high
            spire. One tonne of gold donated by Maharaja Ranjit Singh has been
            used in the gold plating of the spire. The temple was destroyed in
            the various invasions and was rebuilt in 1776 by Rani Ahilyabai of
            Indore.
          </p>
          <p>
            <span className="place_txt">St. Mary's Church:</span> Situated in
            the cantonment area of Benaras (Varanasi), the St. Mary's Church has
            a low tower, spire, and projecting portico. Instead of windows, the
            church has louvred doors to the sides and hooded ventilation slots
            beneath the cornice.
          </p>
          <p>
            <span className="place_txt">Durga Temple:</span> Built in the 8th
            century, the Durga temple is one of the most important temples in
            Varanasi. This temple is built in the Nagara style, and the shikhara
            of the temple is formed by many small spires which are built one on
            top of the other.
          </p>
          <p>
            <span className="place_txt">Bharat Mata Temple:</span> This temple
            is dedicated to Mother India and is located just one kilometer from
            the Varanasi station. The temple is built in the Mahatma Gandhi
            Kashi Vidyapeeth, which was built by Babu Shiv Prasad Gupt. This
            temple was inaugurated by Mahatma Gandhi in 1936 so that the
            citizens could respect Mother India in statue form. The statue is
            built in marble and is a replica of undivided India in three
            dimensions, which has the mountains, plains, and oceans in right
            proportion.
          </p>
          <p>
            <span className="place_txt">Tulsi Manas Temple:</span> This temple
            is dedicated to Lord Rama and is built in the place where Goswami
            Tulsidas composed the epic 'Ramacharitamanas,' which provides us
            with a detailed description of the history and deeds of Lord Rama.
            Tulsi Manas Temple was constructed by a philanthropist family in
            1964.
          </p>
          <p>
            <span className="place_txt">Nepali Temple:</span> The King of Nepal
            had built this temple on Lalita Ghat in the Nepali style. The Nepali
            temple is also called the 'Kathwala temple.' The temple has some
            magnificent woodwork. Tourists from all over the world come just to
            see this temple, which has no comparison with any other temple in
            India.
          </p>
          <p>
            The workers who carved this temple were brought from Nepal, and the
            wood used in the temple is also found in Nepal. The specialty of
            this wood is that termites do not eat this wood.
          </p>
        </div>
        <div className="dynamic_flex_container">
          {varanasiData.tourData
            .filter((item, index) => item.section === "varanasi")
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

export default Varanasi;
