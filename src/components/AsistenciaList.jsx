import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { asistenciasMock } from '../services/json';

const AsistenciaList = () => {
  const [asistencias, setAsistencias] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAsistencias = async () => {
      setLoading(true);
      try {
        const response = await api.get('/get-asistencias');
        if (response.data && Array.isArray(response.data)) {
          setAsistencias(response.data);
        } else {
          console.warn('Datos de asistencias no válidos. Usando datos predeterminados.');
          setAsistencias(asistenciasMock);
        }
      } catch (error) {
        console.error('Error fetching asistencias:', error);
        setAsistencias(asistenciasMock);
      } finally {
        setLoading(false);
      }
    };

    fetchAsistencias();
  }, []);

  return (
    <div>
      <h1>Asistencias</h1>
      {loading ? (
        <p>Cargando asistencias...</p>
      ) : (
        <ul>
          {asistencias.map((asistencia) => (
            <li key={asistencia.id}>
              Usuario ID: {asistencia.usuario_id} - {new Date(asistencia.fecha).toLocaleString()} ({asistencia.estado})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AsistenciaList;
