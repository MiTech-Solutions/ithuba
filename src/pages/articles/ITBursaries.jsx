import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, CheckCircle } from "lucide-react";
import { useBursaries } from "../../hooks/useBursaries";
import { slugify } from "../../utils/slug";
import { deadlineBadge, daysUntil } from "../../utils/deadline";

const OG_IMG = "https://i.postimg.cc/d3T437Xk/45C7EB18-47F5-4CD3-9509-3A1092AF188E.png";

export default function ArticleITBursaries() {
  const { bursaries, loading } = useBursaries();

  const itBursaries = bursaries
    .filter((b) => {
      const field = b.field_of_study?.toLowerCase() || "";
      return field.includes("it") || field.includes("computer") || field.includes("information") || field.includes("technology") || field === "all fields";
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
        <title>Best Bursaries for IT & Computer Science Students in South Africa | Ithuba</title>
        <meta name="description" content="Find the best bursaries for IT, computer science, and software engineering students in South Africa. Telkom, MTN, Vodacom and more — with application links and deadlines." />
        <link rel="canonical" href="https://ithubahub.co.za/articles/best-bursaries-for-it-students" />
        <meta property="og:title" content="Best Bursaries for IT & Computer Science Students | Ithuba" />
        <meta property="og:description" content="The best South African bursaries for IT and computer science students — Telkom, MTN, Vodacom and more with deadlines and apply links." />
        <meta property="og:url" content="https://ithubahub.co.za/articles/best-bursaries-for-it-students" />
        <meta property="og:image" content={OG_IMG} />
        <meta name="twitter:title" content="Best Bursaries for IT & Computer Science Students | Ithuba" />
        <meta name="twitter:description" content="The best South African bursaries for IT and computer science students — Telkom, MTN, Vodacom and banks." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={OG_IMG} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "headline": "Best Bursaries for IT and Computer Science Students in South Africa",
              "description": "A guide to the best South African bursaries for IT and computer science students.",
              "url": "https://ithubahub.co.za/articles/best-bursaries-for-it-students",
              "publisher": { "@type": "Organization", "name": "Ithuba", "url": "https://ithubahub.co.za" },
              "datePublished": "2026-07-20",
              "dateModified": "2026-07-20",
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ithubahub.co.za" },
                { "@type": "ListItem", "position": 2, "name": "Articles", "item": "https://ithubahub.co.za/articles" },
                { "@type": "ListItem", "position": 3, "name": "IT Bursaries", "item": "https://ithubahub.co.za/articles/best-bursaries-for-it-students" },
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
          <span className="text-forest-800 dark:text-forest-200 font-medium">IT bursaries</span>
        </nav>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center rounded-full bg-forest-100 dark:bg-forest-800 px-3 py-1 text-xs font-medium text-forest-600 dark:text-forest-300">Field Guide</span>
            <span className="text-xs text-forest-400 dark:text-forest-500">Updated July 2026 · 7 min read</span>
          </div>
          <h1 className="font-display text-3xl font-semibold text-forest-900 dark:text-forest-50 sm:text-4xl leading-snug">
            Best bursaries for IT and computer science students in South Africa
          </h1>
          <p className="mt-4 text-sm leading-7 text-forest-600 dark:text-forest-400">
            Technology is one of the fastest-growing sectors in South Africa and one of the most generously funded for bursary applicants. Telecoms companies, banks, insurance groups, and tech firms all actively fund IT and computer science students — and competition for good graduates is fierce enough that they start recruiting in first year.
          </p>
        </div>

        {/* Live bursaries */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50">IT bursaries in our directory</h2>
            <Link to="/bursaries/field/it" className="text-xs font-medium text-forest-600 dark:text-forest-400 hover:text-forest-900 dark:hover:text-white transition flex items-center gap-1">
              View all <ArrowRight size={11} />
            </Link>
          </div>
          {loading ? (
            <div className="space-y-3">{[1,2,3].map((i) => <div key={i} className="h-20 rounded-2xl bg-forest-100 dark:bg-forest-800 animate-pulse" />)}</div>
          ) : itBursaries.length === 0 ? (
            <div className="rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 p-6 text-center">
              <p className="text-sm text-forest-500 dark:text-forest-400">No IT bursaries currently listed.</p>
              <Link to="/bursaries" className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-forest-600 hover:text-forest-900 transition">Browse all bursaries <ArrowRight size={13} /></Link>
            </div>
          ) : (
            <div className="space-y-3">
              {itBursaries.map((b, i) => {
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
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">Why IT attracts so much bursary funding</h2>
            <p>South Africa's digital economy is growing rapidly — fintech, e-commerce, cybersecurity, cloud computing, and data science are all sectors experiencing significant skills shortages. Every major bank, insurer, retailer, and telecoms company now functions as a technology company in some sense, and they all need technical talent.</p>
            <p className="mt-3">The result is that IT students have access to bursaries from a wider range of industries than almost any other field. A computer science graduate is relevant to banking, telecoms, insurance, retail, mining, logistics, and government — all of which offer bursaries.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">IT disciplines that attract bursaries</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { discipline: "Computer Science (BSc)",     demand: "Highest demand — software, AI, data" },
                { discipline: "Information Technology",     demand: "Very high — systems, networking, support" },
                { discipline: "Software Engineering",       demand: "Very high — development, DevOps" },
                { discipline: "Cybersecurity",              demand: "Fast growing — critical skills shortage" },
                { discipline: "Data Science / Analytics",   demand: "High and growing — every sector" },
                { discipline: "Computer Engineering",       demand: "High — hardware and embedded systems" },
                { discipline: "Information Systems",        demand: "Steady — business and IT intersection" },
                { discipline: "Electrical & IT combined",   demand: "High — IoT, automation, telecoms" },
              ].map((item) => (
                <div key={item.discipline} className="rounded-xl border border-forest-100 dark:border-forest-800 bg-forest-50 dark:bg-forest-900 p-3">
                  <p className="font-semibold text-forest-900 dark:text-forest-50 text-sm">{item.discipline}</p>
                  <p className="text-xs text-forest-500 dark:text-forest-400 mt-0.5">{item.demand}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">Key funders in the IT space</h2>
            <div className="space-y-4">
              {[
                { funder: "Telkom Foundation", detail: "One of the most prominent IT bursary funders in South Africa. Telkom funds students in IT, computer science, and engineering fields with a focus on students who will contribute to the digital economy. Applications typically open mid-year." },
                { funder: "MTN SA Foundation", detail: "MTN funds students across STEM fields with a technology focus. The MTN bursary covers tuition and provides vacation work opportunities within the MTN group — valuable industry exposure for a telecoms and tech career." },
                { funder: "Vodacom", detail: "Vodacom's bursary programme focuses on engineering and IT students with strong academic records. As South Africa's largest mobile operator, Vodacom offers bursary holders exposure to network engineering, software development, and data science." },
                { funder: "Major banks (ABSA, FNB, Standard Bank, Nedbank)", detail: "All four major banks fund IT and computer science students, particularly those interested in fintech, cybersecurity, and data analytics. Banking is one of the largest employers of technology graduates in South Africa." },
                { funder: "Department of Communications and Digital Technologies", detail: "The government funds IT students who will contribute to South Africa's digital transformation agenda. Priority is given to students in underserved communities and those planning public sector careers." },
              ].map((item) => (
                <div key={item.funder} className="rounded-2xl border border-forest-100 dark:border-forest-800 bg-white dark:bg-forest-900 p-5">
                  <p className="font-semibold text-forest-900 dark:text-forest-50 mb-1">{item.funder}</p>
                  <p>{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">What IT bursary applications look for</h2>
            <ul className="space-y-2.5">
              {[
                "Strong Mathematics results — most IT bursaries require a minimum of 60–70% in matric Maths",
                "Acceptance at an accredited IT or computer science programme at a recognised university",
                "Evidence of genuine interest in technology — personal projects, coding clubs, hackathons, or self-study",
                "For telecoms funders: understanding of the company's products and market position",
                "For bank funders: interest in fintech, digital banking, or data-driven decision making",
                "Strong analytical thinking — demonstrated in Maths, Science, or problem-solving contexts",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 list-none">
                  <CheckCircle size={14} className="text-forest-500 dark:text-forest-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">Stand out as an IT bursary applicant</h2>
            <div className="space-y-4">
              {[
                { title: "Show a personal project or GitHub profile", body: "A funder choosing between two IT students with similar marks will almost always choose the one who codes in their own time. Even a basic project demonstrates initiative and genuine passion. Mention it in your motivation letter and include a link if you have one." },
                { title: "Know the technology landscape", body: "Research the funder before your interview. Know whether they use cloud or on-premise systems, what programming languages their teams work in, and what technology challenges South Africa faces in their sector. Specific knowledge signals genuine interest." },
                { title: "Mention cybersecurity awareness", body: "Cybersecurity is a critical skills shortage area across every industry. Even if you're not specialising in security, demonstrating awareness of it shows maturity and broad thinking — qualities IT bursary panels value." },
                { title: "Apply across multiple sectors", body: "An IT degree is relevant to banking, telecoms, insurance, government, and retail. Don't limit your bursary applications to IT companies only — some of the most generous IT bursaries come from banks and insurance groups." },
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
          <Link to="/bursaries/field/it" className="inline-flex items-center gap-2 rounded-xl bg-forest-600 dark:bg-forest-500 px-5 py-3 text-sm font-medium text-white hover:bg-forest-700 transition">
            All IT bursaries <ArrowRight size={15} />
          </Link>
          <Link to="/guides/common-bursary-interview-questions" className="inline-flex items-center gap-2 rounded-xl border border-forest-300 dark:border-forest-700 px-5 py-3 text-sm font-medium text-forest-700 dark:text-forest-300 hover:bg-forest-100 dark:hover:bg-forest-800 transition">
            Interview questions guide <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </>
  );
}
