import React from "react";
import MainBody from "../Components/Landing_Page/MainBody";
import TopMenuBar from "../Components/Landing_Page/TopMenuBar";
import HomeSection from "../Components/Landing_Page/HomeSection";
import FeatureSection from "../Components/Landing_Page/FeatureSection";
import TestimonialSection from "../Components/Landing_Page/TestimonialSection";
const LandingPage = () => {
  return (
    <>
      <div className="fixed w-full">
        <TopMenuBar />
      </div>
      <div className="px-4 py-4" id="home">
        <HomeSection />
      </div>
      <div className="px-4 py-4" id="features">
        <FeatureSection />
      </div>
      <div className="px-4 py-4" id="testimonial">
        <TestimonialSection />
      </div>
    </>
  );
};

export default LandingPage;
