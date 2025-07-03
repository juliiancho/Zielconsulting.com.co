import React, { useState } from 'react';

const Services = () => {
  const [activeTab, setActiveTab] = useState('calidad');

  const services = {
    calidad: {
      name: "Gestión de Calidad",
      items: [
        "Implementación de sistemas de gestión",
        "Auditorías",
        "Indicadores de gestión (KPI)",
        "Gestión del cambio",
        "Formación y capacitación"
      ]
    },
    procesos: {
      name: "Gestión de Procesos",
      items: [
        "Análisis de tiempos y movimientos",
        "Distribución de planta",
        "Buenas prácticas de manufactura y almacenamiento",
        "Control de inventarios",
        "Rutas críticas y costos de producción",
        "Apoyo en licitaciones"
      ]
    },
    ambiental: {
      name: "Gestión Ambiental",
      items: [
        "Implementación de sistemas de gestión ambiental",
        "Auditorías",
        "Formación",
        "Programas de uso eficiente de recursos",
        "Medición de huella hídrica, energética, de papel y carbono",
        "Trámites, planes de saneamiento y gestión de residuos",
        "Acompañamiento en programas gubernamentales",
        "Interventoría ambiental"
      ]
    },
    sst: {
      name: "Salud y Seguridad en el Trabajo (SST)",
      items: [
        "Implementación del SG-SST",
        "Análisis e inspección de puestos de trabajo",
        "Evaluaciones médicas ocupacionales",
        "Intervención del riesgo psicosocial (batería, vigilancia)",
        "Investigación de accidentes laborales",
        "Plan estratégico de seguridad vial (PESV)",
        "Profesiogramas",
        "Auditorías",
        "Formación"
      ]
    },
    riesgo: {
      name: "Gestión del Riesgo",
      items: [
        "SARLAFT – Lavado de Activos",
        "Certificaciones BASC / OEA",
        "Planes de continuidad de negocio",
        "Gestión de crisis",
        "Inspecciones de seguridad"
      ]
    },
    adicionales: {
      name: "Servicios Adicionales",
      items: [
        "Fumigación",
        "Lavado de tanques",
        "Venta y recarga de extintores"
      ]
    }
  };

  return (
    <section id="servicios" className="py-20 bg-[#f5f5f5]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-[#1b1d1d] mb-16">Nuestros Servicios</h2>
        
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {Object.keys(services).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-5 py-2 rounded-full text-sm md:text-base font-medium transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md ${activeTab === key ? 'bg-[#199ca5] text-white shadow-lg' : 'bg-white text-[#1b1d1d] border border-gray-200 hover:bg-gray-50'}`}
            >
              {services[key].name}
            </button>
          ))}
        </div>

        <div className="bg-white p-10 rounded-xl shadow-lg">
          <h3 className="text-3xl font-bold text-[#1b1d1d] mb-8 text-center">{services[activeTab].name}</h3>
          <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services[activeTab].items.map((service, index) => (
              <li key={index} className="flex items-start text-black bg-[#f5f5f5] p-4 rounded-lg shadow-sm transform transition-all duration-300 hover:scale-[1.02] hover:shadow-md">
                <svg className="w-6 h-6 text-[#199ca5] mt-1 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-lg">{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;