import React from 'react';
import { useNavigate } from 'react-router-dom';
import CTASection from '../CTASection';

// The homepage CTA band, reused on dedicated pages; its button opens /contact.
export default function PageCTA({ to = '/contact', ...props }) {
  const navigate = useNavigate();
  return <CTASection {...props} onOpenContact={() => navigate(to)} />;
}
