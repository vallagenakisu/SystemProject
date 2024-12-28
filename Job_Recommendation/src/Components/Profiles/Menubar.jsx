// src/components/Menubar.jsx
import React from "react";
import { NavLink } from "react-router-dom";

const Menubar = () => {
  const menuItems = [
    { label: "ABOUT", path: "about" },
    { label: "PROJECTS", path: "projects" },
    { label: "POSTS", path: "posts" },
  ];

  return (
    <div className="flex justify-center mt-4 sm:mt-6 md:mt-8">
      <div className="flex space-x-2 border-[3px] border-orange-300 p-1 rounded-xl select-none">
        {menuItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex flex-grow items-center justify-center rounded-lg p-2 sm:p-3 cursor-pointer 
               tracking-wider 
               text-black 
               transition 
               duration-150 
               ease-in-out 
               text-sm sm:text-base md:text-lg 
               ${
                 isActive
                   ? "bg-gradientcolor text-white"
                   : ""
               }`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Menubar;
