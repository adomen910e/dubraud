import React from 'react';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-brand-brown text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-script font-bold mb-4">Domaine de Dubraud</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Votre destination de choix pour la pension équine et l'hébergement de charme dans un cadre exceptionnel de 26 hectares.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={24} />
              </a>
              <a href="mailto:contact@domaine-dubraud.fr" className="text-gray-300 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
              <a href="tel:+33500000000" className="text-gray-300 hover:text-white transition-colors">
                <Phone size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Nos Services</h4>
            <ul className="space-y-2">
              <li><a href="#pension-retraite" className="text-amber-200 hover:text-white transition-colors">Pension Retraite</a></li>
              <li><a href="#pension-sport" className="text-amber-200 hover:text-white transition-colors">Pension Pré Sport</a></li>
              <li><a href="#pension-travail" className="text-amber-200 hover:text-white transition-colors">Pension Travail</a></li>
              <li><a href="#gite" className="text-amber-200 hover:text-white transition-colors">Gîte Rural</a></li>
              <li><a href="#chambres" className="text-amber-200 hover:text-white transition-colors">Chambres d'Hôtes</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="text-amber-200 space-y-2">
              <p>+33 5 XX XX XX XX</p>
              <p>contact@domaine-dubraud.fr</p>
              <p>Route de Dubraud<br />33XXX Votre Ville</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-amber-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-amber-200 text-sm">
              © 2025 Domaine de Dubraud. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-amber-200 hover:text-white text-sm transition-colors">Mentions légales</a>
              <a href="#" className="text-amber-200 hover:text-white text-sm transition-colors">Politique de confidentialité</a>
              <a href="#" className="text-amber-200 hover:text-white text-sm transition-colors">CGV</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
