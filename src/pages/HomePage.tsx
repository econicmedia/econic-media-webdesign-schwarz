import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Check, Package, Clock, Users, MessageSquare, ListCheck, CircleCheck } from 'lucide-react';
import PricingCard from '../components/PricingCard';
import StatCard from '../components/StatCard';
import TestimonialCard from '../components/TestimonialCard';
import CallToAction from '../components/CallToAction';

const HomePage: React.FC = () => {
  const benefits = [
    { icon: <Package className="w-12 h-12 text-teal-500" />, title: "Maßgeschneiderte Lösungen", description: "Individuelle Webdesigns, die perfekt zu Ihrem Unternehmen passen" },
    { icon: <Clock className="w-12 h-12 text-teal-500" />, title: "Schnelle Umsetzung", description: "Effiziente Projektabwicklung mit klarem Zeitplan" },
    { icon: <Users className="w-12 h-12 text-teal-500" />, title: "Expertenteam", description: "Erfahrene Entwickler und Designer für Ihr Projekt" }
  ];

  const features = [
    { title: "Responsive Design", description: "Perfekte Darstellung auf allen Geräten" },
    { title: "SEO-Optimierung", description: "Bessere Sichtbarkeit in Suchmaschinen" },
    { title: "Performance", description: "Schnelle Ladezeiten und optimale Nutzererfahrung" },
    { title: "Content-Management", description: "Einfache Verwaltung Ihrer Inhalte" },
    { title: "Security", description: "Höchste Sicherheitsstandards" },
    { title: "Support", description: "24/7 technischer Support" }
  ];

  const testimonials = [
    {
      quote: "Econic Media hat unsere Erwartungen übertroffen. Die neue Website hat unsere Online-Präsenz komplett transformiert.",
      author: "Michael Schmidt",
      company: "Schmidt GmbH",
      image: "/placeholder.svg"
    },
    {
      quote: "Professionell, pünktlich und mit exzellentem Service. Besser geht es nicht!",
      author: "Laura Weber",
      company: "Weber Marketing",
      image: "/placeholder.svg"
    },
    {
      quote: "Die Zusammenarbeit war hervorragend. Unser Online-Shop läuft besser denn je.",
      author: "Thomas Müller",
      company: "Müller & Söhne",
      image: "/placeholder.svg"
    },
    {
      quote: "Erstklassige Beratung und Implementation. Sehr empfehlenswert!",
      author: "Sarah Klein",
      company: "Klein Digital",
      image: "/placeholder.svg"
    },
    {
      quote: "Endlich eine Agentur, die versteht was wir brauchen. Danke Econic Media!",
      author: "Mark Wagner",
      company: "Wagner Solutions",
      image: "/placeholder.svg"
    },
    {
      quote: "Hervorragende technische Expertise und kreative Lösungen.",
      author: "Christine Bauer",
      company: "Bauer Tech",
      image: "/placeholder.svg"
    }
  ];

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
      <section className="relative min-h-screen hero-gradient flex items-center">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/2cb5c689-1513-4bc6-9db8-0dba08c7889f.png')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
              Ihre digitale Erfolgsgeschichte beginnt hier
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Wir entwickeln hochmoderne Websites, die Ihr Unternehmen in die digitale Zukunft führen
            </p>
            <Link to="/kontakt" className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-md transition-all duration-300 inline-flex items-center gap-2 btn-shine">
              Kostenlose Beratung <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Ihre Vorteile mit uns</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 glass rounded-lg">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Features, die Sie lieben werden</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 glass rounded-lg">
                <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
                  <CircleCheck className="text-teal-500" />
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Was unsere Kunden sagen</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Transparente Preisgestaltung
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-black to-purple-900/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Häufig gestellte Fragen</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="glass p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Wie lange dauert die Entwicklung einer Website?</h3>
              <p className="text-gray-300">Je nach Umfang und Komplexität des Projekts zwischen 4-12 Wochen.</p>
            </div>
            <div className="glass p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Bieten Sie auch Hosting an?</h3>
              <p className="text-gray-300">Ja, wir bieten sichere und schnelle Hosting-Lösungen für Ihre Website.</p>
            </div>
            <div className="glass p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Kann ich die Website später selbst verwalten?</h3>
              <p className="text-gray-300">Ja, wir schulen Sie im Umgang mit dem Content-Management-System.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CallToAction 
        title="Bereit für den nächsten Schritt?"
        description="Lassen Sie uns gemeinsam Ihre digitale Präsenz auf das nächste Level bringen."
        buttonText="Jetzt kostenloses Gespräch vereinbaren"
        className="mb-20"
      />
    </>
  );
};

export default HomePage;
