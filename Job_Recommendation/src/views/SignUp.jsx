import React, { useRef } from "react";
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/ContextProvider";

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
    // Create a FormData Object that can be sent to the backend or LARAVEL Server
    const data = new FormData();
    data.append(
      "name",
      firstNameRef.current.value + " " + lastNameRef.current.value
    );
    data.append("email", emailRef.current.value);
    data.append("password", passwordRef.current.value);
    data.append("confirm_password", confirmPasswordRef.current.value);
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

      console.log(response.data);
      setUser(response.data.user);
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="bg-sidebarbgcolor h-screen ">
        <div className="flex flex-row gap-10 justify-between w-full">
          <div className="flex-[1.5]">
            <div className="bg-gradientcolor rounded-lg overflow-hidden h-screen">
              <img
                src="SignUpAd1.jpg"
                alt="Ad"
                className="w-full h-full object-cover p-1 rounded-lg"
              />
            </div>
          </div>

          <div className="flex-1 mx-10">
            <div className="my-40">
              <div className="text-primaryfontcolor font-medium tracking-widest text-4xl">
                CREATE YOUR ACCOUNT
              </div>
              <div className="flex flex-row text-center mt-1 gap-4">
                <div className="text-gray-500 font-extralight tracking-widest">
                  Already have an ACCOUNT?
                </div>
                <div className="text-black font-bold cursor-pointer hover:text-primaryfontcolor hover:scale-110 ease-in-out duration-300">
                  LOG IN
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="mt-20">
                  <div className="flex flex-row gap-10">
                    <input
                      ref={firstNameRef}
                      type="text"
                      placeholder="FirstName..."
                      className="px-3 h-12 w-full rounded-lg border border-primaryfontcolor  tracking-widest focus:outline-none focus:ring-2 focus:ring-primaryfontcolor animate-fadeIn"
                    />
                    <input
                      ref={lastNameRef}
                      type="text"
                      placeholder="LastName..."
                      className="px-3 h-12 w-full rounded-lg border border-primaryfontcolor  tracking-widest focus:outline-none focus:ring-2 focus:ring-primaryfontcolor animate-fadeIn"
                    />
                  </div>
                  <div>
                    <input
                      ref={emailRef}
                      type="email"
                      placeholder="Enter Your Email..."
                      className="px-3 h-12 w-full rounded-lg border border-primaryfontcolor  tracking-widest focus:outline-none focus:ring-2 focus:ring-primaryfontcolor mt-5 animate-fadeIn"
                    />
                  </div>
                  <div className="flex flex-row gap-10">
                    <input
                      ref={passwordRef}
                      type="password"
                      placeholder="Enter Your Password..."
                      className="px-3 h-12 w-full rounded-lg border border-primaryfontcolor  tracking-widest focus:outline-none focus:ring-2 focus:ring-primaryfontcolor mt-5 animate-fadeIn"
                    />
                    <input
                      ref={confirmPasswordRef}
                      type="password"
                      placeholder="Confirm Password..."
                      className="px-3 h-12 w-full rounded-lg border border-primaryfontcolor  tracking-widest focus:outline-none focus:ring-2 focus:ring-primaryfontcolor mt-5 animate-fadeIn"
                    />
                  </div>
                  <div className="mt-5">
                    <select
                      className="px-3 h-12 w-full rounded-lg border border-primaryfontcolor tracking-widest focus:outline-none focus:ring-2 focus:ring-primaryfontcolor animate-fadeIn"
                      ref={countryRef}
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
                  </div>
                  <div className="mt-5 px-20 items-center">
                    <input
                      ref={profileImageRef}
                      type="file"
                      className="px-3 py-2 h-12 w-full rounded-lg border border-primaryfontcolor  tracking-widest focus:outline-none focus:ring-2 focus:ring-primaryfontcolor animate-fadeIn"
                    />
                  </div>
                </div>

                <div className="mt-10 px-32">
                  <button className="w-full h-12 rounded-lg bg-primaryfontcolor text-white tracking-widest animate-fadeIn hover:bg-white hover:text-black hover:border hover:border-black transition-all duration-300 ease-in-out hover:translate-x-1 hover:translate-y-1">
                    SIGN UP
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
