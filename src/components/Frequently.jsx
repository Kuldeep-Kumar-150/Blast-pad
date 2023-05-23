import React, { useState } from "react";
import arrowImage from "../assets/img/svg/arrowImage.svg";
const Frequently = () => {
  const [accordian, setAccordian] = useState(1);
  return (
    <div className="frequentlyBg py-16 md:py-24 lg:py-36">
      <div className="container mx-auto px-3">
        <h2 className="text-white font-bold text-2xl  md:text-4xl lg:text-[40px] ff_raleway">
          Frequently Asked Questions
        </h2>
        {/* 1st */}
        <div>
          <div
            onClick={() => setAccordian(1)}
            className="flex items-center cursor-pointer justify-between mt-12" >
            <h2 className="  text-[#E6E6EA] text-xl md:text-2xl ff_raleway font-medium">
              Q1. What is a BlastPad.io?
            </h2>
            <img
              className={
                accordian === 1
                  ? " rotate-0 ease-in duration-300 "
                  : " rotate-180 ease-in duration-300 "
              }
              src={arrowImage}
              alt="arrowImage"
              width={24}
              height={13}
            />
          </div>
          <p
            className={
              accordian === 1
                ? "block text-[#B5B6C1] ff_raleway border-b border-[#4377F8] pb-4  font-normal text-base mr-5 md:mr-20 md:ml-10 mt-4 "
                : "hidden text-[#B5B6C1] ff_raleway border-b border-[#4377F8] pb-4  font-normal text-base mr-5 md:mr-20 md:ml-10 mt-4 "
            }
          >
            Lorem ipsum dolor sit amet consectetur. Mattis morbi leo amet lacus
            eu est euismod pulvinar. Condimentum{" "}
            <span className="md:block">
              metus tincidunt curabitur nulla eros imperdiet vel amet amet. Ac
              lacus dolor rutrum in erat lobortis rhoncus
            </span>{" "}
            volutpat arcu.
          </p>
        </div>
        {/* 2nd */}
        <div>
          <div
            onClick={() => setAccordian(2)}
            className="flex items-center cursor-pointer justify-between mt-7"
          >
            <h2 className="  text-[#E6E6EA] text-xl md:text-2xl ff_raleway font-medium">
              Q2. How do I buy cryptocurrency?
            </h2>
            <img
              className={
                accordian === 2
                  ? " rotate-0 ease-in duration-300 "
                  : " rotate-180 ease-in duration-300 "
              }
              src={arrowImage}
              alt="arrowImage"
              width={24}
              height={13}
            />
          </div>
          <p
            className={
              accordian === 2
                ? "block text-[#B5B6C1] ff_raleway border-b border-[#4377F8] pb-4  font-normal text-base mr-5 md:mr-20 md:ml-10 mt-4 "
                : "hidden text-[#B5B6C1] ff_raleway border-b border-[#4377F8] pb-4  font-normal text-base mr-5 md:mr-20 md:ml-10 mt-4 "
            }
          >
            Lorem ipsum dolor sit amet consectetur. Mattis morbi leo amet lacus
            eu est euismod pulvinar. Condimentum{" "}
            <span className="md:block">
              metus tincidunt curabitur nulla eros imperdiet vel amet amet. Ac
              lacus dolor rutrum in erat lobortis rhoncus
            </span>{" "}
            volutpat arcu.
          </p>
        </div>
        {/* 3rd */}
        <div>
          <div
            onClick={() => setAccordian(3)}
            className="flex items-center cursor-pointer justify-between mt-7"
          >
            <h2 className="  text-[#E6E6EA] text-xl md:text-2xl ff_raleway font-medium">
              Q3. How do I store my cryptocurrency?
            </h2>
            <img
              className={
                accordian === 3
                  ? " rotate-0 ease-in duration-300 "
                  : " rotate-180 ease-in duration-300 "
              }
              src={arrowImage}
              alt="arrowImage"
              width={24}
              height={13}
            />
          </div>
          <p
            className={
              accordian === 3
                ? "block text-[#B5B6C1] ff_raleway border-b border-[#4377F8] pb-4  font-normal text-base mr-5 md:mr-20 md:ml-10 mt-4 "
                : "hidden text-[#B5B6C1] ff_raleway border-b border-[#4377F8] pb-4  font-normal text-base mr-5 md:mr-20 md:ml-10 mt-4 "
            }
          >
            Lorem ipsum dolor sit amet consectetur. Mattis morbi leo amet lacus
            eu est euismod pulvinar. Condimentum{" "}
            <span className="md:block">
              metus tincidunt curabitur nulla eros imperdiet vel amet amet. Ac
              lacus dolor rutrum in erat lobortis rhoncus
            </span>{" "}
            volutpat arcu.
          </p>
        </div>
        {/* 4th */}
        <div>
          <div
            onClick={() => setAccordian(4)}
            className="flex items-center cursor-pointer justify-between mt-7"
          >
            <h2 className="  text-[#E6E6EA] text-xl md:text-2xl ff_raleway font-medium">
              Q4. Is cryptocurrency secure?
            </h2>
            <img
              className={
                accordian === 4
                  ? " rotate-0 ease-in duration-300 "
                  : " rotate-180 ease-in duration-300 "
              }
              src={arrowImage}
              alt="arrowImage"
              width={24}
              height={13}
            />
          </div>
          <p
            className={
              accordian === 4
                ? "block text-[#B5B6C1] ff_raleway border-b border-[#4377F8] pb-4  font-normal text-base mr-5 md:mr-20 md:ml-10 mt-4 "
                : "hidden text-[#B5B6C1] ff_raleway border-b border-[#4377F8] pb-4  font-normal text-base mr-5 md:mr-20 md:ml-10 mt-4 "
            }
          >
            Lorem ipsum dolor sit amet consectetur. Mattis morbi leo amet lacus
            eu est euismod pulvinar. Condimentum{" "}
            <span className="md:block">
              metus tincidunt curabitur nulla eros imperdiet vel amet amet. Ac
              lacus dolor rutrum in erat lobortis rhoncus
            </span>{" "}
            volutpat arcu.
          </p>
        </div>
        {/* 5th */}
        <div>
          <div
            onClick={() => setAccordian(5)}
            className="flex items-center cursor-pointer justify-between mt-7"
          >
            <h2 className="  text-[#E6E6EA] text-xl md:text-2xl ff_raleway font-medium">
              Q5. Can I use cryptocurrency to buy goods and services?
            </h2>
            <img
              className={
                accordian === 5
                  ? " rotate-0 ease-in duration-300 "
                  : " rotate-180 ease-in duration-300 "
              }
              src={arrowImage}
              alt="arrowImage"
              width={24}
              height={13}
            />
          </div>
          <p
            className={
              accordian === 5
                ? "block text-[#B5B6C1] ff_raleway border-b border-[#4377F8] pb-4  font-normal text-base mr-5 md:mr-20 md:ml-10 mt-4 "
                : "hidden text-[#B5B6C1] ff_raleway border-b border-[#4377F8] pb-4  font-normal text-base mr-5 md:mr-20 md:ml-10 mt-4 "
            }
          >
            Lorem ipsum dolor sit amet consectetur. Mattis morbi leo amet lacus
            eu est euismod pulvinar. Condimentum{" "}
            <span className="md:block">
              metus tincidunt curabitur nulla eros imperdiet vel amet amet. Ac
              lacus dolor rutrum in erat lobortis rhoncus
            </span>{" "}
            volutpat arcu.
          </p>
        </div>
        {/* 6th */}
        <div>
          <div
            onClick={() => setAccordian(6)}
            className="flex items-center cursor-pointer justify-between mt-7"
          >
            <h2 className="  text-[#E6E6EA] text-xl md:text-2xl ff_raleway font-medium">
              Q6. What is the current price of cryptocurrency?
            </h2>
            <img
              className={
                accordian === 6
                  ? " rotate-0 ease-in duration-300 "
                  : " rotate-180 ease-in duration-300 "
              }
              src={arrowImage}
              alt="arrowImage"
              width={24}
              height={13}
            />
          </div>
          <p
            className={
              accordian === 6
                ? "block text-[#B5B6C1] ff_raleway border-b border-[#4377F8] pb-4  font-normal text-base mr-5 md:mr-20 md:ml-10 mt-4 "
                : "hidden text-[#B5B6C1] ff_raleway border-b border-[#4377F8] pb-4  font-normal text-base mr-5 md:mr-20 md:ml-10 mt-4 "
            }
          >
            Lorem ipsum dolor sit amet consectetur. Mattis morbi leo amet lacus
            eu est euismod pulvinar. Condimentum{" "}
            <span className="md:block">
              metus tincidunt curabitur nulla eros imperdiet vel amet amet. Ac
              lacus dolor rutrum in erat lobortis rhoncus
            </span>{" "}
            volutpat arcu.
          </p>
        </div>
        {/* 7th */}
        <div>
          <div
            onClick={() => setAccordian(7)}
            className="flex items-center cursor-pointer justify-between mt-7"
          >
            <h2 className="  text-[#E6E6EA] text-xl md:text-2xl ff_raleway font-medium">
              Q7. Can I mine cryptocurrency?
            </h2>
            <img
              className={
                accordian === 7
                  ? " rotate-0 ease-in duration-300 "
                  : " rotate-180 ease-in duration-300 "
              }
              src={arrowImage}
              alt="arrowImage"
              width={24}
              height={13}
            />
          </div>
          <p
            className={
              accordian === 7
                ? "block text-[#B5B6C1] ff_raleway border-b border-[#4377F8] pb-4  font-normal text-base mr-5 md:mr-20 md:ml-10 mt-4 "
                : "hidden text-[#B5B6C1] ff_raleway border-b border-[#4377F8] pb-4  font-normal text-base mr-5 md:mr-20 md:ml-10 mt-4 "
            }
          >
            Lorem ipsum dolor sit amet consectetur. Mattis morbi leo amet lacus
            eu est euismod pulvinar. Condimentum{" "}
            <span className="md:block">
              metus tincidunt curabitur nulla eros imperdiet vel amet amet. Ac
              lacus dolor rutrum in erat lobortis rhoncus
            </span>{" "}
            volutpat arcu.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Frequently;
