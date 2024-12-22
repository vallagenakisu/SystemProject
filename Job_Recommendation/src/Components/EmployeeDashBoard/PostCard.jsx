import React, { useState } from "react";
import axiosClient from "../../axios-client";
import { useStateContext } from "../../contexts/ContextProvider";
import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-regular-svg-icons";
import { faIcons } from "@fortawesome/free-solid-svg-icons";
const postcard = () => {
  const { user, token, setUser, setToken } = useStateContext();
  const postTextAreaRef = useRef(null);

  const [selectedImage, setSelectedImage] = useState(null);
  // Handling image input

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Create a URL for the selected image
      setSelectedImage(imageUrl);
    }
  };

  useEffect(() => {
    if (token) {
      axiosClient
        .get("/user", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          const fetchedUser = response.data;

          // Only update the user if it's different to avoid infinite re-renders
          if (JSON.stringify(fetchedUser) !== JSON.stringify(user)) {
            setUser(fetchedUser); // Save user data in context
            console.log("User is set:", fetchedUser);
          }
        })
        .catch((error) => {
          console.error("Error fetching user data:", error);
          setToken(null); // Clear token if fetch fails
        });
    }
    // Automatically focusing the textarea when the component is mounted
    if (postTextAreaRef.current) {
      postTextAreaRef.current.focus();
    }
  }, [token, user, setUser, setToken]); // Dependencies for useEffect

  if (!user) {
    return <p>Loading...</p>; // Show a loading state until user is fetched
  }

  return (
    <div className="max-w-2xl mx-auto shadow-md shadow-primaryfontcolor overflow-hidden">
      <div className="text-center p-4 text-lg font-semibold tracking-widest">
        CREATE POST
      </div>

      {/* User Info Section */}
      <div className="px-4 py-4 flex items-center gap-4 md:gap-6">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gray-200 overflow-hidden">
          <img
            src={user.profile_image}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="font-bold text-sm md:text-lg tracking-wide text-primaryfontcolor">
          {user.name}
        </div>
      </div>

      {/* Textarea Section */}
      <div className="px-4 pb-4">
        <label htmlFor="post"></label>
        <textarea
          ref={postTextAreaRef}
          name="post"
          id="post"
          cols="50"
          rows="8"
          placeholder={`What's on your mind ? ${user.name}`}
          className="w-full placeholder:text-primaryfontcolor placeholder:text-base sm:placeholder:text-lg md:placeholder:text-xl placeholder:font-thin placeholder:tracking-wide md:tracking-widest text-sm sm:text-base md:text-lg font-roboto outline-none focus:ring-0 resize-none"
        ></textarea>
      </div>

      {/* Image add and emoji add section */}

      <div className="flex flex-row px-4 py-4 gap-10">
        <div className="text-xl cursor-pointer font-bold ">
          <label htmlFor="imageUpload">
            <FontAwesomeIcon
              icon={faImage}
              className="hover:text-primaryfontcolor ease-out hover:scale-110 duration-300 transform "
            />
          </label>

          <input
            type="file"
            id="imageUpload"
            accept="image/*"
            className="hidden"
            onChange={handleImageChange}
          />
        </div>
        <div className="text-xl cursor-pointer font-bold">
          <FontAwesomeIcon
            icon={faIcons}
            className="hover:text-primaryfontcolor ease-out hover:scale-110 duration-300 transform "
          />
        </div>
      </div>
    </div>
  );
};

export default postcard;
