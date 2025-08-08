import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Clock, Shield, Heart } from 'lucide-react';
import Button from '../ui/Button';
import dubraud1 from '../../assets/images/dubraud_1.png';

const About = () => {
  const features = [
    // { icon: MapPin, title: "40 Hectares", description: "De prairies vallonnées" },
    // // { icon: Users, title: "4 Boxes", description: "Modernes et spacieux" },
    // { icon: Clock, title: "Nouveau", description: "Domaine équestre" },
    // { icon: Shield, title: "Surveillance", description: "24h/7j assurée" }
  ];

  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      {/* Éléments décoratifs de fond */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 right-10 w-64 h-64 bg-brand-neutral/20 rounded-full"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 360]
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-48 h-48 bg-brand-accent/10 rounded-full"
          animate={{ 
            scale: [1.1, 1, 1.1],
            rotate: [360, 0]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Contenu textuel */}
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center justify-center mb-6"
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring",
                stiffness: 400,
                damping: 15,
                delay: 0.2
              }}
            >
              <div className="p-3 bg-gradient-to-r from-brand-primary to-brand-accent rounded-2xl text-white shadow-glow">
                <Heart size={32} />
              </div>
            </motion.div>

            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary mb-8 font-serif leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Le Domaine de Dubraud
            </motion.h2>

            <motion.div 
              className="w-24 h-1 bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary mb-8"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.8 }}
            />

            <motion.p 
              className="text-gray-600 text-lg mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Situé dans un cadre exceptionnel, le Domaine de Dubraud vous accueille dans une propriété authentique où se mêlent tradition et modernité. Notre passion pour les chevaux et l'hospitalité nous guide dans notre mission : offrir à vos compagnons équins un environnement optimal et à vous-même un séjour inoubliable.
            </motion.p>

            <motion.p 
              className="text-gray-600 text-lg mb-10 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              Avec nos 40 hectares de prairies vallonnées, nos installations modernes et notre équipe expérimentée, nous garantissons le bien-être de vos chevaux tout en vous proposant un hébergement de qualité dans un cadre bucolique.
            </motion.p>
            
            {/* Statistiques avec animations - Masquées car le tableau features est vide */}
            {features.length > 0 && (
              <div className="grid grid-cols-2 gap-6 mb-10">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-4 bg-gradient-to-br from-brand-neutral/30 to-transparent rounded-2xl border border-brand-neutral/50"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: 0.8 + index * 0.1,
                      type: "spring",
                      stiffness: 400,
                      damping: 15
                    }}
                    whileHover={{ 
                      scale: 1.05,
                      y: -5
                    }}
                  >
                    <motion.div
                      className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-brand-primary to-brand-accent text-white rounded-xl mb-3"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <feature.icon size={24} />
                    </motion.div>
                    <div className="text-2xl font-bold text-brand-primary mb-1">{feature.title}</div>
                    <div className="text-gray-600 text-sm">{feature.description}</div>
                  </motion.div>
                ))}
              </div>
            )}
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <Button href="/contact" variant="gradient" size="lg">
                Découvrir nos prestations
              </Button>
            </motion.div>
          </motion.div>

          {/* Section image */}
          <motion.div 
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              <motion.div
                className="relative overflow-hidden rounded-4xl shadow-strong"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={dubraud1} 
                  alt="Domaine de Dubraud - Vue extérieure" 
                  className="w-full h-96 lg:h-128 object-cover"
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              {/* Badge flottant */}
              <motion.div 
                className="absolute -bottom-8 -right-8 bg-gradient-to-r from-brand-primary to-brand-accent text-white p-8 rounded-4xl shadow-glow"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: 1,
                  type: "spring",
                  stiffness: 400,
                  damping: 15
                }}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5
                }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold mb-1">2025</div>
                  <div className="text-sm opacity-90">Depuis</div>
                </div>
              </motion.div>

              {/* Éléments décoratifs flottants */}
              <motion.div
                className="absolute top-4 left-4 w-3 h-3 bg-brand-accent/60 rounded-full"
                animate={{ 
                  y: [0, -15, 0],
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  delay: 0
                }}
              />
              <motion.div
                className="absolute top-1/3 right-4 w-2 h-2 bg-white/80 rounded-full"
                animate={{ 
                  y: [0, -20, 0],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  delay: 1
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
