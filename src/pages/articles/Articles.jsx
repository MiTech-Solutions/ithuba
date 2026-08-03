import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, FileText } from "lucide-react";

const OG_IMG = "https://i.postimg.cc/d3T437Xk/45C7EB18-47F5-4CD3-9509-3A1092AF188E.png";

export const articles = [
  {
    path: "/articles/nsfas-2026-guide",
    title: "NSFAS 2026 — everything you need to know",
    description: "Complete guide to NSFAS — eligibility, how to apply, what it covers, allowances, appeals, and frequently asked questions.",
    tag: "Funding Guide",
    readTime: "10 min read",
    featured: true,
  },
  {
    path: "/articles/top-10-bursaries-open-now",
    title: "Top 10 bursaries open right now in South Africa",
    description: "A live list of the top 10 South African bursaries currently open for applications, sorted by closing date. Updated automatically from our directory.",
    tag: "Live List",
    readTime: "5 min read",
    featured: true,
  },
  {
    path: "/articles/best-bursaries-for-engineering-students",
    title: "Best bursaries for engineering students in South Africa",
    description: "The best South African bursaries for engineering students — Eskom, Sasol, Transnet, Anglo American and more, with application tips specific to engineering.",
    tag: "Field Guide",
    readTime: "7 min read",
    featured: false,
  },
  {
    path: "/articles/bursaries-for-first-year-students",
    title: "Bursaries for first-year students in South Africa",
    description: "Everything first-year and Grade 12 students need to know about applying for bursaries — when to apply, what funders look for, and which bursaries are available.",
    tag: "Student Guide",
    readTime: "8 min read",
    featured: false,
  },
  {
    path: "/articles/bursaries-for-first-year-students",
    title: "Bursaries for first-year students in South Africa",
    description: "Everything first-year and Grade 12 students need to know about applying for bursaries — when to apply, what funders look for, and which bursaries are available.",
    tag: "Student Guide",
    readTime: "8 min read",
    featured: false,
  },
  {
    path: "/articles/how-to-write-a-bursary-motivation-letter",
    title: "How to write a winning bursary motivation letter",
    description: "Step-by-step guide to writing a bursary motivation letter that stands out — six-part structure with examples, do’s and don’ts, formatting tips, and a final checklist.",
    tag: "Application Guide",
    readTime: "9 min read",
    featured: false,
  },
  {
    path: "/articles/nsfas-vs-corporate-bursary",
    title: "NSFAS vs corporate bursary — which is better for you?",
    description: "A detailed comparison of NSFAS and corporate bursaries — coverage, work-back obligations, eligibility, pros and cons, and which suits your situation.",
    tag: "Comparison",
    readTime: "9 min read",
    featured: false,
  },
  {
    path: "/articles/bursary-vs-student-loan",
    title: "Bursary vs student loan — which should you choose?",
    description: "Should you apply for a bursary or take a student loan? A detailed comparison covering repayment, interest, eligibility, and career flexibility.",
    tag: "Comparison",
    readTime: "8 min read",
    featured: false,
  },
  {
    path: "/articles/best-bursaries-for-nursing-and-medicine-students",
    title: "Best bursaries for nursing and medicine students in South Africa",
    description: "The best South African bursaries for nursing, medicine and healthcare students — Department of Health, hospital groups, and NGO funding with application tips.",
    tag: "Field Guide",
    readTime: "7 min read",
    featured: false,
  },
  {
    path: "/articles/best-bursaries-for-it-students",
    title: "Best bursaries for IT and computer science students in South Africa",
    description: "The best South African bursaries for IT and computer science students — Telkom, MTN, Vodacom, and the major banks, with tips on standing out.",
    tag: "Field Guide",
    readTime: "7 min read",
    featured: false,
  },
  {
    path: "/articles/best-bursaries-for-accounting-and-finance-students",
    title: "Best bursaries for accounting and finance students in South Africa",
    description: "The best South African bursaries for accounting and finance students — ABSA, Standard Bank, FNB, Nedbank, PwC, Deloitte and more.",
    tag: "Field Guide",
    readTime: "7 min read",
    featured: false,
  },
  {
    path: "/articles/bursaries-with-monthly-stipend",
    title: "Bursaries that include a monthly stipend in South Africa",
    description: "Which South African bursaries include a monthly living allowance or stipend? What to expect and which funders are most generous.",
    tag: "Funding Guide",
    readTime: "6 min read",
    featured: false,
  },
  {
    path: "/articles/what-happens-to-your-bursary-if-you-fail",
    title: "What happens to your bursary if you fail a year?",
    description: "Fail a module or repeat a year? Understand exactly what happens to your bursary — by funder type — and how to appeal.",
    tag: "Student Advice",
    readTime: "7 min read",
    featured: false,
  },
  {
    path: "/articles/can-you-hold-more-than-one-bursary",
    title: "Can you hold more than one bursary at a time in South Africa?",
    description: "The rules around holding multiple bursaries, what you must disclose, and what to do when you receive more than one offer.",
    tag: "Student Advice",
    readTime: "6 min read",
    featured: false,
  },
];

export default function Articles() {
  return (
    <>
      <Helmet>
        <title>Articles & Funding Guides | Ithuba</title>
        <meta name="description" content="In-depth articles on South African student funding — NSFAS, bursaries, scholarships, motivation letters, and more. Free resources for SA students." />
        <link rel="canonical" href="https://ithubahub.co.za/articles" />
        <meta property="og:title" content="Articles & Funding Guides | Ithuba" />
        <meta property="og:description" content="In-depth articles on South African student funding — NSFAS, bursaries, scholarships, and more." />
        <meta property="og:url" content="https://ithubahub.co.za/articles" />
        <meta property="og:image" content={OG_IMG} />
      </Helmet>

      <div className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 lg:px-8">

        {/* Banner */}
        <div className="relative h-56 sm:h-72 overflow-hidden bg-forest-900 -mx-4 sm:-mx-6 lg:-mx-8 mb-10">
          <img src="https://i.postimg.cc/Zn6m1kM6/ithuba-daily-articles-section-banner.png" alt="" role="presentation" loading="eager" decoding="async"
            className="h-full w-full object-cover object-center opacity-60 dark:opacity-40" />
          <div className="absolute inset-0 bg-gradient-to-t from-forest-900/85 via-forest-900/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-4 pb-8 sm:px-6 lg:px-8">
            <p className="text-xs font-semibold uppercase tracking-widest text-gold-300 mb-2">Resources</p>
            <h1 className="font-display text-3xl font-semibold text-white sm:text-4xl">Articles & funding guides</h1>
            <p className="mt-2 text-sm leading-6 text-forest-200 max-w-xl">
              In-depth articles to help South African students understand their funding options, navigate applications, and make the most of every opportunity.
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {articles.map((article) => (
            <Link
              key={article.path}
              to={article.path}
              className="group flex flex-col rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 p-6 transition hover:border-forest-400 dark:hover:border-forest-500 hover:shadow-lg hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-forest-100 dark:bg-forest-800 text-forest-600 dark:text-forest-300">
                  <FileText size={15} />
                </div>
                <span className="text-xs font-medium text-forest-500 dark:text-forest-400">{article.tag}</span>
                {article.featured && (
                  <span className="ml-auto inline-flex items-center rounded-full bg-gold-100 dark:bg-gold-900/40 px-2 py-0.5 text-xs font-medium border border-gold-200 dark:border-gold-800/50">
                    <span className="badge-shimmer">★ Featured</span>
                  </span>
                )}
                {!article.featured && (
                  <span className="ml-auto text-xs text-forest-400 dark:text-forest-500">{article.readTime}</span>
                )}
              </div>
              <h2 className="font-semibold text-forest-900 dark:text-forest-50 leading-snug mb-2 group-hover:text-forest-700 dark:group-hover:text-white transition">
                {article.title}
              </h2>
              <p className="text-sm leading-6 text-forest-500 dark:text-forest-400 flex-1">
                {article.description}
              </p>
              {article.featured && (
                <p className="mt-1 text-xs text-forest-400 dark:text-forest-500">{article.readTime}</p>
              )}
              <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-forest-600 dark:text-forest-400 group-hover:text-forest-900 dark:group-hover:text-white transition">
                Read article <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/bursaries"
            className="inline-flex items-center gap-2 rounded-xl bg-forest-600 dark:bg-forest-500 px-6 py-3 text-sm font-medium text-white hover:bg-forest-700 transition"
          >
            Browse all bursaries <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </>
  );
}
