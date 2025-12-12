import React, { useState, useEffect } from 'react';
import { Menu, X, Satellite, Smartphone, ChevronDown, ChevronRight } from 'lucide-react';
import { NAV_ITEMS } from '../constants';
import { Button } from './Button';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileSubmenu = (label: string) => {
    setMobileExpanded(mobileExpanded === label ? null : label);
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  // Helper to resolve paths from constants if they aren't standard URLs
  // Assuming constants might be updated next, but for now we handle the mapping or expect /path
  const getPath = (href?: string) => {
    if (!href) return '/';
    // Map old hash/labels to routes if needed, or rely on updated constants
    return href;
  };

  return (
    <header
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-brand-dark/95 backdrop-blur-md shadow-lg border-b border-brand-border' : 'bg-transparent pt-4'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer group" onClick={handleLinkClick}>
            {/* Animated Logo Icon */}
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-primary to-brand-accent rounded-xl shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow"></div>
              <div className="relative z-10 text-white">
                <Smartphone className="w-5 h-5 absolute inset-0 m-auto text-amber-100" strokeWidth={2.5} />
                {/* Satellite orbiting the phone */}
                <div className="absolute inset-0 m-auto w-8 h-8 animate-[spin_10s_linear_infinite]">
                  <Satellite className="w-3 h-3 absolute -top-1 right-0 text-amber-400 drop-shadow-md" fill="currentColor" />
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-brand-text-primary leading-none">
                Simtope
              </span>
              <span className="text-[10px] text-brand-primary uppercase tracking-widest font-semibold">
                Connectivity
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-8">
            {NAV_ITEMS.map((item) => (
              <div key={item.label} className="relative group">
                {item.children ? (
                  <div className="flex items-center gap-1 text-brand-text-secondary hover:text-brand-text-primary font-medium transition-colors text-sm uppercase tracking-wider py-2 cursor-pointer">
                    {item.label}
                    <ChevronDown className="w-4 h-4 text-brand-text-secondary group-hover:text-brand-primary transition-colors" />
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-primary transition-all group-hover:w-full"></span>
                  </div>
                ) : (
                  <Link
                    to={getPath(item.href)}
                    className="flex items-center gap-1 text-brand-text-secondary hover:text-brand-text-primary font-medium transition-colors text-sm uppercase tracking-wider py-2"
                  >
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-primary transition-all group-hover:w-full"></span>
                  </Link>
                )}

                {/* Dropdown Menu */}
                {item.children && (
                  <div className="absolute left-0 pt-4 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                    <div className="bg-brand-surface border border-brand-border rounded-lg shadow-2xl p-2 overflow-hidden backdrop-blur-xl">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          to={getPath(child.href)}
                          className="block px-4 py-3 text-sm text-brand-text-secondary hover:text-brand-text-primary hover:bg-brand-dark/10 rounded-md transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            {child.label}
                            <ChevronRight className="w-3 h-3 text-brand-text-secondary" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <div className="flex items-center gap-4 pl-4 border-l border-brand-border">
              <Button variant="outline" size="sm">
                Client Portal
              </Button>
              <Button size="sm">
                Get Connected
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-brand-text-secondary hover:text-brand-text-primary p-2"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-surface border-b border-brand-border absolute w-full shadow-2xl max-h-[80vh] overflow-y-auto">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {NAV_ITEMS.map((item) => (
              <div key={item.label}>
                {item.children ? (
                  <div className="space-y-1">
                    <button
                      onClick={() => toggleMobileSubmenu(item.label)}
                      className="w-full flex items-center justify-between px-3 py-3 text-base font-medium text-brand-text-secondary hover:text-brand-text-primary hover:bg-brand-dark/10 rounded-md transition-colors"
                    >
                      {item.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileExpanded === item.label ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileExpanded === item.label && (
                      <div className="pl-6 space-y-1 border-l-2 border-brand-border ml-3">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            to={getPath(child.href)}
                            onClick={handleLinkClick}
                            className="block px-3 py-2 text-sm text-brand-text-secondary hover:text-brand-text-primary transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    to={getPath(item.href)}
                    onClick={handleLinkClick}
                    className="block px-3 py-3 text-base font-medium text-brand-text-secondary hover:text-brand-text-primary hover:bg-brand-dark/10 rounded-md transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 flex flex-col gap-3 border-t border-brand-border mt-4">
              <Button variant="outline" className="w-full justify-center">Client Portal</Button>
              <Button className="w-full justify-center">Get Connected</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};