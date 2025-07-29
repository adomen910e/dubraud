import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../../assets/images/logo.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'ACCUEIL', path: '/' },
    { label: 'PENSIONS', path: '/pensions' },
    { label: 'INSTALLATIONS', path: '/installations' },
    // { label: 'HÉBERGEMENT', path: '/hebergement' },
    { label: 'CONTACT', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  const handleNavClick = () => {
    // Scroll vers le haut de la page
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.header 
      className={`fixed w-full top-0 z-50 transition-all duration-700 ${
        isScrolled 
          ? 'bg-white/98 backdrop-blur-xl shadow-strong py-2' 
          : 'bg-gradient-to-b from-brand-cream/98 to-brand-cream/95 backdrop-blur-xl shadow-soft py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {/* Overlay pour améliorer la lisibilité */}
      <div className={`absolute inset-0 transition-all duration-700 ${
        isScrolled 
          ? 'bg-white/20' 
          : 'bg-gradient-to-b from-white/30 to-white/20'
      }`} />
      {/* Ligne décorative supérieure */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-brown via-brand-gold to-brand-brown"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo avec animation améliorée */}
          <Link to="/" onClick={handleNavClick} className="flex-shrink-0 flex items-center group">
            <motion.div
              className="relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.img 
                src={logo} 
                alt="Logo Domaine de Dubraud" 
                className={`w-auto transition-all duration-700 ${
                  isScrolled ? 'h-16 lg:h-20' : 'h-20 lg:h-24'
                }`}
              />
              {/* Effet de brillance au hover */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                initial={{ x: '-100%' }}
                whileHover={{ x: '200%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>
            
            <motion.div 
              className="ml-4 hidden lg:block relative z-10"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <motion.p 
                className="text-brand-brown font-serif text-lg font-semibold leading-tight drop-shadow-sm"
                style={{ textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)' }}
                whileHover={{ color: "#D97706" }}
                transition={{ duration: 0.3 }}
              >
                Domaine de Dubraud
              </motion.p>
              <motion.p 
                className="text-brand-brown/90 text-sm font-medium drop-shadow-sm"
                style={{ textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                Pension & Hébergement Équestre
              </motion.p>
            </motion.div>
          </Link>

          {/* Navigation desktop améliorée */}
          <nav className="hidden lg:flex space-x-2 relative z-10">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link 
                  to={item.path} 
                  onClick={handleNavClick}
                  className={`relative px-5 py-3 font-semibold text-sm tracking-wide transition-all duration-300 rounded-xl group ${
                    isActive(item.path)
                      ? 'text-brand-brown bg-white/20 backdrop-blur-sm border border-brand-brown/20 shadow-sm'
                      : 'text-brand-brown hover:text-brand-brown hover:bg-white/15 hover:backdrop-blur-sm hover:border hover:border-brand-brown/15'
                  }`}
                  style={{ textShadow: '0 1px 2px rgba(255, 255, 255, 0.8)' }}
                >
                  <span className="relative z-10">{item.label}</span>
                  
                  {/* Indicateur actif simplifié */}
                  {isActive(item.path) && (
                    <motion.div
                      className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-0.5 bg-brand-brown rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Menu mobile button amélioré */}
          <motion.button
            className="lg:hidden relative z-50 p-3 rounded-xl bg-gradient-to-r from-brand-beige/60 to-brand-cream/60 backdrop-blur-sm border border-brand-beige/70 shadow-soft"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} className="text-brand-brown" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} className="text-brand-brown" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>

      {/* Menu mobile avec animations améliorées */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 w-full bg-white backdrop-blur-xl border-t border-brand-beige/50 shadow-strong"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
          >
            {/* Overlay supplémentaire pour garantir l'opacité sur mobile */}
            <div className="absolute inset-0 bg-white/95" />
            
            <div className="px-6 py-8 space-y-3 relative z-10">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link 
                    to={item.path}
                    className={`block px-6 py-4 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden group ${
                      isActive(item.path)
                        ? 'text-white bg-gradient-to-r from-brand-brown to-brand-gold shadow-lg'
                        : 'text-brand-brown hover:text-white hover:bg-gradient-to-r hover:from-brand-brown/90 hover:to-brand-gold/90 bg-white/80 border border-brand-brown/10'
                    }`}
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      handleNavClick();
                    }}
                  >
                    <span className="relative z-10 flex items-center justify-center font-bold">
                      {item.label}
                      {isActive(item.path) && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          <Sparkles size={16} className="ml-2" />
                        </motion.div>
                      )}
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
