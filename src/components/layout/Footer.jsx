import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Mail, href: "mailto:contact@domaine-dubraud.fr", label: "Email" },
    { icon: Phone, href: "tel:+33500000000", label: "Téléphone" }
  ];

  return (
    <footer className="bg-brand-brown text-white">
      {/* Ligne décorative supérieure */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-brand-gold to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
          
          {/* Logo et nom */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-serif font-bold text-brand-gold mb-2">
              Domaine de Dubraud
            </h3>
            <p className="text-brand-beige/80 text-sm">
              Passion & Excellence Équestre
            </p>
          </div>
          
          {/* Contact essentiel */}
          <div className="text-center">
            <div className="space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <Phone size={16} className="text-brand-gold" />
                <span className="text-brand-beige text-sm">+33 5 XX XX XX XX</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Mail size={16} className="text-brand-gold" />
                <span className="text-brand-beige text-sm">contact@domaine-dubraud.fr</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <MapPin size={16} className="text-brand-gold" />
                <span className="text-brand-beige text-sm">Saint-Christoly-de-Blaye</span>
              </div>
            </div>
          </div>
          
          {/* Mini carte */}
          <div className="flex justify-center">
            <div className="relative w-48 h-32 rounded-lg overflow-hidden border-2 border-brand-gold/30 hover:border-brand-gold/60 transition-colors duration-300">
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
          
          {/* Réseaux sociaux */}
          <div className="flex justify-center md:justify-end space-x-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                className="p-2 bg-white/10 rounded-lg hover:bg-brand-gold/20 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon size={18} className="text-brand-beige hover:text-white transition-colors duration-300" />
              </motion.a>
            ))}
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
