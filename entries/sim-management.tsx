import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainLayout } from '../layouts/MainLayout';
import { SimManagementPage } from '../components/SimManagementPage';
import '../index.css';

const handleConnect = () => {
    window.location.href = 'contact.html';
};

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <MainLayout>
            <SimManagementPage onConnect={handleConnect} />
        </MainLayout>
    </React.StrictMode>,
);
