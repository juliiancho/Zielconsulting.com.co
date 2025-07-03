import React from 'react';

const ConsultingNavbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src="/assets/ziel-logo.png" 
              alt="Ziel Consulting" 
              className="h-10 transition duration-300 hover:opacity-80"
            />
            <span className="ml-2 text-xl font-semibold text-gray-800">Ziel Consulting</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#servicios" className="text-gray-700 hover:text-blue-600 transition">Servicios</a>
            <a href="#nosotros" className="text-gray-700 hover:text-blue-600 transition">Sobre Nosotros</a>
            <a href="#testimonios" className="text-gray-700 hover:text-blue-600 transition">Testimonios</a>
            <a href="#contacto" className="text-gray-700 hover:text-blue-600 transition">Contacto</a>
          </div>
          <button className="md:hidden focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default ConsultingNavbar;