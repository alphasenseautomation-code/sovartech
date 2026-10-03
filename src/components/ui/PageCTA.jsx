import React from 'react';
import { useNavigate } from 'react-router-dom';
import CTASection from '../CTASection';

// The homepage CTA band, reused on dedicated pages; its button opens the enquiry form.
export default function PageCTA({ to = '/contact#enquiry-form', ...props }) {
  const navigate = useNavigate();
  return <CTASection {...props} onOpenContact={() => navigate(to)} />;
}
