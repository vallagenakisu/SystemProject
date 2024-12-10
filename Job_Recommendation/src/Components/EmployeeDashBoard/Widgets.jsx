import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight } from "@fortawesome/free-solid-svg-icons";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const Widgets = () => {
  const [events, setEvents] = useState([
    { title: "Meeting", start: new Date().toISOString(), allDay: true },
  ]);
  return (
    <div className="w-full h-full overflow-hidden ml-12 my-4 px-8 py-8 rounded-lg bg-sidebarbgcolor ">
      <div className="flex flex-col">
        {/* Heading Section of Widgtes */}
        <div className="font-semibold tracking-widest text-xl flex flex-col">
          <div>WIDGETS</div>
          <span className="font-extralight tracking-normal text-sm text-primaryfontcolor mt-2">
            Plan,Prioritize and Find your tasks in one go.
          </span>
        </div>

        {/* Tasks Section of Widgets */}
        <div className="mt-7 grid grid-cols-4 gap-10 text-white">
          <div className="bg-black border-primaryfontcolor p-4 rounded-xl shadow-xl transform transition-all duration-300 hover:bg-gradientcolor hover:scale-105 hover:shadow-2xl hover:shadow-black">
            <div className="flex flex-row justify-center items-center gap-16">
              <div className="font-extralight text-sm tracking-widest flex flex-row">
                Total Projects
              </div>
              <FontAwesomeIcon icon={faCircleRight} className="text-2xl" />
            </div>
            <div className="my-4">
              <span className="font-extralight text-6xl">10</span>
            </div>
          </div>

          <div className="bg-black border-primaryfontcolor p-4 rounded-xl shadow-xl transform transition-all duration-300 hover:bg-gradientcolor hover:scale-105 hover:shadow-2xl hover:shadow-black">
            <div className="flex flex-row justify-center items-center gap-16">
              <div className="font-extralight text-sm tracking-widest flex flex-row">
                Total Projects
              </div>
              <FontAwesomeIcon icon={faCircleRight} className="text-2xl" />
            </div>
            <div className="my-4">
              <span className="font-extralight text-6xl">10</span>
            </div>
          </div>
          <div className="bg-black border-primaryfontcolor p-4 rounded-xl shadow-xl transform transition-all duration-300 hover:bg-gradientcolor hover:scale-105 hover:shadow-2xl hover:shadow-black">
            <div className="flex flex-row justify-center items-center gap-16">
              <div className="font-extralight text-sm tracking-widest flex flex-row">
                Total Projects
              </div>
              <FontAwesomeIcon icon={faCircleRight} className="text-2xl" />
            </div>
            <div className="my-4">
              <span className="font-extralight text-6xl">10</span>
            </div>
          </div>
          <div className="bg-black border-primaryfontcolor p-4 rounded-xl shadow-xl transform transition-all duration-300 hover:bg-gradientcolor hover:scale-105 hover:shadow-2xl hover:shadow-black">
            <div className="flex flex-row justify-center items-center gap-16">
              <div className="font-extralight text-sm tracking-widest flex flex-row">
                Total Projects
              </div>
              <FontAwesomeIcon icon={faCircleRight} className="text-2xl" />
            </div>
            <div className="my-4">
              <span className="font-extralight text-6xl">10</span>
            </div>
          </div>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-10">
          {/* To Do List of Widgets */}
          <div className="bg-sidebarbgcolor w-3/4  rounded-xl ">
            {/* Header Section of To do list */}
            <div className="flex flex-row justify-start items-center gap-4">
              <FontAwesomeIcon
                icon={faListCheck}
                className="text-xl font-extrabold"
              />
              <div className="font-extralight tracking-widest text-sm text-primaryfontcolor">
                MY TASKLIST
              </div>
            </div>
            {/* To Do card */}
            <div className="bg-white mt-4 px-4 py-4 rounded-lg ">
              <div className="flex justify-between items-center gap-5">
                <div className="border-primaryfontcolor flex-grow">
                  <input
                    type="text"
                    placeholder="Add your task..."
                    className=" w-full h-12 rounded-lg border border-primaryfontcolor  text-center tracking-widest focus:outline-none focus:ring-2 focus:ring-primaryfontcolor"
                  />
                </div>
                <div className="border p-2 rounded-full flex justify-center items-center group hover:bg-gradientcolor transition-all duration-300 transform group-hover:scale-110 group-hover:shadow-lg cursor-pointer">
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="text-primaryfontcolor font-bold group-hover:text-white transition-colors duration-300"
                  />
                </div>
              </div>
              <div className="mt-4">
                asdasdasdasd
              </div>
            </div>

            {/* Task List */}
          </div>

          {/* Active Connected Users */}
          <div>ACTIVE CONNECTED USERS</div>
        </div>
      </div>
    </div>
  );
};

export default Widgets;
