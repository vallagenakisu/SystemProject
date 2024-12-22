import React, { useState } from "react";
import axiosClient from "../../axios-client";
import { useStateContext } from "../../contexts/ContextProvider";
import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-regular-svg-icons";

const postcard = () => {
  const { user, token, setUser, setToken } = useStateContext();

  // Use ref to collect info from different input fields
  const postTextAreaRef = useRef();
  const postImageRef = useRef();



  const [selectedImage, setSelectedImage] = useState(null);

  // Handling image input

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Create a URL for the selected image
      setSelectedImage(imageUrl);
    }
  };



  // Handling Submitting the post

  const handleSubmitPost = async (event) => {
    event.preventDefault();

    if (!postTextAreaRef.current.value && !postImageRef.current.value) {
      alert("Posting requires some text or any image");
      postTextAreaRef.current.focus();
      postImageRef.current.focus();
    }

    // Now writing the logic to send the data to the backedn server
    const selectedImage = postImageRef.current.files[0];
    const data = new FormData();
    data.append("postContent",postTextAreaRef.current.value);

    if(selectedImage)
    {
      data.append("postImage",selectedImage);
    }

    // console.log("data is" + postTextAreaRef.current.value + postImageRef.current.value);
    try
    {
      const response = await axiosClient.post('/feedpost',data,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response);

    }
    catch(err)
    {
      console.log(err);
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
      <form onSubmit={handleSubmitPost}>
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

        {/* Image add  section */}

        <div className="flex flex-row px-4 py-4 gap-10">
          <div className="text-xl cursor-pointer font-bold ">
            <label htmlFor="imageUpload">
              <FontAwesomeIcon
                icon={faImage}
                className="hover:text-primaryfontcolor ease-out hover:scale-110 duration-300 transform "
              />
            </label>

            <input
              ref={postImageRef}
              type="file"
              id="imageUpload"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
          </div>

          {/* If the image is slected it will be shown here */}
          {selectedImage && (
            <div className="px-4 py-4">
              <img
                src={selectedImage}
                alt="Selected"
                className="w-full h-auto rounded-md"
              />
            </div>
          )}
        </div>

        <div className="flex justify-center items-center p-8">
          <button
            type="submit"
            className="w-full sm:w-auto px-6 py-2 bg-primaryfontcolor text-white rounded-lg tracking-widest hover:bg-primaryfontcolor-dark transition"
          >
            POST
          </button>
        </div>
      </form>
    </div>
  );
};

export default postcard;
