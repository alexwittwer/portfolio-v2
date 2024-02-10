import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="nav flex justify-center w-full gap-3 md:gap-3 text-2xl text-left place-self-center h-full md:place-self-start md:items-stretch md:text-7xl md:flex-col md:justify-center lg:text-8xl mx-5">
      <Link to="/about" className="nav-item max-w-fit">
        <div className="hover:bg-yellow-500 transition-all hover:px-5 max-w-fit">
          01/{" "}
          <span className="hidden md:inline parent:hover:inline transition-all">
            ABOUT
          </span>
        </div>
      </Link>
      <Link to="/tech" className="nav-item max-w-fit">
        <div className="hover:bg-yellow-500 transition-all hover:px-5 max-w-fit">
          02/{" "}
          <span className="hidden md:inline hover:inline transition-all">
            TECH
          </span>
        </div>
      </Link>
      <Link to="/projects" className="nav-item max-w-fit">
        <div className="hover:bg-yellow-500 transition-all hover:px-5 max-w-fit">
          03/{" "}
          <span className="hidden hover:inline md:inline  transition-all">
            APPS
          </span>
        </div>
      </Link>
      <Link to="/photos" className="nav-item max-w-fit">
        <div className="hover:bg-yellow-500 transition-all hover:px-5 max-w-fit">
          04/{" "}
          <span className="hidden md:inline hover:inline  transition-all">
            PHOTOS
          </span>
        </div>
      </Link>
      <Link to="/contact" className="nav-item max-w-fit">
        <div className="hover:bg-yellow-500 transition-all hover:px-5 max-w-fit">
          05/{" "}
          <span className="hidden md:inline hover:inline  transition-all">
            CONTACT
          </span>
        </div>
      </Link>
    </nav>
  );
}
