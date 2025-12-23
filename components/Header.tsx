import React, { useState, useEffect } from 'react';
import { Menu, X, Satellite, Smartphone, ChevronDown, ChevronRight } from 'lucide-react';
import { NAV_ITEMS } from '../constants'; // Check if this needs update or if we map labels to URLs
import { Button } from './Button';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Map labels to URLs
  const getHref = (label: string) => {
    switch (label) {
      case 'Satellite IoT': return 'satellite.html';
      case 'IoT SIM & eSIM': return 'iot-esim.html';
      case 'LPWA': return 'lpwa.html';
      case 'SIM Management': return 'sim-management.html';
      case 'Deployment Services': return 'deployment-services.html';
      case 'Company': return 'company.html';
      case 'Home': return 'index.html';
      default: return 'index.html';
    }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-brand-dark/90 backdrop-blur-xl shadow-2xl border-b border-brand-border h-16' : 'bg-transparent h-24'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          {/* Brand */}
          <a href="index.html" className="flex items-center gap-3 cursor-pointer group">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-brand-primary rounded-xl rotate-3 group-hover:rotate-12 transition-transform"></div>
              <Smartphone className="relative z-10 w-5 h-5 text-white" />
              <div className="absolute -top-1 -right-1 animate-[spin_4s_linear_infinite]">
                <Satellite className="w-3 h-3 text-brand-accent" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-black tracking-tight uppercase leading-none">Simtope</span>
              <span className="text-[9px] text-brand-primary uppercase font-bold tracking-[0.3em]">Connectivity</span>
            </div>
          </a>

          {/* Nav */}
          <nav className="hidden lg:flex items-center space-x-1">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="relative group px-4">
                {item.children ? (
                  <button
                    className="flex items-center gap-1.5 py-2 text-xs font-bold uppercase tracking-widest text-brand-text-secondary hover:text-brand-primary transition-colors"
                  >
                    {item.label}
                    <ChevronDown className="w-3 h-3 group-hover:rotate-180 transition-transform" />
                  </button>
                ) : (
                  <a
                    href={getHref(item.label)}
                    className="flex items-center gap-1.5 py-2 text-xs font-bold uppercase tracking-widest text-brand-text-secondary hover:text-brand-primary transition-colors"
                  >
                    {item.label}
                  </a>
                )}

                {item.children && (
                  <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    <div className="w-64 bg-brand-surface border border-brand-border rounded-xl shadow-2xl p-2 backdrop-blur-xl">
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={getHref(child.label)}
                          className="w-full flex items-center justify-between px-4 py-3 text-sm text-brand-text-secondary hover:text-brand-primary hover:bg-brand-primary/5 rounded-lg transition-all"
                        >
                          {child.label}
                          <ChevronRight className="w-3 h-3 opacity-50" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
            <div className="pl-6 ml-6 border-l border-brand-border">
              <a href="contact.html">
                <Button size="sm">Get Connected</Button>
              </a>
            </div>
          </nav>

          {/* Mobile Toggle */}
          <button className="lg:hidden p-2 text-brand-text-primary" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[64px] bg-brand-dark/95 backdrop-blur-2xl z-40 animate-fade-in">
          <div className="p-6 space-y-4">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <button
                    onClick={() => setExpandedItem(expandedItem === item.label ? null : item.label)}
                    className="w-full flex items-center justify-between py-4 text-lg font-bold border-b border-brand-border"
                  >
                    {item.label}
                    <ChevronDown className={expandedItem === item.label ? 'rotate-180' : ''} />
                  </button>
                ) : (
                  <a
                    href={getHref(item.label)}
                    className="w-full flex items-center justify-between py-4 text-lg font-bold border-b border-brand-border"
                  >
                    {item.label}
                  </a>
                )}

                {item.children && expandedItem === item.label && (
                  <div className="bg-brand-surface/50 mt-2 rounded-xl p-2 animate-slide-up">
                    {item.children.map((child) => (
                      <a
                        key={child.label}
                        href={getHref(child.label)}
                        className="block w-full text-left px-4 py-3 text-brand-text-secondary"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-8">
              <a href="contact.html" className="block w-full">
                <Button className="w-full" size="lg">Get Connected</Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
