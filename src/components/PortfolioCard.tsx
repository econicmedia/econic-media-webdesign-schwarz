
import React from 'react';
import { Link } from 'react-router-dom';

interface PortfolioCardProps {
  title: string;
  category: string;
  image: string;
  link: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ 
  title, 
  category, 
  image, 
  link 
}) => {
  return (
    <Link 
      to={link} 
      className="block group relative overflow-hidden rounded-lg bg-gray-900 aspect-video"
    >
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors z-10"></div>
      
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      
      <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
        <div className="transform transition-transform duration-300 group-hover:translate-y-0">
          <p className="text-teal-400 text-sm font-medium mb-2">{category}</p>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default PortfolioCard;
