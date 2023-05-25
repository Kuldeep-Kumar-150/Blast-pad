import React, { useState } from "react";
import umberelaImage from "../assets/img/png/umberelaImage.png";
import arrowImage from "../assets/img/svg/arrowImage.svg";
const ChooseTheAir = () => {
  const [color, setColor] = useState(1);
  const [first, setfirst] = useState(3);
  return (
    <div className="frequentlyBg">
      <div className="container mx-auto px-3">
        <div className="grid lg:grid-cols-2 grid-cols-1  gap-3 items-center py-10 md:py-20 lg:py-24">
          <div className="flex flex-col" data-aos="flip-left">
            <h2 className="text-3xl text-center lg:text-start md:text-4xl lg:text-[40px] text-white font-bold ff_raleway">
              Air Drop Tokens
            </h2>
            <p className="text-[#B6B7C1] text-center lg:text-start text-sm md:text-base font-normal mt-4 ff_raleway lg:pr-16">
              In a crypto AirDrop, tokens or coins are usually distributed for
              free to eligible users who meet certain criteria, such as holding
              a specific amount of another cryptocurrency, completing certain
              tasks, or signing up for a particular service. The tokens or coins
              are typically distributed directly to the users' wallets, and can
              be held or sold on exchanges
            </p>
            <p className="text-[#B6B7C1] text-center lg:text-start text-sm md:text-base font-normal mt-4 ff_raleway lg:pr-16">
              AirDrops can be a way for crypto projects to build a community,
              incentivize user engagement, and generate buzz around their
              project.
            </p>
          </div>
          <div className="flex justify-center relative z-10" data-aos="flip-right">
            <div className="bg-[#4377F8] blur-[146px] h-60 w-60 rounded-full absolute -z-10 to-50% left-2/4 -translate-x-2/4 translate-y-2/4"></div>
            <img
              className="w-full md:w-4/6 lg:w-full"
              src={umberelaImage}
              alt="umberelaImage"
            />
          </div>
        </div>

        <div className=" pb-24 md:pb-36 lg:pb-44">
          <h2 className=" text-3xl md:text-4xl text-center lg:text-[40px] text-white font-bold ff_raleway">
            Choose The Air Drop Type
          </h2>
          <div className="flex-col md:flex-row flex gap-5 mt-12">
            <div className="md:w-1/3 relative z-10">
              <div className="bg-[#4377F8] blur-[146px] h-32 bottom-0 md:h-60 w-32 md:w-60 rounded-full absolute -z-10 md:bottom-12 left-1/6  "></div>

              <button
                onClick={() => setColor(1)}
                className={
                  color === 1
                    ? "bg_blue_linear rounded-[10px] py-7 lg:py-10 px-[23px] border border-[#5786F9] flex justify-between items-center w-full text-white text-xl font-bold ff_raleway "
                    : "rounded-[10px] flex justify-between py-7 lg:py-10 px-[23px] border border-[#1F254E] items-center w-full text-white text-xl font-bold ff_raleway "
                }
              >
                Air Drop Push
                <svg
                  width="8"
                  height="12"
                  viewBox="0 0 8 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.4 6L1.4 12L0 10.6L4.6 6L0 1.4L1.4 0L7.4 6Z"
                    fill="white"
                  />
                </svg>
              </button>
              <button
                onClick={() => setColor(2)}
                className={
                  color === 2
                    ? "bg_blue_linear rounded-[10px] py-7 lg:py-10 px-[23px] border border-[#5786F9] flex mt-5 justify-between items-center w-full text-white text-xl font-bold ff_raleway "
                    : "rounded-[10px] flex mt-5 justify-between py-7 lg:py-10 px-[23px] border border-[#1F254E] items-center w-full text-white text-xl font-bold ff_raleway "
                }
              >
                Air Drop Claim
                <svg
                  width="8"
                  height="12"
                  viewBox="0 0 8 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.4 6L1.4 12L0 10.6L4.6 6L0 1.4L1.4 0L7.4 6Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
            <div className={color === 1 ? "md:w-2/3 block" : "hidden md:w-2/3"}>
              <div data-aos="fade-right" className=" overflow-hidden border-[1.2px] border-[#3C436A] rounded-[10px]  bg-transparemt py-4 px-5">
                <button
                  onClick={() => setfirst(1)}
                  className="py-[9px] px-10 ease-in-out duration-300 hover:scale-95 text-white font-bold ff_raleway text-lg bg-[#1C2F6F] rounded-[22px]"
                >
                  Step 1
                </button>
                <div className="flex items-center mt-4 justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-white h-1 w-1"></div>
                    <p className="text-white text-base font-semibold ff_raleway">
                      Log into the Proton Account containing the token you wish
                      to Air Drop
                    </p>
                  </div>
                  <img
                    className={
                      first === 1
                        ? "ease-in duration-300 rotate-0"
                        : " ease-in duration-300 rotate-180"
                    }
                    height={7}
                    width={12}
                    src={arrowImage}
                    alt="arrowImage"
                  />
                </div>
                <div
                  className={
                    first === 1
                      ? "h-[400px] md:h-[250px] ease-in duration-500"
                      : "ease-in duration-500 h-0 "
                  }
                >
                  <div className=" mt-6 border border-[#0B113A]"></div>
                  <form className=" flex flex-col md:flex-row  items-center mt-5">
                    <input
                      className="h-6 w-6 border-[1.2px] border-[#293161] rounded-[5px] bg-[#080D33] appearance-none"
                      type="checkbox"
                      id="1"
                    />
                    <label
                      htmlFor="1"
                      className="text-[#B3B3BD] ml-4 mt-2 md:mt-0 text-[11px] min-[418px]:text-base  font-normal ff_raleway"
                    >
                      Air Drop tokens to Proton accounts older than
                    </label>
                  </form>
                  <div className="mt-[10px] cursor-pointer flex items-center px-5 justify-between w-full md:w-1/2  bg-[#090C2E] border border-[#212344] rounded-[10px]">
                    <h4 className="text-base font-bold ff_raleway text-white py-[18px]">
                      1 Day
                    </h4>
                    <img
                      className=" rotate-180"
                      src={arrowImage}
                      height={7}
                      width={12}
                      alt="image"
                    />
                  </div>
                  <form className=" flex flex-col md:flex-row  items-center mt-5">
                    <input
                      className="h-6 w-6 border-[1.2px] border-[#293161] rounded-[5px] bg-[#080D33] appearance-none"
                      type="checkbox"
                      id="2"
                    />
                    <label
                      htmlFor="2"
                      className="text-[#B3B3BD] ml-4 mt-2 md:mt-0 text-[11px] min-[418px]:text-base  font-normal ff_raleway"
                    >
                      Air Drop tokens to Proton accounts older than
                    </label>
                  </form>
                  <div className="flex flex-col md:flex-row items-center gap-3">
                    <div className="mt-[10px] cursor-pointer flex items-center w-full px-5 justify-between  bg-[#090C2E] border border-[#212344] rounded-[10px]">
                      <h4 className="text-base font-bold ff_raleway text-white py-[18px]">
                        100
                      </h4>
                      <img
                        className=" rotate-180"
                        src={arrowImage}
                        height={7}
                        width={12}
                        alt="image"
                      />
                    </div>
                    <div className="mt-[10px] cursor-pointer flex items-center w-full px-5 justify-between  bg-[#090C2E] border border-[#212344] rounded-[10px]">
                      <h4 className="text-base font-bold ff_raleway text-white py-[18px]">
                        XPR
                      </h4>
                      <img
                        className=" rotate-180"
                        src={arrowImage}
                        height={7}
                        width={12}
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-left" className="mt-5 overflow-hidden border-[1.2px] border-[#3C436A] rounded-[10px]  bg-transparemt py-4 px-5">
                <button
                  onClick={() => setfirst(2)}
                  className="py-[9px] ease-in-out duration-300 hover:scale-95 px-10 text-white font-bold ff_raleway text-lg bg-[#1C2F6F] rounded-[22px]"
                >
                  Step 2
                </button>
                <div className="flex items-center mt-4 justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-white h-1 w-1"></div>
                    <p className="text-white text-base font-semibold ff_raleway">
                      Choose the token you would like to Air Drop
                    </p>
                  </div>
                  <img
                    className={
                      first === 2
                        ? "ease-in duration-300 rotate-0"
                        : " ease-in duration-300 rotate-180"
                    }
                    height={7}
                    width={12}
                    src={arrowImage}
                    alt="arrowImage"
                  />
                </div>
                <div
                  className={
                    first === 2
                      ? "h-[400px] md:h-[250px] ease-in duration-500"
                      : "ease-in duration-500 h-0 "
                  }
                >
                  <div className=" mt-6 border border-[#0B113A]"></div>
                  <form className=" flex flex-col md:flex-row  items-center mt-5">
                    <input
                      className="h-6 w-6 border-[1.2px] border-[#293161] rounded-[5px] bg-[#080D33] appearance-none"
                      type="checkbox"
                      id="3"
                    />
                    <label
                      htmlFor="3"
                      className="text-[#B3B3BD] ml-4 mt-2 md:mt-0 text-[11px] min-[418px]:text-base  font-normal ff_raleway"
                    >
                      Air Drop tokens to Proton accounts older than
                    </label>
                  </form>
                  <div className="mt-[10px] cursor-pointer flex items-center px-5 justify-between w-full md:w-1/2  bg-[#090C2E] border border-[#212344] rounded-[10px]">
                    <h4 className="text-base font-bold ff_raleway text-white py-[18px]">
                      1 Day
                    </h4>
                    <img
                      className=" rotate-180"
                      src={arrowImage}
                      height={7}
                      width={12}
                      alt="image"
                    />
                  </div>
                  <form className=" flex flex-col md:flex-row  items-center mt-5">
                    <input
                      className="h-6 w-6 border-[1.2px] border-[#293161] rounded-[5px] bg-[#080D33] appearance-none"
                      type="checkbox"
                      id="4"
                    />
                    <label
                      htmlFor="4"
                      className="text-[#B3B3BD] ml-4 mt-2 md:mt-0 text-[11px] min-[418px]:text-base  font-normal ff_raleway"
                    >
                      Air Drop tokens to Proton accounts older than
                    </label>
                  </form>
                  <div className="flex flex-col md:flex-row items-center gap-3">
                    <div className="mt-[10px] cursor-pointer flex items-center w-full px-5 justify-between  bg-[#090C2E] border border-[#212344] rounded-[10px]">
                      <h4 className="text-base font-bold ff_raleway text-white py-[18px]">
                        100
                      </h4>
                      <img
                        className=" rotate-180"
                        src={arrowImage}
                        height={7}
                        width={12}
                        alt="image"
                      />
                    </div>
                    <div className="mt-[10px] cursor-pointer flex items-center w-full px-5 justify-between  bg-[#090C2E] border border-[#212344] rounded-[10px]">
                      <h4 className="text-base font-bold ff_raleway text-white py-[18px]">
                        XPR
                      </h4>
                      <img
                        className=" rotate-180"
                        src={arrowImage}
                        height={7}
                        width={12}
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div data-aos="fade-right" className="mt-5 overflow-hidden border-[1.2px] border-[#3C436A] rounded-[10px]  bg-transparemt py-4 px-5">
                <button
                  onClick={() => setfirst(3)}
                  className="py-[9px] ease-in-out duration-300 hover:scale-95 px-10 text-white font-bold ff_raleway text-lg bg-[#1C2F6F] rounded-[22px]"
                >
                  Step 3
                </button>
                <div className="flex items-center mt-4 justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-white h-1 w-1"></div>
                    <p className="text-white text-base font-semibold ff_raleway">
                      Choose one or both of the options below and select from
                      the drop down menus
                    </p>
                  </div>

                  <img
                    className={
                      first === 3
                        ? "ease-in duration-300 rotate-0"
                        : " ease-in duration-300 rotate-180"
                    }
                    height={7}
                    width={12}
                    src={arrowImage}
                    alt="arrowImage"
                  />
                </div>
                <div
                  className={
                    first === 3
                      ? "h-[400px] md:h-[250px] ease-in duration-500"
                      : "ease-in duration-500 h-0 "
                  }
                >
                  <div className=" mt-6 border border-[#0B113A]"></div>
                  <form className=" flex flex-col md:flex-row  items-center mt-5">
                    <input
                      className="h-6 w-6 border-[1.2px] border-[#293161] rounded-[5px] bg-[#080D33] appearance-none"
                      type="checkbox"
                      id="5"
                    />
                    <label
                      htmlFor="5"
                      className="text-[#B3B3BD] ml-4 mt-2 md:mt-0 text-[11px] min-[418px]:text-base  font-normal ff_raleway"
                    >
                      Air Drop tokens to Proton accounts older than
                    </label>
                  </form>
                  <div className="mt-[10px] cursor-pointer flex items-center px-5 justify-between w-full md:w-1/2  bg-[#090C2E] border border-[#212344] rounded-[10px]">
                    <h4 className="text-base font-bold ff_raleway text-white py-[18px]">
                      1 Day
                    </h4>
                    <img
                      className=" rotate-180"
                      src={arrowImage}
                      height={7}
                      width={12}
                      alt="image"
                    />
                  </div>
                  <form className=" flex flex-col md:flex-row  items-center mt-5">
                    <input
                      className="h-6 w-6 border-[1.2px] border-[#293161] rounded-[5px] bg-[#080D33] appearance-none"
                      type="checkbox"
                      id="6"
                    />
                    <label
                      htmlFor="6"
                      className="text-[#B3B3BD] ml-4 mt-2 md:mt-0 text-[11px] min-[418px]:text-base  font-normal ff_raleway"
                    >
                      Air Drop tokens to Proton accounts older than
                    </label>
                  </form>
                  <div className="flex flex-col md:flex-row items-center gap-3">
                    <div className="mt-[10px] cursor-pointer flex items-center w-full px-5 justify-between  bg-[#090C2E] border border-[#212344] rounded-[10px]">
                      <h4 className="text-base font-bold ff_raleway text-white py-[18px]">
                        100
                      </h4>
                      <img
                        className=" rotate-180"
                        src={arrowImage}
                        height={7}
                        width={12}
                        alt="image"
                      />
                    </div>
                    <div className="mt-[10px] cursor-pointer flex items-center w-full px-5 justify-between  bg-[#090C2E] border border-[#212344] rounded-[10px]">
                      <h4 className="text-base font-bold ff_raleway text-white py-[18px]">
                        XPR
                      </h4>
                      <img
                        className=" rotate-180"
                        src={arrowImage}
                        height={7}
                        width={12}
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* 4th */}
              <div data-aos="fade-left" className="mt-5 overflow-hidden border-[1.2px] border-[#3C436A] rounded-[10px]  bg-transparemt py-4 px-5">
                <button
                  onClick={() => setfirst(4)}
                  className="py-[9px] px-10 ease-in-out duration-300 hover:scale-95 text-white font-bold ff_raleway text-lg bg-[#1C2F6F] rounded-[22px]"
                >
                  Step 4
                </button>
                <div className="flex items-center mt-4 justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-white h-1 w-1"></div>
                    <p className="text-white text-base font-semibold ff_raleway">
                      Enter your message to be sent with the token air drop
                    </p>
                  </div>

                  <img
                    className={
                      first === 4
                        ? "ease-in duration-300 rotate-0"
                        : " ease-in duration-300 rotate-180"
                    }
                    height={7}
                    width={12}
                    src={arrowImage}
                    alt="arrowImage"
                  />
                </div>
                <div
                  className={
                    first === 4
                      ? "h-[400px] md:h-[250px] ease-in duration-500"
                      : "ease-in duration-500 h-0 "
                  }
                >
                  <div className=" mt-6 border border-[#0B113A]"></div>
                  <form className=" flex flex-col md:flex-row  items-center mt-5">
                    <input
                      className="h-6 w-6 border-[1.2px] border-[#293161] rounded-[5px] bg-[#080D33] appearance-none"
                      type="checkbox"
                      id="7"
                    />
                    <label
                      htmlFor="7"
                      className="text-[#B3B3BD] ml-4 mt-2 md:mt-0 text-[11px] min-[418px]:text-base  font-normal ff_raleway"
                    >
                      Air Drop tokens to Proton accounts older than
                    </label>
                  </form>
                  <div className="mt-[10px] cursor-pointer flex items-center px-5 justify-between w-full md:w-1/2  bg-[#090C2E] border border-[#212344] rounded-[10px]">
                    <h4 className="text-base font-bold ff_raleway text-white py-[18px]">
                      1 Day
                    </h4>
                    <img
                      className=" rotate-180"
                      src={arrowImage}
                      height={7}
                      width={12}
                      alt="image"
                    />
                  </div>
                  <form className=" flex flex-col md:flex-row  items-center mt-5">
                    <input
                      className="h-6 w-6 border-[1.2px] border-[#293161] rounded-[5px] bg-[#080D33] appearance-none"
                      type="checkbox"
                      id="8"
                    />
                    <label
                      htmlFor="8"
                      className="text-[#B3B3BD] ml-4 mt-2 md:mt-0 text-[11px] min-[418px]:text-base  font-normal ff_raleway"
                    >
                      Air Drop tokens to Proton accounts older than
                    </label>
                  </form>
                  <div className="flex flex-col md:flex-row items-center gap-3">
                    <div className="mt-[10px] cursor-pointer flex items-center w-full px-5 justify-between  bg-[#090C2E] border border-[#212344] rounded-[10px]">
                      <h4 className="text-base font-bold ff_raleway text-white py-[18px]">
                        100
                      </h4>
                      <img
                        className=" rotate-180"
                        src={arrowImage}
                        height={7}
                        width={12}
                        alt="image"
                      />
                    </div>
                    <div className="mt-[10px] cursor-pointer flex items-center w-full px-5 justify-between  bg-[#090C2E] border border-[#212344] rounded-[10px]">
                      <h4 className="text-base font-bold ff_raleway text-white py-[18px]">
                        XPR
                      </h4>
                      <img
                        className=" rotate-180"
                        src={arrowImage}
                        height={7}
                        width={12}
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* 5th */}
              <div data-aos="fade-right" className="mt-5 overflow-hidden border-[1.2px] border-[#3C436A] rounded-[10px]  bg-transparemt py-4 px-5">
                <button
                  onClick={() => setfirst(5)}
                  className="py-[9px] px-10 ease-in-out duration-300 hover:scale-95 text-white font-bold ff_raleway text-lg bg-[#1C2F6F] rounded-[22px]"
                >
                  Step 5
                </button>
                <div className="flex items-center mt-4 justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-white h-1 w-1"></div>
                    <p className="text-white text-base font-semibold ff_raleway">
                      Choose a payment option
                    </p>
                  </div>

                  <img
                    className={
                      first === 5
                        ? "ease-in duration-300 rotate-0"
                        : " ease-in duration-300 rotate-180"
                    }
                    height={7}
                    width={12}
                    src={arrowImage}
                    alt="arrowImage"
                  />
                </div>
                <div
                  className={
                    first === 5
                      ? "h-[400px] md:h-[250px] ease-in duration-500"
                      : "ease-in duration-500 h-0 "
                  }
                >
                  <div className=" mt-6 border border-[#0B113A]"></div>
                  <form className=" flex flex-col md:flex-row  items-center mt-5">
                    <input
                      className="h-6 w-6 border-[1.2px] border-[#293161] rounded-[5px] bg-[#080D33] appearance-none"
                      type="checkbox"
                      id="9"
                    />
                    <label
                      htmlFor="9"
                      className="text-[#B3B3BD] ml-4 mt-2 md:mt-0 text-[11px] min-[418px]:text-base  font-normal ff_raleway"
                    >
                      Air Drop tokens to Proton accounts older than
                    </label>
                  </form>
                  <div className="mt-[10px] cursor-pointer flex items-center px-5 justify-between w-full md:w-1/2  bg-[#090C2E] border border-[#212344] rounded-[10px]">
                    <h4 className="text-base font-bold ff_raleway text-white py-[18px]">
                      1 Day
                    </h4>
                    <img
                      className=" rotate-180"
                      src={arrowImage}
                      height={7}
                      width={12}
                      alt="image"
                    />
                  </div>
                  <form className=" flex flex-col md:flex-row  items-center mt-5">
                    <input
                      className="h-6 w-6 border-[1.2px] border-[#293161] rounded-[5px] bg-[#080D33] appearance-none"
                      type="checkbox"
                      id="10"
                    />
                    <label
                      htmlFor="10"
                      className="text-[#B3B3BD] ml-4 mt-2 md:mt-0 text-[11px] min-[418px]:text-base  font-normal ff_raleway"
                    >
                      Air Drop tokens to Proton accounts older than
                    </label>
                  </form>
                  <div className="flex flex-col md:flex-row items-center gap-3">
                    <div className="mt-[10px] cursor-pointer flex items-center w-full px-5 justify-between  bg-[#090C2E] border border-[#212344] rounded-[10px]">
                      <h4 className="text-base font-bold ff_raleway text-white py-[18px]">
                        100
                      </h4>
                      <img
                        className=" rotate-180"
                        src={arrowImage}
                        height={7}
                        width={12}
                        alt="image"
                      />
                    </div>
                    <div className="mt-[10px] cursor-pointer flex items-center w-full px-5 justify-between  bg-[#090C2E] border border-[#212344] rounded-[10px]">
                      <h4 className="text-base font-bold ff_raleway text-white py-[18px]">
                        XPR
                      </h4>
                      <img
                        className=" rotate-180"
                        src={arrowImage}
                        height={7}
                        width={12}
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={color === 2 ? "md:w-2/3 block" : "hidden md:w-2/3"}>
              {/* 6th */}
              <div className=" overflow-hidden border-[1.2px] border-[#3C436A] rounded-[10px]  bg-transparemt py-4 px-5">
                <button
                  onClick={() => setfirst(1)}
                  className="py-[9px] ease-in-out duration-300 hover:scale-95 px-10 text-white font-bold ff_raleway text-lg bg-[#1C2F6F] rounded-[22px]"
                >
                  Step 6
                </button>
                <div className="flex items-center mt-4 justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-white h-1 w-1"></div>
                    <p className="text-white text-base font-semibold ff_raleway">
                      Log into the Proton Account containing the token you wish
                      to Air Drop
                    </p>
                  </div>

                  <img
                    className={
                      first === 1
                        ? "ease-in duration-300 rotate-0"
                        : " ease-in duration-300 rotate-180"
                    }
                    height={7}
                    width={12}
                    src={arrowImage}
                    alt="arrowImage"
                  />
                </div>
                <div
                  className={
                    first === 1
                      ? "h-[400px] md:h-[250px] ease-in duration-500"
                      : "ease-in duration-500 h-0 "
                  }
                >
                  <div className=" mt-6 border border-[#0B113A]"></div>
                  <form className=" flex flex-col md:flex-row  items-center mt-5">
                    <input
                      className="h-6 w-6 border-[1.2px] border-[#293161] rounded-[5px] bg-[#080D33] appearance-none"
                      type="checkbox"
                      id="11"
                    />
                    <label
                      htmlFor="11"
                      className="text-[#B3B3BD] ml-4 mt-2 md:mt-0 text-[11px] min-[418px]:text-base  font-normal ff_raleway"
                    >
                      Air Drop tokens to Proton accounts older than
                    </label>
                  </form>
                  <div className="mt-[10px] cursor-pointer flex items-center px-5 justify-between w-full md:w-1/2  bg-[#090C2E] border border-[#212344] rounded-[10px]">
                    <h4 className="text-base font-bold ff_raleway text-white py-[18px]">
                      1 Day
                    </h4>
                    <img
                      className=" rotate-180"
                      src={arrowImage}
                      height={7}
                      width={12}
                      alt="image"
                    />
                  </div>
                  <form className=" flex flex-col md:flex-row  items-center mt-5">
                    <input
                      className="h-6 w-6 border-[1.2px] border-[#293161] rounded-[5px] bg-[#080D33] appearance-none"
                      type="checkbox"
                      id="12"
                    />
                    <label
                      htmlFor="12"
                      className="text-[#B3B3BD] ml-4 mt-2 md:mt-0 text-[11px] min-[418px]:text-base  font-normal ff_raleway"
                    >
                      Air Drop tokens to Proton accounts older than
                    </label>
                  </form>
                  <div className="flex flex-col md:flex-row items-center gap-3">
                    <div className="mt-[10px] cursor-pointer flex items-center w-full px-5 justify-between  bg-[#090C2E] border border-[#212344] rounded-[10px]">
                      <h4 className="text-base font-bold ff_raleway text-white py-[18px]">
                        100
                      </h4>
                      <img
                        className=" rotate-180"
                        src={arrowImage}
                        height={7}
                        width={12}
                        alt="image"
                      />
                    </div>
                    <div className="mt-[10px] cursor-pointer flex items-center w-full px-5 justify-between  bg-[#090C2E] border border-[#212344] rounded-[10px]">
                      <h4 className="text-base font-bold ff_raleway text-white py-[18px]">
                        XPR
                      </h4>
                      <img
                        className=" rotate-180"
                        src={arrowImage}
                        height={7}
                        width={12}
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* 7th */}
              <div className="mt-5 overflow-hidden border-[1.2px] border-[#3C436A] rounded-[10px]  bg-transparemt py-4 px-5">
                <button
                  onClick={() => setfirst(2)}
                  className="py-[9px] ease-in-out duration-300 hover:scale-95 px-10 text-white font-bold ff_raleway text-lg bg-[#1C2F6F] rounded-[22px]"
                >
                  Step 7
                </button>
                <div className="flex items-center mt-4 justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-white h-1 w-1"></div>
                    <p className="text-white text-base font-semibold ff_raleway">
                      Choose the token you would like to Air Drop
                    </p>
                  </div>

                  <img
                    className={
                      first === 2
                        ? "ease-in duration-300 rotate-0"
                        : " ease-in duration-300 rotate-180"
                    }
                    height={7}
                    width={12}
                    src={arrowImage}
                    alt="arrowImage"
                  />
                </div>
                <div
                  className={
                    first === 2
                      ? "h-[400px] md:h-[250px] ease-in duration-500"
                      : "ease-in duration-500 h-0 "
                  }
                >
                  <div className=" mt-6 border border-[#0B113A]"></div>
                  <form className=" flex flex-col md:flex-row  items-center mt-5">
                    <input
                      className="h-6 w-6 border-[1.2px] border-[#293161] rounded-[5px] bg-[#080D33] appearance-none"
                      type="checkbox"
                      id="13"
                    />
                    <label
                      htmlFor="13"
                      className="text-[#B3B3BD] ml-4 mt-2 md:mt-0 text-[11px] min-[418px]:text-base  font-normal ff_raleway"
                    >
                      Air Drop tokens to Proton accounts older than
                    </label>
                  </form>
                  <div className="mt-[10px] cursor-pointer flex items-center px-5 justify-between w-full md:w-1/2  bg-[#090C2E] border border-[#212344] rounded-[10px]">
                    <h4 className="text-base font-bold ff_raleway text-white py-[18px]">
                      1 Day
                    </h4>
                    <img
                      className=" rotate-180"
                      src={arrowImage}
                      height={7}
                      width={12}
                      alt="image"
                    />
                  </div>
                  <form className=" flex flex-col md:flex-row  items-center mt-5">
                    <input
                      className="h-6 w-6 border-[1.2px] border-[#293161] rounded-[5px] bg-[#080D33] appearance-none"
                      type="checkbox"
                      id="14"
                    />
                    <label
                      htmlFor="14"
                      className="text-[#B3B3BD] ml-4 mt-2 md:mt-0 text-[11px] min-[418px]:text-base  font-normal ff_raleway"
                    >
                      Air Drop tokens to Proton accounts older than
                    </label>
                  </form>
                  <div className="flex flex-col md:flex-row items-center gap-3">
                    <div className="mt-[10px] cursor-pointer flex items-center w-full px-5 justify-between  bg-[#090C2E] border border-[#212344] rounded-[10px]">
                      <h4 className="text-base font-bold ff_raleway text-white py-[18px]">
                        100
                      </h4>
                      <img
                        className=" rotate-180"
                        src={arrowImage}
                        height={7}
                        width={12}
                        alt="image"
                      />
                    </div>
                    <div className="mt-[10px] cursor-pointer flex items-center w-full px-5 justify-between  bg-[#090C2E] border border-[#212344] rounded-[10px]">
                      <h4 className="text-base font-bold ff_raleway text-white py-[18px]">
                        XPR
                      </h4>
                      <img
                        className=" rotate-180"
                        src={arrowImage}
                        height={7}
                        width={12}
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* 8th */}
              <div className="mt-5 overflow-hidden border-[1.2px] border-[#3C436A] rounded-[10px]  bg-transparemt py-4 px-5">
                <button
                  onClick={() => setfirst(3)}
                  className="py-[9px] ease-in-out duration-300 hover:scale-95 px-10 text-white font-bold ff_raleway text-lg bg-[#1C2F6F] rounded-[22px]"
                >
                  Step 8
                </button>
                <div className="flex items-center mt-4 justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-white h-1 w-1"></div>
                    <p className="text-white text-base font-semibold ff_raleway">
                      Choose one or both of the options below and select from
                      the drop down menus
                    </p>
                  </div>

                  <img
                    className={
                      first === 3
                        ? "ease-in duration-300 rotate-0"
                        : " ease-in duration-300 rotate-180"
                    }
                    height={7}
                    width={12}
                    src={arrowImage}
                    alt="arrowImage"
                  />
                </div>
                <div
                  className={
                    first === 3
                      ? "h-[400px] md:h-[250px] ease-in duration-500"
                      : "ease-in duration-500 h-0 "
                  }
                >
                  <div className=" mt-6 border border-[#0B113A]"></div>
                  <form className=" flex flex-col md:flex-row  items-center mt-5">
                    <input
                      className="h-6 w-6 border-[1.2px] border-[#293161] rounded-[5px] bg-[#080D33] appearance-none"
                      type="checkbox"
                      id="15"
                    />
                    <label
                      htmlFor="15"
                      className="text-[#B3B3BD] ml-4 mt-2 md:mt-0 text-[11px] min-[418px]:text-base  font-normal ff_raleway"
                    >
                      Air Drop tokens to Proton accounts older than
                    </label>
                  </form>
                  <div className="mt-[10px] cursor-pointer flex items-center px-5 justify-between w-full md:w-1/2  bg-[#090C2E] border border-[#212344] rounded-[10px]">
                    <h4 className="text-base font-bold ff_raleway text-white py-[18px]">
                      1 Day
                    </h4>
                    <img
                      className=" rotate-180"
                      src={arrowImage}
                      height={7}
                      width={12}
                      alt="image"
                    />
                  </div>
                  <form className=" flex flex-col md:flex-row  items-center mt-5">
                    <input
                      className="h-6 w-6 border-[1.2px] border-[#293161] rounded-[5px] bg-[#080D33] appearance-none"
                      type="checkbox"
                      id="16"
                    />
                    <label
                      htmlFor="16"
                      className="text-[#B3B3BD] ml-4 mt-2 md:mt-0 text-[11px] min-[418px]:text-base  font-normal ff_raleway"
                    >
                      Air Drop tokens to Proton accounts older than
                    </label>
                  </form>
                  <div className="flex flex-col md:flex-row items-center gap-3">
                    <div className="mt-[10px] cursor-pointer flex items-center w-full px-5 justify-between  bg-[#090C2E] border border-[#212344] rounded-[10px]">
                      <h4 className="text-base font-bold ff_raleway text-white py-[18px]">
                        100
                      </h4>
                      <img
                        className=" rotate-180"
                        src={arrowImage}
                        height={7}
                        width={12}
                        alt="image"
                      />
                    </div>
                    <div className="mt-[10px] cursor-pointer flex items-center w-full px-5 justify-between  bg-[#090C2E] border border-[#212344] rounded-[10px]">
                      <h4 className="text-base font-bold ff_raleway text-white py-[18px]">
                        XPR
                      </h4>
                      <img
                        className=" rotate-180"
                        src={arrowImage}
                        height={7}
                        width={12}
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* 9th */}
              <div className="mt-5 overflow-hidden border-[1.2px] border-[#3C436A] rounded-[10px]  bg-transparemt py-4 px-5">
                <button
                  onClick={() => setfirst(4)}
                  className="py-[9px] ease-in-out duration-300 hover:scale-95 px-10 text-white font-bold ff_raleway text-lg bg-[#1C2F6F] rounded-[22px]"
                >
                  Step 8
                </button>
                <div className="flex items-center mt-4 justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-white h-1 w-1"></div>
                    <p className="text-white text-base font-semibold ff_raleway">
                      Enter your message to be sent with the token air drop
                    </p>
                  </div>

                  <img
                    className={
                      first === 4
                        ? "ease-in duration-300 rotate-0"
                        : " ease-in duration-300 rotate-180"
                    }
                    height={7}
                    width={12}
                    src={arrowImage}
                    alt="arrowImage"
                  />
                </div>
                <div
                  className={
                    first === 4
                      ? "h-[400px] md:h-[250px] ease-in duration-500"
                      : "ease-in duration-500 h-0 "
                  }
                >
                  <div className=" mt-6 border border-[#0B113A]"></div>
                  <form className=" flex flex-col md:flex-row  items-center mt-5">
                    <input
                      className="h-6 w-6 border-[1.2px] border-[#293161] rounded-[5px] bg-[#080D33] appearance-none"
                      type="checkbox"
                      id="17"
                    />
                    <label
                      htmlFor="17"
                      className="text-[#B3B3BD] ml-4 mt-2 md:mt-0 text-[11px] min-[418px]:text-base  font-normal ff_raleway"
                    >
                      Air Drop tokens to Proton accounts older than
                    </label>
                  </form>
                  <div className="mt-[10px] cursor-pointer flex items-center px-5 justify-between w-full md:w-1/2  bg-[#090C2E] border border-[#212344] rounded-[10px]">
                    <h4 className="text-base font-bold ff_raleway text-white py-[18px]">
                      1 Day
                    </h4>
                    <img
                      className=" rotate-180"
                      src={arrowImage}
                      height={7}
                      width={12}
                      alt="image"
                    />
                  </div>
                  <form className=" flex flex-col md:flex-row  items-center mt-5">
                    <input
                      className="h-6 w-6 border-[1.2px] border-[#293161] rounded-[5px] bg-[#080D33] appearance-none"
                      type="checkbox"
                      id="18"
                    />
                    <label
                      htmlFor="18"
                      className="text-[#B3B3BD] ml-4 mt-2 md:mt-0 text-[11px] min-[418px]:text-base  font-normal ff_raleway"
                    >
                      Air Drop tokens to Proton accounts older than
                    </label>
                  </form>
                  <div className="flex flex-col md:flex-row items-center gap-3">
                    <div className="mt-[10px] cursor-pointer flex items-center w-full px-5 justify-between  bg-[#090C2E] border border-[#212344] rounded-[10px]">
                      <h4 className="text-base font-bold ff_raleway text-white py-[18px]">
                        100
                      </h4>
                      <img
                        className=" rotate-180"
                        src={arrowImage}
                        height={7}
                        width={12}
                        alt="image"
                      />
                    </div>
                    <div className="mt-[10px] cursor-pointer flex items-center w-full px-5 justify-between  bg-[#090C2E] border border-[#212344] rounded-[10px]">
                      <h4 className="text-base font-bold ff_raleway text-white py-[18px]">
                        XPR
                      </h4>
                      <img
                        className=" rotate-180"
                        src={arrowImage}
                        height={7}
                        width={12}
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
              {/* 10th */}
              <div className="mt-5 overflow-hidden border-[1.2px] border-[#3C436A] rounded-[10px]  bg-transparemt py-4 px-5">
                <button
                  onClick={() => setfirst(5)}
                  className="py-[9px] ease-in-out duration-300 hover:scale-95 px-10 text-white font-bold ff_raleway text-lg bg-[#1C2F6F] rounded-[22px]"
                >
                  Step 10
                </button>
                <div className="flex items-center mt-4 justify-between">
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-white h-1 w-1"></div>
                    <p className="text-white text-base font-semibold ff_raleway">
                      Choose a payment option
                    </p>
                  </div>

                  <img
                    className={
                      first === 5
                        ? "ease-in duration-300 rotate-0"
                        : " ease-in duration-300 rotate-180"
                    }
                    height={7}
                    width={12}
                    src={arrowImage}
                    alt="arrowImage"
                  />
                </div>
                <div
                  className={
                    first === 5
                      ? "h-[400px] md:h-[250px] ease-in duration-500"
                      : "ease-in duration-500 h-0 "
                  }
                >
                  <div className=" mt-6 border border-[#0B113A]"></div>
                  <form className=" flex flex-col md:flex-row  items-center mt-5">
                    <input
                      className="h-6 w-6 border-[1.2px] border-[#293161] rounded-[5px] bg-[#080D33] appearance-none"
                      type="checkbox"
                      id="19"
                    />
                    <label
                      htmlFor="19"
                      className="text-[#B3B3BD] ml-4 mt-2 md:mt-0 text-[11px] min-[418px]:text-base  font-normal ff_raleway"
                    >
                      Air Drop tokens to Proton accounts older than
                    </label>
                  </form>
                  <div className="mt-[10px] cursor-pointer flex items-center px-5 justify-between w-full md:w-1/2  bg-[#090C2E] border border-[#212344] rounded-[10px]">
                    <h4 className="text-base font-bold ff_raleway text-white py-[18px]">
                      1 Day
                    </h4>
                    <img
                      className=" rotate-180"
                      src={arrowImage}
                      height={7}
                      width={12}
                      alt="image"
                    />
                  </div>
                  <form className=" flex flex-col md:flex-row  items-center mt-5">
                    <input
                      className="h-6 w-6 border-[1.2px] border-[#293161] rounded-[5px] bg-[#080D33] appearance-none"
                      type="checkbox"
                      id="20"
                    />
                    <label
                      htmlFor="20"
                      className="text-[#B3B3BD] ml-4 mt-2 md:mt-0 text-[11px] min-[418px]:text-base  font-normal ff_raleway"
                    >
                      Air Drop tokens to Proton accounts older than
                    </label>
                  </form>
                  <div className="flex flex-col md:flex-row items-center gap-3">
                    <div className="mt-[10px] cursor-pointer flex items-center w-full px-5 justify-between  bg-[#090C2E] border border-[#212344] rounded-[10px]">
                      <h4 className="text-base font-bold ff_raleway text-white py-[18px]">
                        100
                      </h4>
                      <img
                        className=" rotate-180"
                        src={arrowImage}
                        height={7}
                        width={12}
                        alt="image"
                      />
                    </div>
                    <div className="mt-[10px] cursor-pointer flex items-center w-full px-5 justify-between  bg-[#090C2E] border border-[#212344] rounded-[10px]">
                      <h4 className="text-base font-bold ff_raleway text-white py-[18px]">
                        XPR
                      </h4>
                      <img
                        className=" rotate-180"
                        src={arrowImage}
                        height={7}
                        width={12}
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChooseTheAir;
