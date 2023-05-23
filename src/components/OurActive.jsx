import React from "react";
import { mydata } from "../components/js/SliderData";
const OurActive = () => {
  return (
    <div>
      <div className="container mx-auto px-3">
        <Slider {...settings} className="py-lg-3 justify-content-center">
          {mydata
            .map((fun) => {
              return (
                <div className=" w-4/12">

                </div>
              );
            })
            .slice(0, 4)}
        </Slider>
      </div>
    </div>
  );
};

export default OurActive;
