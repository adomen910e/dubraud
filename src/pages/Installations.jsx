import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { MapPin, Home, Zap, Droplets, Building, Trees, Shield, Wrench } from 'lucide-react';
import dubraud1 from '../assets/images/dubraud_1.png';
import dubraud2 from '../assets/images/dubraud_2.png';
import dubraud3 from '../assets/images/dubraud_3.png';

const InstallationCard = ({ image, title, description, features, icon: Icon }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <div className="relative">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="absolute top-4 right-4 text-amber-800 bg-white rounded-full p-3 shadow-lg">
        <Icon size={32} />
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-amber-800 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="w-2 h-2 bg-amber-800 rounded-full mr-3"></span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Installations = () => {
  const installations = [
    {
      image: dubraud1,
      title: "Carrières et Manège",
      description: "Installations sportives de qualité pour l'entraînement et le dressage",
      icon: Building,
      delay: 0,
      features: [
        "2 carrières extérieures",
        "1 manège couvert",
        "Sol en sable de Loire",
        "Éclairage LED"
      ]
    },
    {
      image: dubraud2, 
      title: "Écuries et Boxes",
      description: "30 boxes modernes et spacieux pour le confort de vos chevaux",
      icon: Home,
      delay: 0.3,
      features: [
        "Boxes de 12m²",
        "Ventilation optimale",
        "Distributeurs d'eau automatiques",
        "Sols antidérapants"
      ]
    },
    {
      image: dubraud3,
      title: "Prairies et Paddocks",
      description: "26 hectares de prairies vallonnées pour le bien-être de vos chevaux",
      icon: Trees,
      delay: 0.6,
      features: [
        "Prairies rotatives",
        "Paddocks individuels",
        "Clôtures sécurisées",
        "Abris naturels"
      ]
    },
    {
      image: dubraud1,
      title: "Installations Annexes",
      description: "Tous les équipements nécessaires pour un service complet",
      icon: Wrench,
      delay: 0.9,
      features: [
        "Sellerie commune",
        "Douches pour chevaux",
        "Parking visiteurs",
        "Local matériel"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="pt-32 lg:pt-40 xl:pt-44 pb-16 bg-gradient-to-br from-amber-50 to-amber-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={dubraud2} alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-6">
            Nos Installations
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez nos équipements modernes conçus pour le bien-être et l'entraînement de vos chevaux
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {installations.map((installation, index) => (
              <InstallationCard key={index} {...installation} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Installations;
