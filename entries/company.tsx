import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainLayout } from '../layouts/MainLayout';
import { CompanyPage } from '../components/CompanyPage';
import '../index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <MainLayout>
            <CompanyPage />
        </MainLayout>
    </React.StrictMode>,
);
