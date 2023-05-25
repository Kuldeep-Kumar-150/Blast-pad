import React from "react";
import blasepad_clouds from "../assets/img/png/blaspad_bones_clouds.png";
import blassbones_img from "../assets/img/png/bonuspool_man_img.png";
import bones_img1 from "../assets/img/png/bonus_img1.png";
function BlaspadBonesSection() {
  return (
    <section className="bg_blaspad_img bg-no-repeat bg-cover xl:pt-[108px] lg:pt-[100px] pt-[50px] relative z-10">
      <div className="bg-[#4377F8] blur-[175px] -z-10  min-w-[50px] xl:w-[221px] lg:w-[130px] w-[80px] h-[278px] absolute top-0 right-0"></div>
      <div className="bg-[#4377F8] blur-[175px] -z-10  min-w-[50px] xl:w-[256px] lg:w-[130px] w-[80px] h-[256px] absolute top-0 left-0"></div>
      <div className="bg-[#4377F8] blur-[175px] -z-10  min-w-[50px] xl:w-[256px] lg:w-[130px] w-[80px] h-[256px] absolute top-[50%] left-0"></div>
      <div className="bg-[#4377F8] blur-[175px] -z-10  min-w-[50px] xl:w-[256px] lg:w-[130px] w-[80px] h-[256px] absolute -bottom-[20%] right-0"></div>
      <div className="container mx-auto px-3">
        <div className="md:flex-row  md:justify-between flex-col items-center flex ">
          <div className="md:w-5/12 w-8/12" data-aos="fade-left">
            <img className="w-full" src={blassbones_img} alt="blassbones_img" />
            <img
              width={461}
              height={172}
              className="z-0 -mt-[11px]  w-full"
              src={blasepad_clouds}
              alt="blasepad_clouds"
            />
          </div>
          <div className="lg:w-5/12 md:w-6/12 text-center md:text-start" data-aos="fade-right">
            <h2 className="mb-0 text-white ff_raleway  font-bold lg:text-[40px] md:text-[30px] sm:text-[30px] text-[25px]">
              BlastPad Bonus Pool
            </h2>
            <p className=" ff_raleway font-normal text-base text-white pt-2 lg:pt-2">
              Staking has become an increasingly popular way for investors to
              earn rewards on their cryptocurrency holdings. By locking up their
              funds to help validate transactions and maintain network security,
              stakers can earn additional cryptocurrency as a reward.
            </p>
            <p className=" ff_raleway font-normal text-base text-white lg:pt-4 pt-2">
              These bonus rewards can take many forms, such as higher staking
              rewards, access to exclusive features or services, or airdrops of
              new tokens. For example, some networks may offer higher staking
              rewards to investors who hold a certain amount of their native
              token or provide liquidity to the network.
            </p>
          </div>
        </div>

        <div className="pt-16">
          <h2 className=" ff_raleway font-bold md:text-[40px] sm:text-[30px] text-[29px]   text-white text-center md;leading-[46px]">
            Stake your Blastpad tokens for
            <span className="md:block">Bonus Pool Rewards</span>
          </h2>
          <div className="md:flex  justify-between">
            <div className=" md:w-5/12" data-aos="fade-up-right">
              <h3 className="text-center md:text-start ff_raleway font-semibold text-2xl text-white pt-4 md:pt-10 ">
                We can have 3 levels of staking
              </h3>
              <p className="text-center md:text-start ff_raleway font-normal text-base text-white pt-4 md:max-w-[396px]">
                Lorem ipsum dolor sit amet consectetur. Nisi enim tellus quisque
                euismod feugiat sed vestibulum fermentum tempor.
              </p>
              <div className="flex sm:justify-center">
                <div className="z-30 rounded-xl ease-out duration-300 hover:bg-[#4377F8] bg-[#030739] w-[130px] h-[90px] lg:h-[114px] items-center flex justify-center mt-6">
                  <h2 className=" ff_raleway font-semibold text-[25px] lg:text-[40px] text-white">
                    1m
                  </h2>
                </div>
                <div className="z-30 rounded-xl ease-out duration-300 hover:bg-[#4377F8] bg-[#030739] w-[130px] h-[90px] lg:h-[114px] items-center flex justify-center mt-6 ms-6">
                  <h2 className=" ff_raleway font-semibold text-[25px] lg:text-[40px] text-white">
                    5m
                  </h2>
                </div>
                <div className="z-30 rounded-xl ease-out duration-300 hover:bg-[#4377F8] bg-[#030739] w-[130px] lg:h-[114px] h-[90px] items-center flex justify-center mt-6 ms-6">
                  <h2 className=" ff_raleway font-semibold text-[25px] lg:text-[40px] text-white">
                    10m
                  </h2>
                </div>
              </div>
            </div>
            <div className="md:w-6/12 flex items-end pt-8" data-aos="fade-up-left">
              <div className="w-4/12 pr-3">
                <div className="flex items-end">
                  <div className="flex flex-col">
                    <h3 className=" ff_raleway font-normal xl:text-2xl text-[#4377F8]">
                      Bonus
                    </h3>
                    <h2 className=" ff_raleway font-bold xl:text-[64px] lg:text-[50px] md:text-[40px] text-[30px]  text-white leading-[75px]">
                      1%
                    </h2>
                  </div>
                  <div className="ml-4 ">
                    <img
                      className=" h-[124px] -translate-y-[5px]"
                      src={bones_img1}
                      alt="bones_img1"
                    />
                  </div>
                </div>
                <div className="ease-in-out duration-300 hover:scale-105 bg-[#4377F8] lg:w-[105px] w-[70px] sm:w-[90px] rounded-[22px] flex  justify-center items-center lg:mt-6 mt-4 sm:h-[36px] h-[30px]">
                  <h3 className="  ff_raleway font-semibold  text-xl text-white flex items-center">
                    <div className=" bg-white h-2 w-2 rounded-3xl mr-1 sm:mr-2 font_feature lg:mr-3"></div>{" "}
                    1m
                  </h3>
                </div>
              </div>
              <div className="w-4/12 pr-3">
                <div className="flex items-end">
                  <div>
                    <h3 className=" ff_raleway font-normal xl:text-2xl text-[#4377F8] mb-4">
                      Bonus
                    </h3>
                    <h2 className=" ff_raleway font-bold xl:text-[64px] lg:text-[50px] md:text-[40px] text-[30px] text-white leading-[75px]">
                      2%
                    </h2>
                  </div>
                  <div className="ml-4 ">
                    <img
                      className=" h-[144px] -translate-y-[5px]"
                      src={bones_img1}
                      alt="bones_img1"
                    />
                  </div>
                </div>
                <div className="ease-in-out duration-300 hover:scale-105 bg-[#4377F8] lg:w-[105px] w-[70px] sm:w-[90px] rounded-[22px] flex  justify-center items-center lg:mt-6 mt-4 sm:h-[36px] h-[30px]">
                  <h3 className="  ff_raleway font-semibold  text-xl text-white flex items-center">
                    <div className=" bg-white h-2 w-2 rounded-3xl mr-1 sm:mr-2 font_feature lg:mr-3"></div>{" "}
                    5m
                  </h3>
                </div>
              </div>
              <div className="w-4/12 ">
                <div className="flex items-end">
                  <div className="flex flex-col">
                    <h3 className=" ff_raleway font-normal xl:text-2xl text-[#4377F8] mb-12">
                      Bonus
                    </h3>
                    <h2 className=" ff_raleway font-bold xl:text-[64px] lg:text-[50px] md:text-[40px] text-[30px] text-white leading-[75px]">
                      3%
                    </h2>
                  </div>
                  <div className="ml-4 ">
                    <img
                      className=" h-[180px] -translate-y-[5px]"
                      src={bones_img1}
                      alt="bones_img1"
                    />
                  </div>
                </div>
                <div className="ease-in-out duration-300 hover:scale-105 bg-[#4377F8] lg:w-[105px] w-[70px] sm:w-[90px] rounded-[22px] flex  justify-center items-center lg:mt-6 mt-4 sm:h-[36px] h-[30px]">
                  <h3 className="  ff_raleway font-semibold  text-xl text-white flex items-center">
                    <div className=" bg-white h-2 w-2 rounded-3xl mr-1 sm:mr-2 font_feature lg:mr-3"></div>
                    10m
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlaspadBonesSection;
