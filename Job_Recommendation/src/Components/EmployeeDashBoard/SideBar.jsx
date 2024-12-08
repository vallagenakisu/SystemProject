import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faBell,
  faListUl,
  faCalendar,
  faGlobe,
  faChartLine,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const SideBar = () => {
  const [activeLink, setActiveLink] = useState(0);
  const handleActiveLinkk = (index) => {
    setActiveLink(index);
  };

  const SIDEBAR_LINKS = [
    { id: 1, icon: faBriefcase, name: "Profile", path: "dashprofile" },
    {
      id: 2,
      icon: faBell,
      name: "Messages",
      path: "dashnotifications",
    },
    {
      id: 3,
      icon: faListUl,
      name: "Jobs",
      path: "dashjobs",
    },
    {
      id: 4,
      icon: faCalendar,
      name: "Schedule",
      path: "dashschedule",
    },
    {
      id: 5,
      icon: faGlobe,
      name: "Connections",
      path: "dashconnections",
    },
    {
      id: 6,
      icon: faChartLine,
      name: "Analytics",
      path: "dashanalytics",
    },
  ];

  return (
    <div className="w-16 med:w-56 fixed left-0 top-0 z-10 h-screen border-r pt-8 px-10 bg-white">
      {/* // Sidebar Header */}
      <div className="w-28 hidden text-lg med:flex">Dashboard</div>
      {/* // Navigation Links */}
      <ul className="mt-10 space-y-6">
        {SIDEBAR_LINKS.map((link, index) => (
          <li
          key={index}
          className={`w-full font-medium rounded-md py-2 px-5 hover:bg-gray-100 hover:text-indigo-500 ${
            activeLink === index ? "bg-gray-100 text-indigo-500" : ""
          }`}
        >
            <Link
              to={link.path}
              className={"flex items-center med:space-x-8 med:justify-start"}
              onClick={()=>handleActiveLinkk(index)}
            >
              <FontAwesomeIcon icon={link.icon} />
              <span className="text-sm text-gray-500 hidden med:flex">
                {link.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SideBar;
