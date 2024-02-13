import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Nav() {
  const url = useLocation();

  console.log(url);

  return (
    <nav className="nav flex justify-center max-h-fit w-full gap-2 md:gap-3 text-2xl text-left place-self-center h-full md:place-self-start md:items-stretch md:text-7xl md:flex-col md:justify-center lg:text-8xl mx-5">
      <Navlink name={"about"} index={1} />
      <Navlink name={"tech"} index={2} />
      <Navlink name={"apps"} index={3} />
      <Navlink name={"photos"} index={4} />
      <Navlink name={"contact"} index={5} />
    </nav>
  );
}

function Navlink({ name, index }) {
  const url = useLocation();

  return (
    <Link to={`/${name}`} className="nav-item max-h-fit max-w-fit">
      <div
        className={`hover:bg-yellow-500 transition-all hover:px-8 max-w-fit ${
          url.pathname === `/${name}` && "bg-yellow-500 px-8"
        }`}
      >
        {`0${index}/`}{" "}
        <span
          className={`${
            url.pathname === `/${name}` ? "inline" : "hidden"
          } md:inline parent:hover:inline transition-all`}
        >
          {name.toUpperCase()}
        </span>
      </div>
    </Link>
  );
}
