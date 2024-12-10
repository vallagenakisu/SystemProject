import React from "react";
import SideBar from "../Components/EmployeeDashBoard/SideBar";
import { Outlet } from "react-router-dom";
import Header from "../Components/EmployeeDashBoard/Header";

const EmployeeDashBoard = () => {
  return (
    <div className="flex flex-row font-roboto bg-white overflow-hidden">
      <div>
        <SideBar />
      </div>
      <div className="flex flex-col">
        <Header />
        <Outlet />
      </div>
      
    </div>
  );
};

export default EmployeeDashBoard;
