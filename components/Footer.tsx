import React from 'react';
import { Signal } from 'lucide-react';
import { Link } from 'react-router-dom';

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
              <li><Link to="/iot-sim" className="hover:text-brand-primary transition-colors">eSIM for Enterprise</Link></li>
              <li><Link to="/iot-sim" className="hover:text-brand-primary transition-colors">Industrial SIMs</Link></li>
              <li><Link to="/satellite" className="hover:text-brand-primary transition-colors">Satellite IoT</Link></li>
              <li><Link to="/lpwa" className="hover:text-brand-primary transition-colors">LPWAN</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-text-primary font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-brand-text-secondary">
              <li><Link to="/company" className="hover:text-brand-primary transition-colors">About Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-text-primary font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-brand-text-secondary">
              <li>sales@simtope.com</li>
              <li>+1 (800)-268-8628</li>
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