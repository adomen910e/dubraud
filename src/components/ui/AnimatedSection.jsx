import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';

const AnimatedSection = ({ 
  children, 
  className = '', 
  animation = 'fadeInUp',
  delay = 0,
  duration = 0.8,
  threshold = 0.1,
  once = true 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { threshold, once });
  const controls = useAnimation();

  const animations = {
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    fadeInUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 }
    },
    fadeInDown: {
      hidden: { opacity: 0, y: -50 },
      visible: { opacity: 1, y: 0 }
    },
    fadeInLeft: {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 }
    },
    fadeInRight: {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 }
    },
    scaleIn: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 }
    },
    slideInUp: {
      hidden: { opacity: 0, y: 100 },
      visible: { opacity: 1, y: 0 }
    },
    rotateIn: {
      hidden: { opacity: 0, rotate: -10 },
      visible: { opacity: 1, rotate: 0 }
    }
  };

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={controls}
      variants={animations[animation]}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.25, 0.25, 0.75]
      }}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedSection;
