import React, { useState } from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const TopMenuBar = () => {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  // for handling the scroll effect
  const handleScrollto = (section) => {
    const targetedelement = document.getElementById(section);
    if (targetedelement) {
      targetedelement.scrollIntoView({ behavior: "smooth", block: "start" });
      console.log("scrolling to", section);
    }
    setActiveSection(section);
    if (isHamburgerOpen) {
      setIsHamburgerOpen(false);
    }
  };
  // Track the active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "features", "testimonial"];
      let currentSection = "home";

      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = section;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // for handling the hamburger toggle
  const handleHamburger = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
    console.log(isHamburgerOpen);
  };
  return (
    <>
      <nav class="relative px-4 py-4 flex justify-between items-center bg-white">
        <a class="" href="#">
          <div className="text-xl tracking-widest text-primaryfontcolor">
            TRACKPROGRESS
          </div>
          <div className="text-center font-bold tracking-widest text-orange-400 text-sm">
            DREAM BIG
          </div>
        </a>
        <div class="lg:hidden">
          <button
            class="navbar-burger flex items-center text-primaryfontcolor p-3"
            onClick={handleHamburger}
          >
            <svg
              class="block h-4 w-4 fill-current"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Mobile menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>
        <ul class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto  lg:items-center lg:w-auto lg:space-x-6">
          <li onClick={() => handleScrollto("home")}>
            <a
              className={`text-sm text-black  hover:text-primaryfontcolor hover:font-bold hover:scale-150 ease-in-out duration-150 
              ${
                activeSection === "home"
                  ? "text-primaryfontcolor font-bold text-xl tracking-widest scale-y-110"
                  : "text-gray-300"
              }`}
              href="#"
            >
              Home
            </a>
          </li>
          <li class="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              class="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li onClick={() => handleScrollto("features")}>
            <a
              className={`text-sm text-black  hover:text-primaryfontcolor hover:font-bold hover:scale-150 ease-in-out duration-150 
              ${
                activeSection === "features"
                  ? "text-primaryfontcolor font-bold text-xl tracking-widest scale-y-110"
                  : "text-gray-300"
              }`}
              href="#"
            >
              Features
            </a>
          </li>
          <li class="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              class="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li onClick={() => handleScrollto("testimonial")}>
            <a
              className={`text-sm text-black  hover:text-primaryfontcolor hover:font-bold hover:scale-150 ease-in-out duration-150 
              ${
                activeSection === "testimonial"
                  ? "text-primaryfontcolor font-bold text-xl tracking-widest scale-y-110"
                  : "text-gray-300"
              }`}
              href="#"
            >
              Testimonial
            </a>
          </li>
        </ul>
        <a
          class="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-orange-400 hover:text-white text-sm text-gray-900 font-bold  rounded-xl transition duration-200"
          href="#"
        >
          Sign In
        </a>
        <a
          class="hidden lg:inline-block py-2 px-6 bg-primaryfontcolor hover:bg-black text-sm text-white font-bold rounded-xl transition duration-200"
          href="#"
        >
          Sign up
        </a>
      </nav>
      {/* Mobile Menu togglebar option */}
      <div className={`${isHamburgerOpen ? "block" : "hidden"}`}>
        <div class="navbar-menu relative z-50">
          <div class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>

          <nav class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
            <div class="flex items-center mb-8">
              <button class="navbar-close" onClick={handleHamburger}>
                <svg
                  class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <div>
              <ul>
                <li class="mb-1" onClick={() => handleScrollto("home")}>
                  <a
                    class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                    href="#"
                  >
                    Home
                  </a>
                </li>
                <li class="mb-1">
                  <a
                    class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                    href="#"
                  >
                    Features
                  </a>
                </li>
                <li class="mb-1">
                  <a
                    class="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded"
                    href="#"
                  >
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>
            <div class="mt-auto">
              <div class="pt-6">
                <a
                  class="block px-4 py-3 mb-3 cursor-pointer text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl"
                  href="#"
                >
                  Sign in
                </a>
                <a
                  class="block px-4 py-3 mb-2  cursor-pointer leading-loose text-xs text-center text-white font-semibold bg-gradientcolor hover:bg-black  rounded-xl"
                  href="#"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default TopMenuBar;
