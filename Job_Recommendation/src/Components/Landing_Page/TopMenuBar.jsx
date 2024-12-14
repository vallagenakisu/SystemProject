import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const TopMenuBar = () => {
  return (
    <>
      <div className="py-5 px-16">
        <div className="flex flex-row flex-wrap justify-start items-center gap-96">
          {/* Logo */}
          <div className="w-full sm:w-auto text-center">
            <div className="font-medium tracking-widest text-2xl text-primaryfontcolor">TRACKPROGRESS</div>
            <div className="font-bold text-orange-500 text-center text-sm tracking-widest">
              DREAM BIG
            </div>
          </div>
          {/* Navbar Button */}
          <div className="hidden sm:block">NAVBAR</div>
          {/* Login SignUp Button */}
          <div className="hidden sm:block">LOGIN SIGNUP</div>
        </div>
      </div>
    </>
  );
};

export default TopMenuBar;
