import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowRight } from "lucide-react";
import { useOpportunities } from "../hooks/useOpportunities";
import { findCategory, matchesCategory } from "../data/categories";
import BursaryCard from "../components/bursaries/BursaryCard";
import ScholarshipCard from "../components/scholarships/ScholarshipCard";
import InternshipCard from "../components/internships/InternshipCard";
import EmptyState from "../components/common/EmptyState";
import { slugify } from "../utils/slug";

const OG_IMG     = "https://i.postimg.cc/d3T437Xk/45C7EB18-47F5-4CD3-9509-3A1092AF188E.png";
const BANNER_IMG = "https://images.unsplash.com/photo-1537202108838-e7072bad1927?q=80&w=746&auto=format&fit=crop";

export default function OpportunityPage() {
  const { dimension, slug }                              = useParams();
  const { bursaries, scholarships, internships, loading } = useOpportunities();

  const category = findCategory(dimension, slug);

  // ── Filter bursaries ──────────────────────────────────────────────────────
  const filteredBursaries = useMemo(() => {
    if (dimension === "scholarship_type") return [];
    return bursaries.filter((b) => matchesCategory(b, dimension, slug));
  }, [bursaries, dimension, slug]);

  // ── Filter scholarships ───────────────────────────────────────────────────
  const filteredScholarships = useMemo(() => {
    if (dimension === "bursary_type" || dimension === "province") return [];
    if (dimension === "scholarship_type") {
      return scholarships.filter((s) => matchesCategory(s, dimension, slug));
    }
    return scholarships.filter((s) => matchesCategory(s, "field", slug));
  }, [scholarships, dimension, slug]);

  // ── Filter internships ────────────────────────────────────────────────────
  const filteredInternships = useMemo(() => {
    if (dimension === "bursary_type" || dimension === "scholarship_type" || dimension === "province") return [];
    if (dimension === "internship_type") {
      return internships.filter((i) => matchesCategory(i, dimension, slug));
    }
    // field — match internships by field too
    return internships.filter((i) => matchesCategory(i, "field", slug));
  }, [internships, dimension, slug]);

  const totalCount = filteredBursaries.length + filteredScholarships.length + filteredInternships.length;

  if (!category) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
        <h1 className="font-display text-2xl font-semibold text-forest-900 dark:text-forest-50">Category not found</h1>
        <Link to="/categories" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-forest-600 px-5 py-3 text-sm font-medium text-white hover:bg-forest-700 transition">
          <ArrowRight size={14} /> Browse all categories
        </Link>
      </div>
    );
  }

  const dimensionLabel =
    dimension === "bursary_type"    ? "Bursary funder type" :
    dimension === "scholarship_type" ? "Scholarship type" :
    dimension === "field"            ? "Field of study" :
    "Province";

  const canonicalUrl = `https://ithubahub.co.za/opportunities/${dimension}/${slug}`;

  return (
    <>
      <Helmet>
        <title>{!loading && totalCount > 0 ? `${totalCount} ` : ""}{category.label} Opportunities South Africa 2026 | Ithuba</title>
        <meta name="description" content={category.metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={`${category.label} | Ithuba`} />
        <meta property="og:description" content={category.metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={OG_IMG} />
        <meta name="twitter:title" content="Student Opportunities | Ithuba" />
        <meta name="twitter:description" content="Browse South African bursaries and scholarships by category on Ithuba." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ithubahub.co.za" },
            { "@type": "ListItem", "position": 2, "name": "Categories", "item": "https://ithubahub.co.za/categories" },
            { "@type": "ListItem", "position": 3, "name": category.label, "item": canonicalUrl },
          ],
        })}</script>
      </Helmet>

      <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <nav className="pt-6 mb-0 flex items-center gap-2 text-sm text-forest-500 dark:text-forest-400">
          <Link to="/categories" className="hover:text-forest-800 dark:hover:text-white transition">Categories</Link>
          <span>/</span>
          <span className="text-forest-800 dark:text-forest-200 font-medium">{category.label}</span>
        </nav>

        {/* Banner */}
        <div className="relative h-48 sm:h-64 overflow-hidden bg-forest-900 -mx-4 sm:-mx-6 lg:-mx-8 mb-10 mt-4">
          <img src={BANNER_IMG} alt="" role="presentation" loading="lazy" decoding="async"
            className="h-full w-full object-cover object-center opacity-40 dark:opacity-25" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-900/90 via-forest-900/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-4 pb-6 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold-300 mb-1">{dimensionLabel}</p>
            <h1 className="font-display text-2xl font-semibold text-white sm:text-3xl">{category.label}</h1>
            {!loading && (
              <p className="mt-1 text-sm text-forest-300">
                {totalCount} {totalCount === 1 ? "opportunity" : "opportunities"} found
                {filteredBursaries.length > 0 && filteredScholarships.length > 0 && (
                  <span className="ml-2 text-forest-400">
                    ({filteredBursaries.length > 0 && `${filteredBursaries.length}B`}{filteredScholarships.length > 0 && ` · ${filteredScholarships.length}S`}{filteredInternships.length > 0 && ` · ${filteredInternships.length}I`})
                  </span>
                )}
              </p>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm leading-7 text-forest-600 dark:text-forest-400 mb-10 max-w-2xl">
          {category.description}
        </p>

        {/* Loading */}
        {loading && (
          <div className="space-y-10">
            {[1,2].map((s) => (
              <div key={s}>
                <div className="h-5 w-40 rounded-lg bg-forest-100 dark:bg-forest-800 animate-pulse mb-5" />
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {[1,2,3].map((i) => <div key={i} className="h-48 rounded-2xl bg-forest-100 dark:bg-forest-800 animate-pulse" />)}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty */}
        {!loading && totalCount === 0 && (
          <EmptyState variant="no-results" onClear={() => {}} />
        )}

        {/* Bursaries section */}
        {!loading && filteredBursaries.length > 0 && (
          <section className="mb-14">
            <div className="flex items-end justify-between mb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-forest-500 dark:text-forest-400">Bursaries</p>
                <h2 className="mt-1 font-display text-xl font-semibold text-forest-900 dark:text-forest-50">
                  {category.label} bursaries
                  <span className="ml-2 text-base font-normal text-forest-400 dark:text-forest-500">({filteredBursaries.length})</span>
                </h2>
              </div>
              <Link to="/bursaries" className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-forest-600 dark:text-forest-400 hover:text-forest-900 dark:hover:text-white transition">
                All bursaries <ArrowRight size={13} />
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredBursaries.map((b, i) => (
                <BursaryCard key={b.id || `b-${i}`} bursary={b} index={i} />
              ))}
            </div>
            <div className="mt-5 sm:hidden">
              <Link to="/bursaries" className="inline-flex items-center gap-1 text-sm font-medium text-forest-600 dark:text-forest-400 hover:text-forest-900 dark:hover:text-white transition">
                All bursaries <ArrowRight size={13} />
              </Link>
            </div>
          </section>
        )}

        {/* Scholarships section */}
        {!loading && filteredScholarships.length > 0 && (
          <section className="mb-10">
            <div className="flex items-end justify-between mb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-forest-500 dark:text-forest-400">Scholarships</p>
                <h2 className="mt-1 font-display text-xl font-semibold text-forest-900 dark:text-forest-50">
                  {category.label} scholarships
                  <span className="ml-2 text-base font-normal text-forest-400 dark:text-forest-500">({filteredScholarships.length})</span>
                </h2>
              </div>
              <Link to="/scholarships" className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-forest-600 dark:text-forest-400 hover:text-forest-900 dark:hover:text-white transition">
                All scholarships <ArrowRight size={13} />
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredScholarships.map((s, i) => (
                <ScholarshipCard key={s.id || `s-${i}`} scholarship={s} index={i} />
              ))}
            </div>
            <div className="mt-5 sm:hidden">
              <Link to="/scholarships" className="inline-flex items-center gap-1 text-sm font-medium text-forest-600 dark:text-forest-400 hover:text-forest-900 dark:hover:text-white transition">
                All scholarships <ArrowRight size={13} />
              </Link>
            </div>
          </section>
        )}

        {/* Internships section */}
        {!loading && filteredInternships.length > 0 && (
          <section className="mb-10">
            <div className="flex items-end justify-between mb-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-forest-500 dark:text-forest-400">Internships</p>
                <h2 className="mt-1 font-display text-xl font-semibold text-forest-900 dark:text-forest-50">
                  {category.label} internships
                  <span className="ml-2 text-base font-normal text-forest-400 dark:text-forest-500">({filteredInternships.length})</span>
                </h2>
              </div>
              <Link to="/internships" className="hidden sm:inline-flex items-center gap-1 text-sm font-medium text-forest-600 dark:text-forest-400 hover:text-forest-900 dark:hover:text-white transition">
                All internships <ArrowRight size={13} />
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {filteredInternships.map((i, idx) => (
                <InternshipCard key={i.name || `i-${idx}`} internship={i} index={idx} />
              ))}
            </div>
            <div className="mt-5 sm:hidden">
              <Link to="/internships" className="inline-flex items-center gap-1 text-sm font-medium text-forest-600 dark:text-forest-400 hover:text-forest-900 dark:hover:text-white transition">
                All internships <ArrowRight size={13} />
              </Link>
            </div>
          </section>
        )}

        {/* Bottom CTA */}
        {!loading && totalCount > 0 && (
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link to="/bursaries" className="inline-flex items-center gap-2 rounded-xl bg-forest-600 dark:bg-forest-500 px-5 py-3 text-sm font-medium text-white hover:bg-forest-700 transition">
              Browse all bursaries <ArrowRight size={14} />
            </Link>
            <Link to="/scholarships" className="inline-flex items-center gap-2 rounded-xl border border-forest-300 dark:border-forest-700 px-5 py-3 text-sm font-medium text-forest-700 dark:text-forest-300 hover:bg-forest-100 dark:hover:bg-forest-800 transition">
              Browse all scholarships <ArrowRight size={14} />
            </Link>
            <Link to="/internships" className="inline-flex items-center gap-2 rounded-xl border border-forest-300 dark:border-forest-700 px-5 py-3 text-sm font-medium text-forest-700 dark:text-forest-300 hover:bg-forest-100 dark:hover:bg-forest-800 transition">
              Browse all internships <ArrowRight size={14} />
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
