import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const LookingForCompanies = () => {
  return (
    <>
      <h1 className="font-bold text-4xl">
        Looking for COMPANIES to collaborate with?
      </h1>
      <div className="mt-8 grid grid-cols-2 md:grid-cols-1 gap-14">
        {/* Card 1 */}

        <div className="bg-white shadow-2xl border border-black rounded-xl p-8 flex flex-col justify-between">
          <h2 className="font-semibold text-3xl text-gray-800 mb-2">
            Experienced .NET Developer Needed for a Robust and Scalable Project
          </h2>
          <div className="flex justify-start items-end gap-10 mt-8">
            <div className="flex flex-col">
              <p>$100000</p>
              <p className="font-bold mt-1">Salary</p>
            </div>

            <div className="flex flex-col">
              <p>6 months+</p>
              <p className="font-bold mt-1">Experience</p>
            </div>
          </div>
          <div className="mt-8">
            <p>
              Looking a for a fresh graduate with 6 months experience to ready a
              scalable and robust project.
            </p>
          </div>

          <div className="mt-8 flex gap-8">
            <p className="font-extrabold">SEE MORE</p>
            <div className="group text-green-500 text-2xl flex transform transition-transform duration-300 cursor-pointer">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="group-hover:translate-x-10 transform transition-all duration-300"
              />
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-2xl border border-black rounded-xl p-8 flex flex-col justify-between">
          <h2 className="font-semibold text-3xl text-gray-800 mb-2">
            Experienced .NET Developer Needed for a Robust and Scalable Project
          </h2>
          <div className="flex justify-start items-end gap-10 mt-8">
            <div className="flex flex-col">
              <p>$100000</p>
              <p className="font-bold mt-1">Salary</p>
            </div>

            <div className="flex flex-col">
              <p>6 months+</p>
              <p className="font-bold mt-1">Experience</p>
            </div>
          </div>
          <div className="mt-8">
            <p>
              Looking a for a fresh graduate with 6 months experience to ready a
              scalable and robust project.
            </p>
          </div>

          <div className="mt-8 flex gap-8">
            <p className="font-extrabold">SEE MORE</p>
            <div className="group text-green-500 text-2xl flex transform transition-transform duration-300 cursor-pointer">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="group-hover:translate-x-10 transform transition-all duration-300"
              />
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow-2xl border border-black rounded-xl p-8 flex flex-col justify-between">
          <h2 className="font-semibold text-3xl text-gray-800 mb-2">
            Experienced .NET Developer Needed for a Robust and Scalable Project
          </h2>
          <div className="flex justify-start items-end gap-10 mt-8">
            <div className="flex flex-col">
              <p>$100000</p>
              <p className="font-bold mt-1">Salary</p>
            </div>

            <div className="flex flex-col">
              <p>6 months+</p>
              <p className="font-bold mt-1">Experience</p>
            </div>
          </div>
          <div className="mt-8">
            <p>
              Looking a for a fresh graduate with 6 months experience to ready a
              scalable and robust project.
            </p>
          </div>

          <div className="mt-8 flex gap-8">
            <p className="font-extrabold">SEE MORE</p>
            <div className="group text-green-500 text-2xl flex transform transition-transform duration-300 cursor-pointer">
              <FontAwesomeIcon
                icon={faArrowRight}
                className="group-hover:translate-x-10 transform transition-all duration-300"
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

export default LookingForCompanies;
