import React, { useState } from 'react'; // Importamos useState para la navegación
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  const [currentPage, setCurrentPage] = useState('inicio'); // Estado para controlar la página actual

  // Función para manejar la navegación (simulada sin react-router-dom)
  const navigateTo = (pageId) => {
    setCurrentPage(pageId);
    // Desplazamiento suave a la sección
    document.getElementById(pageId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-sans bg-gray-50 text-black"> {/* Aseguramos el color de texto global */}
      <Navbar navigateTo={navigateTo} /> {/* Pasamos la función de navegación al Navbar */}
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer navigateTo={navigateTo} /> {/* Pasamos la función de navegación al Footer */}
    </div>
  );
};

export default App;