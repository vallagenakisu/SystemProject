import React, { useRef, useState } from "react";
import { useStateContext } from "../contexts/ContextProvider";
import axiosClient from "../axios-client";
import { Link } from "react-router-dom";

const Login = () => {
  const email = useRef();
  const pass = useRef();
  const { setUser, setToken } = useStateContext();
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // Reset errors
    setErrors({
      email: "",
      password: "",
    });

    const emailValue = email.current.value;
    const passwordValue = pass.current.value;

    if (!emailValue) {
      setErrors((prev) => ({
        ...prev,
        email: "Email is required.",
      }));
      email.current.focus();
      return;
    }

    if (!passwordValue) {
      setErrors((prev) => ({
        ...prev,
        password: "Password is required.",
      }));
      pass.current.focus();
      return;
    }

    const data = {
      email: emailValue,
      password: passwordValue,
    };
    // console.log(data);

    axiosClient
      .post("/login", data)
      .then((response) => {
        // console.log(response);
        // console.log(response.data.user);
        // console.log(response.data.token);
        setToken(response.data.token);
        setUser(response.data.user);
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 401 || error.response.status === 422) {
            setMessage("Invalid Credentials.");
          } else {
            setMessage("An unexpected error occurred. Please try again.");
          }
        } else {
          console.error("Network error:", error);
          setMessage("Unable to connect to the server. Please try again.");
        }
      });
  };

  return (
    <div className="bg-[url('/Images/bgimagelogin.jpg')] bg-cover bg-center sm:bg-contain lg:bg-cover h-screen relative overflow-hidden">
      {/* Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-10 z-0"></div>

      {/* Header */}
      <Link to={"/"}>
        <div className="text-orange-400 px-4 sm:px-6 py-2 font-bold tracking-widest text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl relative z-10">
          TRACKPROGRESS
        </div>
      </Link>

      {/* Login Form */}
      <div className="flex justify-center items-center h-screen relative z-10">
        <div className="p-4 sm:p-6 md:p-8 lg:p-10 rounded-lg sm:bg-white sm:bg-opacity-60 shadow-lg max-w-xs sm:max-w-md md:max-w-lg">
          <h2 className="text-orange-500 text-lg sm:text-xl md:text-2xl font-semibold tracking-widest text-center mb-4">
            Login
          </h2>
          {message && <div className="text-red-500 text-sm">{message}</div>}
          <form onSubmit={handleSubmit}>
            <div className="mt-3">
              <label
                htmlFor="email"
                className="text-white text-sm sm:text-base font-light tracking-widest"
              >
                Enter your email
              </label>
              <input
                ref={email}
                type="text"
                name="email"
                placeholder="Email"
                className={`w-full mt-2 p-2 rounded-lg border-2 ${
                  errors.email
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-300 focus:border-primaryfontcolor"
                } focus:ring-primaryfontcolor focus:outline-none`}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>
            <div className="mt-4">
              <label
                htmlFor="password"
                className="text-white text-sm sm:text-base font-light tracking-widest"
              >
                Enter your password
              </label>
              <input
                ref={pass}
                type="password"
                name="password"
                placeholder="Password"
                className={`w-full mt-2 p-2 rounded-lg border-2 ${
                  errors.password
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-300 focus:border-primaryfontcolor"
                } focus:ring-primaryfontcolor focus:outline-none`}
              />
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>
            <div className="mt-6 flex justify-center">
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2 bg-primaryfontcolor text-white rounded-lg tracking-widest hover:bg-primaryfontcolor-dark transition"
              >
                Login
              </button>
            </div>
          </form>

          <div className="mt-6 flex justify-center gap-4">
            <h3 className="font-extralight tracking-widest text-white">
              Don't Have an Account?
            </h3>
            <Link
              to="/"
              className="font-bold cursor-pointer hover:text-primaryfontcolor hover:scale-125 ease-in-out duration-300"
            >
              CREATE
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
