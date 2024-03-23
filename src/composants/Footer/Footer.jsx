import React from "react";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <p>
          © {new Date().getFullYear()} Mythologie Nordique. Tous droits
          réservés.
        </p>
        <ul className="footer-links">
          <li>
            <a href="#!">À propos</a>
          </li>
          <li>
            <a href="#!">Contact</a>
          </li>
          <li>
            <a href="#!">Mentions légales</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
