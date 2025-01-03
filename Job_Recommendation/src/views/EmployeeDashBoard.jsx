import React, { useEffect } from "react";
import SideBar from "../Components/EmployeeDashBoard/SideBar";
import { Outlet } from "react-router-dom";
import Header from "../Components/EmployeeDashBoard/Header";
import { useStateContext } from "../contexts/ContextProvider";
import axiosClient from "../axios-client";
const EmployeeDashBoard = () => {
  const { user, setUser } = useStateContext();

  return (
    <div>
      <div className="flex flex-col md:flex-row ">
        <div>
          <SideBar />
        </div>
        <div className=" flex-1 justify-center items-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashBoard;
