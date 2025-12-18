import React from 'react';
import { Signal } from 'lucide-react';

export const Footer: React.FC = () => {
  const handlePlaceholderClick = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  return (
    <footer className="bg-brand-dark border-t border-brand-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          <div className="col-span-1 md:col-span-1">
            <a href="/index.html" className="flex items-center gap-2 mb-4 cursor-pointer">
              <div className="w-8 h-8 bg-brand-primary rounded flex items-center justify-center text-white">
                <Signal className="w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-brand-text-primary">Simtope</span>
            </a>
            <p className="text-brand-text-secondary text-sm leading-relaxed">
              Global Tier-1 connectivity aggregator for the IoT generation. Enabling devices to talk in 190+ countries.
            </p>
          </div>

          <div>
            <h4 className="text-brand-text-primary font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-sm text-brand-text-secondary">
              <li>
                <a href="/iot-esim.html" className="hover:text-brand-primary transition-colors text-left">
                  eSIM for Enterprise
                </a>
              </li>
              <li>
                <a href="/iot-esim.html#form-factors" className="hover:text-brand-primary transition-colors text-left">
                  Industrial SIMs
                </a>
              </li>
              <li>
                <a href="/satellite.html" className="hover:text-brand-primary transition-colors text-left">
                  Satellite IoT
                </a>
              </li>
              <li>
                <a href="/deployment-services.html" className="hover:text-brand-primary transition-colors text-left">
                  Private LTE/5G
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-text-primary font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-brand-text-secondary">
              <li>
                <a href="/company.html" className="hover:text-brand-primary transition-colors text-left">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-brand-text-primary font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-brand-text-secondary">
              <li>
                <a href="mailto:sales@simtope.com" className="hover:text-brand-primary transition-colors">
                  sales@simtope.com
                </a>
              </li>
              <li>
                <a href="tel:+18002688628" className="hover:text-brand-primary transition-colors">
                  (800) 268-8628
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-brand-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-brand-text-secondary">
          <p>© {new Date().getFullYear()} Simtope Inc. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" onClick={handlePlaceholderClick} className="hover:text-brand-text-primary transition-colors">Privacy Policy</a>
            <a href="#" onClick={handlePlaceholderClick} className="hover:text-brand-text-primary transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
