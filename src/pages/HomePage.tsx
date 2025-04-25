
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Image, Search } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import TestimonialCard from '../components/TestimonialCard';
import PortfolioCard from '../components/PortfolioCard';
import CallToAction from '../components/CallToAction';

const HomePage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative hero-gradient min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <div className="lg:col-span-7 space-y-8 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Wir gestalten die <span className="text-gradient">digitale Präsenz</span> für Ihr Unternehmen
              </h1>
              
              <p className="text-xl text-gray-300 max-w-2xl">
                Professionelles Webdesign und maßgeschneiderte Entwicklung für Unternehmen in Deutschland, die online erfolgreich sein wollen.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <Link 
                  to="/kontakt" 
                  className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-md transition-all duration-300 btn-shine"
                >
                  Jetzt kostenloses Beratungsgespräch sichern <ArrowRight size={18} />
                </Link>
                
                <Link 
                  to="/portfolio" 
                  className="inline-flex items-center gap-2 bg-transparent hover:bg-gray-800 text-white border border-gray-700 px-6 py-3 rounded-md transition-all duration-300"
                >
                  Portfolio ansehen <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            
            <div className="lg:col-span-5 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <img 
                src="/lovable-uploads/d9093455-215a-47b7-b521-d88393b372bf.png" 
                alt="Econic Media - Digitale Lösungen"
                className="w-full h-auto max-w-md mx-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Services Section */}
      <section className="py-16 md:py-24 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Unsere Dienstleistungen</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Maßgeschneiderte digitale Lösungen, die Ihr Unternehmen voranbringen und Ihnen helfen, Ihre Geschäftsziele zu erreichen.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              title="Webdesign"
              description="Benutzerfreundliche und ansprechende Designs, die Ihre Marke perfekt repräsentieren und Besucher in Kunden verwandeln."
              icon={<Image size={24} />}
              link="/dienstleistungen#webdesign"
            />
            
            <ServiceCard
              title="Webentwicklung"
              description="Technisch ausgereifte Websites mit modernen Technologien, die schnell, sicher und zuverlässig funktionieren."
              icon={<Code size={24} />}
              link="/dienstleistungen#webentwicklung"
            />
            
            <ServiceCard
              title="SEO-Optimierung"
              description="Verbessern Sie Ihre Sichtbarkeit in Suchmaschinen und erreichen Sie mehr potenzielle Kunden durch gezielte SEO-Strategien."
              icon={<Search size={24} />}
              link="/dienstleistungen#seo"
            />
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/dienstleistungen" 
              className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 font-medium"
            >
              Alle Dienstleistungen entdecken <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Portfolio Preview Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Unsere Erfolgsgeschichten</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Entdecken Sie einige unserer Projekte und wie wir Unternehmen geholfen haben, ihre Online-Präsenz zu transformieren.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <PortfolioCard
              title="Bergmann & Partner"
              category="Unternehmenswebsite"
              image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              link="/portfolio/bergmann-partner"
            />
            
            <PortfolioCard
              title="Naturkosmetik Heimlich"
              category="E-Commerce"
              image="https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              link="/portfolio/naturkosmetik-heimlich"
            />
            
            <PortfolioCard
              title="Schmidt Immobilien"
              category="Immobilienmakler"
              image="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              link="/portfolio/schmidt-immobilien"
            />
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/portfolio" 
              className="inline-flex items-center gap-2 text-teal-400 hover:text-teal-300 font-medium"
            >
              Zum kompletten Portfolio <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16 md:py-24 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Das sagen unsere Kunden</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Der Erfolg unserer Kunden ist unser größter Stolz. Hier teilen einige von ihnen ihre Erfahrungen mit Econic Media.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="Das Team von Econic Media hat unsere Erwartungen übertroffen. Die neue Website hat unsere Online-Präsenz komplett transformiert und die Conversion-Rate deutlich verbessert."
              author="Markus Bergmann"
              company="Bergmann & Partner GmbH"
            />
            
            <TestimonialCard
              quote="Dank der SEO-Optimierung durch Econic Media haben wir unsere Position in den Suchergebnissen erheblich verbessert und generieren jetzt mehr qualifizierte Leads als je zuvor."
              author="Sandra Heimlich"
              company="Naturkosmetik Heimlich"
            />
            
            <TestimonialCard
              quote="Professionell, pünktlich und mit einem Auge fürs Detail. Die Zusammenarbeit mit Econic Media war von Anfang bis Ende ein Vergnügen. Das Ergebnis spricht für sich selbst."
              author="Thomas Schmidt"
              company="Schmidt Immobilien"
            />
          </div>
        </div>
      </section>
      
      {/* Call to Action Section */}
      <CallToAction />
    </>
  );
};

export default HomePage;
