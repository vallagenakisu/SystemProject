import React from "react";
import axiosClient from "../../axios-client";
import { useStateContext } from "../../contexts/ContextProvider";
const postcard = () => {
  const { user, token, setUser, setToken } = useStateContext();
  axiosClient
    .get("/user", {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((response) => {
      
      setUser(response.data); // Save user data in context
      console.log("User is set");
      console.log(user);
    })
    .catch((error) => {
      // console.error("Error fetching user data:", error);
      setToken(null); // Clear token if fetch fails
    });

  return (
    <div className="max-w-2xl mx-auto shadow-md shadow-primaryfontcolor overflow-hidden">
      <div className="text-center p-4 text-lg font-semibold tracking-widest">
        CREATE POST
      </div>
      <div className="px-4 py-4 flex gap-2 items-center">
        <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
          <img
            src={user.profile_image}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div>{user.name}</div>
      </div>
    </div>
  );
};

export default postcard;
