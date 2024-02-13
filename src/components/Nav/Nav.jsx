import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

export default function Nav() {
  const url = useLocation();

  console.log(url);

  return (
    <nav className="flex h-full justify-center text-2xl md:text-left place-self-center gap-1 md:mx-10 md:gap-3 md:place-self-start md:items-stretch md:text-6xl md:flex-col md:justify-center lg:text-8xl">
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
        className={`hover:bg-yellow-500 transition-all hover:px-8 ${
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
