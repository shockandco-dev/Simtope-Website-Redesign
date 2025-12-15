import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'Satellite', path: '/satellite' },
    { title: 'IoT SIM', path: '/iot-sim' },
    { title: 'LPWA', path: '/lpwa' },
    { title: 'Sim Management', path: '/sim-management' },
    { title: 'Company', path: '/company' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-brand-dark/95 backdrop-blur-md border-b border-brand-border shadow-lg' : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group z-50 relative">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-accent rounded-lg flex items-center justify-center shadow-lg shadow-brand-primary/20 group-hover:scale-110 transition-transform duration-300">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span className="text-white font-bold text-xl tracking-wide group-hover:text-brand-primary transition-colors">
              SIMTOPE
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.title}
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-brand-primary ${location.pathname === link.path ? 'text-brand-primary' : 'text-brand-text-secondary'
                  }`}
              >
                {link.title}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-semibold bg-brand-primary text-white hover:bg-blue-600 transition-all shadow-lg shadow-brand-primary/25 hover:shadow-brand-primary/40 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-primary focus:ring-offset-brand-dark"
            >
              Get Connected
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-brand-text-secondary hover:text-white transition-colors z-50 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-brand-dark z-40 transition-transform duration-300 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 p-4">
          {navLinks.map((link) => (
            <Link
              key={link.title}
              to={link.path}
              className={`text-2xl font-bold transition-colors hover:text-brand-primary ${location.pathname === link.path ? 'text-brand-primary' : 'text-brand-text-primary'
                }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.title}
            </Link>
          ))}
          <Link
            to="/contact"
            className="mt-8 px-8 py-4 rounded-full text-lg font-bold bg-brand-primary text-white hover:bg-blue-600 transition-all shadow-lg shadow-brand-primary/30 w-full max-w-xs text-center"
            onClick={() => setIsMenuOpen(false)}
          >
            Get Connected
          </Link>
        </div>
      </div>
    </header>
  );
};