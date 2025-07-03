import React from 'react';

const Hero = () => {
  return (
    <section id="inicio" className="bg-[#199ca5] text-white py-24 md:py-40 flex items-center justify-center min-h-[calc(100vh-64px)]"> {/* Ajuste de altura y centrado */}
      <div className="container mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight animate-fade-in-up">
          Ziel Consulting
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto opacity-0 animate-fade-in-up animation-delay-200">
          Impulsamos la eficiencia, la sostenibilidad y el cumplimiento normativo de tu organización a través de soluciones integrales en gestión empresarial.
        </p>
        <button className="bg-white text-[#199ca5] font-bold py-3 px-8 rounded-full inline-block shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 opacity-0 animate-fade-in-up animation-delay-400">
          Contáctanos
        </button>
      </div>
    </section>
  );
};

export default Hero;