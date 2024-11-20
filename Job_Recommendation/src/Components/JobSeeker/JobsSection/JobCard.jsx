import React from "react";

const JobCard = ({ postedTime, title, description, company, location, salary,onShortListed }) => {
  return (
    <>
      <div className="bg-gray-200 rounded-lg p-5 shadow-md ">
        {/* Header Section */}
        <div className="flex flex-col space-y-4 justify-center">
          <div className="text-sm text-gray-500">{postedTime}</div>

          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
              onClick={onShortListed}
            >
              View Job
            </button>
          </div>

          <div className="text-lg text-gray-700">{description}</div>
        </div>
        <hr className="my-4" />
        {/* Body Section */}
        <div className="flex flex-col space-y-2">
          <div className="text-sm text-gray-600">Company: {company}</div>
          <div className="text-sm text-gray-600">Location: {location}</div>
          <div className="text-sm text-gray-600">Salary: {salary}</div>
        </div>
      </div>
    </>
  );
};

export default JobCard;
