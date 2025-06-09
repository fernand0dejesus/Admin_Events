import React from 'react';
import Button from '../components/Button';
import Card from '../components/Card';

const WelcomePage = ({ onNavigate }) => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(to bottom right, #fff7ec, #ffe0b2)', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      padding: '1.5rem', 
      color: '#333',
      fontFamily: "'Inter', sans-serif"
    }}>
      <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{ color: '#e65100', fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>🎉 Gestión de Eventos</h1>
          <p style={{ fontSize: '1.25rem', color: '#555', marginBottom: '2rem' }}>
            Administra todos tus eventos de manera fácil y eficiente
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem', marginBottom: '3rem' }}>
          <Card style={{ backgroundColor: '#fffaf0', border: '1px solid #ffd180', borderRadius: '12px', padding: '1.5rem', boxShadow: '0 4px 12px rgba(255, 152, 0, 0.1)' }}>
            <div style={{ color: '#fb8c00', fontSize: '2.5rem', marginBottom: '1rem' }}>📅</div>
            <h3 style={{ color: '#e65100', fontWeight: '600', fontSize: '1.125rem', marginBottom: '0.5rem' }}>Crear Eventos</h3>
            <p style={{ color: '#666' }}>Crea y personaliza tus eventos con facilidad</p>
          </Card>
          <Card style={{ backgroundColor: '#fffaf0', border: '1px solid #ffd180', borderRadius: '12px', padding: '1.5rem', boxShadow: '0 4px 12px rgba(255, 152, 0, 0.1)' }}>
            <div style={{ color: '#fb8c00', fontSize: '2.5rem', marginBottom: '1rem' }}>🎯</div>
            <h3 style={{ color: '#e65100', fontWeight: '600', fontSize: '1.125rem', marginBottom: '0.5rem' }}>Gestionar</h3>
            <p style={{ color: '#666' }}>Administra todos tus eventos desde un solo lugar</p>
          </Card>
          <Card style={{ backgroundColor: '#fffaf0', border: '1px solid #ffd180', borderRadius: '12px', padding: '1.5rem', boxShadow: '0 4px 12px rgba(255, 152, 0, 0.1)' }}>
            <div style={{ color: '#fb8c00', fontSize: '2.5rem', marginBottom: '1rem' }}>📊</div>
            <h3 style={{ color: '#e65100', fontWeight: '600', fontSize: '1.125rem', marginBottom: '0.5rem' }}>Monitorear</h3>
            <p style={{ color: '#666' }}>Mantén el control de tus eventos en tiempo real</p>
          </Card>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center' }}>
          <Button
            variant="primary"
            onClick={() => onNavigate('admin')}
            style={{ fontSize: '1.125rem', padding: '1rem 2rem', fontWeight: 'bold' }}
          >
            Ir al Administrador de Eventos
          </Button>
          <p style={{ color: '#999' }}>¿Listo para gestionar tus eventos? ¡Comencemos!</p>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
