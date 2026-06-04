import React from 'react';
import { MotionConfig } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Pensions from './pages/Pensions';
import Installations from './pages/Installations';
import ContactPage from './pages/Contact';
import ScrollToTop from './components/ui/ScrollToTop';

function App() {
  return (
    // reducedMotion="user" : respecte la préférence système prefers-reduced-motion
    // sur toutes les animations framer-motion du site (accessibilité)
    <MotionConfig reducedMotion="user">
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pensions" element={<Pensions />} />
          <Route path="/installations" element={<Installations />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Router>
    </MotionConfig>
  );
}

export default App;
