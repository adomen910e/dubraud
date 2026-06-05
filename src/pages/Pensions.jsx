import React from 'react';
import { motion } from 'framer-motion';
import Seo from '../components/seo/Seo';
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
  Heart, 
  Phone,
  ArrowRight,
  TreePine,
  Sun
} from 'lucide-react';
import Button from '../components/ui/Button';
import dubraud1 from '../assets/images/repos.webp';
import dubraud2 from '../assets/images/sport.webp';
import dubraud3 from '../assets/images/dubraud_3.webp';

const PensionCard = ({ icon: Icon, title, description, price, features, image, comingSoon, comingSoonDate, available = true, delay = 0 }) => (
  <AnimatedSection 
    animation="fadeInUp" 
    delay={delay}
    className="h-full"
  >
    <motion.div 
      className={`bg-white rounded-2xl shadow-lg p-8 h-full relative overflow-hidden group cursor-pointer flex flex-col ${!available ? 'opacity-90' : ''}`}
      whileHover={{ 
        y: -8, 
        boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.15)",
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
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 to-slate-50/80 rounded-2xl pointer-events-none"></div>
      )}
      
      <div className="relative mb-6 z-10">
        <motion.div
          className="relative overflow-hidden rounded-xl mb-4"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src={image}
            alt={`${title} — pension pour chevaux au Domaine de Dubraud, Gironde`}
            loading="lazy"
            decoding="async"
            className={`w-full h-48 object-cover transition-all duration-500 group-hover:scale-110 ${comingSoon ? 'filter brightness-95' : ''}`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          {/* Badge "À VENIR" en superposition sur l'image : ne décale pas la mise en page */}
          {comingSoon && (
            <motion.div
              className="absolute top-3 right-3 z-20"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: delay + 0.1, type: "spring" }}
            >
              <div className="inline-flex items-center space-x-1.5 bg-gradient-to-r from-brand-brown to-brand-light-brown text-white px-3 py-1.5 rounded-full shadow-lg">
                <Calendar size={14} />
                <span className="font-bold text-xs">À VENIR · {comingSoonDate}</span>
              </div>
            </motion.div>
          )}
        </motion.div>
        
        <motion.div 
          className={`absolute bottom-4 left-4 text-brand-brown bg-white rounded-full p-3 shadow-lg ${comingSoon ? 'bg-gray-50' : ''}`}
          whileHover={{ rotate: 360, scale: 1.1 }}
          transition={{ duration: 0.5 }}
        >
          <Icon size={28} />
        </motion.div>
      </div>
      
      <div className="relative z-10 flex flex-col flex-grow">
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
                className={`flex items-center ${isComingSoonFeature ? 'text-brand-brown font-medium' : 'text-gray-600'}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: delay + 0.5 + index * 0.1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.2 }}
                >
                  <Check className={`mr-3 ${isComingSoonFeature ? 'text-brand-light-brown' : 'text-brand-gold'}`} size={16} />
                </motion.div>
                {feature}
              </motion.li>
            );
          })}
        </ul>
        
        {available ? (
          <motion.div
            className="mt-auto"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button href="/contact" variant="gradient" className="w-full group">
              <span>Réserver</span>
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </motion.div>
        ) : (
          <div className="w-full space-y-3 mt-auto">
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
            <Button href="/contact" variant="secondary" className="w-full">
              Être informé
            </Button>
          </div>
        )}
      </div>
    </motion.div>
  </AnimatedSection>
);


const ServiceCard = ({ title, price, lines, description, features, comingSoon, comingSoonDate, delay = 0 }) => (
  <AnimatedSection animation="fadeInUp" delay={delay}>
    <motion.div 
      className={`bg-white rounded-xl shadow-lg p-6 h-full relative overflow-hidden ${comingSoon ? 'opacity-95' : ''}`}
      whileHover={{ 
        y: -5, 
        boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.15)",
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
          <div className="bg-gradient-to-r from-brand-accent to-brand-accent-light text-white px-3 py-1 rounded-bl-lg rounded-tr-xl shadow-lg">
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
        <div className="absolute inset-0 bg-gradient-to-br from-brand-neutral/60 to-brand-neutral-light/60 rounded-xl pointer-events-none"></div>
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
        
        {price && (
          <motion.div
            className="text-2xl font-bold text-brand-gold mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: delay + 0.2, type: "spring" }}
          >
            {price}
          </motion.div>
        )}

        {lines && (
          <div className="space-y-4 mb-4">
            {lines.map((line, index) => (
              <div key={index}>
                <p className="text-gray-600">{line.label}</p>
                <p className="text-brand-gold mt-1">{line.price}</p>
              </div>
            ))}
          </div>
        )}

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
            className="bg-gradient-to-r from-brand-neutral to-brand-neutral-light border border-brand-accent/30 rounded-lg p-3 text-center mt-4"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: delay + 0.5 }}
          >
            <div className="flex items-center justify-center space-x-2 text-brand-primary">
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

  const pensions = [
    {
      icon: Home,
      title: "Pension Troupeau",
      description: "Pension en troupeau avec herbe et foin à volonté, rotation de prairies pour une vie équilibrée",
      price: "170€",
      image: dubraud1,
      delay: 0,
      available: true,
      comingSoon: false,
      features: [
        "Troupeau de 3 à 6 chevaux (selon affinités et besoins physiologiques)",
        "Rotation de prairies",
        "Foin à volonté",
        "Surveillance quotidienne",
      ]
    },
    {
      icon: Heart,
      title: "Pension Confort",
      description: "Un cadre de vie naturel alliant confort et tranquilité",
      price: "210€",
      image: dubraud3,
      delay: 0.2,
      available: true,
      comingSoon: false,
      features: [
        "Pension troupeau + stabulation sur aire paillée et stabilisée les 3 mois d'hiver",
        "Foin à volonté",
        "1 repas de complément l'hiver",
        "Gestion des intervenants",
      ]
    },
    {
      icon: Users,
      title: "Pension Sport",
      description: "Pré individuel ou duo avec accès aux installations sportives",
      price: "300€",
      image: dubraud2,
      delay: 0.4,
      available: true,
      comingSoon: false,
      features: [
        "Pré individuel ou duo au choix",
        "Foin à volonté de qualité",
        "Abris spacieux avec aires stabilisées",
        "Chevaux rentrés au box ou en stabulation les 3 mois d'hiver",
        "Deux repas de complément quotidiens",
        "Accès aux installations",
        "Gestion des intervenants",
      ]
    },
    {
      icon: Star,
      title: "Pension Installations",
      description: "Une pension alliant qualité d'hébergement et pratique équestre quotidienne",
      price: "280€",
      image: dubraud2,
      delay: 0.6,
      available: false,
      comingSoon: true,
      comingSoonDate: "premier trimestre 2027",
      features: [
        "Pension confort avec pré proche des installations",
        "2 repas de complément par jour",
        "Accès aux installations",
        "Gestion des intervenants",
      ]
    },
    {
      icon: Sun,
      title: "Pension Vacances",
      description: "Un séjour pensé pour garantir sérénité, sécurité et bien-être",
      price: "220€",
      image: dubraud1,
      delay: 0.8,
      available: true,
      comingSoon: false,
      features: [
        "Pré individuel ou en troupeau",
        "Foin à volonté",
        "Abri naturel ou artificiel",
        "Distribution de complément fourni par le propriétaire",
        "Gestion des intervenants",
      ]
    }
  ];


  const additionalServices = [
    {
      title: "Forfait Soin",
      price: "40€/mois",
      features: [
        "Séance de pansage/soin hebdomadaire",
        "Gestion des intervenants : maréchal, vétérinaire, ostéopathe, etc."
      ],
      description: "Produits et prestations extérieures à votre charge",
      delay: 0
    },
    {
      title: "Ration complémentaire",
      lines: [
        { label: "Ration de concentré pour pension troupeau", price: "50€/mois (30€/mois si l'aliment est fourni)" },
        { label: "Aliment spécial chevaux ulcéreux (taux d'amidon 10%)", price: "+30€/mois" }
      ],
      delay: 0.2
    },
    {
      title: "Enrubanné ou foin dépoussiéré",
      price: "60€/mois", 
      description: "Ration de concentré pour pension pré troupeau",
      delay: 0.2
    },
    {
      title: "Droit de Piste",
      price: "12€/cheval",
      description: "Accès manège ou carrière",
      comingSoon: true,
      comingSoonDate: "premier trimestre 2027",
      delay: 0.4
    }
  ];

  const workServices = [
    {
      title: "Séance Ponctuelle",
      services: [
        { name: "Séance de travail monté ou longé (soin compris)", price: "30€" }
      ]
    },
    {
      title: "Forfaits Travail",
      subtitle: "Séances de travail à volonté",
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
      description: "4 boxes 4x4 disponibles pour convalescence/poulinière"
    },
    {
      icon: Users,
      title: "Équipe Dédiée",
      description: "Personnel qualifié et passionné"
    },
    {
      icon: Star,
      title: "Cadre Exceptionnel",
      description: "45 hectares de prairies"
    }
  ];

  return (
    <div className="min-h-screen">
      <Seo
        title="Pension chevaux : troupeau, confort, sport | Dubraud (33)"
        description="Pension pré troupeau, confort ou pré-sport pour votre cheval en Haute-Gironde. Prairies, suivi attentif près de Blaye. Demandez disponibilités et tarifs."
        path="/pensions"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://domaine-dubraud.com' },
            { '@type': 'ListItem', position: 2, name: 'Pensions', item: 'https://domaine-dubraud.com/pensions' }
          ]
        }}
      />
      <Header />
      <main>
      {/* Header Simple et Direct */}
      <section className="pt-28 pb-6 bg-gradient-to-b from-brand-cream to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeInUp" className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-brand-brown mb-4 font-serif">
              Nos pensions pour chevaux : pré troupeau, confort, sport et installations
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-brand-brown via-brand-gold to-brand-brown mx-auto mb-6"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Cinq formules pensées pour répondre aux besoins spécifiques de votre cheval, dans un environnement exceptionnel de 45 hectares.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Pensions Grid - Améliorée */}
      <section id="pensions" className="pt-10 pb-20 bg-gradient-to-b from-white to-brand-cream/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeInUp" className="text-center mb-10">
            <motion.div
              className="flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
            >
              <span className="text-brand-brown font-semibold text-lg tracking-wide">NOS FORMULES</span>
            </motion.div>
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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
                    boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.15)",
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
              <Heart className="text-brand-gold mr-3" size={32} />
              <span className="text-brand-brown font-semibold text-lg tracking-wide">REJOIGNEZ-NOUS</span>
              <Heart className="text-brand-gold ml-3" size={32} />
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-brand-brown mb-6 font-serif">
              Offrez le Meilleur à Votre Cheval
            </h2>
            
            <p className="text-xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
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
                href="tel:+33695428477"
                variant="secondary" 
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
      </main>
      <Footer />
    </div>
  );
};

export default Pensions;
