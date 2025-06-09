import React from 'react';

const Button = ({ children, variant = 'primary', onClick, loading = false, className = '' }) => {
  const variants = {
    primary: 'button-primary',
    secondary: 'button-secondary',
    danger: 'button-danger', // Si querés, definimos danger abajo o lo adaptamos
  };

  return (
    <button
      onClick={onClick}
      disabled={loading}
      className={`${variants[variant]} ${className}`}
    >
      {loading ? 'Cargando...' : children}
    </button>
  );
};

export default Button;
