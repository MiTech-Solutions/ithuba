import { Helmet } from "react-helmet-async";
import { useState } from "react";
import { Copy, Check, ExternalLink } from "lucide-react";

const BASE_URL = "https://ithuba.app/api/bursaries";

const ENDPOINTS = [
  {
    title: "All bursaries",
    description: "Returns all published bursaries in the directory.",
    url: BASE_URL,
    example: `{
  "meta": {
    "total": 20,
    "count": 20,
    "limit": 100,
    "offset": 0,
    "source": "Ithuba Bursary Directory — https://ithuba.app",
    "docs": "https://ithuba.app/api-docs"
  },
  "data": [
    {
      "id": "1",
      "name": "Allan Gray Orbis Foundation Bursary",
      "funder": "Allan Gray Orbis Foundation",
      "funder_type": "ngo",
      "field_of_study": "Business",
      "study_level": "Undergraduate",
      "province": "National",
      "value": "Full tuition, accommodation, meals & stipend",
      "deadline": "31 March 2027",
      "description": "...",
      "requirements": "...",
      "apply_url": "https://www.allangrayorbis.org/bursary",
      "featured": "true",
      "slug": "allan-gray-orbis-foundation-bursary",
      "url": "https://ithuba.app/bursaries/allan-gray-orbis-foundation-bursary"
    }
  ]
}`,
  },
  {
    title: "Filter by funder type",
    description: "Returns bursaries filtered by funder type. Accepted values: government, corporate, ngo.",
    url: `${BASE_URL}?type=government`,
    example: `GET /api/bursaries?type=government
GET /api/bursaries?type=corporate
GET /api/bursaries?type=ngo`,
  },
  {
    title: "Filter by field of study",
    description: "Returns bursaries matching a field of study. Partial matches are supported.",
    url: `${BASE_URL}?field=engineering`,
    example: `GET /api/bursaries?field=engineering
GET /api/bursaries?field=finance
GET /api/bursaries?field=medicine
GET /api/bursaries?field=it`,
  },
  {
    title: "Filter by province",
    description: "Returns bursaries for a specific province. National bursaries are always included.",
    url: `${BASE_URL}?province=gauteng`,
    example: `GET /api/bursaries?province=gauteng
GET /api/bursaries?province=western-cape
GET /api/bursaries?province=kwazulu-natal`,
  },
  {
    title: "Featured bursaries only",
    description: "Returns only featured/highlighted bursaries.",
    url: `${BASE_URL}?featured=true`,
    example: `GET /api/bursaries?featured=true`,
  },
  {
    title: "Search",
    description: "Full-text search across bursary name, funder, field, and description.",
    url: `${BASE_URL}?search=eskom`,
    example: `GET /api/bursaries?search=eskom
GET /api/bursaries?search=engineering`,
  },
  {
    title: "Combine filters",
    description: "Multiple filters can be combined in a single request.",
    url: `${BASE_URL}?type=corporate&field=engineering`,
    example: `GET /api/bursaries?type=corporate&field=engineering
GET /api/bursaries?field=finance&province=gauteng
GET /api/bursaries?type=government&featured=true`,
  },
  {
    title: "Pagination",
    description: "Use limit and offset to paginate results. Maximum limit is 100.",
    url: `${BASE_URL}?limit=10&offset=0`,
    example: `GET /api/bursaries?limit=10&offset=0   // page 1
GET /api/bursaries?limit=10&offset=10  // page 2
GET /api/bursaries?limit=10&offset=20  // page 3`,
  },
];

const PARAMS = [
  { param: "type",     type: "string",  values: "government, corporate, ngo",             description: "Filter by funder type" },
  { param: "field",    type: "string",  values: "engineering, finance, it, medicine, ...", description: "Filter by field of study (partial match)" },
  { param: "province", type: "string",  values: "gauteng, western-cape, kwazulu-natal, ...", description: "Filter by province (national always included)" },
  { param: "level",    type: "string",  values: "undergraduate, postgraduate, tvet, ...",  description: "Filter by study level" },
  { param: "featured", type: "boolean", values: "true",                                   description: "Return featured bursaries only" },
  { param: "search",   type: "string",  values: "any keyword",                            description: "Full-text search across key fields" },
  { param: "limit",    type: "integer", values: "1–100 (default: 100)",                   description: "Number of results to return" },
  { param: "offset",   type: "integer", values: "0+ (default: 0)",                        description: "Number of results to skip (for pagination)" },
];

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);
  async function copy() {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }
  return (
    <button
      onClick={copy}
      className="inline-flex items-center gap-1.5 rounded-lg border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 px-3 py-1.5 text-xs font-medium text-forest-600 dark:text-forest-300 transition hover:border-forest-400 dark:hover:border-forest-500"
    >
      {copied ? <><Check size={12} className="text-forest-500" /> Copied</> : <><Copy size={12} /> Copy</>}
    </button>
  );
}

export default function ApiDocs() {
  return (
    <>
      <Helmet>
        <title>Bursary API Docs — Ithuba</title>
        <meta
          name="description"
          content="Free public API for South African bursary data. Filter by funder type, field of study, province, and more. JSON responses, no auth required."
        />
        <link rel="canonical" href="https://ithuba.app/api-docs" />
      </Helmet>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-forest-500 dark:text-forest-400">
            Developer docs
          </p>
          <h1 className="mt-2 font-display text-3xl font-semibold text-forest-900 dark:text-forest-50 sm:text-4xl">
            Bursary API
          </h1>
          <p className="mt-3 text-sm leading-7 text-forest-600 dark:text-forest-400 max-w-2xl">
            Free, public access to Ithuba's South African bursary data. No
            authentication required. Returns JSON. Updated whenever new bursaries
            are added to the directory.
          </p>

          {/* Base URL */}
          <div className="mt-6 flex items-center gap-3 rounded-2xl border border-forest-200 dark:border-forest-700 bg-forest-50 dark:bg-forest-900 px-4 py-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-forest-400 dark:text-forest-500 shrink-0">
              Base URL
            </span>
            <code className="flex-1 text-sm font-mono text-forest-800 dark:text-forest-100 break-all">
              {BASE_URL}
            </code>
            <CopyButton text={BASE_URL} />
          </div>

          {/* Quick info */}
          <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { label: "Auth",     value: "None required" },
              { label: "Method",   value: "GET only" },
              { label: "Format",   value: "JSON" },
              { label: "CORS",     value: "Open (*)" },
            ].map((item) => (
              <div key={item.label} className="rounded-xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 p-3">
                <p className="text-xs text-forest-500 dark:text-forest-400">{item.label}</p>
                <p className="mt-1 text-sm font-medium text-forest-900 dark:text-forest-100">{item.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Query parameters table */}
        <section className="mb-12">
          <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-4">
            Query parameters
          </h2>
          <div className="rounded-2xl border border-forest-200 dark:border-forest-700 overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-forest-200 dark:border-forest-700 bg-forest-50 dark:bg-forest-900">
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-forest-500 dark:text-forest-400">Parameter</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-forest-500 dark:text-forest-400 hidden sm:table-cell">Type</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-forest-500 dark:text-forest-400">Values</th>
                  <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-forest-500 dark:text-forest-400 hidden md:table-cell">Description</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-forest-900 divide-y divide-forest-100 dark:divide-forest-800">
                {PARAMS.map((p) => (
                  <tr key={p.param}>
                    <td className="px-4 py-3">
                      <code className="rounded bg-forest-100 dark:bg-forest-800 px-1.5 py-0.5 text-xs font-mono text-forest-800 dark:text-forest-200">
                        {p.param}
                      </code>
                    </td>
                    <td className="px-4 py-3 text-forest-500 dark:text-forest-400 hidden sm:table-cell text-xs">{p.type}</td>
                    <td className="px-4 py-3 text-forest-600 dark:text-forest-300 text-xs">{p.values}</td>
                    <td className="px-4 py-3 text-forest-500 dark:text-forest-400 hidden md:table-cell text-xs">{p.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Endpoints */}
        <section className="space-y-8">
          <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50">
            Examples
          </h2>

          {ENDPOINTS.map((ep) => (
            <div key={ep.title} className="rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 overflow-hidden">
              {/* Endpoint header */}
              <div className="px-5 py-4 border-b border-forest-100 dark:border-forest-800">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-forest-900 dark:text-forest-50">{ep.title}</h3>
                    <p className="mt-1 text-xs leading-5 text-forest-500 dark:text-forest-400">{ep.description}</p>
                  </div>
                  <a
                    href={ep.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="shrink-0 inline-flex items-center gap-1 text-xs font-medium text-forest-600 dark:text-forest-400 hover:text-forest-900 dark:hover:text-white transition"
                  >
                    Try it <ExternalLink size={11} />
                  </a>
                </div>
              </div>

              {/* Code block */}
              <div className="relative bg-forest-950 dark:bg-forest-950 p-4">
                <div className="absolute top-3 right-3">
                  <CopyButton text={ep.example} />
                </div>
                <pre className="text-xs font-mono text-forest-200 overflow-x-auto leading-6 pr-20">
                  {ep.example}
                </pre>
              </div>
            </div>
          ))}
        </section>

        {/* Attribution */}
        <div className="mt-12 rounded-2xl border border-forest-200 dark:border-forest-700 bg-forest-50 dark:bg-forest-900/60 p-6">
          <h2 className="font-semibold text-forest-900 dark:text-forest-50 mb-2">Attribution</h2>
          <p className="text-sm leading-7 text-forest-600 dark:text-forest-400">
            This API is free to use. If you build something with it, we'd love
            to know — drop us a message at{" "}
            <a href="mailto:info@ithuba.app" className="text-forest-700 dark:text-forest-200 underline underline-offset-2">
              info@ithuba.app
            </a>
            . A link back to{" "}
            <a href="https://ithuba.app" className="text-forest-700 dark:text-forest-200 underline underline-offset-2">
              ithuba.app
            </a>{" "}
            is appreciated but not required.
          </p>
        </div>
      </div>
    </>
  );
}
