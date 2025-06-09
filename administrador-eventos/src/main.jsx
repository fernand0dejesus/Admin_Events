import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Importá tu CSS global
import './index.css' // 👈 Este es el importante

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
