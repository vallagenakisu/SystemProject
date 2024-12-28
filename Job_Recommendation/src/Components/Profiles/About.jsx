import React from "react";

const About = () => {
  return (
    <div className="mx-10 flex flex-col justify-center items-center gap-10">
      {/* Image Container */}
      <div>
        <img
          src="https://via.placeholder.com/150" // Replace with your image source
          alt="User Profile"
          className="rounded-full sm:w-48 sm:h-48 w-16 h-16 object-cover shadow-lg"
        />
      </div>
      {/* USER NAME CONTAINER */}
      <div className="items-center">
        <span className="text-center text-2xl tracking-widest text-orange-600 font-bold">NAVEED LIHAZI</span>
      </div>
      {/* USER EXPERTISE CONTAINER */}
      <div className="items-center">
        <span className="text-center text-4xl tracking-widest text-primaryfontcolor font-thin">
         "BACKEND DEVELOPER"
        </span>
      </div>
      

    </div>
  );
};

export default About;
