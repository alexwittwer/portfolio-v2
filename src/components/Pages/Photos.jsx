import { useInView } from "react-intersection-observer";
import photo1 from "../../assets/photo1.webp";
import photo2 from "../../assets/photo2.webp";
import photo3 from "../../assets/photo3.webp";
import photo5 from "../../assets/photo5.webp";
import photo6 from "../../assets/photo6.webp";
import photo7 from "../../assets/photo7.webp";
import photo8 from "../../assets/photo8.webp";
import photo9 from "../../assets/photo9.webp";
import photo10 from "../../assets/photo10.webp";
import photo11 from "../../assets/photo11.webp";

function PhotoWrapper({ children }) {
  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "150px",
  });

  return (
    <div
      ref={ref}
      className={`rounded-md flex justify-center items-center card ${
        inView ? "fade-in" : ""
      }`}
    >
      {children}
    </div>
  );
}

function Gallery() {
  return (
    <section
      id="Photos"
      className="grid grid-cols-1 gap-5 p-5 md:p-8 mx-auto justify-center items-center"
    >
      <PhotoWrapper>
        <img src={photo1} alt="a wildland firefighter covered in soot" />
      </PhotoWrapper>
      <PhotoWrapper>
        <img
          src={photo2}
          alt="a man stands on a stump amidst a smoke filled clearing"
        />
      </PhotoWrapper>
      <PhotoWrapper>
        <img
          src={photo3}
          alt="a partially-nude woman stands in front of a line of armed police officers"
        />
      </PhotoWrapper>
      <PhotoWrapper>
        <img
          src={photo11}
          alt="fireworks explode over a golf course in eastern oregon"
        />
      </PhotoWrapper>
      <PhotoWrapper>
        <img
          src={photo5}
          alt="a high school football player hypes up the team in the locker room"
        />
      </PhotoWrapper>
      <PhotoWrapper>
        <img
          src={photo6}
          alt="a police gathering renders a final salute to a flag-draped casket"
        />
      </PhotoWrapper>
      <PhotoWrapper>
        <img
          src={photo7}
          alt="an angry bull chases down a trio of bull fighters"
        />
      </PhotoWrapper>
      <PhotoWrapper>
        <img
          src={photo8}
          alt="a high school baseball player juggles three baseballs in the dugout"
        />
      </PhotoWrapper>
      <PhotoWrapper>
        <img
          src={photo9}
          alt="a high school football player makes a break through the herd to score a touchdown"
        />
      </PhotoWrapper>
      <PhotoWrapper>
        <img
          src={photo10}
          alt="a cross country runner splashes a mountain of mud during a race"
        />
      </PhotoWrapper>
      <PhotoWrapper>
        <img
          src={
            "https://m1.22slides.com/awittwer/60abd60798878-6285.image?f=webp&sh=2&w=990&s=551add4657b311fb1d70e7b023914d7a"
          }
          alt="a young boy offers up a skittle while wearing a firefighter costume"
        />
      </PhotoWrapper>
      <PhotoWrapper>
        <img
          src={
            "https://m1.22slides.com/awittwer/220205-fire-13-of-14-7248.jpg?f=webp&sh=2&w=1000&s=4c609f5af969b589c291c1f6732e585e"
          }
          alt="firefighters perform a sweep of a burned down house after fighting the fire for 3 hours"
        />
      </PhotoWrapper>
      <PhotoWrapper>
        <img
          src={
            "https://m1.22slides.com/awittwer/2020-1113-15134000-2-5870.jpg?f=webp&sh=2&w=1000&s=4a5fa39c343fd584b44aafb52731b959"
          }
          alt="a figure walks over a puddle on the street"
        />
      </PhotoWrapper>
      <PhotoWrapper>
        <img
          src={
            "https://m1.22slides.com/awittwer/dsc4046-1-e1574060892791-2-8868.jpg?f=webp&sh=2&w=1000&s=3de964c25516d2e6068931de1d718abd"
          }
          alt="a woman dances in the spotlight at a busy nightclub"
        />
      </PhotoWrapper>
    </section>
  );
}

export default function Photos() {
  return (
    <main className="max-h-screen overflow-y-auto">
      <Gallery />
    </main>
  );
}
