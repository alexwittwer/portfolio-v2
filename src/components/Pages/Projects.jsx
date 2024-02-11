/* eslint-disable react/no-unescaped-entities */
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import PropTypes from "prop-types";
import simplecalc from "../../assets/simplecalc.jpg";
import weatherify from "../../assets/weatherify.jpg";
import battleship from "../../assets/battleship.jpg";
import hardena from "../../assets/hardena.jpg";
import tictactoe from "../../assets/tictactoe.jpg";
import booknerd from "../../assets/booknerd.jpg";
import dashboard from "../../assets/dashboard.jpg";
import cvbuilder from "../../assets/cv-builder.jpg";
import pokememory from "../../assets/pokememory.png";
import etchasketch from "../../assets/etchasketch.jpg";
import todoer from "../../assets/todoer.jpeg";
import odinrecipes from "../../assets/odinrecipes.jpeg";
import ggio from "../../assets/ggio.webp";
import blueboard from "../../assets/blueboard.webp";
import inventory from "../../assets/inventory.webp";
import crumbum from "../../assets/crumbum.webp";

function Card({ imageURL, title, desc, repo, live }) {
  const { ref: projRef, inView: projInView } = useInView({
    threshold: 0,
    rootMargin: "300px",
  });
  const [show, setShow] = useState(false);

  function toggleShow() {
    return setShow(!show);
  }

  return (
    <div
      ref={projRef}
      className={`card w-full hover:outline-5 hover:outline hover:outline-yellow-500 my-2 p-3 ${
        projInView ? "fade-in" : ""
      }`}
    >
      <div className="flex flex-col items-end justify-end">
        <h3 className="text-6xl text-start self-start">{title}</h3>
        <p className="text-xl text-start self-start">{desc}</p>
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleShow();
          }}
          className="text-4xl my-5 self-start text-start"
        >
          Show preview
        </button>
        {show && <img className="transition-all fade-in" src={imageURL} />}
        <div className="flex flex-col items-end mt-20">
          <a className="text-8xl hover:scale-110" target="blank" href={live}>
            Live
          </a>
          <a className="text-6xl hover:scale-110" target="blank" href={repo}>
            View Repo
          </a>
        </div>
      </div>
    </div>
  );
}

function Portfolio() {
  return (
    <section id="Projects" className="flex flex-col gap-2 mx-20 md:mx-3 my-10">
      <Card
        imageURL={crumbum}
        title={"crumbum"}
        desc={
          "A full stack blog built with MongoDB, React, Express, Node.js, TailwindCSS, daisyUI. Users can create, edit and delete their own posts, or access them from the public facing free REST API. Authentication and Authorization through JWT and segregated user and user-auth accounts allows for security. Administrators can moderate content from the web portal"
        }
        live={"https://www.crumbum.club/"}
        repo={"https://github.com/alexwittwer/blog-api/"}
      />
      <Card
        imageURL={ggio}
        title={"GG.io Shop"}
        desc={
          "A multi-routed video-game webstore, built with React and TailwindCSS. Consumes RAWG.io REST API. Fully responsive, with mobile-friendly image carousels. Users can add and view items in a cart and check their totals. Also implements a search bar from the API as well as categories for popular games"
        }
        live={"https://ggio.vercel.app/"}
        repo={"https://github.com/alexwittwer/shopping-cart/"}
      />
      <Card
        imageURL={inventory}
        title={"Biamp Inventory CMS"}
        desc={
          "An inventory CRUD app with Biamp products as placeholders, as part of The Odin Project. Please note that this application has no security in place and users can delete and modify content (there has been some vandalism from other visitors.)"
        }
        live={"https://biamp-inventory-proto.up.railway.app/"}
        repo={"https://github.com/alexwittwer/non-conformance-crud"}
      />
      <Card
        imageURL={pokememory}
        title={"Pokemon Memory Card"}
        desc={
          "A flashcard memory game with Pokemon, built with React and TailwindCSS. Consumes the public RESTful PokeAPI. Users can choose between Easy, Medium, or Hard (with optional Insane mode.)"
        }
        live={"https://memory-card-peach.vercel.app/"}
        repo={"https://github.com/alexwittwer/memory-card/"}
      />
      <Card
        imageURL={simplecalc}
        title={"simpleCalc"}
        desc={
          "A vintage and stylish calculator app, using JavaScript, CSS, HTML as part of The Odin Project. Try dividing by zero to view a secret message!"
        }
        live={"https://alexwittwer.github.io/simpleCalc/"}
        repo={"https://github.com/alexwittwer/simpleCalc/"}
      />
      <Card
        imageURL={cvbuilder}
        title={"CV Builder"}
        desc={
          "React-based CV builder with TailwindCSS, as part of The Odin Project"
        }
        live={"https://cv-builder-nine-henna.vercel.app/"}
        repo={"https://github.com/alexwittwer/cv-builder/"}
      />
      <Card
        imageURL={blueboard}
        title={"BlueBoard"}
        desc={
          "A mini-message board built with Express, Mongoose, MongoDB, pug and SASS, as part of The Odin Project"
        }
        live={"https://blue-board.up.railway.app/"}
        repo={"https://github.com/alexwittwer/mini-message-board/"}
      />
      <Card
        imageURL={weatherify}
        title={"Weatherify"}
        desc={
          "A dynamic weather app using an free weather API, as part of The Odin Project curriculum"
        }
        live={"https://alexwittwer.github.io/weather-app/"}
        repo={"https://github.com/alexwittwer/weather-app/"}
      />
      <Card
        imageURL={battleship}
        title={"Battleship"}
        desc={
          "A remake of the classic Hasbro game, Battleship, as part of The Odin Project curriculum"
        }
        live={"https://alexwittwer.github.io/battleship/"}
        repo={"https://github.com/alexwittwer/battleship/"}
      />
      <Card
        imageURL={hardena}
        title={"Hardena Restaurant"}
        desc={
          "A remake of local restaurant Hardena in Philadelphia, as part of The Odin Project"
        }
        live={"https://alexwittwer.github.io/Hardena-Restaurant/"}
        repo={"https://github.com/alexwittwer/Hardena-Restaurant/"}
      />
      <Card
        imageURL={dashboard}
        title={"Admin Dashboard"}
        desc={
          "CSS/HTML mockup of an admin dashboard, as part of The Odin Project"
        }
        live={"https://alexwittwer.github.io/admin-dashboard/"}
        repo={"https://github.com/alexwittwer/admin-dashboard/"}
      />
      <Card
        imageURL={tictactoe}
        title={"Naughts & Crosses"}
        desc={
          "Tic-Tac-Toe as an introduction to JavaScript, as part of The Odin Project"
        }
        live={"https://alexwittwer.github.io/naughts-and-crosses/"}
        repo={"https://github.com/alexwittwer/naughts-and-crosses/"}
      />
      <Card
        imageURL={booknerd}
        title={"BookNerd"}
        desc={"Library tracking app, as part of The Odin Project"}
        live={"https://alexwittwer.github.io/BookNerd/"}
        repo={"https://github.com/alexwittwer/BookNerd/"}
      />
      <Card
        imageURL={etchasketch}
        title={"Etch-a-Sketch"}
        desc={"Pixel etch-a-sketch, as part of The Odin Project"}
        live={"https://alexwittwer.github.io/etch-a-sketch/"}
        repo={"https://github.com/alexwittwer/etch-a-sketch/"}
      />
      <Card
        imageURL={todoer}
        title={"ToDoer"}
        desc={"Classic To Do list project, as part of The Odin Project"}
        live={"https://alexwittwer.github.io/ToDoer/"}
        repo={"https://github.com/alexwittwer/ToDoer/"}
      />
      <Card
        imageURL={odinrecipes}
        title={"Odin Recipes"}
        desc={
          "My first website and a reminder of where I came from. Part of The Odin Project"
        }
        live={"https://alexwittwer.github.io/odin-recipes/"}
        repo={"https://github.com/alexwittwer/odin-recipes/"}
      />
    </section>
  );
}

export default function Projects() {
  return (
    <main className="max-h-screen overflow-y-auto">
      <Portfolio />
    </main>
  );
}

Card.propTypes = {
  imageURL: PropTypes.any,
  title: PropTypes.string,
  live: PropTypes.string,
  repo: PropTypes.string,
  desc: PropTypes.string,
};
