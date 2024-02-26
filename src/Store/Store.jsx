import React from "react";
import { createContext, useState, useEffect } from "react";
export const StoreData = createContext();
function Store(props) {
  const [tourData, setTourData] = useState([]);
  const [headerImg, setHeaderImg] = useState([
    {
      rajasthan:
        "https://www.greavesindia.co.uk/wp-content/uploads/2016/11/Rajasthan_header3.jpg",
      goa: "https://media.assettype.com/outlooktraveller%2F2024-01%2F9e21f909-0d2f-4cc8-87f3-250e660a79a2%2Fshutterstock_541154869.jpg",
      southindia:
        "https://static.toiimg.com/photo/msid-93269258,width-96,height-65.cms",
      kerala:
        "https://img.onmanorama.com/content/dam/mm/en/travel/travel-news/images/2022/7/13/kerala-tourism.jpg",
      kerala_1:
        "https://media.audleytravel.com/-/media/images/home/indian-subcontinent/india/country-guides/kerala-for-the-first-time-visitor/75667681_kerala_house_boat_3000x1000.jpg?q=79&w=1920&h=640",
      varanasi:
        "https://live.staticflickr.com/6059/6295950659_c93a8fe4bb_b.jpg",
      jaipur:
        "https://www.travelandleisure.com/thmb/0CP3JWdU_EFnS4c5v8VtLekXb-Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-hawa-mahal-TODOJAIPUR1023-034e1287d12d453fab6d236e8cf7e982.jpg",
      mumbai:
        "https://www.tripsavvy.com/thmb/XpGx4Z2ebrK0-mn3_DzHaPHFqMg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1008831236-70a74d9b3fd84f6087d37f1d739a8186.jpg",
      honeymoon:
        "https://myravacationplanners.com/wp-content/uploads/2021/03/Special_Sri_Lanka_Honeymoon_Tour.png",
      family:
        "https://static2.tripoto.com/media/filter/tst/img/1780573/TripDocument/1615896130_family_tour.jpg",
      summer: "https://travelxs.in/images/image/summer_holidays_page/1685.png",
      adventure:
        "https://www.travelinsuranceexplained.co.uk/wp-content/uploads/2018/06/White-Water-Rafting-Adventure-Holiday.jpg",
      odisha: "https://www.gohightravels.com/images/destination/orissa.jpg",
      goa_1:
        "https://backpackersunited.in/_next/image?url=https%3A%2F%2Fbpu-images-v1.s3.eu-north-1.amazonaws.com%2Fuploads%2Fgoa%202_11zon.webp&w=3840&q=75",
      bihar:
        "https://tourism.bihar.gov.in/content/dam/bihar-tourism/images/bodh-gaya/80%20feet%20Buddha.jpg",
      assam:
        "https://sandpebblestours.com/wp-content/uploads/2018/11/assam-1.jpg",
      arunachal:
        "https://www.flamingotravels.co.in/_next/image?url=https%3A%2F%2Fimgcdn.flamingotravels.co.in%2FImages%2FCity%2Ftawang.jpg&w=1920&q=90",
      andra_pradesh:
        "https://travel-blog.waytoindia.com/wp-content/uploads/2020/07/Srisailam.jpg",
      beaches:
        "https://rd-prod.twic.pics/2023-09-06/PHdX6azeavPRGpPDFxXDB3e5TSoPGFOUZiEuqJLB.webp?twic=v1/resize=1280/quality=73/focus=auto",
      hill_station:
        "https://karnatakatourism.org/wp-content/uploads/2020/12/hills-station-karnataka.jpg",
      golden_triangle:
        "https://www.holidify.com/images/cmsuploads/compressed/BlogBannerforWebsiteContent1_20231019121121.png",
    },
  ]);
  useEffect(() => {
    async function fetchData() {
      const result = await fetch(
        "https://tourism-17ui.onrender.com/api/tourism"
      );
      const res = await result.json();
      setTourData(res);
    }
    fetchData();
  }, []);
  return (
    <StoreData.Provider
      value={{ tourData, setTourData, headerImg, setHeaderImg }}
    >
      {props.children}
    </StoreData.Provider>
  );
}

export default Store;
