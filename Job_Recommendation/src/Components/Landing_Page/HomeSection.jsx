import React from "react";
import { Link } from "react-router-dom";

const HomeSection = () => {
  return (
    <div className="bg-black rounded-xl mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 text-white items-center py-8 gap-8">
        {/* Text Section */}
        <div className="px-4 sm:px-8 md:px-10 lg:px-20 my-5 md:my-10">
          <div className="text-2xl md:text-3xl lg:text-4xl tracking-wide md:tracking-widest">
            UNLEASH YOUR POTENTIAL
          </div>
          <div className="text-lg md:text-2xl lg:text-3xl tracking-wide md:tracking-widest py-3 md:py-5">
            Manage your project in one GO
          </div>
          <div className="mt-5 flex">
            <Link
              to="/signup"
              type="submit"
              className="flex items-center gap-2 shadow-xl text-lg text-black bg-gray-50 backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-gradientcolor hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
            >
              GET STARTED
              <svg
                className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
                viewBox="0 0 16 19"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                  className="fill-gray-800 group-hover:fill-gray-800"
                ></path>
              </svg>
            </Link>
          </div>
          <div className="flex mt-10 gap-10">
            <div className="animate-fadeIn">
              <h1 className="font-bold tracking-widest text-3xl text-white">
                4.8
              </h1>
              <p className="font-thin tracking-tight text-sm">
                Rating given by users
              </p>
            </div>
            <div className="animate-fadeIn">
              <h1 className="font-bold tracking-widest text-3xl text-white">
                100+
              </h1>
              <p className="font-thin tracking-tight text-sm">
                Projects Registered{" "}
              </p>
            </div>
          </div>
        </div>
        {/* Image Section */}
        <div className="flex justify-center items-center px-4">
          <img
            src="/Images/HomeSectionImage.jpg" // Replace this with your image URL
            alt="Descriptive Alt Text"
            className="w-full h-full max-w-md md:max-w-lg lg:max-w-xl object-cover rounded-lg animate-fadeIn"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
