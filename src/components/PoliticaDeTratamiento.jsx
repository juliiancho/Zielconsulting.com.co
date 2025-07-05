import React from 'react';

export default function PoliticaDeTratamiento() {
  return (
    <div className="p-6 max-w-4xl mx-auto text-gray-800">
      <h1 className="text-3xl font-bold text-[#005f73] mb-6">
        Política de Tratamiento de Datos Personales
      </h1>

      <p><strong>Ziel Consulting S.A.S.</strong><br />
        NIT: 901963154-6<br />
        Dirección: Cra 49# 137 - 80, Bogotá, Colombia<br />
        Correo: info@zielconsulting.com.co<br />
        Teléfono: 3165356364</p>

      <hr className="my-6 border-gray-300" />

      <h2 className="text-2xl font-semibold text-[#005f73] mt-6">1. Alcance</h2>
      <p>Esta política aplica a todas las bases de datos y/o archivos que contengan datos personales y que sean objeto de tratamiento por parte de Ziel Consulting S.A.S., en calidad de Responsable y/o Encargado del Tratamiento.</p>

      <h2 className="text-2xl font-semibold text-[#005f73] mt-6">2. Objeto</h2>
      <p>Establecer los lineamientos para el tratamiento de datos personales por parte de Ziel Consulting, así como informar a los Titulares sobre: la finalidad del tratamiento, sus derechos, los deberes del Responsable y Encargado, y los procedimientos para ejercer los derechos de los Titulares.</p>

      <h2 className="text-2xl font-semibold text-[#005f73] mt-6">3. Marco Normativo</h2>
      <ul className="list-disc pl-5">
        <li>Constitución Política de Colombia: Artículos 15 y 20</li>
        <li>Ley 1266 de 2008</li>
        <li>Ley 1581 de 2012</li>
        <li>Decreto 1377 de 2013</li>
        <li>Decreto 1727 de 2009</li>
      </ul>

      <h2 className="text-2xl font-semibold text-[#005f73] mt-6">4. Definiciones</h2>
      <p>Se adoptan las definiciones contenidas en la Ley 1581 de 2012 y el Decreto 1377 de 2013, incluyendo pero sin limitarse a: Autorización, Aviso de Privacidad, Base de Datos, Dato Personal, Dato Público, Dato Sensible, Encargado del Tratamiento, Responsable del Tratamiento, Titular, Transferencia, Transmisión y Tratamiento.</p>

      {/* Continúa con las demás secciones como en tu HTML... */}

      <h2 className="text-2xl font-semibold text-[#005f73] mt-6">15. Vigencia</h2>
      <p>Esta política entra en vigencia a partir del [FECHA]. Las bases de datos tendrán una vigencia indefinida conforme a su finalidad. Cualquier modificación será informada previamente a los Titulares.</p>

      <hr className="my-6 border-gray-300" />
      <p className="text-sm text-gray-500"><em>Última actualización: [fecha de publicación]</em></p>
    </div>
  );
}
