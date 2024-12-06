import React from "react";
import pinImage from "../../assets/images/office-push-pin.png"; // Adjust the path based on your directory structure
import homeIcon from "../../assets/images/home.png"; // Adjust the path based on your directory structure
import teamworkIcon from "../../assets/images/teamwork.png";
const TextSectionJobSeeker = () => {
  return (
    <>
      
        <p className="text-3xl font-bold text-primarytextcolor">
          Find your Job EASILY & EFFICIENTLY.
        </p>

        {/* Each card for different info */}
        <div className=" text-primarytextcolor text-xl flex items-start mt-10 ">
          <img src={pinImage} alt="" className="w-5 h-5 mt-1" />
          <div className="ml-4">
            <p className="font-semibold">No Cost to Join</p>
            <div>Register yourself for free and find your dream work.</div>
          </div>
        </div>

        <div className=" text-primarytextcolor text-xl flex items-start mt-16">
          <img src={homeIcon} alt="" className="w-5 h-5 mt-1" />
          <div className="ml-4">
            <p className="font-semibold">Work From HOME</p>
            <div>Find a work that suits you to work from your comfort.</div>
          </div>
        </div>

        <div className=" text-primarytextcolor text-xl flex items-start mt-16">
          <img src={teamworkIcon} alt="" className="w-5 h-5 mt-1" />
          <div className="ml-4">
            <p className="font-semibold">Work with different companies</p>
            <div>Work with the companies thay only you prefer.</div>
          </div>
        </div>

        <div className="flex items-start mt-8">
          <button className="bg-primarybgcolor text-white px-4 py-2 rounded hover:bg-green-600">
            Find a Job
          </button>
          <button className=" ml-16 bg-primarybgcolor text-white px-4 py-2 rounded hover:bg-green-600">
            Sign up for FREE.
          </button>
        </div>
      
    </>
  );
};

export default TextSectionJobSeeker;
