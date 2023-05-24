import React from "react";
import { myCard } from "./js/Card";
import Slider from "react-slick";
const StakeYourTokens = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 8000,
        settings: "unslick",
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1600,
          dots: false,
          arrows: false,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1600,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1600,
          arrows: false,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="container mx-auto px-3 mt-20 md:mt-36 lg:mt-60">
      <h6 className="text-[30px] font-bold ff_raleway text-white text-center">Stake Your Tokens</h6>
      <Slider
        {...settings}
        className="grid grid-cols-3 pt-6 md:pt-14 pb-12  md:py-11 lg:py-14 gap-4 justify-content-center "
      >
        {myCard
          .map((par) => {
            return (
              <div className="w-full md:p-1">
                <div
                  className="card_shadow w-full text-white border border-[#232249] rounded-[15px]  p-4 backdrop-blur-[81.5px]">
                  <div className="flex items-center">
                    <div className="h-[70px] w-[70px] bg-[#262752] flex items-center justify-center rounded-[10px]">
                      <img src={par.img} alt="metalImmage" />
                    </div>
                    <div className="ml-4">
                      <h3 className=" text-xl text-white font-bold  ff_raleway ">
                        {par.h3}
                      </h3>
                      <p className="font-normal text-sm text-[#B6B7C5] ff_raleway ">
                        {par.para}
                      </p>
                    </div>
                  </div>
                  <p className="text-[#B6B7C5] text-base font-normal mt-4 ff_raleway">
                    {par.paragraph}
                    <span className="lg:block">{par.span}</span>
                  </p>
                  <div className="flex items-center mx-2 justify-between mt-4">
                    <p className="ff_raleway font-bold text-xl ">{par.para1}</p>
                    <p className="ff_raleway font-semibold text-xl font_feature">
                      {par.para2}
                    </p>
                  </div>
                  <div className="flex items-center mx-2 justify-between mt-[6px]">
                    <p className="ff_raleway font-normal text-base text-[#B7B9C8] ">
                      {par.para3}
                    </p>
                    <p className="ff_raleway font-semibold text-base font_feature">
                      {par.para4}
                    </p>
                  </div>
                  <div className="flex items-center mx-2 justify-between mt-[6px]">
                    <p className="ff_raleway font-normal text-base text-[#B7B9C8] ">
                      {par.para5}
                    </p>
                    <p className="ff_raleway font-semibold text-base font_feature">
                      {par.para6}
                    </p>
                  </div>
                  <div className="flex items-center mx-2 justify-between mt-[6px]">
                    <p className="ff_raleway font-normal text-base text-[#B7B9C8] ">
                      {par.para7}
                    </p>
                    <p className="ff_raleway font-semibold text-base font_feature">
                      {par.para8}
                    </p>
                  </div>
                  <div className="flex items-center border border-[#111949] py-[5px] rounded-[25px] px-2 justify-between mt-[6px]">
                    <p className="ff_raleway font-normal text-base text-[#B7B9C8] ">
                      {par.para9}
                    </p>
                    <p className="ff_raleway font-semibold text-base font_feature">
                      {par.para10}
                    </p>
                  </div>
                  <div className="text-center mt-5">
                    <button className="showBtn py-3 px-[26px] border border-[#41486F] rounded-[32px]">
                      {par.btn}
                    </button>
                  </div>
                </div>
              </div>
            );
          })
          .slice(0, 12)}
      </Slider>
      <div className="text-center mb-10 sm:mb-20 md:mb-40">
      <button className="text-white font-semibold text-sm ff_raleway py-4 px-9 bg-gradient-to-r from-[#070380] rounded-[36px] to-[#4478F9]">
        Show more
        </button>
      </div>
    </div >
  );
};

export default StakeYourTokens;
