import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
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
    { label: 'HÉBERGEMENT', path: '/hebergement' },
    { label: 'CONTACT', path: '/contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <motion.header 
      className={`fixed w-full top-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-strong py-2' 
          : 'bg-brand-cream/90 backdrop-blur-sm shadow-soft py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo avec animation */}
          <Link to="/" className="flex-shrink-0 flex items-center group">
            <motion.img 
              src={logo} 
              alt="Logo Domaine de Dubraud" 
              className={`w-auto transition-all duration-500 ${
                isScrolled ? 'h-16 lg:h-20' : 'h-20 lg:h-24'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
            <motion.div 
              className="ml-3 hidden lg:block"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-brand-brown font-serif text-lg font-semibold">
                Pension & Hébergement Équestre
              </p>
            </motion.div>
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden lg:flex space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
              >
                <Link 
                  to={item.path} 
                  className={`relative px-4 py-2 font-semibold text-sm tracking-wide transition-all duration-300 rounded-lg group ${
                    isActive(item.path)
                      ? 'text-brand-brown bg-brand-beige/50'
                      : 'text-brand-brown hover:text-brand-gold hover:bg-brand-beige/30'
                  }`}
                >
                  {item.label}
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-gold origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isActive(item.path) ? 1 : 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Menu mobile button */}
          <motion.button
            className="lg:hidden relative z-50 p-2 rounded-lg bg-brand-beige/20 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
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

      {/* Menu mobile avec animations */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md border-t border-brand-beige shadow-strong"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <Link 
                    to={item.path}
                    className={`block px-4 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      isActive(item.path)
                        ? 'text-brand-brown bg-brand-beige text-center'
                        : 'text-brand-brown hover:bg-brand-beige/50 hover:text-brand-gold'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
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
