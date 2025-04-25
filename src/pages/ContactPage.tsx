
import React from 'react';
import ContactForm from '../components/ContactForm';

const ContactPage: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-16 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-5xl font-bold mb-6">Kontakt</h1>
            <p className="text-xl text-gray-300">
              Haben Sie Fragen oder möchten Sie ein Projekt besprechen? Wir freuen uns auf Ihre Nachricht.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-12 md:py-16 bg-black">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="bg-gray-900 p-6 md:p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-6">Schreiben Sie uns</h2>
              <ContactForm />
            </div>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-6">Kontaktinformationen</h2>
                <p className="text-gray-300 mb-8">
                  Sie können uns telefonisch, per E-Mail oder über das Kontaktformular erreichen. Wir freuen uns darauf, von Ihnen zu hören und Ihnen bei Ihrem Webprojekt zu helfen.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-white">Telefon</h3>
                      <p className="text-gray-400">+49 30 1234567</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-white">E-Mail</h3>
                      <p className="text-gray-400">info@econic-media.de</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mt-1">
                      <svg className="w-6 h-6 text-teal-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-white">Adresse</h3>
                      <p className="text-gray-400">Musterstraße 123<br />10115 Berlin</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold mb-6">Bürozeiten</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-300">Montag - Freitag:</span>
                    <span className="text-gray-400">09:00 - 18:00 Uhr</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-300">Samstag - Sonntag:</span>
                    <span className="text-gray-400">Geschlossen</span>
                  </div>
                </div>
              </div>
              
              {/* Map or Image */}
              <div className="mt-8 rounded-lg overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" 
                  alt="Bürostandort"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Häufig gestellte Fragen</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Hier finden Sie Antworten auf die am häufigsten gestellten Fragen zu unseren Dienstleistungen.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-3">Wie lange dauert die Erstellung einer Website?</h3>
              <p className="text-gray-400">
                Die Dauer hängt vom Umfang und der Komplexität des Projekts ab. Eine einfache Website kann in 2-3 Wochen fertig sein, während komplexere Projekte 2-3 Monate in Anspruch nehmen können. Wir erstellen zu Beginn einen detaillierten Zeitplan.
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-3">Was kostet eine professionelle Website?</h3>
              <p className="text-gray-400">
                Die Kosten variieren je nach Projektumfang. Wir erstellen Ihnen gerne ein individuelles Angebot nach einem kostenlosen Erstgespräch, in dem wir Ihre Anforderungen besprechen.
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-3">Bieten Sie auch Website-Wartung an?</h3>
              <p className="text-gray-400">
                Ja, wir bieten verschiedene Wartungspakete an, um sicherzustellen, dass Ihre Website stets aktuell, sicher und funktional bleibt. Dies umfasst regelmäßige Updates, Backups und technischen Support.
              </p>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <h3 className="text-xl font-medium mb-3">Kann ich meine Website selbst aktualisieren?</h3>
              <p className="text-gray-400">
                Ja, wir implementieren in der Regel ein benutzerfreundliches Content-Management-System (CMS), mit dem Sie Inhalte wie Texte und Bilder selbst aktualisieren können. Wir bieten auch Schulungen für Ihr Team an.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage;
