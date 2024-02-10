import { useInView } from "react-intersection-observer";

export default function Tech() {
  const skills = [
    "Javascript",
    "HTML5",
    "CSS3",
    "React",
    "Node.js",
    "Git",
    "GitHub",
    "Express",
    "Redux",
    "MongoDB",
    "Vercel",
    "Vite",
    "Jest",
    "Vitest",
    "Pug/Jade",
    "SASS/SCSS",
    "TailwindCSS",
    "Adobe",
    "Figma",
    "RESTful API",
  ];

  function randomInt() {
    const num = Math.round(Math.random() * 3 + 5);
    return num;
  }

  // Fisher-Yates shuffle
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }

  return (
    <main className="flex flex-wrap place-items-center items-center justify-center max-w-prose mx-auto ">
      {shuffle(skills).map((skill) => {
        return (
          <span
            className={`mx-3 w-fit text-${randomInt()}xl ${
              randomInt() > 6 ? "text-yellow-500" : ""
            }`}
          >
            {skill}
          </span>
        );
      })}
    </main>
  );
}
