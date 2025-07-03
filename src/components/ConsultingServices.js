import React, { useState } from 'react';

const serviceCategories = [
  {
    id: 'calidad',
    name: 'Gestión de Calidad',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    services: [
      "Sistemas de gestión de Calidad",
      "Gestión de Procesos",
      "Análisis de tiempos y movimientos",
      "Análisis y distribución de planta",
      "Auditorías",
      "Buenas prácticas de almacenamiento",
      "Buenas prácticas de manufactura",
      "Formación",
      "Control de inventarios",
      "Definición de costo de producción",
      "Definición de rutas críticas",
      "Indicadores de gestión - KPI",
      "Licitaciones",
      "Gestión del cambio"
    ]
  },
  {
    id: 'ambiental',
    name: 'Gestión Ambiental',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
      </svg>
    ),
    services: [
      "Implementación de Sistemas de gestión",
      "Acompañamiento en programas gubernamentales",
      "Auditorías",
      "Formación",
      "Departamento de gestión ambiental",
      "Programas de Uso Eficiente",
      "Medición de huella de carbono",
      "Trámites ambientales",
      "Plan de Saneamiento Básico",
      "PGIR",
      "Interventores"
    ]
  },
  {
    id: 'sst',
    name: 'Seguridad y Salud en el Trabajo',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.618 5.984A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016zM12 9v2m0 4h.01" />
      </svg>
    ),
    services: [
      "Implementación de Sistemas de gestión",
      "Análisis de puestos de trabajo",
      "Inspección de puestos de trabajo",
      "Análisis e intervención de riesgo psicosocial",
      "Auditoría",
      "Formación",
      "Evaluaciones médicas ocupacionales",
      "Investigación de accidentes de trabajo (AT)",
      "Plan estratégico de seguridad vial (PESV)",
      "Profesiograma",
      "Sistemas de vigilancia epidemiológica (SVE)",
      "Bateria de Riesgo Psicosocial"
    ]
  },
  {
    id: 'riesgo',
    name: 'Gestión del Riesgo',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    services: [
      "Sistemas de Administración del Riesgo de Lavado de Activos",
      "Business Alliance for Secure Commerce (BASC)",
      "Operador Económicamente Autorizado (OEA)",
      "Plan de Continuidad de negocio",
      "Gestión de Crisis",
      "Inspecciones de Seguridad"
    ]
  },
  {
    id: 'adicionales',
    name: 'Servicios Adicionales',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    services: [
      "Fumigación",
      "Lavado de tanques",
      "Venta y recarga de extintores"
    ]
  }
];

const ConsultingServices = () => {
  const [activeCategory, setActiveCategory] = useState('calidad');

  return (
    <section id="servicios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Nuestros Servicios Especializados</h2>
        
        <div className="flex flex-wrap justify-center mb-8">
          {serviceCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`mx-2 mb-2 px-4 py-2 rounded-full flex items-center transition ${activeCategory === category.id ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'}`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </button>
          ))}
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceCategories.find(cat => cat.id === activeCategory).services.map((service, index) => (
              <div key={index} className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <p className="text-gray-700">{service}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultingServices;

// DONE