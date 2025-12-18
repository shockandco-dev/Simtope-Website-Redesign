import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainLayout } from '../layouts/MainLayout';
import { SatellitePage } from '../components/SatellitePage';
import '../index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <MainLayout>
            <SatellitePage />
        </MainLayout>
    </React.StrictMode>,
);
