import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, CheckCircle, AlertCircle } from "lucide-react";
import { useBursaries } from "../../hooks/useBursaries";
import { slugify } from "../../utils/slug";
import { deadlineBadge, daysUntil } from "../../utils/deadline";

const OG_IMG = "https://i.postimg.cc/d3T437Xk/45C7EB18-47F5-4CD3-9509-3A1092AF188E.png";

export default function ArticleFirstYearBursaries() {
  const { bursaries, loading } = useBursaries();

  // Bursaries that include undergraduate/first year study
  const firstYearBursaries = bursaries
    .filter((b) => {
      const level = b.study_level?.toLowerCase() || "";
      return level.includes("undergraduate") || level.includes("all levels") || level === "";
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
        <title>Bursaries for First-Year Students in South Africa | Ithuba</title>
        <meta
          name="description"
          content="Find bursaries available to first-year and Grade 12 students in South Africa. Learn when to apply, what funders look for, and how to stand out as a first-year applicant."
        />
        <link rel="canonical" href="https://ithubahub.co.za/articles/bursaries-for-first-year-students" />
        <meta property="og:title" content="Bursaries for First-Year Students in South Africa | Ithuba" />
        <meta property="og:description" content="Everything first-year students need to know about applying for bursaries in South Africa — when to apply, what funders look for, and which bursaries are available." />
        <meta property="og:url" content="https://ithubahub.co.za/articles/bursaries-for-first-year-students" />
        <meta property="og:image" content={OG_IMG} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={OG_IMG} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "headline": "Bursaries for First-Year Students in South Africa",
              "description": "A guide to bursaries available to first-year and Grade 12 students in South Africa.",
              "url": "https://ithubahub.co.za/articles/bursaries-for-first-year-students",
              "publisher": { "@type": "Organization", "name": "Ithuba", "url": "https://ithubahub.co.za" },
              "datePublished": "2026-07-20",
              "dateModified": "2026-07-20",
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ithubahub.co.za" },
                { "@type": "ListItem", "position": 2, "name": "Articles", "item": "https://ithubahub.co.za/articles" },
                { "@type": "ListItem", "position": 3, "name": "First-Year Bursaries", "item": "https://ithubahub.co.za/articles/bursaries-for-first-year-students" },
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
          <span className="text-forest-800 dark:text-forest-200 font-medium">First-year bursaries</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center rounded-full bg-forest-100 dark:bg-forest-800 px-3 py-1 text-xs font-medium text-forest-600 dark:text-forest-300">Student Guide</span>
            <span className="text-xs text-forest-400 dark:text-forest-500">Updated July 2026 · 8 min read</span>
          </div>
          <h1 className="font-display text-3xl font-semibold text-forest-900 dark:text-forest-50 sm:text-4xl leading-snug">
            Bursaries for first-year students in South Africa
          </h1>
          <p className="mt-4 text-sm leading-7 text-forest-600 dark:text-forest-400">
            Starting university is already a major step. Figuring out how to pay for it is another. The good news is that many South African bursaries are specifically designed for first-year students — and some can be applied for while you're still in Grade 12. This guide explains everything you need to know.
          </p>
        </div>

        {/* Important notice */}
        <div className="mb-8 flex gap-3 rounded-2xl border border-gold-200 dark:border-gold-900/40 bg-gold-50 dark:bg-gold-900/10 p-5">
          <AlertCircle size={18} className="text-gold-600 dark:text-gold-400 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-forest-900 dark:text-forest-50 mb-1">Apply before you start university</p>
            <p className="text-sm leading-6 text-forest-700 dark:text-forest-300">
              Many bursaries close before the academic year begins. If you wait until you've already started your first year, you may have missed the application window entirely. Start applying in Grade 12 — October to January is the peak application season.
            </p>
          </div>
        </div>

        {/* Live bursaries */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50">
              Undergraduate bursaries in our directory
            </h2>
            <Link to="/bursaries" className="text-xs font-medium text-forest-600 dark:text-forest-400 hover:text-forest-900 dark:hover:text-white transition flex items-center gap-1">
              View all <ArrowRight size={11} />
            </Link>
          </div>

          {loading ? (
            <div className="space-y-3">
              {[1,2,3,4].map((i) => <div key={i} className="h-20 rounded-2xl bg-forest-100 dark:bg-forest-800 animate-pulse" />)}
            </div>
          ) : firstYearBursaries.length === 0 ? (
            <div className="rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 p-6 text-center">
              <p className="text-sm text-forest-500 dark:text-forest-400">No undergraduate bursaries currently listed.</p>
              <Link to="/bursaries" className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-forest-600 dark:text-forest-400 hover:text-forest-900 transition">
                Browse all bursaries <ArrowRight size={13} />
              </Link>
            </div>
          ) : (
            <div className="space-y-3">
              {firstYearBursaries.map((bursary, i) => {
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
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">Can you apply for a bursary in Grade 12?</h2>
            <p>Yes — and you should. Many of South Africa's best bursaries accept applications from Grade 12 students, including corporate bursaries from Eskom, Sasol, Anglo American, and the major banks. Applying before your matric results are out typically means submitting your Grade 11 final results and midyear Grade 12 results.</p>
            <p className="mt-3">Government bursaries like NSFAS, however, require proof of registration at a university — so those can only be applied for once you have a confirmed university place, either in late Grade 12 or early first year.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">Types of bursaries available to first-year students</h2>
            <div className="space-y-4">
              {[
                {
                  type: "NSFAS",
                  description: "The most accessible bursary for first-year students from lower-income households. Covers tuition, accommodation, meals, and learning materials. Apply online at my.nsfas.org.za once you have a confirmed university offer.",
                  link: "/articles/nsfas-2026-guide",
                  linkLabel: "Read our NSFAS guide",
                },
                {
                  type: "Corporate bursaries",
                  description: "Companies like Sasol, Eskom, Standard Bank, and MTN fund first-year students in exchange for a work-back commitment. These are field-specific — engineering companies fund engineers, banks fund finance students. Often more generous than NSFAS.",
                  link: "/bursaries/type/corporate",
                  linkLabel: "Browse corporate bursaries",
                },
                {
                  type: "Government department bursaries",
                  description: "Various government departments fund students in fields they need — the Department of Health funds nursing and medicine students, the Department of Education funds teaching students. These often include a service obligation in the public sector.",
                  link: "/bursaries/type/government",
                  linkLabel: "Browse government bursaries",
                },
                {
                  type: "NGO and foundation bursaries",
                  description: "Organisations like the Allan Gray Orbis Foundation target first-year students with strong potential and leadership qualities. These are highly competitive but extremely well-resourced.",
                  link: "/bursaries/type/ngo",
                  linkLabel: "Browse NGO bursaries",
                },
              ].map((item) => (
                <div key={item.type} className="rounded-2xl border border-forest-100 dark:border-forest-800 bg-white dark:bg-forest-900 p-5">
                  <h3 className="font-semibold text-forest-900 dark:text-forest-50 mb-2">{item.type}</h3>
                  <p className="mb-3">{item.description}</p>
                  <Link to={item.link} className="inline-flex items-center gap-1 text-xs font-medium text-forest-600 dark:text-forest-400 hover:text-forest-900 dark:hover:text-white transition">
                    {item.linkLabel} <ArrowRight size={11} />
                  </Link>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">What first-year applicants need to prepare</h2>
            <div className="space-y-2">
              {[
                "Certified copy of your South African ID",
                "Certified copy of your Grade 11 results (for Grade 12 applicants) or matric certificate",
                "Proof of acceptance or registration from your university",
                "Proof of household income — payslips, SASSA letter, or an affidavit",
                "A motivation letter tailored to each funder",
                "Two references — from a teacher or community leader",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={14} className="text-forest-500 dark:text-forest-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">What funders look for in first-year applicants</h2>
            <p>
              First-year applicants have no university track record, so funders rely heavily on your matric results, your motivation letter, and your interview performance. Your Grade 12 results — especially in Mathematics and Physical Science for STEM fields — carry more weight than they will in any subsequent year.
            </p>
            <p className="mt-3">
              Beyond academics, funders want to see evidence that you have chosen your field deliberately and understand what studying it entails. A student who can articulate why they want to be an engineer, which discipline interests them and why, and what they hope to contribute to South Africa after graduating will always outperform a student with slightly better marks but no clear direction.
            </p>
            <p className="mt-3">
              Leadership experience — even modest examples like being a class representative, prefect, sports captain, or community volunteer — strengthens your application significantly. If you have any of these, mention them prominently in your motivation letter.
            </p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">How many bursaries should you apply for?</h2>
            <p>
              As many as you qualify for. There is no rule against applying for multiple bursaries, and first-year applicants especially should cast a wide net. Apply for NSFAS regardless of whether you're applying for corporate bursaries — they serve different purposes and the applications are independent.
            </p>
            <p className="mt-3">
              If you receive more than one offer, you will need to choose one and decline the others. That's a good problem to have. The risk of applying to too many is low. The risk of applying to too few is leaving university funding on the table.
            </p>
          </section>
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
