import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfileCard from "./components/ProfileCard";
import Projects from "./components/Projects";
import About from "./components/About";
import Contactme from "./components/Contactme";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProfileCard />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contactme />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
