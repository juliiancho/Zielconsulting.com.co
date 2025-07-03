import React from 'react';

const ConsultingFooter = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/assets/ziel-logo.png" 
                alt="Ziel Consulting" 
                className="h-8 transition duration-300 hover:opacity-80"
              />
              <span className="ml-2 text-xl font-bold">Ziel Consulting</span>
            </div>
            <p className="text-gray-400">
              Consultoría especializada en sistemas de gestión, calidad, medio ambiente y seguridad laboral.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <p className="text-gray-400 mb-2">info@zielconsulting.com</p>
            <p className="text-gray-400">+57 300 123 4567</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Suscríbete</h3>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Tu correo electrónico" 
                className="px-4 py-2 w-full rounded-l focus:outline-none text-gray-900"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-r">
                Enviar
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Ziel Consulting. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default ConsultingFooter;

// DONE