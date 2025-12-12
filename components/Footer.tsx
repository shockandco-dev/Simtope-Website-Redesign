import React from 'react';
import { Signal, Linkedin, Twitter, Github } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark border-t border-brand-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-brand-primary rounded flex items-center justify-center text-white">
                <Signal className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-brand-text-primary">Simtope</span>
            </div>
            <p className="text-brand-text-secondary text-sm leading-relaxed">
              Global Tier-1 connectivity aggregator for the IoT generation. Enabling devices to talk in 190+ countries.
            </p>
          </div>

          <div>
            <h4 className="text-brand-text-primary font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm text-brand-text-secondary">
              <li><a href="#" className="hover:text-brand-primary transition-colors">eSIM for Enterprise</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Industrial SIMs</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Satellite IoT</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Private LTE/5G</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-text-primary font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-brand-text-secondary">
              <li><a href="#" className="hover:text-brand-primary transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Partners</a></li>
              <li><a href="#" className="hover:text-brand-primary transition-colors">Legal & Compliance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-text-primary font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-brand-text-secondary">
              <li>sales@simtope.com</li>
              <li>+1 (888) 555-0123</li>
              <li className="pt-2 flex gap-4">
                <a href="#" className="text-brand-text-secondary hover:text-brand-text-primary transition-colors"><Linkedin className="w-5 h-5" /></a>
                <a href="#" className="text-brand-text-secondary hover:text-brand-text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="text-brand-text-secondary hover:text-brand-text-primary transition-colors"><Github className="w-5 h-5" /></a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-brand-text-secondary">
          <p>© {new Date().getFullYear()} Simtope Inc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-brand-text-primary">Privacy Policy</a>
            <a href="#" className="hover:text-brand-text-primary">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};