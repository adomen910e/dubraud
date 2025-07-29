import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import NavigationDropdown from '../ui/NavigationDropdown';
import logo from '../../assets/images/logo.png';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const pensionsItems = [
    { label: 'Pension Retraite', href: '#pension-retraite' },
    { label: 'Pension Pré Sport', href: '#pension-sport' },
    { label: 'Pension Travail', href: '#pension-travail' }
  ];

  const hebergementItems = [
    { label: 'Gîte', href: '#gite' },
    { label: 'Chambres d\'Hôtes', href: '#chambres' }
  ];

  return (
    <header className="bg-brand-beige shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center hover:opacity-80 transition-opacity">
            <img 
              src={logo} 
              alt="Logo Domaine de Dubraud" 
              className="h-20 lg:h-36 xl:h-40 w-auto transition-all duration-300"
            />
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden lg:flex space-x-8">
            <Link to="/" className="text-brand-brown hover:text-brand-light-brown font-semibold transition-colors hover:scale-105 transform duration-200">
              ACCUEIL
            </Link>
            <Link to="/pensions" className="text-brand-brown hover:text-brand-light-brown font-semibold transition-colors hover:scale-105 transform duration-200">
              PENSIONS
            </Link>
            <Link to="/installations" className="text-brand-brown hover:text-brand-light-brown font-semibold transition-colors hover:scale-105 transform duration-200">
              INSTALLATIONS
            </Link>
            <Link to="/hebergement" className="text-brand-brown hover:text-brand-light-brown font-semibold transition-colors hover:scale-105 transform duration-200">
              HÉBERGEMENT
            </Link>
            <Link to="/contact" className="text-brand-brown hover:text-brand-light-brown font-semibold transition-colors hover:scale-105 transform duration-200">
              CONTACT
            </Link>
          </nav>

          {/* Menu mobile button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-brand-brown hover:text-brand-light-brown p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      <div className={`lg:hidden bg-white border-t transition-all duration-300 ${
        isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
      }`}>
        <div className="px-4 py-2 space-y-1">
          <Link to="/" className="block px-3 py-2 text-brand-brown hover:bg-brand-beige rounded transition-colors">
            ACCUEIL
          </Link>
          <Link to="/pensions" className="block px-3 py-2 text-brand-brown hover:bg-brand-beige rounded transition-colors">
            PENSIONS
          </Link>
          <Link to="/installations" className="block px-3 py-2 text-brand-brown hover:bg-brand-beige rounded transition-colors">
            INSTALLATIONS
          </Link>
          <Link to="/hebergement" className="block px-3 py-2 text-brand-brown hover:bg-brand-beige rounded transition-colors">
            HÉBERGEMENT
          </Link>
          <Link to="/contact" className="block px-3 py-2 text-brand-brown hover:bg-brand-beige rounded transition-colors">
            CONTACT
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
