import { useState } from 'react';

// Hook personalizado para formularios
export const useForm = (initialValues = {}) => {
  const [formData, setFormData] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name?.trim()) {
      newErrors.name = 'El nombre del evento es requerido';
    }
    if (!formData.location?.trim()) {
      newErrors.location = 'La ubicación es requerida';
    }
    if (!formData.description?.trim()) {
      newErrors.description = 'La descripción es requerida';
    }
    if (!formData.type?.trim()) {
      newErrors.type = 'El tipo de evento es requerido';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const resetForm = () => {
    setFormData(initialValues);
    setErrors({});
    setTouched({});
  };

  return { 
    formData, 
    errors, 
    touched,
    handleChange, 
    handleBlur,
    validateForm, 
    resetForm 
  };
};