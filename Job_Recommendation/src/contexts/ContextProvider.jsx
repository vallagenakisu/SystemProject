import { createContext, useState, useContext } from "react";
import axiosClient from "../axios-client";
import { useEffect } from "react";
const StateContext = createContext({
  user: null,
  token: null,
  setUser: () => {},
  setToken: () => {},
});
export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN"));
  const setToken = (token) => {
    _setToken(token);
    if (token) {
      localStorage.setItem("ACCESS_TOKEN", token);
      // Fetch user data when token is set
      // axiosClient
      //   .get("/user", {
      //     headers: { Authorization: `Bearer ${token}` },
      //   })
      //   .then((response) => {
      //     console.log("response from laravel");
      //     console.log(response);
      //     setUser(response.data); // Save user data in context
      //     // console.log("User is set");
      //     // console.log(user);
      //   })
      //   .catch((error) => {
      //     // console.error("Error fetching user data:", error);
      //     setToken(null); // Clear token if fetch fails
      //   });
    } else {
      localStorage.removeItem("ACCESS_TOKEN");
    }
  };
  // useEffect(() => {
  //   if (token) {
  //     axiosClient
  //       .get("/user", {
  //         headers: { Authorization: `Bearer ${token}` },
  //       })
  //       .then((response) => {
  //         setUser(response.data);
  //         console.log("User");
  //         console.log(user);
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching user data:", error);
  //         setToken(null);
  //       });
  //   }
  // }, [token]);
  return (
    <StateContext.Provider value={{ user, token, setUser, setToken }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
