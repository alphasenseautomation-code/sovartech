import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Info, Cpu, Shield, Globe, Mail } from 'lucide-react';

const items = [
  { name: 'HOME', to: '/', icon: Home },
  { name: 'ABOUT', to: '/about', icon: Info },
  { name: 'TECH', to: '/technology', icon: Cpu },
  { name: 'PRODUCTS', to: '/products', icon: Shield },
  { name: 'APPL...', label: 'Applications', to: '/applications', icon: Globe },
  { name: 'CONTACT', to: '/contact', icon: Mail },
];

// Floating bottom navigation for screens below the desktop navbar breakpoint (xl).
// Hidden on desktop, where the existing header navigation is shown.
export default function MobileBottomNav() {
  const { pathname } = useLocation();
  const isActive = (to) => (to === '/' ? pathname === '/' : pathname.startsWith(to));

  return (
    <nav
      aria-label="Primary mobile navigation"
      className="xl:hidden fixed inset-x-3 sm:inset-x-6 md:left-1/2 md:right-auto md:w-[640px] md:-translate-x-1/2 z-40 bg-[#071B3A]/95 backdrop-blur-md border border-[#0878D1]/35 rounded-md shadow-[0_8px_30px_rgba(0,0,0,0.45),0_0_18px_rgba(8,120,209,0.18)]"
      style={{ bottom: 'calc(0.75rem + env(safe-area-inset-bottom, 0px))' }}
    >
      {/* Thin technical accent line along the top edge */}
      <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#168BE8]/60 to-transparent" aria-hidden="true" />

      <ul className="grid grid-cols-6 px-1 py-1">
        {items.map(({ name, label, to, icon: Icon }) => {
          const active = isActive(to);
          return (
            <li key={to} className="min-w-0">
              <Link
                to={to}
                aria-current={active ? 'page' : undefined}
                aria-label={label}
                className={`relative flex flex-col items-center justify-center gap-1 min-h-[52px] w-full min-w-0 px-0.5 rounded-sm transition-colors duration-200 ${
                  active ? 'text-[#168BE8] bg-[#0878D1]/12' : 'text-slate-300 hover:text-white'
                }`}
              >
                {active && (
                  <span className="absolute top-0 left-1/2 -translate-x-1/2 w-6 h-0.5 rounded-full bg-[#168BE8] shadow-[0_0_8px_#168BE8]" aria-hidden="true" />
                )}
                <Icon className="w-[18px] h-[18px]" strokeWidth={1.75} aria-hidden="true" />
                <span className="text-[8.5px] min-[360px]:text-[9px] sm:text-[10px] font-bold tracking-normal min-[360px]:tracking-wide leading-none whitespace-nowrap">
                  {name}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
