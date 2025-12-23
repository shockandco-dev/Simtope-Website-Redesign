import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainLayout } from '../layouts/MainLayout';
import { IoTAndESimPage } from '../components/IoTAndESimPage';
import '../index.css';

const handleConnect = () => {
    window.location.href = '/contact.html';
};

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <MainLayout>
            <IoTAndESimPage onConnect={handleConnect} />
        </MainLayout>
    </React.StrictMode>,
);
