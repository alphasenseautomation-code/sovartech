import { useEffect } from 'react';

const DEFAULT_TITLE = 'SOVAR TECH | Advanced Air & Maritime Protection | Counter-Drone Systems';
const DEFAULT_DESCRIPTION = 'SOVAR TECH PRIVATE LIMITED - Advanced Air & Maritime Protection. Integrated Counter-Unmanned Aircraft Systems (C-UAS) for vessels, offshore facilities, LNG terminals and critical infrastructure.';

// Sets the document title and meta description for the current page.
// Called with no arguments, it restores the homepage defaults.
export default function usePageMeta(title, description) {
  useEffect(() => {
    document.title = title ? `${title} | SOVAR TECH` : DEFAULT_TITLE;

    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute('content', description || DEFAULT_DESCRIPTION);
  }, [title, description]);
}
