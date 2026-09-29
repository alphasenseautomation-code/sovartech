import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight, Shield, Phone, Mail } from 'lucide-react';
import logoImg from '../assets/sovartech-logo.webp';
import { companyDetails } from '../data/sovarData';

const navLinks = [
  { name: 'HOME', href: '/' },
  { name: 'ABOUT US', href: '/about' },
  { name: 'TECHNOLOGY', href: '/technology' },
  { name: 'PRODUCTS', href: '/products' },
  { name: 'APPLICATIONS', href: '/applications' },
  { name: 'R&D', href: '/rd' },
  { name: 'SERVICES', href: '/services' },
  { name: 'CONTACT', href: '/contact' },
];

export default function Navbar({ onOpenContact }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const isActiveLink = (href) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#071B3A]/95 backdrop-blur-md shadow-lg border-b border-[#0878D1]/20 py-3'
          : 'bg-gradient-to-b from-[#071B3A]/90 via-[#071B3A]/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center group">
          <img
            src={logoImg}
            alt="SOVAR TECH - Advanced Air & Maritime Protection"
            className="h-8 md:h-12 xl:h-10 2xl:h-12 w-auto shrink-0 object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center space-x-1 lg:space-x-6">
          {navLinks.map((link) => {
            const isActive = isActiveLink(link.href);
            return (
              <Link
                key={link.name}
                to={link.href}
                aria-current={isActive ? 'page' : undefined}
                className={`text-xs lg:text-sm font-semibold tracking-wider whitespace-nowrap transition-colors duration-200 relative py-1 px-1 ${
                  isActive ? 'text-[#168BE8]' : 'text-slate-200 hover:text-[#168BE8]'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#168BE8] rounded-full shadow-[0_0_8px_#168BE8]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Desktop Right CTA */}
        <div className="hidden xl:flex items-center space-x-4">
          <button
            onClick={onOpenContact}
            className="inline-flex items-center space-x-2 whitespace-nowrap bg-[#0878D1] hover:bg-[#168BE8] text-white text-xs md:text-sm font-bold tracking-wider px-5 py-2.5 rounded-sm transition-all duration-300 shadow-[0_0_15px_rgba(8,120,209,0.4)] hover:shadow-[0_0_25px_rgba(22,139,232,0.7)] transform hover:-translate-y-0.5"
          >
            <span>GET IN TOUCH</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex xl:hidden items-center space-x-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-slate-200 hover:text-white p-2 focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7 text-[#168BE8]" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="xl:hidden fixed inset-x-0 top-[60px] bg-[#071B3A]/98 border-b border-[#0878D1]/30 backdrop-blur-xl shadow-2xl transition-all duration-300">
          <div className="px-6 py-6 space-y-4 max-h-[calc(100vh-80px)] overflow-y-auto">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  aria-current={isActiveLink(link.href) ? 'page' : undefined}
                  className={`text-sm font-bold hover:text-[#168BE8] py-2 border-b border-slate-800/80 flex items-center justify-between ${
                    isActiveLink(link.href) ? 'text-[#168BE8]' : 'text-slate-200'
                  }`}
                >
                  <span>{link.name}</span>
                  <span className="text-xs text-[#0878D1]">→</span>
                </Link>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full bg-[#0878D1] hover:bg-[#168BE8] text-white font-bold py-3 px-4 rounded-sm flex items-center justify-center space-x-2 text-sm shadow-lg"
              >
                <span>GET IN TOUCH</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="mt-4 text-xs text-slate-400 space-y-1">
                <p className="flex items-center space-x-2">
                  <Mail className="w-3.5 h-3.5 text-[#0878D1]" />
                  <span>{companyDetails.primaryEmail}</span>
                </p>
                <p className="flex items-center space-x-2">
                  <Phone className="w-3.5 h-3.5 text-[#0878D1]" />
                  <span>{companyDetails.phone}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
