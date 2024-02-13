import { useEffect, useState } from "react";

export default function About() {
  const [profession, setProfession] = useState();

  useEffect(() => {
    titles.map((title, index) => {
      setTimeout(() => {
        setProfession(title);
      }, 1000 * index);
    });
  }, []);

  const titles = [
    "a Web Developer",
    "a Photographer",
    "a Mathematician",
    "a Veteran",
    "an Artist",
    "Alex Wittwer",
  ];

  return (
    <main className="flex h-screen flex-col gap-3 justify-center items-center text-center transition-all max-w-full">
      <h1 className="text-7xl">Hello,</h1>
      <div className="text-5xl">
        I'm <span className="bg-yellow-500 px-2">{profession}</span>
      </div>
    </main>
  );
}
