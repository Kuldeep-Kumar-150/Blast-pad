import React from "react";
import rocketImg from "../assets/img/svg/timeline_rocket.svg";
import roadMapCloud from "../assets/img/png/roadmap-cloud.png";
import earthImageRoadmap from '../assets/img/png/roadmap_earth_img.png'
const RoadMap = () => {
  return (
    <section className="roadmap_bg_img relative pb-5 lg:pb-40 ">
      <img className="absolute top-[-4%] right-0 hidden lg:flex -z-10" src={earthImageRoadmap} alt="earth-image" />
      <div className="container mx-auto px-3 relative">
        <h4 className="text-white text-2xl  md:text-4xl lg:text-[40px] font-bold ff_raleway text-center lg:mt-28 mb-8 sm:mb-12">
          Launch Your Project
        </h4>
        <div>
        <img
          className=" lg:sticky absolute h-32 w-32 -left-8 top-14  lg:top-0 lg:left-1/2 lg:translate-x-[-51%] z-30 lg:w-44 lg:h-44"
          src={rocketImg}
          alt="rocketImg"
        />
        </div>
        <div className="timeline_line relative z-10 mt-16 lg:mt-0">
          <div data-aos="fade-up-right" className="p-[21px] ms-16 lg:ms-0 lg:w-[32%] text-white timeline_cards rounded-[15px] left_timeline_box relative">
            <h5 className="text-[20px] font-bold ff_raleway">Token</h5>
            <p className="text-base font-normal ff_raleway text-[#B4B9C8] mt-[10px]">
              A token is a sequence of characters that represents a unit of
              meaning or syntax in a programming language.
            </p>
            <a
              className="px-4 ease-in-out duration-300 hover:scale-95 py-2 inline-block bg_blue_linear rounded-full mt-6"
              href="#"
            >
              Read more
            </a>
          </div>
          <div data-aos="fade-up-left" className="p-[21px] ms-16 mt-7 lg:mt-0 lg:w-[32%] text-white timeline_cards rounded-[15px] lg:ms-auto right_timeline_box relative">
            <h5 className="text-[20px] font-bold ff_raleway">Airdrop</h5>
            <p className="text-base font-normal ff_raleway text-[#B4B9C8] mt-[10px]">
              Airdrops are a marketing strategy used by cryptocurrency projects
              to distribute tokens to a large number of people.
            </p>
            <a
              className="px-4 ease-in-out duration-300 hover:scale-95 py-2 inline-block bg_blue_linear rounded-full mt-6"
              href="#"
            >
              Read more
            </a>
          </div>
          <div data-aos="fade-down-right" className="p-[21px] hidden lg:block ms-16 mt-7 lg:mt-0 lg:ms-0 lg:w-[32%] text-white timeline_cards rounded-[15px] left_timeline_box relative">
            <h5 className="text-[20px] font-bold ff_raleway">Staking</h5>
            <p className="text-base font-normal ff_raleway text-[#B4B9C8] mt-[10px]">
              Staking is a process by which users hold cryptocurrency in a
              wallet to support the operations of a blockchain network.
            </p>
            <a
              className="px-4 ease-in-out duration-300 hover:scale-95 py-2 inline-block bg_blue_linear rounded-full mt-6"
              href="#"
            >
              Read more
            </a>
          </div>
        </div>
        <div className="p-[21px] lg:hidden ms-16 mt-7 lg:mt-0 lg:ms-0 lg:w-[32%] text-white timeline_cards rounded-[15px] left_timeline_box relative z-10">
          <h5 className="text-[20px] font-bold ff_raleway">Staking</h5>
          <p className="text-base font-normal ff_raleway text-[#B4B9C8] mt-[10px]">
            Staking is a process by which users hold cryptocurrency in a wallet
            to support the operations of a blockchain network.
          </p>
          <a
            className="px-4 ease-in-out duration-300 hover:scale-95 py-2 inline-block bg_blue_linear rounded-full mt-6"
            href="#"
          >
            Read more
          </a>
        </div>
        <img
          className=" absolute -z-10 hidden lg:block bottom-[-20%]  left-0"
          src={roadMapCloud}
          alt="roadMapCloud"
        />
      </div>
    </section>
  );
};

export default RoadMap;
