import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import UserList from './components/UserList';
import PlanList from './components/PlanList';
import AsistenciaList from './components/AsistenciaList';

const App = () => {
  return (
    <Router>
      <div>
        <h1>GymPro Frontend</h1>
        <Routes>
          <Route path="/" element={<Navigate to="/usuarios" />} /> {/* Redirige a usuarios */}
          <Route path="/usuarios" element={<UserList />} />
          <Route path="/planes" element={<PlanList />} />
          <Route path="/asistencias" element={<AsistenciaList />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
