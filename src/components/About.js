import React from 'react';

const About = () => {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#1b1d1d] mb-16">Nosotros</h2>
        
        <div className="max-w-5xl mx-auto">
          {/* Introducción */}
          <div className="mb-16 text-center">
            <p className="text-xl text-black mb-6 leading-relaxed">
              En <span className="font-semibold text-[#199ca5]">Ziel Consulting</span>, impulsamos el crecimiento sostenible y la eficiencia organizacional mediante soluciones integrales en gestión empresarial.
            </p>
            
            <p className="text-lg text-black leading-relaxed">
              Contamos con un equipo multidisciplinario de expertos con amplia experiencia en normativas técnicas, procesos industriales, seguridad, sostenibilidad y sistemas de gestión.
            </p>
          </div>

          {/* Misión y Visión */}
          <div className="grid md:grid-cols-2 gap-10 mb-16">
            {/* Misión */}
            <div className="bg-[#f5f5f5] p-8 rounded-xl shadow-md border-t-4 border-[#199ca5] transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
              <h3 className="text-2xl font-bold text-[#1b1d1d] mb-4 flex items-center">
                <span className="bg-[#199ca5] text-white p-3 rounded-full mr-4 shadow-md">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </span>
                Misión
              </h3>
              <p className="text-black pl-16 leading-relaxed">
                Acompañar a empresas e instituciones en su proceso de transformación, optimización y cumplimiento normativo.
              </p>
            </div>

            {/* Visión */}
            <div className="bg-[#f5f5f5] p-8 rounded-xl shadow-md border-t-4 border-[#199ca5] transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
              <h3 className="text-2xl font-bold text-[#1b1d1d] mb-4 flex items-center">
                <span className="bg-[#199ca5] text-white p-3 rounded-full mr-4 shadow-md">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                Visión
              </h3>
              <p className="text-black pl-16 leading-relaxed">
                Ser reconocidos como una firma referente en consultoría empresarial integral en Latinoamérica.
              </p>
            </div>
          </div>

          {/* Valores */}
          <div className="bg-[#f5f5f5] p-10 rounded-xl shadow-md">
            <h3 className="text-3xl font-bold text-center text-[#1b1d1d] mb-10">Nuestros Valores</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Excelencia",
                  description: "Buscamos la máxima calidad en cada proyecto",
                  icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                },
                {
                  title: "Integridad",
                  description: "Actuamos con ética y transparencia",
                  icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                },
                {
                  title: "Innovación",
                  description: "Soluciones creativas y vanguardistas",
                  icon: "M13 10V3L4 14h7v7l9-11h-7z"
                },
                {
                  title: "Compromiso",
                  description: "Resultados tangibles para nuestros clientes",
                  icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                },
                {
                  title: "Trabajo en Equipo",
                  description: "Colaboración multidisciplinaria",
                  icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                },
                {
                  title: "Sostenibilidad",
                  description: "Soluciones responsables con el medio ambiente",
                  icon: "M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-[#199ca5] transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                  <div className="flex items-center mb-3">
                    <div className="bg-[#199ca5] p-2 rounded-full mr-3 shadow-md">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                      </svg>
                    </div>
                    <h4 className="text-lg font-bold text-[#1b1d1d]">{item.title}</h4>
                  </div>
                  <p className="text-black pl-12">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;