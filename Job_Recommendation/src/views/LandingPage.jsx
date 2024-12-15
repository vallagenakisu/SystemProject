import React from "react";
import MainBody from "../Components/Landing_Page/MainBody";
import TopMenuBar from "../Components/Landing_Page/TopMenuBar";
import HomeSection from "../Components/Landing_Page/HomeSection";
const LandingPage = () => {
  return (
    <>
      <div>
        <TopMenuBar />
      </div>
      <div className="px-4 py-4">
        <HomeSection />
      </div>
    </>
  );
};

export default LandingPage;
