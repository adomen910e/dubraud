import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import AnimatedSection from '../components/ui/AnimatedSection';
import Button from '../components/ui/Button';
import { 
  Home, 
  Building, 
  Trees, 
  Shield, 
  Wrench, 
  Calendar,
  Star,
  Heart,
  ArrowRight,
  Phone,
  Mail,
  Sparkles,
  Award,
  Clock,
  CheckCircle
} from 'lucide-react';
import dubraud1 from '../assets/images/dubraud_1.png';
import dubraud2 from '../assets/images/dubraud_2.png';
import dubraud3 from '../assets/images/dubraud_3.png';
import PhotoGallery from '../components/ui/PhotoGallery';

const InstallationCard = ({ image, title, description, features, icon: Icon, available = true, comingSoon = false, comingSoonDate, delay = 0 }) => (
  <AnimatedSection animation="fadeInUp" delay={delay} className="h-full">
    <motion.div 
      className={`bg-white rounded-2xl shadow-lg overflow-hidden h-full relative group cursor-pointer ${!available ? 'opacity-95' : ''}`}
      whileHover={{ 
        y: -8, 
        shadow: "0 20px 40px -10px rgba(0, 0, 0, 0.15)",
        transition: { duration: 0.3 }
      }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
    >
      {/* Effet de brillance au hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-gold/10 to-transparent -skew-x-12"
        initial={{ x: '-100%' }}
        whileHover={{ x: '200%' }}
        transition={{ duration: 0.8 }}
      />

      {/* Overlay pour les services à venir */}
      {comingSoon && (
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 to-slate-50/80 rounded-2xl pointer-events-none z-10"></div>
      )}

      <div className="relative">
        {/* Date "À VENIR" au-dessus de l'image */}
        {comingSoon && (
          <motion.div 
            className="absolute top-4 left-4 z-20"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: delay + 0.1, type: "spring" }}
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-brand-brown to-brand-light-brown text-white px-3 py-2 rounded-full shadow-lg">
              <Calendar size={16} />
              <span className="font-bold text-sm">À VENIR - {comingSoonDate}</span>
            </div>
          </motion.div>
        )}

        <motion.div
          className="relative overflow-hidden"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img 
            src={image} 
            alt={title}
            className={`w-full h-64 object-cover transition-all duration-500 group-hover:scale-110 ${comingSoon ? 'filter brightness-95' : ''}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </motion.div>
        
        <motion.div 
          className={`absolute bottom-4 right-4 text-brand-brown bg-white rounded-full p-3 shadow-lg ${comingSoon ? 'bg-gray-50' : ''}`}
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <Icon size={28} />
        </motion.div>
      </div>
      
      <div className="p-6 relative z-10">
        <motion.h3 
          className="text-2xl font-bold text-brand-brown mb-4 font-serif group-hover:text-brand-gold transition-colors duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 0.2 }}
        >
          {title}
        </motion.h3>
        
        <motion.p 
          className="text-gray-600 mb-6 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 0.3 }}
        >
          {description}
        </motion.p>
        
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => {
            const isComingSoonFeature = feature.includes('À VENIR');
            return (
              <motion.li 
                key={index} 
                className={`flex items-center ${isComingSoonFeature ? 'text-brand-brown font-medium' : 'text-gray-600'}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: delay + 0.4 + index * 0.1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                >
                  <CheckCircle className={`mr-3 ${isComingSoonFeature ? 'text-brand-light-brown' : 'text-brand-gold'}`} size={16} />
                </motion.div>
                {feature}
              </motion.li>
            );
          })}
        </ul>

        {!available && comingSoon && (
          <motion.div 
            className="bg-gradient-to-r from-gray-100 to-slate-100 border-2 border-gray-300 rounded-lg p-4 text-center"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: delay + 0.6 }}
          >
            <div className="flex items-center justify-center space-x-2 text-brand-brown">
              <Calendar size={20} />
              <span className="font-bold">Disponible en {comingSoonDate}</span>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  </AnimatedSection>
);


const Installations = () => {
  const installations = [
    {
      image: dubraud3,
      title: "Prairies et Paddocks",
      description: "45 hectares de prairies pour le bien-être de vos chevaux",
      icon: Trees,
      delay: 0,
      available: true,
      comingSoon: false,
      features: [
        "45 hectares de prairies",
        "Gestion des troupeaux en pâturages tournants pour des prairies préservées",
        "Paddocks vastes et sécurisés",
        "Clôtures haute sécurité",
        "Abris naturels et artificiels",
        
      ]
    },
    {
      image: dubraud2, 
      title: "Écuries et Boxes",
      description: "Boxes modernes et spacieux pour le confort optimal de vos chevaux",
      icon: Home,
      delay: 0.2,
      available: false,
      comingSoon: true,
      comingSoonDate: "09/2026",
      features: [
        "15 boxes spacieux de 3x4",
        "Ventilation optimale naturelle",
        "Abreuvoirs automatique à niveau constant",
        "Éclairage ",
        "Présence sur site 24h/7j"
      ]
    },
    {
      image: dubraud1,
      title: "Installations sportives",
      description: "Installations sportives de qualité professionnelle pour l'entraînement et le dressage",
      icon: Building,
      delay: 0.4,
      available: false,
      comingSoon: true,
      comingSoonDate: "09/2026",
      features: [
        "1 carrière naturelle 80x35m",
        "1 manège couvert 65x22m en sable de fontainebleau fibré",
        "Éclairage",
        "Arrosage des installations",
        "Marcheur"
      ]
    },
    {
      image: dubraud1,
      title: "Equipements pour votre confort",
      description: "Tous les équipements nécessaires pour un service complet et professionnel",
      icon: Wrench,
      delay: 0.6,
      available: false,
      comingSoon: true,
      comingSoonDate: "09/2026",
      features: [
        "Sellerie commune sécurisée",
        "Aires de préparation avec eaux chaude" ,
        "Solarium",
        "Parking visiteurs",
        "Local Pharmacie"
      ]
    }
  ];


  const currentFeatures = [
    {
      icon: Trees,
      title: "Prairies Naturelles",
      description: "45 hectares de prairies"
    },
    {
      icon: Shield,
      title: "Sécurité Maximale",
      description: "Clôtures haute sécurité et surveillance continue"
    },
    {
      icon: Heart,
      title: "Bien-être Animal",
      description: "Environnement naturel préservé pour vos chevaux"
    },
    {
      icon: Star,
      title: "Qualité Premium",
      description: "Standards élevés pour tous nos équipements"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="pt-28">
        {/* Hero Section */}
        <section className="pt-24 pb-12 bg-gradient-to-b from-brand-cream to-white relative overflow-hidden">
          {/* Éléments décoratifs */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="absolute top-10 right-10 w-20 h-20 bg-brand-gold rounded-full"></div>
            <div className="absolute bottom-10 left-10 w-16 h-16 bg-brand-brown rounded-full"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection animation="fadeInUp" className="text-center">
              <motion.div
                className="flex items-center justify-center mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <Building className="text-brand-brown mr-3" size={32} />
                <span className="text-brand-brown font-semibold text-lg tracking-wide">NOS INSTALLATIONS</span>
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-brand-brown mb-4 font-serif">
                Équipements Modernes & Naturels
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-brand-brown via-brand-gold to-brand-brown mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Découvrez nos installations en place et à venir, conçues pour offrir le meilleur environnement 
                à vos chevaux dans un cadre préservé de 45 hectares.
              </p>
            </AnimatedSection>
          </div>
        </section>

      {/* Annonce Développement */}
      {/* <section className="py-16 bg-gradient-to-r from-gray-50 via-slate-50 to-gray-50 border-y border-gray-200 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 bg-brand-brown rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-brand-light-brown rounded-full"></div>
        </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection animation="fadeInUp">
              <motion.div 
                className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-brand-accent relative overflow-hidden"
                whileHover={{ scale: 1.02, shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start space-x-6 relative z-10">
                  <motion.div
                    className="flex-shrink-0"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="bg-gradient-to-r from-brand-accent to-brand-accent-light text-white rounded-full p-4 shadow-lg">
                      <Calendar size={32} />
                    </div>
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-brand-brown mb-3 font-serif">
                      Projet d'Extension 2026
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Nous investissons massivement dans l'extension de nos installations pour vous proposer 
                      des équipements premium dès septembre 2026. Un projet ambitieux de modernisation complète.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {[
                        "15 boxes modernes avec paddocks",
                        "Manège couvert professionnel",
                        "1 carrière extérieure équipée",
                        "Installations annexes complètes"
                      ].map((item, index) => (
                        <motion.div 
                          key={index}
                          className="flex items-center space-x-3 p-3 bg-brand-neutral rounded-lg"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                          whileHover={{ scale: 1.02, backgroundColor: "rgba(245, 242, 235, 0.8)" }}
                        >
                          <div className="w-3 h-3 bg-gradient-to-r from-brand-accent to-brand-accent-light rounded-full"></div>
                          <span className="text-gray-700 font-medium">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                      <Button href="/contact" variant="gradient" size="md" className="group">
                        <Mail size={18} className="mr-2" />
                        <span>Être informé du projet</span>
                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                      
                      <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-brand-neutral to-brand-neutral-light text-brand-primary border border-brand-accent/30">
                        <Calendar size={16} className="mr-2" />
                        Ouverture : Septembre 2026
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </section> */}

        {/* Installations Grid */}
        <section className="py-20 bg-gradient-to-b from-white to-brand-cream/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection animation="fadeInUp" className="text-center mb-16">
              <h2 className="text-4xl font-bold text-brand-brown mb-4 font-serif">
                Nos Installations Actuelles & Futures
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-brand-brown via-brand-gold to-brand-brown mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Des équipements pensés pour le bien-être et la performance de vos chevaux
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {installations.map((installation, index) => (
                <InstallationCard key={index} {...installation} />
              ))}
            </div>
          </div>
        </section>

        {/* Services Actuels */}
        <section className="py-20 bg-brand-cream/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection animation="fadeInUp" className="text-center mb-16">
              <h2 className="text-4xl font-bold text-brand-brown mb-4 font-serif">
                Disponible Dès Maintenant
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-brand-brown via-brand-gold to-brand-brown mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Profitez dès aujourd'hui de nos prairies exceptionnelles
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {currentFeatures.map((feature, index) => (
                <AnimatedSection key={index} animation="fadeInUp" delay={index * 0.1}>
                  <motion.div 
                    className="text-center p-6 bg-white rounded-xl shadow-lg"
                    whileHover={{ 
                      y: -5, 
                      shadow: "0 15px 30px -10px rgba(0, 0, 0, 0.15)",
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <feature.icon className="text-brand-brown mx-auto mb-4" size={48} />
                    </motion.div>
                    <h3 className="font-bold text-brand-brown mb-2 font-serif">{feature.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

         <section className="py-16 bg-gradient-to-r from-gray-50 via-slate-50 to-gray-50 border-y border-gray-200 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 bg-brand-brown rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-brand-light-brown rounded-full"></div>
        </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection animation="fadeInUp">
              <motion.div 
                className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-brand-accent relative overflow-hidden"
                whileHover={{ scale: 1.02, shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-start space-x-6 relative z-10">
                  <motion.div
                    className="flex-shrink-0"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="bg-gradient-to-r from-brand-accent to-brand-accent-light text-white rounded-full p-4 shadow-lg">
                      <Calendar size={32} />
                    </div>
                  </motion.div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-brand-brown mb-3 font-serif">
                      Projet d'Extension 2026
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Nous investissons massivement dans l'extension de nos installations pour vous proposer 
                      des équipements premium dès septembre 2026. Un projet ambitieux de modernisation complète.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {[
                        "15 boxes modernes avec paddocks",
                        "Manège couvert professionnel",
                        "1 carrière extérieure équipée",
                        "Installations annexes complètes"
                      ].map((item, index) => (
                        <motion.div 
                          key={index}
                          className="flex items-center space-x-3 p-3 bg-brand-neutral rounded-lg"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                          whileHover={{ scale: 1.02, backgroundColor: "rgba(245, 242, 235, 0.8)" }}
                        >
                          <div className="w-3 h-3 bg-gradient-to-r from-brand-accent to-brand-accent-light rounded-full"></div>
                          <span className="text-gray-700 font-medium">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                      <Button href="/contact" variant="gradient" size="md" className="group">
                        <Mail size={18} className="mr-2" />
                        <span>Être informé du projet</span>
                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                      
                      <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-brand-neutral to-brand-neutral-light text-brand-primary border border-brand-accent/30">
                        <Calendar size={16} className="mr-2" />
                        Ouverture : Septembre 2026
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>

        {/* Galerie Photo */}
        <section className="py-20 bg-gradient-to-b from-white to-brand-cream/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection animation="fadeInUp" className="text-center mb-16">
              <motion.div
                className="flex items-center justify-center mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <Sparkles className="text-brand-gold mr-3" size={32} />
                <span className="text-brand-brown font-semibold text-lg tracking-wide">GALERIE PHOTO</span>
                <Sparkles className="text-brand-gold ml-3" size={32} />
              </motion.div>
              
              <h2 className="text-4xl font-bold text-brand-brown mb-4 font-serif">
                Découvrez Notre Domaine en Images
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-brand-brown via-brand-gold to-brand-brown mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Explorez notre domaine de 45 hectares à travers cette galerie interactive. 
                Cliquez sur les miniatures pour naviguer ou utilisez les flèches pour un défilement automatique.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeInUp" delay={0.3}>
              <PhotoGallery 
                className="max-w-5xl mx-auto"
              />
            </AnimatedSection>
            
            {/* Instructions d'utilisation */}
            <AnimatedSection animation="fadeInUp" delay={0.5} className="mt-12">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 max-w-4xl mx-auto border border-brand-gold/20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <motion.div 
                    className="flex flex-col items-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-brand-gold/20 rounded-full p-3 mb-3">
                      <ArrowRight className="text-brand-brown" size={24} />
                    </div>
                    <h4 className="font-semibold text-brand-brown mb-2">Navigation</h4>
                    <p className="text-gray-600 text-sm">Utilisez les flèches ou cliquez sur les miniatures</p>
                  </motion.div>
                  
                  <motion.div 
                    className="flex flex-col items-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-brand-gold/20 rounded-full p-3 mb-3">
                      <Sparkles className="text-brand-brown" size={24} />
                    </div>
                    <h4 className="font-semibold text-brand-brown mb-2">Zoom</h4>
                    <p className="text-gray-600 text-sm">Cliquez sur l'image pour l'agrandir en plein écran</p>
                  </motion.div>
                  
                  <motion.div 
                    className="flex flex-col items-center"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-brand-gold/20 rounded-full p-3 mb-3">
                      <Clock className="text-brand-brown" size={24} />
                    </div>
                    <h4 className="font-semibold text-brand-brown mb-2">Auto-défilement</h4>
                    <p className="text-gray-600 text-sm">Les images changent automatiquement toutes les 4 secondes</p>
                  </motion.div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-br from-slate-100 via-gray-50 to-white relative overflow-hidden">
          {/* Éléments décoratifs subtils */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-brand-gold/20 rounded-full"
              style={{
                left: `${15 + i * 15}%`,
                top: `${25 + (i % 2) * 40}%`,
              }}
              animate={{
                y: [0, -15, 0],
                opacity: [0.2, 0.6, 0.2],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.6
              }}
            />
          ))}

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <AnimatedSection animation="fadeInUp">
              <motion.div
                className="flex items-center justify-center mb-6"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
              >
                <Sparkles className="text-brand-gold mr-3" size={32} />
                <span className="text-brand-brown font-semibold text-lg tracking-wide">VISITEZ-NOUS</span>
                <Sparkles className="text-brand-gold ml-3" size={32} />
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold text-brand-brown mb-6 font-serif">
                Découvrez Nos Installations
              </h2>
              
              <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
                Venez visiter notre domaine et découvrir l'environnement exceptionnel que nous offrons 
                à vos chevaux, aujourd'hui et demain.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button 
                  href="/contact" 
                  size="xl"
                  variant="gradient"
                  className="group"
                >
                  <Phone size={20} className="mr-2" />
                  <span>Planifier une visite</span>
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                
                <Button 
                  href="/pensions"
                  variant="secondary" 
                  size="xl"
                  className="group"
                >
                  <span>Voir nos formules</span>
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Installations;
