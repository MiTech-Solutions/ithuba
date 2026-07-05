import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Search, SlidersHorizontal, X, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useBursaries } from "../hooks/useBursaries";
import BursaryCard from "../components/bursaries/BursaryCard";
import { slugify } from "../utils/slug";

const FIELDS    = ["All fields", "Engineering", "Medicine", "Law", "Business", "IT", "Teaching", "Science", "Arts", "Agriculture", "Social Work", "Finance", "Other"];
const TYPES     = ["All types", "Government", "Corporate", "NGO"];
const LEVELS    = ["All levels", "Undergraduate", "Postgraduate", "TVET", "Masters", "PhD"];
const PROVINCES = ["All provinces", "National", "Gauteng", "Western Cape", "KwaZulu-Natal", "Eastern Cape", "Limpopo", "Mpumalanga", "North West", "Free State", "Northern Cape"];

const QUICK_CATEGORIES = [
  { label: "Government",   path: "/bursaries/type/government" },
  { label: "Corporate",    path: "/bursaries/type/corporate" },
  { label: "Engineering",  path: "/bursaries/field/engineering" },
  { label: "Finance",      path: "/bursaries/field/finance" },
  { label: "IT",           path: "/bursaries/field/it" },
  { label: "Medicine",     path: "/bursaries/field/medicine" },
  { label: "Gauteng",      path: "/bursaries/province/gauteng" },
  { label: "All categories", path: "/categories" },
];

export default function Bursaries() {
  const { bursaries, loading, error } = useBursaries();
  const [search, setSearch]           = useState("");
  const [field, setField]             = useState("All fields");
  const [type, setType]               = useState("All types");
  const [level, setLevel]             = useState("All levels");
  const [province, setProvince]       = useState("All provinces");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    return bursaries.filter((b) => {
      const q           = search.toLowerCase();
      const matchSearch = !q || b.name?.toLowerCase().includes(q) || b.funder?.toLowerCase().includes(q) || b.field_of_study?.toLowerCase().includes(q) || b.description?.toLowerCase().includes(q);
      const matchField  = field === "All fields"    || b.field_of_study?.toLowerCase().includes(field.toLowerCase());
      const matchType   = type === "All types"      || b.funder_type?.toLowerCase() === type.toLowerCase();
      const matchLevel  = level === "All levels"    || b.study_level?.toLowerCase().includes(level.toLowerCase());
      const matchProv   = province === "All provinces" || b.province?.toLowerCase().includes(province.toLowerCase()) || b.province?.toLowerCase() === "national";
      return matchSearch && matchField && matchType && matchLevel && matchProv;
    });
  }, [bursaries, search, field, type, level, province]);

  const hasFilters = field !== "All fields" || type !== "All types" || level !== "All levels" || province !== "All provinces";

  function clearFilters() {
    setField("All fields"); setType("All types"); setLevel("All levels"); setProvince("All provinces"); setSearch("");
  }

  // JSON-LD ItemList for all bursaries
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "South African Bursaries — Ithuba Directory",
    "description": "A directory of bursaries available to South African students from government, corporate, and NGO funders.",
    "url": "https://ithuba.app/bursaries",
    "numberOfItems": bursaries.length,
    "itemListElement": bursaries.map((b, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": b.name,
      "url": `https://ithuba.app/bursaries/${slugify(b.name)}`,
    })),
  };

  const selectClass = "w-full rounded-xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 px-3 py-2.5 text-sm text-forest-800 dark:text-forest-200 outline-none focus:border-forest-500 dark:focus:border-forest-400 transition cursor-pointer";

  return (
    <>
      <Helmet>
        <title>Browse Bursaries South Africa 2025/26 | Ithuba</title>
        <meta name="description" content="Browse and search South African bursaries by field of study, province, funder type, and study level. Find government, corporate, and NGO funding opportunities." />
        <link rel="canonical" href="https://ithuba.app/bursaries" />
        <meta property="og:title" content="Browse Bursaries South Africa | Ithuba" />
        <meta property="og:description" content="Browse and search South African bursaries by field of study, province, funder type, and study level." />
        <meta property="og:url" content="https://ithuba.app/bursaries" />
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
            {loading ? "Loading..." : `${filtered.length} bursaries found`}
            {hasFilters && ` · filtered from ${bursaries.length} total`}
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
            className="w-full rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 py-3.5 pl-10 pr-4 text-sm text-forest-900 dark:text-forest-100 outline-none placeholder:text-forest-400 focus:border-forest-500 dark:focus:border-forest-400 transition"
          />
          {search && (
            <button onClick={() => setSearch("")} className="absolute right-4 top-1/2 -translate-y-1/2 text-forest-400 hover:text-forest-700">
              <X size={15} />
            </button>
          )}
        </div>

        {/* Filter toggle (mobile) */}
        <div className="flex items-center justify-between mb-4 lg:hidden">
          <button
            onClick={() => setFiltersOpen(!filtersOpen)}
            className="inline-flex items-center gap-2 rounded-xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 px-4 py-2.5 text-sm font-medium text-forest-700 dark:text-forest-300"
          >
            <SlidersHorizontal size={15} />
            Filters
            {hasFilters && <span className="ml-1 h-2 w-2 rounded-full bg-gold-500" />}
          </button>
          {hasFilters && (
            <button onClick={clearFilters} className="text-sm text-forest-500 dark:text-forest-400 hover:text-forest-800 dark:hover:text-white transition">
              Clear all
            </button>
          )}
        </div>

        <div className="flex gap-6">
          {/* Sidebar filters */}
          <aside className={`shrink-0 w-56 space-y-4 ${filtersOpen ? "block" : "hidden"} lg:block`}>
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
            {loading && (
              <div className="grid gap-4 sm:grid-cols-2">
                {[1,2,3,4,5,6].map((i) => <div key={i} className="h-48 rounded-2xl bg-forest-100 dark:bg-forest-800 animate-pulse" />)}
              </div>
            )}
            {error && (
              <div className="rounded-2xl border border-red-200 dark:border-red-900 bg-red-50 dark:bg-red-900/20 p-6 text-center">
                <p className="font-medium text-red-700 dark:text-red-400">Could not load bursaries</p>
                <p className="mt-1 text-sm text-red-600 dark:text-red-300">{error}</p>
              </div>
            )}
            {!loading && !error && filtered.length === 0 && (
              <div className="rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 p-10 text-center">
                <p className="font-semibold text-forest-800 dark:text-forest-200">No bursaries match your filters</p>
                <p className="mt-2 text-sm text-forest-500 dark:text-forest-400">Try adjusting your search or clearing the filters.</p>
                <button onClick={clearFilters} className="mt-4 inline-flex items-center gap-1.5 rounded-xl bg-forest-600 px-4 py-2 text-sm font-medium text-white hover:bg-forest-700 transition">
                  <X size={14} /> Clear filters
                </button>
              </div>
            )}
            {!loading && !error && filtered.length > 0 && (
              <div className="grid gap-4 sm:grid-cols-2">
                {filtered.map((b, i) => <BursaryCard key={b.id || i} bursary={b} />)}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
