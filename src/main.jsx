import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import { Year2024 } from './apps/2024/index.jsx';
import { Year2025 } from './apps/2025/index.jsx';
import { Year2026 } from './apps/2026/index.jsx';

// Importar vistas de 2025
import { Inicio as Inicio2025 } from './apps/2025/views/Inicio.jsx';
import { Info as Info2025 } from './apps/2025/views/Info.jsx';
import { Archivos as Archivos2025 } from './apps/2025/views/Archivos.jsx';
import { Liturgia as Liturgia2025 } from './apps/2025/views/Liturgia.jsx';
import { Conferencias as Conferencias2025 } from './apps/2025/views/Conferencias.jsx';
import { Galeria as Galeria2025 } from './apps/2025/views/Galeria.jsx';
import { Extra as Extra2025 } from './apps/2025/views/Extra.jsx';
import { Redes as Redes2025 } from './apps/2025/views/Redes.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Navigate to="/2026" replace />} />
          <Route path="2024" element={<Year2024 />} />
          <Route path="2025" element={<Year2025 />}>
            <Route index element={<Inicio2025 />} />
            <Route path="info" element={<Info2025 />} />
            <Route path="archivos" element={<Archivos2025 />} />
            <Route path="liturgia" element={<Liturgia2025 />} />
            <Route path="conferencias" element={<Conferencias2025 />} />
            <Route path="galeria" element={<Galeria2025 />} />
            <Route path="extra" element={<Extra2025 />} />
            <Route path="redes" element={<Redes2025 />} />
          </Route>
          <Route path="2026" element={<Year2026 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
