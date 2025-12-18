import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainLayout } from '../layouts/MainLayout';
import { Home } from '../components/Home';
import '../index.css';

const handleNavigate = (page: string, elementId?: string) => {
    let url = '/index.html';
    switch (page) {
        case 'home': url = '/index.html'; break;
        case 'satellite': url = '/satellite.html'; break;
        case 'iot-sim': url = '/iot-esim.html'; break;
        case 'lpwa': url = '/lpwa.html'; break;
        case 'sim-management': url = '/sim-management.html'; break;
        case 'deployment-services': url = '/deployment-services.html'; break;
        case 'contact': url = '/contact.html'; break;
        case 'company': url = '/company.html'; break;
    }
    if (elementId) url += '#' + elementId;
    window.location.href = url;
};

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <MainLayout>
            <Home onNavigate={handleNavigate} />
        </MainLayout>
    </React.StrictMode>,
);
