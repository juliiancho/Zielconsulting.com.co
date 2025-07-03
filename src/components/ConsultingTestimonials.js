import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    quote: "TrustConsult transformó completamente nuestro modelo de negocio. En solo 6 meses aumentamos nuestra rentabilidad en un 40%.",
    author: "María González, CEO de Innovatech"
  },
  {
    id: 2,
    quote: "El equipo de TrustConsult entendió perfectamente nuestras necesidades y nos proporcionó soluciones prácticas y efectivas.",
    author: "Carlos Mendoza, Director de Operaciones"
  },
  {
    id: 3,
    quote: "Gracias a su asesoría estratégica, pudimos expandirnos a nuevos mercados con mucho éxito.",
    author: "Laura Fernández, Gerente Comercial"
  }
];

const ConsultingTestimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrent(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrent(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section id="testimonios" className="py-20 bg-blue-800 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Lo que dicen nuestros clientes</h2>
        <div className="relative max-w-3xl mx-auto">
          <div className="bg-white text-gray-800 p-8 rounded-lg shadow-lg">
            <blockquote className="text-xl italic mb-6">
              "{testimonials[current].quote}"
            </blockquote>
            <p className="font-semibold text-blue-700">— {testimonials[current].author}</p>
          </div>
          <div className="flex justify-center mt-6 space-x-4">
            <button 
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-white text-blue-800 hover:bg-blue-100 transition"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-white text-blue-800 hover:bg-blue-100 transition"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultingTestimonials;

// DONE