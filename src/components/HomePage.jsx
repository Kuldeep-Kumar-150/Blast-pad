import React from "react";
import MyNav from "./MyNav";
import Header from "./Header";
import BlockChain from "./BlockChain";
import RoadMap from "./RoadMap";
import Frequently from "./Frequently";
import MyFooter from "./MyFooter";
const HomePage = () => {
  return (
    <div>
      <div class="overflow-hidden">
        <div className="header_bg_img xl:flex xl:flex-col xl:min-h-[100vh]">
          <MyNav />
          <Header />
        </div>
        <BlockChain />
        <RoadMap />
        <Frequently />
        <MyFooter />
      </div>
    </div>
  );
};

export default HomePage;
