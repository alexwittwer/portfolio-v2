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

  const fontsizes = ["text-3xl", "text-4xl", "text-5xl"];

  function randomInt() {
    const num = Math.round(Math.random() * 10);
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
    <main className="flex flex-wrap py-40 gap-5 h-screen justify-center max-w-prose mx-auto overflow-y-hidden overflow-x-hidden ">
      {shuffle(skills).map((skill) => {
        return (
          <span
            className={`mx-3 cursor-default hover:scale-110 w-fit ${
              shuffle(fontsizes)[0]
            } ${randomInt() > 6 ? "text-yellow-500" : ""}`}
          >
            {skill}
          </span>
        );
      })}
    </main>
  );
}
