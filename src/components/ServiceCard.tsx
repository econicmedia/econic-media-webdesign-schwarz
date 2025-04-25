
import React from 'react';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, link }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-teal-600/50 transition-all duration-300 h-full flex flex-col">
      <div className="bg-teal-600/20 w-14 h-14 rounded-lg flex items-center justify-center text-teal-500 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400 mb-5 flex-grow">{description}</p>
      <Link 
        to={link}
        className="text-teal-400 hover:text-teal-300 flex items-center font-medium transition-colors"
      >
        Mehr erfahren
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-4 w-4 ml-2" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M9 5l7 7-7 7" 
          />
        </svg>
      </Link>
    </div>
  );
};

export default ServiceCard;
