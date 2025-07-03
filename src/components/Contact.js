import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.consent) {
      alert('Por favor acepta el tratamiento de datos personales.');
      return;
    }

    const { name, email, phone, message } = formData;
    const recipientEmail = 'info@zielconsulting.com.co';
    const subject = encodeURIComponent(`Consulta de Ziel Consulting de ${name}`);
    const body = encodeURIComponent(
      `Nombre: ${name}\n` +
      `Correo: ${email}\n` +
      `Teléfono: ${phone}\n\n` +
      `Mensaje:\n${message}`
    );

    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
    setFormData({ name: '', email: '', phone: '', message: '', consent: false });
    alert('Se abrirá tu cliente de correo para enviar el mensaje. ¡Gracias por contactarnos!');
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#1b1d1d] mb-16">Contacto</h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Lado izquierdo - información */}
          <div className="bg-[#f5f5f5] p-10 rounded-xl shadow-lg text-black">
            <h3 className="text-2xl font-bold text-[#199ca5] mb-6">
              ¿Deseas implementar un sistema de gestión o recibir asesoría especializada?
            </h3>
            <p className="mb-10 text-lg">Estamos listos para ayudarte.</p>

 <div className="space-y-6">
              <div className="flex items-start text-black">
                <svg className="w-6 h-6 text-[#199ca5] mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-lg">info@zielconsulting.com.co</span>
              </div>

              <div className="flex items-start text-black">
                <svg className="w-6 h-6 text-[#199ca5] mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-lg">+57 316 535 6364</span> {/* Número de teléfono con +57 */}
              </div>

             div className="flex items-start text-black">
                <svg className="w-6 h-6 text-[#199ca5] mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-lg">Bogotá, Colombia</span>
            
              </div>
            </div>
          </div>

          {/* Lado derecho - formulario */}
          <div className="bg-[#f5f5f5] p-10 rounded-xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6 text-black">
              <div>
                <label htmlFor="name" className="block text-lg font-medium mb-2">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:ring-[#199ca5] focus:border-[#199ca5]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium mb-2">Correo electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:ring-[#199ca5] focus:border-[#199ca5]"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-lg font-medium mb-2">Teléfono</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg py-3 px-4 focus:ring-[#199ca5] focus:border-[#199ca5]"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium mb-2">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg py-3 px-4 resize-none focus:ring-[#199ca5] focus:border-[#199ca5]"
                ></textarea>
              </div>

              {/* Autorización tratamiento de datos */}
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="consent"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleChange}
                  className="mt-1 mr-3"
                />
                <label htmlFor="consent" className="text-sm text-gray-700">
                  Autorizo el tratamiento de mis datos personales conforme a la política de privacidad de Ziel Consulting.
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-[#199ca5] text-white py-3 px-4 rounded-lg font-semibold text-lg hover:bg-[#14818a] transition duration-300 shadow-md hover:shadow-lg"
                >
                  Enviar mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
