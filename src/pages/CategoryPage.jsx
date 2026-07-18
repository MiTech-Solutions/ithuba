import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useBursaries } from "../hooks/useBursaries";
import { findCategory, matchesCategory } from "../data/categories";
import BursaryCard from "../components/bursaries/BursaryCard";

export default function CategoryPage() {
  const { dimension, slug }           = useParams();
  const { bursaries, loading, error } = useBursaries();

  const category = findCategory(dimension, slug);

  // ── Unknown category ──────────────────────────────────────────────────────
  if (!category) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
        <h1 className="font-display text-2xl font-semibold text-forest-900 dark:text-forest-50">
          Category not found
        </h1>
        <Link
          to="/bursaries"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-forest-600 px-5 py-3 text-sm font-medium text-white hover:bg-forest-700 transition"
        >
          <ArrowLeft size={14} /> Browse all bursaries
        </Link>
      </div>
    );
  }

  const filtered = bursaries.filter((b) => matchesCategory(b, dimension, slug));

  const canonicalUrl = `https://ithubahub.co.za/bursaries/${dimension}/${slug}`;

  // ── JSON-LD ItemList for this category ────────────────────────────────────
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": category.label,
    "description": category.description,
    "url": canonicalUrl,
    "numberOfItems": filtered.length,
    "itemListElement": filtered.map((b, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": b.name,
      "description": b.description || `${b.name} offered by ${b.funder}`,
      "url": `https://ithubahub.co.za/bursaries/${slug}`,
    })),
  };

  return (
    <>
      <Helmet>
        <title>{!loading && filtered.length > 0 ? `${filtered.length} ` : ""}{category.label} South Africa 2025/26 | Ithuba</title>
        <meta name="description" content={category.metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:site_name" content="Ithuba" />
        <meta property="og:title" content={`${category.label} South Africa | Ithuba`} />
        <meta property="og:description" content={category.metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://i.postimg.cc/d3T437Xk/45C7EB18-47F5-4CD3-9509-3A1092AF188E.png" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <nav className="mb-6 flex items-center gap-2 text-sm text-forest-500 dark:text-forest-400">
          <Link to="/bursaries" className="hover:text-forest-800 dark:hover:text-white transition">
            All bursaries
          </Link>
          <span>/</span>
          <span className="text-forest-800 dark:text-forest-200 font-medium">{category.label}</span>
        </nav>

        {/* Header */}
        <div className="max-w-3xl mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-forest-500 dark:text-forest-400">
            {dimension === "type" ? "Funder type" : dimension === "field" ? "Field of study" : "Province"}
          </p>
          <h1 className="mt-2 font-display text-3xl font-semibold text-forest-900 dark:text-forest-50 sm:text-4xl">
            {category.label}
          </h1>
          <p className="mt-4 text-sm leading-7 text-forest-600 dark:text-forest-400">
            {category.description}
          </p>
          {!loading && (
            <p className="mt-3 text-sm font-medium text-forest-500 dark:text-forest-400">
              {filtered.length} {filtered.length === 1 ? "bursary" : "bursaries"} found
            </p>
          )}
        </div>

        {/* Loading skeletons */}
        {loading && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-48 rounded-2xl bg-forest-100 dark:bg-forest-800 animate-pulse" />
            ))}
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="rounded-2xl border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-900/20 p-6 text-center">
            <p className="font-medium text-red-700 dark:text-red-400">Could not load bursaries</p>
          </div>
        )}

        {/* Empty */}
        {!loading && !error && filtered.length === 0 && (
          <div className="rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 p-10 text-center">
            <p className="font-semibold text-forest-800 dark:text-forest-200">
              No bursaries in this category yet
            </p>
            <p className="mt-2 text-sm text-forest-500 dark:text-forest-400">
              Check back soon or browse all available bursaries.
            </p>
            <Link
              to="/bursaries"
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-forest-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-forest-700 transition"
            >
              Browse all bursaries <ArrowRight size={14} />
            </Link>
          </div>
        )}

        {/* Results grid */}
        {!loading && !error && filtered.length > 0 && (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((b, i) => (
              <BursaryCard key={b.id || i} bursary={b} index={i} />
            ))}
          </div>
        )}

        {/* Back link */}
        {!loading && (
          <div className="mt-10">
            <Link
              to="/bursaries"
              className="inline-flex items-center gap-2 text-sm font-medium text-forest-600 dark:text-forest-400 hover:text-forest-900 dark:hover:text-white transition"
            >
              <ArrowLeft size={14} /> Browse all bursaries
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
