import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts/MainLayout';

// Lazy load pages
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const SatellitePage = lazy(() => import('./pages/Satellite').then(module => ({ default: module.SatellitePage })));
const IoTAndESimPage = lazy(() => import('./pages/IoTAndESim').then(module => ({ default: module.IoTAndESimPage })));
const LPWAPage = lazy(() => import('./pages/LPWA').then(module => ({ default: module.LPWAPage })));
const CompanyPage = lazy(() => import('./pages/CompanyPage').then(module => ({ default: module.CompanyPage })));
const SimManagementPage = lazy(() => import('./pages/SimManagementPage').then(module => ({ default: module.SimManagementPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(module => ({ default: module.ContactPage })));

const App: React.FC = () => {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Suspense fallback={<div className="min-h-screen bg-brand-dark flex items-center justify-center text-brand-primary">Loading...</div>}>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/satellite" element={<SatellitePage />} />
            <Route path="/iot-sim" element={<IoTAndESimPage />} />
            <Route path="/lpwa" element={<LPWAPage />} />
            <Route path="/company" element={<CompanyPage />} />
            <Route path="/sim-management" element={<SimManagementPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;