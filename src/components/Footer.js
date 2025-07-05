import React from 'react';
import logo from '../assets/logo.png'; // Ajusta esta ruta si tu estructura de carpetas es diferente

export default function Footer({ navigateTo }) {
  return (
    <footer className="bg-[#1b1d1d] text-white py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Columna 1: Logo + lema */}
        <div>
          <img 
            src={logo} 
            alt="Logo Ziel Consulting" 
            className="w-36 mb-4 filter brightness-0 invert" 
          />
          <p className="text-sm text-gray-400">
            Soluciones empresariales con impacto.
          </p>
        </div>

        {/* Columna 2: Enlaces rápidos */}
        <div>
          <h3 className="text-xl font-bold mb-4">Enlaces rápidos</h3>
          <ul className="space-y-2">
            <li>
              <button 
                onClick={() => navigateTo('inicio')} 
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm cursor-pointer"
              >
                Inicio
              </button>
            </li>
            <li>
              <button 
                onClick={() => navigateTo('nosotros')} 
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm cursor-pointer"
              >
                Nosotros
              </button>
            </li>
            <li>
              <button 
                onClick={() => navigateTo('servicios')} 
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm cursor-pointer"
              >
                Servicios
              </button>
            </li>
            <li>
              <button 
                onClick={() => navigateTo('contacto')} 
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm cursor-pointer"
              >
                Contacto
              </button>
            </li>
            <li>
              <a 
                href="/politica-de-tratamiento-de-datos.html" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
              >
                Política de tratamiento de datos
              </a>
            </li>
          </ul>
        </div>

        {/* Columna 3: Contacto */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contáctanos</h3>
          <p className="text-sm text-gray-400">Cra 49 # 137 - 80, Bogotá</p>
          <p className="text-sm text-gray-400">info@zielconsulting.com.co</p>
          <p className="text-sm text-gray-400">Tel: 3165356364</p>
        </div>
      </div>

      <div className="text-center text-gray-500 text-xs mt-10">
        &copy; {new Date().getFullYear()} Ziel Consulting S.A.S. Todos los derechos reservados.
      </div>
    </footer>
  );
}
