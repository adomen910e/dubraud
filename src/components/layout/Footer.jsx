import React from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Mail, Phone, MapPin, Heart, Star } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Mail, href: "mailto:contact@domaine-dubraud.fr", label: "Email" },
    { icon: Phone, href: "tel:+33500000000", label: "Téléphone" }
  ];

  const services = [
    "Pension Retraite",
    "Pension Pré Sport", 
    "Pension Travail",
    "Gîte Rural",
    "Chambres d'Hôtes"
  ];

  return (
    <footer className="relative bg-gradient-to-br from-brand-brown via-brand-dark-brown to-brand-brown text-white overflow-hidden">
      {/* Éléments décoratifs de fond */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-20 -right-20 w-40 h-40 bg-brand-gold/10 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-10 -left-10 w-32 h-32 bg-brand-beige/5 rounded-full"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 0]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Section principale */}
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="flex items-center mb-6"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-2 bg-gradient-to-r from-brand-gold to-brand-beige rounded-xl mr-4">
                <Heart size={32} className="text-brand-brown" />
              </div>
              <div>
                <h3 className="text-3xl font-serif font-bold">Domaine de Dubraud</h3>
                <p className="text-brand-beige/80 text-sm">Passion & Excellence</p>
              </div>
            </motion.div>
            
            <motion.p 
              className="text-brand-beige/90 mb-8 leading-relaxed text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Votre destination de choix pour la pension équine et l'hébergement de charme dans un cadre exceptionnel de 26 hectares.
            </motion.p>
            
            {/* Réseaux sociaux */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="group relative p-3 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-brand-gold/20 transition-all duration-300"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: 0.3 + index * 0.1,
                    type: "spring",
                    stiffness: 400,
                    damping: 15
                  }}
                  whileHover={{ 
                    scale: 1.1,
                    y: -5
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={24} className="text-brand-beige group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <div className="flex items-center mb-6">
              <Star size={24} className="text-brand-gold mr-2" />
              <h4 className="text-xl font-semibold">Nos Services</h4>
            </div>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <div className="group flex items-center text-brand-beige/80 hover:text-brand-gold transition-colors duration-300">
                    <motion.div
                      className="w-2 h-2 bg-brand-gold rounded-full mr-3 group-hover:scale-125 transition-transform"
                      whileHover={{ scale: 1.5 }}
                    />
                    {service}
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="flex items-center mb-6">
              <Phone size={24} className="text-brand-gold mr-2" />
              <h4 className="text-xl font-semibold">Contact</h4>
            </div>
            <div className="space-y-4">
              <motion.div 
                className="flex items-start space-x-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Phone size={18} className="text-brand-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-brand-beige/90 font-medium">+33 5 XX XX XX XX</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start space-x-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Mail size={18} className="text-brand-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-brand-beige/90">contact@domaine-dubraud.fr</p>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-start space-x-3"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.3 }}
              >
                <MapPin size={18} className="text-brand-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-brand-beige/90">17 Lieu-dit Dubraud</p>
                  <p className="text-brand-beige/90">33920 Saint-Christoly-de-Blaye</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Section Map */}
        <motion.div 
          className="mt-16 mb-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="text-center mb-8">
            <h4 className="text-2xl font-semibold mb-4">Nous Trouver</h4>
            <p className="text-brand-beige/80">17 Lieu-dit Dubraud, 33920 Saint-Christoly-de-Blaye</p>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-strong">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2825.123456789!2d-0.5123456!3d45.1234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDA3JzI0LjQiTiAwwrAzMCc0NC40Ilc!5e0!3m2!1sfr!2sfr!4v1234567890123!5m2!1sfr!2sfr"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation Domaine de Dubraud"
              className="w-full"
            ></iframe>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
          </div>
        </motion.div>
        
        {/* Ligne de séparation */}
        <motion.div 
          className="border-t border-brand-gold/20 mt-12 pt-8"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <motion.p 
              className="text-brand-beige/80 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
            >
              © 2025 Domaine de Dubraud. Tous droits réservés.
            </motion.p>
            
            <motion.div 
              className="flex space-x-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1 }}
            >
              {["Mentions légales", "Politique de confidentialité", "CGV"].map((link, index) => (
                <motion.a 
                  key={index}
                  href="#" 
                  className="text-brand-beige/80 hover:text-brand-gold text-sm transition-colors duration-300"
                  whileHover={{ y: -2 }}
                >
                  {link}
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
