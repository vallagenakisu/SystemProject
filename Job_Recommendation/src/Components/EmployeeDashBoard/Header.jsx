import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import axiosClient from "../../axios-client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useStateContext } from "../../contexts/ContextProvider";
const Header = () => {
  const {user,setUser,setToken,token} =useStateContext();
  useEffect(() => {
    // Fetch user data when the component mounts
    axiosClient.get('/user', {
      headers: {
        Authorization: `Bearer ${token}`  // Replace `yourToken` with the actual token
    }
    }).then((response) => {
      setUser(response.data.user);
    }).catch((error) => {
      console.log(error.response.data);
    });
  }, []);

  return (
    <div className="w-full h-16 py-8 overflow-hidden mx-12 my-4 bg-sidebarbgcolor rounded-lg flex flex-row gap-96 justify-center items-center">
      {/* Search Bar */}
      <div className="cursor-pointer">
        <input
          type="text"
          placeholder="Search..."
          className="w-80 h-10 mx-6 my-3 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-primaryfontcolor"
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="text-primaryfontcolor"
        />
      </div>
      {/* Profile Avatar */}
      <div className="gap-16 flex flex-row justify-center items-center">
        <div className="justify-center items-center">
          <h1 className="text-primaryfontcolor font-semibold text-lg text-center">
             {user.name}
          </h1>
        </div>
        <div className="">
          {/* Users image placeholder */}
          <img
            src="https://via.placeholder.com/150"
            alt="User"
            className="rounded-full h-12 w-12"
          />
          
        </div>
      </div>
      
    </div>
  );
};

export default Header;
