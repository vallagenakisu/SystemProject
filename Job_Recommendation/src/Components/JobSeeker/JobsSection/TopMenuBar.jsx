import React, { useState } from "react";

const TopMenuBar = () => {

  const [isSideBarOpen,setIsSideBarOpen] = useState(false);

  return (
    <div>
      
      <div className="px-4 py-2 flex justify-between items-center fixed z-50 shadow-md bg-primary text-secondary w-full">
        {/* Logo Section */}
        <div className="text-xl md:text-2xl font-bold">
          <a href="/signup">JobSeeker</a>
        </div>

        {/* Navigation Links - Small on mobile, larger on desktop */}
        <nav className="flex space-x-4 md:space-x-8 text-sm md:text-base">
          <a href="#home" className="hover:text-highlight">
            Home
          </a>
          <a href="#jobs" className="hover:text-highlight">
            Jobs
          </a>
          <a href="#dashboard" className="hover:text-highlight">
            Dashboard
          </a>
          <a href="#profile" className="hover:text-highlight">
            Profile
          </a>
        </nav>

        {/* Right Section - Profile Avatar */}
        <div className="flex items-center space-x-3 md:space-x-4">
          <div className="relative">
            <img
              src="https://via.placeholder.com/40"
              alt="User Avatar"
              className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white"
            />
            <span className="absolute bottom-0 right-0 block w-2 h-2 md:w-3 md:h-3 bg-green-500 rounded-full border-2 border-blue-800"></span>
          </div>
        </div>
      </div>
    
    </div>
  );
};

export default TopMenuBar;
