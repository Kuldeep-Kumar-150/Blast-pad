import React from "react";
import { mydata } from "../components/js/SliderData";
import Slider from "react-slick";

const OurActive = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 700,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          autoplay: true,
          autoplaySpeed: 1200,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1200,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1200,
        },
      },
    ],
  };
  return (
    <div>
      <div className="container mx-auto px-3">
        <h2 className="text-center text-white ff_raleway text-[40px] font-semibold">
          Our Active Token
        </h2>
        <Slider {...settings} className=" py-14 justify-content-center">
          {mydata
            .map((fun) => {
              return (
                <div className=" w-4/12 text-white bg-[rgba(67, 119, 248, 0.07)] rounded-[15px] backdrop-blur-[81.5px]"></div>
              );
            })
            .slice(0, 5)}
        </Slider>
      </div>
    </div>
  );
};

export default OurActive;
