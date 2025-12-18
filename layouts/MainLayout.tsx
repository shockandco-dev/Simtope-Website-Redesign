import React, { useState, useEffect } from 'react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { ChatWidget } from '../components/ChatWidget';
import { Sun, Moon } from 'lucide-react';

interface MainLayoutProps {
    children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
    const [theme, setTheme] = useState<'dark' | 'light'>('dark');

    useEffect(() => {
        // Check local storage or system preference on mount could be added here
        if (theme === 'light') {
            document.body.classList.add('theme-light');
        } else {
            document.body.classList.remove('theme-light');
        }
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    return (
        <div className="min-h-screen bg-brand-dark text-brand-text-primary transition-colors duration-500 overflow-x-hidden">
            <Header />

            <main className="relative pt-24">
                {children}
            </main>

            <Footer />

            <ChatWidget />

            {/* Persistence Controls */}
            <button
                onClick={toggleTheme}
                className="fixed bottom-6 left-6 z-50 p-4 bg-brand-surface/80 backdrop-blur-md border border-brand-border text-brand-text-primary rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-all"
                aria-label="Toggle Theme"
            >
                {theme === 'dark' ? <Sun className="w-6 h-6 text-amber-400" /> : <Moon className="w-6 h-6 text-brand-primary" />}
            </button>
        </div>
    );
};
