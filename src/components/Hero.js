import React from 'react';
import heroImage from '../assets/hero.jpg'; // Ajusta la ruta si tu imagen está en otra carpeta

const Hero = () => {
  return (
    <div
      className="relative h-[90vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* Capa oscura para hacer más legible el texto */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Contenido del hero */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Soluciones Integrales en Gestión Empresarial
        </h1>
        <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
          Optimizamos tus procesos con consultoría especializada.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105">
          Solicitar Consulta
        </button>
      </div>
    </div>
  );
};

export default Hero;
