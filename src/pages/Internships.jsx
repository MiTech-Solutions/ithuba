import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { useInternships } from "../hooks/useInternships";
import InternshipCard from "../components/internships/InternshipCard";
import EmptyState from "../components/common/EmptyState";

const OG_IMG = "https://i.postimg.cc/d3T437Xk/45C7EB18-47F5-4CD3-9509-3A1092AF188E.png";

const TYPES      = ["Graduate", "Student", "Learnership", "Government"];
const FIELDS     = ["Engineering", "Finance", "IT", "Medicine", "Business", "Law", "Teaching", "Science"];
const PROVINCES  = ["National", "Gauteng", "Western Cape", "KwaZulu-Natal", "Eastern Cape"];

export default function Internships() {
  const { internships, loading } = useInternships();

  const [search,   setSearch]   = useState("");
  const [type,     setType]     = useState("");
  const [field,    setField]    = useState("");
  const [province, setProvince] = useState("");
  const [sidebarOpen, setSidebar] = useState(false);

  const filtered = useMemo(() => {
    return internships.filter((i) => {
      const q = search.toLowerCase();
      const matchSearch   = !q || i.name?.toLowerCase().includes(q) || i.company?.toLowerCase().includes(q) || i.description?.toLowerCase().includes(q);
      const matchType     = !type     || i.type?.toLowerCase() === type.toLowerCase();
      const matchField    = !field    || i.field_of_study?.toLowerCase().includes(field.toLowerCase()) || i.field_of_study?.toLowerCase() === "all fields";
      const matchProvince = !province || i.province?.toLowerCase().includes(province.toLowerCase()) || i.province?.toLowerCase() === "national";
      return matchSearch && matchType && matchField && matchProvince;
    });
  }, [internships, search, type, field, province]);

  const hasFilters = search || type || field || province;

  function clearAll() {
    setSearch(""); setType(""); setField(""); setProvince("");
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Internships in South Africa",
    "description": "Graduate internships, student internships, learnerships, and government internships in South Africa.",
    "url": "https://ithubahub.co.za/internships",
    "numberOfItems": filtered.length,
  };

  return (
    <>
      <Helmet>
        <title>Internships in South Africa 2026 | Ithuba</title>
        <meta name="description" content="Browse graduate internships, student internships, learnerships, and government internships in South Africa. Search by field, type, and province." />
        <link rel="canonical" href="https://ithubahub.co.za/internships" />
        <meta property="og:title" content="Internships in South Africa 2026 | Ithuba" />
        <meta property="og:description" content="Browse graduate internships, student internships, learnerships, and government internships in South Africa." />
        <meta property="og:url" content="https://ithubahub.co.za/internships" />
        <meta property="og:image" content={OG_IMG} />
        <meta name="twitter:title" content="Internships in South Africa 2026 | Ithuba" />
        <meta name="twitter:description" content="Browse graduate internships, student internships, learnerships, and government internships in South Africa." />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-forest-500 dark:text-forest-400">Opportunities</p>
          <h1 className="mt-2 font-display text-3xl font-semibold text-forest-900 dark:text-forest-50 sm:text-4xl">
            Internships in South Africa
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-7 text-forest-600 dark:text-forest-400">
            Graduate internships, student vacation work, learnerships, and government internship programmes. Search by type, field, or province.
          </p>
        </div>

        {/* Search bar */}
        <div className="relative mb-4">
          <Search size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-forest-400 dark:text-forest-500 pointer-events-none" />
          <input
            type="text"
            placeholder="Search internships by name, company, or field..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 py-3 pl-10 pr-4 text-sm text-forest-900 dark:text-forest-50 placeholder:text-forest-400 dark:placeholder:text-forest-500 focus:border-forest-400 dark:focus:border-forest-500 focus:outline-none focus:ring-2 focus:ring-forest-200 dark:focus:ring-forest-800 transition"
          />
        </div>

        <div className="flex gap-6">

          {/* Sidebar — desktop */}
          <aside className="hidden lg:block w-56 shrink-0">
            <div className="sticky top-24 space-y-6">

              {hasFilters && (
                <button onClick={clearAll} className="flex items-center gap-1.5 text-xs font-medium text-forest-500 dark:text-forest-400 hover:text-forest-900 dark:hover:text-white transition">
                  <X size={12} /> Clear all filters
                </button>
              )}

              {/* Type */}
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-forest-500 dark:text-forest-400">Type</p>
                <div className="space-y-1">
                  {TYPES.map((t) => (
                    <button key={t} onClick={() => setType(type === t ? "" : t)}
                      className={`block w-full rounded-xl px-3 py-2 text-left text-sm transition ${type === t ? "bg-forest-100 dark:bg-forest-800 font-medium text-forest-900 dark:text-forest-50" : "text-forest-600 dark:text-forest-400 hover:bg-forest-50 dark:hover:bg-forest-800"}`}>
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              {/* Field */}
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-forest-500 dark:text-forest-400">Field of study</p>
                <div className="space-y-1">
                  {FIELDS.map((f) => (
                    <button key={f} onClick={() => setField(field === f ? "" : f)}
                      className={`block w-full rounded-xl px-3 py-2 text-left text-sm transition ${field === f ? "bg-forest-100 dark:bg-forest-800 font-medium text-forest-900 dark:text-forest-50" : "text-forest-600 dark:text-forest-400 hover:bg-forest-50 dark:hover:bg-forest-800"}`}>
                      {f}
                    </button>
                  ))}
                </div>
              </div>

              {/* Province */}
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-forest-500 dark:text-forest-400">Province</p>
                <div className="space-y-1">
                  {PROVINCES.map((p) => (
                    <button key={p} onClick={() => setProvince(province === p ? "" : p)}
                      className={`block w-full rounded-xl px-3 py-2 text-left text-sm transition ${province === p ? "bg-forest-100 dark:bg-forest-800 font-medium text-forest-900 dark:text-forest-50" : "text-forest-600 dark:text-forest-400 hover:bg-forest-50 dark:hover:bg-forest-800"}`}>
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <div className="flex-1 min-w-0">

            {/* Mobile filter bar */}
            <div className="flex items-center justify-between mb-4 lg:hidden">
              <p className="text-sm text-forest-500 dark:text-forest-400">
                {loading ? "Loading..." : `${filtered.length} internship${filtered.length !== 1 ? "s" : ""}`}
              </p>
              <button onClick={() => setSidebar(true)} className="flex items-center gap-2 rounded-xl border border-forest-200 dark:border-forest-700 px-3 py-2 text-sm text-forest-600 dark:text-forest-300 hover:border-forest-400 transition">
                <SlidersHorizontal size={14} /> Filters {hasFilters && <span className="rounded-full bg-forest-600 text-white text-xs px-1.5">!</span>}
              </button>
            </div>

            {/* Mobile sidebar drawer */}
            {sidebarOpen && (
              <div className="fixed inset-0 z-50 lg:hidden">
                <div className="absolute inset-0 bg-black/40" onClick={() => setSidebar(false)} />
                <div className="absolute right-0 top-0 bottom-0 w-72 bg-white dark:bg-forest-950 p-6 overflow-y-auto">
                  <div className="flex items-center justify-between mb-6">
                    <p className="font-semibold text-forest-900 dark:text-forest-50">Filters</p>
                    <button onClick={() => setSidebar(false)}><X size={18} className="text-forest-500" /></button>
                  </div>
                  {hasFilters && (
                    <button onClick={() => { clearAll(); setSidebar(false); }} className="mb-4 text-xs font-medium text-forest-500 hover:text-forest-900 transition flex items-center gap-1">
                      <X size={11} /> Clear all
                    </button>
                  )}
                  {[{ label: "Type", values: TYPES, state: type, set: setType }, { label: "Field of study", values: FIELDS, state: field, set: setField }, { label: "Province", values: PROVINCES, state: province, set: setProvince }].map(({ label, values, state, set }) => (
                    <div key={label} className="mb-6">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-forest-500 dark:text-forest-400">{label}</p>
                      <div className="space-y-1">
                        {values.map((v) => (
                          <button key={v} onClick={() => { set(state === v ? "" : v); setSidebar(false); }}
                            className={`block w-full rounded-xl px-3 py-2 text-left text-sm transition ${state === v ? "bg-forest-100 dark:bg-forest-800 font-medium text-forest-900 dark:text-forest-50" : "text-forest-600 dark:text-forest-400 hover:bg-forest-50 dark:hover:bg-forest-800"}`}>
                            {v}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Results count — desktop */}
            <div className="hidden lg:flex items-center justify-between mb-5">
              <p className="text-sm text-forest-500 dark:text-forest-400">
                {loading ? "Loading..." : `${filtered.length} internship${filtered.length !== 1 ? "s" : ""}${hasFilters ? " found" : " available"}`}
              </p>
              {hasFilters && (
                <button onClick={clearAll} className="flex items-center gap-1.5 text-xs font-medium text-forest-500 hover:text-forest-900 dark:hover:text-white transition">
                  <X size={12} /> Clear filters
                </button>
              )}
            </div>

            {/* Loading skeletons */}
            {loading && (
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {[1,2,3,4,5,6].map((i) => <div key={i} className="h-52 rounded-2xl bg-forest-100 dark:bg-forest-800 animate-pulse" />)}
              </div>
            )}

            {/* Empty state */}
            {!loading && filtered.length === 0 && (
              <EmptyState variant="no-results" onClear={clearAll} />
            )}

            {/* Grid */}
            {!loading && filtered.length > 0 && (
              <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((i, idx) => (
                  <InternshipCard key={i.name || idx} internship={i} index={idx} />
                ))}
              </div>
            )}

            {/* Empty sheet state */}
            {!loading && internships.length === 0 && (
              <div className="mt-10 rounded-2xl border border-forest-200 dark:border-forest-700 bg-forest-50 dark:bg-forest-900 p-10 text-center">
                <p className="font-display text-lg font-semibold text-forest-900 dark:text-forest-50 mb-2">Internships coming soon</p>
                <p className="text-sm text-forest-500 dark:text-forest-400 max-w-sm mx-auto">We're building our internship directory. Check back soon or browse our bursary and scholarship listings in the meantime.</p>
                <div className="mt-5 flex gap-3 justify-center">
                  <Link to="/bursaries" className="inline-flex items-center gap-2 rounded-xl bg-forest-600 dark:bg-forest-500 px-5 py-2.5 text-sm font-medium text-white hover:bg-forest-700 transition">Browse bursaries</Link>
                  <Link to="/scholarships" className="inline-flex items-center gap-2 rounded-xl border border-forest-300 dark:border-forest-700 px-5 py-2.5 text-sm font-medium text-forest-700 dark:text-forest-300 hover:bg-forest-100 dark:hover:bg-forest-800 transition">Browse scholarships</Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
