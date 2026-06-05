import React from 'react';
import { Leaf } from 'lucide-react';

/**
 * Pastille « Foin bio maison » réutilisable.
 *
 * Met en avant l'argument différenciant du domaine : le foin et l'enrubanné
 * sont produits sur place, en agriculture biologique.
 *
 * @param {'inline'|'overlay'} variant - `inline` = chip dans une liste / un texte ;
 *                                        `overlay` = pastille posée sur une image.
 * @param {string} label - texte affiché (défaut : "Foin bio maison").
 */
const FoinBioBadge = ({ variant = 'inline', label = 'Foin bio maison', className = '' }) => {
  const base =
    'inline-flex items-center gap-1.5 font-semibold tracking-wide rounded-full';

  if (variant === 'overlay') {
    return (
      <span
        className={`${base} bg-white/95 backdrop-blur-sm text-brand-bio-dark border border-brand-bio/30 shadow-md px-3 py-1.5 text-xs ${className}`}
        role="img"
        aria-label="Foin et enrubanné produits sur place en agriculture biologique"
      >
        <Leaf size={14} className="text-brand-bio" aria-hidden="true" />
        {label}
      </span>
    );
  }

  return (
    <span
      className={`${base} bg-brand-bio/10 text-brand-bio-dark border border-brand-bio/25 px-2.5 py-1 text-xs ${className}`}
      role="img"
      aria-label="Foin et enrubanné produits sur place en agriculture biologique"
    >
      <Leaf size={13} className="text-brand-bio" aria-hidden="true" />
      {label}
    </span>
  );
};

export default FoinBioBadge;
