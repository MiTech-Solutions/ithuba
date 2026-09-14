import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight, Briefcase, GraduationCap, MapPin, Award } from "lucide-react";
import { useOpportunities } from "../hooks/useOpportunities";
import { CATEGORY_TYPES, matchesCategory } from "../data/categories";

const OG_IMG = "https://i.postimg.cc/d3T437Xk/45C7EB18-47F5-4CD3-9509-3A1092AF188E.png";

const dimensionIcons = {
  bursary_type:    Briefcase,
  scholarship_type: Award,
  field:           GraduationCap,
  province:        MapPin,
};

const dimensionLabels = {
  bursary_type:    "Bursaries by funder type",
  scholarship_type: "Scholarships by type",
  field:           "By field of study",
  province:        "Bursaries by province",
};

const dimensionDescriptions = {
  bursary_type:    "Browse bursaries by who funds them — government departments, private companies, or NGOs and foundations.",
  scholarship_type: "Browse scholarships by award type — merit-based, need-based, community, or arts.",
  field:           "Browse both bursaries and scholarships by your field of study.",
  province:        "Browse bursaries by the province they're available in, including national bursaries open to all.",
};

export default function Categories() {
  const { bursaries, scholarships, loading } = useOpportunities();

  function countFor(dimension, slug) {
    if (loading) return null;
    const bCount = dimension === "scholarship_type"
      ? 0
      : bursaries.filter((b) => matchesCategory(b, dimension, slug)).length;
    const sCount = (dimension === "bursary_type" || dimension === "province")
      ? 0
      : scholarships.filter((s) => matchesCategory(s,
          dimension === "scholarship_type" ? "scholarship_type" : "field",
          slug
        )).length;
    return { bCount, sCount, total: bCount + sCount };
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Bursary & Scholarship Categories — Ithuba",
    "description": "Browse South African bursaries and scholarships by funder type, scholarship type, field of study, and province.",
    "url": "https://ithubahub.co.za/categories",
  };

  return (
    <>
      <Helmet>
        <title>Bursaries & Scholarships Categories | Ithuba</title>
        <meta name="description" content="Browse South African bursaries and scholarships by category — government, corporate, NGO, merit, need-based, engineering, finance, IT, medicine, Gauteng, Western Cape, and more." />
        <link rel="canonical" href="https://ithubahub.co.za/categories" />
        <meta property="og:site_name" content="Ithuba" />
        <meta property="og:title" content="Bursaries & Scholarships Categories | Ithuba" />
        <meta property="og:description" content="Browse South African bursaries and scholarships by funder type, scholarship type, field of study, and province." />
        <meta property="og:url" content="https://ithubahub.co.za/categories" />
        <meta property="og:image" content={OG_IMG} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bursaries & Scholarships Categories | Ithuba" />
        <meta name="twitter:description" content="Browse South African bursaries and scholarships by funder type, scholarship type, field of study, and province." />
        <meta name="twitter:image" content="https://i.postimg.cc/d3T437Xk/45C7EB18-47F5-4CD3-9509-3A1092AF188E.png" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-xs font-semibold uppercase tracking-widest text-forest-500 dark:text-forest-400">Browse by category</p>
          <h1 className="mt-2 font-display text-3xl font-semibold text-forest-900 dark:text-forest-50 sm:text-4xl">
            Find your opportunity
          </h1>
          <p className="mt-4 text-sm leading-7 text-forest-600 dark:text-forest-400">
            Browse bursaries and scholarships by funder type, scholarship type, field of study, or province to find the most relevant opportunities for your situation.
          </p>
        </div>

        {/* Category groups */}
        <div className="space-y-14">
          {Object.entries(CATEGORY_TYPES).map(([dimension, config]) => {
            const Icon = dimensionIcons[dimension];
            return (
              <section key={dimension}>
                <div className="flex items-start gap-3 mb-6">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-forest-100 dark:bg-forest-800 text-forest-600 dark:text-forest-300">
                    <Icon size={17} />
                  </div>
                  <div>
                    <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50">
                      {dimensionLabels[dimension]}
                    </h2>
                    <p className="mt-0.5 text-sm text-forest-500 dark:text-forest-400">
                      {dimensionDescriptions[dimension]}
                    </p>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {config.values.map((cat) => {
                    const counts = countFor(dimension, cat.slug);
                    const linkTo = dimension === "bursary_type"
                      ? `/bursaries/type/${cat.slug}`
                      : dimension === "scholarship_type"
                      ? `/scholarships?type=${cat.slug}`
                      : `/opportunities/${dimension}/${cat.slug}`;

                    return (
                      <Link
                        key={cat.slug}
                        to={linkTo}
                        className="group flex flex-col rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 p-5 transition hover:border-forest-400 dark:hover:border-forest-500 hover:shadow-md hover:-translate-y-0.5"
                      >
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h3 className="font-semibold text-forest-900 dark:text-forest-50 leading-snug text-sm">
                            {cat.label}
                          </h3>
                          {counts === null ? (
                            <span className="h-5 w-8 rounded-full bg-forest-100 dark:bg-forest-800 animate-pulse shrink-0" />
                          ) : dimension === "field" ? (
                            <div className="flex flex-col items-end gap-0.5 shrink-0">
                              {counts.bCount > 0 && (
                                <span className="inline-flex items-center rounded-full bg-forest-100 dark:bg-forest-800 px-2 py-0.5 text-xs font-medium text-forest-600 dark:text-forest-300">
                                  {counts.bCount}B
                                </span>
                              )}
                              {counts.sCount > 0 && (
                                <span className="inline-flex items-center rounded-full bg-gold-100 dark:bg-gold-900/40 px-2 py-0.5 text-xs font-medium text-gold-700 dark:text-gold-300">
                                  {counts.sCount}S
                                </span>
                              )}
                            </div>
                          ) : (
                            <span className="shrink-0 inline-flex items-center rounded-full bg-forest-100 dark:bg-forest-800 px-2 py-0.5 text-xs font-medium text-forest-600 dark:text-forest-300">
                              {counts.total}
                            </span>
                          )}
                        </div>
                        <p className="text-xs leading-5 text-forest-500 dark:text-forest-400 flex-1 line-clamp-3">
                          {cat.description}
                        </p>
                        <div className="mt-4 flex items-center gap-1 text-xs font-medium text-forest-600 dark:text-forest-400 group-hover:text-forest-900 dark:group-hover:text-white transition">
                          Browse <ArrowRight size={12} className="transition-transform group-hover:translate-x-0.5" />
                        </div>
                      </Link>
                    );
                  })}
                </div>

                {/* Legend for field section */}
                {dimension === "field" && (
                  <div className="mt-3 flex items-center gap-4 text-xs text-forest-400 dark:text-forest-500">
                    <div className="flex items-center gap-1.5">
                      <span className="inline-flex items-center rounded-full bg-forest-100 dark:bg-forest-800 px-2 py-0.5 text-xs font-medium text-forest-600 dark:text-forest-300">B</span>
                      Bursaries
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="inline-flex items-center rounded-full bg-gold-100 dark:bg-gold-900/40 px-2 py-0.5 text-xs font-medium text-gold-700 dark:text-gold-300">S</span>
                      Scholarships
                    </div>
                  </div>
                )}
              </section>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-14 rounded-2xl border border-forest-200 dark:border-forest-700 bg-forest-50 dark:bg-forest-900 p-8 text-center">
          <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50">Not sure where to start?</h2>
          <p className="mt-2 text-sm text-forest-600 dark:text-forest-400 max-w-sm mx-auto">
            Browse all opportunities and use search and filters to narrow down what's right for you.
          </p>
          <div className="mt-5 flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/bursaries" className="inline-flex items-center gap-2 rounded-xl bg-forest-600 dark:bg-forest-500 px-6 py-3 text-sm font-medium text-white hover:bg-forest-700 transition">
              Browse bursaries <ArrowRight size={14} />
            </Link>
            <Link to="/scholarships" className="inline-flex items-center gap-2 rounded-xl border border-forest-300 dark:border-forest-700 px-6 py-3 text-sm font-medium text-forest-700 dark:text-forest-300 hover:bg-forest-100 dark:hover:bg-forest-800 transition">
              Browse scholarships <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
