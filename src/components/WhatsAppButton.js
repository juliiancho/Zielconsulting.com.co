import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '573165356364';
  const message = encodeURIComponent('Hola, estoy interesado en sus servicios de consultoría en sistemas de gestión.');
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a 
      href={whatsappLink} 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 bg-[#25D366] text-white p-4 rounded-full shadow-lg 
                 hover:bg-[#1DA851] transition-all duration-300 transform hover:scale-110 z-50"
      aria-label="Chatear por WhatsApp"
    >
      <svg 
        className="w-8 h-8 md:w-10 md:h-10" 
        fill="currentColor" 
        viewBox="0 0 24 24" 
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.148-.67.15-.198.297-.768.967-.94 1.165-.173.198-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.21-.242-.579-.487-.501-.67-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.29.173-1.414-.074-.124-.272-.198-.57-.347zm-5.421 6.373h-.003a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884a9.82 9.82 0 016.986 2.898 9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.888 9.884zM20.13 3.868A11.815 11.815 0 0012.05.001C5.495 0 .16 5.335.157 11.89c0 2.096.547 4.142 1.588 5.945L.057 24l6.304-1.654a11.89 11.89 0 005.683 1.448h.005c6.553 0 11.89-5.336 11.893-11.891a11.823 11.823 0 00-3.812-8.975z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
