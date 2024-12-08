import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useStateContext } from '../contexts/ContextProvider'
const DeafualyLayout = () => {
  const{user , token} =   useStateContext();
  if(!token){
    return <Navigate to = "/login" />
  }

  return (
    <div>
      <Outlet/>
    </div>
  )
}
export default DeafualyLayout
