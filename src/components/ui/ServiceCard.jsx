import React from 'react';

const ServiceCard = ({ icon: Icon, title, description, features = [] }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
      <div className="text-amber-800 mb-6 flex justify-center">
        <Icon size={48} />
      </div>
      <h3 className="text-xl font-bold text-amber-800 mb-4 text-center">{title}</h3>
      <p className="text-gray-600 leading-relaxed text-center mb-4">{description}</p>
      {features.length > 0 && (
        <ul className="text-sm text-gray-500 space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <span className="w-2 h-2 bg-amber-800 rounded-full mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiceCard;