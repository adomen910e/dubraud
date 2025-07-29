import React from 'react';
import Button from '../ui/Button';

const About = () => {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-6">
              Le Domaine de Dubraud
            </h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Situé dans un cadre exceptionnel, le Domaine de Dubraud vous accueille dans une propriété authentique où se mêlent tradition et modernité. Notre passion pour les chevaux et l'hospitalité nous guide dans notre mission : offrir à vos compagnons équins un environnement optimal et à vous-même un séjour inoubliable.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Avec nos 26 hectares de prairies vallonnées, nos installations modernes et notre équipe expérimentée, nous garantissons le bien-être de vos chevaux tout en vous proposant un hébergement de qualité dans un cadre bucolique.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-800">26</div>
                <div className="text-gray-600">Hectares</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-800">30</div>
                <div className="text-gray-600">Boxes</div>
              </div>
            </div>
            
            <Button href="#contact">
              Découvrir nos prestations
            </Button>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img 
                src="/api/placeholder/600/400" 
                alt="Domaine de Dubraud - Vue extérieure" 
                className="w-full rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-amber-800 text-white p-6 rounded-xl shadow-lg">
                <div className="text-2xl font-bold">2025</div>
                <div className="text-sm">Depuis</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;