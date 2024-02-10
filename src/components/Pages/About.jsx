import { useEffect, useState } from "react";

export default function About() {
  const [profession, setProfession] = useState();

  useEffect(() => {
    titles.map((title, index) => {
      setTimeout(() => {
        setProfession(title);
      }, 2000 * index);
    });
  }, []);

  const titles = [
    "a Full-Stack Web Developer",
    "a Photographer",
    "a Mathematician",
    "an Artist",
    "a Designer",
    "Alex Wittwer",
  ];

  return (
    <main className="flex h-screen flex-col gap-3 justify-center items-center transition-all">
      <h1 className="text-4xl">Hello,</h1>
      <div className="text-4xl">
        I'm{" "}
        <span className="bg-yellow-500 px-2 transition-all ">{profession}</span>
      </div>
    </main>
  );
}
