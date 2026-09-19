import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { ArrowRight, ExternalLink, MapPin, Clock, Briefcase, Building2, Calendar } from "lucide-react";
import { useInternships } from "../hooks/useInternships";
import { findBySlug, slugify } from "../utils/slug";
import { deadlineBadge } from "../utils/deadline";

const OG_IMG = "https://i.postimg.cc/d3T437Xk/45C7EB18-47F5-4CD3-9509-3A1092AF188E.png";

export default function InternshipDetail() {
  const { slug }                    = useParams();
  const { internships, loading }    = useInternships();

  if (loading) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 sm:px-6">
        <div className="space-y-4 animate-pulse">
          <div className="h-4 w-32 rounded-lg bg-forest-100 dark:bg-forest-800" />
          <div className="h-8 w-3/4 rounded-lg bg-forest-100 dark:bg-forest-800" />
          <div className="h-4 w-1/2 rounded-lg bg-forest-100 dark:bg-forest-800" />
          <div className="h-48 rounded-2xl bg-forest-100 dark:bg-forest-800" />
        </div>
      </div>
    );
  }

  const internship = findBySlug(internships, slug);

  if (!internship) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-24 text-center sm:px-6">
        <h1 className="font-display text-2xl font-semibold text-forest-900 dark:text-forest-50">Internship not found</h1>
        <p className="mt-3 text-sm text-forest-500 dark:text-forest-400">This internship may have been removed or the link may be incorrect.</p>
        <Link to="/internships" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-forest-600 px-5 py-3 text-sm font-medium text-white hover:bg-forest-700 transition">
          Browse all internships
        </Link>
      </div>
    );
  }

  const canonicalUrl = `https://ithubahub.co.za/internships/${slugify(internship.name)}`;
  const badge        = deadlineBadge(internship.closing_date);
  const isClosed     = badge?.label === "Closed";

  // Related internships — same field, excluding current
  const relatedInternships = internships
    .filter((i) => i.name !== internship.name && (i.field_of_study === internship.field_of_study || i.type === internship.type))
    .slice(0, 3);

  const typeColors = {
    graduate:    "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
    student:     "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
    learnership: "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300",
    government:  "bg-forest-100 dark:bg-forest-800 text-forest-700 dark:text-forest-300",
  };
  const typeClass = typeColors[internship.type?.toLowerCase()] || typeColors.graduate;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    "title": internship.name,
    "hiringOrganization": { "@type": "Organization", "name": internship.company },
    "jobLocation": { "@type": "Place", "address": { "@type": "PostalAddress", "addressCountry": "ZA", "addressRegion": internship.province || "South Africa" } },
    "description": internship.description || `${internship.name} offered by ${internship.company}.`,
    "responsibilities": internship.responsibilities || undefined,
    "qualifications": internship.requirements || undefined,
    "employmentType": "INTERN",
    "datePosted": internship.postedDate || undefined,
    "validThrough": internship.closing_date || undefined,
    "url": canonicalUrl,
    "baseSalary": internship.stipend ? { "@type": "MonetaryAmount", "currency": "ZAR", "value": internship.stipend } : undefined,
  };

  return (
    <>
      <Helmet>
        <title>{internship.name} | Ithuba</title>
        <meta name="description" content={`${internship.name} offered by ${internship.company}. ${internship.field_of_study ? `Field: ${internship.field_of_study}. ` : ""}${internship.duration ? `Duration: ${internship.duration}. ` : ""}Apply on Ithuba.`} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={`${internship.name} | Ithuba`} />
        <meta property="og:description" content={`${internship.name} offered by ${internship.company}. Find requirements and apply on Ithuba.`} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={OG_IMG} />
        <meta name="twitter:title" content={`${internship.name} | Ithuba`} />
        <meta name="twitter:description" content={`${internship.name} offered by ${internship.company}. Apply on Ithuba.`} />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-forest-500 dark:text-forest-400">
          <Link to="/" className="hover:text-forest-800 dark:hover:text-white transition">Home</Link>
          <span>/</span>
          <Link to="/internships" className="hover:text-forest-800 dark:hover:text-white transition">Internships</Link>
          <span>/</span>
          <span className="text-forest-800 dark:text-forest-200 font-medium truncate">{internship.name}</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium ${typeClass}`}>
              {internship.type || "Internship"}
            </span>
            {badge && (
              <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
                isClosed
                  ? "bg-forest-200 dark:bg-forest-800 text-forest-500 dark:text-forest-400"
                  : badge.classes
              }`}>
                {isClosed ? "● Closed" : `⏱ ${badge.label}`}
              </span>
            )}
            {internship.featured === "true" && (
              <span className="inline-flex items-center gap-1 rounded-full bg-gold-100 dark:bg-gold-900/30 px-3 py-1 text-xs font-medium text-gold-700 dark:text-gold-300">★ Featured</span>
            )}
          </div>

          <h1 className="font-display text-3xl font-semibold text-forest-900 dark:text-forest-50 sm:text-4xl leading-snug">
            {internship.name}
          </h1>
          <p className="mt-2 text-lg text-forest-600 dark:text-forest-400">{internship.company}</p>
        </div>

        {/* Key details card */}
        <div className="mb-8 rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { icon: Briefcase, label: "Field of study", value: internship.field_of_study },
              { icon: MapPin,    label: "Province",       value: internship.province },
              { icon: Clock,     label: "Duration",       value: internship.duration },
              { icon: Building2, label: "Company",        value: internship.company },
              { icon: Calendar,  label: "Closing date",   value: internship.closing_date || "Open / rolling" },
            { icon: Calendar,  label: "Posted",          value: internship.postedDate },
            ].filter((item) => item.value).map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-forest-100 dark:bg-forest-800 text-forest-600 dark:text-forest-300">
                  <Icon size={14} />
                </div>
                <div>
                  <p className="text-xs text-forest-400 dark:text-forest-500">{label}</p>
                  <p className="text-sm font-medium text-forest-900 dark:text-forest-50">{value}</p>
                </div>
              </div>
            ))}

            {/* Stipend — highlighted */}
            {internship.stipend && (
              <div className="flex items-start gap-3 sm:col-span-2">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-gold-100 dark:bg-gold-900/30 text-gold-600 dark:text-gold-400">
                  <span className="text-xs font-bold">R</span>
                </div>
                <div>
                  <p className="text-xs text-forest-400 dark:text-forest-500">Stipend / compensation</p>
                  <p className="text-sm font-semibold text-gold-600 dark:text-gold-400">{internship.stipend}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Description */}
        {internship.description && (
          <div className="mb-8">
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-4">About this opportunity</h2>
            <div className="text-sm leading-7 text-forest-700 dark:text-forest-300">
              {internship.description.split("\n").map((para, i) => (
                <p key={i} className="mb-3 last:mb-0">{para}</p>
              ))}
            </div>
          </div>
        )}

        {/* Responsibilities */}
        {internship.responsibilities && (
          <div className="mb-8">
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-4">Responsibilities</h2>
            <ul className="space-y-2.5 text-sm leading-6 text-forest-700 dark:text-forest-300">
              {internship.responsibilities.split(/\n|•|-/).filter(r => r.trim()).map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-forest-500 dark:bg-forest-400" />
                  {item.trim()}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Requirements */}
        {internship.requirements && (
          <div className="mb-8">
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-4">Requirements</h2>
            <ul className="space-y-2.5 text-sm leading-6 text-forest-700 dark:text-forest-300">
              {internship.requirements.split(/\n|•|-/).filter(r => r.trim()).map((item, i) => (
                <li key={i} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500 dark:bg-gold-400" />
                  {item.trim()}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* CTA buttons */}
        <div className="mb-12 flex flex-col sm:flex-row gap-3">
          {internship.apply_url && !isClosed ? (
            <a
              href={internship.apply_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-forest-600 dark:bg-forest-500 px-6 py-3 text-sm font-medium text-white hover:bg-forest-700 transition"
            >
              Apply now <ExternalLink size={14} />
            </a>
          ) : isClosed ? (
            <div className="inline-flex items-center gap-2 rounded-xl bg-forest-100 dark:bg-forest-800 px-6 py-3 text-sm font-medium text-forest-400 dark:text-forest-500 cursor-not-allowed">
              Applications closed
            </div>
          ) : null}
          <Link
            to="/internships"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-forest-300 dark:border-forest-700 px-6 py-3 text-sm font-medium text-forest-700 dark:text-forest-300 hover:bg-forest-100 dark:hover:bg-forest-800 transition"
          >
            Browse all internships
          </Link>
        </div>

        {/* Related internships */}
        {relatedInternships.length > 0 && (
          <div>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-5">Related internships</h2>
            <div className="space-y-3">
              {relatedInternships.map((i, idx) => (
                <Link
                  key={i.name || idx}
                  to={`/internships/${slugify(i.name)}`}
                  className="flex items-center justify-between rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 px-5 py-4 hover:border-forest-400 hover:shadow-sm transition"
                >
                  <div>
                    <p className="font-medium text-forest-900 dark:text-forest-50 text-sm">{i.name}</p>
                    <p className="text-xs text-forest-500 dark:text-forest-400 mt-0.5">{i.company}{i.closing_date ? ` · Closes ${i.closing_date}` : ""}</p>
                  </div>
                  <ArrowRight size={14} className="text-forest-400 shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
