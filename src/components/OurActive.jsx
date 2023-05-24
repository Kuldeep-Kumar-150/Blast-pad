import React, { useRef } from "react";
import { mydata } from "../components/js/SliderData";
import Slider from "react-slick";

const OurActive = () => {
  const first = useRef();
  // console.log(first)
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
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1600,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 1600,
        },
      },
    ],
  };
  return (
    <div className="py-16 xl:py-0 flex flex-col justify-center items-center flex-grow">
      <div className="container mx-auto px-3 relative">
        <button
          onClick={() => first.current.slickPrev()}
          className="h-12 flex max-[1260px]:hidden absolute w-[52px] 2xl:-left-24 -left-14  top-64 bg-[#0B0A34] rounded-[6px] border border-[#2F2D50]  items-center justify-center"
        >
          <svg
            width="14"
            height="24"
            viewBox="0 0 14 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.8588 3.42857L5.28739 12L13.8588 20.5714L12.1445 24L0.144531 12L12.1445 -2.38419e-07L13.8588 3.42857Z"
              fill="white"
            />
          </svg>
        </button>
        <button
          onClick={() => first.current.slickNext()}
          className="h-12 flex max-[1260px]:hidden absolute 2xl:-right-24 -right-14  top-64 w-[52px] bg-[#0B0A34] rounded-[6px] border border-[#2F2D50]  items-center justify-center"
        >
          <svg
            width="14"
            height="24"
            viewBox="0 0 14 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.141183 3.42857L8.71261 12L0.141183 20.5714L1.85547 24L13.8555 12L1.85547 0L0.141183 3.42857Z"
              fill="white"
            />
          </svg>
        </button>
        <h2 className="text-center text-white ff_raleway text-3xl md:text-4xl lg:text-[40px] font-semibold">
          Our Active Token
        </h2>
        <Slider
          {...settings}
          ref={first}
          className="py-8 md:py-11 lg:py-14 gap-2 justify-content-center "
        >
          {mydata
            .map((fun) => {
              return (
                <div className="md:px-2">
                  <div
                    className=" w-full text-white border card_shadow 
                ] border-[#232249] rounded-[15px]  p-4 backdrop-blur-[81.5px]"
                  >
                    <div className="flex items-center">
                      <div className="h-[70px] w-[70px] bg-[#262752] flex items-center justify-center rounded-[10px]">
                        <img src={fun.img} alt="metal" />
                      </div>
                      <div className="ml-3">
                        <h4 className=" text-xl text-white font-bold ff_raleway">
                          {fun.h4}
                        </h4>
                        <p className="font-normal ff_raleway text-sm text-[#B7B6C5]">
                          {fun.para}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-6">
                      <button className="font-medium text-[11px] sm:text-sm text-white ff_raleway py-2 px-[10px] bg-[#11174D] rounded-[22px]">
                        {fun.btn}
                      </button>
                      <button className="font-medium text-[11px] sm:text-sm text-white ff_raleway py-2 px-[10px] bg-[#11174D] rounded-[22px]">
                        {fun.btn1}
                      </button>
                      <button className="font-medium text-[11px] sm:text-sm text-white ff_raleway py-2 px-[10px] bg-[#11174D] rounded-[22px]">
                        {fun.btn2}
                      </button>
                    </div>
                    <div className=" mt-8 rounded-[22px] bg-[#11164A]">
                      <button className="py-2 px-7  text-sm font-medium ff_raleway bg-gradient-to-r from-[#070380] to-[#4478F9] rounded-s-[22px]">
                        {fun.btn3}
                      </button>
                    </div>
                    <div className="flex items-center justify-between mt-3">
                      <p className="ff_raleway font-normal text-sm font_feature">
                        {fun.para1}
                      </p>
                      <p className="ff_raleway font-normal text-sm font_feature">
                        {fun.para2}
                      </p>
                    </div>
                    <div className="flex items-center justify-between mt-8">
                      <button className="text-base font-semibold  bg-gradient-to-r from-[#070380] to-[#4478F9] ff_raleway py-2 px-10 md:py-3 md:px-[57px] rounded-[32px]">
                        {fun.btn5}
                      </button>
                      <button className="flex items-center gap-1 font-medium  ff_inter text-base ">
                        <img src={fun.aeroImage} alt="aeroImage" /> {fun.btn4}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
            .slice(0, 6)}
        </Slider>
        <div className="text-center">
          <button className=" text-[12px] py-3 px-8 md:text-base font-semibold ff_raleway text-white md:py-4 md:px-16  border border-[#313558] rounded-[32px] showBtn">
            Show All Tokens Available to be Staked
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurActive;
