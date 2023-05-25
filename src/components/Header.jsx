import React from "react";
import headerImg from "../assets/img/png/header_rocket.png";
import smallRocket from "../assets/img/svg/small-rocket.svg";
import cloudImg from "../assets/img/svg/cloud-img.svg";
const Header = () => {
  return (
    <header className="flex flex-col items-center justify-center flex-grow relative">
      <div className="bg-[#4377F8] w-48 h-48 blur-[175px] absolute left-0  top-0 -z-10"></div>
      <div className="bg-[#4377F8] w-40 h-40 blur-[175px] absolute left-0  bottom-0  -z-10"></div>
      <div className="container mx-auto px-3 lg:my-10 xl:my-0 my-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:my-10 lg:py-10 xl:py-0 xl:my-0">
          <div data-aos="fade-right" className="z-20 text-center lg:text-start">
            <p className="text-base font-semibold ff_raleway text-[#4377F8]">
              Exponentially grow your brand
            </p>
            <h1 className="text-[39px] sm:text-[70px] md:text-[60px] xl:text-[70px] leading-[45px] lg:leading-[75px] xl:leading-[85px] sm:leading-[90px] font-bold ff_raleway text-white  mt-3 sm:mt-[22px]">
              The fastest way to launch your new project
            </h1>
            <a
              href="#"
              className="text-lg ease-in-out duration-300 hover:scale-95 font-semibold ff_raleway text-white py-3 px-6  md:py-[18px] md:px-9 bg_blue_linear rounded-full inline-block mt-10 md:mt-[66px]"
            >
              Learn more
            </a>
          </div>
          <div className="relative mt-10">
            <img
              className="w-full  md:w-4/5 lg:w-full mx-auto"
              src={headerImg}
              alt="headerImg"
            />
            <img
              className="absolute animation_transform top-[-30px] -z-10 left-36 hidden lg:flex"
              src={smallRocket}
              alt="smallRocket"
            />
            <div className="small_circle absolute top-4 right-[-90px]"></div>
            <div className="absolute bottom-[10%] left-10">
              <img className="relative " src={cloudImg} alt="cloudImg" />
              <p className="text-base font-black absolute top-[35%] left-[20%] ff_raleway">
                Launch Your Project
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
