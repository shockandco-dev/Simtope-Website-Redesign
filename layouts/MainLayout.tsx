import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ChatWidget } from '../components/ChatWidget';
import { Sun, Moon } from 'lucide-react';

export const MainLayout: React.FC = () => {
    const [theme, setTheme] = useState<'dark' | 'light'>('dark');

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    return (
        <div className={`${theme === 'light' ? 'theme-light' : ''} transition-colors duration-300`}>
            <div className="min-h-screen bg-brand-dark selection:bg-brand-primary selection:text-white">
                <Header />

                <main>
                    <Outlet context={{ theme }} />
                </main>

                <Footer />
                <ChatWidget />

                {/* Theme Toggle Button */}
                <button
                    onClick={toggleTheme}
                    className="fixed bottom-6 left-6 z-50 p-4 bg-brand-surface border border-brand-border text-brand-text-primary rounded-full shadow-xl hover:shadow-2xl transition-all hover:scale-105"
                    aria-label="Toggle Theme"
                >
                    {theme === 'dark' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
                </button>
            </div>
        </div>
    );
};
