import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import SlideImage from "./SlideImage";

SwiperCore.use([Navigation, Pagination]);

function Carousel() {
  const [bannerArray, setBannerArray] = useState([]);

  async function bannerFetch() {
    let response = await fetch(
      "https://interview-assessment.api.avamae.co.uk/api/v1/home/banner-details"
    );

    if (!response.ok) {
      throw new Error(`HTTP Error! Status: ${response.status}`);
    }

    let responseJSON = await response.json();
    setBannerArray(() => responseJSON.Details);
  }
  useEffect(() => {
    bannerFetch().catch((e) => console.log("Error: " + e));
  }, []);

  let slidesList = bannerArray.map((imageData, index) => {
    return (
      <SwiperSlide key={index}>
        <SlideImage
          ImageUrl={imageData.ImageUrl}
          Title={imageData.Title}
          Subtitle={imageData.Subtitle}
        />
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      spaceBetween={0}
      slidesPerView={1}
      speed={75}
      navigation
      pagination={{
        clickable: true,
        bulletClass: "swiper-pagination-bullet-custom",
      }}
    >
      {slidesList}
    </Swiper>
  );
}

export default Carousel;
