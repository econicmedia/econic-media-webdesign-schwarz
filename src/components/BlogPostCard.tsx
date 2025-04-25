
import React from 'react';
import { Link } from 'react-router-dom';

interface BlogPostCardProps {
  title: string;
  excerpt: string;
  date: string;
  image: string;
  author: string;
  slug: string;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ 
  title, 
  excerpt, 
  date, 
  image, 
  author, 
  slug 
}) => {
  return (
    <Link 
      to={`/blog/${slug}`} 
      className="block group h-full"
    >
      <article className="h-full flex flex-col bg-gray-900 rounded-lg overflow-hidden border border-gray-800 hover:border-teal-600/50 transition-all duration-300">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        
        <div className="p-6 flex flex-col flex-grow">
          <p className="text-teal-400 text-sm mb-2">{date}</p>
          <h3 className="text-xl font-semibold mb-3 group-hover:text-teal-400 transition-colors">{title}</h3>
          <p className="text-gray-400 mb-4 flex-grow">{excerpt}</p>
          <p className="text-sm text-gray-500">Von {author}</p>
        </div>
      </article>
    </Link>
  );
};

export default BlogPostCard;
