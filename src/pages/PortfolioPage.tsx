
import React from 'react';
import PortfolioCard from '../components/PortfolioCard';
import CallToAction from '../components/CallToAction';

// Portfolio-Kategorien
const categories = [
  "Alle",
  "Unternehmenswebsite",
  "E-Commerce",
  "Landing Page",
  "Web-App"
];

// Portfolio-Elemente
const portfolioItems = [
  {
    id: 1,
    title: "Bergmann & Partner",
    category: "Unternehmenswebsite",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    link: "/portfolio/bergmann-partner"
  },
  {
    id: 2,
    title: "Naturkosmetik Heimlich",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    link: "/portfolio/naturkosmetik-heimlich"
  },
  {
    id: 3,
    title: "Schmidt Immobilien",
    category: "Unternehmenswebsite",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    link: "/portfolio/schmidt-immobilien"
  },
  {
    id: 4,
    title: "Müller Consulting",
    category: "Landing Page",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80",
    link: "/portfolio/mueller-consulting"
  },
  {
    id: 5,
    title: "FitLife App",
    category: "Web-App",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    link: "/portfolio/fitlife-app"
  },
  {
    id: 6,
    title: "Schwarzkopf Friseure",
    category: "Unternehmenswebsite",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80",
    link: "/portfolio/schwarzkopf-friseure"
  },
  {
    id: 7,
    title: "Vitaminreich Shop",
    category: "E-Commerce",
    image: "https://images.unsplash.com/photo-1471193945509-9ad0617afabf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    link: "/portfolio/vitaminreich-shop"
  },
  {
    id: 8,
    title: "TechStart Konferenz",
    category: "Landing Page",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=812&q=80",
    link: "/portfolio/techstart-konferenz"
  },
  {
    id: 9,
    title: "TaskMaster CRM",
    category: "Web-App",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    link: "/portfolio/taskmaster-crm"
  }
];

const PortfolioPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = React.useState("Alle");
  const [filteredItems, setFilteredItems] = React.useState(portfolioItems);

  // Filterfunktion
  React.useEffect(() => {
    if (activeCategory === "Alle") {
      setFilteredItems(portfolioItems);
    } else {
      const filtered = portfolioItems.filter(item => item.category === activeCategory);
      setFilteredItems(filtered);
    }
  }, [activeCategory]);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Unser Portfolio</h1>
            <p className="text-xl text-gray-300">
              Entdecken Sie unsere ausgewählten Arbeiten und erfahren Sie, wie wir unseren Kunden zu digitalem Erfolg verhelfen.
            </p>
          </div>
        </div>
      </section>
      
      {/* Portfolio Filter */}
      <section className="py-8 bg-black border-b border-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map(category => (
              <button
                key={category}
                className={`px-4 py-2 rounded-md transition-colors ${
                  activeCategory === category 
                  ? 'bg-teal-600 text-white' 
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>
      
      {/* Portfolio Grid */}
      <section className="py-12 md:py-16 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map(item => (
              <PortfolioCard
                key={item.id}
                title={item.title}
                category={item.category}
                image={item.image}
                link={item.link}
              />
            ))}
          </div>
          
          {filteredItems.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400">Keine Projekte in dieser Kategorie gefunden.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Project Process */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Unser Prozess</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              So arbeiten wir gemeinsam mit Ihnen an Ihrem erfolgreichen Webprojekt - von der ersten Idee bis zum Launch und darüber hinaus.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-teal-600/20 w-16 h-16 rounded-full flex items-center justify-center text-teal-400 mx-auto mb-4">
                <span className="text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Analyse & Strategie</h3>
              <p className="text-gray-400">
                Wir analysieren Ihre Anforderungen, Zielgruppe und Mitbewerber, um eine maßgeschneiderte Strategie zu entwickeln.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-teal-600/20 w-16 h-16 rounded-full flex items-center justify-center text-teal-400 mx-auto mb-4">
                <span className="text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Design & Konzept</h3>
              <p className="text-gray-400">
                Wir entwickeln ein Designkonzept, das Ihre Marke optimal repräsentiert und eine überzeugende User Experience bietet.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-teal-600/20 w-16 h-16 rounded-full flex items-center justify-center text-teal-400 mx-auto mb-4">
                <span className="text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Entwicklung & Test</h3>
              <p className="text-gray-400">
                Wir setzen das Design mit modernen Technologien um und testen gründlich auf allen relevanten Geräten und Browsern.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-teal-600/20 w-16 h-16 rounded-full flex items-center justify-center text-teal-400 mx-auto mb-4">
                <span className="text-xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Launch & Optimierung</h3>
              <p className="text-gray-400">
                Nach dem Launch begleiten wir Sie mit kontinuierlicher Optimierung und Support für langfristigen Erfolg.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <CallToAction
        title="Bereit für Ihr nächstes Projekt?"
        description="Lassen Sie uns gemeinsam Ihre Vision umsetzen. Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch."
      />
    </>
  );
};

export default PortfolioPage;
