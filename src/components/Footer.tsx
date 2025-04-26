
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  // Smooth scroll function
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        behavior: 'smooth',
        top: element.offsetTop - 100 // Offset for header
      });
      
      // Update URL without page reload (optional)
      window.history.pushState({}, '', `/#${sectionId}`);
    }
  };
  
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
              <li><a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="text-gray-300 hover:text-teal-400 transition-colors">Startseite</a></li>
              <li><a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-gray-300 hover:text-teal-400 transition-colors">Über uns</a></li>
              <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="text-gray-300 hover:text-teal-400 transition-colors">Dienstleistungen</a></li>
              <li><a href="#portfolio" onClick={(e) => scrollToSection(e, 'portfolio')} className="text-gray-300 hover:text-teal-400 transition-colors">Portfolio</a></li>
              <li><a href="#testimonials" onClick={(e) => scrollToSection(e, 'testimonials')} className="text-gray-300 hover:text-teal-400 transition-colors">Testimonials</a></li>
              <li><a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="text-gray-300 hover:text-teal-400 transition-colors">Kontakt</a></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-medium text-white">Dienstleistungen</h4>
            <ul className="space-y-2">
              <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="text-gray-300 hover:text-teal-400 transition-colors">Webdesign</a></li>
              <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="text-gray-300 hover:text-teal-400 transition-colors">Webentwicklung</a></li>
              <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="text-gray-300 hover:text-teal-400 transition-colors">SEO-Optimierung</a></li>
              <li><a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="text-gray-300 hover:text-teal-400 transition-colors">Wartung & Support</a></li>
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
            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Datenschutz</a>
            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">Impressum</a>
            <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">AGB</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
