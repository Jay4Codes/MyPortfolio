import Home from "./components/Home";
import Skill from "./components/Skill";
import WebDev from "./components/WebDev";
import About from "./components/About";
import TitleSkill from "./components/TitleSkill";
import DataAnal from "./components/DataAnal";
import DeepEngg from "./components/DeepEngg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoMatch from "./components/NoMatch";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/skills" element={<Skill />} />

          <Route path="/skills/web-developer" element={<WebDev />} />

          <Route path="/skills/data-analyst" element={<DataAnal />} />

          <Route path="/skills/deeplearning-engg" element={<DeepEngg />} />

          <Route path="/skills/graphic-designer" element={<TitleSkill />} />

          <Route path="/skills/3d-artist" element={<TitleSkill />} />

          <Route path="/skills/vfx-artist" element={<TitleSkill />} />

          <Route path="/skills/ui-designer" element={<TitleSkill />} />

          <Route path="/about" element={<About />} />

          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
