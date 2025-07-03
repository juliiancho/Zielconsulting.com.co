import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;
    const recipientEmail = 'juliandgutierrezc95@gmail.com';
    const subject = encodeURIComponent(`Consulta de Ziel Consulting de ${name}`);
    const body = encodeURIComponent(
      `Nombre: ${name}\n` +
      `Correo: ${email}\n` +
      `Teléfono: ${phone}\n\n` +
      `Mensaje:\n${message}`
    );

    window.location.href = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;
    setFormData({ name: '', email: '', phone: '', message: '' });
    alert('Se abrirá tu cliente de correo para enviar el mensaje. ¡Gracias por contactarnos!');
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#1b1d1d] mb-16">Contacto</h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-[#f5f5f5] p-10 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold text-[#199ca5] mb-6">
              ¿Deseas implementar un sistema de gestión o recibir asesoría especializada?
            </h3>
            <p className="text-black mb-10 text-lg">Estamos listos para ayudarte.</p>

            <div className="space-y-6 text-black">
              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#199ca5] mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8..." />
                </svg>
                <span className="text-lg">info@zielconsulting.com.co</span>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#199ca5] mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1..." />
                </svg>
                <span className="text-lg">+57 316 535 6364</span>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#199ca5] mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998..." />
                </svg>
                <span className="text-lg">Bogotá, Colombia</span>
              </div>
              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#199ca5] mt-1 mr-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3..." />
                </svg>
                <span className="text-lg">Lunes a viernes, 8:00 a.m. - 5:00 p.m.</span>
              </div>
            </div>
          </div>

          <div className="bg-[#f5f5f5] p-10 rounded-xl shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-black mb-2">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 text-black focus:outline-none focus:ring-2 focus:ring-[#199ca5]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-medium text-black mb-2">Correo electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 text-black focus:outline-none focus:ring-2 focus:ring-[#199ca5]"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-lg font-medium text-black mb-2">Teléfono</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 text-black focus:outline-none focus:ring-2 focus:ring-[#199ca5]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-medium text-black mb-2">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-lg shadow-sm py-3 px-4 text-black resize-none focus:outline-none focus:ring-2 focus:ring-[#199ca5]"
                ></textarea>
              </div>

              {/* ✅ Consentimiento de datos personales */}
              <div className="flex items-start mb-4">
                <input
                  type="checkbox"
                  id="dataConsent"
                  required
                  className="mt-1 mr-3"
                />
                <label htmlFor="dataConsent" className="text-sm text-black">
                  Autorizo el tratamiento de mis datos personales de acuerdo con la
                  <a href="/politica-de-privacidad" target="_blank" rel="noopener noreferrer" className="text-[#199ca5] underline ml-1">
                    política de privacidad
                  </a>.
                </label>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full bg-[#199ca5] text-white py-3 px-4 rounded-lg font-semibold text-lg hover:bg-[#14818a] transition-all duration-300 transform hover:-translate-y-0.5 shadow-md hover:shadow-lg"
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
