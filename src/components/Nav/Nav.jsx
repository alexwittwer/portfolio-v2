import { Link } from "react-router-dom";
import { useState } from "react";

export default function Nav() {
  const [active, setActive] = useState(false);

  return (
    <nav className="flex justify-between gap-3 text-2xl text-left place-self-center max-w-fit h-full md:place-self-start md:items-stretch md:text-7xl md:flex-col md:justify-center lg:text-8xl mx-5">
      <Link to="/about">
        <div className="hover:bg-yellow-500 transition-all hover:px-5">
          01/{" "}
          <span className="hidden md:inline parent:hover:inline transition-all">
            ABOUT
          </span>
        </div>
      </Link>
      <Link to="/tech" className="max-w-fit">
        <div className="hover:bg-yellow-500 transition-all hover:px-5">
          02/
          <span className="hidden md:inline hover:inline transition-all">
            TECH
          </span>
        </div>
      </Link>
      <Link to="/projects">
        <div className="hover:bg-yellow-500 transition-all hover:px-5">
          03/{" "}
          <span className="hidden hover:inline md:inline  transition-all">
            APPS
          </span>
        </div>
      </Link>
      <Link to="/photos">
        <div className="hover:bg-yellow-500 transition-all hover:px-5">
          04/{" "}
          <span className="hidden md:inline hover:inline  transition-all">
            PHOTOS
          </span>
        </div>
      </Link>
      <Link to="/contact">
        <div className="hover:bg-yellow-500 transition-all hover:px-5">
          05/{" "}
          <span className="hidden md:inline hover:inline  transition-all">
            CONTACT
          </span>
        </div>
      </Link>
    </nav>
  );
}
