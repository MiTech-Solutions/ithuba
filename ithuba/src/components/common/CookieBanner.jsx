import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Cookie, X } from "lucide-react";

const COOKIE_KEY = "ithuba_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(COOKIE_KEY);
      if (!stored) setTimeout(() => setVisible(true), 600);
    } catch {}
  }, []);

  function accept() { localStorage.setItem(COOKIE_KEY, "accepted"); setVisible(false); }
  function decline() { localStorage.setItem(COOKIE_KEY, "declined"); setVisible(false); }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-forest-200 dark:border-forest-800 bg-cream/95 dark:bg-forest-950/95 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div className="flex items-start gap-3">
          <Cookie size={18} className="mt-0.5 shrink-0 text-forest-600 dark:text-forest-400" aria-hidden="true" />
          <p className="text-sm leading-6 text-forest-700 dark:text-forest-300">
            We use cookies and similar technologies — including{" "}
            <span className="font-medium text-forest-900 dark:text-forest-100">Google Analytics</span> and{" "}
            <span className="font-medium text-forest-900 dark:text-forest-100">Google AdSense</span> — to
            improve your experience and serve relevant ads. Your data is never
            sold. By clicking{" "}
            <span className="font-medium text-forest-900 dark:text-forest-100">Accept</span>, you agree
            to our use of cookies as described in our{" "}
            <Link
              to="/privacy-policy"
              className="font-medium text-forest-700 dark:text-forest-200 underline underline-offset-2 hover:text-forest-900 dark:hover:text-white transition"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <button
            onClick={decline}
            className="inline-flex items-center gap-1.5 rounded-xl border border-forest-300 dark:border-forest-700 px-4 py-2 text-sm font-medium text-forest-600 dark:text-forest-300 transition hover:bg-forest-100 dark:hover:bg-forest-800"
          >
            <X size={13} aria-hidden="true" /> Decline
          </button>
          <button
            onClick={accept}
            className="inline-flex items-center rounded-xl bg-forest-600 dark:bg-forest-500 px-5 py-2 text-sm font-medium text-white transition hover:bg-forest-700 dark:hover:bg-forest-400"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
