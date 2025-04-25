
import React from 'react';
import CallToAction from '../components/CallToAction';

const AboutPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Über uns</h1>
            <p className="text-xl text-gray-300">
              Erfahren Sie mehr über Econic Media und unser leidenschaftliches Team von Webdesignern und Entwicklern.
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Content */}
      <section className="py-12 md:py-16 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">Wer wir sind</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Econic Media ist eine spezialisierte Webdesign- und Entwicklungsagentur mit Sitz in Deutschland. Seit unserer Gründung im Jahr 2018 haben wir uns darauf konzentriert, maßgeschneiderte digitale Lösungen für kleine und mittlere Unternehmen zu entwickeln.
                </p>
                <p>
                  Unser Team besteht aus erfahrenen Designern, Entwicklern und Digitalexperten, die eine Leidenschaft für moderne, effektive Weblösungen teilen. Wir glauben daran, dass die digitale Präsenz eines Unternehmens nicht nur gut aussehen, sondern auch strategisch durchdacht sein sollte, um messbare Geschäftsergebnisse zu erzielen.
                </p>
              </div>
            </div>
            
            <div className="rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" 
                alt="Das Econic Media Team"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          
          <div className="mt-20">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Unsere Mission</h2>
            <div className="max-w-3xl space-y-4 text-gray-300">
              <p>
                Unsere Mission ist es, kleine und mittlere Unternehmen dabei zu unterstützen, ihr volles Potenzial im digitalen Raum zu entfalten. Wir möchten die Lücke zwischen komplexer Technologie und praktischen Geschäftsanforderungen schließen, indem wir Weblösungen entwickeln, die sowohl technisch ausgereift als auch benutzerfreundlich sind.
              </p>
              <p>
                Bei jedem Projekt stehen drei Grundprinzipien im Mittelpunkt:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
              <div className="bg-gray-900 p-6 rounded-lg">
                <div className="bg-teal-600/20 w-12 h-12 rounded-full flex items-center justify-center text-teal-500 mb-4">
                  <span className="text-xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-medium mb-3">Qualität vor Quantität</h3>
                <p className="text-gray-400">
                  Wir nehmen uns die Zeit, jedes Projekt mit höchster Qualität und Aufmerksamkeit für Details umzusetzen, anstatt auf Massenproduktion zu setzen.
                </p>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg">
                <div className="bg-teal-600/20 w-12 h-12 rounded-full flex items-center justify-center text-teal-500 mb-4">
                  <span className="text-xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-medium mb-3">Ergebnisorientierung</h3>
                <p className="text-gray-400">
                  Unsere Webprojekte sind darauf ausgerichtet, messbare Geschäftsergebnisse zu erzielen – sei es mehr Leads, höhere Conversion-Raten oder bessere Kundenbindung.
                </p>
              </div>
              
              <div className="bg-gray-900 p-6 rounded-lg">
                <div className="bg-teal-600/20 w-12 h-12 rounded-full flex items-center justify-center text-teal-500 mb-4">
                  <span className="text-xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-medium mb-3">Langfristige Partnerschaft</h3>
                <p className="text-gray-400">
                  Wir sehen uns als langfristigen Partner für unsere Kunden, nicht nur als Dienstleister für ein einmaliges Projekt.
                </p>
              </div>
            </div>
          </div>
          
          <div className="mt-20">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6">Unser Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="rounded-lg overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" 
                    alt="Thomas Weber"
                    className="w-full h-auto object-cover aspect-square"
                  />
                </div>
                <h3 className="text-lg font-medium">Thomas Weber</h3>
                <p className="text-teal-400">Geschäftsführer & Gründer</p>
              </div>
              
              <div className="text-center">
                <div className="rounded-lg overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80" 
                    alt="Julia Schneider"
                    className="w-full h-auto object-cover aspect-square"
                  />
                </div>
                <h3 className="text-lg font-medium">Julia Schneider</h3>
                <p className="text-teal-400">Creative Director</p>
              </div>
              
              <div className="text-center">
                <div className="rounded-lg overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" 
                    alt="Markus Becker"
                    className="w-full h-auto object-cover aspect-square"
                  />
                </div>
                <h3 className="text-lg font-medium">Markus Becker</h3>
                <p className="text-teal-400">Technischer Leiter</p>
              </div>
              
              <div className="text-center">
                <div className="rounded-lg overflow-hidden mb-4">
                  <img 
                    src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" 
                    alt="Sarah Wagner"
                    className="w-full h-auto object-cover aspect-square"
                  />
                </div>
                <h3 className="text-lg font-medium">Sarah Wagner</h3>
                <p className="text-teal-400">Projektmanagerin</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <CallToAction />
    </>
  );
};

export default AboutPage;
