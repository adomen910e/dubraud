import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pensions from './pages/Pensions';
import Installations from './pages/Installations';
import ContactPage from './pages/Contact';
import ColorShowcase from './components/examples/ColorShowcase';
import ScrollToTop from './components/ui/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pensions" element={<Pensions />} />
        <Route path="/installations" element={<Installations />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/colors" element={<ColorShowcase />} />
      </Routes>
    </Router>
  );
}

export default App;
