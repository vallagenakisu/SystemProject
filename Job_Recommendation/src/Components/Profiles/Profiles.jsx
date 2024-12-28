import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Menubar from "./Menubar";
import axiosClient from "../../axios-client";
import axios from "axios";

const Profiles = () => {
  

  return (
    <div className="flex flex-col items-center h-screen">
      {/* About Section Positioned One-Third Down */}
      <div className="md:mt-[10vh] mt-0">
        <Outlet/>
      </div>

      {/* Menubar Section Fixed at the Bottom */}
      <div className="mt-auto sm:mb-6 mb-0 pt-10">
        <Menubar />
      </div>
    </div>
  );
};

export default Profiles;
