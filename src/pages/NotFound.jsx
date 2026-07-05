import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Ithuba</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-4 py-24 text-center sm:px-6">
        <div className="inline-flex items-center rounded-full border border-forest-200 dark:border-forest-700 bg-forest-50 dark:bg-forest-900 px-4 py-2 text-sm text-forest-600 dark:text-forest-400">
          404 — Page not found
        </div>

        <h1 className="mt-6 font-display text-3xl font-semibold text-forest-900 dark:text-forest-50 sm:text-4xl">
          This page doesn't exist.
        </h1>

        <p className="mt-3 text-forest-600 dark:text-forest-400 text-sm leading-7 max-w-sm">
          The link may be outdated or mistyped. Head back to find the opportunity you're looking for.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <Link to="/" className="inline-flex items-center gap-2 rounded-xl bg-forest-600 dark:bg-forest-500 px-5 py-3 text-sm font-medium text-white hover:bg-forest-700 transition">
            <Home size={15} /> Back to home
          </Link>
          <Link to="/bursaries" className="inline-flex items-center gap-2 rounded-xl border border-forest-300 dark:border-forest-700 px-5 py-3 text-sm font-medium text-forest-700 dark:text-forest-300 hover:bg-forest-100 dark:hover:bg-forest-800 transition">
            <Search size={15} /> Browse bursaries <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </>
  );
}
