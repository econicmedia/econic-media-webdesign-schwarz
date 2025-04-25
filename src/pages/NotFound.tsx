
import React from 'react';
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: Benutzer hat versucht, auf eine nicht existierende Route zuzugreifen:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-teal-500 mb-6">404</h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8">Oops! Diese Seite wurde nicht gefunden.</p>
        <p className="text-gray-400 max-w-md mx-auto mb-8">
          Die Seite, die Sie suchen, existiert nicht oder wurde verschoben.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-md transition-all duration-300 btn-shine"
        >
          <ArrowLeft size={18} /> Zurück zur Startseite
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
