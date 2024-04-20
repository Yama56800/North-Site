import React, { useEffect, useRef } from "react";
import bg from "../../images/homebackground.webp";

export default function About() {
  const h1Ref = useRef(null);

  useEffect(() => {
    const h1 = h1Ref.current;
    if (h1) {
      // Enveloppe chaque lettre dans un <span>
      h1.innerHTML = h1.textContent
        .split("")
        .map((char) => `<span>${char}</span>`)
        .join("");
    }
  }, []);

  return (
    <div className="out-about">
      <div className="about" id="presentation">
        <img src={bg} alt="Background de la mythologie nordique" />
        <h1 className="aboutH1">
          <div className="word">
            <span>L</span>
            <span>a</span>
          </div>
          <div className="word">
            <span>m</span>
            <span>y</span>
            <span>t</span>
            <span>h</span>
            <span>o</span>
            <span>l</span>
            <span>o</span>
            <span>g</span>
            <span>i</span>
            <span>e</span>
          </div>
          <div className="word">
            <span>N</span>
            <span>o</span>
            <span>r</span>
            <span>d</span>
            <span>i</span>
            <span>q</span>
            <span>u</span>
            <span>e</span>
          </div>
        </h1>
      </div>
    </div>
  );
}
