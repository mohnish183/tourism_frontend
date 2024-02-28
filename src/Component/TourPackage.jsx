import axios from "axios";
import React from "react";
import "../ComponentUI/Tourpackage.css";
import tourpackage_img from "../Images/tourpackage.jpg";
import { StoreData } from "../Store/Store";
import { useContext } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function TourPackage() {
  const TourPackageData = useContext(StoreData);
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    console.log(token);

    if (!token) {
      navigate("/login");
    } else {
      // http://localhost:8000
      axios
        .get("https://tourism-17ui.onrender.com/pages/dashboard", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
        .then((res) => {
          const responseData = res.data;
          alert(responseData.msg);
          // setMessage(responseData.msg);
        });
    }
  }, [navigate]);
  return (
    <>
      <div className="tourpackage_header_img">
        <img src={tourpackage_img} alt="" />
      </div>
      <div className="tourpackage_main_container">
        <div className="tourpackage_discription">
          <h1>India Tour Packages By Themes</h1>
          <hr />
          <p>
            India Tours is one of the most beautiful countries in the world, and
            to explore it fully,holiday packages in India such as these can be
            availed. To better understand and experience India's geographical
            and cultural diversity, there is a wide range of India tour
            packagesfor travelers to pick from. Varying from destination to
            destination, these domestic tour packages in India take you for a
            relaxing vacation to beautiful hill-stations, quaint towns,
            cosmopolitan metros, and amazing beach cities. Choose to relax for a
            few days, or enjoy adventure packed tours of India, the choice is
            yours. Exploring India is an easy task if you can choose the right
            tour packages in India. You can choose a tour according to the
            different themes, destinations, durations or interests. You will get
            some incredible variations and it will be an amazing vacation for
            you, without a doubt! Be it a relaxed holiday in one of the hill
            stations, an adventurous one in a beach destination, a calming one
            in the backwaters or a thrilling one in a wildlife sanctuary, you
            will find it all. You can behold the best of ethnic history in the
            havelis of Rajasthan or get the best of your spiritual inclination
            at the various temples in the Southern India. The snow-capped
            mountains in the Himalayan range are sure to give you the chills and
            the huge coastline of numerous, picturesque beaches will simply take
            your breath away! Browse through our specially-crafted list of India
            holiday packages below to find your preferred trip. Think of India
            and we cater to your interests or we can help youcustomize your
            trip.
          </p>
        </div>
        <div className="tourpackage_flex_container">
          {TourPackageData.tourData
            .filter((item, index) => item.section === "tourpackage")
            .map((item, index) => {
              return (
                <>
                  <div className="tourpackage_items">
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

export default TourPackage;
