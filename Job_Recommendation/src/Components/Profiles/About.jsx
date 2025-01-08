import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faLaravel, faNode } from "@fortawesome/free-brands-svg-icons";
import { useOutletContext } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axiosClient from "../../axios-client";
import {
  faFacebook,
  faInstagram,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
const About = () => {
  const { id } = useParams();
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setloading] = useState(true);



  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axiosClient.get(`/currentusers/${id}`);
        console.log(response.data);

        response.data.profile_image = response.data.profile_image.replace("/storage/", "/storage/app/public/");

        setCurrentUser(response.data);
        setloading(false);
      } catch (err) {
        console.log("Error Fetching data", err);
        setloading(false);
      }
    };
    fetchUser();
  }, [id]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }
  return (
    <div className="mx-4 sm:mx-10 flex flex-col justify-center items-center gap-8 sm:gap-10">
      {/* Image Container */}
      <div>
        <img
          src={currentUser.profile_image} // Replace with your image source
          alt="User Profile"
          className="rounded-full w-20 h-20 sm:w-48 sm:h-48 object-cover shadow-lg"
        />
      </div>

      {/* SOCIAL MEDIA LINK */}
      <div className="flex flex-row gap-10">
        <FontAwesomeIcon
          icon={faFacebook}
          className="text-3xl hover:text-green-800 transform hover:scale-125 duration-300"
        />
        <FontAwesomeIcon
          icon={faInstagram}
          className="text-3xl hover:text-green-800 transform hover:scale-125 duration-300"
        />
        <FontAwesomeIcon
          icon={faGithub}
          className="text-3xl hover:text-green-800 transform hover:scale-125 duration-300"
        />
        <FontAwesomeIcon
          icon={faLinkedin}
          className="text-3xl hover:text-green-800 transform hover:scale-125 duration-300"
        />
      </div>

      {/* USER NAME CONTAINER */}
      <div className="w-full flex justify-center">
        <span className="text-center text-xl sm:text-2xl md:text-3xl tracking-widest text-orange-600 font-bold">
          {currentUser.name}
        </span>
      </div>

      {/* USER EXPERTISE CONTAINER */}
      <div className="w-full flex justify-center">
        <span className="text-center text-2xl sm:text-3xl md:text-4xl tracking-widest text-primaryfontcolor font-bold">
          "BACKEND DEVELOPER"
        </span>
      </div>

      {/* SKILLS HEADER CONTAINER */}
      <div className="w-full flex justify-center">
        <span className="text-center text-xl sm:text-2xl md:text-3xl tracking-widest font-thin">
          SKILLS
        </span>
      </div>

      {/* SKILLS SECTION CONTAINER */}
      <div className="flex flex-row flex-wrap justify-center gap-6 sm:gap-10">
        <div>
          <FontAwesomeIcon
            icon={faReact}
            className="text-4xl sm:text-6xl md:text-6xl text-black"
          />
        </div>
        <div>
          <FontAwesomeIcon
            icon={faLaravel}
            className="text-4xl sm:text-6xl md:text-6xl text-black"
          />
        </div>
        <div>
          <FontAwesomeIcon
            icon={faNode}
            className="text-4xl sm:text-6xl md:text-6xl text-black"
          />
        </div>
        {/* Add more icons as needed */}
      </div>
    </div>
  );
};

export default About;
