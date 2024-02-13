import "./App.css";
import Nav from "../Nav/Nav";
import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/about");
  }, []);

  return (
    <div
      id="content"
      className="h-full w-screen grid grid-cols-1 md:grid-cols-2 lg:px-20 md:gap-10"
    >
      <Nav />
      <div className="grid items-center content-center">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
