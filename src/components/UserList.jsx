import React, { useEffect, useState } from 'react';
import api from '../services/api';
import { usuariosMock } from '../services/json';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await api.get('/get-usuarios');
        
        if (response.data && Array.isArray(response.data)) {
          setUsers(response.data);
        } else {
          console.warn('Datos de usuarios no válidos. Usando datos predeterminados.');
          setUsers(usuariosMock);
        }
      } catch (error) {
        console.error('Error fetching users:', error);
        setUsers(usuariosMock);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Usuarios</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.nombre} {user.apellido} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
