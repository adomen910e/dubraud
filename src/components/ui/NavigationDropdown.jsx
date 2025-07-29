import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const NavigationDropdown = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button className="text-amber-800 hover:text-amber-600 font-semibold flex items-center transition-colors">
        {title}
        <ChevronDown className="ml-1 h-4 w-4" />
      </button>
      <div className={`absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg transition-all duration-300 ${
        isOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
      }`}>
        {items.map((item, index) => (
          <a 
            key={index}
            href={item.href} 
            className="block px-4 py-2 text-sm text-amber-800 hover:bg-amber-50 first:rounded-t-md last:rounded-b-md transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
};

export default NavigationDropdown;