import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Search, SlidersHorizontal, X, ArrowRight, ArrowUpDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useBursaries } from "../hooks/useBursaries";
import BursaryCard from "../components/bursaries/BursaryCard";
import EmptyState from "../components/common/EmptyState";
import { slugify } from "../utils/slug";
import { sortByDeadline } from "../utils/deadline";

const OG_IMAGE  = "https://ithubahub.co.za/logo.svg";
const FIELDS    = ["All fields", "Engineering", "Medicine", "Law", "Business", "IT", "Teaching", "Science", "Arts", "Agriculture", "Social Work", "Finance", "Other"];
const TYPES     = ["All types", "Government", "Corporate", "NGO"];
const LEVELS    = ["All levels", "Undergraduate", "Postgraduate", "TVET", "Masters", "PhD"];
const PROVINCES = ["All provinces", "National", "Gauteng", "Western Cape", "KwaZulu-Natal", "Eastern Cape", "Limpopo", "Mpumalanga", "North West", "Free State", "Northern Cape"];
const SORT_OPTIONS = [
  { value: "default",  label: "Default" },
  { value: "deadline", label: "Closing soonest" },
  { value: "name",     label: "A – Z" },
];

const QUICK_CATEGORIES = [
  { label: "Government",     path: "/bursaries/type/government" },
  { label: "Corporate",      path: "/bursaries/type/corporate" },
  { label: "Engineering",    path: "/bursaries/field/engineering" },
  { label: "Finance",        path: "/bursaries/field/finance" },
  { label: "IT",             path: "/bursaries/field/it" },
  { label: "Medicine",       path: "/bursaries/field/medicine" },
  { label: "Gauteng",        path: "/bursaries/province/gauteng" },
  { label: "All categories", path: "/categories" },
];

export default function Bursaries() {
  const { bursaries, loading, error } = useBursaries();
  const [search, setSearch]           = useState("");
  const [field, setField]             = useState("All fields");
  const [type, setType]               = useState("All types");
  const [level, setLevel]             = useState("All levels");
  const [province, setProvince]       = useState("All provinces");
  const [sort, setSort]               = useState("default");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let results = bursaries.filter((b) => {
      const q           = search.toLowerCase();
      const matchSearch = !q || b.name?.toLowerCase().includes(q) || b.funder?.toLowerCase().includes(q) || b.field_of_study?.toLowerCase().includes(q) || b.description?.toLowerCase().includes(q);
      const matchField  = field === "All fields"    || b.field_of_study?.toLowerCase().includes(field.toLowerCase());
      const matchType   = type === "All types"      || b.funder_type?.toLowerCase() === type.toLowerCase();
      const matchLevel  = level === "All levels"    || b.study_level?.toLowerCase().includes(level.toLowerCase());
      const matchProv   = province === "All provinces" || b.province?.toLowerCase().includes(province.toLowerCase()) || b.province?.toLowerCase() === "national";
      return matchSearch && matchField && matchType && matchLevel && matchProv;
    });

    if (sort === "deadline") results = sortByDeadline(results);
    if (sort === "name")     results = [...results].sort((a, b) => a.name.localeCompare(b.name));

    return results;
  }, [bursaries, search, field, type, level, province, sort]);

  const hasFilters = field !== "All fields" || type !== "All types" || level !== "All levels" || province !== "All provinces";

  function clearFilters() {
    setField("All fields"); setType("All types"); setLevel("All levels"); setProvince("All provinces"); setSearch(""); setSort("default");
  }

  // JSON-LD
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "South African Bursaries — Ithuba Directory",
    "description": "A directory of bursaries available to South African students from government, corporate, and NGO funders.",
    "url": "https://ithubahub.co.za/bursaries",
    "numberOfItems": bursaries.length,
    "itemListElement": bursaries.map((b, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": b.name,
      "url": `https://ithubahub.co.za/bursaries/${slugify(b.name)}`,
    })),
  };

  const selectClass = "w-full rounded-xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 px-3 py-2.5 text-sm text-forest-800 dark:text-forest-200 outline-none focus:border-forest-500 dark:focus:border-forest-400 transition cursor-pointer";

  return (
    <>
      <Helmet>
        <title>Browse Bursaries South Africa 2025/26 | Ithuba</title>
        <meta name="description" content="Browse and search South African bursaries by field of study, province, funder type, and study level. Find government, corporate, and NGO funding opportunities." />
        <link rel="canonical" href="https://ithubahub.co.za/bursaries" />
        <meta property="og:title" content="Browse Bursaries South Africa | Ithuba" />
        <meta property="og:description" content="Browse and search South African bursaries by field of study, province, funder type, and study level." />
        <meta property="og:url" content="https://ithubahub.co.za/bursaries" />
        <meta property="og:image" content={OG_IMAGE} />
        {!loading && bursaries.length > 0 && (
          <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        )}
      </Helmet>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-forest-500 dark:text-forest-400">Directory</p>
          <h1 className="mt-2 font-display text-3xl font-semibold text-forest-900 dark:text-forest-50 sm:text-4xl">All bursaries</h1>
          <p className="mt-2 text-forest-600 dark:text-forest-400 text-sm">
            {loading ? "Loading bursaries..." : `${filtered.length} bursaries found`}
            {!loading && hasFilters && ` · filtered from ${bursaries.length} total`}
          </p>
        </div>

        {/* Quick category pills */}
        <div className="flex flex-wrap gap-2 mb-6">
          {QUICK_CATEGORIES.map((cat) => (
            <Link
              key={cat.path}
              to={cat.path}
              className="inline-flex items-center gap-1 rounded-full border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 px-3 py-1.5 text-xs font-medium text-forest-600 dark:text-forest-300 transition hover:border-forest-400 dark:hover:border-forest-500 hover:bg-forest-50 dark:hover:bg-forest-800"
            >
              {cat.label}
              {cat.label === "All categories" && <ArrowRight size={11} />}
            </Link>
          ))}
        </div>

        {/* Search bar */}
        <div className="relative mb-4">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-forest-400" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by name, funder, or field..."
            className="w-full rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 py-3.5 pl-10 pr-4 text-sm text-forest-900 dark:text-forest-100 outline-none placeholder:text-forest-400 focus:border-forest-500 dark:focus:border-forest-400 focus:shadow-lg focus:shadow-forest-500/10 dark:focus:shadow-forest-400/10 focus:scale-[1.01] transition-all duration-200"
          />
          {search && (
            <button onClick={() => setSearch("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-forest-400 hover:text-forest-700">
              <X size={15} />
            </button>
          )}
        </div>

        {/* Sort + filter toggle row */}
        <div className="flex items-center justify-between gap-3 mb-4">
          {/* Sort dropdown */}
          <div className="flex items-center gap-2">
            <ArrowUpDown size={14} className="text-forest-400 shrink-0" />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="rounded-xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 px-3 py-2 text-sm text-forest-700 dark:text-forest-300 outline-none focus:border-forest-500 transition cursor-pointer"
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setFiltersOpen(!filtersOpen)}
              className="inline-flex items-center gap-2 rounded-xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 px-4 py-2.5 text-sm font-medium text-forest-700 dark:text-forest-300 lg:hidden"
            >
              <SlidersHorizontal size={15} />
              Filters
              {hasFilters && <span className="ml-1 h-2 w-2 rounded-full bg-gold-500" />}
            </button>
            {(hasFilters || sort !== "default") && (
              <button onClick={clearFilters} className="text-sm text-forest-500 dark:text-forest-400 hover:text-forest-800 dark:hover:text-white transition">
                Clear all
              </button>
            )}
          </div>
        </div>

        <div className="flex gap-6">

          {/* Mobile filter drawer — full screen overlay */}
          {filtersOpen && (
            <div
              className="fixed inset-0 z-50 lg:hidden"
              onClick={() => setFiltersOpen(false)}
            >
              {/* Backdrop */}
              <div className="absolute inset-0 bg-forest-950/50 backdrop-blur-sm" />

              {/* Drawer */}
              <div
                className="absolute left-0 top-0 bottom-0 w-72 bg-cream dark:bg-forest-950 shadow-2xl flex flex-col animate-[slideInLeft_0.3s_ease]"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Drawer header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-forest-200 dark:border-forest-800">
                  <p className="font-semibold text-forest-900 dark:text-forest-50">Filters</p>
                  <button
                    onClick={() => setFiltersOpen(false)}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-forest-200 dark:border-forest-700 text-forest-500 dark:text-forest-400 hover:bg-forest-100 dark:hover:bg-forest-800 transition"
                  >
                    <X size={15} />
                  </button>
                </div>

                {/* Filter options */}
                <div className="flex-1 overflow-y-auto px-5 py-4 space-y-5">
                  {[
                    { label: "Field of study", value: field,    setter: setField,    options: FIELDS },
                    { label: "Funder type",    value: type,     setter: setType,     options: TYPES },
                    { label: "Study level",    value: level,    setter: setLevel,    options: LEVELS },
                    { label: "Province",       value: province, setter: setProvince, options: PROVINCES },
                  ].map((f) => (
                    <div key={f.label}>
                      <label className="block text-xs font-medium text-forest-500 dark:text-forest-400 mb-1.5 uppercase tracking-wider">{f.label}</label>
                      <select value={f.value} onChange={(e) => f.setter(e.target.value)} className={selectClass}>
                        {f.options.map((o) => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </div>
                  ))}
                </div>

                {/* Drawer footer */}
                <div className="px-5 py-4 border-t border-forest-200 dark:border-forest-800 flex gap-3">
                  <button
                    onClick={() => { clearFilters(); setFiltersOpen(false); }}
                    className="flex-1 rounded-xl border border-forest-200 dark:border-forest-700 py-2.5 text-sm font-medium text-forest-600 dark:text-forest-300 hover:bg-forest-100 dark:hover:bg-forest-800 transition"
                  >
                    Clear all
                  </button>
                  <button
                    onClick={() => setFiltersOpen(false)}
                    className="flex-1 rounded-xl bg-forest-600 dark:bg-forest-500 py-2.5 text-sm font-medium text-white hover:bg-forest-700 transition"
                  >
                    Show results
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Desktop sidebar — always visible */}
          <aside className="hidden lg:block shrink-0 w-56 space-y-4">
            <div className="rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 p-4 space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-forest-800 dark:text-forest-200">Filters</p>
                {hasFilters && (
                  <button onClick={clearFilters} className="text-xs text-forest-500 hover:text-forest-800 dark:hover:text-white transition">Clear</button>
                )}
              </div>
              {[
                { label: "Field of study", value: field,    setter: setField,    options: FIELDS },
                { label: "Funder type",    value: type,     setter: setType,     options: TYPES },
                { label: "Study level",    value: level,    setter: setLevel,    options: LEVELS },
                { label: "Province",       value: province, setter: setProvince, options: PROVINCES },
              ].map((f) => (
                <div key={f.label}>
                  <label className="block text-xs font-medium text-forest-500 dark:text-forest-400 mb-1.5">{f.label}</label>
                  <select value={f.value} onChange={(e) => f.setter(e.target.value)} className={selectClass}>
                    {f.options.map((o) => <option key={o} value={o}>{o}</option>)}
                  </select>
                </div>
              ))}
            </div>
          </aside>

          {/* Results */}
          <div className="flex-1 min-w-0">

            {/* Loading skeletons — card shaped */}
            {loading && (
              <div className="grid gap-4 sm:grid-cols-2">
                {[1,2,3,4,5,6].map((i) => (
                  <div key={i} className="rounded-2xl border border-forest-100 dark:border-forest-800 bg-white dark:bg-forest-900 p-5">
                    {/* Badges row */}
                    <div className="flex gap-2 mb-3">
                      <div className="h-5 w-20 rounded-full bg-forest-100 dark:bg-forest-800 animate-pulse" />
                      <div className="h-5 w-16 rounded-full bg-forest-100 dark:bg-forest-800 animate-pulse" />
                    </div>
                    {/* Title */}
                    <div className="h-4 w-3/4 rounded-lg bg-forest-100 dark:bg-forest-800 animate-pulse mb-2" />
                    <div className="h-3 w-1/2 rounded-lg bg-forest-100 dark:bg-forest-800 animate-pulse" />
                    {/* Meta grid */}
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      {[1,2,3,4].map((j) => (
                        <div key={j} className="h-3 w-full rounded-lg bg-forest-100 dark:bg-forest-800 animate-pulse" />
                      ))}
                    </div>
                    {/* Value box */}
                    <div className="mt-4 h-12 rounded-xl bg-forest-100 dark:bg-forest-800 animate-pulse" />
                    {/* Link */}
                    <div className="mt-5 h-3 w-24 rounded-lg bg-forest-100 dark:bg-forest-800 animate-pulse" />
                  </div>
                ))}
              </div>
            )}

            {/* Error */}
            {error && (
              <div className="rounded-2xl border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-900/20 p-8 text-center">
                <p className="font-semibold text-red-700 dark:text-red-400">Could not load bursaries</p>
                <p className="mt-1 text-sm text-red-600 dark:text-red-300">{error}</p>
                <button onClick={() => window.location.reload()} className="mt-4 inline-flex items-center gap-2 rounded-xl bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 transition">
                  Try again
                </button>
              </div>
            )}

            {/* Empty sheet — no bursaries at all */}
            {!loading && !error && bursaries.length === 0 && (
              <EmptyState variant="empty" />
            )}

            {/* No results after filtering */}
            {!loading && !error && bursaries.length > 0 && filtered.length === 0 && (
              <EmptyState variant="no-results" onClear={clearFilters} />
            )}

            {/* Results */}
            {!loading && !error && filtered.length > 0 && (
              <div className="grid gap-4 sm:grid-cols-2">
                {filtered.map((b, i) => <BursaryCard key={b.id || i} bursary={b} index={i} />)}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
