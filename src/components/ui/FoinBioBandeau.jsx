import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Wheat } from 'lucide-react';

/**
 * Bandeau compact « foin bio maison » — contextualise la qualité du fourrage
 * en tête des formules de pension.
 */
const FoinBioBandeau = () => (
  <section className="bg-brand-neutral/60" aria-label="Notre foin en agriculture biologique">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <motion.div
        className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 rounded-2xl bg-white border-l-4 border-brand-bio shadow-soft px-6 py-5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="flex-shrink-0 inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-bio/12 text-brand-bio">
          <Wheat size={26} aria-hidden="true" />
        </span>
        <p className="text-center sm:text-left text-gray-700 leading-relaxed">
          <span className="font-bold text-brand-primary">Foin &amp; enrubanné à volonté, produits sur place.</span>{' '}
          Toutes nos formules incluent un fourrage récolté sur nos prairies, menées en{' '}
          <span className="inline-flex items-center gap-1 font-semibold text-brand-bio-dark">
            <Leaf size={15} className="text-brand-bio" aria-hidden="true" /> agriculture biologique
          </span>.
        </p>
      </motion.div>
    </div>
  </section>
);

export default FoinBioBandeau;
