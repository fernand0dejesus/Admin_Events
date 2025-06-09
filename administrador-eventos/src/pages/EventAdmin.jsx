import React, { useState, useEffect } from 'react';
import Button from '../components/Button';
import Card from '../components/Card';

const EventAdmin = ({ onNavigate }) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '', location: '', type: 'PR', description: ''
  });

  const API_BASE_URL = 'https://retoolapi.dev/JWtbTo/eventos';

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const response = await fetch(API_BASE_URL);
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoading(false);
    }
  };

  const createEvent = async () => {
    if (!formData.name || !formData.location || !formData.description) {
      alert('Por favor completa todos los campos');
      return;
    }
    try {
      const response = await fetch(API_BASE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          evento: formData.name,
          direccion: formData.location,
          tipoEvento: formData.type,
          descripcion: formData.description
        })
      });
      const newEvent = await response.json();
      setEvents(prev => [...prev, newEvent]);
      setFormData({ name: '', location: '', type: 'PR', description: '' });
      setShowForm(false);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const deleteEvent = async (id) => {
    if (confirm('¿Eliminar evento?')) {
      try {
        await fetch(`${API_BASE_URL}/${id}`, { method: 'DELETE' });
        setEvents(prev => prev.filter(event => event.id !== id));
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div style={{ minHeight: '100vh', padding: '1.5rem', background: 'linear-gradient(to bottom right, #fff7ec, #ffe0b2)', color: '#333' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
          <h1 style={{ color: '#e65100', fontSize: '2rem', fontWeight: 'bold' }}>Administrador de Eventos</h1>
          <Button variant="secondary" onClick={() => onNavigate('welcome')}>
            ← Volver al Inicio
          </Button>
        </div>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
          <Button variant="primary" onClick={() => setShowForm(!showForm)}>
            {showForm ? 'Cancelar' : '+ Nuevo Evento'}
          </Button>
          <Button variant="secondary" onClick={fetchEvents} loading={loading}>
            Actualizar
          </Button>
        </div>

        {showForm && (
          <Card style={{ marginBottom: '2rem', backgroundColor: '#fffaf0', border: '1px solid #ffd180', borderRadius: '12px', padding: '1.5rem', boxShadow: '0 4px 12px rgba(255, 152, 0, 0.1)' }}>
            <h2 style={{ color: '#e65100', fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Crear Nuevo Evento</h2>
            <div style={{ display: 'grid', gap: '1rem' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                <input
                  type="text"
                  placeholder="Nombre del evento"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  style={{
                    padding: '0.5rem 1rem',
                    border: '1px solid #ffcc80',
                    borderRadius: '8px',
                    width: '100%',
                    transition: 'border-color 0.3s',
                    fontFamily: 'Inter, sans-serif'
                  }}
                  required
                  onFocus={e => (e.target.style.borderColor = '#fb8c00')}
                  onBlur={e => (e.target.style.borderColor = '#ffcc80')}
                />
                <select
                  value={formData.type}
                  onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                  style={{
                    padding: '0.5rem 1rem',
                    border: '1px solid #ffcc80',
                    borderRadius: '8px',
                    width: '100%',
                    transition: 'border-color 0.3s',
                    fontFamily: 'Inter, sans-serif'
                  }}
                  onFocus={e => (e.target.style.borderColor = '#fb8c00')}
                  onBlur={e => (e.target.style.borderColor = '#ffcc80')}
                >
                  <option value="PR">Presencial</option>
                  <option value="VR">Virtual</option>
                  <option value="ft">Festival</option>
                </select>
              </div>
              <input
                type="text"
                placeholder="Ubicación"
                value={formData.location}
                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                style={{
                  padding: '0.5rem 1rem',
                  border: '1px solid #ffcc80',
                  borderRadius: '8px',
                  width: '100%',
                  transition: 'border-color 0.3s',
                  fontFamily: 'Inter, sans-serif'
                }}
                required
                onFocus={e => (e.target.style.borderColor = '#fb8c00')}
                onBlur={e => (e.target.style.borderColor = '#ffcc80')}
              />
              <textarea
                placeholder="Descripción"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows="3"
                style={{
                  padding: '0.5rem 1rem',
                  border: '1px solid #ffcc80',
                  borderRadius: '8px',
                  width: '100%',
                  transition: 'border-color 0.3s',
                  fontFamily: 'Inter, sans-serif'
                }}
                required
                onFocus={e => (e.target.style.borderColor = '#fb8c00')}
                onBlur={e => (e.target.style.borderColor = '#ffcc80')}
              />
              <Button onClick={createEvent} variant="primary">
                Crear Evento
              </Button>
            </div>
          </Card>
        )}

        <Card style={{ backgroundColor: '#fffaf0', border: '1px solid #ffd180', borderRadius: '12px', padding: '1.5rem', boxShadow: '0 4px 12px rgba(255, 152, 0, 0.1)' }}>
          <h2 style={{ color: '#e65100', fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem' }}>Eventos ({events.length})</h2>
          {loading ? (
            <div style={{ textAlign: 'center', padding: '2rem 0' }}>
              <div style={{ margin: '0 auto', width: '2rem', height: '2rem', border: '4px solid #fb8c00', borderTopColor: 'transparent', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
              <p>Cargando eventos...</p>
            </div>
          ) : events.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '2rem 0', color: '#666' }}>
              <p style={{ marginBottom: '1rem' }}>No hay eventos creados</p>
              <Button variant="primary" onClick={() => setShowForm(true)}>
                Crear Primer Evento
              </Button>
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem' }}>
              {events.map((event) => (
                <div key={event.id} style={{ backgroundColor: '#fffaf0', border: '1px solid #ffd180', borderRadius: '12px', padding: '1rem', boxShadow: '0 2px 8px rgba(255, 152, 0, 0.1)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontWeight: '600', fontSize: '1.125rem', color: '#e65100' }}>{event.evento}</h3>
                    <Button variant="danger" onClick={() => deleteEvent(event.id)} style={{ fontSize: '0.875rem', padding: '0 0.75rem' }}>
                      ×
                    </Button>
                  </div>
                  <p style={{ fontSize: '0.875rem', color: '#666', marginBottom: '0.5rem' }}>📍 {event.direccion}</p>
                  <p style={{ fontSize: '0.9rem', color: '#444', marginBottom: '0.75rem' }}>{event.descripcion}</p>
                  <span style={{
                    display: 'inline-block',
                    padding: '0.25rem 0.5rem',
                    borderRadius: '999px',
                    fontSize: '0.75rem',
                    color: '#e65100',
                    backgroundColor: '#ffe0b2',
                  }}>
                    {event.tipoEvento === 'PR' ? 'Presencial' :
                      event.tipoEvento === 'VR' ? 'Virtual' : 'Festival'}
                  </span>
                </div>
              ))}
            </div>
          )}
        </Card>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default EventAdmin;
