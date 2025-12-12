import React, { useState } from 'react';
import { Button } from './Button';

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Capture form data
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    
    // In a real application, you would send this data to your backend
    // Example: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });
    console.log('Form Submission Payload:', data);

    setSubmitted(true);
    // Simulate network delay
    setTimeout(() => {
      setSubmitted(false);
      // Optional: Reset form here if needed, or rely on page refresh/user action
      (e.target as HTMLFormElement).reset(); 
    }, 5000);
  };

  return (
    <section id="contact" className="py-24 bg-brand-dark">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-brand-surface border border-brand-border rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          
          {/* Decorative glow */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-brand-primary/10 rounded-full blur-3xl pointer-events-none"></div>

          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-brand-text-primary mb-4">Partner with Simtope</h2>
            <p className="text-brand-text-secondary">
              Speak to our solutions engineers about custom pricing, API integration, or pilot programs.
            </p>
          </div>

          {submitted ? (
            <div className="bg-green-500/10 border border-green-500/20 text-green-400 p-6 rounded-lg text-center animate-fade-in">
              <h3 className="text-xl font-bold mb-2">Request Received</h3>
              <p>One of our connectivity specialists will reach out within 2 hours.</p>
              <p className="text-sm mt-2 opacity-75">(Check your browser console to see the captured data)</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-brand-text-secondary mb-2">Full Name</label>
                  <input 
                    id="fullName"
                    name="fullName" 
                    type="text" 
                    required 
                    className="w-full bg-brand-dark border border-brand-border rounded-md px-4 py-3 text-brand-text-primary focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all" 
                    placeholder="John Doe" 
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-brand-text-secondary mb-2">Company Email</label>
                  <input 
                    id="email"
                    name="email" 
                    type="email" 
                    required 
                    className="w-full bg-brand-dark border border-brand-border rounded-md px-4 py-3 text-brand-text-primary focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all" 
                    placeholder="john@company.com" 
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-brand-text-secondary mb-2">Company Name</label>
                  <input 
                    id="companyName"
                    name="companyName" 
                    type="text" 
                    required 
                    className="w-full bg-brand-dark border border-brand-border rounded-md px-4 py-3 text-brand-text-primary focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all" 
                    placeholder="Tech Industries Ltd" 
                  />
                </div>
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-brand-text-secondary mb-2">Interest</label>
                  <select 
                    id="interest"
                    name="interest" 
                    className="w-full bg-brand-dark border border-brand-border rounded-md px-4 py-3 text-brand-text-primary focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all"
                  >
                    <option value="eSIM Deployment">eSIM Deployment</option>
                    <option value="Industrial MFF2">Industrial MFF2</option>
                    <option value="Satellite Connectivity">Satellite Connectivity</option>
                    <option value="Distributor Partnership">Distributor Partnership</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="projectDetails" className="block text-sm font-medium text-brand-text-secondary mb-2">Project Details</label>
                <textarea 
                  id="projectDetails"
                  name="projectDetails" 
                  rows={4} 
                  className="w-full bg-brand-dark border border-brand-border rounded-md px-4 py-3 text-brand-text-primary focus:ring-2 focus:ring-brand-primary focus:border-transparent outline-none transition-all" 
                  placeholder="Tell us about your estimated volume and geographic requirements..."
                ></textarea>
              </div>

              <div className="flex justify-end">
                <Button type="submit" size="lg" className="w-full md:w-auto">
                  Request Consultation
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};