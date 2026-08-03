import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, XCircle, AlertCircle } from "lucide-react";

const OG_IMG = "https://i.postimg.cc/d3T437Xk/45C7EB18-47F5-4CD3-9509-3A1092AF188E.png";

const faqs = [
  {
    q: "Can I apply for multiple bursaries at the same time?",
    a: "Yes — applying for multiple bursaries simultaneously is not only allowed, it's strongly encouraged. There is no system that tracks or prevents this. Apply to every bursary you qualify for. If you receive multiple offers, you can then decide which to accept and decline the rest.",
  },
  {
    q: "Do I have to tell one funder if I'm applying to another?",
    a: "During the application phase, no — you don't need to disclose that you're applying elsewhere. However, once you receive an offer and are asked about existing funding or other applications, you must disclose. Misrepresentation at the offer stage is grounds for immediate termination and potential repayment demands.",
  },
  {
    q: "Can I hold a corporate bursary and a university merit scholarship at the same time?",
    a: "Possibly — it depends on the terms of both. Some corporate bursaries explicitly prohibit holding other funding; others only prohibit other bursaries that cover tuition. A merit scholarship that covers tuition would likely conflict with a full corporate bursary. A one-off prize or partial award might be permitted. Read both agreements and ask the funders directly if unclear.",
  },
  {
    q: "What if I accepted NSFAS and then received a corporate bursary?",
    a: "Generally, you cannot hold both — they both cover tuition and the corporate bursary agreement will typically prohibit concurrent NSFAS funding. You would need to inform NSFAS of the corporate bursary, which would result in your NSFAS funding being cancelled. This is usually the right outcome — corporate bursaries are typically more generous than NSFAS.",
  },
  {
    q: "What about supplementary funding — is that allowed?",
    a: "Some funders explicitly allow students to receive supplementary funding that doesn't overlap with what the bursary already covers. For example, if your bursary covers only tuition, a separate award covering books or accommodation might be permitted. Always ask your bursary contact in writing before accepting any additional funding.",
  },
];

export default function ArticleMultipleBursaries() {
  return (
    <>
      <Helmet>
        <title>Can You Hold More Than One Bursary at a Time in South Africa? | Ithuba</title>
        <meta name="description" content="Can South African students hold multiple bursaries at the same time? Understand the rules around concurrent funding, disclosure obligations, and what happens if you accept two bursaries." />
        <link rel="canonical" href="https://ithubahub.co.za/articles/can-you-hold-more-than-one-bursary" />
        <meta property="og:title" content="Can You Hold More Than One Bursary at a Time? | Ithuba" />
        <meta property="og:description" content="Can South African students hold multiple bursaries simultaneously? The rules, exceptions, and what to disclose." />
        <meta property="og:url" content="https://ithubahub.co.za/articles/can-you-hold-more-than-one-bursary" />
        <meta property="og:image" content={OG_IMG} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "headline": "Can You Hold More Than One Bursary at a Time in South Africa?",
              "url": "https://ithubahub.co.za/articles/can-you-hold-more-than-one-bursary",
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
                { "@type": "ListItem", "position": 3, "name": "Multiple bursaries", "item": "https://ithubahub.co.za/articles/can-you-hold-more-than-one-bursary" },
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
          <span className="text-forest-800 dark:text-forest-200 font-medium">Multiple bursaries</span>
        </nav>

        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center rounded-full bg-forest-100 dark:bg-forest-800 px-3 py-1 text-xs font-medium text-forest-600 dark:text-forest-300">Student Advice</span>
            <span className="text-xs text-forest-400 dark:text-forest-500">Updated July 2026 · 6 min read</span>
          </div>
          <h1 className="font-display text-3xl font-semibold text-forest-900 dark:text-forest-50 sm:text-4xl leading-snug">
            Can you hold more than one bursary at a time in South Africa?
          </h1>
          <p className="mt-4 text-sm leading-7 text-forest-600 dark:text-forest-400">
            The short answer is: usually no — but applying for multiple bursaries simultaneously is not only allowed, it's the smartest strategy. Here's how it works.
          </p>
        </div>

        <div className="space-y-8 text-sm leading-7 text-forest-700 dark:text-forest-300">

          {/* Key distinction */}
          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">The important distinction — applying vs holding</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-forest-200 dark:border-forest-700 bg-forest-50 dark:bg-forest-900 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle size={16} className="text-forest-500" />
                  <p className="font-semibold text-forest-900 dark:text-forest-50">Applying to multiple bursaries</p>
                </div>
                <p className="text-forest-600 dark:text-forest-400">Completely fine. Apply to as many as you qualify for. There is no rule against applying to multiple bursaries simultaneously and no system that tracks or prevents it. This is strongly encouraged.</p>
              </div>
              <div className="rounded-2xl border border-red-100 dark:border-red-900/30 bg-white dark:bg-forest-900 p-5">
                <div className="flex items-center gap-2 mb-3">
                  <XCircle size={16} className="text-red-400" />
                  <p className="font-semibold text-forest-900 dark:text-forest-50">Holding multiple bursaries</p>
                </div>
                <p className="text-forest-600 dark:text-forest-400">Usually not permitted when both bursaries cover the same costs — particularly tuition. Accepting two bursaries that both cover tuition without disclosing this to both funders is a serious breach of your agreement.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">Why you cannot hold two full bursaries</h2>
            <p>Most full bursaries — especially corporate and NSFAS — cover the complete cost of your studies including tuition. Holding two such bursaries simultaneously would mean being paid twice for the same expense. Funders consider this fraudulent. Both bursary agreements will include a clause requiring you to disclose any other funding received and prohibiting double-funding.</p>
            <p className="mt-3">If a funder discovers you've been holding two full bursaries without disclosure, the consequences are serious — immediate termination of both bursaries, a demand for repayment of all funding received, and in some cases legal action.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">When concurrent funding is permitted</h2>
            <p className="mb-4">Not all combinations are prohibited. The key question is: do the two funding sources cover the same costs?</p>
            <div className="space-y-3">
              {[
                { allowed: true,  scenario: "Corporate bursary (tuition + stipend) + a university prize for academic achievement (once-off cash award)", reason: "The prize doesn't cover tuition — it's a one-off recognition award. Most corporate bursaries permit this." },
                { allowed: true,  scenario: "Tuition-only bursary + a separate accommodation grant from a different funder", reason: "They cover different costs. Check your bursary agreement, but this is commonly permitted." },
                { allowed: true,  scenario: "Bursary from a corporate funder + a supplementary book allowance from your university", reason: "University book allowances are typically considered support, not a bursary, and are usually fine." },
                { allowed: false, scenario: "NSFAS + a full corporate bursary that also covers tuition", reason: "Both cover tuition. This is double-funding and is explicitly prohibited by both parties." },
                { allowed: false, scenario: "Two corporate bursaries that both cover tuition and living costs", reason: "Prohibited. You cannot accept two full bursary offers and must decline one." },
                { allowed: false, scenario: "A bursary + a government SETA bursary covering the same programme", reason: "Both would cover the same costs. Disclosure is required and you would need to choose one." },
              ].map((item, i) => (
                <div key={i} className={`rounded-2xl border p-4 flex gap-3 ${item.allowed ? "border-forest-200 dark:border-forest-700 bg-forest-50 dark:bg-forest-900/40" : "border-red-100 dark:border-red-900/30 bg-white dark:bg-forest-900"}`}>
                  {item.allowed
                    ? <CheckCircle size={16} className="text-forest-500 shrink-0 mt-0.5" />
                    : <XCircle size={16} className="text-red-400 shrink-0 mt-0.5" />
                  }
                  <div>
                    <p className="font-medium text-forest-900 dark:text-forest-50 mb-1">{item.scenario}</p>
                    <p className="text-xs text-forest-500 dark:text-forest-400">{item.reason}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">What to do when you receive multiple offers</h2>
            <p>If your strategy of applying widely pays off and you receive more than one bursary offer — congratulations. Here's how to handle it properly:</p>
            <div className="mt-4 space-y-4">
              {[
                { step: "01", title: "Read both agreements before deciding", body: "Don't accept the first offer reflexively. Compare what each covers, the work-back obligations, the academic requirements, and the career opportunities that come with each." },
                { step: "02", title: "Choose the better offer", body: "Usually the corporate bursary with the work-back is more financially generous than NSFAS, but consider your career flexibility and direction. Choose the one that fits your life plan." },
                { step: "03", title: "Decline the other in writing", body: "Write a professional, polite email declining the offer you're not accepting. Thank the funder and explain that you've accepted alternative funding. This maintains your reputation and keeps the door open for future interaction." },
                { step: "04", title: "Inform any existing funder of the change", body: "If you already hold NSFAS and then receive a corporate bursary, contact NSFAS to inform them. The process for cancelling NSFAS is on the myNSFAS portal." },
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

          <div className="flex gap-3 rounded-2xl border border-gold-200 dark:border-gold-900/40 bg-gold-50 dark:bg-gold-900/10 p-5">
            <AlertCircle size={18} className="text-gold-600 dark:text-gold-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-forest-900 dark:text-forest-50 mb-1">Always disclose — never assume</p>
              <p>If you're unsure whether a second source of funding conflicts with your bursary, ask your funder in writing before accepting it. Get their response in writing too. Transparency protects you — concealment doesn't.</p>
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
        </div>

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
