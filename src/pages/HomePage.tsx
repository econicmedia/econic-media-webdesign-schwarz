
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';
import PricingCard from '../components/PricingCard';
import StatCard from '../components/StatCard';

const HomePage: React.FC = () => {
  const pricingPlans = [
    {
      name: "Standard",
      price: "200",
      paymentType: "/Monat",
      description: "Perfekt für kleine Unternehmen",
      features: [
        { text: "Website Administration", included: true },
        { text: "Website Wartung", included: true },
        { text: "24/7 Support", included: true },
        { text: "SEO Optimierung", included: true },
        { text: "Content Updates", included: true },
        { text: "Eigentümerübertragung", included: false },
      ]
    },
    {
      name: "Professional",
      price: "999",
      paymentType: "Einmalig",
      description: "Ideal für wachsende Unternehmen",
      popular: true,
      features: [
        { text: "Website Administration", included: true },
        { text: "Website Wartung", included: true },
        { text: "24/7 Premium Support", included: true },
        { text: "SEO Optimierung", included: true },
        { text: "Unbegrenzte Content Updates", included: true },
        { text: "Eigentümerübertragung", included: false },
      ]
    },
    {
      name: "Enterprise",
      price: "3500",
      paymentType: "Einmalig",
      description: "Komplette Kontrolle & Eigentum",
      features: [
        { text: "Website Administration", included: true },
        { text: "Website Wartung", included: true },
        { text: "24/7 Priority Support", included: true },
        { text: "SEO Optimierung", included: true },
        { text: "Unbegrenzte Content Updates", included: true },
        { text: "Vollständige Eigentümerübertragung", included: true },
      ]
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/6d25aa1f-6783-4889-88dd-1b0dc64e374c.png')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Ihre digitale Zukunft beginnt hier
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Wir entwickeln hochmoderne Websites, die Ihr Unternehmen in die digitale Zukunft führen
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/kontakt" className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-md transition-all duration-300 inline-flex items-center gap-2">
                Kostenlose Beratung <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StatCard value="99%" label="Kundenzufriedenheit" />
            <StatCard value="24/7" label="Support & Wartung" />
            <StatCard value="100+" label="Erfolgreiche Projekte" />
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Transparente Preisgestaltung
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Wählen Sie den Plan, der am besten zu Ihren Bedürfnissen passt
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 bg-gradient-to-t from-black to-purple-900/20">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-8">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="fill-purple-500 text-purple-500" size={24} />
            ))}
          </div>
          <p className="text-2xl font-light text-gray-300 max-w-3xl mx-auto italic">
            "Econic Media hat unsere Erwartungen übertroffen. Die neue Website hat unsere Online-Präsenz komplett transformiert."
          </p>
          <p className="mt-4 text-gray-400">- Michael Schmidt, CEO Schmidt GmbH</p>
        </div>
      </section>
    </>
  );
};

export default HomePage;
