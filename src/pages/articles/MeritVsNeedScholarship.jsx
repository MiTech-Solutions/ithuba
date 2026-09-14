import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, XCircle } from "lucide-react";

const OG_IMG = "https://i.postimg.cc/d3T437Xk/45C7EB18-47F5-4CD3-9509-3A1092AF188E.png";

const comparisons = [
  {
    aspect: "Primary selection criterion",
    merit: "Academic excellence — your results are the main factor",
    need: "Financial need — your household income is the main factor",
  },
  {
    aspect: "Academic threshold",
    merit: "High — typically 80%+ average, sometimes 85%+",
    need: "Lower — usually 55–65% minimum to demonstrate academic viability",
  },
  {
    aspect: "Income requirement",
    merit: "None — open to students from any income background",
    need: "Yes — household income must fall below a set threshold",
  },
  {
    aspect: "Work-back obligation",
    merit: "Rarely — most merit scholarships are unconditional awards",
    need: "Rarely — need-based funding is usually a grant not a contract",
  },
  {
    aspect: "Repayment",
    merit: "None — scholarships are not loans",
    need: "None — need-based scholarships are grants",
  },
  {
    aspect: "Field of study restriction",
    merit: "Sometimes — some merit scholarships target specific disciplines",
    need: "Rarely — need-based funding is usually field-neutral",
  },
  {
    aspect: "Competitiveness",
    merit: "Very high — awarded to top performers nationally",
    need: "Moderate — determined primarily by financial circumstances",
  },
  {
    aspect: "Examples in South Africa",
    merit: "Allan Gray Orbis Foundation Fellowship, Rhodes Scholarship, university merit awards",
    need: "NSFAS, Mastercard Foundation Scholars Programme, most provincial government bursaries",
  },
];

const faqs = [
  {
    q: "Can I apply for both a merit scholarship and a need-based scholarship?",
    a: "Yes — applying for both simultaneously is not only allowed, it's smart strategy. However, you typically cannot hold both at the same time if they both cover the same costs. If you receive both offers, you would usually accept the more generous one and decline the other. Some need-based funders allow merit scholarships to supplement their funding if the merit award covers different costs — read both agreements carefully.",
  },
  {
    q: "What if my results are strong but my family also has financial need?",
    a: "You're in the strongest possible position. Apply for everything — merit scholarships, need-based funding, and corporate bursaries. Students with both strong academic results and demonstrated financial need are the ideal candidate for most funders. Don't self-select out of merit scholarships because you think need-based funding is 'more appropriate' — apply for both.",
  },
  {
    q: "Is NSFAS a scholarship or a bursary?",
    a: "NSFAS is technically a bursary — it's South African government funding that requires no repayment and has no work-back obligation. It's need-based, not merit-based. The distinction between 'bursary' and 'scholarship' is not always used consistently in South Africa — what matters is the specific terms of each award, not the label.",
  },
  {
    q: "Do merit scholarships look at matric results only?",
    a: "Not necessarily. University merit scholarships are usually based on your university academic record — your results in your current degree programme. Pre-university merit scholarships, like the Allan Gray Orbis Foundation Fellowship, do consider matric results but also assess leadership, entrepreneurial thinking, and character through a multi-stage selection process. Strong matric results are necessary but not always sufficient.",
  },
  {
    q: "Are there merit scholarships for students who didn't get exceptional matric results?",
    a: "Yes — some merit scholarships are based on university performance rather than matric results, so a student who underperformed in matric but excels at university can still qualify. Others consider non-academic merit — community leadership, innovation, or artistic achievement. Broaden your definition of merit when searching.",
  },
];

export default function ArticleMeritVsNeedScholarship() {
  return (
    <>
      <Helmet>
        <title>Merit Scholarship vs Need-Based Scholarship — What's the Difference? | Ithuba</title>
        <meta name="description" content="What's the difference between a merit scholarship and a need-based scholarship in South Africa? A detailed comparison covering eligibility, competitiveness, and which to apply for." />
        <link rel="canonical" href="https://ithubahub.co.za/articles/merit-scholarship-vs-need-based-scholarship" />
        <meta property="og:title" content="Merit Scholarship vs Need-Based Scholarship | Ithuba" />
        <meta property="og:description" content="Merit vs need-based scholarships in South Africa — eligibility, competitiveness, examples, and which is right for you." />
        <meta property="og:url" content="https://ithubahub.co.za/articles/merit-scholarship-vs-need-based-scholarship" />
        <meta property="og:image" content={OG_IMG} />
        <meta name="twitter:title" content="Merit Scholarship vs Need-Based Scholarship | Ithuba" />
        <meta name="twitter:description" content="Merit vs need-based scholarships in South Africa — eligibility, competitiveness, and which to apply for." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "headline": "Merit Scholarship vs Need-Based Scholarship — What's the Difference?",
              "url": "https://ithubahub.co.za/articles/merit-scholarship-vs-need-based-scholarship",
              "publisher": { "@type": "Organization", "name": "Ithuba", "url": "https://ithubahub.co.za" },
              "datePublished": "2026-09-06",
              "dateModified": "2026-09-06",
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
                { "@type": "ListItem", "position": 3, "name": "Merit vs Need-Based Scholarship", "item": "https://ithubahub.co.za/articles/merit-scholarship-vs-need-based-scholarship" },
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
          <span className="text-forest-800 dark:text-forest-200 font-medium">Merit vs need-based scholarship</span>
        </nav>

        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center rounded-full bg-forest-100 dark:bg-forest-800 px-3 py-1 text-xs font-medium text-forest-600 dark:text-forest-300">Comparison</span>
            <span className="text-xs text-forest-400 dark:text-forest-500">Updated September 2026 · 7 min read</span>
          </div>
          <h1 className="font-display text-3xl font-semibold text-forest-900 dark:text-forest-50 sm:text-4xl leading-snug">
            Merit scholarship vs need-based scholarship — what's the difference?
          </h1>
          <p className="mt-4 text-sm leading-7 text-forest-600 dark:text-forest-400">
            South African students often use "bursary" and "scholarship" interchangeably, and sometimes use "merit" and "need-based" without a clear understanding of what each means. This guide explains the real distinction, who qualifies for each, and how to decide which type to prioritise in your applications.
          </p>
        </div>

        {/* Summary cards */}
        <div className="grid gap-4 sm:grid-cols-2 mb-10">
          <div className="rounded-2xl border border-forest-200 dark:border-forest-700 bg-forest-50 dark:bg-forest-900 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-forest-500 dark:text-forest-400 mb-2">Merit scholarship</p>
            <h2 className="font-display text-lg font-semibold text-forest-900 dark:text-forest-50 mb-2">Rewarding academic excellence</h2>
            <p className="text-sm leading-6 text-forest-600 dark:text-forest-400">Awarded based on exceptional academic results. Open to students from any income background. Highly competitive — typically reserved for the top performers in their field or institution.</p>
          </div>
          <div className="rounded-2xl border border-gold-200 dark:border-gold-900/40 bg-gold-50 dark:bg-gold-900/10 p-5">
            <p className="text-xs font-semibold uppercase tracking-wider text-gold-600 dark:text-gold-400 mb-2">Need-based scholarship</p>
            <h2 className="font-display text-lg font-semibold text-forest-900 dark:text-forest-50 mb-2">Enabling access through support</h2>
            <p className="text-sm leading-6 text-forest-600 dark:text-forest-400">Awarded based on financial need. Academic results must meet a minimum threshold but are not the primary factor. Specifically designed to make higher education accessible to students who could not otherwise afford it.</p>
          </div>
        </div>

        <div className="space-y-10 text-sm leading-7 text-forest-700 dark:text-forest-300">

          {/* Comparison table */}
          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-4">Side-by-side comparison</h2>
            <div className="rounded-2xl border border-forest-200 dark:border-forest-700 overflow-hidden">
              <div className="grid grid-cols-3 bg-forest-800 dark:bg-forest-900 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-forest-200">
                <span>Aspect</span>
                <span>Merit</span>
                <span>Need-based</span>
              </div>
              <div className="divide-y divide-forest-100 dark:divide-forest-800 bg-white dark:bg-forest-900">
                {comparisons.map((row) => (
                  <div key={row.aspect} className="grid grid-cols-3 gap-3 px-4 py-4 text-sm">
                    <p className="font-medium text-forest-800 dark:text-forest-200">{row.aspect}</p>
                    <p className="text-forest-600 dark:text-forest-400 leading-5">{row.merit}</p>
                    <p className="text-forest-600 dark:text-forest-400 leading-5">{row.need}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Merit scholarships in SA */}
          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">Merit scholarships in South Africa — what they look like</h2>
            <p>True merit scholarships in South Africa are rare and extremely competitive. The most well-known examples are:</p>
            <div className="mt-4 space-y-4">
              {[
                { name: "Allan Gray Orbis Foundation Fellowship", detail: "Not purely academic — the Foundation looks for entrepreneurial thinking, values, and leadership potential alongside strong results. The selection process includes multiple rounds of assessment. Fewer than 1% of applicants receive a Fellowship. This is one of the most prestigious awards a South African student can receive." },
                { name: "Rhodes Scholarship", detail: "Awarded for academic excellence, leadership, commitment to others, and physical vigour. South African winners go to Oxford University for postgraduate study. Extremely competitive — only a handful of South African awards are made each year." },
                { name: "Mandela Rhodes Scholarship", detail: "Combines academic merit with leadership and a commitment to African development. For postgraduate students at South African universities. Applicants are assessed on academic record, leadership experience, and a written motivation." },
                { name: "University merit scholarships", detail: "Every public university offers merit bursaries to top-performing students — typically those who achieve above 80% in their first year or higher. These are smaller than the flagship scholarships above but more accessible. Check your university's financial aid office for the threshold at your institution." },
              ].map((item) => (
                <div key={item.name} className="rounded-2xl border border-forest-100 dark:border-forest-800 bg-white dark:bg-forest-900 p-5">
                  <p className="font-semibold text-forest-900 dark:text-forest-50 mb-1">{item.name}</p>
                  <p>{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Need-based in SA */}
          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">Need-based scholarships and bursaries in South Africa</h2>
            <p>The majority of student funding in South Africa is need-based. The largest programmes are:</p>
            <div className="mt-4 space-y-4">
              {[
                { name: "NSFAS", detail: "The largest need-based funding programme in South Africa, covering students at all public universities and TVET colleges whose household income is R350,000/year or below. Academic results must meet a minimum threshold but financial need is the primary qualification." },
                { name: "Mastercard Foundation Scholars Programme", detail: "A need-informed merit scholarship — it considers both academic potential and economic need. Specifically for African students with strong academic records who would not otherwise be able to access higher education. Available at select partner universities including UCT and UKZN." },
                { name: "Government department bursaries", detail: "Most government department bursaries — Department of Health, Funza Lushaka, provincial education bursaries — are primarily need-informed. They require a minimum academic performance but prioritise students from disadvantaged backgrounds and communities with critical skills shortages." },
                { name: "NGO bursaries", detail: "Many NGO bursaries consider both need and merit holistically. The Ithuba bursary directory lists several NGO funders — check each one's eligibility criteria, as they vary significantly." },
              ].map((item) => (
                <div key={item.name} className="rounded-2xl border border-forest-100 dark:border-forest-800 bg-white dark:bg-forest-900 p-5">
                  <p className="font-semibold text-forest-900 dark:text-forest-50 mb-1">{item.name}</p>
                  <p>{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Which to apply for */}
          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">Which should you apply for?</h2>
            <div className="space-y-4">
              <div className="rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 p-5">
                <h3 className="font-semibold text-forest-900 dark:text-forest-50 mb-3">Prioritise merit scholarships if:</h3>
                <ul className="space-y-2">
                  {[
                    "Your academic average is consistently above 80%",
                    "You have demonstrable leadership, entrepreneurial, or community achievement",
                    "Your household income does not qualify you for need-based funding",
                    "You want an award with no strings attached — no work-back, no income disclosure",
                    "You're aiming for postgraduate study and want recognition that opens doors internationally",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle size={13} className="text-forest-500 dark:text-forest-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-gold-200 dark:border-gold-900/40 bg-gold-50 dark:bg-gold-900/10 p-5">
                <h3 className="font-semibold text-forest-900 dark:text-forest-50 mb-3">Prioritise need-based funding if:</h3>
                <ul className="space-y-2">
                  {[
                    "Your household income is below R350,000/year — apply for NSFAS immediately",
                    "Your results are solid but not in the top percentile nationally",
                    "You need comprehensive coverage — tuition, accommodation, living costs",
                    "You want funding that is more accessible and less dependent on competing with top performers",
                    "You are from a disadvantaged community or underserved school — this strengthens need-based applications",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle size={13} className="text-gold-600 dark:text-gold-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-forest-200 dark:border-forest-700 bg-forest-50 dark:bg-forest-900 p-5">
                <h3 className="font-semibold text-forest-900 dark:text-forest-50 mb-2">The honest answer for most students:</h3>
                <p>Apply for both. Most students who qualify for need-based funding also meet the minimum academic threshold for merit scholarships. Most students with exceptional results also benefit from supplementary need-based funding. The categories are not mutually exclusive and applying widely is always the right strategy.</p>
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

        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link to="/scholarships" className="inline-flex items-center gap-2 rounded-xl bg-forest-600 dark:bg-forest-500 px-5 py-3 text-sm font-medium text-white hover:bg-forest-700 transition">
            Browse scholarships <ArrowRight size={15} />
          </Link>
          <Link to="/articles/nsfas-vs-corporate-bursary" className="inline-flex items-center gap-2 rounded-xl border border-forest-300 dark:border-forest-700 px-5 py-3 text-sm font-medium text-forest-700 dark:text-forest-300 hover:bg-forest-100 dark:hover:bg-forest-800 transition">
            NSFAS vs corporate bursary <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </>
  );
}
