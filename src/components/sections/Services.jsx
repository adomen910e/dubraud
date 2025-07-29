import React from 'react';
import { Home, Building, Star, Users, MapPin, Heart } from 'lucide-react';
import ServiceCard from '../ui/ServiceCard';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: "Pension Retraite",
      description: "Un environnement paisible pour vos chevaux en fin de carrière, avec soins adaptés et surveillance quotidienne.",
      features: ["Surveillance 24h/7j", "Soins vétérinaires", "Prairies spacieuses"]
    },
    {
      icon: Users,
      title: "Pension Pré Sport",
      description: "Parfait pour les chevaux au repos entre les compétitions, avec possibilité de travail léger.",
      features: ["Paddocks individuels", "Accès aux installations", "Suivi personnalisé"]
    },
    {
      icon: Star,
      title: "Pension Travail",
      description: "Pour les chevaux en activité avec accès complet aux installations d'entraînement.",
      features: ["Carrières disponibles", "Rond de longe", "Accompagnement professionnel"]
    },
    {
      icon: Building,
      title: "Gîte Rural",
      description: "Hébergement de charme dans une propriété authentique, idéal pour les familles.",
      features: ["Capacité 6-8 personnes", "Cuisine équipée", "Terrasse privée"]
    },
    {
      icon: Heart,
      title: "Chambres d'Hôtes",
      description: "Chambres confortables avec petit-déjeuner dans un cadre bucolique.",
      features: ["3 chambres disponibles", "Petit-déjeuner inclus", "Vue sur les prairies"]
    },
    {
      icon: MapPin,
      title: "Cadre Exceptionnel",
      description: "26 hectares de prairies vallonnées dans un environnement préservé.",
      features: ["Prairies vallonnées", "Espaces boisés", "Abreuvoirs automatiques"]
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-800 mb-4">Nos Services</h2>
          <div className="w-20 h-1 bg-amber-800 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez nos différentes prestations adaptées à vos besoins et ceux de vos chevaux
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;