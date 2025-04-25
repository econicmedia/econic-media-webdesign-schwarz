
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">Econic Media</h3>
            <p className="text-gray-300">
              Professionelle Webdesign- und Entwicklungslösungen für Unternehmen in Deutschland.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white">Sitemap</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-teal-400 transition-colors">Startseite</Link></li>
              <li><Link to="/uber-uns" className="text-gray-300 hover:text-teal-400 transition-colors">Über uns</Link></li>
              <li><Link to="/dienstleistungen" className="text-gray-300 hover:text-teal-400 transition-colors">Dienstleistungen</Link></li>
              <li><Link to="/portfolio" className="text-gray-300 hover:text-teal-400 transition-colors">Portfolio</Link></li>
              <li><Link to="/blog" className="text-gray-300 hover:text-teal-400 transition-colors">Blog</Link></li>
              <li><Link to="/kontakt" className="text-gray-300 hover:text-teal-400 transition-colors">Kontakt</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white">Dienstleistungen</h4>
            <ul className="space-y-2">
              <li><a href="/dienstleistungen#webdesign" className="text-gray-300 hover:text-teal-400 transition-colors">Webdesign</a></li>
              <li><a href="/dienstleistungen#webentwicklung" className="text-gray-300 hover:text-teal-400 transition-colors">Webentwicklung</a></li>
              <li><a href="/dienstleistungen#seo" className="text-gray-300 hover:text-teal-400 transition-colors">SEO-Optimierung</a></li>
              <li><a href="/dienstleistungen#wartung" className="text-gray-300 hover:text-teal-400 transition-colors">Wartung & Support</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white">Kontakt</h4>
            <address className="not-italic text-gray-300">
              <p>Musterstraße 123</p>
              <p>10115 Berlin</p>
              <p className="mt-2">info@econic-media.de</p>
              <p>+49 30 1234567</p>
            </address>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400">
            &copy; {currentYear} Econic Media. Alle Rechte vorbehalten.
          </p>
          <div className="flex space-x-6">
            <Link to="/datenschutz" className="text-gray-400 hover:text-teal-400 transition-colors">Datenschutz</Link>
            <Link to="/impressum" className="text-gray-400 hover:text-teal-400 transition-colors">Impressum</Link>
            <Link to="/agb" className="text-gray-400 hover:text-teal-400 transition-colors">AGB</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
