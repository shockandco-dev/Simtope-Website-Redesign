import React from 'react';
import {
    Globe2, Zap
} from 'lucide-react';

interface SimManagementPageProps {
    onConnect?: () => void;
}

export const SimManagementPage: React.FC<SimManagementPageProps> = ({ onConnect }) => {
    return (
        <div className="pt-20 bg-brand-dark min-h-screen animate-fade-in text-brand-text-primary">
            <section className="relative py-24 lg:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-surface to-brand-dark" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <span className="text-brand-accent font-semibold tracking-wider uppercase text-sm mb-4 block">Simtope IoT Control Center</span>
                        <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                            IoT made smarter, <br />
                            simpler, and ready to <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">drive growth</span>
                        </h1>
                        <p className="text-xl text-brand-text-secondary mb-8 leading-relaxed max-w-2xl">
                            Manage your connectivity and the entire lifecycle of your IoT devices from one connectivity management platform.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button onClick={onConnect} className="inline-flex items-center justify-center rounded-md font-medium transition-colors bg-brand-primary text-white hover:bg-blue-600 shadow-lg h-14 px-8 text-lg">Request Platform Demo</button>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-brand-surface border-y border-brand-border">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Boost IoT: Scale faster, operate smarter, protect better</h2>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="p-6 rounded-xl bg-brand-dark border border-brand-border">
                            <Globe2 className="w-10 h-10 text-brand-primary mb-4" />
                            <h3 className="text-lg font-bold text-white mb-3">Unmatched global scale</h3>
                            <ul className="text-sm text-brand-text-secondary space-y-2">
                                <li>• 190+ countries covered</li>
                            </ul>
                        </div>
                        <div className="p-6 rounded-xl bg-brand-dark border border-brand-border">
                            <Zap className="w-10 h-10 text-brand-primary mb-4" />
                            <h3 className="text-lg font-bold text-white mb-3">Grow faster</h3>
                            <p className="text-sm text-brand-text-secondary">Use zero-touch provisioning to activate thousands of SIMs instantly.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
