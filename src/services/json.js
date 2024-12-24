export const usuariosMock = [
  {
      id: 1,
      nombre: "Juan",
      apellido: "Pérez",
      email: "juan.perez@example.com",
      contraseña: "contraseña_segura_123",
      rol: "administrador",
      fecha_registro: "2024-01-15",
      estado: true
  },
  {
      id: 2,
      nombre: "Ana",
      apellido: "Gómez",
      email: "ana.gomez@example.com",
      contraseña: "contraseña_segura_456",
      rol: "entrenador",
      fecha_registro: "2024-02-10",
      estado: true
  },
  {
      id: 3,
      nombre: "Carlos",
      apellido: "Sánchez",
      email: "carlos.sanchez@example.com",
      contraseña: "contraseña_segura_789",
      rol: "cliente",
      fecha_registro: "2024-03-01",
      estado: true
  }
];


export const planesMock = [
  {
      id: 1,
      nombre: "Plan Básico",
      precio: 19.99,
      duracion: 3,
      descripcion: "Acceso a rutinas de entrenamiento básicas y seguimiento mensual"
  },
  {
      id: 2,
      nombre: "Plan Premium",
      precio: 39.99,
      duracion: 6,
      descripcion: "Acceso a rutinas personalizadas, seguimiento semanal con entrenador y acceso a contenido exclusivo"
  },
  {
      id: 3,
      nombre: "Plan Elite",
      precio: 59.99,
      duracion: 12,
      descripcion: "Acceso completo a todas las rutinas, seguimiento diario y soporte prioritario"
  }
];



export const asistenciasMock = [
  {
      "id": 1,
      "usuario_id": 3,
      "fecha": "2024-03-15T11:00:00.000Z",
      "estado": "presente"
  },
  {
      "id": 2,
      "usuario_id": 3,
      "fecha": "2024-03-16T11:00:00.000Z",
      "estado": "ausente"
  }
]