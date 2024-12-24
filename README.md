# frontend-gym-app

Este proyecto es la interfaz de usuario para la aplicación de gimnasio.

## Descripción del Proyecto
`frontend-gym-app` es una aplicación web de frontend que permite a los usuarios interactuar con el sistema de gestión de gimnasio. Los usuarios pueden registrarse, gestionar entrenamientos, ver su progreso y más, todo a través de una interfaz de usuario intuitiva.

Este proyecto se conecta con el backend de base de datos proporcionado en [db-gym-testing](https://github.com/Marttify/db-gym-testing).

## Conexión con el Backend
Este repositorio interactúa con el [db-gym-testing](https://github.com/Marttify/db-gym-testing), que maneja las pruebas y la gestión de la base de datos. Juntos, ambos proyectos forman una solución de software integral para la gestión de gimnasio.

---

## Tabla de Contenidos

- [Requisitos previos](#requisitos-previos)
- [Instalación](#instalación)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Contribuciones](#contribuciones)

## Requisitos previos

Antes de comenzar, asegúrate de tener los siguientes programas instalados en tu máquina:

- **Node.js** (v14 o superior): https://nodejs.org/
- **npm** (v6 o superior), que normalmente se instala junto con Node.js: https://www.npmjs.com/

## Instalación

Sigue estos pasos para clonar y configurar el proyecto en tu máquina local:

1. Clona el repositorio:
    ```bash
    git clone https://github.com/Marttify/frontend-gym-app.git
    cd frontend-gym-app
    ```

2. Instala las dependencias:
    ```bash
    npm install
    ```

3. Si todo se ha instalado correctamente, puedes iniciar el servidor de desarrollo:
    ```bash
    npm start
    ```

    Esto abrirá la aplicación en tu navegador en `http://localhost:3000`.

## Uso

Una vez que el servidor esté en funcionamiento, abre tu navegador y navega hasta `http://localhost:3000` para ver la aplicación en acción.

### Funcionalidades

- **Listado de asistencias**: Muestra el historial de asistencias de los usuarios, con información sobre el usuario, la fecha y el estado de la asistencia (presente o ausente).
- **Listado de planes**: Permite consultar los planes de suscripción disponibles, con su duración y precio.
- **Manejo de errores**: Si hay un error al obtener los datos desde la API, la aplicación utiliza datos simulados (mocks).

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:




### Descripción de carpetas y archivos clave:

- `src/components/`: Contiene los componentes principales de la UI, como la lista de asistencias y planes.
- `src/services/api.js`: Archivo donde se configura Axios para interactuar con la API del backend.
- `src/services/json.js`: Contiene datos simulados (mock) que se usan si ocurre un error al obtener datos de la API.
- `src/App.js`: Componente principal que organiza los diferentes componentes y maneja la lógica de la aplicación.

## Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para construir la interfaz de usuario.
- **Axios**: Cliente HTTP para realizar solicitudes a la API.
- **React Hooks**: Para manejar el estado y efectos en los componentes.
- **CSS**: Estilos básicos para la interfaz de usuario.
  
## Contribuciones

Las contribuciones son bienvenidas. Si tienes sugerencias o mejoras para el proyecto, por favor abre un *issue* o realiza un *pull request*. Para contribuir:

1. Haz un fork del repositorio.
2. Crea una nueva rama: `git checkout -b nueva-caracteristica`.
3. Realiza tus cambios y haz commit: `git commit -m 'Agregar nueva característica'`.
4. Sube tus cambios a tu repositorio: `git push origin nueva-caracteristica`.
5. Abre un pull request en este repositorio.

---

Gracias por tu interés en este proyecto. Si tienes alguna pregunta, no dudes en abrir un *issue*.
