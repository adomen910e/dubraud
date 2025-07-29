import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, features = [], delay = 0, className = '' }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className={`relative bg-white rounded-2xl shadow-soft hover:shadow-strong p-8 h-full overflow-hidden group cursor-pointer ${className}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, threshold: 0.1 }}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.25, 0.25, 0.25, 0.75]
      }}
      whileHover={{ 
        y: -8,
        scale: 1.02
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Gradient de fond animé */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-brand-beige/20 via-transparent to-brand-gold/10 rounded-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Effet de brillance */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
      />

      {/* Icône avec animation */}
      <motion.div 
        className="relative mb-6 flex justify-center"
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
      >
        <motion.div
          className="relative p-4 rounded-2xl bg-gradient-to-br from-brand-brown to-brand-gold text-white shadow-medium"
          animate={{ 
            rotate: isHovered ? [0, -5, 5, 0] : 0,
          }}
          transition={{ duration: 0.5 }}
        >
          <Icon size={48} />
          
          {/* Effet de pulsation */}
          <motion.div
            className="absolute inset-0 rounded-2xl bg-brand-gold/30"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.5, 0, 0.5]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        {/* Particules flottantes */}
        <motion.div
          className="absolute -top-2 -right-2 w-2 h-2 bg-brand-gold/60 rounded-full"
          animate={{ 
            y: [0, -10, 0],
            opacity: [0.6, 1, 0.6],
            scale: [0.8, 1.2, 0.8]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            delay: 0.5
          }}
        />
        <motion.div
          className="absolute -bottom-1 -left-1 w-1 h-1 bg-brand-brown/40 rounded-full"
          animate={{ 
            y: [0, -8, 0],
            opacity: [0.4, 0.8, 0.4],
            scale: [0.5, 1, 0.5]
          }}
          transition={{ 
            duration: 1.8,
            repeat: Infinity,
            delay: 1
          }}
        />
      </motion.div>

      {/* Titre avec animation */}
      <motion.h3 
        className="text-2xl font-bold text-brand-brown mb-4 text-center relative"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: delay + 0.2 }}
      >
        {title}
        <motion.div
          className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-brand-gold"
          initial={{ width: 0 }}
          animate={{ width: isHovered ? '60%' : '30%' }}
          transition={{ duration: 0.3 }}
        />
      </motion.h3>

      {/* Description */}
      <motion.p 
        className="text-gray-600 leading-relaxed text-center mb-6 relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: delay + 0.3 }}
      >
        {description}
      </motion.p>

      {/* Features avec animations */}
      {features.length > 0 && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          whileInView={{ opacity: 1, height: 'auto' }}
          transition={{ delay: delay + 0.4, duration: 0.5 }}
          className="relative z-10"
        >
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <motion.li 
                key={index}
                className="flex items-center text-gray-600 text-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: delay + 0.5 + index * 0.1 }}
              >
                <motion.div
                  className="mr-3 flex-shrink-0"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <Check size={16} className="text-brand-forest" />
                </motion.div>
                <span className="flex-1">{feature}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Bouton d'action caché qui apparaît au hover */}
      <motion.div
        className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ 
          scale: isHovered ? 1 : 0,
          rotate: isHovered ? 0 : -180
        }}
        transition={{ 
          type: "spring",
          stiffness: 400,
          damping: 15
        }}
      >
        <div className="w-10 h-10 bg-brand-gold rounded-full flex items-center justify-center text-white shadow-medium hover:shadow-strong cursor-pointer">
          <ArrowRight size={18} />
        </div>
      </motion.div>

      {/* Effet de bordure animée */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-transparent"
        animate={{
          borderColor: isHovered ? 'rgba(217, 119, 6, 0.3)' : 'transparent'
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Éléments décoratifs */}
      <motion.div
        className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-brand-gold/10 to-transparent rounded-full"
        animate={{ 
          scale: isHovered ? [1, 1.2, 1] : 1,
          rotate: isHovered ? 360 : 0
        }}
        transition={{ duration: 1 }}
      />
    </motion.div>
  );
};

export default ServiceCard;
