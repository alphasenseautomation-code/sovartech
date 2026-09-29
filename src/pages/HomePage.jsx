import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Hero from '../components/Hero';
import CapabilityStrip from '../components/CapabilityStrip';
import AboutSection from '../components/AboutSection';
import ProductsSection from '../components/ProductsSection';
import ApplicationsSection from '../components/ApplicationsSection';
import TechnologySection from '../components/TechnologySection';
import CapabilityBand from '../components/CapabilityBand';
import ResearchSection from '../components/ResearchSection';
import ServicesSection from '../components/ServicesSection';
import CTASection from '../components/CTASection';
import ProductDetailModal from '../components/ProductDetailModal';
import VideoModal from '../components/VideoModal';
import usePageMeta from '../hooks/usePageMeta';

// Homepage application ids -> section anchors on /applications
const applicationAnchor = {
  maritime: 'maritime',
  oilgas: 'oil-gas',
  ports: 'ports',
  industrial: 'infrastructure',
  infrastructure: 'infrastructure'
};

// The approved homepage: same sections, same order as before routing was added.
// Section buttons now open the dedicated pages instead of the contact drawer.
export default function HomePage() {
  usePageMeta();
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const goToContact = () => navigate('/contact');

  return (
    <>
      {/* Section 01: Hero */}
      <Hero
        onOpenVideo={() => setVideoModalOpen(true)}
        onOpenContact={goToContact}
      />

      {/* Section 02: Horizontal Capability Strip */}
      <CapabilityStrip />

      {/* Section 03: About & Company Introduction — LEARN MORE ABOUT US */}
      <AboutSection onOpenContact={() => navigate('/about')} />

      {/* Section 04: Products Modules */}
      <ProductsSection onSelectProduct={(prod) => setSelectedProduct(prod)} />

      {/* Section 05: Applications */}
      <ApplicationsSection
        onOpenContact={goToContact}
        onSelectApplication={(app) => navigate(`/applications#${applicationAnchor[app.id] || app.id}`)}
      />

      {/* Section 06: Our Technology */}
      <TechnologySection onOpenContact={goToContact} />

      {/* Section 07: Technology Capability Band */}
      <CapabilityBand />

      {/* Section 08: Research & Development — EXPLORE OUR R&D */}
      <ResearchSection onOpenContact={() => navigate('/rd')} />

      {/* Section 09: Lifecycle Services */}
      <ServicesSection onOpenContact={goToContact} />

      {/* Section 10: Final CTA */}
      <CTASection onOpenContact={goToContact} />

      {/* Modals */}
      {selectedProduct && (
        <ProductDetailModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
          onInquire={(productName) => navigate(`/contact?product=${encodeURIComponent(productName)}`)}
        />
      )}

      {videoModalOpen && (
        <VideoModal
          onClose={() => setVideoModalOpen(false)}
          onOpenContact={goToContact}
        />
      )}
    </>
  );
}
