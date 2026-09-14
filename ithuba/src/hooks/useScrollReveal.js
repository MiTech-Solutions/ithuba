import { useEffect, useRef, useState } from "react";

/**
 * Returns a ref and a boolean `visible`.
 * Once the element enters the viewport, visible becomes true and stays true.
 */
export function useScrollReveal(options = {}) {
  const ref     = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, ...options }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}
