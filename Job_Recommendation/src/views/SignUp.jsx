import React, { useRef } from "react";
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/ContextProvider";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { setUser, setToken } = useStateContext();

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const countryRef = useRef();
  const profileImageRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!firstNameRef.current.value) {
      alert("Please enter your first name");
      firstNameRef.current.focus();
      return;
    }
    if (!lastNameRef.current.value) {
      alert("Please enter your last name");
      lastNameRef.current.focus();
      return;
    }
    if (!emailRef.current.value) {
      alert("Please enter your email");
      emailRef.current.focus();
      return;
    }
    if (!passwordRef.current.value) {
      alert("Please enter your password");
      passwordRef.current.focus();
      return;
    }
    if (!confirmPasswordRef.current.value) {
      alert("Please confirm your password");
      confirmPasswordRef.current.focus();
      return;
    }
    if (passwordRef.current.value !== confirmPasswordRef.current.value) {
      alert("Passwords do not match");
      confirmPasswordRef.current.focus();
      return;
    }
    if (!countryRef.current.value) {
      alert("Please select your country");
      countryRef.current.focus();
      return;
    }

    const selectedFile = profileImageRef.current.files[0];

    const data = new FormData();
    data.append(
      "name",
      `${firstNameRef.current.value} ${lastNameRef.current.value}`
    );
    data.append("email", emailRef.current.value);
    data.append("password", passwordRef.current.value);
    data.append("country", countryRef.current.value);
    if (selectedFile) {
      data.append("profileImage", selectedFile);
    }

    try {
      const response = await axiosClient.post("/signup", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      setUser(response.data.user);
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Link className="items-center text-center bg-sidebarbgcolor">
        <div className="text-xl tracking-widest text-primaryfontcolor">
          TRACKPROGRESS
        </div>
        <div className="text-center font-bold tracking-widest text-orange-400 text-sm">
          DREAM BIG
        </div>
      </Link>
      <div className="bg-sidebarbgcolor min-h-screen flex flex-col lg:flex-row items-center lg:items-start">
        

        {/* Left Section - Image */}
        <div className="w-full lg:w-1/2 p-4">
          <div className="bg-gradientcolor rounded-lg overflow-hidden">
            <img
              src="SignUpAd1.jpg"
              alt="Ad"
              className="w-full h-auto object-cover rounded-lg shadow-md"
            />
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="w-full lg:w-1/2 px-6 lg:px-20">
          <div className="my-10 lg:my-40">
            <h2 className="text-primaryfontcolor font-medium tracking-widest text-3xl lg:text-4xl text-center lg:text-left">
              CREATE YOUR ACCOUNT
            </h2>
            <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left mt-2 gap-4">
              <p className="text-gray-500 font-light tracking-wide">
                Already have an ACCOUNT?
              </p>
              <Link
                to="/login"
                className="text-black font-bold cursor-pointer hover:text-primaryfontcolor hover:scale-110 transition duration-300"
              >
                LOG IN
              </Link>
            </div>
            <form onSubmit={handleSubmit} className="mt-8 space-y-6">
              {/* Name */}
              <div className="flex flex-col lg:flex-row gap-4">
                <input
                  ref={firstNameRef}
                  type="text"
                  placeholder="First Name"
                  className="px-3 py-2 h-12 w-full rounded-lg border border-primaryfontcolor focus:outline-none focus:ring-2 focus:ring-primaryfontcolor"
                />
                <input
                  ref={lastNameRef}
                  type="text"
                  placeholder="Last Name"
                  className="px-3 py-2 h-12 w-full rounded-lg border border-primaryfontcolor focus:outline-none focus:ring-2 focus:ring-primaryfontcolor"
                />
              </div>

              {/* Email */}
              <input
                ref={emailRef}
                type="email"
                placeholder="Enter Your Email"
                className="px-3 py-2 h-12 w-full rounded-lg border border-primaryfontcolor focus:outline-none focus:ring-2 focus:ring-primaryfontcolor"
              />

              {/* Password */}
              <div className="flex flex-col lg:flex-row gap-4">
                <input
                  ref={passwordRef}
                  type="password"
                  placeholder="Enter Your Password"
                  className="px-3 py-2 h-12 w-full rounded-lg border border-primaryfontcolor focus:outline-none focus:ring-2 focus:ring-primaryfontcolor"
                />
                <input
                  ref={confirmPasswordRef}
                  type="password"
                  placeholder="Confirm Password"
                  className="px-3 py-2 h-12 w-full rounded-lg border border-primaryfontcolor focus:outline-none focus:ring-2 focus:ring-primaryfontcolor"
                />
              </div>

              {/* Country */}
              <select
                ref={countryRef}
                className="px-3 py-2 h-12 w-full rounded-lg border border-primaryfontcolor focus:outline-none focus:ring-2 focus:ring-primaryfontcolor"
              >
                <option value="" disabled selected>
                  Select Your Country...
                </option>
                <option value="usa">United States</option>
                <option value="uk">United Kingdom</option>
                <option value="canada">Canada</option>
                <option value="australia">Australia</option>
                <option value="india">India</option>
              </select>

              {/* Profile Image */}
              <input
                ref={profileImageRef}
                type="file"
                className="px-3 py-2 h-12 w-full rounded-lg border border-primaryfontcolor focus:outline-none focus:ring-2 focus:ring-primaryfontcolor"
              />

              {/* Submit */}
              <button
                type="submit"
                className="w-full h-12 rounded-lg bg-primaryfontcolor text-white tracking-widest hover:bg-white hover:text-black hover:border hover:border-black transition duration-300 ease-in-out"
              >
                SIGN UP
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
