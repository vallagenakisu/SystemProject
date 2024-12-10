import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGears } from "@fortawesome/free-solid-svg-icons";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
const SideBar = () => {
  const SIDEBAR_MENU_ITEMS = [
    {
      title: "Widgets",
      icon: faGears,
      link: "widgets",
    },
    {
      title: "Tasks",
      icon: faListCheck,
      link: "tasks",
    },
    {
      title: "Calendar",
      icon: faCalendarDays,
      link: "calendar",
    },
    {
      title: "Connections",
      icon: faUserFriends,
      link: "connections",
    },
    {
      title: "Analytics",
      icon: faChartLine,
      link: "analytics",
    },
    {
      title: "Logout",
      icon: faArrowRightFromBracket,
      link: "logout",
    },
  ];

  const [activeMenu, setActiveMenu] = useState("Widgets");

  return (
    <div className="bg-sidebarbgcolor w-52 h-screen m-4 top-0 left-0 rounded-lg">
      <div className="flex flex-col px-4 ">
        {/* Welcome Message of Dashboard */}
        <div className="flex flex-col justify-center items-center mt-6 ">
          <span className="text-black font-extralight text-center">
            Welcome to
          </span>
          <h1 className="text-primaryfontcolor text-xl font-extrabold tracking-widest  text-center">
            Dashboard
          </h1>
        </div>

        {/* Menu of Sidebar */}
        <div className="mt-14 ">
          <span className="text-gray-500 font-extralight tracking-wide ml-4">
            Menu
          </span>
          <div className="ml-2">
            {SIDEBAR_MENU_ITEMS.map((item, index) => (
             <div
             key={index}
             className="flex items-center space-x-4 mt-4 py-4 cursor-pointer group"
             onClick={() => setActiveMenu(item.title)}
           >
             <FontAwesomeIcon
               icon={item.icon}
               className={`transition-colors duration-300 ${
                 activeMenu === item.title
                   ? "text-primaryfontcolor"
                   : "text-gray-500 group-hover:text-primaryfontcolor"
               }`}
             />
             <span
               className={`transition-all duration-300 ${
                 activeMenu === item.title
                   ? "text-primaryfontcolor font-bold"
                   : "text-gray-500 group-hover:font-bold group-hover:text-black group-hover:tracking-widest transform group-hover:scale-105"
               }`}
             >
              <Link to={item.link}>{item.title}</Link>
               
             </span>
           </div>
           
            
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
