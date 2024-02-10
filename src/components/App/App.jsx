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
    <div className="h-full grid grid-cols-1 md:grid-cols-2">
      <Nav />
      <div className="bg-slate-50 text-slate-950">
        <Outlet />
      </div>
    </div>
  );
}

export default App;
