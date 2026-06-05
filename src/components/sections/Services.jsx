import React from 'react';
import { motion } from 'framer-motion';
import { Home, Star, Users, Heart, Sparkles, Sun } from 'lucide-react';
import ServiceCard from '../ui/ServiceCard';
import AnimatedSection from '../ui/AnimatedSection';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Pension Troupeau",
      description: "Un environnement calme et naturel pour vos chevaux au repos/retraite/élevage, avec soins adaptés et surveillance quotidienne.",
      features: ["Vie en troupeau", "Présence sur site 24h/7j", "Foin bio à volonté", "Rotation de prairie"]
    },
    {
      icon: Heart,
      title: "Pension Confort",
      description: "Un cadre de vie naturel alliant confort et tranquilité",
      features: ["Pension troupeau + stabulation sur aire paillée et stabilisée les 3 mois d'hiver", "Foin bio à volonté", "1 repas de complément l'hiver", "Gestion des intervenants"]
    },
    {
      icon: Users,
      title: "Pension Sport",
      description: "Une vie en exterieur associée à un abri stabilisé et une proximité des installations pour associer travail et bien-être",
      features: ["Paddocks individuels ou duo", "Accès aux installations", "Foin bio à volonté", "Chevaux rentrés au box ou en stabulation les 3 mois d'hiver", "Deux rations par jour", "Gestion des intervenants"]
    },
    {
      icon: Star,
      title: "Pension Installations",
      description: "Une pension alliant qualité d'hébergement et pratique équestre quotidienne",
      features: ["Pension confort avec pré proche des installations", "2 repas de complément par jour", "Accès aux installations", "Gestion des intervenants"]
    },
    {
      icon: Sun,
      title: "Pension Vacances",
      description: "Un séjour pensé pour garantir sérénité, sécurité et bien-être",
      features: ["Pré individuel ou en troupeau", "Foin bio à volonté", "Abri naturel ou artificiel", "Distribution de complément fourni par le propriétaire", "Gestion des intervenants"]
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
    <section id="services" className="relative py-20 md:py-32 bg-gradient-to-br from-gray-50 via-brand-neutral/30 to-gray-50 overflow-hidden">
      {/* Éléments décoratifs de fond */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-brand-accent/5 rounded-full"
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
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-primary/5 rounded-full"
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
            <div className="p-3 bg-gradient-to-r from-brand-primary to-brand-accent rounded-2xl text-white shadow-glow">
              <Sparkles size={32} />
            </div>
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-primary mb-6 font-serif"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Nos Prestations
          </motion.h2>

          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-brand-primary via-brand-accent to-brand-primary mx-auto mb-8"
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
              linkTo="/pensions"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
