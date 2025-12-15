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

          {/* Mobile Menu Button */ }
  <div className="md:hidden">
    <button
      onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      className="text-brand-text-secondary hover:text-brand-text-primary p-2"
    >
      {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
    </button>
  </div>
        </div >
      </div >

  {/* Mobile Menu */ }
{
  mobileMenuOpen && (
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
  )
}
    </header >
  );
};