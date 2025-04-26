
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  ArrowRight, 
  Star, 
  Check, 
  Package, 
  Clock, 
  Users, 
  MessageSquare, 
  CircleCheck, 
  LayoutGrid, 
  Search, 
  Zap, 
  ShieldCheck, 
  Clock4 
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import PricingCard from '../components/PricingCard';
import StatCard from '../components/StatCard';
import TestimonialCard from '../components/TestimonialCard';
import CallToAction from '../components/CallToAction';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const HomePage: React.FC = () => {
  const location = useLocation();
  
  // Smooth scroll to anchor on page load or navigation
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        setTimeout(() => {
          window.scrollTo({
            behavior: 'smooth',
            top: element.offsetTop - 100 // Offset for header
          });
        }, 100);
      }
    }
  }, [location]);

  // Smooth scroll function for nav links
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        behavior: 'smooth',
        top: element.offsetTop - 100 // Offset for header
      });
    }
  };

  const benefits = [
    { icon: <Package className="w-12 h-12" />, title: "Maßgeschneiderte Lösungen", description: "Individuelle Webdesigns, die perfekt zu Ihrem Unternehmen passen" },
    { icon: <Clock className="w-12 h-12" />, title: "Schnelle Umsetzung", description: "Effiziente Projektabwicklung mit klarem Zeitplan" },
    { icon: <Users className="w-12 h-12" />, title: "Expertenteam", description: "Erfahrene Entwickler und Designer für Ihr Projekt" },
    { icon: <Zap className="w-12 h-12" />, title: "Fokus auf Conversion", description: "Websites, die nicht nur gut aussehen, sondern auch konvertieren" }
  ];

  const features = [
    { icon: <LayoutGrid size={24} />, title: "Responsive Design", description: "Perfekte Darstellung auf allen Geräten" },
    { icon: <Search size={24} />, title: "SEO-Optimierung", description: "Bessere Sichtbarkeit in Suchmaschinen" },
    { icon: <Zap size={24} />, title: "Performance", description: "Schnelle Ladezeiten und optimale Nutzererfahrung" },
    { icon: <MessageSquare size={24} />, title: "Content-Management", description: "Einfache Verwaltung Ihrer Inhalte" },
    { icon: <ShieldCheck size={24} />, title: "Security", description: "Höchste Sicherheitsstandards" },
    { icon: <Clock4 size={24} />, title: "Support", description: "24/7 technischer Support" }
  ];

  const stats = [
    { value: "98%", label: "Kundenzufriedenheit" },
    { value: "350+", label: "Abgeschlossene Projekte" },
    { value: "24/7", label: "Support & Service" },
    { value: "100%", label: "Termintreue" }
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
    },
    {
      quote: "Die beste Entscheidung für unser Unternehmen. Wir sind begeistert von den Ergebnissen.",
      author: "Andreas Lehmann",
      company: "Lehmann Consulting",
      image: "/placeholder.svg"
    },
    {
      quote: "Von der ersten Idee bis zur Umsetzung - alles hat perfekt geklappt!",
      author: "Stefanie Berger",
      company: "Berger Design",
      image: "/placeholder.svg"
    },
    {
      quote: "Ein Partner, der wirklich mitdenkt und innovative Lösungen findet.",
      author: "Peter Schröder",
      company: "Schröder IT",
      image: "/placeholder.svg"
    },
    {
      quote: "Mit Econic Media haben wir endlich einen zuverlässigen Webpartner gefunden.",
      author: "Julia Krause",
      company: "Krause Marketing",
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
        { text: "E-Commerce Integration", included: true },
      ]
    }
  ];

  const faqItems = [
    {
      question: "Wie lange dauert die Entwicklung einer Website?",
      answer: "Je nach Umfang und Komplexität des Projekts zwischen 4-12 Wochen. Wir erstellen zu Beginn einen klaren Zeitplan und halten Sie über den Fortschritt auf dem Laufenden."
    },
    {
      question: "Bieten Sie auch Hosting an?",
      answer: "Ja, wir bieten sichere und schnelle Hosting-Lösungen für Ihre Website. Unsere Server sind in Deutschland gehostet und erfüllen höchste Sicherheitsstandards."
    },
    {
      question: "Kann ich die Website später selbst verwalten?",
      answer: "Ja, wir schulen Sie im Umgang mit dem Content-Management-System und stellen sicher, dass Sie Ihre Inhalte selbstständig aktualisieren können."
    },
    {
      question: "Wie läuft die Zusammenarbeit ab?",
      answer: "Nach einem ersten kostenlosen Beratungsgespräch erstellen wir ein individuelles Angebot. Nach Auftragserteilung beginnen wir mit der Konzeption, dann folgen Design, Entwicklung, Inhalte und schließlich die Veröffentlichung."
    },
    {
      question: "Gibt es eine Mindestlaufzeit für die Service-Pakete?",
      answer: "Bei unserem Standard-Paket beträgt die Mindestlaufzeit 12 Monate. Die Professional- und Enterprise-Pakete sind Einmalzahlungen ohne weitere Verpflichtungen."
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen hero-gradient flex items-center">
        <div className="absolute inset-0 bg-[url('/lovable-uploads/2cb5c689-1513-4bc6-9db8-0dba08c7889f.png')] bg-cover bg-center opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent animate-fade-in">
              Ihre digitale Erfolgsgeschichte beginnt hier
            </h1>
            <p className="text-xl text-gray-300 mb-8 animate-fade-in">
              Wir entwickeln hochmoderne Websites, die Ihr Unternehmen in die digitale Zukunft führen
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={() => scrollToSection('contact')}
                className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 text-lg rounded-md transition-all duration-300 btn-shine"
              >
                Kostenlose Beratung <ArrowRight size={18} />
              </Button>
              <Button 
                onClick={() => scrollToSection('portfolio')}
                variant="outline" 
                className="border-teal-600/50 hover:bg-teal-600/10 text-white px-8 py-6 text-lg"
              >
                Beispiele ansehen
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <StatCard key={index} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="about" className="py-20 bg-gradient-to-b from-black to-purple-900/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Ihre Vorteile mit Econic Media</h2>
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">Wir bieten maßgeschneiderte Lösungen für Ihren Online-Erfolg</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 glass rounded-lg hover:border-teal-500/30 transition-all duration-300 hover:translate-y-[-5px] h-full">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Features, die Sie lieben werden</h2>
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">Entdecken Sie unsere umfangreichen Dienstleistungen für Ihr digitales Wachstum</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 glass rounded-lg hover:border-teal-500/30 transition-all duration-300 hover:translate-y-[-5px]">
                <div className="flex items-center gap-3 mb-3">
                  <div className="bg-teal-500/20 p-2 rounded-md text-teal-500">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview Section */}
      <section id="portfolio" className="py-20 bg-gradient-to-b from-black to-purple-900/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Unsere Arbeiten</h2>
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">Entdecken Sie einige unserer erfolgreichen Projekte</p>
          
          {/* Portfolio preview with grid or slider */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="overflow-hidden rounded-lg border border-gray-800 hover:border-teal-500/30 transition-all duration-300 group">
                <div className="relative h-64 bg-gray-900">
                  <div className="absolute inset-0 flex items-center justify-center text-teal-500 opacity-60">
                    <span className="text-2xl font-bold">Projekt {item}</span>
                  </div>
                  <div className="absolute inset-0 bg-teal-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">Kundenbeispiel {item}</h3>
                  <p className="text-gray-400 text-sm">Website-Relaunch mit SEO-Optimierung</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline" 
              className="border-teal-500/30 hover:bg-teal-600/10 text-white"
            >
              Ihr Projekt mit uns starten <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Was unsere Kunden sagen</h2>
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">Erfahrungen von zufriedenen Kunden</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {testimonials.slice(0, 8).map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gradient-to-b from-black to-purple-900/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Transparente Preisgestaltung
          </h2>
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">Wählen Sie das Paket, das am besten zu Ihnen passt</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <PricingCard key={index} {...plan} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Häufig gestellte Fragen</h2>
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">Antworten auf Ihre wichtigsten Fragen</p>
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="glass border border-gray-800">
                  <AccordionTrigger className="text-left px-6 text-lg font-medium">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-gray-300">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-b from-black to-purple-900/20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Kontaktieren Sie uns</h2>
          <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">Wir freuen uns auf Ihre Anfrage</p>
          
          <div className="max-w-3xl mx-auto glass p-8 rounded-lg border border-purple-500/20">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full p-3 bg-black/50 border border-gray-700 rounded-md focus:border-teal-500 focus:ring focus:ring-teal-500/20 transition"
                    placeholder="Ihr Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">E-Mail</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full p-3 bg-black/50 border border-gray-700 rounded-md focus:border-teal-500 focus:ring focus:ring-teal-500/20 transition"
                    placeholder="Ihre E-Mail-Adresse"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">Betreff</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full p-3 bg-black/50 border border-gray-700 rounded-md focus:border-teal-500 focus:ring focus:ring-teal-500/20 transition"
                  placeholder="Worum geht es?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Nachricht</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full p-3 bg-black/50 border border-gray-700 rounded-md focus:border-teal-500 focus:ring focus:ring-teal-500/20 transition"
                  placeholder="Wie können wir Ihnen helfen?"
                ></textarea>
              </div>
              <div>
                <Button className="w-full md:w-auto bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-md transition-all duration-300 btn-shine">
                  Nachricht senden <ArrowRight size={18} />
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CallToAction 
        title="Bereit für den nächsten Schritt?"
        description="Lassen Sie uns gemeinsam Ihre digitale Präsenz auf das nächste Level bringen."
        buttonText="Jetzt kostenloses Gespräch vereinbaren"
        buttonLink="#contact"
        className="mb-20"
      />
    </>
  );
};

export default HomePage;
