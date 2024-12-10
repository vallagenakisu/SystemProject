import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight } from "@fortawesome/free-solid-svg-icons";

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

       
        <div className="mt-14 grid grid-cols-2">
           {/* To Do List of Widgets */}
           <div>
            TO DO LIST SECTION
           </div>

           {/* Active Connected Users */}
           <div>
            ACTIVE CONNECTED USERS
           </div>
        </div>
        
      </div>
    </div>
  );
};

export default Widgets;
