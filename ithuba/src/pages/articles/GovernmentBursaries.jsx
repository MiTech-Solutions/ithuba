import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, CheckCircle } from "lucide-react";
import { useBursaries } from "../../hooks/useBursaries";
import { slugify } from "../../utils/slug";
import { deadlineBadge, daysUntil } from "../../utils/deadline";

const OG_IMG = "https://i.postimg.cc/d3T437Xk/45C7EB18-47F5-4CD3-9509-3A1092AF188E.png";

export default function ArticleGovernmentBursaries() {
  const { bursaries, loading } = useBursaries();

  const govBursaries = bursaries
    .filter((b) => {
      const type = b.funder_type?.toLowerCase() || "";
      return type === "government";
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
    .slice(0, 10);

  const departments = [
    {
      dept: "NSFAS (National Student Financial Aid Scheme)",
      fields: "All fields at public universities and TVET colleges",
      deadline: "Applications open September — close January",
      obligation: "None — grant, not a loan. No work-back.",
      detail: "NSFAS is the largest government funding programme for students. Household income must be R350,000/year or below. Covers tuition, accommodation, meals, transport, and a personal care allowance. Apply at myNSFAS.org.za.",
    },
    {
      dept: "Department of Basic Education — Funza Lushaka",
      fields: "Teaching (priority: Maths, Science, Foundation Phase)",
      deadline: "Opens April — closes September each year",
      obligation: "Teach in a public school for years funded",
      detail: "South Africa's flagship teaching bursary. Full tuition, accommodation, monthly stipend, and travel. Placement in a public school is determined by the DBE after graduation.",
    },
    {
      dept: "Department of Health (National)",
      fields: "Medicine, nursing, pharmacy, allied health",
      deadline: "Typically August–November each year",
      obligation: "Work in public healthcare for years funded",
      detail: "The national Department of Health funds health sciences students who commit to public sector service. Each provincial DoH also runs its own separate programme — apply to both.",
    },
    {
      dept: "Department of Agriculture, Land Reform and Rural Development",
      fields: "Agricultural science, food technology, veterinary science",
      deadline: "Varies — check department website",
      obligation: "Work in public sector agriculture for years funded",
      detail: "Funds students studying agriculture-related fields who will contribute to South Africa's food security and land reform objectives. Priority for students from rural and farming communities.",
    },
    {
      dept: "Eskom (State-Owned Entity)",
      fields: "Electrical, mechanical, civil, chemical engineering; IT",
      deadline: "Applications open August — close November",
      obligation: "Work at Eskom for years funded (typically 3–4 years)",
      detail: "Eskom's bursary is one of the most comprehensive in South Africa — full tuition, accommodation, meals, books, monthly stipend, and vacation work. Despite being an SOE, Eskom's bursary functions like a top-tier corporate bursary.",
    },
    {
      dept: "Transnet (State-Owned Entity)",
      fields: "Mechanical, electrical, civil, industrial engineering; IT; logistics",
      deadline: "Applications open mid-year",
      obligation: "Work at Transnet for years funded",
      detail: "Transnet funds engineering and logistics students across its freight rail, port terminals, and pipeline divisions. Strong vacation work programme with exposure to large-scale infrastructure.",
    },
    {
      dept: "SARS (South African Revenue Service)",
      fields: "Accounting, taxation, law, IT, finance",
      deadline: "Varies — check sars.gov.za",
      obligation: "Work at SARS for years funded",
      detail: "SARS funds students in fields relevant to tax administration. A career at SARS offers exposure to complex financial and legal work with strong professional development.",
    },
    {
      dept: "Department of Communications and Digital Technologies",
      fields: "IT, computer science, telecommunications",
      deadline: "Varies — check department website",
      obligation: "Work in public sector ICT for years funded",
      detail: "Funds students who will contribute to South Africa's digital transformation. Priority for students from underserved communities who plan public sector ICT careers.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Government Bursaries You Can Apply for Right Now in South Africa | Ithuba</title>
        <meta name="description" content="A complete list of South African government bursaries currently open for applications — NSFAS, Funza Lushaka, Department of Health, Eskom, Transnet and more with deadlines." />
        <link rel="canonical" href="https://ithubahub.co.za/articles/government-bursaries-south-africa" />
        <meta property="og:title" content="Government Bursaries You Can Apply for Right Now | Ithuba" />
        <meta property="og:description" content="Complete list of South African government bursaries — NSFAS, Funza Lushaka, Department of Health, Eskom, Transnet and more with deadlines." />
        <meta property="og:url" content="https://ithubahub.co.za/articles/government-bursaries-south-africa" />
        <meta property="og:image" content={OG_IMG} />
        <meta name="twitter:title" content="Government Bursaries You Can Apply for Right Now | Ithuba" />
        <meta name="twitter:description" content="Complete list of South African government bursaries — NSFAS, Funza Lushaka, Eskom, Transnet and more." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "headline": "Government Bursaries You Can Apply for Right Now in South Africa",
              "url": "https://ithubahub.co.za/articles/government-bursaries-south-africa",
              "publisher": { "@type": "Organization", "name": "Ithuba", "url": "https://ithubahub.co.za" },
              "datePublished": "2026-09-05",
              "dateModified": "2026-09-05",
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ithubahub.co.za" },
                { "@type": "ListItem", "position": 2, "name": "Articles", "item": "https://ithubahub.co.za/articles" },
                { "@type": "ListItem", "position": 3, "name": "Government Bursaries", "item": "https://ithubahub.co.za/articles/government-bursaries-south-africa" },
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
          <span className="text-forest-800 dark:text-forest-200 font-medium">Government bursaries</span>
        </nav>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center rounded-full bg-forest-100 dark:bg-forest-800 px-3 py-1 text-xs font-medium text-forest-600 dark:text-forest-300">Funding Guide</span>
            <span className="text-xs text-forest-400 dark:text-forest-500">Updated September 2026 · 8 min read</span>
          </div>
          <h1 className="font-display text-3xl font-semibold text-forest-900 dark:text-forest-50 sm:text-4xl leading-snug">
            Government bursaries you can apply for right now in South Africa
          </h1>
          <p className="mt-4 text-sm leading-7 text-forest-600 dark:text-forest-400">
            Government bursaries are among the most accessible in South Africa — many prioritise need and commitment to public service over pure academic merit, and some like NSFAS have no work-back obligation at all. This guide covers every major government and state-funded bursary programme, what each covers, and how to apply.
          </p>
        </div>

        {/* Live government bursaries */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50">Government bursaries in our directory</h2>
            <Link to="/bursaries/type/government" className="text-xs font-medium text-forest-600 dark:text-forest-400 hover:text-forest-900 dark:hover:text-white transition flex items-center gap-1">View all <ArrowRight size={11} /></Link>
          </div>
          {loading ? (
            <div className="space-y-3">{[1,2,3].map((i) => <div key={i} className="h-20 rounded-2xl bg-forest-100 dark:bg-forest-800 animate-pulse" />)}</div>
          ) : govBursaries.length === 0 ? (
            <div className="rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 p-6 text-center">
              <p className="text-sm text-forest-500 dark:text-forest-400">No government bursaries currently listed.</p>
              <Link to="/bursaries" className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-forest-600 hover:text-forest-900 transition">Browse all bursaries <ArrowRight size={13} /></Link>
            </div>
          ) : (
            <div className="space-y-3">
              {govBursaries.map((b, i) => {
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
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">Why government bursaries are worth prioritising</h2>
            <p>Government bursaries have three advantages that corporate bursaries often don't. First, NSFAS and some department bursaries have no work-back obligation — they are grants, not loans, and not career commitments. Second, many government bursaries prioritise financial need over academic merit, making them more accessible than competitive corporate bursaries. Third, state-funded bursaries are often undersubscribed relative to their budget — provincial department bursaries in particular receive far fewer applications than national corporate bursaries and have a higher acceptance rate as a result.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-4">Complete list of government bursary programmes</h2>
            <div className="space-y-4">
              {departments.map((item) => (
                <div key={item.dept} className="rounded-2xl border border-forest-100 dark:border-forest-800 bg-white dark:bg-forest-900 p-5">
                  <h3 className="font-semibold text-forest-900 dark:text-forest-50 mb-3">{item.dept}</h3>
                  <div className="grid gap-2 sm:grid-cols-3 mb-3 text-xs">
                    <div>
                      <p className="text-forest-400 dark:text-forest-500 mb-0.5">Fields</p>
                      <p className="font-medium text-forest-800 dark:text-forest-200">{item.fields}</p>
                    </div>
                    <div>
                      <p className="text-forest-400 dark:text-forest-500 mb-0.5">Deadline</p>
                      <p className="font-medium text-forest-800 dark:text-forest-200">{item.deadline}</p>
                    </div>
                    <div>
                      <p className="text-forest-400 dark:text-forest-500 mb-0.5">Obligation</p>
                      <p className="font-medium text-forest-800 dark:text-forest-200">{item.obligation}</p>
                    </div>
                  </div>
                  <p className="text-forest-600 dark:text-forest-400">{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">What government bursary applications look for</h2>
            <ul className="space-y-2.5">
              {[
                "South African citizenship — virtually all government bursaries are for citizens only",
                "Financial need — most government bursaries consider household income, particularly at the department level",
                "A genuine motivation for public service — panels respond to students who articulate why they want to serve South Africa, not just why they need money",
                "Commitment to the relevant sector — health bursaries want future public health workers, teaching bursaries want future teachers",
                "Academic standing — while generally lower than corporate thresholds, most government bursaries still expect a minimum of 55–65%",
                "Community background — students from underserved communities, rural areas, or disadvantaged schools are often prioritised",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 list-none">
                  <CheckCircle size={14} className="text-forest-500 dark:text-forest-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">The most important tip — apply to provincial departments directly</h2>
            <p>Every province has its own Department of Health, Education, Agriculture, and Social Development — and each runs its own bursary programme with a separate budget from the national department. Most students only apply to the national programme and miss the provincial one entirely.</p>
            <p className="mt-3">For example, if you're a nursing student in KwaZulu-Natal, you should apply to both the National Department of Health bursary and the KwaZulu-Natal Department of Health bursary. Both are funded separately, have separate application processes, and separate quotas. Applying to both doubles your chances at essentially no extra cost.</p>
            <p className="mt-3">Contact the HR or bursary office at your provincial department directly — many provincial bursaries are not widely advertised online and are only known to students who enquire directly.</p>
          </section>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link to="/bursaries/type/government" className="inline-flex items-center gap-2 rounded-xl bg-forest-600 dark:bg-forest-500 px-5 py-3 text-sm font-medium text-white hover:bg-forest-700 transition">
            Browse government bursaries <ArrowRight size={15} />
          </Link>
          <Link to="/articles/nsfas-2026-guide" className="inline-flex items-center gap-2 rounded-xl border border-forest-300 dark:border-forest-700 px-5 py-3 text-sm font-medium text-forest-700 dark:text-forest-300 hover:bg-forest-100 dark:hover:bg-forest-800 transition">
            Full NSFAS guide <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </>
  );
}
