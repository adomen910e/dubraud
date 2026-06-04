import React, { Suspense, lazy } from 'react';
import { MotionConfig } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ui/ScrollToTop';

// Code-splitting par route : chaque page est chargée à la demande,
// ce qui réduit le JavaScript initial et améliore le LCP (Core Web Vitals).
const Home = lazy(() => import('./pages/Home'));
const Pensions = lazy(() => import('./pages/Pensions'));
const Installations = lazy(() => import('./pages/Installations'));
const ContactPage = lazy(() => import('./pages/Contact'));

function App() {
  return (
    // reducedMotion="user" : respecte la préférence système prefers-reduced-motion
    // sur toutes les animations framer-motion du site (accessibilité)
    <MotionConfig reducedMotion="user">
      <Router>
        <ScrollToTop />
        <Suspense fallback={<div className="min-h-screen bg-brand-cream" />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pensions" element={<Pensions />} />
            <Route path="/installations" element={<Installations />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </Router>
    </MotionConfig>
  );
}

export default App;
