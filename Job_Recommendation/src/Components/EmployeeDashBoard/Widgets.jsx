import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight } from "@fortawesome/free-solid-svg-icons";
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
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

        <div className="mt-7 grid grid-cols-2 gap-10">
          {/* To Do List of Widgets */}
          <div className="bg-sidebarbgcolor w-3/4 h-40  rounded-xl ">
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
            <div className="bg-white mt-4 px-4 py-4 rounded-lg h-96 shadow-lg shadow-black border border-primaryfontcolor">
              <div className="flex justify-between items-center gap-5">
                <div className="border-primaryfontcolor flex-grow">
                  <input
                    type="text"
                    placeholder="Add your task..."
                    className="w-full h-12 rounded-lg border border-primaryfontcolor text-center tracking-widest focus:outline-none focus:ring-2 focus:ring-primaryfontcolor"
                  />
                </div>

                <div className="border p-2 rounded-full flex justify-center items-center group hover:bg-gradientcolor transition-all duration-300 transform group-hover:scale-110 group-hover:shadow-lg cursor-pointer">
                  <FontAwesomeIcon
                    icon={faPlus}
                    className="text-primaryfontcolor font-bold group-hover:text-white transition-colors duration-300"
                  />
                </div>
              </div>

              
              {/* Scrollable container for the task list */}
              <div className="mt-8 h-full overflow-y-auto pl-1 pr-2 ">
                <div className="flex flex-col gap-4">
                  {/* Task Item 1 */}
                  <div className="flex flex-row items-center gap-2">
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="text-xl font-bold cursor-pointer rounded-full p-2 transition-transform duration-700 ease-in-out hover:bg-gradientcolor hover:text-white hover:scale-110 hover:shadow-lg"
                      title="Complete Task"
                    />
                    <div className="tracking-widest flex-grow">
                      Design the UI of the Dashboard
                    </div>
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      title="Delete Task"
                      className="text-xl font-bold cursor-pointer rounded-full p-2 transition-transform duration-700 ease-in-out hover:bg-red-500 hover:text-white hover:scale-110 hover:shadow-lg"
                    />
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="text-xl font-bold cursor-pointer rounded-full p-2 transition-transform duration-700 ease-in-out hover:bg-gradientcolor hover:text-white hover:scale-110 hover:shadow-lg"
                      title="Complete Task"
                    />
                    <div className="tracking-widest flex-grow">
                      Design the UI of the Dashboard
                    </div>
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      title="Delete Task"
                      className="text-xl font-bold cursor-pointer rounded-full p-2 transition-transform duration-700 ease-in-out hover:bg-red-500 hover:text-white hover:scale-110 hover:shadow-lg"
                    />
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="text-xl font-bold cursor-pointer rounded-full p-2 transition-transform duration-700 ease-in-out hover:bg-gradientcolor hover:text-white hover:scale-110 hover:shadow-lg"
                      title="Complete Task"
                    />
                    <div className="tracking-widest flex-grow">
                      Design the UI of the Dashboard
                    </div>
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      title="Delete Task"
                      className="text-xl font-bold cursor-pointer rounded-full p-2 transition-transform duration-700 ease-in-out hover:bg-red-500 hover:text-white hover:scale-110 hover:shadow-lg"
                    />
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="text-xl font-bold cursor-pointer rounded-full p-2 transition-transform duration-700 ease-in-out hover:bg-gradientcolor hover:text-white hover:scale-110 hover:shadow-lg"
                      title="Complete Task"
                    />
                    <div className="tracking-widest flex-grow">
                      Design the UI of the Dashboard
                    </div>
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      title="Delete Task"
                      className="text-xl font-bold cursor-pointer rounded-full p-2 transition-transform duration-700 ease-in-out hover:bg-red-500 hover:text-white hover:scale-110 hover:shadow-lg"
                    />
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="text-xl font-bold cursor-pointer rounded-full p-2 transition-transform duration-700 ease-in-out hover:bg-gradientcolor hover:text-white hover:scale-110 hover:shadow-lg"
                      title="Complete Task"
                    />
                    <div className="tracking-widest flex-grow">
                      Design the UI of the Dashboard
                    </div>
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      title="Delete Task"
                      className="text-xl font-bold cursor-pointer rounded-full p-2 transition-transform duration-700 ease-in-out hover:bg-red-500 hover:text-white hover:scale-110 hover:shadow-lg"
                    />
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="text-xl font-bold cursor-pointer rounded-full p-2 transition-transform duration-700 ease-in-out hover:bg-gradientcolor hover:text-white hover:scale-110 hover:shadow-lg"
                      title="Complete Task"
                    />
                    <div className="tracking-widest flex-grow">
                      Design the UI of the Dashboard
                    </div>
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      title="Delete Task"
                      className="text-xl font-bold cursor-pointer rounded-full p-2 transition-transform duration-700 ease-in-out hover:bg-red-500 hover:text-white hover:scale-110 hover:shadow-lg"
                    />
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <FontAwesomeIcon
                      icon={faCircleCheck}
                      className="text-xl font-bold cursor-pointer rounded-full p-2 transition-transform duration-700 ease-in-out hover:bg-gradientcolor hover:text-white hover:scale-110 hover:shadow-lg"
                      title="Complete Task"
                    />
                    <div className="tracking-widest flex-grow">
                      Design the UI of the Dashboard
                    </div>
                    <FontAwesomeIcon
                      icon={faTrashCan}
                      title="Delete Task"
                      className="text-xl font-bold cursor-pointer rounded-full p-2 transition-transform duration-700 ease-in-out hover:bg-red-500 hover:text-white hover:scale-110 hover:shadow-lg"
                    />
                  </div>

                  {/* Additional Task Items */}
                </div>
              </div>
            </div>
          </div>

          {/* Active Connected Users */}
          <div>ACTIVE CONNECTED USERS</div>
        </div>
      </div>
    </div>
  );
};

export default Widgets;
