import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Crosshair } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import usePageMeta from '../hooks/usePageMeta';

export default function NotFoundPage() {
  usePageMeta('Page Not Found');

  return (
    <PageHero
      breadcrumb="404"
      eyebrow="SIGNAL LOST // 404"
      icon={Crosshair}
      title="PAGE NOT FOUND"
      accent="OUTSIDE COVERAGE"
      text="The page you are looking for does not exist or has moved."
    >
      <Link
        to="/"
        className="inline-flex items-center space-x-3 bg-[#0878D1] hover:bg-[#168BE8] text-white font-extrabold text-sm tracking-wider px-8 py-4 rounded-xs shadow-[0_0_20px_rgba(8,120,209,0.5)] transition-all group"
      >
        <span>RETURN HOME</span>
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </PageHero>
  );
}
