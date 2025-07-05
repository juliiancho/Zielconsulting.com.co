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

    {/* Enlace a Política de Privacidad como una nueva página */}
    <li>
      <a 
        href="/politica-de-privacidad.html" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-gray-400 hover:text-white transition-colors duration-300 text-sm"
      >
        Política de privacidad
      </a>
    </li>
  </ul>
</div>
