import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/App/App.jsx";
import "./index.css";
import Nav from "./components/Nav/Nav.jsx";
import About from "./components/Pages/About.jsx";
import Tech from "./components/Pages/Tech.jsx";
import Projects from "./components/Pages/Projects.jsx";
import Contact from "./components/Pages/Contact.jsx";
import Photos from "./components/Pages/Photos.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/tech",
        element: <Tech />,
      },
      {
        path: "/projects",
        element: <Projects />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/photos",
        element: <Photos />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
