import React from 'react';
import whatsappIcon from '../assets/whatsapp.png'; // Ajusta la ruta si está en otra carpeta

const WhatsAppButton = () => {
  const phoneNumber = '573165356364';
  const message = encodeURIComponent('Hola, estoy interesado en los servicios de Ziel Consulting.');
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50"
      aria-label="WhatsApp Ziel"
    >
      <img
        src={whatsappIcon}
        alt="WhatsApp"
        className="w-14 h-14 md:w-16 md:h-16 object-contain rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
      />
    </a>
  );
};

export default WhatsAppButton;
