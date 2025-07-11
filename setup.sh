#!/bin/bash

echo "🔧 Iniciando configuración del entorno..."

# Verifica que Node.js esté instalado
if ! command -v node &> /dev/null
then
    echo "❌ Node.js no está instalado. Por favor instálalo antes de continuar."
    exit 1
fi

# Paso 1: Instalar dependencias del proyecto
echo "📦 Instalando dependencias..."
npm install

# Paso 2: Instalar EmailJS
echo "📧 Instalando EmailJS..."
npm install @emailjs/browser

# Paso 3: Ejecutar proyecto (modo desarrollo)
echo "🚀 Iniciando servidor de desarrollo..."
npm run dev
