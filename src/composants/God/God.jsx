import React from "react";
import { connect } from "react-redux";
import balder from "../../images/God/balder.webp";
import freya from "../../images/God/freya.webp";
import freyr from "../../images/God/freyr.webp";
import frigg from "../../images/God/frigg.webp";
import hel from "../../images/God/hel.webp";
import loki from "../../images/God/loki.webp";
import njord from "../../images/God/njord.webp";
import odin from "../../images/God/odin.webp";
import thor from "../../images/God/thor.webp";
import tyr from "../../images/God/tyr.webp";
import { selectSquare } from "../../store";

class HorizontalScrollMenu extends React.Component {
  constructor(props) {
    super(props);

    // Créer une liste de données pour les carrés
    this.state = {
      squares: [
        {
          id: 1,
          title: "Odin",
          description:
            "Le roi des dieux, dieu de la sagesse, de la guerre, de la poésie et de la magie.",
          imageUrl: odin,
        },
        {
          id: 2,
          title: "Thor",
          description:
            "Le dieu du tonnerre, du courage, de la force et de la protection.",
          imageUrl: thor,
        },
        {
          id: 3,
          title: "Tyr",
          description: "Le dieu du courage, de la justice et de la guerre.",
          imageUrl: tyr,
        },
        {
          id: 4,
          title: "Freya",
          description:
            "La déesse de l'amour, de la fertilité, de la guerre et de la magie.",
          imageUrl: freya,
        },
        {
          id: 5,
          title: "Loki",
          description:
            "Le dieu de la malice, de la ruse et du feu, souvent associé au chaos et à la tromperie.",
          imageUrl: loki,
        },
        {
          id: 6,
          title: "Hel",
          description:
            "La déesse du royaume des morts, où une partie des âmes des morts est destinée après leur décès.",
          imageUrl: hel,
        },
        {
          id: 7,
          title: "Frigg",
          description:
            "La reine des dieux, déesse du mariage, de la maternité et de la sagesse.",
          imageUrl: frigg,
        },
        {
          id: 8,
          title: "Freyr",
          description:
            " Le dieu de la fertilité, de la prospérité, de la paix et du beau temps.",
          imageUrl: freyr,
        },
        {
          id: 9,
          title: "Njord",
          description: " Le dieu de la mer, de la navigation et de la pêche.",
          imageUrl: njord,
        },
        {
          id: 10,
          title: "Balder",
          description:
            " Le dieu de la lumière, de la beauté et de l'innocence.",
          imageUrl: balder,
        },
      ],
    };
  }

  handleScroll = (e) => {
    e.preventDefault(); // Empêche le défilement de la page entière

    // Calculer le défilement horizontal basé sur le delta Y de la molette
    const scrollSpeedFactor = 6;
    const container = document.getElementById("scroll-container");
    const scrollAmount = e.deltaY * scrollSpeedFactor;
    container.scrollLeft += scrollAmount;
  };

  // Ajouter un gestionnaire pour activer/désactiver l'empêchement du scroll
  componentDidMount() {
    document
      .getElementById("scroll-container")
      .addEventListener("wheel", this.handleScroll, { passive: false });
  }

  componentWillUnmount() {
    document
      .getElementById("scroll-container")
      .removeEventListener("wheel", this.handleScroll);
  }
  changecontainer = () => {
    document.getElementById("square").addEventListener("click");
  };
  render() {
    return (
      <div className="god-container">
        <h1>Les Dieux Nordiques</h1>
        <div id="scroll-container" className="scroll-container">
          {this.state.squares.map((square) => (
            <div
              className="square"
              key={square.id}
              onClick={() => this.props.selectSquare(square.id)}
            >
              <div className="description">
                <h3 id="god-title">{square.title}</h3>
                <p>{square.description}</p>
              </div>
              <img src={square.imageUrl} alt={`Image of ${square.title}`} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  selectSquare,
};

export default connect(null, mapDispatchToProps)(HorizontalScrollMenu);
