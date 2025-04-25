
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    privacy: false,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.name || !formData.email || !formData.message || !formData.privacy) {
      toast({
        title: "Fehler",
        description: "Bitte füllen Sie alle erforderlichen Felder aus und akzeptieren Sie die Datenschutzerklärung.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Nachricht gesendet",
        description: "Vielen Dank für Ihre Nachricht. Wir werden uns in Kürze bei Ihnen melden!",
      });
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        privacy: false,
      });
      
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-200">
            Name <span className="text-teal-400">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:ring-teal-500 focus:border-teal-500 text-white"
            required
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-200">
            E-Mail <span className="text-teal-400">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:ring-teal-500 focus:border-teal-500 text-white"
            required
          />
        </div>
        
        <div>
          <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-200">
            Telefon
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:ring-teal-500 focus:border-teal-500 text-white"
          />
        </div>
        
        <div>
          <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-200">
            Unternehmen
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:ring-teal-500 focus:border-teal-500 text-white"
          />
        </div>
      </div>
      
      <div>
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-200">
          Nachricht <span className="text-teal-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md focus:ring-teal-500 focus:border-teal-500 text-white"
          required
        />
      </div>
      
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id="privacy"
            name="privacy"
            type="checkbox"
            checked={formData.privacy}
            onChange={handleCheckboxChange}
            className="w-4 h-4 border border-gray-700 rounded bg-gray-800 focus:ring-teal-500"
            required
          />
        </div>
        <label htmlFor="privacy" className="ml-2 text-sm text-gray-300">
          Ich stimme zu, dass meine Daten zur Bearbeitung meiner Anfrage verarbeitet werden. Weitere Informationen finden Sie in unserer <a href="/datenschutz" className="text-teal-400 hover:text-teal-300">Datenschutzerklärung</a>.
        </label>
      </div>
      
      <button
        type="submit"
        disabled={isSubmitting}
        className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-medium rounded-md transition-colors disabled:opacity-70 disabled:cursor-not-allowed btn-shine"
      >
        {isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
      </button>
    </form>
  );
};

export default ContactForm;
