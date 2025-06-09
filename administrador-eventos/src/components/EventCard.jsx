import React from 'react';
import Button from './Button';
import Card from './Card';

// Componente EventCard para mostrar cada evento
const EventCard = ({ event, onDelete, loading }) => {
  const getEventTypeLabel = (type) => {
    const types = {
      'PR': 'Presencial',
      'VR': 'Virtual',
      'ft': 'Festival'
    };
    return types[type] || type;
  };

  const getEventTypeColor = (type) => {
    const colors = {
      'PR': 'bg-blue-100 text-blue-800',
      'VR': 'bg-green-100 text-green-800',
      'ft': 'bg-purple-100 text-purple-800'
    };
    return colors[type] || 'bg-gray-100 text-gray-800';
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.evento}</h3>
          <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getEventTypeColor(event.tipoEvento)}`}>
            {getEventTypeLabel(event.tipoEvento)}
          </span>
        </div>
        <Button
          variant="danger"
          size="sm"
          onClick={() => onDelete(event.id)}
          loading={loading}
          className="ml-4"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9zM4 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 012 0v4a1 1 0 11-2 0V9zm4 0a1 1 0 012 0v4a1 1 0 11-2 0V9z"/>
          </svg>
        </Button>
      </div>
      
      <div className="space-y-3 text-sm text-gray-600">
        <div className="flex items-center">
          <svg className="w-4 h-4 mr-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
          </svg>
          <span>{event.direccion}</span>
        </div>
        
        <div className="text-gray-700">
          <p>{event.descripcion}</p>
        </div>
      </div>
    </Card>
  );
};

export default EventCard;