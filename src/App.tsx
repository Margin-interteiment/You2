import "./App.css";
import MainScreen from "./components/MainScreen/MainScreen";
import InfoScreen from "./components/InfoScreen/InfoScreen";
import AdvantagesScreen from "./components/AdvantagesScreen/AdvantagesScreen";
import ToolsScreen from "./components/ToolsScreen/ToolsScreen";
import FineScreen from "./components/FineScreen/FineScreen";
import SliderScreen from "./components/SliderScreen/SliderScreen";
import RequestScreen from "./components/RequestScreen/RequestScreen";
import DownloadScreen from "./components/DownloadScreen/DownloadScreen";
import Footer from "./components/Footer/Footer";
import { app } from "./firebase";

function App() {
  return (
    <div className="App">
      <MainScreen />
      <InfoScreen />
      <AdvantagesScreen />
      <ToolsScreen />
      <FineScreen />
      <SliderScreen />
      <RequestScreen />
      <DownloadScreen />
      <Footer />
    </div>
  );
}

export default App;
