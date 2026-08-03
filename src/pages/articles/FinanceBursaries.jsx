import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, CheckCircle } from "lucide-react";
import { useBursaries } from "../../hooks/useBursaries";
import { slugify } from "../../utils/slug";
import { deadlineBadge, daysUntil } from "../../utils/deadline";

const OG_IMG = "https://i.postimg.cc/d3T437Xk/45C7EB18-47F5-4CD3-9509-3A1092AF188E.png";

export default function ArticleFinanceBursaries() {
  const { bursaries, loading } = useBursaries();

  const financeBursaries = bursaries
    .filter((b) => {
      const field = b.field_of_study?.toLowerCase() || "";
      return field.includes("finance") || field.includes("accounting") || field.includes("commerce") || field.includes("business") || field === "all fields";
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
        <title>Best Bursaries for Accounting & Finance Students in South Africa | Ithuba</title>
        <meta name="description" content="Find the best bursaries for accounting, finance and commerce students in South Africa. ABSA, Standard Bank, FNB, Nedbank, PwC, Deloitte and more — with application links." />
        <link rel="canonical" href="https://ithubahub.co.za/articles/best-bursaries-for-accounting-and-finance-students" />
        <meta property="og:title" content="Best Bursaries for Accounting & Finance Students | Ithuba" />
        <meta property="og:description" content="The best South African bursaries for accounting and finance students — banks, audit firms, and insurers with deadlines and apply links." />
        <meta property="og:url" content="https://ithubahub.co.za/articles/best-bursaries-for-accounting-and-finance-students" />
        <meta property="og:image" content={OG_IMG} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Best Bursaries for Accounting and Finance Students in South Africa",
          "url": "https://ithubahub.co.za/articles/best-bursaries-for-accounting-and-finance-students",
          "publisher": { "@type": "Organization", "name": "Ithuba", "url": "https://ithubahub.co.za" },
          "datePublished": "2026-07-20",
          "dateModified": "2026-07-20",
        })}</script>
      </Helmet>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">

        <nav className="mb-8 flex items-center gap-2 text-sm text-forest-500 dark:text-forest-400">
          <Link to="/" className="hover:text-forest-800 dark:hover:text-white transition">Home</Link>
          <span>/</span>
          <Link to="/articles" className="hover:text-forest-800 dark:hover:text-white transition">Articles</Link>
          <span>/</span>
          <span className="text-forest-800 dark:text-forest-200 font-medium">Accounting & finance bursaries</span>
        </nav>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center rounded-full bg-forest-100 dark:bg-forest-800 px-3 py-1 text-xs font-medium text-forest-600 dark:text-forest-300">Field Guide</span>
            <span className="text-xs text-forest-400 dark:text-forest-500">Updated July 2026 · 7 min read</span>
          </div>
          <h1 className="font-display text-3xl font-semibold text-forest-900 dark:text-forest-50 sm:text-4xl leading-snug">
            Best bursaries for accounting and finance students in South Africa
          </h1>
          <p className="mt-4 text-sm leading-7 text-forest-600 dark:text-forest-400">
            South Africa's financial services sector is one of the most developed on the continent and one of the largest employers of graduates. Banks, audit firms, insurance companies, and asset managers all actively fund accounting and finance students — making this one of the most bursary-rich fields of study available.
          </p>
        </div>

        {/* Live bursaries */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50">Finance & accounting bursaries in our directory</h2>
            <Link to="/bursaries/field/finance" className="text-xs font-medium text-forest-600 dark:text-forest-400 hover:text-forest-900 dark:hover:text-white transition flex items-center gap-1">
              View all <ArrowRight size={11} />
            </Link>
          </div>
          {loading ? (
            <div className="space-y-3">{[1,2,3].map((i) => <div key={i} className="h-20 rounded-2xl bg-forest-100 dark:bg-forest-800 animate-pulse" />)}</div>
          ) : financeBursaries.length === 0 ? (
            <div className="rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 p-6 text-center">
              <p className="text-sm text-forest-500 dark:text-forest-400">No finance bursaries currently listed.</p>
              <Link to="/bursaries" className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-forest-600 hover:text-forest-900 transition">Browse all bursaries <ArrowRight size={13} /></Link>
            </div>
          ) : (
            <div className="space-y-3">
              {financeBursaries.map((b, i) => {
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
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">Why finance and accounting attract so many bursaries</h2>
            <p>South Africa's financial sector employs hundreds of thousands of people and requires a constant pipeline of qualified accountants, financial analysts, auditors, actuaries, and investment professionals. The Big Four audit firms — Deloitte, PwC, KPMG, and EY — all run competitive bursary programmes. Every major bank funds students. Insurance groups like Discovery and Old Mutual fund actuarial and finance students.</p>
            <p className="mt-3">Crucially, finance and accounting bursaries often come with structured graduate programmes and a clear career path. Funders aren't just paying for your degree — they're investing in a future employee they've already identified as high potential.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">Key funders to know</h2>
            <div className="space-y-4">
              {[
                { funder: "ABSA Group", detail: "ABSA funds accounting, finance, and IT students through its bursary programme. Bursary holders are typically offered vacation work and a graduate opportunity within the bank. Strong academic results and a demonstrated interest in banking are important." },
                { funder: "Standard Bank", detail: "Standard Bank's bursary covers tuition and provides mentorship within one of Africa's largest banks. The bank funds students across finance, accounting, IT, and engineering, with a particular interest in students who want to work in investment banking or data-driven finance." },
                { funder: "FNB (First National Bank)", detail: "FNB funds accounting and finance students with a focus on innovation and digital banking. FNB's culture is known for valuing creative thinkers alongside technical competence — your motivation letter should reflect both." },
                { funder: "Nedbank", detail: "Nedbank's bursary programme covers tuition and includes a structured vacation work component. Nedbank has a strong focus on sustainable finance and green banking — mention these themes if they align with your interests." },
                { funder: "Deloitte South Africa", detail: "Deloitte's bursary targets accounting and auditing students with strong academic records. Bursary holders typically join the firm's graduate programme after qualifying — a direct pipeline to a professional career in audit and advisory." },
                { funder: "PwC South Africa", detail: "PwC funds accounting students who are aiming for the CA(SA) designation. The bursary includes vacation work at PwC and a graduate trainee offer. PwC values students who show both technical ability and strong interpersonal skills." },
              ].map((item) => (
                <div key={item.funder} className="rounded-2xl border border-forest-100 dark:border-forest-800 bg-white dark:bg-forest-900 p-5">
                  <p className="font-semibold text-forest-900 dark:text-forest-50 mb-1">{item.funder}</p>
                  <p>{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">Finance disciplines and the bursaries available</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { discipline: "BCom Accounting / CA(SA) track", demand: "Most funded — Big Four, all major banks" },
                { discipline: "BCom Finance",                    demand: "Very high — investment, banking, treasury" },
                { discipline: "Actuarial Science",               demand: "High — insurance, Old Mutual, Discovery" },
                { discipline: "BCom Economics",                  demand: "Moderate — government, research, consulting" },
                { discipline: "Financial Planning",              demand: "Growing — wealth management sector" },
                { discipline: "Risk Management",                 demand: "High — banking and insurance sector" },
              ].map((item) => (
                <div key={item.discipline} className="rounded-xl border border-forest-100 dark:border-forest-800 bg-forest-50 dark:bg-forest-900 p-3">
                  <p className="font-semibold text-forest-900 dark:text-forest-50 text-sm">{item.discipline}</p>
                  <p className="text-xs text-forest-500 dark:text-forest-400 mt-0.5">{item.demand}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">What finance bursary panels look for</h2>
            <ul className="space-y-2.5">
              {[
                "Strong Mathematics results — most finance bursaries require a minimum of 65–70% in matric Maths",
                "Clear articulation of why you chose finance or accounting as a career",
                "Awareness of the funder's business — know what kind of banking or financial services they do",
                "For CA(SA) track: commitment to completing the SAICA articles process",
                "For actuarial: strong Maths and Statistics performance is non-negotiable",
                "Professional demeanour in the interview — financial services firms value presentation",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 list-none">
                  <CheckCircle size={14} className="text-forest-500 dark:text-forest-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">Tips specific to finance and accounting applications</h2>
            <div className="space-y-4">
              {[
                { title: "Know the difference between types of finance careers", body: "There is a significant difference between commercial banking, investment banking, auditing, actuarial science, and financial planning. Funders want to know which path you're pursuing and why. Saying 'I want to work in finance' without specificity is a weak answer. Know your direction." },
                { title: "Research the CA(SA) path if you're doing accounting", body: "The Chartered Accountant (CA(SA)) designation is the most valued accounting qualification in South Africa. If you're on this path, say so clearly in your application. Many bursary programmes — especially at the Big Four and major banks — are specifically designed to put you on the CA(SA) track." },
                { title: "Dress and present professionally at interviews", body: "Financial services firms have more conservative professional cultures than tech companies. Your interview presentation matters more in this sector than almost any other. Dress formally, arrive early, and prepare to discuss current financial news." },
                { title: "Read the financial news", body: "Being able to reference a recent development in South African banking, insurance, or the JSE in your interview demonstrates genuine interest. Read Business Day or Fin24 in the weeks before your application deadline and interview." },
              ].map((tip) => (
                <div key={tip.title} className="rounded-2xl border border-forest-100 dark:border-forest-800 bg-white dark:bg-forest-900 p-5">
                  <p className="font-semibold text-forest-900 dark:text-forest-50 mb-1">{tip.title}</p>
                  <p>{tip.body}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link to="/bursaries/field/finance" className="inline-flex items-center gap-2 rounded-xl bg-forest-600 dark:bg-forest-500 px-5 py-3 text-sm font-medium text-white hover:bg-forest-700 transition">
            All finance bursaries <ArrowRight size={15} />
          </Link>
          <Link to="/guides/how-to-apply-for-a-bursary" className="inline-flex items-center gap-2 rounded-xl border border-forest-300 dark:border-forest-700 px-5 py-3 text-sm font-medium text-forest-700 dark:text-forest-300 hover:bg-forest-100 dark:hover:bg-forest-800 transition">
            How to apply guide <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </>
  );
}
