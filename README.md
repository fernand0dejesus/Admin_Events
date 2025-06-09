Administrador de Eventos - React App
Una aplicación web moderna para gestionar eventos con operaciones CRUD completas, construida con React y Tailwind CSS.
🚀 Características

✅ CRUD Completo: Crear, leer y eliminar eventos
📱 Diseño Responsivo: Optimizado para móviles, tablets y desktop
🎨 UI Moderna: Interfaz limpia con Tailwind CSS
🔄 Estados de Carga: Indicadores visuales para todas las operaciones
✨ Validación de Formularios: Validación en tiempo real con mensajes de error
🌐 API Integration: Conectado a API REST para persistencia de datos
📊 Hooks Personalizados: Lógica reutilizable y organizada

📦 Tecnologías Utilizadas

Vite - Build tool y servidor de desarrollo
React 18 - Framework principal
Tailwind CSS - Framework de estilos
Custom Hooks - Manejo de estado y lógica
Fetch API - Comunicación con backend
React Hooks - useState, useEffect, custom hooks

🛠️ Instalación y Configuración
Prerrequisitos

Node.js (versión 18 o superior)
npm o yarn
Editor de código (VS Code recomendado)

Paso 1: Crear el proyecto con Vite
bash# Crear nueva aplicación React con Vite
npm create vite@latest administrador-eventos -- --template react
cd administrador-eventos

# Instalar dependencias
npm install
Paso 2: Instalar Tailwind CSS
bash# Instalar Tailwind CSS
npm install -D tailwindcss postcss autoprefixer

# Inicializar Tailwind
npx tailwindcss init -p
Paso 3: Configurar Tailwind CSS
Editar tailwind.config.js:
javascript/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
Paso 4: Configurar CSS principal
Reemplazar el contenido de src/index.css:
css@tailwind base;
@tailwind components;
@tailwind utilities;
Paso 5: Reemplazar App.jsx
Reemplazar el contenido de src/App.jsx con el código del componente AdministradorEventos.
Paso 6: Limpiar archivos innecesarios
bash# Eliminar archivos no necesarios
rm src/App.css src/assets/react.svg public/vite.svg
Paso 7: Actualizar main.jsx
Verificar que src/main.jsx tenga:
javascriptimport React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
Paso 8: Ejecutar la aplicación
bash# Iniciar servidor de desarrollo
npm run dev
La aplicación estará disponible en http://localhost:5173
📁 Estructura del Proyecto
administrador-eventos/
├── public/
│   └── index.html
├── src/
│   ├── App.jsx             # Componente principal
│   ├── main.jsx            # Punto de entrada
│   └── index.css           # Estilos de Tailwind
├── index.html              # HTML principal
├── package.json
├── vite.config.js          # Configuración de Vite
├── tailwind.config.js
└── README.md
