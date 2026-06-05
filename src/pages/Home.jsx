import React from 'react';
import Seo from '../components/seo/Seo';
import Header from '../components/layout/Header';
import Hero from '../components/sections/Hero';
import Services from '../components/sections/Services';
import FoinBioHighlight from '../components/sections/FoinBioHighlight';
import About from '../components/sections/About';
import Footer from '../components/layout/Footer';

const Home = () => {
  return (
    <div className="min-h-screen">
      <Seo
        title="Pension pour chevaux en Gironde | Domaine de Dubraud"
        description="Pension et élevage de chevaux sur 50 ha de prairies à Saint-Christoly-de-Blaye, près de Bordeaux. Pré-retraite, pré-sport, box et gîtes à la ferme. Appelez-nous."
        path="/"
      />
      <Header />
      <main>
        {/* H1 stable et descriptif pour le référencement (le titre animé du Hero ne fait pas office de H1) */}
        <h1 className="sr-only">Pension et élevage de chevaux en Gironde — Domaine de Dubraud, Saint-Christoly-de-Blaye</h1>
        <Hero />
        <Services />
        <FoinBioHighlight />
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
