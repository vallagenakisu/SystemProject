import React, { useEffect } from "react";
import SideBar from "../Components/EmployeeDashBoard/SideBar";
import { Outlet } from "react-router-dom";
import Header from "../Components/EmployeeDashBoard/Header";
import { useStateContext } from "../contexts/ContextProvider";
import axiosClient from "../axios-client";
const EmployeeDashBoard = () => {
    const { user, setUser}  =useStateContext();
    

  return (
    
      <div>
        <SideBar />
      </div>
      
      
    
  );
};

export default EmployeeDashBoard;
