import { useState } from 'react';

// Hook personalizado para manejo de eventos con API real
export const useEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const API_BASE_URL = 'https://retoolapi.dev/JWtbTo/eventos';

  // Obtener todos los eventos
  const fetchEvents = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(API_BASE_URL);
      if (!response.ok) {
        throw new Error('Error al obtener los eventos');
      }
      const data = await response.json();
      setEvents(data);
    } catch (err) {
      setError(err.message);
      console.error('Error fetching events:', err);
    } finally {
      setLoading(false);
    }
  };

  // Crear un nuevo evento
  const createEvent = async (eventData) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(API_BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          evento: eventData.name,
          direccion: eventData.location,
          tipoEvento: eventData.type || 'PR',
          descripcion: eventData.description
        }),
      });
      
      if (!response.ok) {
        throw new Error('Error al crear el evento');
      }
      
      const newEvent = await response.json();
      setEvents(prev => [...prev, newEvent]);
      return newEvent;
    } catch (err) {
      setError(err.message);
      console.error('Error creating event:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  // Eliminar un evento
  const deleteEvent = async (id) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${API_BASE_URL}/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error('Error al eliminar el evento');
      }
      
      setEvents(prev => prev.filter(event => event.id !== id));
    } catch (err) {
      setError(err.message);
      console.error('Error deleting event:', err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    events,
    loading,
    error,
    fetchEvents,
    createEvent,
    deleteEvent,
  };
};