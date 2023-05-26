import React from "react";
import proTon from "../assets/img/png/proton.png";
import earthImg2 from "../assets/img/svg/circle-img.svg";
const BlockChain = () => {
  return (
    <section className="relative my-20 sm:mt-40">
      <div className="bg-[#4377F8] w-52 h-52 blur-[175px] absolute  bottom-0 lg:-bottom-52 -z-10"></div>
      <div className="container mx-auto px-3 relative">
        <img
          className="absolute left-0 top-[-100px]"
          src={earthImg2}
          alt="earthImg2"
        />
        <div className="flex flex-col lg:grid lg:grid-cols-2 items-center">
          <div className="w-[80%] relative z-10 bg-transparent" data-aos="fade-up-right">
            <div className="bg-[#4377F8] w-72 h-72 -z-10 absolute left-1/2 top-1/2 blur-[175px] -translate-x-2/4 -translate-y-2/4"></div>
            <img
              className="w-full mx-auto md:w-4/5 lg:w-full lg:mx-0 rotate_animation"
              src={proTon}
              alt="proTon"
            />
          </div>
          <div className="blackchain_text relative text-center lg:text-start">
            <h2 data-aos="fade-up-right" className="text-white text-2xl  md:text-4xl lg:text-[40px] mt-5 sm:mt-10  font-bold ff_raleway leading-[46px]">
              Building On The Proton Blockchain
            </h2>
            <p data-aos="fade-up-left" className="text-white text-base font-normal ff_raleway text-opacity-70 mt-4">
              Proton is a blockchain platform that was designed to offer fast,
              scalable, and secure peer-to-peer transactions. It is built on top
              of the EOSIO software, which is known for its high transaction
              throughput and low latency.
            </p>
            <p data-aos="fade-up-right" className="text-white text-base font-normal ff_raleway text-opacity-70 mt-4">
              Proton is specifically designed to cater to the needs of
              businesses and enterprises, providing them with a blockchain
              infrastructure that is capable of handling large volumes of
              transactions without compromising on speed or security. It aims to
              provide a seamless experience for users, allowing them to transact
              quickly and efficiently, without the need for intermediaries.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#4377F8] lg:h-[256px] lg:w-[256px] blur-[175px] absolute right-0 top-[50%] translate-y-[-50%]"></div>
    </section>
  );
};

export default BlockChain;
