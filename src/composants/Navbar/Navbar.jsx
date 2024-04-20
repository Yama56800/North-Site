import React, { useEffect, useState } from "react";
// Assurez-vous que le chemin est correct

export default function Navbar() {
  const [isSticky, setIsSticky] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Assurez-vous que cela bascule correctement

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

  const toggleMenu = () => {
    console.log("Menu button clicked"); // Pour voir si le clic est détecté
    setIsOpen(!isOpen); // Toggle l'état
    console.log("Menu is open:", !isOpen); // Pour voir l'état après le clic
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  const handleLinkClick = () => {
    document.querySelector(".nav-link").classList.remove("open");
    closeMenu();
  };

  return (
    <nav className={`navbar ${isSticky ? "sticky" : ""}`}>
      <button className="hamburger" onClick={toggleMenu}>
        &#9776;
      </button>
      <ul className={`navbar-nav ${isOpen ? "open" : ""}`}>
        <li className="nav-item">
          <a
            href="#starthistory"
            className="nav-link"
            onClick={handleLinkClick}
          >
            le commencement
          </a>
        </li>
        <li className="nav-item">
          <a href="#nineworlds" className="nav-link" onClick={handleLinkClick}>
            les 9 mondes
          </a>
        </li>
        <li className="nav-item">
          <a href="#God" className="nav-link" onClick={handleLinkClick}>
            Les Dieux
          </a>
        </li>
        <li className="nav-item">
          <a href="#viking" className="nav-link" onClick={handleLinkClick}>
            Les Viking
          </a>
        </li>
        <li className="nav-item">
          <a href="#magic" className="nav-link" onClick={handleLinkClick}>
            Magie et Rituels
          </a>
        </li>
        <li className="nav-item">
          <a
            href="#EndOfVikingEra"
            className="nav-link"
            onClick={handleLinkClick}
          >
            Fin de l'ère
          </a>
        </li>
        <li className="nav-item">
          <a href="#Archeologie" className="nav-link" onClick={handleLinkClick}>
            Archeologie
          </a>
        </li>
        <li className="nav-item">
          <a href="#art" className="nav-link" onClick={handleLinkClick}>
            Art et Literature
          </a>
        </li>
        <li className="nav-item">
          <a href="#culture" className="nav-link" onClick={handleLinkClick}>
            Culture moderne
          </a>
        </li>
        <li className="nav-item">
          <a href="#quizz" className="nav-link" onClick={handleLinkClick}>
            Quizz
          </a>
        </li>
      </ul>
    </nav>
  );
}
