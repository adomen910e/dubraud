import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, ArrowDown, Mail } from 'lucide-react';
import Button from '../ui/Button';
import dubraud1 from '../../assets/images/dubraud_1.png';
import dubraud2 from '../../assets/images/cadre.jpg';
import dubraud3 from '../../assets/images/dubraud_3.png';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const slides = [
    {
      image: dubraud1,
      title: "Bienvenue au Domaine de Dubraud",
      subtitle: "Pensions et élevage équestre, activité agricoles et gîtes à la ferme.",
      cta: "Découvrir nos services"
    },
    {
      image: dubraud2,
      title: "Un cadre naturel préservé",
      subtitle: "45 hectares de prairies pour le bien-être de vos chevaux",
      cta: "Voir nos installations"
    },
    {
      image: dubraud3,
      title: "Des installations modernes",
      subtitle: "Équipements de qualité pour l'épanouissement de vos compagnons",
      cta: "Nos formules pension"
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    
    return () => clearInterval(timer);
  }, [slides.length, isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Carrousel d'images avec parallax */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
          >
            <img 
              src={slides[currentSlide].image} 
              alt={slides[currentSlide].title}
              className="w-full h-full object-cover"
            />
            <motion.div 
              className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
            />
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Contrôles du carrousel */}
      <motion.button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 group"
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        <ChevronLeft size={28} className="group-hover:animate-pulse" />
      </motion.button>
      
      <motion.button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 group"
        whileHover={{ scale: 1.1, x: 5 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1 }}
      >
        <ChevronRight size={28} className="group-hover:animate-pulse" />
      </motion.button>
      
      {/* Indicateurs avec progression */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => goToSlide(index)}
            className={`relative w-12 h-1 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white/40 hover:bg-white/60'
            }`}
            whileHover={{ scale: 1.2 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
          >
            {index === currentSlide && isAutoPlaying && (
              <motion.div
                className="absolute top-0 left-0 h-full bg-brand-gold rounded-full"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 6, ease: "linear" }}
              />
            )}
          </motion.button>
        ))}
      </div>
      
      {/* Contenu principal */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-serif leading-tight"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              {slides[currentSlide].title}
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl lg:text-2xl mb-10 max-w-4xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {slides[currentSlide].subtitle}
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Button 
                href="/contact" 
                variant="hero"
                size="lg"
                icon={<Mail size={20} />}
                className="font-bold tracking-wide shadow-2xl transform hover:scale-110 transition-all duration-300"
              >
                Nous contacter
              </Button>
              
              <Button 
                onClick={scrollToServices}
                variant="outline" 
                size="lg"
                className="group"
              >
                <span>{slides[currentSlide].cta}</span>
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Play size={18} />
                </motion.div>
              </Button>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 text-white/80"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <motion.button
          onClick={scrollToServices}
          className="flex flex-col items-center space-y-2 hover:text-white transition-colors group"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-sm font-light tracking-wide">Découvrir</span>
          <ArrowDown size={20} className="group-hover:animate-bounce" />
        </motion.button>
      </motion.div>

      {/* Éléments décoratifs flottants */}
      <motion.div
        className="absolute top-1/4 left-10 w-2 h-2 bg-white/30 rounded-full"
        animate={{ 
          y: [0, -20, 0],
          opacity: [0.3, 0.8, 0.3]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          delay: 0
        }}
      />
      <motion.div
        className="absolute top-1/3 right-16 w-1 h-1 bg-brand-gold/50 rounded-full"
        animate={{ 
          y: [0, -15, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ 
          duration: 2.5,
          repeat: Infinity,
          delay: 1
        }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-1.5 h-1.5 bg-white/40 rounded-full"
        animate={{ 
          y: [0, -25, 0],
          opacity: [0.4, 0.9, 0.4]
        }}
        transition={{ 
          duration: 3.5,
          repeat: Infinity,
          delay: 2
        }}
      />
    </section>
  );
};

export default Hero;
