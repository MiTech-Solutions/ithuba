import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useBursaries } from "../../hooks/useBursaries";
import { slugify } from "../../utils/slug";
import { deadlineBadge, daysUntil } from "../../utils/deadline";

const OG_IMG = "https://i.postimg.cc/d3T437Xk/45C7EB18-47F5-4CD3-9509-3A1092AF188E.png";

export default function ArticleGautengBursaries() {
  const { bursaries, loading } = useBursaries();

  const gautengBursaries = bursaries
    .filter((b) => {
      const province = b.province?.toLowerCase() || "";
      return province.includes("gauteng") || province === "national";
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
        <title>Bursaries in Gauteng, South Africa — Complete List | Ithuba</title>
        <meta name="description" content="Find bursaries available to students in Gauteng, South Africa. Provincial and national bursaries for Johannesburg, Pretoria, and surrounding areas — updated regularly." />
        <link rel="canonical" href="https://ithubahub.co.za/articles/bursaries-in-gauteng" />
        <meta property="og:title" content="Bursaries in Gauteng, South Africa | Ithuba" />
        <meta property="og:description" content="Find bursaries available to students in Gauteng — provincial and national funding for Johannesburg, Pretoria, and surrounding areas." />
        <meta property="og:url" content="https://ithubahub.co.za/articles/bursaries-in-gauteng" />
        <meta property="og:image" content={OG_IMG} />
        <meta name="twitter:title" content="Bursaries in Gauteng, South Africa | Ithuba" />
        <meta name="twitter:description" content="Find bursaries available to students in Gauteng — provincial and national funding updated regularly." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "headline": "Bursaries Available in Gauteng — Complete List",
              "url": "https://ithubahub.co.za/articles/bursaries-in-gauteng",
              "publisher": { "@type": "Organization", "name": "Ithuba", "url": "https://ithubahub.co.za" },
              "datePublished": "2026-08-31",
              "dateModified": "2026-08-31",
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ithubahub.co.za" },
                { "@type": "ListItem", "position": 2, "name": "Articles", "item": "https://ithubahub.co.za/articles" },
                { "@type": "ListItem", "position": 3, "name": "Gauteng Bursaries", "item": "https://ithubahub.co.za/articles/bursaries-in-gauteng" },
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
          <span className="text-forest-800 dark:text-forest-200 font-medium">Gauteng bursaries</span>
        </nav>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center rounded-full bg-forest-100 dark:bg-forest-800 px-3 py-1 text-xs font-medium text-forest-600 dark:text-forest-300">Province Guide</span>
            <span className="text-xs text-forest-400 dark:text-forest-500">Updated August 2026 · 6 min read</span>
          </div>
          <h1 className="font-display text-3xl font-semibold text-forest-900 dark:text-forest-50 sm:text-4xl leading-snug">
            Bursaries available in Gauteng — complete list
          </h1>
          <p className="mt-4 text-sm leading-7 text-forest-600 dark:text-forest-400">
            Gauteng is South Africa's economic hub and home to the highest concentration of corporate bursary funders in the country. Students based in Johannesburg, Pretoria, Ekurhuleni, and surrounding areas have access to both Gauteng-specific bursaries and the full range of national bursaries. This guide covers both.
          </p>
        </div>

        {/* Live bursaries */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50">
              Bursaries available in Gauteng
            </h2>
            <Link to="/bursaries/province/gauteng" className="text-xs font-medium text-forest-600 dark:text-forest-400 hover:text-forest-900 dark:hover:text-white transition flex items-center gap-1">
              View all <ArrowRight size={11} />
            </Link>
          </div>
          {loading ? (
            <div className="space-y-3">{[1,2,3,4].map((i) => <div key={i} className="h-20 rounded-2xl bg-forest-100 dark:bg-forest-800 animate-pulse" />)}</div>
          ) : gautengBursaries.length === 0 ? (
            <div className="rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 p-6 text-center">
              <p className="text-sm text-forest-500 dark:text-forest-400">No Gauteng bursaries currently listed.</p>
              <Link to="/bursaries" className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-forest-600 hover:text-forest-900 transition">Browse all bursaries <ArrowRight size={13} /></Link>
            </div>
          ) : (
            <div className="space-y-3">
              {gautengBursaries.map((b, i) => {
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
          <p className="mt-3 text-xs text-forest-400 dark:text-forest-500">
            Showing Gauteng-specific and national bursaries. National bursaries are open to students in all provinces including Gauteng.
          </p>
        </div>

        <div className="space-y-8 text-sm leading-7 text-forest-700 dark:text-forest-300">
          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">Why Gauteng students have the most bursary options</h2>
            <p>Gauteng accounts for approximately 35% of South Africa's GDP. Johannesburg is home to the JSE, the headquarters of the major banks, and most of South Africa's largest corporates. Pretoria hosts government departments and state-owned enterprises including Eskom, Transnet, and the CSIR. This concentration of funders means Gauteng students have access to the widest range of corporate and government bursaries in the country.</p>
            <p className="mt-3">Additionally, almost all national bursaries — those open to students across all provinces — are administered from Gauteng, making it effectively the bursary capital of South Africa.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">Types of bursaries available in Gauteng</h2>
            <div className="space-y-3">
              {[
                { type: "National bursaries", desc: "The largest category — open to all South African students regardless of province. Most major corporate bursaries (Sasol, Anglo American, Standard Bank, MTN) and government bursaries (NSFAS, Eskom, Transnet) fall in this category. These are administered nationally and Gauteng students are fully eligible." },
                { type: "Gauteng provincial bursaries", desc: "The Gauteng Department of Education, the Gauteng Department of Health, and other provincial departments run bursary programmes specifically for Gauteng students, particularly those who will serve the province after qualifying. These are less publicised but worth researching directly through the relevant department." },
                { type: "University-specific bursaries", desc: "The University of the Witwatersrand, University of Pretoria, University of Johannesburg, and Tshwane University of Technology all offer merit bursaries and financial aid to their own students. Check the financial aid office at your institution." },
                { type: "Municipality bursaries", desc: "The City of Johannesburg and the City of Tshwane occasionally offer bursaries for students in fields relevant to municipal operations — engineering, town planning, IT, and public administration. These are irregular — check the relevant municipality website or contact their HR department directly." },
              ].map((item) => (
                <div key={item.type} className="rounded-2xl border border-forest-100 dark:border-forest-800 bg-white dark:bg-forest-900 p-4">
                  <p className="font-semibold text-forest-900 dark:text-forest-50 mb-1">{item.type}</p>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">Top employers funding Gauteng students</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { employer: "Eskom (Megawatt Park, Sunninghill)", field: "Electrical, mechanical, civil engineering" },
                { employer: "Standard Bank (Johannesburg CBD)", field: "Finance, IT, actuarial" },
                { employer: "Anglo American (Marshalltown)", field: "Mining, engineering, environmental" },
                { employer: "MTN (Roodepoort)", field: "IT, engineering, business" },
                { employer: "Transnet (Johannesburg)", field: "Engineering, logistics, IT" },
                { employer: "ABSA (Johannesburg CBD)", field: "Finance, IT, accounting" },
                { employer: "Sasol (Sandton)", field: "Chemical, mechanical engineering" },
                { employer: "Investec (Sandton)", field: "Finance, actuarial, IT" },
              ].map((item) => (
                <div key={item.employer} className="rounded-xl border border-forest-100 dark:border-forest-800 bg-forest-50 dark:bg-forest-900 p-3">
                  <p className="font-semibold text-forest-900 dark:text-forest-50 text-sm">{item.employer}</p>
                  <p className="text-xs text-forest-500 dark:text-forest-400 mt-0.5">{item.field}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">Tips for Gauteng bursary applicants</h2>
            <div className="space-y-4">
              {[
                { title: "Don't limit yourself to Gauteng-only bursaries", body: "National bursaries are open to you and represent the majority of available funding. Never skip a national bursary on the assumption that it favours students from other provinces — it doesn't." },
                { title: "Research your funder's Gauteng office", body: "When applying to a corporate bursary, mention that you're aware of their Gauteng operations and what interests you about working in that environment. Specificity about location and projects signals genuine interest." },
                { title: "Universities in Gauteng have strong industry ties", body: "Wits, UP, and UJ have established relationships with Gauteng-based corporates. Bursary panels at these companies are familiar with these institutions. Being enrolled at one of them — or expressing intent to enrol — can be a positive signal." },
                { title: "Apply to the Gauteng provincial department bursaries directly", body: "The Gauteng Department of Health, Department of Education, and Department of Agriculture all run bursary programmes that receive far fewer applications than national programmes. The competition is lower and the funding is genuine." },
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
          <Link to="/bursaries/province/gauteng" className="inline-flex items-center gap-2 rounded-xl bg-forest-600 dark:bg-forest-500 px-5 py-3 text-sm font-medium text-white hover:bg-forest-700 transition">
            All Gauteng bursaries <ArrowRight size={15} />
          </Link>
          <Link to="/bursaries" className="inline-flex items-center gap-2 rounded-xl border border-forest-300 dark:border-forest-700 px-5 py-3 text-sm font-medium text-forest-700 dark:text-forest-300 hover:bg-forest-100 dark:hover:bg-forest-800 transition">
            Browse all bursaries <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </>
  );
}
