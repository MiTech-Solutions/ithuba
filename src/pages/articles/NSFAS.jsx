import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, AlertCircle, XCircle } from "lucide-react";

const OG_IMG = "https://i.postimg.cc/d3T437Xk/45C7EB18-47F5-4CD3-9509-3A1092AF188E.png";

const faqs = [
  {
    q: "Do I need to reapply for NSFAS every year?",
    a: "No — once approved, your NSFAS funding continues automatically provided you meet the academic progression requirements. You do not reapply each year. However, you must ensure your registration details and banking information remain up to date on the myNSFAS portal.",
  },
  {
    q: "Can I appeal if my NSFAS application is rejected?",
    a: "Yes. Log into your myNSFAS account, go to the appeals section, and submit supporting documentation explaining your circumstances. Common grounds for appeal include incorrect household income assessment, missing documents, or a change in family circumstances. Appeals are reviewed but not guaranteed.",
  },
  {
    q: "Does NSFAS cover private university students?",
    a: "No. NSFAS only funds students at public universities and public TVET colleges. Students at private institutions must explore alternative funding such as corporate bursaries, NGO scholarships, or student loans.",
  },
  {
    q: "What happens if I fail a module?",
    a: "NSFAS requires you to maintain satisfactory academic progress. Generally you must pass at least 50% of your registered modules per year. If you fail to meet this threshold, your funding may be suspended. You can appeal with a valid reason such as illness or family circumstances.",
  },
  {
    q: "Can I use NSFAS funding at a TVET college?",
    a: "Yes. NSFAS funds students at public TVET colleges for NCV (National Certificate Vocational) and Report 191 programmes. The allowances and amounts differ slightly from university funding.",
  },
  {
    q: "When does NSFAS money arrive in my account?",
    a: "Allowances are typically disbursed monthly. The first payment of the year is often delayed while registration is confirmed. Tuition is paid directly to the institution. Living and accommodation allowances are paid to your registered bank account or via the Fundi wallet system.",
  },
  {
    q: "What is the NSFAS wallet and how does it work?",
    a: "The NSFAS wallet is a digital payment system through which allowances are disbursed to students at some institutions. It functions like a prepaid card linked to your student profile. Not all institutions use the wallet — some pay directly to your bank account.",
  },
  {
    q: "Can I apply for NSFAS and a bursary at the same time?",
    a: "Generally no — NSFAS and a corporate or government bursary cannot be held simultaneously as they both cover tuition. However, the rules depend on the specific bursary. Some bursaries supplement NSFAS rather than replace it. Always disclose any existing funding when applying.",
  },
];

export default function ArticleNSFAS() {
  return (
    <>
      <Helmet>
        <title>NSFAS 2026 — Everything You Need to Know | Ithuba</title>
        <meta
          name="description"
          content="Complete guide to NSFAS 2026 in South Africa. How to apply, eligibility requirements, what NSFAS covers, allowances, appeals, and frequently asked questions."
        />
        <link rel="canonical" href="https://ithubahub.co.za/articles/nsfas-2026-guide" />
        <meta property="og:title" content="NSFAS 2026 — Everything You Need to Know | Ithuba" />
        <meta property="og:description" content="Complete guide to NSFAS 2026. How to apply, eligibility, allowances, appeals, and everything South African students need to know." />
        <meta property="og:url" content="https://ithubahub.co.za/articles/nsfas-2026-guide" />
        <meta property="og:image" content={OG_IMG} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "headline": "NSFAS 2026 — Everything You Need to Know",
              "description": "Complete guide to NSFAS 2026 covering eligibility, application, allowances, and appeals.",
              "url": "https://ithubahub.co.za/articles/nsfas-2026-guide",
              "publisher": { "@type": "Organization", "name": "Ithuba", "url": "https://ithubahub.co.za" },
              "datePublished": "2026-07-19",
              "dateModified": "2026-07-19",
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
                { "@type": "ListItem", "position": 3, "name": "NSFAS 2026 Guide", "item": "https://ithubahub.co.za/articles/nsfas-2026-guide" },
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
          <span className="text-forest-800 dark:text-forest-200 font-medium">NSFAS 2026</span>
        </nav>

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center rounded-full bg-forest-100 dark:bg-forest-800 px-3 py-1 text-xs font-medium text-forest-600 dark:text-forest-300">Funding Guide</span>
            <span className="text-xs text-forest-400 dark:text-forest-500">Updated July 2026 · 10 min read</span>
          </div>
          <h1 className="font-display text-3xl font-semibold text-forest-900 dark:text-forest-50 sm:text-4xl leading-snug">
            NSFAS 2026 — everything you need to know
          </h1>
          <p className="mt-4 text-sm leading-7 text-forest-600 dark:text-forest-400">
            The National Student Financial Aid Scheme (NSFAS) is South Africa's largest student funding programme, supporting hundreds of thousands of students each year. This guide covers everything — eligibility, how to apply, what it covers, allowances, and what to do if things go wrong.
          </p>
        </div>

        {/* Quick summary box */}
        <div className="mb-10 rounded-2xl border border-forest-200 dark:border-forest-700 bg-forest-50 dark:bg-forest-900 p-6">
          <p className="text-xs font-semibold uppercase tracking-wider text-forest-500 dark:text-forest-400 mb-4">Quick summary</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {[
              { label: "Who funds it",        value: "South African government" },
              { label: "Income threshold",    value: "Household income ≤ R350,000/year" },
              { label: "Who qualifies",       value: "SA citizens at public universities & TVET colleges" },
              { label: "Application portal",  value: "my.nsfas.org.za" },
              { label: "Typical opening",     value: "October – January each year" },
              { label: "Work-back required",  value: "No" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col">
                <span className="text-xs text-forest-500 dark:text-forest-400">{item.label}</span>
                <span className="text-sm font-medium text-forest-900 dark:text-forest-100 mt-0.5">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Article body */}
        <div className="space-y-10 text-sm leading-7 text-forest-700 dark:text-forest-300">

          {/* What is NSFAS */}
          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">What is NSFAS?</h2>
            <p>
              NSFAS — the National Student Financial Aid Scheme — is a government-funded bursary programme that covers the cost of tertiary education for South African students from low-income households. It is not a loan. Students who qualify do not repay NSFAS.
            </p>
            <p className="mt-3">
              NSFAS funds students at all 26 public universities and at public TVET (Technical and Vocational Education and Training) colleges across South Africa. It does not fund students at private institutions.
            </p>
          </section>

          {/* Eligibility */}
          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">Who qualifies for NSFAS?</h2>
            <p className="mb-4">To be eligible for NSFAS funding you must meet all of the following criteria:</p>
            <div className="space-y-2.5">
              {[
                "Be a South African citizen or permanent resident",
                "Have a combined household income of R350,000 per year or less",
                "Be accepted at or enrolled at a public university or public TVET college",
                "Be studying towards a first undergraduate qualification (NSFAS does not fund postgraduate study)",
                "Not have previously received a full undergraduate qualification",
                "Students with disabilities may qualify regardless of household income — contact NSFAS directly",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={15} className="text-forest-500 dark:text-forest-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* What NSFAS covers */}
          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">What does NSFAS cover?</h2>
            <p className="mb-4">
              NSFAS covers the full cost of study for qualifying students. This includes:
            </p>
            <div className="rounded-2xl border border-forest-200 dark:border-forest-700 overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-forest-50 dark:bg-forest-800 border-b border-forest-200 dark:border-forest-700">
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-forest-500 dark:text-forest-400">What it covers</th>
                    <th className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-forest-500 dark:text-forest-400">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-forest-100 dark:divide-forest-800 bg-white dark:bg-forest-900">
                  {[
                    { item: "Tuition fees",            note: "Paid directly to the institution" },
                    { item: "Accommodation",           note: "For students in university residences or approved private accommodation" },
                    { item: "Meals",                   note: "Meal allowance or university meal plan" },
                    { item: "Learning materials",      note: "Allowance for books and stationery" },
                    { item: "Transport",               note: "For students who commute" },
                    { item: "Personal care allowance", note: "For qualifying students" },
                  ].map((row) => (
                    <tr key={row.item}>
                      <td className="px-4 py-3 font-medium text-forest-800 dark:text-forest-200">{row.item}</td>
                      <td className="px-4 py-3 text-forest-500 dark:text-forest-400">{row.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* How to apply */}
          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">How to apply for NSFAS</h2>
            <p className="mb-5">Applications are submitted online through the myNSFAS portal at <a href="https://my.nsfas.org.za" target="_blank" rel="noopener noreferrer" className="text-forest-700 dark:text-forest-200 underline underline-offset-2 hover:text-forest-900 transition">my.nsfas.org.za</a>. The application window typically opens in October and closes in January before the academic year begins.</p>
            <div className="space-y-5">
              {[
                { step: "01", title: "Create a myNSFAS account", body: "Go to my.nsfas.org.za and register with your South African ID number and a valid email address. Keep your login details safe — you will use this account throughout your studies." },
                { step: "02", title: "Complete the online application", body: "Fill in your personal details, your parent or guardian's details, and household income information. Be accurate — incorrect information can lead to rejection or cancellation of funding." },
                { step: "03", title: "Upload supporting documents", body: "You will need certified copies of your ID, your parent or guardian's ID, proof of household income (payslips, SASSA letter, or an affidavit), and proof of registration or acceptance from your institution." },
                { step: "04", title: "Submit and track your application", body: "After submitting, track your application status through the myNSFAS portal. Processing can take several weeks. You will receive an SMS and email notification when a decision is made." },
                { step: "05", title: "Sign your bursary agreement", body: "If approved, you will be required to sign a NSFAS bursary agreement. This must be completed before funding is released. Check your myNSFAS account regularly for this step." },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-forest-600 dark:bg-forest-500 text-white text-xs font-bold">{item.step}</div>
                  <div>
                    <h3 className="font-semibold text-forest-900 dark:text-forest-50 mb-1">{item.title}</h3>
                    <p>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Common mistakes */}
          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">Common reasons NSFAS applications are rejected</h2>
            <div className="space-y-3">
              {[
                "Household income exceeds R350,000 per year",
                "Incomplete or incorrect documents uploaded",
                "ID number errors or mismatches",
                "Applying to a private institution (NSFAS only funds public institutions)",
                "Already holding a first undergraduate degree",
                "Application submitted after the closing date",
              ].map((reason) => (
                <div key={reason} className="flex items-start gap-3">
                  <XCircle size={15} className="text-red-400 dark:text-red-500 shrink-0 mt-0.5" />
                  <span>{reason}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Important notice */}
          <div className="rounded-2xl border border-gold-200 dark:border-gold-900/40 bg-gold-50 dark:bg-gold-900/10 p-5">
            <div className="flex gap-3">
              <AlertCircle size={18} className="text-gold-600 dark:text-gold-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-forest-900 dark:text-forest-50 mb-1">Watch out for NSFAS scams</p>
                <p>
                  NSFAS will never ask you to pay a fee to apply or to access your funding. All legitimate NSFAS communication comes from official <strong>@nsfas.org.za</strong> email addresses. Never share your myNSFAS login details with anyone. If you are unsure, contact NSFAS directly at 08000 67327.
                </p>
              </div>
            </div>
          </div>

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

          {/* Alternatives */}
          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">What if you don't qualify for NSFAS?</h2>
            <p>
              Not qualifying for NSFAS does not mean you have no options. Many South African students in the "missing middle" — households earning too much for NSFAS but not enough to comfortably afford university — successfully fund their studies through corporate bursaries, government department bursaries, NGO scholarships, and NSFAS-adjacent programmes at their institution.
            </p>
            <p className="mt-3">
              Corporate bursaries in fields like engineering, finance, IT, and medicine often provide full funding including accommodation and a stipend — sometimes exceeding what NSFAS covers. The trade-off is a work-back agreement, but for students with a clear career direction this is often a positive outcome.
            </p>
          </section>
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link to="/bursaries" className="inline-flex items-center gap-2 rounded-xl bg-forest-600 dark:bg-forest-500 px-5 py-3 text-sm font-medium text-white hover:bg-forest-700 transition">
            Browse all bursaries <ArrowRight size={15} />
          </Link>
          <Link to="/guides/how-to-apply-for-a-bursary" className="inline-flex items-center gap-2 rounded-xl border border-forest-300 dark:border-forest-700 px-5 py-3 text-sm font-medium text-forest-700 dark:text-forest-300 hover:bg-forest-100 dark:hover:bg-forest-800 transition">
            How to apply guide <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </>
  );
}
