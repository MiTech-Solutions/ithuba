import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ExternalLink, MapPin, GraduationCap, Calendar, Star, RefreshCw, Clock, ArrowRight } from "lucide-react";
import { useScholarships } from "../hooks/useScholarships";
import { findBySlug, slugify } from "../utils/slug";
import ScholarshipCard from "../components/scholarships/ScholarshipCard";

const OG_IMG = "https://i.postimg.cc/d3T437Xk/45C7EB18-47F5-4CD3-9509-3A1092AF188E.png";

const typeColors = {
  merit:        "bg-gold-100 text-gold-700 dark:bg-gold-900/40 dark:text-gold-300",
  "need-based": "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  athletic:     "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
  arts:         "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
  community:    "bg-forest-100 text-forest-700 dark:bg-forest-800 dark:text-forest-300",
};

export default function ScholarshipDetail() {
  const { slug }                          = useParams();
  const { scholarships, loading, error }  = useScholarships();

  if (loading) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-4 animate-pulse">
          <div className="h-4 w-24 rounded-full bg-forest-100 dark:bg-forest-800" />
          <div className="h-8 w-2/3 rounded-xl bg-forest-100 dark:bg-forest-800" />
          <div className="h-40 rounded-2xl bg-forest-100 dark:bg-forest-800" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <p className="font-medium text-red-600 dark:text-red-400">Could not load scholarship data.</p>
        <Link to="/scholarships" className="mt-4 inline-flex items-center gap-2 text-sm text-forest-600 dark:text-forest-400 hover:underline">
          <ArrowLeft size={14} /> Back to all scholarships
        </Link>
      </div>
    );
  }

  const scholarship = findBySlug(scholarships, slug);

  if (!scholarship) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
        <h1 className="font-display text-2xl font-semibold text-forest-900 dark:text-forest-50">
          This scholarship doesn't exist or has been removed.
        </h1>
        <Link to="/scholarships" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-forest-600 px-5 py-3 text-sm font-medium text-white hover:bg-forest-700 transition">
          <ArrowLeft size={14} /> Browse all scholarships
        </Link>
      </div>
    );
  }

  const related = scholarships
    .filter((s) => s.name !== scholarship.name && (s.field_of_study === scholarship.field_of_study || s.scholarship_type === scholarship.scholarship_type))
    .slice(0, 3);

  const typeLabel   = scholarship.scholarship_type
    ? scholarship.scholarship_type.charAt(0).toUpperCase() + scholarship.scholarship_type.slice(1)
    : "Scholarship";
  const colorClass  = typeColors[scholarship.scholarship_type?.toLowerCase()] || typeColors.community;
  const canonicalUrl = `https://ithubahub.co.za/scholarships/${slugify(scholarship.name)}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalProgram",
    "name": scholarship.name,
    "description": scholarship.description || `${scholarship.name} offered by ${scholarship.funder}`,
    "provider": { "@type": "Organization", "name": scholarship.funder },
    "url": scholarship.apply_url || canonicalUrl,
    "offers": scholarship.covers ? { "@type": "Offer", "description": scholarship.covers, "price": "0", "priceCurrency": "ZAR" } : undefined,
    "applicationDeadline": scholarship.deadline || undefined,
  };

  return (
    <>
      <Helmet>
        <title>{scholarship.name} | Ithuba Scholarship Directory</title>
        <meta name="description" content={`${scholarship.name} offered by ${scholarship.funder}. ${scholarship.covers ? `Covers: ${scholarship.covers}.` : ""} ${scholarship.deadline ? `Deadline: ${scholarship.deadline}.` : ""} Find and apply for South African scholarships on Ithuba.`} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={`${scholarship.name} | Ithuba`} />
        <meta property="og:description" content={scholarship.description || `${scholarship.name} offered by ${scholarship.funder}.`} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={OG_IMG} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
              <meta name="twitter:title" content={`${scholarship.name} | Ithuba`} />
        <meta name="twitter:description" content={`${scholarship.name} offered by ${scholarship.funder}. Find requirements, deadline and apply on Ithuba.`} />
      </Helmet>

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">

        <Link to="/scholarships" className="inline-flex items-center gap-1.5 text-sm text-forest-600 dark:text-forest-400 hover:text-forest-900 dark:hover:text-white transition mb-8">
          <ArrowLeft size={14} /> All scholarships
        </Link>

        <article className="rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 p-6 sm:p-8">

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${colorClass}`}>{typeLabel}</span>
            {scholarship.featured === "true" && (
              <span className="inline-flex items-center rounded-full bg-gold-100 dark:bg-gold-900/40 px-2.5 py-0.5 text-xs font-medium border border-gold-200 dark:border-gold-800/50">
                <span className="badge-shimmer">★ Featured</span>
              </span>
            )}
            {scholarship.renewable === "true" && (
              <span className="inline-flex items-center gap-1 rounded-full bg-forest-100 dark:bg-forest-800 px-2.5 py-0.5 text-xs font-medium text-forest-600 dark:text-forest-300">
                <RefreshCw size={10} /> Renewable
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="font-display text-2xl font-semibold text-forest-900 dark:text-forest-50 sm:text-3xl leading-snug">{scholarship.name}</h1>
          <p className="mt-1 text-forest-600 dark:text-forest-400">Offered by <span className="font-medium text-forest-800 dark:text-forest-200">{scholarship.funder}</span></p>

          {/* Meta grid */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { icon: GraduationCap, label: "Field",    value: scholarship.field_of_study },
              { icon: Star,          label: "GPA req",  value: scholarship.gpa_requirement },
              { icon: MapPin,        label: "Province", value: scholarship.province },
              { icon: Calendar,      label: "Deadline", value: scholarship.deadline },
              { icon: Clock,         label: "Duration", value: scholarship.duration },
            ].filter((m) => m.value).map((m) => (
              <div key={m.label} className="rounded-xl bg-forest-50 dark:bg-forest-800/60 p-3">
                <div className="flex items-center gap-1.5 text-xs text-forest-500 dark:text-forest-400 mb-1">
                  <m.icon size={11} /> {m.label}
                </div>
                <p className="text-sm font-medium text-forest-900 dark:text-forest-100 leading-snug">{m.value}</p>
              </div>
            ))}
          </div>

          {/* Covers */}
          {scholarship.covers && (
            <div className="mt-4 rounded-xl border border-gold-200 dark:border-gold-900/40 bg-gold-50 dark:bg-gold-900/10 px-4 py-3">
              <p className="text-xs text-gold-600 dark:text-gold-400 mb-0.5">What it covers</p>
              <p className="font-semibold text-forest-900 dark:text-forest-50">{scholarship.covers}</p>
            </div>
          )}

          {/* Description */}
          {scholarship.description && (
            <div className="mt-6">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-forest-500 dark:text-forest-400 mb-2">About this scholarship</h2>
              <p className="text-sm leading-7 text-forest-700 dark:text-forest-300">{scholarship.description}</p>
            </div>
          )}

          {/* Requirements */}
          {scholarship.requirements && (
            <div className="mt-6">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-forest-500 dark:text-forest-400 mb-2">Requirements</h2>
              <ul className="space-y-1.5">
                {scholarship.requirements.split(";").map((req, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm leading-6 text-forest-700 dark:text-forest-300">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-forest-400 dark:bg-forest-500" />
                    {req.trim()}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Who should apply */}
          <div className="mt-6 rounded-2xl border border-forest-100 dark:border-forest-800 bg-forest-50 dark:bg-forest-800/40 p-5">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-forest-500 dark:text-forest-400 mb-3">Who should apply?</h2>
            <p className="text-sm leading-7 text-forest-700 dark:text-forest-300">
              This scholarship suits South African students{scholarship.field_of_study && scholarship.field_of_study !== "All fields" ? ` studying ${scholarship.field_of_study}` : ""}{scholarship.study_level ? ` at ${scholarship.study_level.toLowerCase()} level` : ""}{scholarship.gpa_requirement ? ` with a minimum academic average of ${scholarship.gpa_requirement}` : ""}.
              {scholarship.scholarship_type === "merit" ? " As a merit-based scholarship, academic excellence is the primary selection criterion." : ""}
              {scholarship.scholarship_type === "need-based" ? " Financial need is a significant factor in the selection process." : ""}
              {scholarship.renewable === "true" ? ` This scholarship is renewable — provided you maintain the required academic performance, funding continues for the duration of your degree.` : ""}
            </p>
          </div>

          {/* Apply CTA */}
          {scholarship.apply_url && (
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a href={scholarship.apply_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-forest-600 dark:bg-forest-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-forest-700">
                Apply for this scholarship <ExternalLink size={15} />
              </a>
              <Link to="/scholarships" className="inline-flex items-center justify-center gap-2 rounded-xl border border-forest-200 dark:border-forest-700 px-6 py-3.5 text-sm font-medium text-forest-700 dark:text-forest-300 hover:bg-forest-50 dark:hover:bg-forest-800 transition">
                Browse more scholarships
              </Link>
            </div>
          )}

          {/* Disclaimer */}
          <p className="mt-6 text-xs leading-5 text-forest-400 dark:text-forest-500 border-t border-forest-100 dark:border-forest-800 pt-4">
            Scholarship information is provided for reference only. Always verify details directly with <span className="font-medium">{scholarship.funder}</span> before applying.
          </p>
          {scholarship.last_verified && (
            <p className="mt-2 text-xs text-forest-400 dark:text-forest-500">✓ Last verified: {scholarship.last_verified}</p>
          )}
        </article>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-12">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50">Related scholarships</h2>
              <Link to="/scholarships" className="inline-flex items-center gap-1 text-sm text-forest-600 dark:text-forest-400 hover:text-forest-900 dark:hover:text-white transition">
                View all <ArrowRight size={13} />
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((s, i) => <ScholarshipCard key={s.id || i} scholarship={s} index={i} />)}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
