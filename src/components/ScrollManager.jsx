import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const MAX_FRAMES = 90; // ~1.5s for a lazily loaded page to render its sections

// Scrolls to the top on page change, or to the #hash target when one is given
// (e.g. /applications#maritime). The fixed navbar is offset via scroll-margin in index.css.
export default function ScrollManager() {
  // `key` changes on every navigation, so following the same #hash link again re-scrolls to it.
  const { pathname, hash, key } = useLocation();
  const lastPathname = useRef(pathname);
  // Stays true until the arrival scroll has run (survives React StrictMode's double effect run).
  const arrivedOnNewPage = useRef(false);

  useEffect(() => {
    if (lastPathname.current !== pathname) arrivedOnNewPage.current = true;
    lastPathname.current = pathname;
    const pageChanged = arrivedOnNewPage.current;

    // On a new page, jump instantly (html has scroll-smooth, which would otherwise animate
    // the reset and fight the scroll to the #target). Same-page #links keep smooth scrolling.
    const resetToTop = () => window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

    if (!hash) {
      if (pageChanged) resetToTop();
      arrivedOnNewPage.current = false;
      return undefined;
    }

    const id = decodeURIComponent(hash.slice(1));
    let frame;
    let tries = 0;
    const seek = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: pageChanged ? 'instant' : 'smooth', block: 'start' });
        arrivedOnNewPage.current = false;
      } else if (tries++ < MAX_FRAMES) {
        frame = requestAnimationFrame(seek);
      } else {
        arrivedOnNewPage.current = false;
      }
    };
    if (pageChanged) resetToTop();
    frame = requestAnimationFrame(seek);
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash, key]);

  return null;
}
