import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, XCircle, AlertCircle } from "lucide-react";

const OG_IMG = "https://i.postimg.cc/d3T437Xk/45C7EB18-47F5-4CD3-9509-3A1092AF188E.png";

const comparisons = [
  {
    aspect: "Repayment",
    bursary: "None — a bursary is a grant, not a loan. You never repay the money.",
    loan: "Full amount plus interest, typically starting 6–12 months after graduation.",
  },
  {
    aspect: "Interest",
    bursary: "None. Bursaries are free money.",
    loan: "Interest accrues from the date of disbursement. Rates vary by lender — typically prime +1% to prime +3%.",
  },
  {
    aspect: "Eligibility",
    bursary: "Based on academic merit, field of study, and sometimes household income. Competitive.",
    loan: "Based on creditworthiness of a guarantor (usually a parent). Easier to access but requires a guarantor.",
  },
  {
    aspect: "Obligations",
    bursary: "Work-back agreement for corporate bursaries. No financial repayment.",
    loan: "Monthly repayments after graduation regardless of employment status.",
  },
  {
    aspect: "Amount available",
    bursary: "Covers full cost of study for most bursaries — tuition, accommodation, meals, stipend.",
    loan: "Up to the full cost of study, subject to the lender's cap and guarantor's credit limit.",
  },
  {
    aspect: "What happens if you fail",
    bursary: "Bursary may be suspended pending appeal. Academic requirements must be maintained.",
    loan: "Debt remains. Repayment schedule is not affected by academic performance.",
  },
  {
    aspect: "Impact on credit record",
    bursary: "None — bursaries don't appear on your credit record.",
    loan: "Missed repayments are recorded and can affect your credit score for years.",
  },
  {
    aspect: "Career flexibility",
    bursary: "Limited by work-back for corporate bursaries. NSFAS has no restriction.",
    loan: "Complete career freedom — you can work anywhere and repay from any salary.",
  },
];

const faqs = [
  {
    q: "Can I get a student loan if I already have a bursary?",
    a: "It depends on the lender and the terms of your bursary. Some bursaries cover only tuition, leaving accommodation and living costs uncovered. A student loan could supplement those costs. However, if your bursary covers everything, taking on debt unnecessarily is not advisable. Always check your bursary contract before applying for additional funding.",
  },
  {
    q: "What happens to my student loan if I can't find a job after graduating?",
    a: "The debt remains and repayment is expected. Most South African lenders offer a grace period of 6–12 months after graduation before repayments begin, but interest continues to accrue during that period. If you struggle to repay, contact your lender immediately — deferment or restructuring options may be available, but they are not guaranteed.",
  },
  {
    q: "Is a student loan better than nothing if I can't get a bursary?",
    a: "Yes, in most cases. A student loan with a manageable repayment schedule is generally better than not studying at all. However, exhaust every bursary option first — including less well-known NGO and government bursaries — before taking on debt. Many students don't apply widely enough.",
  },
  {
    q: "Which South African banks offer student loans?",
    a: "ABSA, Standard Bank, Nedbank, FNB, and Capitec all offer student loans. Fundi is a dedicated student finance provider that offers both loans and bursaries. Interest rates and terms differ significantly — compare options before committing. A parent or guardian with a good credit record as guarantor will get you the best rate.",
  },
  {
    q: "How much does a typical student loan cost over time?",
    a: "A R100,000 student loan at prime +2% (currently approximately 13.25%) repaid over 5 years after graduation would cost approximately R135,000 in total — meaning you pay R35,000 in interest. Over 10 years the total cost rises significantly. This illustrates why exhausting bursary options first is financially important.",
  },
];

export default function ArticleBursaryVsLoan() {
  return (
    <>
      <Helmet>
        <title>Bursary vs Student Loan — Which Should You Choose? | Ithuba</title>
        <meta
          name="description"
          content="Should you apply for a bursary or take a student loan? A detailed comparison of bursaries and student loans in South Africa — repayment, interest, eligibility, and which is right for you."
        />
        <meta name="description" content="Should you apply for a bursary or take a student loan? A detailed comparison covering repayment, interest, eligibility and career flexibility." />
        <link rel="canonical" href="https://ithubahub.co.za/articles/bursary-vs-student-loan" />
        <meta property="og:title" content="Bursary vs Student Loan — Which Should You Choose? | Ithuba" />
        <meta property="og:description" content="Bursary or student loan? A detailed comparison covering repayment, interest, eligibility, and career flexibility." />
        <meta property="og:url" content="https://ithubahub.co.za/articles/bursary-vs-student-loan" />
        <meta property="og:image" content={OG_IMG} />
        <meta name="twitter:title" content="Bursary vs Student Loan — Which Should You Choose? | Ithuba" />
        <meta name="twitter:description" content="Should you apply for a bursary or take a student loan? A detailed comparison covering repayment, interest and career flexibility." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={OG_IMG} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "headline": "Bursary vs Student Loan — Which Should You Choose?",
              "description": "A detailed comparison of bursaries and student loans in South Africa.",
              "url": "https://ithubahub.co.za/articles/bursary-vs-student-loan",
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
                { "@type": "ListItem", "position": 3, "name": "Bursary vs Student Loan", "item": "https://ithubahub.co.za/articles/bursary-vs-student-loan" },
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
          <span className="text-forest-800 dark:text-forest-200 font-medium">Bursary vs student loan</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center rounded-full bg-forest-100 dark:bg-forest-800 px-3 py-1 text-xs font-medium text-forest-600 dark:text-forest-300">Comparison</span>
            <span className="text-xs text-forest-400 dark:text-forest-500">Updated July 2026 · 8 min read</span>
          </div>
          <h1 className="font-display text-3xl font-semibold text-forest-900 dark:text-forest-50 sm:text-4xl leading-snug">
            Bursary vs student loan — which should you choose?
          </h1>
          <p className="mt-4 text-sm leading-7 text-forest-600 dark:text-forest-400">
            The answer is almost always: try for a bursary first, use a loan only if necessary. But understanding exactly why — and what the real costs of each option are — is important before you commit to either.
          </p>
        </div>

        {/* Critical notice */}
        <div className="mb-10 flex gap-3 rounded-2xl border border-gold-200 dark:border-gold-900/40 bg-gold-50 dark:bg-gold-900/10 p-5">
          <AlertCircle size={18} className="text-gold-600 dark:text-gold-400 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-forest-900 dark:text-forest-50 mb-1">The most important thing to understand</p>
            <p className="text-sm leading-6 text-forest-700 dark:text-forest-300">
              A bursary is free money. A student loan is debt. No matter how manageable the repayments sound, starting your career owing tens of thousands of rands is a real constraint on your life choices. Exhaust every bursary option — including less well-known ones — before turning to a loan.
            </p>
          </div>
        </div>

        <div className="space-y-10 text-sm leading-7 text-forest-700 dark:text-forest-300">

          {/* Comparison table */}
          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-4">Side-by-side comparison</h2>
            <div className="rounded-2xl border border-forest-200 dark:border-forest-700 overflow-hidden">
              <div className="grid grid-cols-3 bg-forest-800 dark:bg-forest-900 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-forest-200">
                <span>Aspect</span>
                <span>Bursary</span>
                <span>Student loan</span>
              </div>
              <div className="divide-y divide-forest-100 dark:divide-forest-800 bg-white dark:bg-forest-900">
                {comparisons.map((row) => (
                  <div key={row.aspect} className="grid grid-cols-3 gap-3 px-4 py-4 text-sm">
                    <p className="font-medium text-forest-800 dark:text-forest-200">{row.aspect}</p>
                    <p className="text-forest-600 dark:text-forest-400 leading-5">{row.bursary}</p>
                    <p className="text-forest-600 dark:text-forest-400 leading-5">{row.loan}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* The real cost of a student loan */}
          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">The real cost of a student loan</h2>
            <p>
              Most students focus on the monthly repayment amount when evaluating a loan. The more important number is the total cost — how much you repay over the full life of the loan, including interest.
            </p>
            <div className="mt-5 rounded-2xl border border-forest-200 dark:border-forest-700 overflow-hidden">
              <div className="grid grid-cols-4 bg-forest-50 dark:bg-forest-800 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-forest-500 dark:text-forest-400">
                <span>Loan amount</span>
                <span>Interest rate</span>
                <span>Repayment term</span>
                <span>Total cost</span>
              </div>
              <div className="divide-y divide-forest-100 dark:divide-forest-800 bg-white dark:bg-forest-900">
                {[
                  { amount: "R50,000",  rate: "13.25%", term: "5 years",  total: "R67,500" },
                  { amount: "R100,000", rate: "13.25%", term: "5 years",  total: "R135,000" },
                  { amount: "R150,000", rate: "13.25%", term: "5 years",  total: "R202,500" },
                  { amount: "R100,000", rate: "13.25%", term: "10 years", total: "R185,000" },
                  { amount: "R200,000", rate: "13.25%", term: "10 years", total: "R370,000" },
                ].map((row, i) => (
                  <div key={i} className="grid grid-cols-4 gap-3 px-4 py-3 text-sm">
                    <p className="font-medium text-forest-800 dark:text-forest-200">{row.amount}</p>
                    <p className="text-forest-600 dark:text-forest-400">{row.rate}</p>
                    <p className="text-forest-600 dark:text-forest-400">{row.term}</p>
                    <p className="font-semibold text-forest-800 dark:text-forest-200">{row.total}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-3 text-xs text-forest-400 dark:text-forest-500">Estimates only. Actual repayments depend on interest rate at time of agreement. Rates shown at approximately prime +2% (July 2026).</p>
          </section>

          {/* When a loan makes sense */}
          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">When a student loan makes sense</h2>
            <p>
              A loan is not inherently bad — it's a tool. There are situations where it's the right one:
            </p>
            <ul className="mt-3 space-y-3">
              {[
                { title: "You don't qualify for NSFAS and missed bursary deadlines", body: "If you're already enrolled and have exhausted all bursary options for the current year, a student loan keeps you studying rather than dropping out." },
                { title: "Your bursary covers tuition but not living costs", body: "A partial loan to cover accommodation and meals while a bursary covers tuition is a reasonable approach and limits the total debt." },
                { title: "You're studying a high-earning field", body: "A doctor, engineer, or actuary borrowing R150,000 to fund their degree is in a different position to a student borrowing the same amount for a degree with uncertain employment prospects. Factor your likely starting salary into the decision." },
                { title: "You need a bridge while waiting for bursary approval", body: "Some corporate bursaries are confirmed mid-year. A short-term loan to cover the first semester while a bursary application is processed can be paid off immediately upon approval." },
              ].map((item) => (
                <li key={item.title} className="rounded-2xl border border-forest-100 dark:border-forest-800 bg-white dark:bg-forest-900 p-4">
                  <p className="font-semibold text-forest-900 dark:text-forest-50 mb-1">{item.title}</p>
                  <p>{item.body}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Bursary pros and cons */}
          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-4">Bursary vs loan — pros and cons at a glance</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-forest-500 dark:text-forest-400 mb-3">Bursary advantages</p>
                <ul className="space-y-2">
                  {["No repayment ever", "No interest", "No impact on credit record", "May include stipend and extras", "Possible guaranteed employment"].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle size={13} className="text-forest-500 dark:text-forest-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-forest-500 dark:text-forest-400 mb-3">Loan advantages</p>
                <ul className="space-y-2">
                  {["Accessible without merit or income criteria", "No field restriction", "No work-back obligation", "Can fund any institution", "Available when bursaries aren't"].map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle size={13} className="text-forest-500 dark:text-forest-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
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
          <Link to="/bursaries" className="inline-flex items-center gap-2 rounded-xl bg-forest-600 dark:bg-forest-500 px-5 py-3 text-sm font-medium text-white hover:bg-forest-700 transition">
            Browse bursaries <ArrowRight size={15} />
          </Link>
          <Link to="/guides/how-to-apply-for-a-bursary" className="inline-flex items-center gap-2 rounded-xl border border-forest-300 dark:border-forest-700 px-5 py-3 text-sm font-medium text-forest-700 dark:text-forest-300 hover:bg-forest-100 dark:hover:bg-forest-800 transition">
            How to apply guide <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </>
  );
}
