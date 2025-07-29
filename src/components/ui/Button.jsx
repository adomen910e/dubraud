import React from 'react';
import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  href, 
  className = '',
  disabled = false,
  icon,
  ...props 
}) => {
  const baseClasses = 'relative font-semibold rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed inline-flex items-center justify-center';
  
  const variants = {
    primary: 'bg-brand-brown hover:bg-brand-dark-brown text-white focus:ring-brand-brown shadow-medium hover:shadow-strong',
    secondary: 'bg-white hover:bg-brand-cream text-brand-brown border-2 border-brand-brown hover:border-brand-dark-brown focus:ring-brand-brown shadow-soft hover:shadow-medium',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-brand-brown focus:ring-white backdrop-blur-sm bg-white/10 hover:bg-white/90',
    ghost: 'text-brand-brown hover:bg-brand-beige/50 focus:ring-brand-brown',
    gradient: 'bg-gradient-to-r from-brand-brown to-brand-gold hover:from-brand-dark-brown hover:to-brand-light-brown text-white focus:ring-brand-gold shadow-glow hover:shadow-glow-strong',
    hero: 'bg-gradient-to-r from-brand-gold via-brand-light-brown to-brand-gold hover:from-brand-light-brown hover:via-brand-gold hover:to-brand-light-brown text-white focus:ring-brand-gold shadow-glow hover:shadow-glow-strong border-2 border-brand-gold/30 hover:border-brand-gold/60'
  };
  
  const sizes = {
    sm: 'px-4 py-2 text-sm min-h-[2.5rem]',
    md: 'px-6 py-3 text-base min-h-[3rem]',
    lg: 'px-8 py-4 text-lg min-h-[3.5rem]',
    xl: 'px-10 py-5 text-xl min-h-[4rem]'
  };
  
  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;
  
  const buttonContent = (
    <>
      {/* Effet de brillance au hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
        initial={{ x: '-100%' }}
        whileHover={{ x: '200%' }}
        transition={{ duration: 0.6 }}
      />
      
      {/* Effet de pulsation pour le variant gradient */}
      {variant === 'gradient' && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-brand-gold/30 to-brand-brown/30 rounded-full"
          animate={{ 
            scale: [1, 1.05, 1],
            opacity: [0.5, 0.8, 0.5]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
      
      {/* Effets spéciaux pour le variant hero */}
      {variant === 'hero' && (
        <>
          {/* Effet de lueur pulsante */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-brand-gold/40 via-brand-light-brown/40 to-brand-gold/40 rounded-full blur-sm"
            animate={{ 
              scale: [1, 1.1, 1],
              opacity: [0.6, 1, 0.6]
            }}
            transition={{ 
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          
          {/* Effet de rotation de gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full"
            animate={{ 
              rotate: [0, 360]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          
          {/* Particules dorées flottantes */}
          <motion.div
            className="absolute top-2 left-4 w-1 h-1 bg-yellow-300 rounded-full"
            animate={{ 
              y: [0, -8, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.2, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              delay: 0.2
            }}
          />
          <motion.div
            className="absolute bottom-2 right-6 w-0.5 h-0.5 bg-yellow-200 rounded-full"
            animate={{ 
              y: [0, -6, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{ 
              duration: 1.8,
              repeat: Infinity,
              delay: 0.8
            }}
          />
          <motion.div
            className="absolute top-1/2 right-3 w-0.5 h-0.5 bg-white/80 rounded-full"
            animate={{ 
              y: [0, -10, 0],
              x: [0, -5, 0],
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0]
            }}
            transition={{ 
              duration: 2.2,
              repeat: Infinity,
              delay: 1.2
            }}
          />
        </>
      )}
      
      {/* Contenu du bouton */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {icon && (
          <motion.span
            className="flex items-center"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            {icon}
          </motion.span>
        )}
        {children}
      </span>
      
      {/* Effet de particules pour les boutons importants */}
      {(variant === 'primary' || variant === 'gradient') && (
        <>
          <motion.div
            className="absolute top-1/2 left-1/4 w-1 h-1 bg-white/60 rounded-full"
            animate={{ 
              y: [-10, -20, -10],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              delay: 0
            }}
          />
          <motion.div
            className="absolute top-1/3 right-1/4 w-0.5 h-0.5 bg-white/40 rounded-full"
            animate={{ 
              y: [-5, -15, -5],
              opacity: [0, 1, 0],
              scale: [0, 1, 0]
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              delay: 0.5
            }}
          />
        </>
      )}
    </>
  );

  const MotionComponent = motion.button;
  const MotionLink = motion.a;

  if (href) {
    return (
      <MotionLink
        href={href}
        className={classes}
        whileHover={{ 
          scale: 1.05,
          y: -2
        }}
        whileTap={{ 
          scale: 0.98,
          y: 0
        }}
        transition={{ 
          type: "spring",
          stiffness: 400,
          damping: 17
        }}
        {...props}
      >
        {buttonContent}
      </MotionLink>
    );
  }
  
  return (
    <MotionComponent
      onClick={onClick}
      className={classes}
      disabled={disabled}
      whileHover={{ 
        scale: disabled ? 1 : 1.05,
        y: disabled ? 0 : -2
      }}
      whileTap={{ 
        scale: disabled ? 1 : 0.98,
        y: disabled ? 0 : 0
      }}
      transition={{ 
        type: "spring",
        stiffness: 400,
        damping: 17
      }}
      {...props}
    >
      {buttonContent}
    </MotionComponent>
  );
};

export default Button;
