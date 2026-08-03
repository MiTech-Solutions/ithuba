import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, XCircle } from "lucide-react";

const OG_IMG = "https://i.postimg.cc/d3T437Xk/45C7EB18-47F5-4CD3-9509-3A1092AF188E.png";

const comparisons = [
  {
    aspect: "Who qualifies",
    nsfas: "South African citizens from households earning R350,000/year or less. Studying at a public university or TVET college.",
    corporate: "Any South African student in the funder's preferred field of study. Academic merit often matters more than income.",
  },
  {
    aspect: "What it covers",
    nsfas: "Tuition, accommodation, meals, learning materials, transport, and a personal care allowance. Comprehensive.",
    corporate: "Usually full tuition plus accommodation, meals, and a monthly stipend. Often more generous than NSFAS in rand value.",
  },
  {
    aspect: "Work-back obligation",
    nsfas: "None. NSFAS is a grant — you do not repay it and you are free to work anywhere after graduating.",
    corporate: "Yes — you must work for the funding company for a period equal to the years funded, typically 3–4 years.",
  },
  {
    aspect: "Field of study",
    nsfas: "Any field at a public institution. No restriction on what you study.",
    corporate: "Specific to the funder's industry — engineering companies fund engineers, banks fund finance students.",
  },
  {
    aspect: "Competitiveness",
    nsfas: "Income-based — if you qualify financially and academically, approval is likely. Less competitive than corporate.",
    corporate: "Highly competitive. Acceptance rates at major corporate bursaries can be below 5%.",
  },
  {
    aspect: "Application process",
    nsfas: "Online via my.nsfas.org.za. Documents-heavy but no interview for most applicants.",
    corporate: "Application form, motivation letter, academic results, and usually an interview with a panel.",
  },
  {
    aspect: "Monthly stipend",
    nsfas: "Yes — a living allowance is included, though amounts vary by institution.",
    corporate: "Usually yes, and often higher than NSFAS allowances. Varies by funder.",
  },
  {
    aspect: "Job security after graduation",
    nsfas: "None — you graduate debt-free but find your own employment.",
    corporate: "Guaranteed employment with the funder for the work-back period. You start your career with a job confirmed.",
  },
  {
    aspect: "Can you apply for both?",
    nsfas: "Generally no — holding both simultaneously is usually not permitted as they both cover tuition.",
    corporate: "Disclose any existing NSFAS funding when applying. Some corporate funders will supplement rather than replace NSFAS.",
  },
];

const nsfasPros = [
  "No work-back obligation — complete freedom after graduating",
  "Income-based, not purely merit-based — more accessible",
  "Covers any field of study at any public institution",
  "No interview required for most applicants",
  "Renewable automatically each year if you meet academic requirements",
];

const nsfasCons = [
  "Income cap of R350,000/year excludes the 'missing middle'",
  "Allowance amounts can be lower than corporate bursaries",
  "Does not fund private universities or postgraduate study",
  "Disbursement delays are a known issue each year",
  "No mentorship, vacation work, or career development support",
];

const corporatePros = [
  "Often more financially generous than NSFAS",
  "Guaranteed employment after graduation",
  "Structured mentorship and vacation work during your degree",
  "Networking within your industry from day one",
  "Not income-restricted — open to students from any background",
];

const corporateCons = [
  "Work-back obligation limits your career flexibility for 3–4 years",
  "Field-specific — only available in certain disciplines",
  "Highly competitive with low acceptance rates",
  "Requires a strong motivation letter and interview performance",
  "Breaking the work-back agreement requires repaying the full bursary",
];

const faqs = [
  {
    q: "Can I apply for NSFAS and a corporate bursary at the same time?",
    a: "You can apply for both simultaneously, but you generally cannot hold both at the same time since they both cover tuition. If you receive a corporate bursary offer, you would typically decline or return NSFAS funding. Always disclose existing funding when applying and read the terms of each bursary carefully.",
  },
  {
    q: "What if I qualify for both — which should I choose?",
    a: "If you have a clear career direction in a funded field like engineering, finance, or IT, a corporate bursary is almost always the better option — it's more generous, provides guaranteed employment, and accelerates your career. If you're undecided about your career path or want maximum flexibility, NSFAS gives you that freedom.",
  },
  {
    q: "Is the work-back agreement a disadvantage?",
    a: "Not necessarily. For students who know which industry they want to enter, the work-back period is often a positive — you start your career immediately with structured mentorship, industry experience, and a salary. Many students who complete their work-back choose to stay with the company voluntarily. It only becomes a constraint if your career goals change significantly during your degree.",
  },
  {
    q: "What happens if I can't complete the corporate work-back?",
    a: "You'll be required to repay the full bursary value — sometimes with interest. This is a legally binding agreement. Read it carefully before signing and understand the implications. Most funders have provisions for legitimate circumstances like health issues, but leaving voluntarily without cause will typically trigger full repayment.",
  },
  {
    q: "Are corporate bursaries only for engineering students?",
    a: "No — corporate bursaries exist across many fields. Banks fund finance, accounting, and IT students. Healthcare companies fund medicine and pharmacy students. Retailers and logistics companies fund supply chain and business students. The key is finding funders in your specific field.",
  },
];

export default function ArticleNSFASvsCorporate() {
  return (
    <>
      <Helmet>
        <title>NSFAS vs Corporate Bursary — Which is Better for You? | Ithuba</title>
        <meta
          name="description"
          content="Detailed comparison of NSFAS vs corporate bursaries in South Africa. Understand the differences in coverage, work-back obligations, eligibility, and which is right for your situation."
        />
        <link rel="canonical" href="https://ithubahub.co.za/articles/nsfas-vs-corporate-bursary" />
        <meta property="og:title" content="NSFAS vs Corporate Bursary — Which is Better for You? | Ithuba" />
        <meta property="og:description" content="NSFAS or corporate bursary? A detailed comparison of coverage, work-back obligations, eligibility, and which suits your situation best." />
        <meta property="og:url" content="https://ithubahub.co.za/articles/nsfas-vs-corporate-bursary" />
        <meta property="og:image" content={OG_IMG} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "headline": "NSFAS vs Corporate Bursary — Which is Better for You?",
              "description": "A detailed comparison of NSFAS and corporate bursaries in South Africa.",
              "url": "https://ithubahub.co.za/articles/nsfas-vs-corporate-bursary",
              "publisher": { "@type": "Organization", "name": "Ithuba", "url": "https://ithubahub.co.za" },
              "datePublished": "2026-07-20",
              "dateModified": "2026-07-20",
            },
            {
              "@type": "FAQPage",
              "mainEntity": faqs.map(({ q, a }) => ({
                "@type": "Question",
                "name": q,
                "acceptedAnswer": { "@type": "Answer", "text": a },
              })),
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ithubahub.co.za" },
                { "@type": "ListItem", "position": 2, "name": "Articles", "item": "https://ithubahub.co.za/articles" },
                { "@type": "ListItem", "position": 3, "name": "NSFAS vs Corporate Bursary", "item": "https://ithubahub.co.za/articles/nsfas-vs-corporate-bursary" },
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
          <span className="text-forest-800 dark:text-forest-200 font-medium">NSFAS vs corporate bursary</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center rounded-full bg-forest-100 dark:bg-forest-800 px-3 py-1 text-xs font-medium text-forest-600 dark:text-forest-300">Comparison</span>
            <span className="text-xs text-forest-400 dark:text-forest-500">Updated July 2026 · 9 min read</span>
          </div>
          <h1 className="font-display text-3xl font-semibold text-forest-900 dark:text-forest-50 sm:text-4xl leading-snug">
            NSFAS vs corporate bursary — which is better for you?
          </h1>
          <p className="mt-4 text-sm leading-7 text-forest-600 dark:text-forest-400">
            Both NSFAS and corporate bursaries can fund your university education — but they work very differently, suit different students, and come with very different obligations. This guide breaks down every meaningful difference so you can make the right decision for your situation.
          </p>
        </div>

        {/* Quick summary cards */}
        <div className="grid gap-4 sm:grid-cols-2 mb-10">
          <div className="rounded-2xl border border-forest-200 dark:border-forest-700 bg-forest-50 dark:bg-forest-900 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-forest-500 dark:text-forest-400 mb-2">NSFAS</p>
            <h2 className="font-display text-lg font-semibold text-forest-900 dark:text-forest-50 mb-2">Government grant — no strings</h2>
            <p className="text-sm leading-6 text-forest-600 dark:text-forest-400">Need-based funding from the government. No repayment, no work-back. Complete freedom after graduation but income-restricted and less generous.</p>
          </div>
          <div className="rounded-2xl border border-gold-200 dark:border-gold-900/40 bg-gold-50 dark:bg-gold-900/10 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-gold-600 dark:text-gold-400 mb-2">Corporate bursary</p>
            <h2 className="font-display text-lg font-semibold text-forest-900 dark:text-forest-50 mb-2">Private funding — with obligations</h2>
            <p className="text-sm leading-6 text-forest-600 dark:text-forest-400">Merit-based funding from a company in exchange for working with them after graduation. More generous, career-accelerating, but field-specific and competitive.</p>
          </div>
        </div>

        <div className="space-y-10 text-sm leading-7 text-forest-700 dark:text-forest-300">

          {/* Comparison table */}
          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-4">Side-by-side comparison</h2>
            <div className="rounded-2xl border border-forest-200 dark:border-forest-700 overflow-hidden">
              <div className="grid grid-cols-3 bg-forest-800 dark:bg-forest-900 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-forest-200">
                <span>Aspect</span>
                <span>NSFAS</span>
                <span>Corporate bursary</span>
              </div>
              <div className="divide-y divide-forest-100 dark:divide-forest-800 bg-white dark:bg-forest-900">
                {comparisons.map((row) => (
                  <div key={row.aspect} className="grid grid-cols-3 gap-3 px-4 py-4 text-sm">
                    <p className="font-medium text-forest-800 dark:text-forest-200">{row.aspect}</p>
                    <p className="text-forest-600 dark:text-forest-400 leading-5">{row.nsfas}</p>
                    <p className="text-forest-600 dark:text-forest-400 leading-5">{row.corporate}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* NSFAS pros and cons */}
          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-4">NSFAS — pros and cons</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-forest-500 dark:text-forest-400 mb-3">Advantages</p>
                <ul className="space-y-2.5">
                  {nsfasPros.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle size={13} className="text-forest-500 dark:text-forest-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-red-100 dark:border-red-900/30 bg-white dark:bg-forest-900 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-red-400 mb-3">Disadvantages</p>
                <ul className="space-y-2.5">
                  {nsfasCons.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <XCircle size={13} className="text-red-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Corporate pros and cons */}
          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-4">Corporate bursary — pros and cons</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-forest-500 dark:text-forest-400 mb-3">Advantages</p>
                <ul className="space-y-2.5">
                  {corporatePros.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle size={13} className="text-forest-500 dark:text-forest-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-red-100 dark:border-red-900/30 bg-white dark:bg-forest-900 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-red-400 mb-3">Disadvantages</p>
                <ul className="space-y-2.5">
                  {corporateCons.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <XCircle size={13} className="text-red-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Who should choose what */}
          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-4">Which is right for you?</h2>
            <div className="space-y-4">
              <div className="rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 p-5">
                <h3 className="font-semibold text-forest-900 dark:text-forest-50 mb-2">Choose NSFAS if:</h3>
                <ul className="space-y-2">
                  {[
                    "Your household income is R350,000/year or less",
                    "You haven't decided on a career direction yet",
                    "You want to study any field without restriction",
                    "You're uncomfortable committing to a specific employer before graduating",
                    "You plan to pursue postgraduate study or work abroad immediately after graduating",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-forest-600 dark:text-forest-400">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-forest-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-gold-200 dark:border-gold-900/40 bg-gold-50 dark:bg-gold-900/10 p-5">
                <h3 className="font-semibold text-forest-900 dark:text-forest-50 mb-2">Choose a corporate bursary if:</h3>
                <ul className="space-y-2">
                  {[
                    "You have a clear career direction in a funded field like engineering, finance, or IT",
                    "You want guaranteed employment and mentorship from day one",
                    "Your household income exceeds the NSFAS threshold",
                    "You're comfortable with a 3–4 year work commitment after graduating",
                    "You want the most financially generous funding package available",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-forest-600 dark:text-forest-400">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-5">Frequently asked questions</h2>
            <div className="space-y-5">
              {faqs.map(({ q, a }) => (
                <div key={q} className="border-b border-forest-100 dark:border-forest-800 pb-5 last:border-0 last:pb-0">
                  <h3 className="font-semibold text-forest-900 dark:text-forest-50 mb-2">{q}</h3>
                  <p>{a}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link to="/bursaries/type/corporate" className="inline-flex items-center gap-2 rounded-xl bg-forest-600 dark:bg-forest-500 px-5 py-3 text-sm font-medium text-white hover:bg-forest-700 transition">
            Browse corporate bursaries <ArrowRight size={15} />
          </Link>
          <Link to="/articles/nsfas-2026-guide" className="inline-flex items-center gap-2 rounded-xl border border-forest-300 dark:border-forest-700 px-5 py-3 text-sm font-medium text-forest-700 dark:text-forest-300 hover:bg-forest-100 dark:hover:bg-forest-800 transition">
            Full NSFAS guide <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </>
  );
}
