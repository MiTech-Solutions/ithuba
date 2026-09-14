import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, CheckCircle, AlertCircle } from "lucide-react";
import { useBursaries } from "../../hooks/useBursaries";
import { slugify } from "../../utils/slug";
import { deadlineBadge, daysUntil } from "../../utils/deadline";

const OG_IMG = "https://i.postimg.cc/d3T437Xk/45C7EB18-47F5-4CD3-9509-3A1092AF188E.png";

export default function ArticleCorporateEmploymentBursaries() {
  const { bursaries, loading } = useBursaries();

  const corporateBursaries = bursaries
    .filter((b) => {
      const type = b.funder_type?.toLowerCase() || "";
      return type === "corporate";
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

  const employers = [
    {
      company: "Eskom",
      fields: "Electrical, mechanical, civil, chemical engineering",
      workback: "Equal to years funded (typically 3–4 years)",
      known_for: "One of South Africa's most generous bursary packages — full tuition, accommodation, meals, books, and a monthly stipend. Vacation work included every year. Graduate placement virtually guaranteed within Eskom's generation, transmission, or distribution divisions.",
    },
    {
      company: "Sasol",
      fields: "Chemical, mechanical, electrical engineering; chemistry; IT",
      workback: "Equal to years funded",
      known_for: "Sasol's bursary is among the most financially generous in South Africa. Bursary holders do vacation work at Sasol's Secunda or Sasolburg facilities and are offered graduate employment on completion of their degree. Strong mentorship structure throughout.",
    },
    {
      company: "Anglo American",
      fields: "Mining engineering, metallurgy, geology, mechanical, electrical engineering",
      workback: "Equal to years funded",
      known_for: "Anglo American funds students across its South African operations. Bursary holders are placed at mines and processing facilities during vacation work. Graduate employment is typically offered in the operational area where the student spent most of their vacation work.",
    },
    {
      company: "Standard Bank",
      fields: "Finance, accounting, IT, actuarial science, engineering",
      workback: "Typically 2–3 years",
      known_for: "Standard Bank's graduate employment programme is one of the most structured in South African banking. Bursary holders who perform well during vacation work are offered a graduate programme placement — rotational across different areas of the bank.",
    },
    {
      company: "MTN",
      fields: "IT, electrical engineering, computer science, business",
      workback: "Equal to years funded",
      known_for: "MTN's bursary comes with structured vacation work in its technology and commercial divisions. Graduate employment is offered to high-performing bursary holders. MTN's graduate programme spans network engineering, product development, and corporate functions.",
    },
    {
      company: "Transnet",
      fields: "Mechanical, electrical, civil, industrial engineering; IT; logistics",
      workback: "Equal to years funded",
      known_for: "Transnet operates rail, port, and pipeline infrastructure across South Africa and needs a constant pipeline of engineers and technical graduates. Bursary holders do vacation work across Transnet's divisions and are offered graduate employment on completion.",
    },
    {
      company: "Deloitte",
      fields: "Accounting (CA(SA) track), auditing, IT",
      workback: "Articles contract (3 years) replaces work-back",
      known_for: "Deloitte's bursary feeds directly into its graduate training contract. Bursary holders complete their degree and then join Deloitte as trainee accountants to complete their SAICA articles. This is effectively a guaranteed 3-year employment offer from the point of bursary acceptance.",
    },
    {
      company: "Nedbank",
      fields: "Finance, IT, engineering, accounting",
      workback: "Typically 2–3 years",
      known_for: "Nedbank's graduate programme is structured around its strategic focus areas — sustainable finance, digital banking, and data. Bursary holders who complete vacation work successfully are offered graduate placements aligned with their area of study and interest.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Corporate Bursaries With Guaranteed Employment in South Africa | Ithuba</title>
        <meta name="description" content="Find corporate bursaries in South Africa that include guaranteed employment after graduation. Eskom, Sasol, Anglo American, Standard Bank, MTN and more — with work-back details." />
        <link rel="canonical" href="https://ithubahub.co.za/articles/corporate-bursaries-with-guaranteed-employment" />
        <meta property="og:title" content="Corporate Bursaries With Guaranteed Employment in South Africa | Ithuba" />
        <meta property="og:description" content="Corporate bursaries that include guaranteed employment after graduation — Eskom, Sasol, Anglo American, Standard Bank, MTN and more." />
        <meta property="og:url" content="https://ithubahub.co.za/articles/corporate-bursaries-with-guaranteed-employment" />
        <meta property="og:image" content={OG_IMG} />
        <meta name="twitter:title" content="Corporate Bursaries With Guaranteed Employment in South Africa | Ithuba" />
        <meta name="twitter:description" content="Corporate bursaries that include guaranteed employment — Eskom, Sasol, Standard Bank, MTN and more with work-back details." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "headline": "Corporate Bursaries With Guaranteed Employment in South Africa",
              "url": "https://ithubahub.co.za/articles/corporate-bursaries-with-guaranteed-employment",
              "publisher": { "@type": "Organization", "name": "Ithuba", "url": "https://ithubahub.co.za" },
              "datePublished": "2026-09-05",
              "dateModified": "2026-09-05",
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ithubahub.co.za" },
                { "@type": "ListItem", "position": 2, "name": "Articles", "item": "https://ithubahub.co.za/articles" },
                { "@type": "ListItem", "position": 3, "name": "Corporate Bursaries With Employment", "item": "https://ithubahub.co.za/articles/corporate-bursaries-with-guaranteed-employment" },
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
          <span className="text-forest-800 dark:text-forest-200 font-medium">Corporate bursaries with employment</span>
        </nav>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center rounded-full bg-forest-100 dark:bg-forest-800 px-3 py-1 text-xs font-medium text-forest-600 dark:text-forest-300">Career Guide</span>
            <span className="text-xs text-forest-400 dark:text-forest-500">Updated September 2026 · 8 min read</span>
          </div>
          <h1 className="font-display text-3xl font-semibold text-forest-900 dark:text-forest-50 sm:text-4xl leading-snug">
            Corporate bursaries with guaranteed employment in South Africa
          </h1>
          <p className="mt-4 text-sm leading-7 text-forest-600 dark:text-forest-400">
            Most corporate bursaries include a work-back obligation — but that obligation is only possible if the company offers you a job. In practice, corporate bursaries are structured talent pipelines: you get fully funded through your degree, you do vacation work each year, and you start your career with a confirmed employment offer. This guide covers the companies that offer this, what they pay, and how the work-back works.
          </p>
        </div>

        {/* Live bursaries */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50">Corporate bursaries in our directory</h2>
            <Link to="/bursaries/type/corporate" className="text-xs font-medium text-forest-600 dark:text-forest-400 hover:text-forest-900 dark:hover:text-white transition flex items-center gap-1">View all <ArrowRight size={11} /></Link>
          </div>
          {loading ? (
            <div className="space-y-3">{[1,2,3].map((i) => <div key={i} className="h-20 rounded-2xl bg-forest-100 dark:bg-forest-800 animate-pulse" />)}</div>
          ) : corporateBursaries.length === 0 ? (
            <div className="rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 p-6 text-center">
              <p className="text-sm text-forest-500 dark:text-forest-400">No corporate bursaries currently listed.</p>
              <Link to="/bursaries" className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-forest-600 hover:text-forest-900 transition">Browse all bursaries <ArrowRight size={13} /></Link>
            </div>
          ) : (
            <div className="space-y-3">
              {corporateBursaries.map((b, i) => {
                const badge = deadlineBadge(b.deadline);
                return (
                  <div key={b.id || i} className="flex gap-4 rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 p-4 transition hover:border-forest-400 hover:shadow-sm">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-forest-100 dark:bg-forest-800 text-forest-600 dark:text-forest-300 font-bold text-sm">{i + 1}</div>
                    <div className="flex-1 min-w-0">
                      {badge && <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs ${badge.classes} mb-0.5`}>⏱ {badge.label}</span>}
                      <p className="font-semibold text-forest-900 dark:text-forest-50 text-sm">{b.name}</p>
                      <p className="text-xs text-forest-500 dark:text-forest-400">{b.funder}{b.deadline ? ` · Closes ${b.deadline}` : ""}</p>
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
        </div>

        <div className="space-y-8 text-sm leading-7 text-forest-700 dark:text-forest-300">

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">How the employment guarantee works</h2>
            <p>A corporate bursary is not charity — it is a structured recruitment and talent pipeline. The company identifies high-potential students early, funds their entire degree, exposes them to the business through annual vacation work, and then hires them on graduation. From the company's perspective it is far more efficient than competing for graduates in the open market every year.</p>
            <p className="mt-3">The employment offer is typically conditional on you completing your degree, meeting academic requirements, and performing satisfactorily during vacation work. It is not unconditional — a student who consistently underperforms during vacation work may not receive a graduate offer even if their degree results are acceptable. Think of vacation work as an extended interview.</p>
            <div className="mt-5 flex gap-3 rounded-2xl border border-gold-200 dark:border-gold-900/40 bg-gold-50 dark:bg-gold-900/10 p-4">
              <AlertCircle size={16} className="text-gold-600 dark:text-gold-400 shrink-0 mt-0.5" />
              <p className="text-sm">The work-back and employment offer are two sides of the same commitment. You commit to working for them — they commit to employing you. Read your agreement carefully to understand exactly what each party is committing to.</p>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-4">Top corporate bursaries with employment pathways</h2>
            <div className="space-y-4">
              {employers.map((item) => (
                <div key={item.company} className="rounded-2xl border border-forest-100 dark:border-forest-800 bg-white dark:bg-forest-900 p-5">
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <h3 className="font-semibold text-forest-900 dark:text-forest-50 text-base">{item.company}</h3>
                    <span className="shrink-0 text-xs text-forest-400 dark:text-forest-500 mt-0.5">Work-back: {item.workback}</span>
                  </div>
                  <p className="text-xs font-medium text-forest-500 dark:text-forest-400 mb-2">Fields: {item.fields}</p>
                  <p>{item.known_for}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">What makes a strong application for these bursaries</h2>
            <ul className="space-y-2.5">
              {[
                "Strong Mathematics and Physical Science results — most engineering and finance corporate bursaries require 70%+ in Maths",
                "Genuine knowledge of the company — what they do, what challenges their industry faces, why you want to work specifically for them",
                "A clear career direction that aligns with the company's business — don't apply to Eskom saying you want to work in banking",
                "Leadership or initiative outside of academics — sports captaincy, community projects, student government, part-time work",
                "A motivation letter written specifically for that company — generic letters are the most common reason qualified students are rejected",
                "Professional presentation at interview — corporate bursary panels assess whether you'd represent the company well",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 list-none">
                  <CheckCircle size={14} className="text-forest-500 dark:text-forest-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">Is a corporate bursary with a work-back right for you?</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 p-5">
                <p className="font-semibold text-forest-900 dark:text-forest-50 mb-3 text-sm">Right for you if:</p>
                <ul className="space-y-2">
                  {[
                    "You know which industry you want to enter",
                    "You want guaranteed employment after graduating",
                    "You want mentorship and industry exposure during your degree",
                    "You're comfortable committing 3–4 years to one employer",
                    "You want the most financially generous package available",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs">
                      <CheckCircle size={11} className="text-forest-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-forest-100 dark:border-forest-800 bg-forest-50 dark:bg-forest-900 p-5">
                <p className="font-semibold text-forest-900 dark:text-forest-50 mb-3 text-sm">Consider alternatives if:</p>
                <ul className="space-y-2">
                  {[
                    "You haven't decided on a career direction yet",
                    "You want to study abroad after graduating",
                    "You want to start your own business immediately after graduating",
                    "You're planning postgraduate study as your next step",
                    "You want maximum career flexibility in your first years",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-forest-400" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link to="/bursaries/type/corporate" className="inline-flex items-center gap-2 rounded-xl bg-forest-600 dark:bg-forest-500 px-5 py-3 text-sm font-medium text-white hover:bg-forest-700 transition">
            Browse corporate bursaries <ArrowRight size={15} />
          </Link>
          <Link to="/articles/nsfas-vs-corporate-bursary" className="inline-flex items-center gap-2 rounded-xl border border-forest-300 dark:border-forest-700 px-5 py-3 text-sm font-medium text-forest-700 dark:text-forest-300 hover:bg-forest-100 dark:hover:bg-forest-800 transition">
            NSFAS vs corporate bursary <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </>
  );
}
