import { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, GraduationCap, Calendar, ArrowRight, Share2, Check, Star, RefreshCw } from "lucide-react";
import { slugify } from "../../utils/slug";
import { deadlineBadge } from "../../utils/deadline";

const typeColors = {
  merit:        "bg-gold-100 text-gold-700 dark:bg-gold-900/40 dark:text-gold-300",
  "need-based": "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  athletic:     "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
  arts:         "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
  community:    "bg-forest-100 text-forest-700 dark:bg-forest-800 dark:text-forest-300",
};

export default function ScholarshipCard({ scholarship, index = 0 }) {
  const [shared, setShared] = useState(false);
  const [cardRef]           = useState(null);

  const typeLabel   = scholarship.scholarship_type
    ? scholarship.scholarship_type.charAt(0).toUpperCase() + scholarship.scholarship_type.slice(1)
    : "Scholarship";
  const colorClass  = typeColors[scholarship.scholarship_type?.toLowerCase()] || typeColors.community;
  const detailPath  = `/scholarships/${slugify(scholarship.name)}`;
  const fullUrl     = `https://ithubahub.co.za${detailPath}`;
  const badge       = deadlineBadge(scholarship.deadline);
  const delay       = Math.min(index * 60, 300);

  async function handleShare(e) {
    e.preventDefault();
    e.stopPropagation();
    try {
      if (navigator.share) {
        await navigator.share({ title: scholarship.name, text: `Check out this scholarship: ${scholarship.name} by ${scholarship.funder}`, url: fullUrl });
      } else {
        await navigator.clipboard.writeText(fullUrl);
        setShared(true);
        setTimeout(() => setShared(false), 2000);
      }
    } catch {}
  }

  return (
    <article
      ref={cardRef}
      style={{
        opacity:    1,
        transform:  "translateY(0)",
        transition: `opacity 0.45s ease ${delay}ms, transform 0.45s ease ${delay}ms`,
      }}
      className="group flex flex-col rounded-2xl border border-forest-200 dark:border-forest-800 bg-white dark:bg-forest-900 transition-[border-color,box-shadow,translate] duration-300 hover:border-forest-400 dark:hover:border-forest-600 hover:shadow-xl hover:shadow-forest-900/10 hover:-translate-y-1"
    >
      <div className="flex flex-col flex-1 p-5">

        {/* Header row */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${colorClass}`}>
              {typeLabel}
            </span>
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
            {badge && (
              <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs ${badge.classes}`}>
                ⏱ {badge.label}
              </span>
            )}
          </div>
          <button
            onClick={handleShare}
            title={shared ? "Link copied!" : "Share this scholarship"}
            className={`shrink-0 flex h-7 w-7 items-center justify-center rounded-lg border transition ${
              shared
                ? "border-forest-400 bg-forest-100 dark:bg-forest-800 text-forest-600"
                : "border-forest-200 dark:border-forest-700 text-forest-400 hover:border-forest-400 hover:text-forest-700 dark:hover:text-forest-200"
            }`}
          >
            {shared ? <Check size={13} /> : <Share2 size={13} />}
          </button>
        </div>

        {/* Title */}
        <h3 className="font-semibold text-forest-900 dark:text-forest-50 leading-snug">{scholarship.name}</h3>
        <p className="mt-0.5 text-sm text-forest-600 dark:text-forest-400">{scholarship.funder}</p>

        {/* Meta */}
        <div className="mt-4 grid grid-cols-2 gap-2">
          {scholarship.field_of_study && (
            <div className="flex items-center gap-1.5 text-xs text-forest-600 dark:text-forest-400">
              <GraduationCap size={12} className="shrink-0" />
              <span className="truncate">{scholarship.field_of_study}</span>
            </div>
          )}
          {scholarship.gpa_requirement && (
            <div className="flex items-center gap-1.5 text-xs text-forest-600 dark:text-forest-400">
              <Star size={12} className="shrink-0" />
              <span className="truncate">{scholarship.gpa_requirement}</span>
            </div>
          )}
          {scholarship.province && (
            <div className="flex items-center gap-1.5 text-xs text-forest-600 dark:text-forest-400">
              <MapPin size={12} className="shrink-0" />
              <span className="truncate">{scholarship.province}</span>
            </div>
          )}
          {scholarship.deadline && (
            <div className={`flex items-center gap-1.5 text-xs ${badge ? "font-medium text-forest-700 dark:text-forest-200" : "text-forest-600 dark:text-forest-400"}`}>
              <Calendar size={12} className="shrink-0" />
              <span className="truncate">Closes {scholarship.deadline}</span>
            </div>
          )}
        </div>

        {/* Covers */}
        {scholarship.covers && (
          <div className="mt-4 rounded-xl bg-forest-50 dark:bg-forest-800/60 px-3 py-2">
            <p className="text-xs text-forest-500 dark:text-forest-400">Covers</p>
            <p className="font-semibold text-forest-900 dark:text-forest-50 text-sm mt-0.5">{scholarship.covers}</p>
          </div>
        )}

        {/* Description preview */}
        {scholarship.description && (
          <p className="mt-3 text-xs leading-5 text-forest-500 dark:text-forest-400 line-clamp-2">
            {scholarship.description}
          </p>
        )}

        {scholarship.last_verified && (
          <p className="mt-2 text-xs text-forest-400 dark:text-forest-500">✓ Verified {scholarship.last_verified}</p>
        )}

        <div className="flex-1" />

        <Link
          to={detailPath}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-forest-600 dark:text-forest-400 transition hover:text-forest-900 dark:hover:text-white group-hover:gap-2.5"
        >
          View details <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}
