import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Clock, ExternalLink } from "lucide-react";
import { useBursaries } from "../../hooks/useBursaries";
import { daysUntil, deadlineBadge } from "../../utils/deadline";
import { slugify } from "../../utils/slug";

const OG_IMG = "https://i.postimg.cc/d3T437Xk/45C7EB18-47F5-4CD3-9509-3A1092AF188E.png";

export default function ArticleTop10Bursaries() {
  const { bursaries, loading } = useBursaries();

  // Filter to open bursaries (deadline in future or no deadline), sort by soonest closing, take top 10
  const top10 = bursaries
    .filter((b) => {
      const days = daysUntil(b.deadline);
      return days === null || days >= 0;
    })
    .sort((a, b) => {
      const dA = daysUntil(a.deadline);
      const dB = daysUntil(b.deadline);
      if (dA === null && dB === null) return 0;
      if (dA === null) return 1;
      if (dB === null) return -1;
      return dA - dB;
    })
    .slice(0, 10);

  return (
    <>
      <Helmet>
        <title>Top 10 Bursaries Open Right Now in South Africa | Ithuba</title>
        <meta
          name="description"
          content="The top 10 South African bursaries currently open for applications — updated live from our directory. Find open bursaries with upcoming deadlines and apply today."
        />
        <link rel="canonical" href="https://ithubahub.co.za/articles/top-10-bursaries-open-now" />
        <meta property="og:title" content="Top 10 Bursaries Open Right Now in South Africa | Ithuba" />
        <meta property="og:description" content="Live list of the top 10 South African bursaries currently open for applications. Updated automatically from our directory." />
        <meta property="og:url" content="https://ithubahub.co.za/articles/top-10-bursaries-open-now" />
        <meta property="og:image" content={OG_IMG} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "headline": "Top 10 Bursaries Open Right Now in South Africa",
              "description": "A live list of the top 10 South African bursaries currently open for applications.",
              "url": "https://ithubahub.co.za/articles/top-10-bursaries-open-now",
              "publisher": { "@type": "Organization", "name": "Ithuba", "url": "https://ithubahub.co.za" },
              "datePublished": "2026-07-20",
              "dateModified": "2026-07-20",
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ithubahub.co.za" },
                { "@type": "ListItem", "position": 2, "name": "Articles", "item": "https://ithubahub.co.za/articles" },
                { "@type": "ListItem", "position": 3, "name": "Top 10 Bursaries Open Now", "item": "https://ithubahub.co.za/articles/top-10-bursaries-open-now" },
              ],
            },
          ],
        })}</script>
      </Helmet>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-forest-500 dark:text-forest-400">
          <Link to="/" className="hover:text-forest-800 dark:hover:text-white transition">Home</Link>
          <span>/</span>
          <Link to="/articles" className="hover:text-forest-800 dark:hover:text-white transition">Articles</Link>
          <span>/</span>
          <span className="text-forest-800 dark:text-forest-200 font-medium">Top 10 open bursaries</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center rounded-full bg-forest-100 dark:bg-forest-800 px-3 py-1 text-xs font-medium text-forest-600 dark:text-forest-300">Live List</span>
            <span className="inline-flex items-center gap-1.5 text-xs text-forest-400 dark:text-forest-500">
              <Clock size={12} /> Updated automatically from our directory
            </span>
          </div>
          <h1 className="font-display text-3xl font-semibold text-forest-900 dark:text-forest-50 sm:text-4xl leading-snug">
            Top 10 bursaries open right now in South Africa
          </h1>
          <p className="mt-4 text-sm leading-7 text-forest-600 dark:text-forest-400">
            This list is pulled live from the Ithuba bursary directory and sorted by closing date — bursaries closing soonest appear first. All entries below are currently open for applications.
          </p>
        </div>

        {/* Live bursary list */}
        {loading ? (
          <div className="space-y-4">
            {[1,2,3,4,5].map((i) => (
              <div key={i} className="h-24 rounded-2xl bg-forest-100 dark:bg-forest-800 animate-pulse" />
            ))}
          </div>
        ) : top10.length === 0 ? (
          <div className="rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 p-8 text-center">
            <p className="font-semibold text-forest-800 dark:text-forest-200">No open bursaries at this time</p>
            <p className="mt-2 text-sm text-forest-500 dark:text-forest-400">Check back soon — new bursaries are added regularly.</p>
            <Link to="/bursaries" className="mt-4 inline-flex items-center gap-2 rounded-xl bg-forest-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-forest-700 transition">
              Browse all bursaries <ArrowRight size={14} />
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {top10.map((bursary, i) => {
              const badge = deadlineBadge(bursary.deadline);
              const days  = daysUntil(bursary.deadline);
              return (
                <div
                  key={bursary.id || i}
                  className="group flex gap-4 rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 p-5 transition hover:border-forest-400 dark:hover:border-forest-500 hover:shadow-md"
                >
                  {/* Rank */}
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest-600 dark:bg-forest-500 text-white font-bold text-sm">
                    {i + 1}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      {bursary.funder_type && (
                        <span className="text-xs font-medium text-forest-500 dark:text-forest-400 capitalize">{bursary.funder_type}</span>
                      )}
                      {badge && (
                        <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs ${badge.classes}`}>
                          ⏱ {badge.label}
                        </span>
                      )}
                      {bursary.featured === "true" && (
                        <span className="inline-flex items-center rounded-full bg-gold-100 dark:bg-gold-900/40 px-2 py-0.5 text-xs font-medium border border-gold-200 dark:border-gold-800/50">
                          <span className="badge-shimmer">★ Featured</span>
                        </span>
                      )}
                    </div>
                    <h2 className="font-semibold text-forest-900 dark:text-forest-50 leading-snug">
                      {bursary.name}
                    </h2>
                    <p className="text-sm text-forest-500 dark:text-forest-400 mt-0.5">{bursary.funder}</p>
                    {bursary.value && (
                      <p className="text-xs text-forest-400 dark:text-forest-500 mt-1">{bursary.value}</p>
                    )}
                    {bursary.deadline && (
                      <p className="text-xs text-forest-400 dark:text-forest-500 mt-1">
                        Closes {bursary.deadline}
                        {days !== null && days <= 30 && ` — only ${days} day${days !== 1 ? "s" : ""} left`}
                      </p>
                    )}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col gap-2 shrink-0 justify-center">
                    <Link
                      to={`/bursaries/${slugify(bursary.name)}`}
                      className="inline-flex items-center gap-1 text-xs font-medium text-forest-600 dark:text-forest-400 hover:text-forest-900 dark:hover:text-white transition"
                    >
                      Details <ArrowRight size={11} />
                    </Link>
                    {bursary.apply_url && (
                      <a
                        href={bursary.apply_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-medium text-forest-600 dark:text-forest-400 hover:text-forest-900 dark:hover:text-white transition"
                      >
                        Apply <ExternalLink size={11} />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Note */}
        {!loading && top10.length > 0 && (
          <p className="mt-6 text-xs text-forest-400 dark:text-forest-500 text-center">
            Showing {top10.length} open bursaries sorted by closing date. Pulled live from the Ithuba directory.
          </p>
        )}

        {/* Body content */}
        <div className="mt-10 space-y-6 text-sm leading-7 text-forest-700 dark:text-forest-300">
          <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50">
            How to make the most of open bursaries
          </h2>
          <p>
            Seeing a bursary open is only the first step. The students who succeed are the ones who act immediately — not the ones who bookmark it and come back later. Bursary application volumes spike in the final two weeks before a deadline, and systems often crash on closing day.
          </p>
          <p>
            Start your application the same day you find an open bursary. Even if you can't finish it in one sitting, creating your account and filling in your personal details means you can't be caught out by a last-minute system failure.
          </p>

          <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50">
            Apply to multiple bursaries at once
          </h2>
          <p>
            There is no rule against applying for multiple bursaries simultaneously. In fact, it's strongly encouraged. Acceptance rates for competitive corporate bursaries can be below 5%. Applying to five or ten bursaries at once dramatically improves your chances of securing at least one offer.
          </p>
          <p>
            Keep a simple spreadsheet tracking each application — the funder, deadline, documents required, date submitted, and current status. It takes 10 minutes to set up and prevents you from missing a follow-up or accidentally submitting duplicate documents.
          </p>

          <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50">
            What to prepare before you start applying
          </h2>
          <p>
            Most bursary applications require the same core documents — certified copies of your ID and matric certificate, proof of registration or acceptance, proof of household income, a motivation letter, and two references. Get these ready once and reuse them across every application. The only document that needs to be tailored each time is your motivation letter.
          </p>
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link to="/bursaries" className="inline-flex items-center gap-2 rounded-xl bg-forest-600 dark:bg-forest-500 px-5 py-3 text-sm font-medium text-white hover:bg-forest-700 transition">
            Browse all bursaries <ArrowRight size={15} />
          </Link>
          <Link to="/guides/documents-you-need-before-applying" className="inline-flex items-center gap-2 rounded-xl border border-forest-300 dark:border-forest-700 px-5 py-3 text-sm font-medium text-forest-700 dark:text-forest-300 hover:bg-forest-100 dark:hover:bg-forest-800 transition">
            Documents checklist <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </>
  );
}
