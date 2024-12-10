import React, { useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider'
import axiosClient from '../axios-client';
const DeafualyLayout = () => {
  const{user , token,setUser} =   useStateContext();
  if(!token){
    return <Navigate to = "/login" />
  }
//   useEffect(() => {
//     // Fetch user data when the component mounts
//     axiosClient.get("/user")
//     .then((response) => {
//             console.log("User data:", response.data);
//             setUser(response.data); // Update user state
//         })
//         .catch((error) => {
//             console.error("Error fetching user data:", error);
//         });
// }, []);


  return (
    <div>
      <Outlet/>
    </div>
  )
}
export default DeafualyLayout
