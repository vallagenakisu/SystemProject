import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const TopMenuBar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const handleMenuClick = (menu) => {
    setActiveMenu((prevMenu) => (prevMenu === menu ? null : menu)); // Toggle the menu
  };

  

  return (
    <div>
      <header className="bg-secondarybgcolor shadow-md relative">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <span className="med:text-2xl font-bold text-primarytextcolor small:text-lg">
            JOBSEEKER
          </span>

          {/* Hamburger Icon for Mobiles */}

          {/* Navigation Links */}
          <nav
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } med:flex space-x-8 text-primarytextcolor absolute med:relative top-full left-0 w-full bg-secondarybgcolor med:bg-transparent med:top-auto med:w-auto z-10`}
          >
            <a
              href="#"
              className="block med:inline-block px-3 py-2 hover:text-black"
              onClick={() => handleMenuClick("findWork")}
            >
              Find Work
            </a>

            <a
              href="#"
              className="block med:inline-block px-3 py-2 hover:text-black"
              onClick={() => handleMenuClick("findTalent")}
            >
              Find Talent
            </a>
          </nav>

          {/* Right Actions */}
          <div className="hidden med:flex items-center space-x-8">
            <button className="text-lg text-black hover:text-green-600">
              Log in
            </button>
            <Link to="/signUp">
              <button className="bg-primarybgcolor text-white px-4 py-2 rounded hover:bg-green-600">
                Sign up
              </button> 
            </Link>
          </div>
        </div>

        {/* Popup Menu */}
        {activeMenu && (
          <div className="absolute top-full left-0 bg-primarybgcolor shadow-lg w-full">
            <div className="container mx-auto px-6 py-6">
              {activeMenu === "findTalent" && <p>Find Talent Content Here</p>}
              {activeMenu === "findWork" && <p>Find Work Content Here</p>}
            </div>
          </div>
        )}
      </header>
    </div>
  );
};

export default TopMenuBar;
