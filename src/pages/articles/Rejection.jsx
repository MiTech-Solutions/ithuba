import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, AlertCircle } from "lucide-react";

const OG_IMG = "https://i.postimg.cc/d3T437Xk/45C7EB18-47F5-4CD3-9509-3A1092AF188E.png";

const faqs = [
  {
    q: "How long should I wait before reapplying after a rejection?",
    a: "Most bursaries open annually, so the next opportunity is usually 12 months away. Use that time productively — improve your academic results, build relevant experience, strengthen your motivation letter, and research the funder more deeply. Students who reapply with demonstrably stronger profiles are regularly successful on the second attempt.",
  },
  {
    q: "Should I contact the funder to ask why I was rejected?",
    a: "Yes, and most students don't. A brief, professional email thanking the panel for their time and politely asking for feedback on your application is well within acceptable bounds. Some funders won't respond, but those that do will give you information worth having. Frame it as a request for guidance, not a challenge to their decision.",
  },
  {
    q: "Is it worth applying again if I was rejected last year?",
    a: "Absolutely — many successful bursary holders were rejected once or twice before being awarded. The key is not reapplying identically but reapplying stronger. Better results, a tighter motivation letter, more relevant experience, and a clearer career direction all shift the outcome.",
  },
  {
    q: "What if I was rejected because of my results — can I still apply for other bursaries?",
    a: "Yes. Not all bursaries have the same academic threshold. Some corporate bursaries prioritise leadership and potential over marks. Government bursaries for critical skills fields sometimes prioritise commitment to public service. NGO bursaries often take a holistic view. A rejection from one bursary does not disqualify you from others.",
  },
  {
    q: "Can I apply for NSFAS if I was rejected by a corporate bursary?",
    a: "Yes — NSFAS and corporate bursaries are completely separate. A rejection from a corporate bursary has no bearing on your NSFAS application. If you qualify financially and academically for NSFAS, apply regardless of any other rejections.",
  },
];

export default function ArticleRejection() {
  return (
    <>
      <Helmet>
        <title>What to Do if Your Bursary Application is Rejected | Ithuba</title>
        <meta name="description" content="Bursary application rejected? Here's exactly what to do next — how to request feedback, what to improve, when to reapply, and how to find alternative funding." />
        <link rel="canonical" href="https://ithubahub.co.za/articles/what-to-do-if-your-bursary-application-is-rejected" />
        <meta property="og:title" content="What to Do if Your Bursary Application is Rejected | Ithuba" />
        <meta property="og:description" content="Bursary rejected? Here's what to do next — feedback, alternatives, reapplying stronger, and finding other funding." />
        <meta property="og:url" content="https://ithubahub.co.za/articles/what-to-do-if-your-bursary-application-is-rejected" />
        <meta property="og:image" content={OG_IMG} />
        <meta name="twitter:title" content="What to Do if Your Bursary Application is Rejected | Ithuba" />
        <meta name="twitter:description" content="Bursary rejected? Here's what to do next — feedback, alternatives, and reapplying stronger." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "headline": "What to Do if Your Bursary Application is Rejected",
              "url": "https://ithubahub.co.za/articles/what-to-do-if-your-bursary-application-is-rejected",
              "publisher": { "@type": "Organization", "name": "Ithuba", "url": "https://ithubahub.co.za" },
              "datePublished": "2026-08-31",
              "dateModified": "2026-08-31",
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
                { "@type": "ListItem", "position": 3, "name": "Bursary Rejection", "item": "https://ithubahub.co.za/articles/what-to-do-if-your-bursary-application-is-rejected" },
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
          <span className="text-forest-800 dark:text-forest-200 font-medium">Bursary rejection</span>
        </nav>

        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center rounded-full bg-forest-100 dark:bg-forest-800 px-3 py-1 text-xs font-medium text-forest-600 dark:text-forest-300">Student Advice</span>
            <span className="text-xs text-forest-400 dark:text-forest-500">Updated August 2026 · 7 min read</span>
          </div>
          <h1 className="font-display text-3xl font-semibold text-forest-900 dark:text-forest-50 sm:text-4xl leading-snug">
            What to do if your bursary application is rejected
          </h1>
          <p className="mt-4 text-sm leading-7 text-forest-600 dark:text-forest-400">
            A bursary rejection stings — especially when you needed it. But it is not the end of your funding journey, and it is not a verdict on your potential. This guide walks you through exactly what to do next.
          </p>
        </div>

        {/* Reassurance box */}
        <div className="mb-10 flex gap-3 rounded-2xl border border-forest-200 dark:border-forest-700 bg-forest-50 dark:bg-forest-900 p-5">
          <AlertCircle size={18} className="text-forest-500 dark:text-forest-400 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-forest-900 dark:text-forest-50 mb-1">This happens to most applicants</p>
            <p className="text-sm leading-6 text-forest-700 dark:text-forest-300">
              Acceptance rates at competitive corporate bursaries can be below 5%. The Eskom bursary receives thousands of applications for a few hundred positions. The Allan Gray Fellowship accepts fewer than 1% of applicants. Rejection is the statistical norm — not evidence of failure.
            </p>
          </div>
        </div>

        <div className="space-y-8 text-sm leading-7 text-forest-700 dark:text-forest-300">

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">Step 1 — Understand why you were rejected</h2>
            <p>Before you can improve, you need to know what went wrong. There are several possible reasons for rejection and each has a different response:</p>
            <div className="mt-4 space-y-3">
              {[
                { reason: "Academic results below the threshold", response: "Focus on improving your average. A 5% improvement in your marks can move you from rejection to offer at most corporate bursaries." },
                { reason: "Weak motivation letter", response: "This is the most fixable problem. A generic letter that could apply to any funder is the most common reason for rejection among academically qualified candidates." },
                { reason: "Poor interview performance", response: "Interview skills are learnable. Practice with a parent, teacher, or friend. Research the funder more deeply before your next attempt." },
                { reason: "You didn't meet the field of study criteria", response: "Not every bursary is right for every student. Apply more selectively — focus on funders whose business directly relates to your field." },
                { reason: "High competition — you qualified but others ranked higher", response: "This is the hardest rejection to accept and the least actionable. Apply to more bursaries simultaneously to increase your overall probability of success." },
              ].map((item) => (
                <div key={item.reason} className="rounded-2xl border border-forest-100 dark:border-forest-800 bg-white dark:bg-forest-900 p-4">
                  <p className="font-semibold text-forest-900 dark:text-forest-50 mb-1">{item.reason}</p>
                  <p className="text-forest-600 dark:text-forest-400">{item.response}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">Step 2 — Request feedback</h2>
            <p>
              Most students never ask for feedback after a rejection. This is a missed opportunity. Write a short, professional email to the bursary contact thanking the panel for considering your application and politely asking whether they can share any feedback that might strengthen a future application.
            </p>
            <div className="mt-4 rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-forest-500 dark:text-forest-400 mb-3">Example email</p>
              <div className="text-forest-700 dark:text-forest-300 space-y-3">
                <p>Dear [Bursary Team / Contact Name],</p>
                <p>Thank you for considering my application for the [Bursary Name]. I understand the process is highly competitive and I appreciate the time your panel invested in reviewing my application.</p>
                <p>I am committed to continuing my studies in [field] and plan to reapply in the future. If you are able to share any feedback on how I might strengthen my application, I would be very grateful. I understand if this is not possible.</p>
                <p>Thank you again for the opportunity.</p>
                <p>Kind regards,<br />[Your name]</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">Step 3 — Apply for alternative funding immediately</h2>
            <p>Don't wait until next year to apply for something else. The bursary cycle runs year-round and there are always opportunities open. Specifically:</p>
            <ul className="mt-3 space-y-2.5">
              {[
                "Apply for NSFAS immediately if you haven't already — if you qualify financially, NSFAS is accessible regardless of other rejections",
                "Browse the Ithuba directory for bursaries in your field that are currently open",
                "Look at NGO and foundation bursaries — they often take a more holistic view than corporate funders",
                "Check whether your university has its own merit bursaries or financial aid office",
                "Look for government department bursaries relevant to your field — Department of Health for health students, DHET for education students",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle size={14} className="text-forest-500 dark:text-forest-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">Step 4 — Reapply stronger next year</h2>
            <p>A rejection now is not a rejection forever. Most bursaries are open annually and many funders look favourably on students who reapply — it signals genuine interest. Here's how to use the intervening time:</p>
            <div className="mt-4 space-y-4">
              {[
                { title: "Improve your academic results", body: "This is the highest leverage change you can make. Even a modest improvement in your average — from 62% to 67%, for example — moves you into a significantly more competitive bracket for most bursaries." },
                { title: "Rewrite your motivation letter from scratch", body: "Don't revise the old letter — start fresh. Use the six-part structure from our motivation letter guide. Be more specific about the funder, your career goals, and your personal story. Generic language is the single most common reason qualified students are rejected." },
                { title: "Build relevant experience", body: "Vacation work, volunteering, community projects, and leadership roles all strengthen your application. A student who has demonstrated initiative during the year between applications is more compelling than one who waited passively." },
                { title: "Research the funder more deeply", body: "Know their recent projects, their business challenges, and their values. Being able to speak knowledgeably about the company at an interview or in a letter signals genuine interest rather than financial desperation." },
                { title: "Apply to more bursaries simultaneously", body: "If you applied to two last year, apply to eight this year. Spreading applications across government, corporate, and NGO funders dramatically improves your overall chances of receiving at least one offer." },
              ].map((tip) => (
                <div key={tip.title} className="rounded-2xl border border-forest-100 dark:border-forest-800 bg-white dark:bg-forest-900 p-5">
                  <p className="font-semibold text-forest-900 dark:text-forest-50 mb-1">{tip.title}</p>
                  <p>{tip.body}</p>
                </div>
              ))}
            </div>
          </section>

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
            Browse open bursaries <ArrowRight size={15} />
          </Link>
          <Link to="/articles/how-to-write-a-bursary-motivation-letter" className="inline-flex items-center gap-2 rounded-xl border border-forest-300 dark:border-forest-700 px-5 py-3 text-sm font-medium text-forest-700 dark:text-forest-300 hover:bg-forest-100 dark:hover:bg-forest-800 transition">
            Motivation letter guide <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </>
  );
}
