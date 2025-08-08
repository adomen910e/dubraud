import React from 'react';
import { motion } from 'framer-motion';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import AnimatedSection from '../components/ui/AnimatedSection';
import Button from '../components/ui/Button';
import { 
  Home, 
  Users, 
  Star, 
  Wifi, 
  Car, 
  Coffee, 
  Bath, 
  Bed,
  Calendar,
  Heart,
  ArrowRight,
  Phone,
  Mail,
  Sparkles,
  Award,
  Clock,
  CheckCircle,
  MapPin,
  Shield
} from 'lucide-react';
import dubraud1 from '../assets/images/dubraud_1.png';
import dubraud2 from '../assets/images/dubraud_2.png';
import dubraud3 from '../assets/images/dubraud_3.png';

const HebergementCard = ({ image, title, description, price, features, amenities, available = true, comingSoon = false, comingSoonDate, delay = 0 }) => (
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
        <div className="absolute inset-0 bg-gradient-to-br from-amber-50/80 to-orange-50/80 rounded-2xl pointer-events-none z-10"></div>
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
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-2 rounded-full shadow-lg">
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
          className={`absolute top-4 right-4 bg-gradient-to-r from-brand-brown to-brand-gold text-white px-4 py-2 rounded-full font-bold shadow-lg ${comingSoon ? 'from-amber-500 to-orange-500' : ''}`}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
          {price}
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
        
        <div className="mb-6">
          <h4 className="font-semibold text-brand-brown mb-3 flex items-center">
            <Home size={18} className="mr-2" />
            Équipements :
          </h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <motion.li 
                key={index} 
                className="flex items-center text-gray-600"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: delay + 0.4 + index * 0.1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                >
                  <CheckCircle className="text-brand-gold mr-3" size={16} />
                </motion.div>
                {feature}
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h4 className="font-semibold text-brand-brown mb-3 flex items-center">
            <Star size={18} className="mr-2" />
            Services inclus :
          </h4>
          <div className="flex flex-wrap gap-2">
            {amenities.map((amenity, index) => (
              <motion.div 
                key={index} 
                className="flex items-center bg-brand-cream/50 px-3 py-2 rounded-lg text-sm text-brand-brown border border-brand-beige/50"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: delay + 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, backgroundColor: "rgba(254, 243, 199, 0.8)" }}
              >
                {amenity.icon && <amenity.icon size={14} className="mr-2" />}
                <span className="font-medium">{amenity.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

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
              transition={{ delay: delay + 0.8 }}
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

const ServiceCard = ({ icon: Icon, title, description, delay = 0 }) => (
  <AnimatedSection animation="fadeInUp" delay={delay}>
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
        <Icon className="text-brand-brown mx-auto mb-4" size={48} />
      </motion.div>
      <h3 className="font-bold text-brand-brown mb-2 font-serif">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
    </motion.div>
  </AnimatedSection>
);

const Hebergement = () => {
  const hebergements = [
    {
      image: dubraud1,
      title: "Gîte Rural",
      description: "Charmant gîte de 4 personnes au cœur du domaine, idéal pour un séjour en famille ou entre amis.",
      price: "120€/nuit",
      delay: 0,
      available: true,
      comingSoon: false,
      features: [
        "2 chambres doubles confortables",
        "Salon avec cheminée authentique",
        "Cuisine équipée moderne",
        "Terrasse privée avec mobilier",
        "Vue panoramique sur les prairies",
        "Parking privé sécurisé"
      ],
      amenities: [
        { name: "WiFi Haut Débit", icon: Wifi },
        { name: "Parking Gratuit", icon: Car },
        { name: "Petit-déjeuner", icon: Coffee },
        { name: "Salle de bain", icon: Bath }
      ]
    },
    {
      image: dubraud2,
      title: "Chambres d'Hôtes Premium",
      description: "Chambres de charme dans la maison principale avec services haut de gamme.",
      price: "95€/nuit",
      delay: 0.2,
      available: false,
      comingSoon: true,
      comingSoonDate: "2026",
      features: [
        "Chambres avec salle de bain privée",
        "Petit-déjeuner gastronomique inclus",
        "Accès jardin et terrasse panoramique",
        "Décoration authentique soignée",
        "Linge de maison premium fourni",
        "Service de conciergerie"
      ],
      amenities: [
        { name: "WiFi Premium", icon: Wifi },
        { name: "Parking VIP", icon: Car },
        { name: "Petit-déjeuner", icon: Coffee },
        { name: "Confort 5*", icon: Bed }
      ]
    },
    {
      image: dubraud3,
      title: "Suite Familiale Prestige",
      description: "Grande suite luxueuse pouvant accueillir jusqu'à 6 personnes, parfaite pour les grandes familles.",
      price: "200€/nuit",
      delay: 0.4,
      available: false,
      comingSoon: true,
      comingSoonDate: "2026",
      features: [
        "3 chambres communicantes spacieuses",
        "2 salles de bain avec baignoire",
        "Salon privé avec coin détente",
        "Kitchenette équipée complète",
        "Balcon avec vue panoramique",
        "Espace jeux pour enfants"
      ],
      amenities: [
        { name: "WiFi Premium", icon: Wifi },
        { name: "Parking Privé", icon: Car },
        { name: "Petit-déjeuner", icon: Coffee },
        { name: "Espace Famille", icon: Users }
      ]
    }
  ];

  const currentServices = [
    {
      icon: Home,
      title: "Gîte Disponible",
      description: "Notre gîte rural est actuellement disponible pour vos séjours"
    },
    {
      icon: Coffee,
      title: "Petit-Déjeuner Maison",
      description: "Produits locaux et fait maison chaque matin"
    },
    {
      icon: Car,
      title: "Parking Sécurisé",
      description: "Stationnement gratuit et sécurisé pour tous nos hôtes"
    },
    {
      icon: Star,
      title: "Cadre Exceptionnel",
      description: "Séjour au cœur d'un domaine équestre authentique de 40 hectares"
    }
  ];

  const futureServices = [
    {
      icon: Bed,
      title: "Chambres Premium",
      description: "Chambres d'hôtes haut de gamme avec services personnalisés"
    },
    {
      icon: Users,
      title: "Suite Familiale",
      description: "Hébergement spacieux pour les grandes familles"
    },
    {
      icon: Shield,
      title: "Services Concierge",
      description: "Accompagnement personnalisé pour votre séjour"
    },
    {
      icon: Award,
      title: "Standing 5 Étoiles",
      description: "Prestations haut de gamme dans un cadre d'exception"
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
                <Home className="text-brand-brown mr-3" size={32} />
                <span className="text-brand-brown font-semibold text-lg tracking-wide">HÉBERGEMENT</span>
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-brand-brown mb-4 font-serif">
                Séjournez au Domaine
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-brand-brown via-brand-gold to-brand-brown mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Découvrez nos hébergements de charme au cœur d'un domaine équestre exceptionnel de 45 hectares. 
                Un cadre unique pour vos séjours en Gironde.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* Annonce Développement */}
        <section className="py-16 bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 border-y border-amber-200 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-5">
            <div className="absolute top-10 left-10 w-20 h-20 bg-amber-500 rounded-full"></div>
            <div className="absolute bottom-10 right-10 w-16 h-16 bg-orange-500 rounded-full"></div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <AnimatedSection animation="fadeInUp">
              <motion.div 
                className="bg-white rounded-2xl shadow-xl p-8 border-l-4 border-amber-500 relative overflow-hidden"
                whileHover={{ scale: 1.02, shadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                transition={{ duration: 0.3 }}
              >
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
                    <h3 className="text-2xl font-bold text-brand-brown mb-3 font-serif">
                      Extension Hébergement 2026
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      Nous développons notre offre d'hébergement avec des chambres d'hôtes premium et une suite familiale 
                      de prestige pour vous offrir encore plus de confort et de services personnalisés.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {[
                        "Chambres d'hôtes haut de gamme",
                        "Suite familiale prestige 6 personnes",
                        "Services de conciergerie personnalisés",
                        "Prestations 5 étoiles incluses"
                      ].map((item, index) => (
                        <motion.div 
                          key={index}
                          className="flex items-center space-x-3 p-3 bg-amber-50 rounded-lg"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 + index * 0.1 }}
                          whileHover={{ scale: 1.02, backgroundColor: "#fef3c7" }}
                        >
                          <div className="w-3 h-3 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
                          <span className="text-gray-700 font-medium">{item}</span>
                        </motion.div>
                      ))}
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                      <Button href="/contact" variant="gradient" size="md" className="group">
                        <Mail size={18} className="mr-2" />
                        <span>Être informé des nouveautés</span>
                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                      
                      <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-amber-100 to-orange-100 text-amber-800 border border-amber-300">
                        <Calendar size={16} className="mr-2" />
                        Ouverture : 2026
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>

        {/* Hébergements Grid */}
        <section className="py-20 bg-gradient-to-b from-white to-brand-cream/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection animation="fadeInUp" className="text-center mb-16">
              <h2 className="text-4xl font-bold text-brand-brown mb-4 font-serif">
                Nos Hébergements
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-brand-brown via-brand-gold to-brand-brown mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Des hébergements de charme pour tous vos besoins, dans un cadre exceptionnel
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {hebergements.map((hebergement, index) => (
                <HebergementCard key={index} {...hebergement} />
              ))}
            </div>
          </div>
        </section>

        {/* Services Actuels */}
        <section className="py-20 bg-brand-cream/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection animation="fadeInUp" className="text-center mb-16">
              <h2 className="text-4xl font-bold text-brand-brown mb-4 font-serif">
                Services Actuels
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-brand-brown via-brand-gold to-brand-brown mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Profitez dès maintenant de nos services d'hébergement
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {currentServices.map((service, index) => (
                <ServiceCard key={index} {...service} delay={index * 0.1} />
              ))}
            </div>
          </div>
        </section>

        {/* Services Futurs */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection animation="fadeInUp" className="text-center mb-16">
              <h2 className="text-4xl font-bold text-brand-brown mb-4 font-serif">
                À Venir en 2026
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-brand-brown via-brand-gold to-brand-brown mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Nos futurs services pour une expérience encore plus exceptionnelle
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {futureServices.map((service, index) => (
                <AnimatedSection key={index} animation="fadeInUp" delay={index * 0.1}>
                  <motion.div 
                    className="text-center p-6 bg-white rounded-xl shadow-lg border-2 border-amber-200/50"
                    whileHover={{ 
                      y: -5, 
                      shadow: "0 15px 30px -10px rgba(0, 0, 0, 0.15)",
                      borderColor: "rgba(245, 158, 11, 0.3)",
                      transition: { duration: 0.3 }
                    }}
                  >
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <service.icon className="text-amber-600 mx-auto mb-4" size={48} />
                    </motion.div>
                    <h3 className="font-bold text-brand-brown mb-2 font-serif">{service.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                    <motion.div 
                      className="mt-3 inline-flex items-center text-xs text-amber-600 font-medium"
                      animate={{ 
                        opacity: [0.7, 1, 0.7]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Calendar size={12} className="mr-1" />
                      2026
                    </motion.div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Galerie */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedSection animation="fadeInUp" className="text-center mb-16">
              <h2 className="text-4xl font-bold text-brand-brown mb-4 font-serif">
                Galerie Photos
              </h2>
              <div className="w-32 h-1 bg-gradient-to-r from-brand-brown via-brand-gold to-brand-brown mx-auto mb-6"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Découvrez l'atmosphère unique de nos hébergements
              </p>
            </AnimatedSection>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[dubraud1, dubraud2, dubraud3].map((image, index) => (
                <AnimatedSection key={index} animation="fadeInUp" delay={index * 0.2}>
                  <motion.div
                    className="relative overflow-hidden rounded-2xl shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img 
                      src={image} 
                      alt={`Hébergement ${index + 1}`} 
                      className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </motion.div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-brand-brown to-brand-dark-brown relative overflow-hidden">
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
                <span className="text-brand-gold font-semibold text-lg tracking-wide">RÉSERVEZ VOTRE SÉJOUR</span>
                <Heart className="text-brand-gold ml-3" size={32} />
              </motion.div>

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-serif">
                Vivez l'Expérience Dubraud
              </h2>
              
              <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
                Réservez dès maintenant votre séjour dans notre gîte rural ou soyez informé 
                de l'ouverture de nos nouveaux hébergements premium.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Button 
                  href="/contact" 
                  size="xl"
                  variant="gradient"
                  className="group"
                >
                  <Phone size={20} className="mr-2" />
                  <span>Réserver maintenant</span>
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
                
                <Button 
                  href="/pensions"
                  variant="outline" 
                  size="xl"
                  className="group"
                >
                  <span>Découvrir nos pensions</span>
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

export default Hebergement;
