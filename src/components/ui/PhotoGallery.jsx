import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

// Fonction pour importer automatiquement toutes les images du dossier galerie
const importAll = (r) => {
  let images = {};
  r.keys().forEach((item) => {
    images[item.replace('./', '')] = r(item);
  });
  return images;
};

// Import automatique de toutes les images du dossier galerie
const galleryImages = importAll(
  require.context('../../assets/galerie', false, /\.(png|jpe?g|svg)$/)
);

const PhotoGallery = ({ className = "" }) => {
  // Conversion des images importées en format utilisable
  const images = Object.entries(galleryImages).map(([path, src], index) => ({
    src: src.default || src,
    alt: `Photo ${index + 1} du domaine`,
    title: `Photo ${index + 1}`,
    description: ""
  }));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [imageOrientation, setImageOrientation] = useState('landscape');

  // Fonction pour détecter l'orientation de l'image
  const detectImageOrientation = (imgSrc) => {
    const img = new Image();
    img.onload = () => {
      const orientation = img.width > img.height ? 'landscape' : 'portrait';
      setImageOrientation(orientation);
    };
    img.src = imgSrc;
  };

  // Détecter l'orientation quand l'image change
  useEffect(() => {
    if (images.length > 0) {
      detectImageOrientation(images[currentIndex].src);
    }
  }, [currentIndex, images]);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay || isModalOpen) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length, isAutoPlay, isModalOpen]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const openModal = () => {
    setIsModalOpen(true);
    setIsAutoPlay(false);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsAutoPlay(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') closeModal();
    if (e.key === 'ArrowLeft') goToPrevious();
    if (e.key === 'ArrowRight') goToNext();
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen, currentIndex]);

  return (
    <>
      <div className={`relative ${className}`}>
        {/* Main Gallery Display */}
        <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Main Image Container */}
          <div 
            className="relative overflow-hidden transition-all duration-500" 
            style={{ 
              minHeight: imageOrientation === 'portrait' ? '600px' : '400px',
              maxHeight: imageOrientation === 'portrait' ? '700px' : '500px'
            }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <img
                  src={images[currentIndex].src}
                  alt={images[currentIndex].alt}
                  className="max-w-full max-h-[600px] object-contain cursor-zoom-in"
                  onClick={openModal}
                  style={{ 
                    width: 'auto', 
                    height: 'auto',
                    maxWidth: '100%',
                    maxHeight: '600px'
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-brand-brown rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 group"
              onMouseEnter={() => setIsAutoPlay(false)}
              onMouseLeave={() => setIsAutoPlay(true)}
            >
              <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform duration-300" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-brand-brown rounded-full p-3 shadow-lg transition-all duration-300 hover:scale-110 group"
              onMouseEnter={() => setIsAutoPlay(false)}
              onMouseLeave={() => setIsAutoPlay(true)}
            >
              <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            {/* Zoom Icon */}
            <button
              onClick={openModal}
              className="absolute top-4 right-4 bg-white/90 hover:bg-white text-brand-brown rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ZoomIn size={20} />
            </button>

            {/* Auto-play indicator */}
            <div className="absolute top-4 left-4 flex items-center space-x-2">
              <div className={`w-2 h-2 rounded-full ${isAutoPlay ? 'bg-green-500' : 'bg-gray-400'} transition-colors duration-300`} />
              <span className="text-white text-sm font-medium bg-black/50 px-2 py-1 rounded">
                {isAutoPlay ? 'Auto' : 'Manuel'}
              </span>
            </div>
          </div>

        </div>

        {/* Thumbnail Navigation */}
        <div className="mt-6">
          <div className="flex justify-center space-x-3 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  index === currentIndex 
                    ? 'border-brand-gold shadow-lg scale-110' 
                    : 'border-gray-300 hover:border-brand-brown hover:scale-105'
                }`}
                whileHover={{ scale: index === currentIndex ? 1.1 : 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                {index === currentIndex && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="absolute inset-0 bg-brand-gold/20 border-2 border-brand-gold rounded-lg"
                  />
                )}
                <div className="absolute bottom-1 right-1 bg-black/70 text-white text-xs px-1 rounded">
                  {index + 1}
                </div>
              </motion.button>
            ))}
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center mt-4 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-brand-gold scale-125' 
                  : 'bg-gray-300 hover:bg-brand-brown'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Modal for Full-Screen View */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-7xl max-h-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-all duration-300"
              >
                <X size={24} />
              </button>

              {/* Navigation in Modal */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-all duration-300"
              >
                <ChevronLeft size={28} />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-all duration-300"
              >
                <ChevronRight size={28} />
              </button>

              {/* Full-size Image */}
              <motion.img
                key={`modal-${currentIndex}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                className="max-w-full max-h-full object-contain rounded-lg"
              />

              {/* Image Counter in Modal */}
              <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-2 rounded-lg">
                <span className="text-sm text-gray-300">
                  {currentIndex + 1} / {images.length}
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PhotoGallery;
