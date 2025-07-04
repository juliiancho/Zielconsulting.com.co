import React from 'react';
import logoHero from '../assets/logo-hero.png';

const Navbar = ({ navigateTo }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md backdrop-blur-sm bg-opacity-80">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <img 
            src={logoHero} 
            alt="Ziel Consulting Logo" 
            className="h-10 md:h-12 transition-transform duration-300 hover:scale-105"
          />
        </div>
        {/* resto del navbar */}
        <div className="hidden md:flex space-x-8">
          <button onClick={() => navigateTo('inicio')} className="text-black hover:text-[#199ca5] relative group transition-colors duration-300">
            Inicio
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#199ca5] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </button>
          <button onClick={() => navigateTo('nosotros')} className="text-black hover:text-[#199ca5] relative group transition-colors duration-300">
            Nosotros
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#199ca5] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </button>
          <button onClick={() => navigateTo('servicios')} className="text-black hover:text-[#199ca5] relative group transition-colors duration-300">
            Servicios
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#199ca5] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </button>
          <button onClick={() => navigateTo('contacto')} className="text-black hover:text-[#199ca5] relative group transition-colors duration-300">
            Contacto
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#199ca5] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </button>
        </div>
        <button className="md:hidden focus:outline-none p-2 rounded-md hover:bg-gray-100 transition-colors duration-200">
          <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
