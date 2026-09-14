import { Link } from "react-router-dom";
import { ArrowRight, X } from "lucide-react";

// ── Illustration: Open book with a sprout (empty directory) ───────────────────
function BookIllustration() {
  return (
    <svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-40 h-auto mx-auto">
      {/* Shadow */}
      <ellipse cx="80" cy="112" rx="48" ry="5" fill="currentColor" className="text-forest-100 dark:text-forest-800" />

      {/* Left page */}
      <path d="M28 24 Q28 18 34 18 L78 22 L78 95 L34 91 Q28 91 28 85 Z" fill="currentColor" className="text-white dark:text-forest-800" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" style={{stroke: "var(--tw-text-opacity)"}} />
      <path d="M28 24 Q28 18 34 18 L78 22 L78 95 L34 91 Q28 91 28 85 Z" className="text-forest-200 dark:text-forest-700" fill="none" stroke="currentColor" strokeWidth="1.5" />

      {/* Left page lines */}
      <line x1="38" y1="36" x2="70" y2="37" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" className="text-forest-200 dark:text-forest-600" />
      <line x1="38" y1="44" x2="70" y2="45" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" className="text-forest-200 dark:text-forest-600" />
      <line x1="38" y1="52" x2="70" y2="53" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" className="text-forest-200 dark:text-forest-600" />
      <line x1="38" y1="60" x2="58" y2="61" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" className="text-forest-200 dark:text-forest-600" />

      {/* Right page */}
      <path d="M132 24 Q132 18 126 18 L82 22 L82 95 L126 91 Q132 91 132 85 Z" fill="currentColor" className="text-white dark:text-forest-800" />
      <path d="M132 24 Q132 18 126 18 L82 22 L82 95 L126 91 Q132 91 132 85 Z" className="text-forest-200 dark:text-forest-700" fill="none" stroke="currentColor" strokeWidth="1.5" />

      {/* Right page lines */}
      <line x1="90" y1="36" x2="122" y2="37" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" className="text-forest-200 dark:text-forest-600" />
      <line x1="90" y1="44" x2="122" y2="45" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" className="text-forest-200 dark:text-forest-600" />
      <line x1="90" y1="52" x2="122" y2="53" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" className="text-forest-200 dark:text-forest-600" />
      <line x1="90" y1="60" x2="108" y2="61" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" className="text-forest-200 dark:text-forest-600" />

      {/* Spine */}
      <rect x="78" y="18" width="4" height="77" rx="2" fill="currentColor" className="text-forest-300 dark:text-forest-600" />

      {/* Sprout stem */}
      <path d="M80 18 Q80 8 80 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-forest-500 dark:text-forest-400" />

      {/* Sprout left leaf */}
      <path d="M80 10 Q72 6 70 12 Q76 14 80 10Z" fill="currentColor" className="text-forest-500 dark:text-forest-400" />

      {/* Sprout right leaf */}
      <path d="M80 6 Q88 2 90 8 Q84 10 80 6Z" fill="currentColor" className="text-gold-400 dark:text-gold-500" />
    </svg>
  );
}

// ── Illustration: Magnifying glass with an X (no results) ────────────────────
function NoResultsIllustration() {
  return (
    <svg viewBox="0 0 160 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-36 h-auto mx-auto">
      {/* Shadow */}
      <ellipse cx="80" cy="113" rx="40" ry="4" fill="currentColor" className="text-forest-100 dark:text-forest-800" />

      {/* Magnifying glass circle */}
      <circle cx="68" cy="58" r="32" fill="currentColor" className="text-forest-50 dark:text-forest-800" />
      <circle cx="68" cy="58" r="32" stroke="currentColor" strokeWidth="6" strokeLinecap="round" className="text-forest-300 dark:text-forest-600" />
      <circle cx="68" cy="58" r="22" fill="currentColor" className="text-white dark:text-forest-700" />

      {/* Handle */}
      <line x1="92" y1="82" x2="116" y2="106" stroke="currentColor" strokeWidth="7" strokeLinecap="round" className="text-forest-300 dark:text-forest-600" />
      <line x1="92" y1="82" x2="116" y2="106" stroke="currentColor" strokeWidth="4" strokeLinecap="round" className="text-forest-400 dark:text-forest-500" />

      {/* X inside glass */}
      <line x1="58" y1="48" x2="78" y2="68" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" className="text-forest-400 dark:text-forest-400" />
      <line x1="78" y1="48" x2="58" y2="68" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" className="text-forest-400 dark:text-forest-400" />
    </svg>
  );
}

// ── Main EmptyState component ─────────────────────────────────────────────────
export default function EmptyState({ variant = "empty", onClear }) {
  if (variant === "empty") {
    return (
      <div className="rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 px-8 py-14 text-center">
        <BookIllustration />
        <h3 className="mt-6 font-display text-lg font-semibold text-forest-900 dark:text-forest-50">
          No bursaries listed yet
        </h3>
        <p className="mt-2 text-sm leading-6 text-forest-500 dark:text-forest-400 max-w-xs mx-auto">
          We're still building the directory. Check back soon — or help us grow it by submitting a bursary you know of.
        </p>
        <Link
          to="/submit"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-forest-600 dark:bg-forest-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-forest-700 transition"
        >
          Submit a bursary <ArrowRight size={14} />
        </Link>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 px-8 py-14 text-center">
      <NoResultsIllustration />
      <h3 className="mt-6 font-display text-lg font-semibold text-forest-900 dark:text-forest-50">
        No bursaries match your search
      </h3>
      <p className="mt-2 text-sm leading-6 text-forest-500 dark:text-forest-400 max-w-xs mx-auto">
        Try adjusting your filters, changing your search term, or browsing all bursaries.
      </p>
      <button
        onClick={onClear}
        className="mt-6 inline-flex items-center gap-2 rounded-xl bg-forest-600 dark:bg-forest-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-forest-700 transition"
      >
        <X size={14} /> Clear filters
      </button>
    </div>
  );
}
