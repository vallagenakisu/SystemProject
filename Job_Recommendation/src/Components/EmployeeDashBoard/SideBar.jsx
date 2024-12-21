import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGears } from "@fortawesome/free-solid-svg-icons";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";
import axiosClient from "../../axios-client";

const SideBar = () => {
  const { user, token, setUser, setToken } = useStateContext();
  const onLogout = () => {
    // console.log("logout");
    axiosClient
      .post(
        "/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        setUser(null);
        setToken(null);
        localStorage.removeItem("token");
        window.location.href = "/Landing";
      })
      .catch((error) => {
        console.error(error.response?.data);
      });
  };
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
    // {
    //   title: "Logout",
    //   icon: faArrowRightFromBracket,
    //   link: "/Landing",
    // },
  ];

  const [activeMenu, setActiveMenu] = useState("Widgets");

  return (
    <>
      <div className="hidden md:block bg-sidebarbgcolor w-52 h-screen m-4 top-0 left-0 rounded-lg">
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
              <div
                className="flex items-center space-x-4 mt-4 py-4 cursor-pointer group"
                onClick={onLogout}
              >
                <FontAwesomeIcon
                  icon={faArrowRightFromBracket}
                  className="text-gray-500 group-hover:text-primaryfontcolor"
                />
                <span className="text-gray-500 group-hover:font-bold group-hover:text-black group-hover:tracking-widest transition-all ease-in-out duration-300 ">
                  LOGOUT
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* This menubar will show when the screen is smaller */}

      <div className="flex flex-col items-center md:hidden">
        <div className="border border-gray-300 py-3 flex gap-1 shadow-xl rounded-md">
          {SIDEBAR_MENU_ITEMS.map((item, index) => (
            <div
              key={index}
              className="group relative px-1 cursor-pointer"
              onClick={() => setActiveMenu(item.title)}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full hover:text-primaryfontcolor">
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <span className="absolute top-12 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
                {item.title}
              </span>
            </div>
          ))}

          <div
            className="group relative px-1 cursor-pointer"
            onClick={onLogout}
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full hover:text-primaryfontcolor">
              <FontAwesomeIcon icon={faArrowRightFromBracket} />
            </div>
            <span className="absolute top-12 left-[50%] -translate-x-[50%] z-20 origin-left scale-0 rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm font-medium shadow-md transition-all duration-300 ease-in-out group-hover:scale-100">
              Logout
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
