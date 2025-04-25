
import React from 'react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
  image?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ 
  quote, 
  author, 
  company, 
  image 
}) => {
  return (
    <div className="bg-gray-900 p-6 md:p-8 rounded-lg border border-gray-800 h-full flex flex-col">
      <div className="mb-6">
        <svg className="w-8 h-8 text-teal-500 mb-4" fill="currentColor" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 8c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm12-14c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6z"></path>
        </svg>
        <p className="text-gray-300 italic">{quote}</p>
      </div>
      
      <div className="mt-auto flex items-center">
        {image && (
          <div className="mr-4">
            <img 
              src={image} 
              alt={author} 
              className="w-12 h-12 rounded-full object-cover"
            />
          </div>
        )}
        <div>
          <div className="font-medium text-white">{author}</div>
          <div className="text-gray-400 text-sm">{company}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
