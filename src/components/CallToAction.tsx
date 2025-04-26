
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CallToActionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  className?: string;
}

const CallToAction: React.FC<CallToActionProps> = ({
  title = "Bereit für Ihren Online-Erfolg?",
  description = "Kontaktieren Sie uns für ein kostenloses Beratungsgespräch und lassen Sie uns gemeinsam Ihre Vision umsetzen.",
  buttonText = "Jetzt kostenloses Beratungsgespräch sichern",
  buttonLink = "#contact",
  className = "",
}) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (buttonLink.startsWith('#')) {
      e.preventDefault();
      const sectionId = buttonLink.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        window.scrollTo({
          behavior: 'smooth',
          top: element.offsetTop - 100 // Offset for header
        });
      }
    }
  };

  return (
    <section className={`bg-gradient-to-br from-gray-900 to-black py-16 ${className}`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-8">{description}</p>
        
        <a
          href={buttonLink}
          onClick={handleClick}
          className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-md transition-all duration-300 btn-shine"
        >
          {buttonText} <ArrowRight size={18} />
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
