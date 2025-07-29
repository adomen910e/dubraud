import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Home, Users, Star, Clock, Check } from 'lucide-react';
import Button from '../components/ui/Button';
import dubraud1 from '../assets/images/dubraud_1.png';
import dubraud2 from '../assets/images/dubraud_2.png';
import dubraud3 from '../assets/images/dubraud_3.png';

const PensionCard = ({ icon: Icon, title, description, price, features, image }) => (
  <div className="bg-white rounded-xl shadow-lg p-8 h-full hover:shadow-xl transition-shadow duration-300">
    <div className="relative mb-6">
      <img 
        src={image} 
        alt={title}
        className="w-full h-48 object-cover rounded-lg mb-4"
      />
      <div className="absolute top-4 right-4 text-amber-800 bg-white rounded-full p-2 shadow-lg">
        <Icon size={32} />
      </div>
    </div>
    <h3 className="text-2xl font-bold text-amber-800 mb-4">{title}</h3>
    <p className="text-gray-600 mb-6">{description}</p>
    <div className="text-3xl font-bold text-amber-800 mb-6">{price}</div>
    <ul className="space-y-3 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-gray-600">
          <Check className="text-green-500 mr-3" size={16} />
          {feature}
        </li>
      ))}
    </ul>
    <Button href="/contact" className="w-full">
      Réserver
    </Button>
  </div>
);

const Pensions = () => {
  const pensions = [
    {
      icon: Home,
      title: "Pension Pré-Troupeau",
      description: "Pension en groupe avec rotation de prairies et soins de base",
      price: "170€/mois",
      image: dubraud1,
      delay: 0,
      features: [
        "Troupeau de 4 chevaux maximum",
        "Rotation de prairies",
        "Foin à volonté",
        "Abris de prairies avec aires stabilisées",
        "Repas complémentaire en option"
      ]
    },
    {
      icon: Users,
      title: "Pension Pré-Sport",
      description: "Pré individuel ou duo avec accès aux installations",
      price: "240€/mois",
      image: dubraud2,
      delay: 0.3,
      features: [
        "Pré individuel ou duo",
        "Foin à volonté",
        "Abris de prairies avec aires stabilisées",
        "Deux repas de complément par jour",
        "Accès aux installations",
        "À VENIR 09/2026"
      ]
    },
    {
      icon: Star,
      title: "Pension Boxes/Paddock",
      description: "Box individuel avec paddock et accès complet aux équipements",
      price: "450€/mois",
      image: dubraud3,
      delay: 0.6,
      features: [
        "Box 3x4m avec sortie autonome",
        "Paddock individuel",
        "Foin à volonté",
        "Deux repas de complément par jour",
        "Accès aux installations",
        "À VENIR 09/2026"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 lg:pt-40 xl:pt-44 pb-16 bg-gradient-to-br from-amber-50 to-amber-100 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={dubraud1} alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-6">
            Nos Formules de Pension
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choisissez la formule adaptée aux besoins de votre cheval dans notre domaine de 26 hectares
          </p>
        </div>
      </section>

      {/* Pensions Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pensions.map((pension, index) => (
              <PensionCard key={index} {...pension} />
            ))}
          </div>
        </div>
      </section>

      {/* Options et Services */}
      <section className="py-16 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-800 mb-4">Options et Services Supplémentaires</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Options */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-amber-800 mb-4">Forfait Soin</h3>
              <div className="text-2xl font-bold text-amber-800 mb-4">40€/mois</div>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" size={16} />
                  Séance de pansage/soin hebdomadaire
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" size={16} />
                  Gestion du maréchal
                </li>
                <li className="flex items-center">
                  <Check className="text-green-500 mr-2" size={16} />
                  Gestion vétérinaire et ostéopathe
                </li>
                <li className="text-sm text-gray-500 mt-2">
                  Produits et prestations extérieures à votre charge
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-amber-800 mb-4">Supplément Ration</h3>
              <div className="text-2xl font-bold text-amber-800 mb-4">40€/mois</div>
              <p className="text-gray-600">
                Ration de complément pour pension pré-troupeau
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-amber-800 mb-4">Droit de Piste</h3>
              <div className="text-2xl font-bold text-amber-800 mb-4">12€/cheval</div>
              <p className="text-gray-600">
                Accès manège ou carrière
              </p>
              <p className="text-sm text-orange-600 font-semibold mt-2">
                À VENIR 09/2026
              </p>
            </div>
          </div>

          {/* Services de Travail */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-amber-800 mb-6 text-center">Services de Travail</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-bold text-amber-800 mb-4">Séances Individuelles</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Séance de travail monté ou longé (soin compris)</span>
                    <span className="font-bold text-amber-800">30€</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Mise au marcheur ponctuelle</span>
                    <span className="font-bold text-amber-800">5€</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-bold text-amber-800 mb-4">Forfaits Travail</h4>
                <p className="text-sm text-gray-600 mb-3">Séances de travail + mise au marcheur à volonté</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">2x par semaine</span>
                    <span className="font-bold text-amber-800">200€</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">3x par semaine</span>
                    <span className="font-bold text-amber-800">264€</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">4x par semaine</span>
                    <span className="font-bold text-amber-800">320€</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    &gt;4x par semaine, nous consulter
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-amber-800 mb-4">Services Inclus</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Clock className="text-amber-800 mx-auto mb-4" size={48} />
              <h3 className="font-bold text-amber-800 mb-2">Surveillance 24h/7j</h3>
              <p className="text-gray-600">Nos équipes veillent sur vos chevaux jour et nuit</p>
            </div>
            <div className="text-center">
              <Home className="text-amber-800 mx-auto mb-4" size={48} />
              <h3 className="font-bold text-amber-800 mb-2">Boxes Modernes</h3>
              <p className="text-gray-600">30 boxes spacieux et confortables</p>
            </div>
            <div className="text-center">
              <Users className="text-amber-800 mx-auto mb-4" size={48} />
              <h3 className="font-bold text-amber-800 mb-2">Équipe Experte</h3>
              <p className="text-gray-600">Personnel qualifié et passionné</p>
            </div>
            <div className="text-center">
              <Star className="text-amber-800 mx-auto mb-4" size={48} />
              <h3 className="font-bold text-amber-800 mb-2">Cadre Exceptionnel</h3>
              <p className="text-gray-600">26 hectares de prairies vallonnées</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pensions;
