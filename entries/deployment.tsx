import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainLayout } from '../layouts/MainLayout';
import { DeploymentServicesPage } from '../components/DeploymentServicesPage';
import '../index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <MainLayout>
            <DeploymentServicesPage />
        </MainLayout>
    </React.StrictMode>,
);
