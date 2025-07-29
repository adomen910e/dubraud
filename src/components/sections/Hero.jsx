import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';
import dubraud1 from '../../assets/images/dubraud_1.png';
import dubraud2 from '../../assets/images/dubraud_2.png';
import dubraud3 from '../../assets/images/dubraud_3.png';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: dubraud1,
      title: "Bienvenue au Domaine de Dubraud",
      subtitle: "Pension pour chevaux & Hébergement de charme dans un cadre exceptionnel"
    },
    {
      image: dubraud2,
      title: "Un cadre naturel préservé",
      subtitle: "26 hectares de prairies vallonnées pour le bien-être de vos chevaux"
    },
    {
      image: dubraud3,
      title: "Des installations modernes",
      subtitle: "Équipements de qualité pour l'épanouissement de vos compagnons"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section id="accueil" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28">
      {/* Carrousel d'images */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={slide.image} 
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-40"></div>
          </div>
        ))}
      </div>
      
      {/* Contrôles du carrousel */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-300"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-300"
      >
        <ChevronRight size={24} />
      </button>
      
      {/* Indicateurs */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          />
        ))}
      </div>
      
      {/* Contenu */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-serif">
          {slides[currentSlide].title}
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
          {slides[currentSlide].subtitle}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/contact" size="lg">
            Nous contacter
          </Button>
          <Button href="#services" variant="outline" size="lg">
            Découvrir nos services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
