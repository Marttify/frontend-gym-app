import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { planesMock } from '../services/json';

const PlanList = () => {
  const [planes, setPlanes] = useState([]);

  useEffect(() => {
    const fetchPlanes = async () => {
      try {
        const response = await api.get('/get-planes');
        
        if (response.data && Array.isArray(response.data)) {
          setPlanes(response.data);
        } else {
          console.warn('Datos de planes no válidos. Usando datos predeterminados.');
          setPlanes(planesMock);
        }
      } catch (error) {
        console.error('Error fetching planes:', error);
        setPlanes(planesMock);
      }
    };

    fetchPlanes();
  }, []);

  return (
    <div>
      <h1>Planes</h1>
      <ul>
        {planes.map((plan) => (
          <li key={plan.id}>
            {plan.nombre} - ${plan.precio} ({plan.duracion} meses)
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlanList;
