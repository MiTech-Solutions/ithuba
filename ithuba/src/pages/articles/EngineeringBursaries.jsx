import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useBursaries } from "../../hooks/useBursaries";
import { slugify } from "../../utils/slug";
import { deadlineBadge, daysUntil } from "../../utils/deadline";

const OG_IMG = "https://i.postimg.cc/d3T437Xk/45C7EB18-47F5-4CD3-9509-3A1092AF188E.png";

export default function ArticleEngineeringBursaries() {
  const { bursaries, loading } = useBursaries();

  // Pull engineering bursaries from sheet — open ones first
  const engineeringBursaries = bursaries
    .filter((b) => {
      const field = b.field_of_study?.toLowerCase() || "";
      return field.includes("engineering") || field === "all fields";
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
    .slice(0, 8);

  return (
    <>
      <Helmet>
        <title>Best Bursaries for Engineering Students in South Africa | Ithuba</title>
        <meta
          name="description"
          content="Find the best bursaries for engineering students in South Africa. Eskom, Sasol, Transnet, Anglo American and more — with application links and deadlines."
        />
        <meta name="description" content="The best South African bursaries for engineering students — Eskom, Sasol, Transnet and more with deadlines and apply links." />
        <link rel="canonical" href="https://ithubahub.co.za/articles/best-bursaries-for-engineering-students" />
        <meta property="og:title" content="Best Bursaries for Engineering Students in South Africa | Ithuba" />
        <meta property="og:description" content="The best South African bursaries for engineering students — Eskom, Sasol, Transnet, Anglo American and more with deadlines and apply links." />
        <meta property="og:url" content="https://ithubahub.co.za/articles/best-bursaries-for-engineering-students" />
        <meta property="og:image" content={OG_IMG} />
        <meta name="twitter:title" content="Best Bursaries for Engineering Students in South Africa | Ithuba" />
        <meta name="twitter:description" content="The best South African bursaries for engineering students — Eskom, Sasol, Transnet and more." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={OG_IMG} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "headline": "Best Bursaries for Engineering Students in South Africa",
              "description": "A guide to the best South African bursaries for engineering students, with application links and deadlines.",
              "url": "https://ithubahub.co.za/articles/best-bursaries-for-engineering-students",
              "publisher": { "@type": "Organization", "name": "Ithuba", "url": "https://ithubahub.co.za" },
              "datePublished": "2026-07-20",
              "dateModified": "2026-07-20",
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ithubahub.co.za" },
                { "@type": "ListItem", "position": 2, "name": "Articles", "item": "https://ithubahub.co.za/articles" },
                { "@type": "ListItem", "position": 3, "name": "Engineering Bursaries", "item": "https://ithubahub.co.za/articles/best-bursaries-for-engineering-students" },
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
          <span className="text-forest-800 dark:text-forest-200 font-medium">Engineering bursaries</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center rounded-full bg-forest-100 dark:bg-forest-800 px-3 py-1 text-xs font-medium text-forest-600 dark:text-forest-300">Field Guide</span>
            <span className="text-xs text-forest-400 dark:text-forest-500">Updated July 2026 · 7 min read</span>
          </div>
          <h1 className="font-display text-3xl font-semibold text-forest-900 dark:text-forest-50 sm:text-4xl leading-snug">
            Best bursaries for engineering students in South Africa
          </h1>
          <p className="mt-4 text-sm leading-7 text-forest-600 dark:text-forest-400">
            Engineering is one of the most heavily funded fields of study in South Africa. The country's largest companies — in energy, mining, construction, and manufacturing — actively compete to fund and recruit engineering talent. This guide covers the best bursaries available, what they offer, and how to position yourself as a strong candidate.
          </p>
        </div>

        {/* Live bursaries from sheet */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50">
              Engineering bursaries in our directory
            </h2>
            <Link
              to="/bursaries/field/engineering"
              className="text-xs font-medium text-forest-600 dark:text-forest-400 hover:text-forest-900 dark:hover:text-white transition flex items-center gap-1"
            >
              View all <ArrowRight size={11} />
            </Link>
          </div>

          {loading ? (
            <div className="space-y-3">
              {[1,2,3].map((i) => <div key={i} className="h-20 rounded-2xl bg-forest-100 dark:bg-forest-800 animate-pulse" />)}
            </div>
          ) : engineeringBursaries.length === 0 ? (
            <div className="rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 p-6 text-center">
              <p className="text-sm text-forest-500 dark:text-forest-400">No engineering bursaries currently listed.</p>
              <Link to="/bursaries" className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-forest-600 dark:text-forest-400 hover:text-forest-900 transition">
                Browse all bursaries <ArrowRight size={13} />
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              {engineeringBursaries.map((bursary, i) => {
                const badge = deadlineBadge(bursary.deadline);
                return (
                  <div key={bursary.id || i} className="flex gap-4 rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 p-4 transition hover:border-forest-400 dark:hover:border-forest-500 hover:shadow-sm">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-forest-100 dark:bg-forest-800 text-forest-600 dark:text-forest-300 font-bold text-sm">
                      {i + 1}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-0.5">
                        {badge && <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs ${badge.classes}`}>⏱ {badge.label}</span>}
                        {bursary.featured === "true" && (
                          <span className="inline-flex items-center rounded-full bg-gold-100 dark:bg-gold-900/40 px-2 py-0.5 text-xs font-medium border border-gold-200 dark:border-gold-800/50">
                            <span className="badge-shimmer">★ Featured</span>
                          </span>
                        )}
                      </div>
                      <p className="font-semibold text-forest-900 dark:text-forest-50 text-sm leading-snug">{bursary.name}</p>
                      <p className="text-xs text-forest-500 dark:text-forest-400">{bursary.funder}{bursary.deadline ? ` · Closes ${bursary.deadline}` : ""}</p>
                      {bursary.value && <p className="text-xs text-forest-400 dark:text-forest-500 mt-0.5">{bursary.value}</p>}
                    </div>
                    <div className="flex flex-col gap-1.5 shrink-0 justify-center">
                      <Link to={`/bursaries/${slugify(bursary.name)}`} className="inline-flex items-center gap-1 text-xs font-medium text-forest-600 dark:text-forest-400 hover:text-forest-900 dark:hover:text-white transition">
                        Details <ArrowRight size={11} />
                      </Link>
                      {bursary.apply_url && (
                        <a href={bursary.apply_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-medium text-forest-600 dark:text-forest-400 hover:text-forest-900 dark:hover:text-white transition">
                          Apply <ExternalLink size={11} />
                        </a>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        {/* Article body */}
        <div className="space-y-8 text-sm leading-7 text-forest-700 dark:text-forest-300">

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">Why engineering attracts so many bursaries</h2>
            <p>South Africa has a well-documented shortage of qualified engineers. The country needs civil engineers for infrastructure, electrical engineers for the energy transition, mechanical engineers for mining and manufacturing, and chemical engineers for the petrochemical sector. This shortage means large companies are willing to fund students years before they graduate — because securing talent early is cheaper than competing for it later.</p>
            <p className="mt-3">For students, this translates into some of the most generous bursary packages available — many covering full tuition, accommodation, meals, a monthly stipend, and guaranteed vacation work during the degree.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">Which engineering disciplines are most funded?</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { field: "Electrical engineering",   reason: "Highest demand — Eskom, Transnet, municipalities" },
                { field: "Mechanical engineering",   reason: "Mining, manufacturing, automotive sector" },
                { field: "Civil engineering",        reason: "Infrastructure, construction, government" },
                { field: "Chemical engineering",     reason: "Sasol, petrochemicals, mining processing" },
                { field: "Mining engineering",       reason: "Anglo American, Implats, Sibanye-Stillwater" },
                { field: "Industrial engineering",   reason: "Logistics, supply chain, manufacturing" },
              ].map((item) => (
                <div key={item.field} className="rounded-xl border border-forest-100 dark:border-forest-800 bg-forest-50 dark:bg-forest-900 p-3">
                  <p className="font-semibold text-forest-900 dark:text-forest-50 text-sm">{item.field}</p>
                  <p className="text-xs text-forest-500 dark:text-forest-400 mt-0.5">{item.reason}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">What engineering bursaries typically require</h2>
            <p>Most engineering bursaries have consistent eligibility criteria across funders:</p>
            <ul className="mt-3 space-y-2">
              {[
                "South African citizenship or permanent residence",
                "Minimum 60–70% in Mathematics and Physical Science at matric level",
                "Acceptance at or enrolment in an accredited engineering programme",
                "Strong academic performance — most funders expect a 65%+ average in university",
                "Willingness to complete a work-back period after graduation (typically equal to the number of years funded)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-forest-500 dark:bg-forest-400" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">Tips specific to engineering bursary applications</h2>
            <div className="space-y-4">
              {[
                { title: "Apply in Grade 11 and Grade 12", body: "Many funders like Eskom and Transnet accept applications from Grade 11 students. Applying early gives you two chances at funding before you even start university." },
                { title: "Your Maths and Science marks are everything", body: "Unlike arts or business bursaries where a motivation letter carries significant weight, engineering bursaries are heavily weighted on Maths and Physical Science results. A 90%+ in both subjects significantly improves your competitiveness." },
                { title: "Research the company before the interview", body: "Corporate engineering bursaries almost always include an interview. Know what the company does, which engineering disciplines they employ, and what current projects or challenges they're working on. Eskom candidates should understand the energy crisis context. Sasol candidates should understand gas-to-liquids." },
                { title: "Highlight any STEM-related extracurriculars", body: "Robotics clubs, science Olympiads, coding competitions, and even building or fixing things at home are worth mentioning. They signal genuine interest in engineering beyond the classroom." },
              ].map((tip) => (
                <div key={tip.title} className="rounded-2xl border border-forest-100 dark:border-forest-800 bg-white dark:bg-forest-900 p-4">
                  <p className="font-semibold text-forest-900 dark:text-forest-50 mb-1">{tip.title}</p>
                  <p>{tip.body}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">The work-back agreement — what to expect</h2>
            <p>
              Almost every corporate engineering bursary includes a work-back agreement — a commitment to work for the funding company for a period after graduation, typically equal to the number of years you were funded. If you received a 4-year bursary, you owe 4 years of employment.
            </p>
            <p className="mt-3">
              This sounds restrictive but is often a significant advantage. You graduate with a job already confirmed, a salary from day one, and structured mentorship during the early years of your career. Many engineers who complete their work-back periods find they prefer to stay with the company that funded them.
            </p>
            <p className="mt-3">
              If you choose not to complete the work-back, you will be required to repay the full bursary value — sometimes with interest. This is a legally binding agreement, so read it carefully before signing.
            </p>
          </section>
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link to="/bursaries/field/engineering" className="inline-flex items-center gap-2 rounded-xl bg-forest-600 dark:bg-forest-500 px-5 py-3 text-sm font-medium text-white hover:bg-forest-700 transition">
            All engineering bursaries <ArrowRight size={15} />
          </Link>
          <Link to="/guides/how-to-apply-for-a-bursary" className="inline-flex items-center gap-2 rounded-xl border border-forest-300 dark:border-forest-700 px-5 py-3 text-sm font-medium text-forest-700 dark:text-forest-300 hover:bg-forest-100 dark:hover:bg-forest-800 transition">
            How to apply guide <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </>
  );
}
