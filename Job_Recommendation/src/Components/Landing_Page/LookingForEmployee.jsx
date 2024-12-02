import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const LookingForEmployee = () => {
  return (
    <>
      <h1 className="font-bold text-4xl">
        Looking for EMPLOYEES for your WORK?
      </h1>
      <div className="mt-8 grid grid-cols-3 gap-14">
        {/* Card 1 */}
        <div className="bg-white shadow-2xl rounded-xl p-8 flex flex-col justify-between">
          <h2 className="font-semibold text-3xl text-gray-800 mb-2">
            Java Developers
          </h2>
          <div className="flex items-center mb-2 mt-4">
            <span className="text-yellow-500 text-lg">&#9733;</span>
            <p className="ml-2 text-gray-600 text-lg">4.8 average rating</p>
          </div>
          <div className="flex justify-start  mt-4 gap-20">
            <p className="text-gray-600 text-lg">
              1000+ Experienced and Proven Employees{" "}
            </p>
            <div className="group text-green-500 text-2xl flex transform transition-transform duration-300 cursor-pointer">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="group-hover:translate-x-4 transform transition-all duration-300"
              />
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-2xl rounded-xl p-8 flex flex-col justify-between">
          <h2 className="font-semibold text-3xl text-gray-800 mb-2">
            Java Developers
          </h2>
          <div className="flex items-center mb-2 mt-4">
            <span className="text-yellow-500 text-lg">&#9733;</span>
            <p className="ml-2 text-gray-600 text-lg">4.8 average rating</p>
          </div>
          <div className="flex justify-start  mt-4 gap-20">
            <p className="text-gray-600 text-lg">
              1000+ Experienced and Proven Employees{" "}
            </p>
            <div className="group text-green-500 text-2xl flex transform transition-transform duration-300 cursor-pointer">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="group-hover:translate-x-4 transform transition-all duration-300"
              />
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-2xl rounded-xl p-8 flex flex-col justify-between">
          <h2 className="font-semibold text-3xl text-gray-800 mb-2">
            Java Developers
          </h2>
          <div className="flex items-center mb-2 mt-4">
            <span className="text-yellow-500 text-lg">&#9733;</span>
            <p className="ml-2 text-gray-600 text-lg">4.8 average rating</p>
          </div>
          <div className="flex justify-start  mt-4 gap-20">
            <p className="text-gray-600 text-lg">
              1000+ Experienced and Proven Employees{" "}
            </p>
            <div className="group text-green-500 text-2xl flex transform transition-transform duration-300 cursor-pointer">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="group-hover:translate-x-4 transform transition-all duration-300"
              />
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow-2xl rounded-xl p-8 flex flex-col justify-between">
          <h2 className="font-semibold text-3xl text-gray-800 mb-2">
            Java Developers
          </h2>
          <div className="flex items-center mb-2 mt-4">
            <span className="text-yellow-500 text-lg">&#9733;</span>
            <p className="ml-2 text-gray-600 text-lg">4.8 average rating</p>
          </div>
          <div className="flex justify-start  mt-4 gap-20">
            <p className="text-gray-600 text-lg">
              1000+ Experienced and Proven Employees{" "}
            </p>
            <div className="group text-green-500 text-2xl flex transform transition-transform duration-300 cursor-pointer">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="group-hover:translate-x-4 transform transition-all duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <button className="px-6 py-3 text-black bg-primarybgcolor rounded-lg shadow-md transform transition-all hover:shadow-lg hover:shadow-green-500 hover:-translate-y-2">
          BROWSE MORE
        </button>
      </div>
    </>
  );
};

export default LookingForEmployee;
