import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '573165356364'; // Código internacional + número
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
        aria-hidden="true"
      >
        <path d="M12.004 2.003a9.96 9.96 0 00-8.523 15.025l-1.156 3.36 3.45-1.132a9.96 9.96 0 0014.154-8.88c0-5.52-4.48-10-10-10zm0 18.002a8.007 8.007 0 01-4.063-1.107l-.291-.17-2.046.671.667-2.05-.176-.293a8.01 8.01 0 1114.007-4.78 8.01 8.01 0 01-8.098 7.73zm4.296-5.735c-.244-.122-1.44-.708-1.664-.79-.223-.082-.386-.122-.55.122-.162.243-.63.79-.772.95-.142.162-.285.182-.529.06-.244-.122-1.03-.38-1.962-1.215-.726-.647-1.216-1.447-1.36-1.69-.143-.243-.015-.375.107-.497.11-.11.244-.284.366-.426.122-.143.162-.243.244-.406.082-.162.04-.305-.02-.426-.06-.122-.55-1.327-.754-1.816-.198-.476-.4-.412-.55-.42l-.469-.008c-.163 0-.426.06-.65.305s-.854.834-.854 2.035.874 2.362.996 2.527c.122.162 1.715 2.62 4.158 3.672.582.251 1.036.4 1.39.512.584.186 1.115.16 1.536.098.468-.07 1.44-.587 1.645-1.153.203-.568.203-1.055.142-1.153-.06-.1-.22-.162-.467-.285z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
