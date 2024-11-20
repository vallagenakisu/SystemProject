// import { useState } from "react";
import React, { useState } from "react";

// import SideBarImage from
const SideBar = ({shortListedJobs}) => {
  const [isOpen, setIsOpen] = useState(true);
  const buttonclick = () => {
    // setIsOpen(!isOpen);
    console.log("Button Clicked");
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className={`bg-secondary text-black transition-all ease-in-out duration-500  ${
          isOpen ? "w-64 small:w-20 med:w-40 large:w-60 xl:w-80" : "w-20"
        }  rounded-2xl shadow-xl mt-1 mb-1 ml-1 fixed top-12 h-screen`}
      >
        {/* Header section of the sidebar menu */}
        <img
          src="../../../src/assets/images/sidebar.png"
          alt="Sidebar"
          className="w-8 h-8 mt-1 mb-1 ml-1 cursor-pointer"
          onClick={buttonclick}
        />
        {/* Divider */}
        <hr className="border-primary mt-4 mb-6" />

        {/* Sidebar Menu Items */}
        <nav
          className={`flex flex-col space-y-4 px-4 mt-10 transition-all ease-in-out duration-500 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          {shortListedJobs.map((job, index) => (
            <div key={index} className="text-black">
              <h1>{job}</h1>
            </div>
          ))}
          
          
          
        </nav>
      </div>
    </>
  );
};

export default SideBar;
