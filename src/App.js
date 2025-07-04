import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton'; // 🔹 Importa el botón

const App = () => {
  const [currentPage, setCurrentPage] = useState('inicio');

  const navigateTo = (pageId) => {
    setCurrentPage(pageId);
    document.getElementById(pageId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="font-sans bg-gray-50 text-black">
      <Navbar navigateTo={navigateTo} />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <Footer navigateTo={navigateTo} />
      <WhatsAppButton /> {/* 🔹 Aquí se muestra el botón flotante */}
    </div>
  );
};

export default App;
