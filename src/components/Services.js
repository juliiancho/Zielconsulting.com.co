import React, { useState } from 'react';

const Services = () => {
  const [activeTab, setActiveTab] = useState('estrategia');

  const services = {
    estrategia: {
      name: "Estrategia Corporativa",
      items: [
        "Planeación Estrategica",
        "Gobierno Corporativo",
        "Objetivos e Indicadores Clave (OKR)",
        "Analisis del Contexto de la Organización",
        "Análisis del Contexto de la Organozación",
        "Transformación Organizacional"
      ]
    },
    sistemas: {
      name: "Sistemas de Gestión",
      items: [
        "Sistemas de Gestión de Calidad (ISO9001)",
        "Sistemas de Gestión de Ambiental (ISO14001)",
        "Sistemas de Gestión en SST (ISO45001)",
        "Seguridad en la Cadena de Suministro (BASC, OEA, ISO28000)",
        "Seguridad de la Información (ISO27001)",
        "Auditoría Inerna",
        "Implementación de buenas prácticas de manufactura (BPM) y laboratorio (BPL)"
      ]
    },
    sst: {
      name: "Salud y Seguridad en el Trabajo (SST)",
      items: [
        "Implementación del SG-SST según Decreto 1072 y Resolución 312",
        "Análisis e inspección de puestos de trabajo",
        "Evaluaciones médicas ocupacionales",
        "Aplicación e intervención de BRP (Batería de Riesgo Psicosocial)",
        "Investigación de accidentes laborales",
        "Programas de vigilancia epidemiológica",
        "Plan estratégico de seguridad vial (PESV)",
        "Plan de Emergencias",
        "Profesiogramas",
        "Auditorías",
        "Formación"
      ]
    },
    procesos: {
      name: "Ingeniería de Procesos",
      items: [
        "Rediseño de procesos bajo enfoque Lean",
        "Definición y validación de layout de planta",
        "Análisis de tiempos y movimientos",
        "Estudio de capacidad instalada y balance de líneas",
        "Diseño e implementación de indicadores operativos",
        "Mapas de procesos y flujos de valor",
        "Diagnóstico y mejora continua (Kaizen, 5S, PDCA)",
        "Simulación de escenarios productivos",
        "Optimización de flujos logísticos"
      ]
    },
    cumplimiento: {
      name: "Cumplimiento",
      items: [
        "Trámite de licencias ambientales y sectoriales",
        "Sistemas de prevención de lavado de activos",
        "Programas de ética y anticorrupción",
        "Política de protección de datos personales",
        "Desarrollo de políticas de cumplimiento organizacional"
      ]
    },
    sostenibilidad: {
      name: "Sostenibilidad",
      items: [
        "Diseño de estrategias de sostenibilidad empresarial",
        "Construcción de informes de sostenibilidad (GRI, TCFD, SASB)",
        "Medición y gestión de huella de carbono",
        "Implementación de modelos de cumplimiento social (SMETA, BSCI, SA8000)",
        "Diseño e implementación de políticas de RSE",
        "Programas de compras sostenibles y evaluación de proveedores",
        "Asesoría en obtención de certificaciones sostenibles (Empresa B, Carbono Neutro, etc.)",
        "Capacitación a directivos en enfoque ESG"
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
