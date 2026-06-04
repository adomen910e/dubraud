import React from 'react';
import { Helmet } from 'react-helmet-async';

// URL canonique de production (sans www, sans slash final — cf. redirections netlify.toml)
const SITE_URL = 'https://domaine-dubraud.com';
const DEFAULT_IMAGE = `${SITE_URL}/logo512.png`;

/**
 * Balises SEO par page : title, description, canonical, Open Graph et Twitter Card.
 * Centralise la logique pour garantir des métadonnées uniques et cohérentes sur chaque route.
 *
 * @param {string} title       Titre de la page (~60 caractères, unique).
 * @param {string} description Meta description (140-160 caractères, unique).
 * @param {string} path        Chemin de la route (ex. "/pensions"). "/" par défaut.
 * @param {string} [image]     URL absolue de l'image de partage social.
 * @param {object} [schema]    Données structurées JSON-LD additionnelles propres à la page.
 */
const Seo = ({ title, description, path = '/', image = DEFAULT_IMAGE, schema }) => {
  const canonical = `${SITE_URL}${path === '/' ? '' : path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content="Domaine de Dubraud" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {schema && (
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      )}
    </Helmet>
  );
};

export default Seo;
