import React from "react";
import Menubar from "./Menubar";
import About from "./About";
const Profiles = () => {
  return (
    <div className="flex flex-col items-center h-screen">
      {/* About Section Positioned One-Third Down */}
      <div className="md:mt-[10vh] mt-0">
        <About />
      </div>

      {/* Menubar Section Fixed at the Bottom */}
      <div className="mt-auto sm:mb-6 mb-0">
        <Menubar />
      </div>
    </div>
  );
};

export default Profiles;
