import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, ArrowUp } from 'lucide-react';
import logoImg from '../assets/sovartech-logo.webp';
import { companyDetails } from '../data/sovarData';
import {
  fadeInUp,
  staggerContainer,
  viewportOnce
} from '../hooks/useScrollAnimation';

export default function Footer({ onOpenPolicy }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#071B3A] text-slate-300 border-t border-slate-800 relative z-10">
      {/* Top Footer Section */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
        >
          {/* Col 1: Brand Info (5 cols) */}
          <motion.div variants={fadeInUp} className="lg:col-span-5 space-y-4">
            <Link to="/" className="inline-block">
              <img
                src={logoImg}
                alt="SOVAR TECH - Advanced Air &amp; Maritime Protection"
                className="h-11 w-auto object-contain"
              />
            </Link>

            <p className="text-sm font-semibold text-slate-300">
              {companyDetails.tagline}
            </p>

            <p className="text-xs text-slate-400 font-normal leading-relaxed max-w-md">
              {companyDetails.description}
            </p>

            <div className="pt-2 flex items-center space-x-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xs bg-[#0B2347] border border-slate-700 hover:border-[#168BE8] hover:bg-[#0878D1] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.78a1.62 1.62 0 1 0 0 3.24 1.62 1.62 0 0 0 0-3.24z"/></svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xs bg-[#0B2347] border border-slate-700 hover:border-[#168BE8] hover:bg-[#0878D1] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xs bg-[#0B2347] border border-slate-700 hover:border-[#168BE8] hover:bg-[#0878D1] text-slate-300 hover:text-white flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </motion.div>

          {/* Col 2: Quick Links (3 cols) */}
          <motion.div variants={fadeInUp} className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-extrabold text-[#168BE8] uppercase tracking-widest border-l-2 border-[#0878D1] pl-2">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 text-xs font-semibold text-slate-300">
              <li><Link to="/" className="hover:text-[#168BE8] transition-colors">HOME</Link></li>
              <li><Link to="/about" className="hover:text-[#168BE8] transition-colors">ABOUT US</Link></li>
              <li><Link to="/technology" className="hover:text-[#168BE8] transition-colors">TECHNOLOGY</Link></li>
              <li><Link to="/products" className="hover:text-[#168BE8] transition-colors">PRODUCTS</Link></li>
              <li><Link to="/applications" className="hover:text-[#168BE8] transition-colors">APPLICATIONS</Link></li>
              <li><Link to="/rd" className="hover:text-[#168BE8] transition-colors">R&amp;D</Link></li>
              <li><Link to="/services" className="hover:text-[#168BE8] transition-colors">SERVICES</Link></li>
              <li><Link to="/contact" className="hover:text-[#168BE8] transition-colors">CONTACT</Link></li>
            </ul>
          </motion.div>

          {/* Col 3: Contact Info (4 cols) */}
          <motion.div variants={fadeInUp} className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-extrabold text-[#168BE8] uppercase tracking-widest border-l-2 border-[#0878D1] pl-2">
              CONTACT INFORMATION
            </h4>
            <div className="space-y-3 text-xs font-normal text-slate-300">
              <div className="flex items-start space-x-3">
                <Mail className="w-4 h-4 text-[#168BE8] shrink-0 mt-0.5" />
                <div>
                  {companyDetails.emails.map((email, i) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className={`block hover:text-[#168BE8] transition-colors ${i > 0 ? 'text-slate-400 mt-0.5' : ''}`}
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-[#168BE8] shrink-0" />
                <a href={companyDetails.phoneHref} className="hover:text-[#168BE8] transition-colors">
                  {companyDetails.phone}
                </a>
              </div>

              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-[#168BE8] shrink-0" />
                <span>{companyDetails.location}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800 bg-[#0B2347] py-6">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 space-y-4 sm:space-y-0">
          <div>
            © {companyDetails.copyrightYear} {companyDetails.name}. All rights reserved.
          </div>

          <div className="flex items-center space-x-6">
            <button onClick={onOpenPolicy} className="hover:text-[#168BE8] transition-colors">
              Privacy Policy
            </button>
            <button onClick={onOpenPolicy} className="hover:text-[#168BE8] transition-colors">
              Terms of Use
            </button>

            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-xs bg-[#071B3A] border border-slate-700 hover:border-[#168BE8] text-[#168BE8] flex items-center justify-center transition-colors"
              aria-label="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
