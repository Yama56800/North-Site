import "./App.css";
import AboutGod from "./composants/AboutGod/AboutGod";
import ArtAndLiterature from "./composants/ArtAndLiterature/ArtAndLiterature";
import Home from "./composants/Home/Home";
import LastVikings from "./composants/LastVikings/LastVikings";
import Magic from "./composants/Magic/Magic";
import ModernCulture from "./composants/ModernCulture/ModernCulture";
import Header from "./composants/Navbar/Navbar";
import NavbarFloat from "./composants/NavbarFloat/NavbarFloat";
import NineWorlds from "./composants/NineWorlds/NineWorlds";
import Quizz from "./composants/Quizz/Quizz";
import StartHistory from "./composants/StartHistory/StartHistory";
import VikingArchaeology from "./composants/VikingArchaeology/VikingArchaeology";
import Vikings from "./composants/Vikings/Vikings";

import Footer from "./composants/Footer/Footer";
function App() {
  return (
    <div className="App">
      <Header />
      <NavbarFloat />
      <Home />
      <StartHistory />
      <NineWorlds />
      <AboutGod />
      <Vikings />
      <Magic />
      <LastVikings />
      <VikingArchaeology />
      <ArtAndLiterature />
      <ModernCulture />
      <Quizz />

      <Footer />
    </div>
  );
}

export default App;
