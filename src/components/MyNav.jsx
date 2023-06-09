import React, { useEffect, useState } from "react";
import navRocket from "../assets/img/svg/nav-rocket.svg";
import walletImg from "../assets/img/svg/wallet_img.svg";
import { Link } from "react-router-dom";
import crossImg from '../assets/img/svg/cross-svgrepo-com.svg'
const MyNav = () => {
  const [nav, setNav] = useState(false);
  const [modal, setModal] = useState(false);
  const [navLinks, setNavLinks] = useState(1);
  useEffect(() => {
    if (nav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [nav]);

  // FORM SUBMISION//
  const initialvalue = {
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  }
  const [formValue, setformValue] = useState(initialvalue);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setformValue({ ...formValue, [name]: value });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    console.log(formValue)
    setformValue(initialvalue)
  }

  return (
    <section>
      <div className="container mx-auto px-3">
        <div className="py-3 md:py-5 lg:py-7 flex items-center justify-between">
          <Link to={"/"}>
            <div className="flex items-center cursor-pointer">
              <img height={35} width={35} src={navRocket} alt="navRocket" />
              <a
                className="text-white pl-[10px] ff_inter text-xl md:text-2xl font-medium"
                href="#"
              >
                BlastPad.io
              </a>
            </div>
          </Link>
          <ul
            className={
              nav == true
                ? "text-white gap-[20px] bg_blue_linear xl:hidden rounded fixed flex flex-col ease-in-out duration-700 z-50 items-center justify-center top-0 left-0 w-full h-[100vh]"
                : "bg_blue_linear text-white gap-[20px] xl:hidden rounded fixed flex flex-col ease-in-out duration-700 left-[-100%] w-[50%] h-0 z-50 items-center justify-center top-[-50%]"
            }>
            <img onClick={() => setNav(false)} className="absolute top-5 right-5" src={crossImg} alt="crossImg" />
            <li onClick={() => setNav(false)}>
              <Link onClick={() => setNavLinks(1)} to={"/"}>
                <a
                  className={
                    navLinks === 1
                      ? " text-[14px] font-medium ff_raleway ease-in duration-300 hover:text-white navStroke"
                      : "text-[14px] font-medium ff_raleway ease-in duration-300 hover:text-white text-[#B1B2BE]"
                  }
                  href="/"
                >
                  Home
                </a>
              </Link>
            </li>
            <li onClick={() => setNav(false)}>
              <a
                className="text-[14px] font-medium ff_raleway ease-in duration-300 hover:text-white text-[#B1B2BE]"
                href="#"
              >
                About Us
              </a>
            </li>
            <li onClick={() => setNav(false)}>
              <Link onClick={() => setNavLinks(2)} to={"/airdrop"}>
                <a
                  className={
                    navLinks === 2
                      ? "text-[14px] font-medium ff_raleway ease-in duration-300 hover:text-white navStroke"
                      : "text-[14px] font-medium ff_raleway ease-in duration-300 hover:text-white text-[#B1B2BE]"
                  }
                  href="#"
                >
                  Token AirDrop
                </a>
              </Link>
            </li>
            <li onClick={() => setNav(false)}>
              <Link onClick={() => setNavLinks(3)} to={"/tokenStacking"}>
                <a
                  className={
                    navLinks === 3
                      ? "text-[14px] font-medium ff_raleway ease-in duration-300 hover:text-white navStroke"
                      : "text-[14px] font-medium ff_raleway ease-in duration-300 hover:text-white text-[#B1B2BE]"
                  }
                  href="#"
                >
                  Token Staking
                </a>
              </Link>
            </li>
            <li onClick={() => setNav(false)}>
              <Link onClick={() => setNavLinks(4)} to={"/createtoken"}>
                <a
                  className={
                    navLinks === 4
                      ? "text-[14px] font-medium ff_raleway ease-in duration-300 hover:text-white navStroke"
                      : "text-[14px] font-medium ff_raleway ease-in duration-300 hover:text-white text-[#B1B2BE]"
                  }
                  href="#"
                >
                  Create a Token
                </a>
              </Link>
            </li>
            <li
              onClick={() => setModal(true)}
              onClickCapture={() => setNav(false)}
            >
              <button className="text-white text-lg font-semibold ff_raleway px-[20px] py-[13px] bg-[#071436] rounded-full border border-[#3A486C] md:hidden">
                Get into Touch
              </button>
            </li>
            <li
              onClick={() => setNav(false)}
              className="flex items-center px-[20px] py-[13px] cursor-pointer rounded-full bg_blue_linear md:hidden"
            >
              <img src={walletImg} alt="walletImg" />
              <button className="text-white text-lg font-semibold ff_raleway ml-[10px]">
                Connect Wallet
              </button>
            </li>
          </ul>
          <ul className="text-white gap-[20px] hidden xl:flex">
            <Link to={"/"}>
              <li>
                <a
                  onClick={() => setNavLinks(1)}
                  className={
                    navLinks === 1
                      ? "text-[14px] font-medium ff_raleway ease-in duration-300 hover:text-white navStroke"
                      : "text-[14px] font-medium ff_raleway ease-in duration-300 hover:text-white text-[#B1B2BE]"
                  }
                  href="/"
                >
                  Home
                </a>
              </li>
            </Link>
            <li>
              <a
                className="text-[14px] font-medium ff_raleway ease-in duration-300 hover:text-white text-[#B1B2BE]"
                href="#"
              >
                About Us
              </a>
            </li>
            <li>
              <Link to={"/airdrop"}>
                <a
                  onClick={() => setNavLinks(2)}
                  className={
                    navLinks === 2
                      ? "text-[14px] font-medium ff_raleway ease-in duration-300 hover:text-white navStroke"
                      : "text-[14px] font-medium ff_raleway ease-in duration-300 hover:text-white text-[#B1B2BE]"
                  }
                  href="#"
                >
                  Token AirDrop
                </a>
              </Link>
            </li>
            <li>
              <Link to={"/tokenStacking"}>
                <a
                  onClick={() => setNavLinks(3)}
                  className={
                    navLinks === 3
                      ? "text-[14px] font-medium ff_raleway ease-in duration-300 hover:text-white navStroke"
                      : "text-[14px] font-medium ff_raleway ease-in duration-300 hover:text-white text-[#B1B2BE]"
                  }
                  href="#"
                >
                  Token Staking
                </a>
              </Link>
            </li>
            <li>
              <Link to={"/createtoken"}>
                <a
                  onClick={() => setNavLinks(4)}
                  className={
                    navLinks === 4
                      ? "text-[14px] font-medium ff_raleway ease-in duration-300 hover:text-white navStroke"
                      : "text-[14px] font-medium ff_raleway ease-in duration-300 hover:text-white text-[#B1B2BE]"
                  }
                  href="#"
                >
                  Create a Token
                </a>
              </Link>
            </li>
          </ul>
          <div className="flex items-center">
            <div className="flex items-center">
              <button
                onClick={() => setModal(true)}
                className="text-white hover:bg-blue-800 hover:border-blue-800 ease-out duration-300 hidden md:flex text-lg font-semibold ff_raleway px-[20px] py-[13px] bg-[#071436] rounded-full border border-[#3A486C] mr-5"
              >
                Get into Touch
              </button>
              <div className="items-center connect_wallet_btn bg_blue_linear hidden md:flex px-[20px] py-[13px] cursor-pointer rounded-full ">
                <img src={walletImg} alt="walletImg" />
                <button className="text-white text-lg font-semibold ff_raleway ml-[10px]">
                  Connect Wallet
                </button>
              </div>
            </div>
            <div onClick={() => setNav(true)} className="flex flex-col gap-1 cursor-pointer ml-4 xl:hidden">
              <span className="h-[3px] w-[25px] bg-white"></span>
              <span className="h-[3px] w-[25px] bg-white"></span>
              <span className="h-[3px] w-[25px] bg-white"></span>
            </div>
          </div >
        </div >

        <div
          className={
            modal === true
              ? "fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50 scale-[100%] ease-in-out duration-700 lg:w-[882px] w-[90%]"
              : "lg:w-[882px] w-[90%] ease-in-out duration-700 scale-0 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-50"
          }
        >
          <div className="z-40 border-[1.2px] border-[#576076] bg-[#0B0A26]  lg:bg-[#464C5A] relative rounded-2xl min-h-[200px] mx-auto p-3 pt-5 md:pt-10 md:px-[27px] lg:pb-[29px]">
            <h5 className="text-[40px] font-bold text-white ff_raleway text-center z-40">
              Get in Touch
            </h5>
            <p className="text-base font-normal ff_raleway text-[#C2C6D1] text-center z-40">
              We Are Here For You! How Can We Help?
            </p>
            <form className="text-center" onSubmit={formSubmit}>
              <div className="md:flex gap-6 mt-8">
                <input onChange={handleInputChange} value={formValue.firstname} name="firstname"
                  className="outline-0 w-full py-4 md:py-[23px] px-4 rounded-[10px] border border-[#4D5B7E] bg-[#3C518B] text-base font-normal text-white ff_raleway"
                  type="text"
                  placeholder="First name"
                />
                <input onChange={handleInputChange} value={formValue.lastname} name="lastname"
                  className="outline-0 w-full py-4 md:py-[23px] mt-[20px] md:mt-0 px-4 rounded-[10px] border border-[#4D5B7E] bg-[#3C518B] text-base font-normal text-white ff_raleway"
                  type="text"
                  placeholder="Last name"
                />
              </div>
              <input onChange={handleInputChange} value={formValue.email} name="email"
                className="outline-0 my-[20px] w-full py-4 md:py-[23px] px-4 rounded-[10px] border border-[#4D5B7E] bg-[#3C518B] text-base font-normal text-white ff_raleway"
                type="email"
                placeholder="Email"
              />
              <textarea onChange={handleInputChange} value={formValue.message} name="message"
                className="w-full hide_scroll_bar min-h-[131px] py-4 md:py-[23px] px-4 rounded-[10px] border border-[#4D5B7E] bg-[#3C518B] text-base font-normal text-white ff_raleway outline-0 resize-none"
                placeholder="Message"
              >
              </textarea>
              <button onClick={() => setModal(false)} className="py-4 mt-7 px-[37px] bg_blue_linear text-lg font-semibold text-white ff_raleway inline-block rounded-full" type="submit">Contact us</button>
            </form>
            <div className="bg-[#4377F8] hidden lg:flex w-80 h-28 opacity-80 blur-[141px] absolute top-[-20px] left-[-20px]"></div>
            <div className="bg-[#4377F8] hidden lg:flex w-80 h-28 opacity-80 blur-[141px] absolute top-0 left-[50%] -z-10"></div>
            <div className="bg-[#4377F8] hidden lg:flex w-80 h-28 opacity-80 blur-[141px] absolute top-0 right-0 -z-10"></div>
            <div className="bg-[#4377F8] hidden lg:flex w-[469px] h-28 opacity-80 blur-[141px] absolute top-[150px] left-10 -z-10"></div>
            <div className="bg-[#4377F8] hidden lg:flex w-[324px] h-28 opacity-80 blur-[141px] absolute bottom-0 left-0 -z-10"></div>
            <div className="bg-[#4377F8] hidden lg:flex w-[324px] h-28 opacity-80 blur-[141px] absolute bottom-0 right-0 -z-10"></div>
          </div>
        </div>
      </div >
    </section >
  );
};

export default MyNav;
