import React, { Suspense, lazy, useState } from 'react';
import { BrowserRouter, Routes, Route, Outlet, useNavigate } from 'react-router-dom';
import { MotionConfig } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollManager from './components/ScrollManager';
import MobileBottomNav from './components/MobileBottomNav';
import HomePage from './pages/HomePage';
import './pages/pages.css';

// Dedicated pages load on demand so the homepage bundle stays as it was.
const AboutPage = lazy(() => import('./pages/AboutPage'));
const TechnologyPage = lazy(() => import('./pages/TechnologyPage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const ApplicationsPage = lazy(() => import('./pages/ApplicationsPage'));
const ResearchPage = lazy(() => import('./pages/ResearchPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Shared shell: the original navbar, footer and privacy notice around every page.
function SiteLayout() {
  const navigate = useNavigate();
  const [policyModalOpen, setPolicyModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#071B3A] text-slate-100 font-sans selection:bg-[#0878D1] selection:text-white">
      {/* Navigation Bar */}
      {/* GET IN TOUCH buttons open the enquiry form; the CONTACT link stays /contact */}
      <Navbar onOpenContact={() => navigate('/contact#enquiry-form')} />

      {/* Page content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <Footer onOpenPolicy={() => setPolicyModalOpen(true)} />

      {/* Mobile/tablet floating bottom navigation (hidden on desktop). The spacer,
          in the footer bar colour, keeps the end of the footer clear of it. */}
      <div
        className="xl:hidden bg-[#0B2347]"
        style={{ height: 'calc(5.5rem + env(safe-area-inset-bottom, 0px))' }}
        aria-hidden="true"
      />
      <MobileBottomNav />

      {/* Privacy Policy Modal */}
      {policyModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#071B3A]/85 backdrop-blur-md">
          <div className="bg-white text-slate-800 p-8 rounded-xs max-w-xl shadow-2xl relative border border-slate-300">
            <h3 className="text-xl font-extrabold text-[#071B3A] uppercase mb-4">
              SOVAR TECH PRIVATE LIMITED — PRIVACY POLICY & TERMS
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed mb-4">
              SOVAR TECH is committed to protecting all organizational data and client telemetry. All technical inquiries submitted through this portal are treated as confidential defense-grade communications under standard NDA protocols.
            </p>
            <div className="text-right">
              <button
                onClick={() => setPolicyModalOpen(false)}
                className="bg-[#071B3A] text-white text-xs font-bold px-5 py-2.5 rounded-xs"
              >
                CLOSE
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Wrapper for the dedicated pages only (the homepage is not affected):
// scoped styles via .inner-page, reduced-motion support, lazy-load fallback.
function InnerPages() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="inner-page">
        <Suspense fallback={<div className="min-h-screen bg-[#071B3A]" aria-busy="true" />}>
          <Outlet />
        </Suspense>
      </div>
    </MotionConfig>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollManager />
      <Routes>
        <Route element={<SiteLayout />}>
          <Route index element={<HomePage />} />
          <Route element={<InnerPages />}>
            <Route path="about" element={<AboutPage />} />
            <Route path="technology" element={<TechnologyPage />} />
            <Route path="products" element={<ProductsPage />} />
            <Route path="applications" element={<ApplicationsPage />} />
            <Route path="rd" element={<ResearchPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
