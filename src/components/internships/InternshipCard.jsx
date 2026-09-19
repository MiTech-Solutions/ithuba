import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Clock, Briefcase, Share2, Check } from "lucide-react";
import { useState, useRef } from "react";
import { slugify } from "../../utils/slug";
import { deadlineBadge, daysUntil } from "../../utils/deadline";

function useScrollReveal(delay = 0) {
  const ref = useRef(null);
  return { ref, style: { animationDelay: `${delay}ms` } };
}

export default function InternshipCard({ internship, index = 0 }) {
  const [copied, setCopied]   = useState(false);
  const delay                 = Math.min(index * 60, 300);
  const { ref, style }        = useScrollReveal(delay);

  const slug       = slugify(internship.name);
  const detailPath = `/internships/${slug}`;
  const badge      = deadlineBadge(internship.closing_date);
  const isClosed   = badge?.label === "Closed";

  async function handleShare(e) {
    e.preventDefault();
    const url = `https://ithubahub.co.za${detailPath}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.open(`https://wa.me/?text=${encodeURIComponent(url)}`, "_blank");
    }
  }

  const typeColors = {
    graduate:    "bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300",
    student:     "bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300",
    learnership: "bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300",
    government:  "bg-forest-100 dark:bg-forest-800 text-forest-700 dark:text-forest-300",
  };

  const typeLabel = {
    graduate:    "Graduate",
    student:     "Student",
    learnership: "Learnership",
    government:  "Government",
  };

  const typeClass = typeColors[internship.type?.toLowerCase()] || typeColors.graduate;

  return (
    <article
      ref={ref}
      style={style}
      className={`group flex flex-col rounded-2xl border transition-[border-color,box-shadow,translate] duration-300 ${
        isClosed
          ? "border-forest-200 dark:border-forest-800 bg-forest-50/60 dark:bg-forest-900/40 opacity-75 hover:opacity-90"
          : "border-forest-200 dark:border-forest-800 bg-white dark:bg-forest-900 hover:border-forest-400 dark:hover:border-forest-600 hover:shadow-xl hover:shadow-forest-900/10 hover:-translate-y-1"
      }`}
    >
      <div className="flex flex-1 flex-col p-5">

        {/* Top row — badges + share */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex flex-wrap gap-1.5">
            {/* Type badge */}
            <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${typeClass}`}>
              {typeLabel[internship.type?.toLowerCase()] || internship.type || "Internship"}
            </span>

            {/* Deadline badge */}
            {badge && (
              <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                isClosed
                  ? "bg-forest-200 dark:bg-forest-800 text-forest-500 dark:text-forest-400"
                  : badge.classes
              }`}>
                {isClosed ? "● Closed" : `⏱ ${badge.label}`}
              </span>
            )}

            {/* Featured badge */}
            {internship.featured === "true" && (
              <span className="inline-flex items-center gap-1 rounded-full bg-gold-100 dark:bg-gold-900/30 px-2.5 py-0.5 text-xs font-medium text-gold-700 dark:text-gold-300">
                ★ Featured
              </span>
            )}
          </div>

          {/* Share button */}
          <button
            onClick={handleShare}
            aria-label="Share internship"
            className="shrink-0 flex h-7 w-7 items-center justify-center rounded-lg text-forest-400 dark:text-forest-500 hover:text-forest-700 dark:hover:text-forest-300 hover:bg-forest-100 dark:hover:bg-forest-800 transition"
          >
            {copied ? <Check size={13} className="text-forest-500" /> : <Share2 size={13} />}
          </button>
        </div>

        {/* Title */}
        <h3 className={`font-semibold leading-snug mb-0.5 ${isClosed ? "text-forest-500 dark:text-forest-500" : "text-forest-900 dark:text-forest-50"}`}>
          {internship.name}
        </h3>
        <p className="text-sm text-forest-500 dark:text-forest-500 mb-3">
          {internship.company}
        </p>

        {/* Meta row */}
        <div className="flex flex-wrap gap-x-4 gap-y-1.5 text-xs text-forest-500 dark:text-forest-400 mb-3">
          {internship.field_of_study && (
            <span className="flex items-center gap-1">
              <Briefcase size={11} /> {internship.field_of_study}
            </span>
          )}
          {internship.province && (
            <span className="flex items-center gap-1">
              <MapPin size={11} /> {internship.province}
            </span>
          )}
          {internship.duration && (
            <span className="flex items-center gap-1">
              <Clock size={11} /> {internship.duration}
            </span>
          )}
        </div>

        {/* Stipend */}
        {internship.stipend && (
          <p className="text-xs font-medium text-gold-600 dark:text-gold-400 mb-3">
            {internship.stipend}
          </p>
        )}

        {/* Description */}
        {internship.description && (
          <p className="text-xs leading-5 text-forest-600 dark:text-forest-400 line-clamp-2 flex-1">
            {internship.description}
          </p>
        )}

        {/* CTA */}
        <Link
          to={detailPath}
          className={`mt-5 inline-flex items-center gap-1.5 text-sm font-medium transition group-hover:gap-2.5 ${
            isClosed
              ? "text-forest-400 dark:text-forest-500 hover:text-forest-600 dark:hover:text-forest-400"
              : "text-forest-600 dark:text-forest-400 hover:text-forest-900 dark:hover:text-white"
          }`}
        >
          View details <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
        </Link>
      </div>
    </article>
  );
}
