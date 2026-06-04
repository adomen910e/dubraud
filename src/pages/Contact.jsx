import React from 'react';
import Seo from '../components/seo/Seo';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Contact from '../components/sections/Contact';

const ContactPage = () => {
  return (
    <div className="min-h-screen">
      <Seo
        title="Contact & accès – Pension équestre Saint-Christoly | Dubraud"
        description="Contactez le Domaine de Dubraud à Saint-Christoly-de-Blaye (33920) : pension chevaux et gîtes à la ferme. Tél. +33 6 95 42 84 77. Venez nous visiter."
        path="/contact"
        schema={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Accueil', item: 'https://domaine-dubraud.com' },
            { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://domaine-dubraud.com/contact' }
          ]
        }}
      />
      <Header />
      <main className="pt-28">
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
