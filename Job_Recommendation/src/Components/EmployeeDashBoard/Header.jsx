import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 ml-16">
      <div className="flex items-center space-x-2 w-1/2">
        <input
          type="text"
          placeholder="Search..."
          className="bg-indigo-100/30 px-4 py-2 rounded-lg focus:outline-0 focus:ring-2 focus:ring-indigo-600 w-1/2"
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} className="cursor-pointer hover:text-indigo-600"/>
      </div>
    </div>
  );
};

export default Header;
