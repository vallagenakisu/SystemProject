import React from "react";
import serachIcon from "../../assets/images/search.png";
import manageIcon from "../../assets/images/management.png";
import expandIcon from "../../assets/images/expand.png";
const TextSectionJobGiver = () => {
  return (
    <>
      <p className="text-3xl font-bold text-primarytextcolor">
        Find your Employee as you NEED.
      </p>

      {/* Each card for different info */}
      <div className=" text-primarytextcolor text-xl flex items-start mt-10 ">
        <img src={serachIcon} alt="" className="w-5 h-5 mt-1" />
        <div className="ml-4">
          <p className="font-semibold">No Cost to create your dream company</p>
          <div>CREATE your own company and start your DREAMS</div>
        </div>
      </div>

      <div className=" text-primarytextcolor text-xl flex items-start mt-16">
        <img src={manageIcon} alt="" className="w-5 h-5 mt-1" />
        <div className="ml-4">
          <p className="font-semibold">MANAGE your COMPANY</p>
          <div>
            Extend and Manage your employees,managers and whole PROJECTS.
          </div>
        </div>
      </div>

      <div className=" text-primarytextcolor text-xl flex items-start mt-16">
        <img src={expandIcon} alt="" className="w-5 h-5 mt-1" />
        <div className="ml-4">
          <p className="font-semibold">Expand your COMPANY</p>
          <div>Expand and manage your complex project</div>
        </div>
      </div>

      <div className="flex items-start mt-8">
        <button className="bg-primarybgcolor text-white px-4 py-2 rounded hover:bg-green-600">
          Find your Employee
        </button>
        <button className=" ml-16 bg-primarybgcolor text-white px-4 py-2 rounded hover:bg-green-600">
          Create Your Company for FREE.
        </button>
      </div>
    </>
  );
};

export default TextSectionJobGiver;
