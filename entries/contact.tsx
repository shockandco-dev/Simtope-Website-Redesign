import React from 'react';
import ReactDOM from 'react-dom/client';
import { MainLayout } from '../layouts/MainLayout';
import { ContactPage } from '../components/ContactPage';
import '../index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <MainLayout>
            <ContactPage />
        </MainLayout>
    </React.StrictMode>,
);
