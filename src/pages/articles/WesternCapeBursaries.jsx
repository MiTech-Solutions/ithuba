import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useBursaries } from "../../hooks/useBursaries";
import { slugify } from "../../utils/slug";
import { deadlineBadge, daysUntil } from "../../utils/deadline";

const OG_IMG = "https://i.postimg.cc/d3T437Xk/45C7EB18-47F5-4CD3-9509-3A1092AF188E.png";

export default function ArticleWesternCapeBursaries() {
  const { bursaries, loading } = useBursaries();

  const wcBursaries = bursaries
    .filter((b) => {
      const province = b.province?.toLowerCase() || "";
      return province.includes("western cape") || province === "national";
    })
    .sort((a, b) => {
      const dA = daysUntil(a.deadline);
      const dB = daysUntil(b.deadline);
      if (dA === null && dB === null) return 0;
      if (dA === null) return 1;
      if (dB === null) return -1;
      if (dA < 0 && dB >= 0) return 1;
      if (dB < 0 && dA >= 0) return -1;
      return dA - dB;
    })
    .slice(0, 10);

  return (
    <>
      <Helmet>
        <title>Bursaries in the Western Cape, South Africa — Complete List | Ithuba</title>
        <meta name="description" content="Find bursaries available to students in the Western Cape, South Africa. Provincial and national bursaries for Cape Town and surrounding areas — updated regularly." />
        <link rel="canonical" href="https://ithubahub.co.za/articles/bursaries-in-western-cape" />
        <meta property="og:title" content="Bursaries in the Western Cape, South Africa | Ithuba" />
        <meta property="og:description" content="Find bursaries for students in the Western Cape — provincial and national funding for Cape Town and surrounding areas." />
        <meta property="og:url" content="https://ithubahub.co.za/articles/bursaries-in-western-cape" />
        <meta property="og:image" content={OG_IMG} />
        <meta name="twitter:title" content="Bursaries in the Western Cape, South Africa | Ithuba" />
        <meta name="twitter:description" content="Find bursaries for students in the Western Cape — provincial and national funding updated regularly." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "headline": "Bursaries Available in the Western Cape — Complete List",
              "url": "https://ithubahub.co.za/articles/bursaries-in-western-cape",
              "publisher": { "@type": "Organization", "name": "Ithuba", "url": "https://ithubahub.co.za" },
              "datePublished": "2026-08-31",
              "dateModified": "2026-08-31",
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ithubahub.co.za" },
                { "@type": "ListItem", "position": 2, "name": "Articles", "item": "https://ithubahub.co.za/articles" },
                { "@type": "ListItem", "position": 3, "name": "Western Cape Bursaries", "item": "https://ithubahub.co.za/articles/bursaries-in-western-cape" },
              ],
            },
          ],
        })}</script>
      </Helmet>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <nav className="mb-8 flex items-center gap-2 text-sm text-forest-500 dark:text-forest-400">
          <Link to="/" className="hover:text-forest-800 dark:hover:text-white transition">Home</Link>
          <span>/</span>
          <Link to="/articles" className="hover:text-forest-800 dark:hover:text-white transition">Articles</Link>
          <span>/</span>
          <span className="text-forest-800 dark:text-forest-200 font-medium">Western Cape bursaries</span>
        </nav>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center rounded-full bg-forest-100 dark:bg-forest-800 px-3 py-1 text-xs font-medium text-forest-600 dark:text-forest-300">Province Guide</span>
            <span className="text-xs text-forest-400 dark:text-forest-500">Updated August 2026 · 6 min read</span>
          </div>
          <h1 className="font-display text-3xl font-semibold text-forest-900 dark:text-forest-50 sm:text-4xl leading-snug">
            Bursaries available in the Western Cape — complete list
          </h1>
          <p className="mt-4 text-sm leading-7 text-forest-600 dark:text-forest-400">
            The Western Cape is South Africa's second-largest economic centre and home to a growing technology and financial services sector, a major agricultural industry, and one of the country's strongest public healthcare systems. Students in Cape Town, Stellenbosch, George, and surrounding areas have access to both Western Cape-specific and national bursaries.
          </p>
        </div>

        {/* Live bursaries */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50">Bursaries available in the Western Cape</h2>
            <Link to="/bursaries/province/western-cape" className="text-xs font-medium text-forest-600 dark:text-forest-400 hover:text-forest-900 dark:hover:text-white transition flex items-center gap-1">View all <ArrowRight size={11} /></Link>
          </div>
          {loading ? (
            <div className="space-y-3">{[1,2,3,4].map((i) => <div key={i} className="h-20 rounded-2xl bg-forest-100 dark:bg-forest-800 animate-pulse" />)}</div>
          ) : wcBursaries.length === 0 ? (
            <div className="rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 p-6 text-center">
              <p className="text-sm text-forest-500 dark:text-forest-400">No Western Cape bursaries currently listed.</p>
              <Link to="/bursaries" className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-forest-600 hover:text-forest-900 transition">Browse all bursaries <ArrowRight size={13} /></Link>
            </div>
          ) : (
            <div className="space-y-3">
              {wcBursaries.map((b, i) => {
                const badge = deadlineBadge(b.deadline);
                return (
                  <div key={b.id || i} className="flex gap-4 rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 p-4 transition hover:border-forest-400 hover:shadow-sm">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-forest-100 dark:bg-forest-800 text-forest-600 dark:text-forest-300 font-bold text-sm">{i + 1}</div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-0.5">
                        {badge && <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs ${badge.classes}`}>⏱ {badge.label}</span>}
                        {b.province?.toLowerCase() === "national" && (
                          <span className="inline-flex items-center rounded-full bg-blue-100 dark:bg-blue-900/30 px-2 py-0.5 text-xs text-blue-700 dark:text-blue-300">National</span>
                        )}
                      </div>
                      <p className="font-semibold text-forest-900 dark:text-forest-50 text-sm">{b.name}</p>
                      <p className="text-xs text-forest-500 dark:text-forest-400">{b.funder}{b.field_of_study ? ` · ${b.field_of_study}` : ""}</p>
                      {b.value && <p className="text-xs text-forest-400 mt-0.5">{b.value}</p>}
                    </div>
                    <div className="flex flex-col gap-1.5 shrink-0 justify-center">
                      <Link to={`/bursaries/${slugify(b.name)}`} className="inline-flex items-center gap-1 text-xs font-medium text-forest-600 dark:text-forest-400 hover:text-forest-900 dark:hover:text-white transition">Details <ArrowRight size={11} /></Link>
                      {b.apply_url && <a href={b.apply_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-medium text-forest-600 dark:text-forest-400 hover:text-forest-900 dark:hover:text-white transition">Apply <ExternalLink size={11} /></a>}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          <p className="mt-3 text-xs text-forest-400 dark:text-forest-500">Showing Western Cape-specific and national bursaries. National bursaries are open to students in all provinces.</p>
        </div>

        <div className="space-y-8 text-sm leading-7 text-forest-700 dark:text-forest-300">

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">The Western Cape bursary landscape</h2>
            <p>The Western Cape has a distinct economic profile from Gauteng — while Gauteng is dominated by mining, finance, and heavy industry, the Western Cape's economy is anchored in technology, agri-processing, tourism, retail, and healthcare. This shapes which sectors offer bursaries locally.</p>
            <p className="mt-3">Cape Town has emerged as Africa's leading technology hub, with companies like Amazon Web Services, Shopify, and numerous fintech startups establishing significant operations. This creates genuine demand for IT and engineering graduates and corresponding bursary opportunities from tech-adjacent companies.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">Western Cape-specific funding sources</h2>
            <div className="space-y-4">
              {[
                { funder: "Western Cape Department of Health", detail: "One of the best-managed provincial health departments in South Africa, the Western Cape DoH funds medical, nursing, pharmacy, and allied health students who commit to working in Western Cape public health facilities. Particularly strong funding for rural and underserved areas in the Cape Winelands, Garden Route, and West Coast." },
                { funder: "Western Cape Department of Education", detail: "Funds teaching students through the Funza Lushaka programme and its own provincial bursary allocation. Priority is given to students studying Mathematics, Science, and Foundation Phase teaching who will be placed in Western Cape public schools." },
                { funder: "Western Cape Government (various departments)", detail: "The Western Cape Government offers bursaries across multiple departments — Agriculture, Environmental Affairs and Development Planning, Transport and Public Works. These are advertised on the Western Cape Government website and receive fewer applications than national bursaries." },
                { funder: "Stellenbosch University trust funds and bursaries", detail: "Stellenbosch University administers numerous external trust funds and bursaries on behalf of donors, many of which are available to Western Cape students specifically. Contact Stellenbosch University's financial aid office even if you are not studying there — some trust bursaries are for Western Cape students at any accredited institution." },
                { funder: "Cape Peninsula University of Technology (CPUT)", detail: "CPUT administers significant bursary funding for students studying at the institution. Industry partnerships with local Western Cape companies — particularly in engineering, hospitality, and IT — generate bursary opportunities for CPUT students specifically." },
              ].map((item) => (
                <div key={item.funder} className="rounded-2xl border border-forest-100 dark:border-forest-800 bg-white dark:bg-forest-900 p-5">
                  <p className="font-semibold text-forest-900 dark:text-forest-50 mb-1">{item.funder}</p>
                  <p>{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">Key industries funding Western Cape students</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { industry: "Technology & fintech", fields: "Computer science, IT, software engineering" },
                { industry: "Agriculture & agri-processing", fields: "Agricultural science, food technology, engineering" },
                { industry: "Healthcare", fields: "Medicine, nursing, pharmacy, allied health" },
                { industry: "Retail & logistics", fields: "Supply chain, business, IT" },
                { industry: "Tourism & hospitality", fields: "Hospitality management, tourism" },
                { industry: "Financial services", fields: "Finance, accounting, actuarial" },
                { industry: "Environmental science", fields: "Environmental management, conservation" },
                { industry: "Construction & property", fields: "Civil engineering, quantity surveying" },
              ].map((item) => (
                <div key={item.industry} className="rounded-xl border border-forest-100 dark:border-forest-800 bg-forest-50 dark:bg-forest-900 p-3">
                  <p className="font-semibold text-forest-900 dark:text-forest-50 text-sm">{item.industry}</p>
                  <p className="text-xs text-forest-500 dark:text-forest-400 mt-0.5">{item.fields}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">Tips for Western Cape bursary applicants</h2>
            <div className="space-y-4">
              {[
                { title: "National bursaries are your biggest opportunity", body: "The majority of available bursary funding — from NSFAS, major corporates, and government departments — is national. Don't limit your search to Western Cape-only bursaries. Most national funders place graduates where they're needed, which often includes the Western Cape." },
                { title: "Leverage Cape Town's tech sector", body: "Cape Town's growing technology sector creates demand for IT and engineering graduates that local companies are beginning to fund. Watch for bursary announcements from tech companies with Cape Town offices — this sector is growing faster than the bursary landscape has caught up with." },
                { title: "Contact UCT and Stellenbosch financial aid offices directly", body: "Both universities administer external trust bursaries and donor-funded awards that are not widely advertised. A direct enquiry to the financial aid office can surface funding opportunities that don't appear in general bursary searches." },
                { title: "Apply to the Western Cape Government directly", body: "The Western Cape Government's bursary programmes are less competitive than national programmes and specifically prioritise students who will serve the province. Visit the Western Cape Government careers and bursaries page." },
              ].map((tip) => (
                <div key={tip.title} className="rounded-2xl border border-forest-100 dark:border-forest-800 bg-white dark:bg-forest-900 p-5">
                  <p className="font-semibold text-forest-900 dark:text-forest-50 mb-1">{tip.title}</p>
                  <p>{tip.body}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link to="/bursaries/province/western-cape" className="inline-flex items-center gap-2 rounded-xl bg-forest-600 dark:bg-forest-500 px-5 py-3 text-sm font-medium text-white hover:bg-forest-700 transition">
            All Western Cape bursaries <ArrowRight size={15} />
          </Link>
          <Link to="/bursaries" className="inline-flex items-center gap-2 rounded-xl border border-forest-300 dark:border-forest-700 px-5 py-3 text-sm font-medium text-forest-700 dark:text-forest-300 hover:bg-forest-100 dark:hover:bg-forest-800 transition">
            Browse all bursaries <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </>
  );
}
