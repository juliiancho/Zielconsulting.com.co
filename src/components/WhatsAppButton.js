import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '573165356364'; // Asegúrate de que el número esté en formato internacional sin símbolos
  const message = encodeURIComponent('Hola, estoy interesado en los servicios de Ziel Consulting.');
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chatear por WhatsApp"
      className="fixed bottom-6 right-6 z-50"
    >
      <div
        className="w-16 h-16 md:w-20 md:h-20 bg-[#25D366] rounded-full shadow-xl flex items-center justify-center 
                   hover:bg-[#1ebe5d] transition-all duration-300 transform hover:scale-105"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
          className="w-8 h-8 md:w-10 md:h-10 text-white"
          fill="currentColor"
        >
          <path d="M380.9 97.1C339-6.6 256.6-31 170.6 9.4 121.2 33 82.1 76.4 67.7 129.4 53.4 182.3 68.3 239.7 107 282.3L65 409.4c-3.7 11.3 5.8 22.1 17.7 21.5l109.2-22.8c41.5 18.5 89.7 17.4 130.7-3 41.6-20.5 71.6-58.6 83.2-103.7 11.6-45.1 3.4-93.6-25.8-133.3zM224.1 361.3c-28.2 0-56-8.3-79.6-23.9l-5.7-3.7-64.5 13.5 13.6-63.1-4.2-6c-27.2-38.9-33.3-89.1-15.4-133.2C93.2 96.2 126.4 61.1 170.3 43.2c43.8-17.9 93.9-13.4 133.3 12.1 39.4 25.5 64.1 67.9 67.4 115.2 3.2 47.3-15.5 93.1-50.8 124.1-28.3 25-64.3 38.1-101.1 38.1zm83.1-101.6c-4.5-2.3-26.6-13.1-30.7-14.6s-7.1-2.3-10.1 2.3-11.6 14.6-14.2 17.6-5.2 3.4-9.7 1.1c-26.5-13.2-43.8-23.6-61.2-53.5-4.6-7.9 4.6-7.3 13.2-24.3 1.5-3.1.8-5.8-.4-8.1s-10.1-24.2-13.8-33.2c-3.6-8.7-7.3-7.5-10.1-7.6s-5.8-.1-8.9-.1-8.1 1.1-12.3 5.8-16.1 15.7-16.1 38.3 16.5 44.4 18.8 47.5c2.3 3.1 32.6 49.7 79 69.7 11 4.8 19.5 7.6 26.2 9.7 11 3.5 21.1 3 29-1.8 8.8-5.3 27.2-24.9 27.2-34.2s-1.3-12.3-5.8-14.6z" />
        </svg>
      </div>
    </a>
  );
};

export default WhatsAppButton;
