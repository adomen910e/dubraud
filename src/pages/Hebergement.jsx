import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Home, Users, Star, Wifi, Car, Coffee, Bath, Bed } from 'lucide-react';
import Button from '../components/ui/Button';
import dubraud1 from '../assets/images/dubraud_1.png';
import dubraud2 from '../assets/images/dubraud_2.png';
import dubraud3 from '../assets/images/dubraud_3.png';

const HebergementCard = ({ image, title, description, price, features, amenities }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <div className="relative">
      <img src={image} alt={title} className="w-full h-64 object-cover" />
      <div className="absolute top-4 right-4 bg-amber-800 text-white px-3 py-1 rounded-full font-bold">
        {price}
      </div>
    </div>
    <div className="p-6">
      <h3 className="text-2xl font-bold text-amber-800 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      
      <div className="mb-4">
        <h4 className="font-semibold text-amber-800 mb-2">Équipements :</h4>
        <ul className="space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <span className="w-2 h-2 bg-amber-800 rounded-full mr-3"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h4 className="font-semibold text-amber-800 mb-2">Services inclus :</h4>
        <div className="flex flex-wrap gap-2">
          {amenities.map((amenity, index) => (
            <div key={index} className="flex items-center bg-amber-50 px-2 py-1 rounded text-xs text-amber-800">
              {amenity.icon && <amenity.icon size={12} className="mr-1" />}
              {amenity.name}
            </div>
          ))}
        </div>
      </div>

      <Button href="/contact" className="w-full">
        Réserver
      </Button>
    </div>
  </div>
);

const Hebergement = () => {
  const hebergements = [
    {
      image: dubraud1,
      title: "Gîte Rural",
      description: "Charmant gîte de 4 personnes au cœur du domaine, idéal pour un séjour en famille ou entre amis.",
      price: "120€/nuit",
      delay: 0,
      features: [
        "2 chambres doubles",
        "Salon avec cheminée",
        "Cuisine équipée",
        "Terrasse privée",
        "Vue sur les prairies"
      ],
      amenities: [
        { name: "WiFi", icon: Wifi },
        { name: "Parking", icon: Car },
        { name: "Petit-déjeuner", icon: Coffee },
        { name: "Salle de bain", icon: Bath }
      ]
    },
    {
      image: dubraud2,
      title: "Chambres d'Hôtes",
      description: "Chambres confortables dans la maison principale avec petit-déjeuner inclus.",
      price: "85€/nuit",
      delay: 0.3,
      features: [
        "Chambres avec salle de bain privée",
        "Petit-déjeuner fait maison",
        "Accès jardin et terrasse",
        "Décoration authentique",
        "Linge de maison fourni"
      ],
      amenities: [
        { name: "WiFi", icon: Wifi },
        { name: "Parking", icon: Car },
        { name: "Petit-déjeuner", icon: Coffee },
        { name: "Confort", icon: Bed }
      ]
    },
    {
      image: dubraud3,
      title: "Suite Familiale",
      description: "Grande suite pouvant accueillir jusqu'à 6 personnes, parfaite pour les grandes familles.",
      price: "180€/nuit",
      delay: 0.6,
      features: [
        "3 chambres communicantes",
        "2 salles de bain",
        "Coin salon privé",
        "Kitchenette",
        "Balcon avec vue panoramique"
      ],
      amenities: [
        { name: "WiFi", icon: Wifi },
        { name: "Parking", icon: Car },
        { name: "Petit-déjeuner", icon: Coffee },
        { name: "Espace famille", icon: Users }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 lg:pt-40 xl:pt-44 pb-16 bg-gradient-to-br from-amber-50 to-amber-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={dubraud3} alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-6">
            Hébergement au Domaine
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Séjournez dans un cadre exceptionnel au cœur de notre domaine équestre de 26 hectares
          </p>
        </div>
      </section>

      {/* Hébergements Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {hebergements.map((hebergement, index) => (
              <HebergementCard key={index} {...hebergement} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-800 mb-4">Services Inclus</h2>
            <p className="text-gray-600">
              Profitez de tous nos services pour un séjour inoubliable
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Home className="text-amber-800 mx-auto mb-4" size={48} />
              <h3 className="font-bold text-amber-800 mb-2">Confort Moderne</h3>
              <p className="text-gray-600">Hébergements entièrement rénovés avec tout le confort moderne</p>
            </div>
            <div className="text-center">
              <Coffee className="text-amber-800 mx-auto mb-4" size={48} />
              <h3 className="font-bold text-amber-800 mb-2">Petit-Déjeuner</h3>
              <p className="text-gray-600">Petit-déjeuner fait maison avec produits locaux</p>
            </div>
            <div className="text-center">
              <Car className="text-amber-800 mx-auto mb-4" size={48} />
              <h3 className="font-bold text-amber-800 mb-2">Parking Gratuit</h3>
              <p className="text-gray-600">Parking sécurisé gratuit pour tous nos hôtes</p>
            </div>
            <div className="text-center">
              <Star className="text-amber-800 mx-auto mb-4" size={48} />
              <h3 className="font-bold text-amber-800 mb-2">Cadre Unique</h3>
              <p className="text-gray-600">Séjour au cœur d'un domaine équestre authentique</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-800 mb-4">Galerie Photos</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <img src={dubraud1} alt="Gîte" className="w-full h-64 object-cover rounded-lg" />
            </div>
            <div>
              <img src={dubraud2} alt="Chambres" className="w-full h-64 object-cover rounded-lg" />
            </div>
            <div>
              <img src={dubraud3} alt="Suite" className="w-full h-64 object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Hebergement;
