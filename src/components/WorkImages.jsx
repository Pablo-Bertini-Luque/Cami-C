import React from "react";
import trabajo1 from "../assets/Trabajos/trabajo1.png";
import trabajo2 from "../assets/Trabajos/trabajo2.png";
import trabajo3 from "../assets/Trabajos/trabajo3.png";
import trabajo4 from "../assets/Trabajos/trabajo4.png";
import trabajo5 from "../assets/Trabajos/trabajo5.png";
import trabajo6 from "../assets/Trabajos/trabajo6.png";
import trabajo7 from "../assets/Trabajos/trabajo7.png";
import trabajo9 from "../assets/Trabajos/trabajo9.png";
import "../css/WorkImages.css";

function WorkImages() {
  const images = [
    trabajo1,
    trabajo2,
    trabajo3,
    trabajo4,
    trabajo5,
    trabajo6,
    trabajo7,
    trabajo9,
  ];

  return (
    <div>
      <section className="container">
        {images.map((image, index) => {
          return <img className="image" src={image} alt="" />;
        })}
      </section>
    </div>
  );
}

export default WorkImages;
