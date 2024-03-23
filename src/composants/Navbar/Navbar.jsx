import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const triggerPoint = 1010;

      setIsSticky(scrollY > triggerPoint);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isSticky ? "sticky" : ""}`}>
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
    </nav>
  );
}
