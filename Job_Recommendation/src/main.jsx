import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import TopMenuBar from "./Components/JobSeeker/JobsSection/TopMenuBar.jsx";
import LandingPage from "./Components/Landing_Page/LandingPage.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./Components/Common/SignUp.jsx";

import MainLayout from "./Components/JobSeeker/JobsSection/MainLayout.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LandingPage />
  </StrictMode>
);
