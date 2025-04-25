
import React from 'react';
import { Code, Image, Search, Settings, FileText, Phone } from 'lucide-react';
import CallToAction from '../components/CallToAction';

const ServicesPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Unsere Dienstleistungen</h1>
            <p className="text-xl text-gray-300">
              Entdecken Sie unsere maßgeschneiderten Web-Lösungen, die Ihr Unternehmen online erfolgreich machen.
            </p>
          </div>
        </div>
      </section>
      
      {/* Service 1: Webdesign */}
      <section id="webdesign" className="py-16 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block bg-teal-600/20 p-3 rounded-lg text-teal-500 mb-6">
                <Image size={24} />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">Webdesign</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Wir gestalten Websites, die nicht nur optisch ansprechend sind, sondern auch strategisch auf Ihre Geschäftsziele ausgerichtet sind. Unser Designansatz kombiniert modernes Webdesign mit bewährten Conversion-Prinzipien, um sicherzustellen, dass Ihre Website Besucher in Kunden verwandelt.
                </p>
                <p>
                  Jedes Design beginnt mit einer gründlichen Analyse Ihrer Zielgruppe, Ihrer Marke und Ihrer Geschäftsziele. Wir entwickeln eine maßgeschneiderte Designstrategie, die Ihre einzigartige Markenidentität widerspiegelt und gleichzeitig eine optimale Benutzererfahrung bietet.
                </p>
              </div>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-teal-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium">Responsive Design</h3>
                    <p className="text-gray-400">Optimiert für alle Geräte - vom Desktop über das Tablet bis zum Smartphone.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-teal-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium">Benutzerfreundlichkeit</h3>
                    <p className="text-gray-400">Intuitive Navigation und klare Handlungsaufforderungen für eine optimale User Experience.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-teal-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium">Konversionsorientiert</h3>
                    <p className="text-gray-400">Strategisch platzierte Call-to-Actions und überzeugende Inhalte, die Konversionen fördern.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                alt="Webdesign Dienstleistung"
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Service 2: Webentwicklung */}
      <section id="webentwicklung" className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                alt="Webentwicklung Dienstleistung"
                className="rounded-lg w-full h-auto"
              />
            </div>
            
            <div>
              <div className="inline-block bg-teal-600/20 p-3 rounded-lg text-teal-500 mb-6">
                <Code size={24} />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">Webentwicklung</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Wir entwickeln technisch ausgereifte Websites und Web-Anwendungen mit modernen Technologien, die schnell, sicher und zuverlässig funktionieren. Unser Entwicklungsansatz fokussiert sich auf eine saubere, wartbare Codebasis, die für zukünftiges Wachstum gerüstet ist.
                </p>
                <p>
                  Ob eine einfache Unternehmenswebsite, ein komplexes Portal oder ein E-Commerce-Shop - wir setzen Ihre individuellen Anforderungen mit den passenden Technologien um und sorgen dafür, dass Ihre Website auch technisch überzeugt.
                </p>
              </div>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-teal-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium">Moderne Technologien</h3>
                    <p className="text-gray-400">Einsatz aktueller Frameworks und Technologien für optimale Performance.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-teal-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium">Content-Management-Systeme</h3>
                    <p className="text-gray-400">Benutzerfreundliche CMS-Lösungen für die einfache Pflege Ihrer Website.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-teal-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium">Sicherheit & Zuverlässigkeit</h3>
                    <p className="text-gray-400">Implementierung von Best Practices für robuste und sichere Webanwendungen.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Service 3: SEO-Optimierung */}
      <section id="seo" className="py-16 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-block bg-teal-600/20 p-3 rounded-lg text-teal-500 mb-6">
                <Search size={24} />
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6">SEO-Optimierung</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Eine großartige Website ist nur dann erfolgreich, wenn sie auch gefunden wird. Unsere SEO-Dienstleistungen helfen Ihnen dabei, Ihre Sichtbarkeit in Suchmaschinen zu verbessern und mehr qualifizierte Besucher auf Ihre Website zu bringen.
                </p>
                <p>
                  Wir entwickeln eine maßgeschneiderte SEO-Strategie basierend auf einer gründlichen Analyse Ihrer Branche, Ihrer Konkurrenz und Ihrem Zielpublikum. Von der technischen On-Page-Optimierung bis hin zur Content-Strategie – wir sorgen dafür, dass Ihre Website für Suchmaschinen und Benutzer gleichermaßen optimiert ist.
                </p>
              </div>
              
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-teal-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium">Keyword-Recherche</h3>
                    <p className="text-gray-400">Umfassende Analyse relevanter Suchbegriffe für Ihre Branche und Zielgruppe.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-teal-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium">On-Page-Optimierung</h3>
                    <p className="text-gray-400">Optimierung von Titel-Tags, Meta-Beschreibungen, Headings und Content-Struktur.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    <svg className="w-5 h-5 text-teal-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium">Technisches SEO</h3>
                    <p className="text-gray-400">Verbesserung von Ladezeiten, mobile Optimierung und Behebung technischer Probleme.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2">
              <img 
                src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" 
                alt="SEO-Optimierung Dienstleistung"
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Additional Services */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Weitere Dienstleistungen</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Wir bieten ein umfassendes Leistungsspektrum rund um Ihre Online-Präsenz.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div id="wartung" className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <div className="bg-teal-600/20 w-12 h-12 rounded-lg flex items-center justify-center text-teal-500 mb-4">
                <Settings size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Wartung & Support</h3>
              <p className="text-gray-400">
                Regelmäßige Updates, Backups und technischer Support für eine reibungslose Funktion Ihrer Website. Wir kümmern uns um die Technik, damit Sie sich auf Ihr Kerngeschäft konzentrieren können.
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <div className="bg-teal-600/20 w-12 h-12 rounded-lg flex items-center justify-center text-teal-500 mb-4">
                <FileText size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Content-Strategie</h3>
              <p className="text-gray-400">
                Entwicklung einer zielgerichteten Content-Strategie, die Ihre Zielgruppe anspricht und zur Conversion beiträgt. Von der Planung bis zur Erstellung – wir helfen Ihnen, relevante Inhalte zu erstellen.
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
              <div className="bg-teal-600/20 w-12 h-12 rounded-lg flex items-center justify-center text-teal-500 mb-4">
                <Phone size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-3">Online-Beratung</h3>
              <p className="text-gray-400">
                Individuelle Beratung zu allen Aspekten Ihrer digitalen Strategie. Wir analysieren Ihre aktuelle Situation und entwickeln gemeinsam mit Ihnen einen Fahrplan für den digitalen Erfolg.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <CallToAction
        title="Bereit für Ihren digitalen Erfolg?"
        description="Kontaktieren Sie uns jetzt für eine individuelle Beratung zu Ihrem Projekt. Wir freuen uns darauf, Sie kennenzulernen."
      />
    </>
  );
};

export default ServicesPage;
