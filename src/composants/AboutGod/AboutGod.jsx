// ParentComponent.js
import React from "react";
import { connect } from "react-redux";
import God from "./../God/God";
import AboutBalder from "./AboutBalder/AboutBalder";
import AboutFreya from "./AboutFreya/AboutFreya";
import AboutFreyr from "./AboutFreyr/AboutFreyr";
import AboutFrigg from "./AboutFrigg/AboutFrigg";
import AboutHel from "./AboutHel/AboutHel";
import AboutLoki from "./AboutLoki/AboutLoki";
import AboutNjord from "./AboutNjord/AboutNjord";
import AboutOdin from "./AboutOdin/AboutOdin";
import AboutThor from "./AboutThor/AboutThor";
import AboutTyr from "./AboutTyr/AboutTyr";

const ParentComponent = ({ selectedId }) => {
  // Fonction pour déterminer quel composant de description afficher
  const renderDescription = () => {
    switch (selectedId) {
      case 1:
        return <AboutOdin />;
      case 2:
        return <AboutThor />;
      case 3:
        return <AboutTyr />;
      case 4:
        return <AboutFreya />;
      case 5:
        return <AboutLoki />;
      case 6:
        return <AboutHel />;
      case 7:
        return <AboutFrigg />;
      case 8:
        return <AboutFreyr />;
      case 9:
        return <AboutNjord />;
      case 10:
        return <AboutBalder />;

      // Ajoutez d'autres cases pour les autres dieux nordiques ici
      default:
        return <div className="about-context">Cliquer sur une card</div>;
    }
  };

  return (
    <div className="God" id="God">
      <div className="God-content">
        <God />
        {renderDescription()}
      </div>
    </div>
  );
};

// Connecter le composant à Redux pour accéder à l'ID sélectionné
const mapStateToProps = (state) => ({
  selectedId: state.selectedId, // Assurez-vous que ce chemin correspond à votre structure de state Redux
});

export default connect(mapStateToProps)(ParentComponent);
