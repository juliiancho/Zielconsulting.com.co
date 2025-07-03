import React from 'react';

const Footer = ({ navigateTo }) => { // Recibimos la función navigateTo
  return (
    <footer className="bg-[#1b1d1d] text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="https://4tsix0yujj.ufs.sh/f/2vMRHqOYUHc0Frr3csoDzTWwmhl5UyNfsFj9RSnotvEAKeiM" 
                alt="Ziel Consulting Logo" 
                className="h-20 filter brightness-0 invert" // Logo en el footer con filtro brightness-0 invert para que se vea completamente blanco
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Consultoría especializada en sistemas de gestión, calidad, medio ambiente y seguridad laboral.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces rápidos</h3>
            <ul className="space-y-2">
              <li><button onClick={() => navigateTo('inicio')} className="text-gray-400 hover:text-white transition-colors duration-300 text-sm cursor-pointer">Inicio</button></li>
              <li><button onClick={() => navigateTo('nosotros')} className="text-gray-400 hover:text-white transition-colors duration-300 text-sm cursor-pointer">Nosotros</button></li>
              <li><button onClick={() => navigateTo('servicios')} className="text-gray-400 hover:text-white transition-colors duration-300 text-sm cursor-pointer">Servicios</button></li>
              <li><button onClick={() => navigateTo('contacto')} className="text-gray-400 hover:text-white transition-colors duration-300 text-sm cursor-pointer">Contacto</button></li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <p className="text-gray-400 mb-2 text-sm">info@zielconsulting.com.co</p>
            <p className="text-gray-400 text-sm">+57 316 535 6364</p>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Ziel Consulting. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;