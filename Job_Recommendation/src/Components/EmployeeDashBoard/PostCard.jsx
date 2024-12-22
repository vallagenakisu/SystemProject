import React from "react";
import axiosClient from "../../axios-client";
import { useStateContext } from "../../contexts/ContextProvider";
import { useEffect ,useRef } from "react";
const postcard = () => {
  const { user, token, setUser, setToken } = useStateContext();
  const postTextAreaRef = useRef(null);

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
    if(postTextAreaRef.current)
    {
      postTextAreaRef.current.focus();
    }

    
  }, [token, user, setUser, setToken]); // Dependencies for useEffect

  if (!user) {
    return <p>Loading...</p>; // Show a loading state until user is fetched
  }

  return (
    <div className=" max-w-2xl mx-auto shadow-md shadow-primaryfontcolor overflow-hidden">
      <div className="text-center p-4 text-lg font-semibold tracking-widest">
        CREATE POST
      </div>
      <div className="px-4 py-4 flex gap-2 items-center">
        <div className="w-14 h-14 rounded-full bg-gray-200 overflow-hidden">
          <img
            src={user.profile_image}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="font-bold tracking-widest text-primaryfontcolor">
          {user.name}
        </div>
      </div>

      <div className="items-center justify-center px-4  pb-4">
        <label htmlFor="post"></label>
        <textarea
          ref={postTextAreaRef}
          name="post"
          id="post"
          cols="50"
          rows="8"
          placeholder={`What's on your mind ? ${user.name}`}
          className=" placeholder:text-primaryfontcolor placeholder:text-xl placeholder:font-thin placeholder:tracking-widest  text-lg font-roboto outline-none focus:ring-0"
        ></textarea>
      </div>
    </div>
  );
};

export default postcard;
