import React from 'react';
import { motion } from 'framer-motion';
import { Home, Building, Star, Users, MapPin, Heart, Sparkles } from 'lucide-react';
import ServiceCard from '../ui/ServiceCard';
import AnimatedSection from '../ui/AnimatedSection';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Pension Pré Repos",
      description: "Un environnement calme et naturel pour vos chevaux au repos/retraite/élevage, avec soins adaptés et surveillance quotidienne.",
      features: ["Vie en troupeau", "Présence sur site 24h/7j", "Foin à volonté", "Rotation de prairie"]
    },
    {
      icon: Users,
      title: "Pension Pré Sport",
      description: "Une vie en exterieur associée à un abri stabilisé et une proximité des installations pour associer travail et bien-être",
      features: ["Paddocks individuels ou duo", "Accès aux installations", "Foin à volonté", "Deux rations par jour"]    },
    {
      icon: Star,
      title: "Pension Boxe",
      description: "Des boxes spacieux avec libre accès sur les paddocks.",
      features: ["Boxes 4x3m", "Accès aux installations", "Foin à volonté", "Deux rations par jour"]
    },
    // {
    //   icon: Building,
    //   title: "Gîte Rural",
    //   description: "Hébergement de charme dans une propriété authentique, idéal pour les familles.",
    //   features: ["Capacité 6-8 personnes", "Cuisine équipée", "Terrasse privée"]
    // },
    // {
    //   icon: Heart,
    //   title: "Chambres d'Hôtes",
    //   description: "Chambres confortables avec petit-déjeuner dans un cadre bucolique.",
    //   features: ["3 chambres disponibles", "Petit-déjeuner inclus", "Vue sur les prairies"]
    // },
    // {
    //   icon: MapPin,
    //   title: "Cadre Exceptionnel",
    //   description: "40 hectares de prairies vallonnées dans un environnement préservé.",
    //   features: ["Prairies vallonnées", "Espaces boisés", "Abreuvoirs automatiques"]
    // }
  ];

  return (
    <section id="services" className="relative py-20 md:py-32 bg-gradient-to-br from-gray-50 via-brand-cream/30 to-gray-50 overflow-hidden">
      {/* Éléments décoratifs de fond */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-brand-gold/5 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-brown/5 rounded-full"
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* En-tête de section avec animations */}
        <AnimatedSection className="text-center mb-20" animation="fadeInUp">
          <motion.div
            className="inline-flex items-center justify-center mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ 
              type: "spring",
              stiffness: 400,
              damping: 15,
              delay: 0.2
            }}
          >
            <div className="p-3 bg-gradient-to-r from-brand-brown to-brand-gold rounded-2xl text-white shadow-glow">
              <Sparkles size={32} />
            </div>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-brown mb-6 font-serif"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Nos Prestations
          </motion.h2>

          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-brand-brown via-brand-gold to-brand-brown mx-auto mb-8"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />

          <motion.p 
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Découvrez nos différentes prestations adaptées à vos besoins et ceux de vos chevaux. 
            Chaque service est conçu avec passion pour offrir le meilleur à nos pensionnaires.
          </motion.p>
        </AnimatedSection>

        {/* Grille de services avec animations échelonnées */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Section statistiques avec animations */}
        <AnimatedSection 
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8"
          animation="fadeInUp"
          delay={0.8}
        >
          {[
            { number: "45", label: "Hectares au total", icon: MapPin },
            //{ number: "4", label: "Hectares par pré", icon: Home },
            { number: "2025", label: "Nouvelle activité", icon: Star },
            { number: "100%", label: "Satisfaction", icon: Heart }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300"
              whileHover={{ 
                scale: 1.05,
                y: -5
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: 0.9 + index * 0.1,
                type: "spring",
                stiffness: 400,
                damping: 15
              }}
            >
              <motion.div
                className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-brand-brown to-brand-gold text-white rounded-xl mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
              >
                <stat.icon size={24} />
              </motion.div>
              
              <motion.div 
                className="text-3xl md:text-4xl font-bold text-brand-brown mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: 1 + index * 0.1,
                  type: "spring",
                  stiffness: 400,
                  damping: 10
                }}
              >
                {stat.number}
              </motion.div>
              
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </AnimatedSection>

        {/* Call to action avec animation */}
        <AnimatedSection 
          className="text-center mt-20"
          animation="fadeInUp"
          delay={1.2}
        >
          <motion.div
            className="bg-gradient-to-r from-brand-brown to-brand-gold p-12 rounded-4xl text-white shadow-strong relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            {/* Effet de particules */}
            <motion.div
              className="absolute top-4 left-4 w-2 h-2 bg-white/40 rounded-full"
              animate={{ 
                y: [0, -20, 0],
                opacity: [0.4, 1, 0.4]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                delay: 0
              }}
            />
            <motion.div
              className="absolute top-8 right-8 w-1 h-1 bg-white/60 rounded-full"
              animate={{ 
                y: [0, -15, 0],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ 
                duration: 2.5,
                repeat: Infinity,
                delay: 1
              }}
            />

            <h3 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
              Prêt à nous rejoindre ?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Contactez-nous dès aujourd'hui pour discuter de vos besoins et découvrir comment nous pouvons prendre soin de vos chevaux.
            </p>
            
            <motion.a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-brand-brown font-semibold rounded-full hover:bg-brand-cream transition-all duration-300 shadow-medium hover:shadow-strong"
              whileHover={{ 
                scale: 1.05,
                y: -2
              }}
              whileTap={{ scale: 0.98 }}
            >
              Demander un devis gratuit
              <motion.div
                className="ml-2"
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </motion.a>
          </motion.div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default Services;
