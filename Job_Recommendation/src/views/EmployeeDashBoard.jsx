import React from "react";
import SideBar from "../Components/EmployeeDashBoard/SideBar";
import { Outlet } from "react-router-dom";
import Header from "../Components/EmployeeDashBoard/Header";
const EmployeeDashBoard = () => {
  return (
    <div className="flex flex-row font-roboto">
      <div>
        <SideBar />
      </div>
      <div className="w-full ml-32 med:ml-56">
        <div className="bg-dashboardbgcolor">
          <Header />
        </div>
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashBoard;
