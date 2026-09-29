import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const MAX_FRAMES = 90; // ~1.5s for a lazily loaded page to render its sections

// Scrolls to the top on page change, or to the #hash target when one is given
// (e.g. /applications#maritime). The fixed navbar is offset via scroll-margin in index.css.
export default function ScrollManager() {
  const { pathname, hash } = useLocation();
  const lastPathname = useRef(pathname);

  useEffect(() => {
    const pageChanged = lastPathname.current !== pathname;
    lastPathname.current = pathname;

    if (!hash) {
      if (pageChanged) window.scrollTo(0, 0);
      return undefined;
    }

    const id = decodeURIComponent(hash.slice(1));
    let frame;
    let tries = 0;
    const seek = () => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else if (tries++ < MAX_FRAMES) {
        frame = requestAnimationFrame(seek);
      }
    };
    if (pageChanged) window.scrollTo(0, 0);
    frame = requestAnimationFrame(seek);
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}
