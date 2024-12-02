import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./Components/Common/SignUp.jsx"
import "./index.css";

import LandingPage from "./Components/Landing_Page/LandingPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: LandingPage,
  },
  {
    path: "/signUp",
    Component : SignUp,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
