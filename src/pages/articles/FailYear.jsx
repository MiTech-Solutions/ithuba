import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, AlertCircle, CheckCircle } from "lucide-react";

const OG_IMG = "https://i.postimg.cc/d3T437Xk/45C7EB18-47F5-4CD3-9509-3A1092AF188E.png";

const faqs = [
  {
    q: "Can I appeal if my bursary is suspended after failing?",
    a: "Yes — most funders have a formal appeal process. Submit your appeal as early as possible with supporting documentation explaining the circumstances. Valid grounds typically include serious illness, a family crisis, a bereavement, or mental health challenges. Vague appeals without documentation are rarely successful.",
  },
  {
    q: "Do I have to repay my bursary if I fail and lose it?",
    a: "It depends on the terms of your bursary agreement. Some agreements state that if you fail to meet academic requirements, you must repay a portion or all of the funding received. Others simply suspend future payments without requiring repayment of past funding. Read your agreement carefully — this is often in the fine print.",
  },
  {
    q: "What if I fail one module but pass the year overall?",
    a: "Most bursaries set a minimum pass rate — commonly 50% to 75% of registered modules per year, or a minimum overall average. Failing a single module may or may not affect your bursary depending on your total performance. Check your specific agreement. Some funders only act if you fail to progress to the next year of study.",
  },
  {
    q: "What if I fail because of circumstances beyond my control?",
    a: "Document everything. If you were hospitalised, experienced a family crisis, or dealt with a mental health breakdown, get a doctor's letter, hospital records, or a psychologist's report. Submit these with your appeal as early as possible. Funders are generally more sympathetic to documented genuine circumstances than to academic underperformance with no explanation.",
  },
  {
    q: "Can I get a new bursary if I lost a previous one for failing?",
    a: "It's difficult but not impossible. Some funders ask whether you've previously held a bursary and why it ended. Be honest — misrepresentation is grounds for immediate termination. Some smaller NGO or provincial government bursaries may not ask, but major corporate bursaries will conduct thorough background checks.",
  },
];

export default function ArticleFailYear() {
  return (
    <>
      <Helmet>
        <title>What Happens to Your Bursary if You Fail a Year? | Ithuba</title>
        <meta name="description" content="What happens to your South African bursary if you fail a module or repeat a year? Understand your rights, the appeal process, and how to protect your funding." />
        <link rel="canonical" href="https://ithubahub.co.za/articles/what-happens-to-your-bursary-if-you-fail" />
        <meta property="og:title" content="What Happens to Your Bursary if You Fail a Year? | Ithuba" />
        <meta property="og:description" content="Fail a module or repeat a year? Here's exactly what happens to your South African bursary and what you can do about it." />
        <meta property="og:url" content="https://ithubahub.co.za/articles/what-happens-to-your-bursary-if-you-fail" />
        <meta property="og:image" content={OG_IMG} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={OG_IMG} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "headline": "What Happens to Your Bursary if You Fail a Year?",
              "url": "https://ithubahub.co.za/articles/what-happens-to-your-bursary-if-you-fail",
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
                { "@type": "ListItem", "position": 3, "name": "Bursary if you fail", "item": "https://ithubahub.co.za/articles/what-happens-to-your-bursary-if-you-fail" },
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
          <span className="text-forest-800 dark:text-forest-200 font-medium">Bursary if you fail</span>
        </nav>

        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center rounded-full bg-forest-100 dark:bg-forest-800 px-3 py-1 text-xs font-medium text-forest-600 dark:text-forest-300">Student Advice</span>
            <span className="text-xs text-forest-400 dark:text-forest-500">Updated July 2026 · 7 min read</span>
          </div>
          <h1 className="font-display text-3xl font-semibold text-forest-900 dark:text-forest-50 sm:text-4xl leading-snug">
            What happens to your bursary if you fail a year?
          </h1>
          <p className="mt-4 text-sm leading-7 text-forest-600 dark:text-forest-400">
            Failing a module or a year at university is stressful enough. Not knowing what it means for your bursary makes it worse. This guide explains exactly what happens — by bursary type — and what steps you can take to protect your funding.
          </p>
        </div>

        {/* Warning */}
        <div className="mb-10 flex gap-3 rounded-2xl border border-gold-200 dark:border-gold-900/40 bg-gold-50 dark:bg-gold-900/10 p-5">
          <AlertCircle size={18} className="text-gold-600 dark:text-gold-400 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-forest-900 dark:text-forest-50 mb-1">Read your bursary agreement first</p>
            <p className="text-sm leading-6 text-forest-700 dark:text-forest-300">
              Every bursary has its own academic requirements and consequences for not meeting them. The information in this article is general guidance — your specific agreement is the authoritative document. If you don't have a copy, request one from your funder immediately.
            </p>
          </div>
        </div>

        <div className="space-y-8 text-sm leading-7 text-forest-700 dark:text-forest-300">

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">The general rule across all bursaries</h2>
            <p>Most South African bursaries — corporate, government, and NGO — require you to maintain satisfactory academic progress. This is typically defined as:</p>
            <ul className="mt-3 space-y-2">
              {[
                "Passing a minimum percentage of your registered modules per year (commonly 50–75%)",
                "Maintaining a minimum overall academic average (commonly 50–65%)",
                "Progressing to the next year of study at the end of each academic year",
                "Not repeating the same year of study more than once",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-forest-500" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4">If you fail to meet these requirements, most funders will suspend your bursary pending a review or appeal rather than terminating it immediately. The suspension gives you an opportunity to explain your circumstances.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">By bursary type — what to expect</h2>
            <div className="space-y-4">
              {[
                {
                  type: "NSFAS",
                  icon: "🏛️",
                  what: "NSFAS requires you to pass at least 50% of your registered modules per semester. If you don't meet this threshold, your funding for the following semester may be put on hold. NSFAS has a formal appeal process — you can appeal on the myNSFAS portal with supporting documentation. Approved appeals usually result in a payment arrangement or continuation of funding. NSFAS does not typically require repayment of past funding if you fail — it simply stops future payments.",
                },
                {
                  type: "Corporate bursaries",
                  icon: "🏢",
                  what: "Corporate bursaries tend to have stricter academic requirements — minimum averages of 60–65% are common. If you fail a year or fall below the minimum average, your bursary may be suspended. You'll typically be asked to write a formal letter of explanation. Whether your bursary is reinstated often depends on the circumstances — genuine hardship with documentation is treated differently from a pattern of poor performance. Repeated failures usually result in permanent termination, and some agreements require repayment of past funding in this case.",
                },
                {
                  type: "Government department bursaries",
                  icon: "🏫",
                  what: "Government bursaries vary by department and province. Most have an appeal process. Provincial Department of Health bursaries, for example, are generally more accommodating of a single year of difficulties than corporate bursaries — partly because the healthcare shortage means they want to retain funded students. However, repeated failure or a pattern of non-performance will typically result in termination and a repayment demand.",
                },
                {
                  type: "NGO and foundation bursaries",
                  icon: "🤝",
                  what: "NGO bursaries like the Allan Gray Orbis Foundation Fellowship or Mastercard Foundation Scholars Programme have holistic assessment processes — they consider your full situation, not just your marks. These funders tend to have more developed student support systems and are more likely to provide academic support before suspending funding. That said, persistent underperformance will still result in the bursary ending.",
                },
              ].map((item) => (
                <div key={item.type} className="rounded-2xl border border-forest-100 dark:border-forest-800 bg-white dark:bg-forest-900 p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-lg">{item.icon}</span>
                    <p className="font-semibold text-forest-900 dark:text-forest-50">{item.type}</p>
                  </div>
                  <p>{item.what}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">What to do immediately if you're struggling academically</h2>
            <p className="mb-4">Don't wait until you've failed. The moment you know you're at risk, take these steps:</p>
            <div className="space-y-3">
              {[
                { step: "01", title: "Contact your funder proactively", body: "Email your bursary contact and explain that you're experiencing academic difficulties. Proactive communication is always viewed more favourably than discovering a problem at results time. Ask whether there are any support structures or academic requirements you should be aware of." },
                { step: "02", title: "Seek academic support immediately", body: "Most universities have tutoring centres, academic development programmes, and peer mentoring. Use them. Evidence that you sought help and made a genuine effort matters in an appeal." },
                { step: "03", title: "Document any contributing circumstances", body: "If you're struggling because of illness, a family crisis, or mental health challenges, get documentation now — not after results come out. A doctor's letter, counsellor's report, or hospital record dated during the semester is far more credible than one obtained retrospectively." },
                { step: "04", title: "Read your bursary agreement", body: "Know exactly what happens if you fall below the required average. Know the appeal deadline. Know who to contact. This information should be in your agreement — if you don't have a copy, request one immediately." },
                { step: "05", title: "If you fail — submit your appeal early", body: "Don't wait until the last day of the appeal window. Early appeals demonstrate seriousness. Include all supporting documentation, a sincere and specific letter of explanation, and a clear plan for how you will improve going forward." },
              ].map((item) => (
                <div key={item.step} className="flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-forest-600 dark:bg-forest-500 text-white text-xs font-bold">{item.step}</div>
                  <div>
                    <p className="font-semibold text-forest-900 dark:text-forest-50 mb-1">{item.title}</p>
                    <p>{item.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">What a good appeal letter looks like</h2>
            <p>An appeal letter should be professional, honest, and specific. Avoid vague statements like "I was going through a lot" — funders read hundreds of appeals and can spot lack of substance. A strong appeal includes:</p>
            <ul className="mt-3 space-y-2.5">
              {[
                "A clear, honest explanation of exactly what happened and when it started affecting your studies",
                "Documentary evidence supporting your explanation (medical records, police reports, counsellor letters)",
                "Acknowledgement of your results without making excuses",
                "A specific, realistic plan for how you will perform differently in the coming semester",
                "Evidence of steps already taken — academic support enrolled, counselling started, medical issue treated",
                "A professional tone — grateful, not entitled",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle size={13} className="text-forest-500 dark:text-forest-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
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
          <Link to="/bursaries" className="inline-flex items-center gap-2 rounded-xl bg-forest-600 dark:bg-forest-500 px-5 py-3 text-sm font-medium text-white hover:bg-forest-700 transition">
            Browse bursaries <ArrowRight size={15} />
          </Link>
          <Link to="/articles/nsfas-2026-guide" className="inline-flex items-center gap-2 rounded-xl border border-forest-300 dark:border-forest-700 px-5 py-3 text-sm font-medium text-forest-700 dark:text-forest-300 hover:bg-forest-100 dark:hover:bg-forest-800 transition">
            Full NSFAS guide <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </>
  );
}
