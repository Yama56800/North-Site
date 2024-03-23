import React, { useEffect, useState } from "react";

export default function NavbarFloat() {
  const [isVisible, setIsVisible] = useState(false); // Initialisé sur false pour cacher la navbar au chargement
  const [lastScrollY, setLastScrollY] = useState(0); // État pour garder la trace de la dernière position de défilement

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 1000) {
        // Seulement appliquer la logique de visibilité après 1000px de défilement
        setIsVisible(currentScrollY < lastScrollY);
      } else {
        setIsVisible(false); // La navbar reste cachée dans les 1000 premiers pixels
      }

      setLastScrollY(currentScrollY); // Met à jour la dernière position de défilement
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]); /// Dépendance à lastScrollY pour se mettre à jour à chaque scroll

  return (
    <nav className={`NavbarFloat ${!isVisible ? "hidden" : ""}`}>
      {" "}
      {/* Ajoutez une classe "hidden" pour contrôler l'affichage */}
      <div className="NavbarFloat-content">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#starthistory" className="nav-link">
              le commencement
            </a>
          </li>
          <li className="nav-item">
            <a href="#nineworlds" className="nav-link">
              les 9 mondes
            </a>
          </li>
          <li className="nav-item">
            <a href="#God" className="nav-link">
              Les Dieux
            </a>
          </li>
          <li className="nav-item">
            <a href="#viking" className="nav-link">
              Les Viking
            </a>
          </li>
          <li className="nav-item">
            <a href="#magic" className="nav-link">
              Magie et Rituels
            </a>
          </li>
          <li className="nav-item">
            <a href="#EndOfVikingEra" className="nav-link">
              Fin de l'ère
            </a>
          </li>
          <li className="nav-item">
            <a href="#Archeologie" className="nav-link">
              Archeologie
            </a>
          </li>
          <li className="nav-item">
            <a href="#art" className="nav-link">
              Art et Literature
            </a>
          </li>
          <li className="nav-item">
            <a href="#culture" className="nav-link">
              Culture moderne
            </a>
          </li>
          <li className="nav-item">
            <a href="#quizz" className="nav-link">
              Quizz
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
