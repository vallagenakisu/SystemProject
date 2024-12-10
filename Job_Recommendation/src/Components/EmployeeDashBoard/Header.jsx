import React from "react";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Header = () => {
  
  

  return (
    <div className="w-full h-16 py-8 overflow-hidden mx-12 my-4 bg-sidebarbgcolor rounded-lg flex flex-row gap-96 justify-center items-center">
      {/* Search Bar */}
      <div className="cursor-pointer">
        <input
          type="text"
          placeholder="Search..."
          className="w-80 h-10 mx-6 my-3 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-primaryfontcolor"
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="text-primaryfontcolor"
        />
      </div>
      {/* Profile Avatar */}
      <div className="gap-16 flex flex-row justify-center items-center">
        <div className="justify-center items-center">
          <h1 className="text-primaryfontcolor font-semibold text-lg text-center">
             User
          </h1>
          <p className="text-primaryfontcolor font-light text-sm text-center">
            User's Role
          </p>
        </div>
        <div className="">
          {/* Users image placeholder */}
          <img
            src="https://via.placeholder.com/150"
            alt="User"
            className="rounded-full h-12 w-12"
          />
          
        </div>
      </div>
      
    </div>
  );
};

export default Header;
