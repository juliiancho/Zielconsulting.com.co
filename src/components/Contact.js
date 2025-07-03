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
    const recipientEmail = 'juliandgutierrezc95@gmail.com';
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
              {/* Email */}
              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#199ca5] mt-1 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12l-4-4-4 4m8 0H4" />
                </svg>
                <span className="text-lg">info@zielconsulting.com.co</span>
              </div>

              {/* Teléfono */}
              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#199ca5] mt-1 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h2l3.6 7.59L5.25 16H19v2H4a1 1 0 01-1-1V5z" />
                </svg>
                <span className="text-lg">+57 316 535 6364</span>
              </div>

              {/* Dirección */}
              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#199ca5] mt-1 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c1.656 0 3-1.344 3-3s-1.344-3-3-3-3 1.344-3 3 1.344 3 3 3zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
                <span className="text-lg">Bogotá, Colombia</span>
              </div>

              {/* Horario */}
              <div className="flex items-start">
                <svg className="w-6 h-6 text-[#199ca5] mt-1 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-lg">Lunes a viernes, 8:00 a.m. - 5:00 p.m.</span>
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
