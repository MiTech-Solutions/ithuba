import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import {
  ArrowLeft, ExternalLink, MapPin, GraduationCap,
  Building2, Calendar, Tag, ArrowRight
} from "lucide-react";
import { useBursaries } from "../hooks/useBursaries";
import { findBySlug, slugify } from "../utils/slug";
import BursaryCard from "../components/bursaries/BursaryCard";

const typeColors = {
  government: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  corporate:  "bg-gold-100 text-gold-700 dark:bg-gold-900/40 dark:text-gold-300",
  ngo:        "bg-forest-100 text-forest-700 dark:bg-forest-800 dark:text-forest-300",
};

export default function BursaryDetail() {
  const { slug }                    = useParams();
  const { bursaries, loading, error } = useBursaries();

  // ── Loading skeleton ──────────────────────────────────────────────────────
  if (loading) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-4 animate-pulse">
          <div className="h-4 w-24 rounded-full bg-forest-100 dark:bg-forest-800" />
          <div className="h-8 w-2/3 rounded-xl bg-forest-100 dark:bg-forest-800" />
          <div className="h-4 w-1/3 rounded-full bg-forest-100 dark:bg-forest-800" />
          <div className="mt-6 h-40 rounded-2xl bg-forest-100 dark:bg-forest-800" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6">
        <p className="font-medium text-red-600 dark:text-red-400">Could not load bursary data.</p>
        <Link to="/bursaries" className="mt-4 inline-flex items-center gap-2 text-sm text-forest-600 dark:text-forest-400 hover:underline">
          <ArrowLeft size={14} /> Back to all bursaries
        </Link>
      </div>
    );
  }

  const bursary = findBySlug(bursaries, slug);

  // ── 404 if slug doesn't match any bursary ────────────────────────────────
  if (!bursary) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
        <div className="inline-flex items-center rounded-full border border-forest-200 dark:border-forest-700 bg-forest-50 dark:bg-forest-900 px-4 py-2 text-sm text-forest-600 dark:text-forest-400">
          404 — Bursary not found
        </div>
        <h1 className="mt-6 font-display text-2xl font-semibold text-forest-900 dark:text-forest-50">
          This bursary doesn't exist or has been removed.
        </h1>
        <Link
          to="/bursaries"
          className="mt-6 inline-flex items-center gap-2 rounded-xl bg-forest-600 dark:bg-forest-500 px-5 py-3 text-sm font-medium text-white hover:bg-forest-700 transition"
        >
          <ArrowLeft size={14} /> Browse all bursaries
        </Link>
      </div>
    );
  }

  // ── Related bursaries (same field or same funder type, excluding current) ─
  const related = bursaries
    .filter(
      (b) =>
        b.name !== bursary.name &&
        (b.field_of_study === bursary.field_of_study ||
          b.funder_type === bursary.funder_type)
    )
    .slice(0, 3);

  const typeLabel = bursary.funder_type
    ? bursary.funder_type.charAt(0).toUpperCase() + bursary.funder_type.slice(1)
    : "Other";

  const colorClass = typeColors[bursary.funder_type?.toLowerCase()] || typeColors.ngo;

  const canonicalUrl = `https://ithuba.app/bursaries/${slug}`;

  // ── JSON-LD structured data ───────────────────────────────────────────────
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EducationalOccupationalProgram",
    "name": bursary.name,
    "description": bursary.description || `${bursary.name} offered by ${bursary.funder}`,
    "provider": {
      "@type": "Organization",
      "name": bursary.funder,
    },
    "url": bursary.apply_url || canonicalUrl,
    "educationalProgramMode": "full-time",
    "offers": bursary.value
      ? {
          "@type": "Offer",
          "description": bursary.value,
          "price": "0",
          "priceCurrency": "ZAR",
        }
      : undefined,
    "applicationDeadline": bursary.deadline || undefined,
    "occupationalCategory": bursary.field_of_study || undefined,
  };

  return (
    <>
      <Helmet>
        <title>{bursary.name} | Ithuba Bursary Directory</title>
        <meta
          name="description"
          content={`${bursary.name} offered by ${bursary.funder}. ${bursary.field_of_study ? `Field: ${bursary.field_of_study}.` : ""} ${bursary.value ? `Value: ${bursary.value}.` : ""} ${bursary.deadline ? `Deadline: ${bursary.deadline}.` : ""} Find and apply for South African bursaries on Ithuba.`}
        />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={`${bursary.name} | Ithuba`} />
        <meta
          property="og:description"
          content={bursary.description || `${bursary.name} offered by ${bursary.funder}. Find bursary details and apply on Ithuba.`}
        />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">

        {/* Back link */}
        <Link
          to="/bursaries"
          className="inline-flex items-center gap-1.5 text-sm text-forest-600 dark:text-forest-400 hover:text-forest-900 dark:hover:text-white transition mb-8"
        >
          <ArrowLeft size={14} /> All bursaries
        </Link>

        {/* Main card */}
        <article className="rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 p-6 sm:p-8">

          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${colorClass}`}>
              {typeLabel}
            </span>
            {bursary.featured === "true" && (
              <span className="inline-flex items-center rounded-full bg-gold-100 dark:bg-gold-900/40 px-2.5 py-0.5 text-xs font-medium text-gold-700 dark:text-gold-300">
                ★ Featured
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="font-display text-2xl font-semibold text-forest-900 dark:text-forest-50 sm:text-3xl leading-snug">
            {bursary.name}
          </h1>
          <p className="mt-1 text-forest-600 dark:text-forest-400">
            Offered by <span className="font-medium text-forest-800 dark:text-forest-200">{bursary.funder}</span>
          </p>

          {/* Meta grid */}
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { icon: GraduationCap, label: "Field",    value: bursary.field_of_study },
              { icon: Building2,     label: "Level",    value: bursary.study_level },
              { icon: MapPin,        label: "Province", value: bursary.province },
              { icon: Calendar,      label: "Deadline", value: bursary.deadline },
            ]
              .filter((m) => m.value)
              .map((m) => (
                <div key={m.label} className="rounded-xl bg-forest-50 dark:bg-forest-800/60 p-3">
                  <div className="flex items-center gap-1.5 text-xs text-forest-500 dark:text-forest-400 mb-1">
                    <m.icon size={11} />
                    {m.label}
                  </div>
                  <p className="text-sm font-medium text-forest-900 dark:text-forest-100 leading-snug">{m.value}</p>
                </div>
              ))}
          </div>

          {/* Value */}
          {bursary.value && (
            <div className="mt-4 rounded-xl border border-gold-200 dark:border-gold-900/40 bg-gold-50 dark:bg-gold-900/10 px-4 py-3">
              <div className="flex items-center gap-1.5 text-xs text-gold-600 dark:text-gold-400 mb-0.5">
                <Tag size={11} /> Bursary value
              </div>
              <p className="font-semibold text-forest-900 dark:text-forest-50">{bursary.value}</p>
            </div>
          )}

          {/* Description */}
          {bursary.description && (
            <div className="mt-6">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-forest-500 dark:text-forest-400 mb-2">
                About this bursary
              </h2>
              <p className="text-sm leading-7 text-forest-700 dark:text-forest-300">
                {bursary.description}
              </p>
            </div>
          )}

          {/* Requirements */}
          {bursary.requirements && (
            <div className="mt-6">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-forest-500 dark:text-forest-400 mb-2">
                Requirements
              </h2>
              <ul className="space-y-1.5">
                {bursary.requirements.split(";").map((req, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm leading-6 text-forest-700 dark:text-forest-300">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-forest-400 dark:bg-forest-500" />
                    {req.trim()}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Apply CTA */}
          {bursary.apply_url && (
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <a
                href={bursary.apply_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-forest-600 dark:bg-forest-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-forest-700 dark:hover:bg-forest-400"
              >
                Apply for this bursary <ExternalLink size={15} />
              </a>
              <Link
                to="/bursaries"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-forest-200 dark:border-forest-700 px-6 py-3.5 text-sm font-medium text-forest-700 dark:text-forest-300 hover:bg-forest-50 dark:hover:bg-forest-800 transition"
              >
                Browse more bursaries
              </Link>
            </div>
          )}

          {/* Disclaimer */}
          <p className="mt-6 text-xs leading-5 text-forest-400 dark:text-forest-500 border-t border-forest-100 dark:border-forest-800 pt-4">
            Bursary information is provided for reference only. Always verify
            details and deadlines directly with{" "}
            <span className="font-medium">{bursary.funder}</span> before
            applying. Ithuba is not affiliated with this funder.
          </p>
        </article>

        {/* Related bursaries */}
        {related.length > 0 && (
          <section className="mt-12">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50">
                Related bursaries
              </h2>
              <Link
                to="/bursaries"
                className="inline-flex items-center gap-1 text-sm text-forest-600 dark:text-forest-400 hover:text-forest-900 dark:hover:text-white transition"
              >
                View all <ArrowRight size={13} />
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((b, i) => (
                <BursaryCard key={b.id || i} bursary={b} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
