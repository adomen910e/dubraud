import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Wheat, Sprout, RefreshCw } from 'lucide-react';
import imgPrairie from '../../assets/images/prairie.webp';

// Chiffres strictement issus des faits réels du domaine (cf. About.jsx) — rien d'inventé.
const stats = [
  { icon: Sprout, value: '50 ha', label: 'de prairies naturelles & artificielles' },
  { icon: RefreshCw, value: '1,5 ha', label: 'par cheval / an, en pâturage tournant' },
  { icon: Wheat, value: '100 %', label: 'foin & enrubanné produits sur place' },
  { icon: Leaf, value: 'Bio', label: 'prairies conduites en agriculture biologique' },
];

const FoinBioHighlight = () => {
  return (
    <section
      className="relative py-20 md:py-28 bg-brand-neutral overflow-hidden"
      aria-labelledby="foin-bio-title"
    >
      {/* Texture organique discrète */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.07]">
        <Wheat className="absolute -top-6 -left-6 w-48 h-48 text-brand-bio-dark -rotate-12" />
        <Leaf className="absolute bottom-0 right-4 w-40 h-40 text-brand-bio-dark rotate-12" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Colonne texte + chiffres */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full bg-brand-bio/10 border border-brand-bio/25">
              <Leaf size={16} className="text-brand-bio" aria-hidden="true" />
              <span className="text-brand-bio-dark font-semibold text-sm tracking-[0.15em] uppercase">
                Notre fourrage
              </span>
            </div>

            <h2
              id="foin-bio-title"
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-primary mb-6 font-serif leading-tight"
            >
              Un foin bio,
              <span className="block text-brand-bio-dark">récolté sur nos prairies.</span>
            </h2>

            <div className="w-20 h-1 bg-gradient-to-r from-brand-bio to-brand-bio-light mb-7 rounded-full" />

            <p className="text-gray-700 text-lg leading-relaxed mb-10 max-w-xl">
              Ici, vos chevaux mangent ce que nous cultivons. Le foin et l'enrubanné sont
              <strong className="text-brand-primary font-semibold"> réalisés par nos soins</strong>, sur nos prairies
              naturelles et artificielles menées en <strong className="text-brand-bio-dark font-semibold">agriculture
              biologique</strong>. Une autonomie fourragère qui garantit une alimentation saine, tracée et
              disponible à volonté toute l'année.
            </p>

            {/* Chiffres clés en liste de définition (sémantique + accessible) */}
            <dl className="grid grid-cols-2 gap-4 sm:gap-6">
              {stats.map(({ icon: Icon, value, label }, i) => (
                <motion.div
                  key={value}
                  className="flex items-start gap-3 rounded-2xl bg-white/70 backdrop-blur-sm border border-brand-bio/15 p-4 shadow-soft"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
                >
                  <span className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand-bio/12 text-brand-bio-dark">
                    <Icon size={20} aria-hidden="true" />
                  </span>
                  <div>
                    <dt className="text-2xl font-bold text-brand-primary leading-none mb-1">{value}</dt>
                    <dd className="text-sm text-gray-600 leading-snug">{label}</dd>
                  </div>
                </motion.div>
              ))}
            </dl>
          </motion.div>

          {/* Colonne image + sceau bio flottant */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative overflow-hidden rounded-4xl shadow-strong">
              <img
                src={imgPrairie}
                alt="Prairies du Domaine de Dubraud où sont récoltés le foin et l'enrubanné bio pour les chevaux"
                loading="lazy"
                decoding="async"
                className="w-full h-80 lg:h-[28rem] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/30 to-transparent" />
            </div>

            {/* Sceau « 100% maison · Bio » */}
            <motion.div
              className="absolute -bottom-6 -left-6 sm:-left-8 bg-white rounded-3xl shadow-strong px-6 py-5 flex items-center gap-4 border border-brand-bio/20"
              initial={{ scale: 0, rotate: -8 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, type: 'spring', stiffness: 300, damping: 16 }}
            >
              <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-brand-bio/12 text-brand-bio">
                <Leaf size={30} aria-hidden="true" />
              </span>
              <div>
                <div className="text-brand-primary font-bold text-lg leading-tight font-serif">Foin maison</div>
                <div className="text-brand-bio-dark text-sm font-semibold">Agriculture biologique</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FoinBioHighlight;
