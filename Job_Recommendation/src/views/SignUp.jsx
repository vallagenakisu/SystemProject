import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import axiosClient from "../axios-client";
import { useStateContext } from "../contexts/ContextProvider";
const SignUp = () => {
  const {setUser,setToken} = useStateContext();

  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirm_password: "",
    country: "Bangladesh",
    profileImage: null,
  });
  const [message, setMessage] = React.useState("");
 

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "profileImage") {
      setFormData({ ...formData, [name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object which will be sent as to the laravel backend

    const data = new FormData();
    data.append("name", formData.firstName+formData.lastName);
    data.append("email", formData.email);
    data.append("password", formData.password);
    data.append("password", formData.confirm_password);
    data.append("country", formData.country);
    console.log(data);
    if (formData.profileImage) {
      data.append("profileImage", formData.profileImage);
    }

    axiosClient.post("/signup", data).then((response) => {
      console.log(response.data);``
      setUser(response.data.user);
      setToken(response.data.token);
    })
    .catch((error) => {
      console.log(error.response.data);
      setMessage(error.response.data.message);
    });

};
  return (
    <>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold">Sign up to get a JOB</h1>
          </div>

          <p>{message}</p>

          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                value={formData.firstName}
                onChange={handleChange}
                className="border rounded-lg p-2 w-full"
                required
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last name"
                value={formData.lastName}
                onChange={handleChange}
                className="border rounded-lg p-2 w-full"
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Work email address"
              value={formData.email}
              onChange={handleChange}
              className="border rounded-lg p-2 w-full mb-4"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password (8 or more characters)"
              value={formData.password}
              onChange={handleChange}
              className="border rounded-lg p-2 w-full mb-4"
              required
            />
            <input
              type="password"
              name="confirm_password"
              placeholder="Confirm Password"
              value={formData.confirm_password}
              onChange={handleChange}
              className="border rounded-lg p-2 w-full mb-4"
              required
            />
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
              className="border rounded-lg p-2 w-full mb-4"
            >
              <option value="Bangladesh">Bangladesh</option>
              <option value="United States">United States</option>
              <option value="India">India</option>
              <option value="Canada">Canada</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Switzerland">Switzerland</option>
            </select>
            <input
              type="file"
              name="profileImage"
              accept="image/*"
              onChange={handleChange}
              className="border rounded-lg p-2 w-full mb-4"
            />
            <button
              type="submit"
              className="bg-green-500 text-white py-2 px-4 rounded-lg w-full hover:bg-green-600"
            >
              Sign Up
            </button>
          </form>
          <div className="text-right mt-4 text-sm">
            <a
              href="/apply-as-talent"
              className="text-green-600 hover:underline"
            >
              Register Your Company
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
