import { useEffect, useState } from "react";
import "../styles/Home.css";

function Home() {

  const images = [
    "/images/hero/photo1.avif",
    "/images/hero/photo2.avif",
    "/images/hero/photo3.avif",
    "/images/hero/photo4.jpg",
    "/images/hero/photo5.jpg",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${images[currentImage]})`,
      }}
    >
      <div className="overlay">

        <h1>
          Transform Your Body
          <br />
          Transform Your Life
        </h1>

        <p>
          Personalized workout plans and diet guidance
          to help you reach your fitness goals.
        </p>

        <div className="buttons">

          <button className="start-btn">
            Start Training
          </button>

          <button className="explore-btn">
            Explore Plans
          </button>

        </div>

      </div>
    </div>
  );
}

export default Home;