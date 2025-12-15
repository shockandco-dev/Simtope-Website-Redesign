
import React, { useState } from 'react';
import { MapPin, Phone } from 'lucide-react';

export const ContactPage: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            (e.target as HTMLFormElement).reset();
        }, 5000);
    };

    return (
        <div className="pt-20 bg-brand-dark min-h-screen animate-fade-in text-brand-text-primary">
            <section className="py-20 bg-brand-surface border-b border-brand-border relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contact Simtope</h1>
                </div>
            </section>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                        {/* US Office */}
                        <div className="bg-brand-surface p-8 rounded-2xl border border-brand-border shadow-lg">
                            <div className="flex items-start gap-6">
                                <div className="w-14 h-14 bg-brand-dark rounded-xl flex items-center justify-center text-blue-500 border border-brand-border">
                                    <MapPin className="w-7 h-7" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-2">US Office</h2>
                                    <address className="not-italic text-brand-text-secondary space-y-1 mb-6 text-lg">
                                        <p>1429 Meadows Court</p>
                                        <p>Greentown, IN, USA</p>
                                    </address>
                                    <a href="tel:+18003810826" className="flex items-center gap-3 text-brand-text-primary hover:text-brand-accent transition-colors font-medium text-lg">
                                        <Phone className="w-5 h-5" />
                                        <span>(800) 381-0826</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Canadian Office */}
                        <div className="bg-brand-surface p-8 rounded-2xl border border-brand-border shadow-lg">
                            <div className="flex items-start gap-6">
                                <div className="w-14 h-14 bg-brand-dark rounded-xl flex items-center justify-center text-red-500 border border-brand-border">
                                    <MapPin className="w-7 h-7" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold text-white mb-2">Canadian Office</h2>
                                    <address className="not-italic text-brand-text-secondary space-y-1 mb-6 text-lg">
                                        <p>129 John Cavanaugh</p>
                                        <p>Carp, ON, CA</p>
                                    </address>
                                    <a href="tel:+18002688628" className="flex items-center gap-3 text-brand-text-primary hover:text-brand-accent transition-colors font-medium text-lg">
                                        <Phone className="w-5 h-5" />
                                        <span>(800) 268-8628</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="contact-form" className="py-24 bg-brand-dark border-t border-brand-border relative">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-brand-surface border border-brand-border rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                        {/* Form Content */}
                        <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                            {/* ... inputs ... */}
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-brand-text-secondary mb-2">Name</label>
                                    <input type="text" id="name" name="name" className="w-full bg-brand-dark border border-brand-border rounded-lg px-4 py-3 text-white focus:border-brand-primary outline-none" placeholder="John Doe" required />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-brand-text-secondary mb-2">Email</label>
                                    <input type="email" id="email" name="email" className="w-full bg-brand-dark border border-brand-border rounded-lg px-4 py-3 text-white focus:border-brand-primary outline-none" placeholder="john@company.com" required />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-brand-text-secondary mb-2">Message</label>
                                <textarea id="message" name="message" rows={4} className="w-full bg-brand-dark border border-brand-border rounded-lg px-4 py-3 text-white focus:border-brand-primary outline-none" placeholder="How can we help?" required></textarea>
                            </div>

                            <div className="flex justify-end">
                                <button type="submit" className="inline-flex items-center justify-center rounded-md font-medium transition-colors bg-brand-primary text-white hover:bg-blue-600 shadow-lg h-14 px-8 text-lg w-full md:w-auto">
                                    Request Consultation
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};
