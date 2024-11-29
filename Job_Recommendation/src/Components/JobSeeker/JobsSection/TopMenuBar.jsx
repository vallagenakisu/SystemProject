import React, { useState } from "react";

const TopMenuBar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMouseEnter = (menu) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };

  return (
    <div>
      <header className="bg-secondarybgcolor shadow-md relative">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          {/* Logo */}
          <span className="text-2xl font-bold text-primarytextcolor">JOBSEEKER</span>

          {/* Navigation Links */}
          <nav
            className="flex space-x-8 text-primarytextcolor relative"
            onMouseLeave={handleMouseLeave} // Close popup when mouse leaves nav
          >
            <a
              href="#"
              className="px-3 py-2 hover:text-black"
              onMouseEnter={() => handleMouseEnter("findTalent")}
            >
              Find Talent
            </a>

            <a
              href="#"
              className="px-3 py-2 hover:text-black"
              onMouseEnter={() => handleMouseEnter("findWork")}
            >
              Find Work
            </a>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-8">
            <button className="md:block text-lg text-black hover:text-green-600">
              Log in
            </button>
            <button className="bg-primarybgcolor text-white px-4 py-2 rounded hover:bg-green-600">
              Sign up
            </button>
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
