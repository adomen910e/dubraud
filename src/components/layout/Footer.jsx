import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Mail, href: "mailto:contact@domaine-dubraud.fr", label: "Email" },
    { icon: Phone, href: "tel:+33 6 95 42 84 77", label: "Téléphone" }
  ];

  return (
    <footer className="bg-brand-brown text-white">
      {/* Ligne décorative supérieure */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          
          {/* Logo et nom */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif font-bold text-brand-gold mb-3">
              Domaine de Dubraud
            </h3>
            <p className="text-brand-beige/80 text-sm mb-4">
              Passion & Excellence Équestre
            </p>
            <p className="text-brand-beige/70 text-xs leading-relaxed">
              Un domaine familial dédié au bien-être équin et à l'accueil authentique.
            </p>
          </div>
          
          {/* Contact essentiel */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-brand-gold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Phone size={16} className="text-brand-gold flex-shrink-0" />
                <span className="text-brand-beige text-sm">+33 6 95 42 84 77</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Mail size={16} className="text-brand-gold flex-shrink-0" />
                <span className="text-brand-beige text-sm">contact@domaine-dubraud.fr</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <MapPin size={16} className="text-brand-gold flex-shrink-0" />
                <span className="text-brand-beige text-sm">Saint-Christoly-de-Blaye</span>
              </div>
            </div>
          </div>
          
          {/* Mini carte */}
          <div className="flex justify-center">
            <div className="w-full max-w-xs">
              <h4 className="text-lg font-semibold text-brand-gold mb-4 text-center">Localisation</h4>
              <div className="relative w-full h-32 rounded-lg overflow-hidden border-2 border-brand-gold/30 hover:border-brand-gold/60 transition-colors duration-300">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2825.123456789!2d-0.5123456!3d45.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDA3JzI0LjQiTiAwwrAzMCc0NC40Ilc!5e0!3m2!1sfr!2sfr!4v1234567890123!5m2!1sfr!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Mini carte Domaine de Dubraud"
                  className="w-full h-full object-cover"
                ></iframe>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
              </div>
            </div>
          </div>
          
          {/* Réseaux sociaux */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-brand-gold mb-4">Suivez-nous</h4>
            <div className="flex justify-center md:justify-start space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="p-3 bg-white/10 rounded-lg hover:bg-brand-gold/20 transition-colors duration-300 group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  title={social.label}
                >
                  <social.icon size={18} className="text-brand-beige group-hover:text-white transition-colors duration-300" />
                </motion.a>
              ))}
            </div>
            <p className="text-brand-beige/70 text-xs mt-4">
              Restez informé de nos actualités et événements
            </p>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-brand-gold/20 mt-6 pt-6 text-center">
          <p className="text-brand-beige/70 text-sm">
            © 2025 Domaine de Dubraud. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
