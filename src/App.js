import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pensions from './pages/Pensions';
import Installations from './pages/Installations';
import Hebergement from './pages/Hebergement';
import ContactPage from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pensions" element={<Pensions />} />
        <Route path="/installations" element={<Installations />} />
        <Route path="/hebergement" element={<Hebergement />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
