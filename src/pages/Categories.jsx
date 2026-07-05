import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Briefcase, GraduationCap, MapPin } from "lucide-react";
import { useBursaries } from "../hooks/useBursaries";
import { CATEGORY_TYPES, matchesCategory } from "../data/categories";

const dimensionIcons = {
  type:     Briefcase,
  field:    GraduationCap,
  province: MapPin,
};

const dimensionLabels = {
  type:     "By funder type",
  field:    "By field of study",
  province: "By province",
};

export default function Categories() {
  const { bursaries, loading } = useBursaries();

  function countFor(dimension, slug) {
    if (loading) return null;
    return bursaries.filter((b) => matchesCategory(b, dimension, slug)).length;
  }

  // ── JSON-LD SiteLinksSearchBox / BreadcrumbList ───────────────────────────
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Bursary Categories — Ithuba",
    "description":
      "Browse South African bursaries by funder type, field of study, and province.",
    "url": "https://ithuba.app/categories",
  };

  return (
    <>
      <Helmet>
        <title>Bursary Categories South Africa | Ithuba</title>
        <meta
          name="description"
          content="Browse South African bursaries by category — government, corporate, NGO, engineering, finance, IT, medicine, Gauteng, Western Cape, and more."
        />
        <link rel="canonical" href="https://ithuba.app/categories" />
        <meta property="og:title" content="Bursary Categories South Africa | Ithuba" />
        <meta property="og:description" content="Browse South African bursaries by funder type, field of study, and province." />
        <meta property="og:url" content="https://ithuba.app/categories" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-forest-500 dark:text-forest-400">
            Browse by category
          </p>
          <h1 className="mt-2 font-display text-3xl font-semibold text-forest-900 dark:text-forest-50 sm:text-4xl">
            Find your bursary category
          </h1>
          <p className="mt-4 text-sm leading-7 text-forest-600 dark:text-forest-400">
            Browse bursaries by funder type, field of study, or province to find
            the most relevant opportunities for your situation.
          </p>
        </div>

        {/* Category groups */}
        <div className="space-y-12">
          {Object.entries(CATEGORY_TYPES).map(([dimension, config]) => {
            const Icon = dimensionIcons[dimension];
            return (
              <section key={dimension}>
                {/* Section header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-forest-100 dark:bg-forest-800 text-forest-600 dark:text-forest-300">
                    <Icon size={17} />
                  </div>
                  <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50">
                    {dimensionLabels[dimension]}
                  </h2>
                </div>

                {/* Category cards */}
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {config.values.map((cat) => {
                    const count = countFor(dimension, cat.slug);
                    return (
                      <Link
                        key={cat.slug}
                        to={`/bursaries/${dimension}/${cat.slug}`}
                        className="group flex flex-col rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 p-5 transition hover:border-forest-400 dark:hover:border-forest-500 hover:shadow-md"
                      >
                        <div className="flex items-start justify-between gap-2">
                          <h3 className="font-semibold text-forest-900 dark:text-forest-50 leading-snug text-sm">
                            {cat.label}
                          </h3>
                          {count !== null && (
                            <span className="shrink-0 inline-flex items-center rounded-full bg-forest-100 dark:bg-forest-800 px-2 py-0.5 text-xs font-medium text-forest-600 dark:text-forest-300">
                              {count}
                            </span>
                          )}
                          {count === null && (
                            <span className="h-5 w-8 rounded-full bg-forest-100 dark:bg-forest-800 animate-pulse" />
                          )}
                        </div>
                        <p className="mt-2 text-xs leading-5 text-forest-500 dark:text-forest-400 flex-1 line-clamp-3">
                          {cat.description}
                        </p>
                        <div className="mt-4 flex items-center gap-1 text-xs font-medium text-forest-600 dark:text-forest-400 group-hover:text-forest-900 dark:group-hover:text-white transition">
                          Browse <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>

        {/* Browse all CTA */}
        <div className="mt-14 rounded-2xl border border-forest-200 dark:border-forest-700 bg-forest-50 dark:bg-forest-900 p-8 text-center">
          <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50">
            Not sure where to start?
          </h2>
          <p className="mt-2 text-sm text-forest-600 dark:text-forest-400 max-w-sm mx-auto">
            Browse all bursaries and use the search and filters to narrow down
            what's right for you.
          </p>
          <Link
            to="/bursaries"
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-forest-600 dark:bg-forest-500 px-6 py-3 text-sm font-medium text-white hover:bg-forest-700 transition"
          >
            Browse all bursaries <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </>
  );
}
