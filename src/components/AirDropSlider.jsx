import React, { useRef } from "react";
import Slider from "react-slick";
import { airDropS } from "./js/AirDropS";
const AirDropSlider = () => {
  const myslider = useRef();
  var mSlider = {
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
    <section className="flex flex-col justify-center items-center flex-grow">
      <div className="container mx-auto px-3 my-14 xl:my-0">
        <h5 className="text-white ff_raleway font-semibold text-2xl  md:text-4xl lg:text-[40px] text-center">
          Claim AirDrop
        </h5>
        <div className="relative">
          <button
            onClick={() => myslider.current.slickPrev()}
            className="h-12 ease-in-out duration-300 hover:bg-[#4478F9] flex max-[1260px]:hidden absolute w-[52px] 2xl:-left-24 -left-14  top-[40%] translate-y-[-50%] bg-[#0B0A34] rounded-[6px] border border-[#2F2D50]  items-center justify-center"
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
            onClick={() => myslider.current.slickNext()}
            className="h-12 ease-in-out duration-300 hover:bg-[#4478F9] flex max-[1260px]:hidden absolute 2xl:-right-24 -right-14  top-[40%] translate-y-[-50%] w-[52px] bg-[#0B0A34] rounded-[6px] border border-[#2F2D50]  items-center justify-center"
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
          <Slider {...mSlider} ref={myslider} className="my-7 md:my-14">
            {airDropS.map((m) => {
              return (
                <div className="px-3">
                  <div className="border card_shadow rounded-2xl hover:bg-[#0B0C28] ease-in-out duration-300 border-[#222851]  p-2 sm:p-5">
                    <div className="flex items-center">
                      <div className="flex items-center justify-center w-[70px] h-[70px] bg-[#232852] rounded-[10px]">
                        <img src={m.img} alt="image" />
                      </div>
                      <div className="ms-4">
                        <h4 className="text-[20px] font-bold ff_raleway text-white">
                          {m.heading}
                        </h4>
                        <p className="text-[14px] font-normal ff_raleway text-[#B5B7C4]">
                          {m.btc}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-between mt-6">
                      <p className="text-base font-normal ff_raleway text-[#E6E7EB]">
                        {m.totalSupply}
                      </p>
                      <p className="text-base font-semibold ff_raleway text-white font_feature">
                        {m.supplValue}
                      </p>
                    </div>
                    <div className="flex justify-between mt-4">
                      <p className="text-base font-normal ff_raleway text-[#E6E7EB]">
                        {m.priceText}
                      </p>
                      <p className="text-base font-semibold ff_raleway text-white font_feature">
                        {m.price}
                      </p>
                    </div>
                    <div className="flex gap-4 mt-8">
                      <button className="text-base border hover:scale-[90%] ease-in-out duration-300 border-[#2D304E] rounded-full font-medium ff_raleway text-white text-opacity-80 py-3 w-full">
                        {m.btn1}
                      </button>
                      <button className="w-full text-base hover:scale-[90%] ease-in-out duration-300 font-semibold text-white ff_raleway py-3 bg_blue_linear rounded-full">
                        {m.btn2}
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
          <div className="text-center">
            <button className="ease-in duration-300 hover:bg-[#4478F9] hover:border-[#4478F9] text-sm py-3 px-16 md:text-base font-semibold ff_raleway text-white md:py-4 md:px-36  border border-[#313558] rounded-[32px] showBtn">
              Create an AirDrop
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AirDropSlider;
