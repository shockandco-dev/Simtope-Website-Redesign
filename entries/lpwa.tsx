import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainLayout } from '../layouts/MainLayout';
import { LPWAPage } from '../components/LPWAPage';
import '../index.css';

const handleConnect = () => {
    window.location.href = '/contact.html';
};

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <MainLayout>
            <LPWAPage onConnect={handleConnect} />
        </MainLayout>
    </React.StrictMode>,
);
