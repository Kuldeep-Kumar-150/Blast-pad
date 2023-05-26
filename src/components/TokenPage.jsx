import React from "react";
import RecentTokens from "./RecentTokens";
import MyNav from "./MyNav";
import CreateToken from "./CreateToken";
import MyFooter from "./MyFooter";
const TokenPage = () => {
  return (
    <>
      <div className="overflow-hidden">
        <div className="create_token_bg_img flex flex-col xl:min-h-[65vh]">
          <MyNav />
          <RecentTokens />
        </div>
        <CreateToken />
        <MyFooter />
      </div>
    </>
  );
};

export default TokenPage;
