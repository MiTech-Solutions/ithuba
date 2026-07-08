import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

/**
 * Wraps page content with a fade + slight slide-up on every route change.
 * No dependencies — pure CSS transitions via inline style + requestAnimationFrame.
 */
export default function PageTransition({ children }) {
  const ref      = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Start hidden and shifted down
    el.style.opacity   = "0";
    el.style.transform = "translateY(12px)";
    el.style.transition = "none";

    // Next frame — trigger transition to visible
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.transition = "opacity 0.35s ease, transform 0.35s ease";
        el.style.opacity    = "1";
        el.style.transform  = "translateY(0)";
      });
    });
  }, [location.pathname]);

  return (
    <div ref={ref} style={{ opacity: 0, transform: "translateY(12px)" }}>
      {children}
    </div>
  );
}
