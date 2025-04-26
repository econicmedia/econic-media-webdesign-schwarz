
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  // Smooth scroll function
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    closeMenu();
    
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

  const navLinks = [
    { name: 'Startseite', path: '#home', id: 'home' },
    { name: 'Über uns', path: '#about', id: 'about' },
    { name: 'Dienstleistungen', path: '#services', id: 'services' },
    { name: 'Portfolio', path: '#portfolio', id: 'portfolio' },
    { name: 'Testimonials', path: '#testimonials', id: 'testimonials' },
    { name: 'Preise', path: '#pricing', id: 'pricing' },
    { name: 'FAQ', path: '#faq', id: 'faq' },
    { name: 'Kontakt', path: '#contact', id: 'contact' },
  ];

  // Check if section is in view for active state
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => document.getElementById(link.id));
      const scrollPosition = window.scrollY + 200;
      
      const currentSection = sections
        .filter(section => section !== null)
        .reverse() // Replace findLast with this approach
        .find(section => section?.offsetTop && section.offsetTop <= scrollPosition);
        
      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-sm shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6 py-4">
        <nav className="flex items-center justify-between">
          <a href="#home" className="flex items-center space-x-2" onClick={(e) => scrollToSection(e, 'home')}>
            <span className="text-2xl font-semibold tracking-tight text-gradient">Econic Media</span>
          </a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                className={`transition-colors duration-300 hover:text-teal-400 ${
                  activeSection === link.id ? 'text-teal-400 font-medium' : 'text-gray-200'
                }`}
                onClick={(e) => scrollToSection(e, link.id)}
              >
                {link.name}
              </a>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-teal-400 focus:outline-none"
            onClick={toggleMenu}
            aria-label={isOpen ? 'Menü schließen' : 'Menü öffnen'}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-sm shadow-md py-4">
            <div className="flex flex-col space-y-4 px-6">
              {navLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  className={`transition-colors duration-300 hover:text-teal-400 ${
                    activeSection === link.id ? 'text-teal-400 font-medium' : 'text-gray-200'
                  }`}
                  onClick={(e) => scrollToSection(e, link.id)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
