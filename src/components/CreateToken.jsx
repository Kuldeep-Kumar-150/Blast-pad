import React from "react";
import { useState } from "react";
const CreateToken = () => {
  const initialvalue = {
    name: "",
    password: "",
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
  {/*SUBMIT TYPE POPUP OTIFICATION*/ }
  function myFunction() {
    var x = document.getElementById("snackbar");
    x.className = "show";
    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
  }

  return (
    <div className="frequentlyBg py-16 md:py-28 lg:py-40">
      <div className="container mx-auto px-3">
        <h2 className="text-white text-center text-3xl md:text-4xl lg:text-[40px] font-bold ff_raleway">
          Create Token
        </h2>
        <div className="relative mt-10 border-[1.2px] border-[#3C3F60] rounded-[15px]  bg-[#0C0F31] py-5 md:py-[30px] px-4 md:px-11">
          <button className="py-[9px] px-10 ease-in-out duration-300 hover:scale-95 text-white font-bold ff_raleway text-lg bg-[#1C2F6F] rounded-[22px]">
            Step 2
          </button>
          <form onSubmit={formSubmit} autoComplete="off">
            <div className="mt-4 md:flex items-center gap-5">
              <div className="w-full">
                <label
                  htmlFor="login"
                  className="text-[#CFCFD6] text-base font-normal ff_raleway"
                >
                  Log ID
                </label>
                <br />
                <input value={formValue.name} name="name" onChange={handleInputChange}
                  className="mt-3 border-[1.2px] border-[#293058] bg-[#121A45] w-full text-[#B8BAC8] text-base font-normal ff_raleway py-[17px] px-4 outline-none rounded-[5px]"
                  placeholder="xyn@explaim.com"
                  type="text"
                  id="login"
                />
              </div>
              <div className="w-full mt-3 md:mt-0">
                <label
                  htmlFor="password"
                  className="text-[#CFCFD6] text-base font-normal ff_raleway"
                >
                  Password
                </label>
                <br />
                <input value={formValue.password} name="password" onChange={handleInputChange}
                  className="mt-3 border-[1.2px] border-[#293058] bg-[#121A45] w-full text-[#092E8B] py-[17px] px-4 outline-none rounded-[5px]"
                  placeholder=". . . . . . . . . "
                  type="password"
                  id="password"
                />
              </div>
            </div>
            <button onClick={() => myFunction()} type="submit" className="font-normal ease-in-out duration-300 hover:scale-95 text-base text-white py-3 px-7 ff_raleway mt-5 rounded-[32px] bg-gradient-to-r from-[#070380] to-[#4478F9]">
              Log in
            </button>
          </form>
          {/*SUBMIT TYPE POPUP OTIFICATION*/}
          <div id="snackbar">your form was successfully submitted</div>
        </div>
        <div className=" mt-10 border-[1.2px] border-[#3C3F60] rounded-[15px]  bg-[#0C0F31] py-5 md:py-[30px] px-4 md:px-11">
          <button className="py-[9px] px-10 ease-in-out duration-300 hover:scale-95 text-white font-bold ff_raleway text-lg bg-[#1C2F6F] rounded-[22px]">
            Step 2
          </button>
          <form className="mt-4 ">
            <div className="flex flex-col md:flex-row items-center gap-5">
              <div className="w-full">
                <label
                  htmlFor="issuer"
                  className="text-[#CFCFD6] text-base font-normal ff_raleway"
                >
                  Issuer
                </label>
                <br />
                <input
                  className="mt-[10px] border-[1.2px] border-[#293058] bg-[#121A45] w-full text-[#B7B9C8] text-base font-normal ff_raleway py-[17px] px-4 outline-none rounded-[5px]"
                  placeholder="testnettacy"
                  type="text"
                  id="issuer"
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="max"
                  className="text-[#CECFD7] text-base font-normal ff_raleway"
                >
                  Max Token Supply
                </label>
                <br />
                <input
                  className="mt-[10px] border-[1.2px] border-[#293058] bg-[#121A45] w-full text-[#B7B9C8] py-[17px] px-4 outline-none rounded-[5px]"
                  placeholder="e.g. 50.0000"
                  type="text"
                  id="max"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-5 mt-8">
              <div className="w-full">
                <label
                  htmlFor="token"
                  className="text-[#CFCFD6] text-base font-normal ff_raleway"
                >
                  Token Symbol
                </label>
                <br />
                <input
                  className="mt-[10px] border-[1.2px] border-[#293058] bg-[#121A45] w-full text-[#B7B9C8] text-base font-normal ff_raleway py-[17px] px-4 outline-none rounded-[5px]"
                  placeholder="e.g. $XMD or $BTC"
                  type="text"
                  id="token"
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="maxname"
                  className="text-[#CECFD7] text-base font-normal ff_raleway"
                >
                  Token name
                </label>
                <br />
                <input
                  className="mt-[10px] border-[1.2px] border-[#293058] bg-[#121A45] w-full text-[#B7B9C8] py-[17px] px-4 outline-none rounded-[5px]"
                  placeholder="e.g Bitcoin,proton"
                  type="text"
                  id="maxname"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-5 mt-8">
              <div className="w-full">
                <label
                  htmlFor="precession"
                  className="text-[#CFCFD6] text-base font-normal ff_raleway"
                >
                  Precession
                </label>
                <br />
                <input
                  className="mt-[10px] border-[1.2px] border-[#293058] bg-[#121A45] w-full text-[#B7B9C8] text-base font-normal ff_raleway py-[17px] px-4 outline-none rounded-[5px]"
                  placeholder="www.Blastpad.com"
                  type="text"
                  id="precession"
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="url"
                  className="text-[#CECFD7] text-base font-normal ff_raleway"
                >
                  URL (your company website)
                </label>
                <br />
                <input
                  className="mt-[10px] border-[1.2px] border-[#293058] bg-[#121A45] w-full text-[#B7B9C8] py-[17px] px-4 outline-none rounded-[5px]"
                  placeholder="www.Blastpad.com"
                  type="text"
                  id="url"
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-5 mt-8">
              <div className="w-full">
                <label
                  htmlFor="descri"
                  className="text-[#CFCFD6] text-base font-normal ff_raleway"
                >
                  Description
                </label>
                <br />
                <input
                  className="mt-[10px] border-[1.2px] border-[#293058] bg-[#121A45] w-full text-[#B7B9C8] text-base font-normal ff_raleway py-[17px] px-4 outline-none rounded-[5px]"
                  placeholder="e.g. This is my company token"
                  type="text"
                  id="descri"
                />
              </div>
              <div className="w-full">
                <label
                  htmlFor="upload"
                  className="text-[#CECFD7] text-base font-normal ff_raleway"
                >
                  Upload logo
                </label>
                <br />
                <div className="flex items-center justify-between mt-[10px] border-[1.2px] border-[#293058] bg-[#121A45] w-full px-4 text-[#B7B9C8]  outline-none rounded-[5px]">
                  <input
                    placeholder="No file chosen"
                    className="  bg-[#121A45] w-1/3 text-[#B7B9C8]  py-[17px] outline-none rounded-[5px]"
                    type="text"
                    id="upload"
                  />
                  <button type="file" className="text-white text-base border border-[#172764]  rounded-[47px] py-1 px-5 font-semibold ff_raleway">
                    Chose file
                  </button>
                </div>
              
              </div>
            </div>
            <div className="mt-8 ">
              <div className=" md:w-1/2 md:pe-3">
                <label
                  htmlFor="ema"
                  className="text-[#CFCFD6] text-base font-normal ff_raleway"
                >
                  Email Address
                </label>
                <br />
                <input
                  className="mt-[10px] border-[1.2px] border-[#293058] bg-[#121A45] w-full text-[#B7B9C8] text-base font-normal ff_raleway py-[17px] px-4 outline-none rounded-[5px]"
                  placeholder="nickraja@example.com"
                  type="text"
                  id="ema"
                />
              </div>
            </div>
            <div className="mt-4">
              <input class="styled-checkbox" id="styled-checkbox-1" type="checkbox" value="value1" />
              <label for="styled-checkbox-1" className="text-white md:mt-0  text-base font-medium ff_raleway">A flat fee of 1XPR will be change for creating your token as a one time fee.</label>
            </div>
          </form>
          <button className="mt-9 py-3 px-5 md:py-4 md:px-9 bg-transparent ease-in-out duration-300 hover:bg-[#1C2F6F] hover:border-[#1C2F6F] border-white border rounded-[32px] text-white text-sm md:text-lg font-semibold ff_raleway">
            Create Token
          </button>
        </div>
      </div>
    </div >
  );
};

export default CreateToken;
