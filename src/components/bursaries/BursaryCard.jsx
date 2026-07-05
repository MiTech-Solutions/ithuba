import { Link } from "react-router-dom";
import { MapPin, GraduationCap, Building2, Calendar, ArrowRight } from "lucide-react";
import { slugify } from "../../utils/slug";

const typeColors = {
  government: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
  corporate:  "bg-gold-100 text-gold-700 dark:bg-gold-900/40 dark:text-gold-300",
  ngo:        "bg-forest-100 text-forest-700 dark:bg-forest-800 dark:text-forest-300",
};

export default function BursaryCard({ bursary }) {
  const typeLabel   = bursary.funder_type
    ? bursary.funder_type.charAt(0).toUpperCase() + bursary.funder_type.slice(1)
    : "Other";
  const colorClass  = typeColors[bursary.funder_type?.toLowerCase()] || typeColors.ngo;
  const detailPath  = `/bursaries/${slugify(bursary.name)}`;

  return (
    <article className="group flex flex-col rounded-2xl border border-forest-200 dark:border-forest-800 bg-white dark:bg-forest-900 transition hover:border-forest-400 dark:hover:border-forest-600 hover:shadow-md">
      <div className="flex flex-col flex-1 p-5">

        {/* Badges */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
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
        <h3 className="font-semibold text-forest-900 dark:text-forest-50 leading-snug">
          {bursary.name}
        </h3>
        <p className="mt-0.5 text-sm text-forest-600 dark:text-forest-400">
          {bursary.funder}
        </p>

        {/* Meta */}
        <div className="mt-4 grid grid-cols-2 gap-2">
          {bursary.field_of_study && (
            <div className="flex items-center gap-1.5 text-xs text-forest-600 dark:text-forest-400">
              <GraduationCap size={12} className="shrink-0" />
              <span className="truncate">{bursary.field_of_study}</span>
            </div>
          )}
          {bursary.study_level && (
            <div className="flex items-center gap-1.5 text-xs text-forest-600 dark:text-forest-400">
              <Building2 size={12} className="shrink-0" />
              <span className="truncate">{bursary.study_level}</span>
            </div>
          )}
          {bursary.province && (
            <div className="flex items-center gap-1.5 text-xs text-forest-600 dark:text-forest-400">
              <MapPin size={12} className="shrink-0" />
              <span className="truncate">{bursary.province}</span>
            </div>
          )}
          {bursary.deadline && (
            <div className="flex items-center gap-1.5 text-xs text-forest-600 dark:text-forest-400">
              <Calendar size={12} className="shrink-0" />
              <span className="truncate">Closes {bursary.deadline}</span>
            </div>
          )}
        </div>

        {/* Value */}
        {bursary.value && (
          <div className="mt-4 rounded-xl bg-forest-50 dark:bg-forest-800/60 px-3 py-2">
            <p className="text-xs text-forest-500 dark:text-forest-400">Bursary value</p>
            <p className="font-semibold text-forest-900 dark:text-forest-50 text-sm mt-0.5">{bursary.value}</p>
          </div>
        )}

        {/* Description preview */}
        {bursary.description && (
          <p className="mt-3 text-xs leading-5 text-forest-500 dark:text-forest-400 line-clamp-2">
            {bursary.description}
          </p>
        )}

        {/* Spacer */}
        <div className="flex-1" />

        {/* Link to detail page */}
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
