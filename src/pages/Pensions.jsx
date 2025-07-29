import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import AnimatedSection from '../components/ui/AnimatedSection';
import { 
  Home, 
  Users, 
  Star, 
  Clock, 
  Check, 
  Calendar, 
  MapPin, 
  Heart, 
  Shield, 
  Award,
  ChevronRight,
  Phone,
  Mail,
  ArrowRight,
  Sparkles,
  TreePine,
  Sun
} from 'lucide-react';
import Button from '../components/ui/Button';
import dubraud1 from '../assets/images/dubraud_1.png';
import dubraud2 from '../assets/images/dubraud_2.png';
import dubraud3 from '../assets/images/dubraud_3.png';

const PensionCard = ({ icon: Icon, title, description, price, features, image, comingSoon, comingSoonDate, available = true, delay = 0 }) => (
  <AnimatedSection 
    animation="fadeInUp" 
    delay={delay}
    className="h-full"
  >
    <motion.div 
      className={`bg-white rounded-2xl shadow-lg p-8 h-full relative overflow-hidden group cursor-pointer ${!available ? 'opacity-90' : ''}`}
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
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/80 to-orange-50/80 rounded-2xl pointer-events-none"></div>
      )}
      
      <div className="relative mb-6 z-10">
        {/* Date "À VENIR" au-dessus de l'image */}
        {comingSoon && (
          <motion.div 
            className="mb-4 text-center"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: delay + 0.1, type: "spring" }}
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full shadow-lg">
              <Calendar size={16} />
              <span className="font-bold text-sm">À VENIR - {comingSoonDate}</span>
            </div>
          </motion.div>
        )}
        
        <motion.div
          className="relative overflow-hidden rounded-xl mb-4"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img 
            src={image} 
            alt={title}
            className={`w-full h-48 object-cover transition-all duration-500 group-hover:scale-110 ${comingSoon ? 'filter brightness-95' : ''}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </motion.div>
        
        <motion.div 
          className={`absolute bottom-4 left-4 text-brand-brown bg-white rounded-full p-3 shadow-lg ${comingSoon ? 'bg-amber-50' : ''}`}
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <Icon size={28} />
        </motion.div>
      </div>
      
      <div className="relative z-10">
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
        
        <motion.div 
          className="text-3xl font-bold text-brand-gold mb-6 flex items-center"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: delay + 0.4, type: "spring" }}
        >
          {price}
          <motion.span 
            className="text-sm text-gray-500 ml-2"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            /mois
          </motion.span>
        </motion.div>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => {
            const isComingSoonFeature = feature.includes('À VENIR');
            return (
              <motion.li 
                key={index} 
                className={`flex items-center ${isComingSoonFeature ? 'text-amber-600 font-medium' : 'text-gray-600'}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: delay + 0.5 + index * 0.1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Check className={`mr-3 ${isComingSoonFeature ? 'text-amber-500' : 'text-brand-gold'}`} size={16} />
                </motion.div>
                {feature}
              </motion.li>
            );
          })}
        </ul>
        
        {available ? (
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button href="/contact" variant="gradient" className="w-full group">
              <span>Réserver</span>
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </motion.div>
        ) : (
          <div className="w-full space-y-3">
            <motion.div 
              className="bg-gradient-to-r from-amber-100 to-orange-100 border-2 border-amber-300 rounded-lg p-4 text-center"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: delay + 0.6 }}
            >
              <div className="flex items-center justify-center space-x-2 text-amber-700">
                <Calendar size={20} />
                <span className="font-bold">Disponible en {comingSoonDate}</span>
              </div>
            </motion.div>
            <Button href="/contact" variant="outline" className="w-full">
              Être informé
            </Button>
          </div>
        )}
      </div>
    </motion.div>
  </AnimatedSection>
);

const StatCard = ({ icon: Icon, number, label, delay = 0 }) => (
  <AnimatedSection animation="scaleIn" delay={delay}>
    <motion.div 
      className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
      whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.15)" }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.5 }}
      >
        <Icon className="text-white mx-auto mb-3" size={32} />
      </motion.div>
      <motion.div 
        className="text-3xl font-bold text-white mb-2"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: delay + 0.3, type: "spring" }}
      >
        {number}
      </motion.div>
      <div className="text-white/90 text-sm font-medium">{label}</div>
    </motion.div>
  </AnimatedSection>
);

const ServiceCard = ({ title, price, description, features, comingSoon, comingSoonDate, delay = 0 }) => (
  <AnimatedSection animation="fadeInUp" delay={delay}>
    <motion.div 
      className={`bg-white rounded-xl shadow-lg p-6 h-full relative overflow-hidden ${comingSoon ? 'opacity-95' : ''}`}
      whileHover={{ 
        y: -5, 
        shadow: "0 15px 30px -10px rgba(0, 0, 0, 0.15)",
        transition: { duration: 0.3 }
      }}
    >
      {/* Badge "À VENIR" pour services à venir */}
      {comingSoon && (
        <motion.div 
          className="absolute top-0 right-0 z-10"
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: delay + 0.2, type: "spring" }}
        >
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-bl-lg rounded-tr-xl shadow-lg">
            <div className="flex items-center space-x-1">
              <Calendar size={12} />
              <span className="font-bold text-xs">À VENIR</span>
            </div>
            <div className="text-xs font-medium">{comingSoonDate}</div>
          </div>
        </motion.div>
      )}
      
      {/* Overlay léger pour services à venir */}
      {comingSoon && (
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/60 to-orange-50/60 rounded-xl pointer-events-none"></div>
      )}
      
      <div className="relative z-10">
        <motion.h3 
          className="text-xl font-bold text-brand-brown mb-4 font-serif"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: delay + 0.1 }}
        >
          {title}
        </motion.h3>
        
        <motion.div 
          className="text-2xl font-bold text-brand-gold mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: delay + 0.2, type: "spring" }}
        >
          {price}
        </motion.div>
        
        {description && (
          <motion.p 
            className="text-gray-600 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: delay + 0.3 }}
          >
            {description}
          </motion.p>
        )}
        
        {features && (
          <ul className="space-y-2 text-gray-600">
            {features.map((feature, index) => (
              <motion.li 
                key={index} 
                className="flex items-center"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: delay + 0.4 + index * 0.1 }}
              >
                <Check className="text-brand-gold mr-2" size={16} />
                {feature}
              </motion.li>
            ))}
          </ul>
        )}
        
        {comingSoon && (
          <motion.div 
            className="bg-gradient-to-r from-amber-100 to-orange-100 border border-amber-300 rounded-lg p-3 text-center mt-4"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: delay + 0.5 }}
          >
            <div className="flex items-center justify-center space-x-2 text-amber-700">
              <Calendar size={16} />
              <span className="font-bold text-sm">Disponible en {comingSoonDate}</span>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  </AnimatedSection>
);

const Pensions = () => {
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
  
  const heroSlides = [
    {
      image: dubraud1,
      title: "Pension pour Chevaux",
      subtitle: "Un cadre exceptionnel pour le bien-être de vos compagnons"
    },
    {
      image: dubraud2,
      title: "26 Hectares de Nature",
      subtitle: "Des prairies vallonnées dans un environnement préservé"
    },
    {
      image: dubraud3,
      title: "Installations Modernes",
      subtitle: "Équipements de qualité pour tous vos besoins équestres"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const pensions = [
    {
      icon: Home,
      title: "Pension Pré-Troupeau",
      description: "Pension en groupe avec rotation de prairies et soins de base pour une vie sociale équilibrée",
      price: "170€",
      image: dubraud1,
      delay: 0,
      available: true,
      comingSoon: false,
      features: [
        "Troupeau de 4 chevaux maximum",
        "Rotation de prairies naturelles",
        "Foin à volonté de qualité premium",
        "Abris de prairies avec aires stabilisées",
        "Repas complémentaire en option",
        "Surveillance quotidienne"
      ]
    },
    {
      icon: Users,
      title: "Pension Pré-Sport",
      description: "Pré individuel ou duo avec accès privilégié aux installations sportives",
      price: "240€",
      image: dubraud2,
      delay: 0.2,
      available: false,
      comingSoon: true,
      comingSoonDate: "09/2026",
      features: [
        "Pré individuel ou duo au choix",
        "Foin à volonté premium",
        "Abris modernes avec aires stabilisées",
        "Deux repas de complément quotidiens",
        "Accès prioritaire aux installations",
        "Suivi personnalisé"
      ]
    },
    {
      icon: Star,
      title: "Pension Boxes/Paddock",
      description: "Box individuel avec paddock privé et accès complet aux équipements premium",
      price: "450€",
      image: dubraud3,
      delay: 0.4,
      available: false,
      comingSoon: true,
      comingSoonDate: "09/2026",
      features: [
        "Box spacieux 3x4m avec sortie autonome",
        "Paddock individuel sécurisé",
        "Foin à volonté premium",
        "Deux repas de complément quotidiens",
        "Accès illimité aux installations",
        "Service de conciergerie équestre"
      ]
    }
  ];

  const stats = [
    // { icon: TreePine, number: "26", label: "Hectares de prairies" },
    // { icon: Home, number: "30", label: "Boxes modernes" },
    // { icon: Clock, number: "24/7", label: "Surveillance" },
    // { icon: Award, number: "15+", label: "Années d'expérience" }
  ];

  const additionalServices = [
    {
      title: "Forfait Soin",
      price: "40€/mois",
      features: [
        "Séance de pansage/soin hebdomadaire",
        "Gestion du maréchal",
        "Gestion vétérinaire et ostéopathe"
      ],
      description: "Produits et prestations extérieures à votre charge",
      delay: 0
    },
    {
      title: "Supplément Ration",
      price: "40€/mois",
      description: "Ration de complément pour pension pré-troupeau",
      delay: 0.2
    },
    {
      title: "Droit de Piste",
      price: "12€/cheval",
      description: "Accès manège ou carrière",
      comingSoon: true,
      comingSoonDate: "09/2026",
      delay: 0.4
    }
  ];

  const workServices = [
    {
      title: "Séances Individuelles",
      services: [
        { name: "Séance de travail monté ou longé (soin compris)", price: "30€" },
        { name: "Mise au marcheur ponctuelle", price: "5€" }
      ]
    },
    {
      title: "Forfaits Travail",
      subtitle: "Séances de travail + mise au marcheur à volonté",
      services: [
        { name: "2x par semaine", price: "200€" },
        { name: "3x par semaine", price: "264€" },
        { name: "4x par semaine", price: "320€" }
      ],
      note: ">4x par semaine, nous consulter"
    }
  ];

  const includedServices = [
    {
      icon: Clock,
      title: "Surveillance 24h/7j",
      description: "Nos équipes veillent sur vos chevaux jour et nuit"
    },
    {
      icon: Home,
      title: "Boxes Modernes",
      description: "30 boxes spacieux et confortables"
    },
    {
      icon: Users,
      title: "Équipe Dédiée",
      description: "Personnel qualifié et passionné"
    },
    {
      icon: Star,
      title: "Cadre Exceptionnel",
      description: "26 hectares de prairies vallonnées"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <div className="pt-28">
      {/* Header Simple et Direct */}
      <section className="pt-24 pb-12 bg-gradient-to-b from-brand-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeInUp" className="text-center">          
            <h1 className="text-4xl md:text-5xl font-bold text-brand-brown mb-4 font-serif">
              Nos Formules de Pension
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-brown via-brand-gold to-brand-brown mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Choisissez la formule adaptée aux besoins de votre cheval dans notre domaine de 26 hectares
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Annonce Services à Venir - Améliorée */}
      <section id="announcement" className="py-16 bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 border-y border-amber-200 relative overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 bg-amber-500 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-orange-500 rounded-full"></div>
          <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-amber-400 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection animation="fadeInUp">
            <motion.div 
              className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-amber-500 relative overflow-hidden"
              whileHover={{ scale: 1.02, shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              transition={{ duration: 0.3 }}
            >
              {/* Effet de brillance */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-100/50 to-transparent -skew-x-12"
                initial={{ x: '-100%' }}
                whileHover={{ x: '200%' }}
                transition={{ duration: 1 }}
              />

              <div className="flex items-start space-x-6 relative z-10">
                <motion.div
                  className="flex-shrink-0"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full p-4 shadow-lg">
                    <Calendar size={32} />
                  </div>
                </motion.div>
                
                <div className="flex-1">
                  <motion.h3 
                    className="text-2xl font-bold text-brand-brown mb-3 font-serif"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Nouveaux Services en Développement
                  </motion.h3>
                  
                  <motion.p 
                    className="text-gray-600 mb-6 leading-relaxed"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    Nous investissons dans l'extension de nos installations pour vous proposer des services premium dès septembre 2026. 
                    Un projet ambitieux pour offrir le meilleur à vos chevaux.
                  </motion.p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    {[
                      "Pension Pré-Sport avec accès aux installations",
                      "Pension Boxes/Paddock premium",
                      "Accès manège et carrière professionnels",
                      "Installations équestres modernes"
                    ].map((item, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-center space-x-3 p-3 bg-amber-50 rounded-lg"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        whileHover={{ scale: 1.02, backgroundColor: "#fef3c7" }}
                      >
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
                        </motion.div>
                        <span className="text-gray-700 font-medium">{item}</span>
                      </motion.div>
                    ))}
                  </div>
                  
                  <motion.div 
                    className="flex flex-wrap gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                  >
                    <Button href="/contact" variant="gradient" size="md" className="group">
                      <Mail size={18} className="mr-2" />
                      <span>Être informé des nouveautés</span>
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                    
                    <motion.span 
                      className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 border border-amber-300"
                      whileHover={{ scale: 1.05 }}
                      animate={{ 
                        boxShadow: [
                          "0 0 0 0 rgba(245, 158, 11, 0.4)",
                          "0 0 0 10px rgba(245, 158, 11, 0)",
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Calendar size={16} className="mr-2" />
                      Lancement prévu : Septembre 2026
                    </motion.span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* Pensions Grid - Améliorée */}
      <section id="pensions" className="py-20 bg-gradient-to-b from-white to-brand-cream/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeInUp" className="text-center mb-16">
            <motion.div
              className="flex items-center justify-center mb-6"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <span className="text-brand-brown font-semibold text-lg tracking-wide">NOS FORMULES</span>
            </motion.div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-brand-brown mb-6 font-serif">
              Choisissez la Pension Idéale
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-brand-brown via-brand-gold to-brand-brown mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Trois formules pensées pour répondre aux besoins spécifiques de votre cheval, 
              dans un environnement exceptionnel de 26 hectares.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pensions.map((pension, index) => (
              <PensionCard key={index} {...pension} />
            ))}
          </div>
        </div>
      </section>

      {/* Options et Services - Améliorée */}
      <section className="py-20 bg-brand-cream/30 relative overflow-hidden">
        {/* Éléments décoratifs */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <Sun className="absolute top-10 right-10 w-24 h-24 text-brand-gold" />
          <TreePine className="absolute bottom-10 left-10 w-20 h-20 text-brand-brown" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection animation="fadeInUp" className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-brown mb-4 font-serif">Options et Services Supplémentaires</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-brand-brown via-brand-gold to-brand-brown mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Personnalisez votre formule avec nos services complémentaires
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {additionalServices.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>

          {/* Services de Travail */}
          <AnimatedSection animation="fadeInUp" delay={0.2}>
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-3xl font-bold text-brand-brown mb-8 text-center font-serif">Services de Travail</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {workServices.map((category, categoryIndex) => (
                  <motion.div 
                    key={categoryIndex}
                    initial={{ opacity: 0, x: categoryIndex === 0 ? -30 : 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + categoryIndex * 0.2 }}
                  >
                    <h4 className="text-xl font-bold text-brand-brown mb-4 font-serif">{category.title}</h4>
                    {category.subtitle && (
                      <p className="text-sm text-gray-600 mb-4">{category.subtitle}</p>
                    )}
                    <div className="space-y-3">
                      {category.services.map((service, serviceIndex) => (
                        <motion.div 
                          key={serviceIndex}
                          className="flex justify-between items-center p-3 bg-brand-cream/50 rounded-lg"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 + categoryIndex * 0.2 + serviceIndex * 0.1 }}
                          whileHover={{ scale: 1.02, backgroundColor: "rgba(254, 243, 199, 0.8)" }}
                        >
                          <span className="text-gray-700">{service.name}</span>
                          <span className="font-bold text-brand-gold">{service.price}</span>
                        </motion.div>
                      ))}
                    </div>
                    {category.note && (
                      <p className="text-sm text-gray-500 mt-3 italic">{category.note}</p>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Inclus */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeInUp" className="text-center mb-16">
            <h2 className="text-4xl font-bold text-brand-brown mb-4 font-serif">Services Inclus</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-brand-brown via-brand-gold to-brand-brown mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des services de qualité inclus dans toutes nos formules
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {includedServices.map((service, index) => (
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
                    <service.icon className="text-brand-brown mx-auto mb-4" size={48} />
                  </motion.div>
                  <h3 className="font-bold text-brand-brown mb-2 font-serif">{service.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="py-20 bg-gradient-to-r from-brand-brown to-brand-dark-brown relative overflow-hidden">
        {/* Éléments décoratifs */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-brand-gold/30 rounded-full"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + (i % 3) * 30}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 3 + i * 0.3,
              repeat: Infinity,
              delay: i * 0.4
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
              <Heart className="text-brand-gold mr-3" size={32} />
              <span className="text-brand-gold font-semibold text-lg tracking-wide">REJOIGNEZ-NOUS</span>
              <Heart className="text-brand-gold ml-3" size={32} />
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
              Offrez le Meilleur à Votre Cheval
            </h2>
            
            <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
              Contactez-nous dès aujourd'hui pour découvrir nos installations et choisir la formule 
              parfaite pour votre compagnon.
            </p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button 
                href="/contact" 
                size="xl"
                variant="gradient"
                className="group"
              >
                <Phone size={20} className="mr-2" />
                <span>Prendre rendez-vous</span>
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              
              <Button 
                href="tel:+33123456789"
                variant="outline" 
                size="xl"
                className="group"
              >
                <span>Appeler maintenant</span>
                <Phone size={18} className="ml-2 group-hover:scale-110 transition-transform duration-300" />
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
      </div>

      <Footer />
    </div>
  );
};

export default Pensions;
