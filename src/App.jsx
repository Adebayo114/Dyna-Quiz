// App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WelcomePage from './Components/WelcomePage';
import About from './Components/About';
import DiffiSelection from './Components/DiffiSelection';
import LanguageSelection from './Components/LanguageSelection';
import Objectives from './Components/Objectives';
import Beginners from './Components/Beginners';
import Intermediate from './Components/Intermediate';
import Expert from './Components/Expert';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/language" element={<LanguageSelection />} />
        <Route path="/difficulty" element={<DiffiSelection />} />
        <Route path="/questions/:difficulty/:language" element={<Beginners />} />
        <Route path="/intermediate" element={<Intermediate />} />
        <Route path="/expert" element={<Expert />} />
        <Route path="/objectives" element={<Objectives />} />

      </Routes>
    </Router>
  );
}

export default App;
