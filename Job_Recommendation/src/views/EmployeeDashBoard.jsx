import React, { useEffect } from "react";
import SideBar from "../Components/EmployeeDashBoard/SideBar";
import { Outlet } from "react-router-dom";
import Header from "../Components/EmployeeDashBoard/Header";
import { useStateContext } from "../contexts/ContextProvider";
import axiosClient from "../axios-client";
const EmployeeDashBoard = () => {
  const { user, setUser } = useStateContext();

  return (
    <>
      <div className="flex flex-col md:flex-row gap-10">
        <div>
          <SideBar />
        </div>
        <div className=" flex-1 py-4 justify-center items-center">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default EmployeeDashBoard;
