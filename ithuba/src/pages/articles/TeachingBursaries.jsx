import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, CheckCircle } from "lucide-react";
import { useBursaries } from "../../hooks/useBursaries";
import { slugify } from "../../utils/slug";
import { deadlineBadge, daysUntil } from "../../utils/deadline";

const OG_IMG = "https://i.postimg.cc/d3T437Xk/45C7EB18-47F5-4CD3-9509-3A1092AF188E.png";

export default function ArticleTeachingBursaries() {
  const { bursaries, loading } = useBursaries();

  const teachingBursaries = bursaries
    .filter((b) => {
      const field = b.field_of_study?.toLowerCase() || "";
      return field.includes("teach") || field.includes("education") || field === "all fields";
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
        <title>Best Bursaries for Teaching Students in South Africa | Ithuba</title>
        <meta name="description" content="Find the best bursaries for teaching and education students in South Africa. NSFAS, DHET, Funza Lushaka and more — with application links and deadlines." />
        <link rel="canonical" href="https://ithubahub.co.za/articles/best-bursaries-for-teaching-students" />
        <meta property="og:title" content="Best Bursaries for Teaching Students in South Africa | Ithuba" />
        <meta property="og:description" content="The best South African bursaries for teaching and education students — DHET, Funza Lushaka and more with deadlines and application links." />
        <meta property="og:url" content="https://ithubahub.co.za/articles/best-bursaries-for-teaching-students" />
        <meta property="og:image" content={OG_IMG} />
        <meta name="twitter:title" content="Best Bursaries for Teaching Students in South Africa | Ithuba" />
        <meta name="twitter:description" content="The best South African bursaries for teaching and education students with deadlines and application links." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "headline": "Best Bursaries for Teaching Students in South Africa",
              "url": "https://ithubahub.co.za/articles/best-bursaries-for-teaching-students",
              "publisher": { "@type": "Organization", "name": "Ithuba", "url": "https://ithubahub.co.za" },
              "datePublished": "2026-08-31",
              "dateModified": "2026-08-31",
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ithubahub.co.za" },
                { "@type": "ListItem", "position": 2, "name": "Articles", "item": "https://ithubahub.co.za/articles" },
                { "@type": "ListItem", "position": 3, "name": "Teaching Bursaries", "item": "https://ithubahub.co.za/articles/best-bursaries-for-teaching-students" },
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
          <span className="text-forest-800 dark:text-forest-200 font-medium">Teaching bursaries</span>
        </nav>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center rounded-full bg-forest-100 dark:bg-forest-800 px-3 py-1 text-xs font-medium text-forest-600 dark:text-forest-300">Field Guide</span>
            <span className="text-xs text-forest-400 dark:text-forest-500">Updated August 2026 · 7 min read</span>
          </div>
          <h1 className="font-display text-3xl font-semibold text-forest-900 dark:text-forest-50 sm:text-4xl leading-snug">
            Best bursaries for teaching students in South Africa
          </h1>
          <p className="mt-4 text-sm leading-7 text-forest-600 dark:text-forest-400">
            Teaching is one of South Africa's most critically needed professions and one of the best-funded fields for bursary applicants. The government actively recruits teachers in specific phases and subjects, and the Funza Lushaka bursary programme is one of the most accessible and well-resourced bursaries in the country.
          </p>
        </div>

        {/* Live bursaries */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50">Teaching bursaries in our directory</h2>
            <Link to="/opportunities/field/teaching" className="text-xs font-medium text-forest-600 dark:text-forest-400 hover:text-forest-900 dark:hover:text-white transition flex items-center gap-1">View all <ArrowRight size={11} /></Link>
          </div>
          {loading ? (
            <div className="space-y-3">{[1,2,3].map((i) => <div key={i} className="h-20 rounded-2xl bg-forest-100 dark:bg-forest-800 animate-pulse" />)}</div>
          ) : teachingBursaries.length === 0 ? (
            <div className="rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 p-6 text-center">
              <p className="text-sm text-forest-500 dark:text-forest-400">No teaching bursaries currently listed.</p>
              <Link to="/bursaries" className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-forest-600 hover:text-forest-900 transition">Browse all bursaries <ArrowRight size={13} /></Link>
            </div>
          ) : (
            <div className="space-y-3">
              {teachingBursaries.map((b, i) => {
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
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">The Funza Lushaka Bursary — the most important one to know</h2>
            <p>The Funza Lushaka Bursary Programme is the South African government's flagship teaching bursary. It covers full tuition, accommodation, a monthly allowance, and travel costs. In exchange, recipients must teach at a public school for the same number of years they were funded, in a province and school where they are placed by the Department of Basic Education.</p>
            <p className="mt-3">Applications open annually — typically in April and close around September for the following academic year. First-year students and those already studying education can apply. Priority subjects include Mathematics, Physical Sciences, Accounting, Languages, and Foundation Phase teaching.</p>
            <div className="mt-4 rounded-2xl border border-gold-200 dark:border-gold-900/40 bg-gold-50 dark:bg-gold-900/10 p-5">
              <p className="font-semibold text-forest-900 dark:text-forest-50 mb-2">Funza Lushaka key facts</p>
              <div className="grid gap-2 sm:grid-cols-2 text-xs">
                {[
                  { label: "Funder", value: "Department of Basic Education" },
                  { label: "Covers", value: "Full tuition, accommodation, monthly allowance, travel" },
                  { label: "Work-back", value: "Yes — teach at a public school for years funded" },
                  { label: "Priority subjects", value: "Maths, Science, Accounting, Languages, Foundation Phase" },
                  { label: "Application", value: "funzalushaka.gov.za" },
                  { label: "Typical deadline", value: "September each year" },
                ].map((item) => (
                  <div key={item.label} className="flex flex-col">
                    <span className="text-forest-500 dark:text-forest-400">{item.label}</span>
                    <span className="font-medium text-forest-900 dark:text-forest-100 mt-0.5">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">Other funders for teaching students</h2>
            <div className="space-y-4">
              {[
                { funder: "Department of Higher Education and Training (DHET)", detail: "DHET funds students at public universities pursuing education qualifications, particularly through the Teaching Development Grant. Funding is channelled through universities — check with your university's financial aid office whether DHET funding is available at your institution." },
                { funder: "NSFAS", detail: "Teaching students at public universities qualify for NSFAS on the same basis as any other field — household income below R350,000/year. NSFAS has no work-back obligation. Many teaching students hold both NSFAS and a Funza Lushaka bursary, but check whether this is permitted under both agreements before accepting." },
                { funder: "Provincial Departments of Education", detail: "Each of the nine provincial education departments runs its own bursary programme for teachers in shortage subjects. Requirements and deadlines vary by province. Gauteng, Western Cape, and KwaZulu-Natal have the most structured programmes. Contact your provincial Department of Education directly." },
                { funder: "SACE (South African Council for Educators)", detail: "SACE does not directly fund bursaries but administers the registration process for teachers and provides guidance on available funding. Registered teachers in good standing may access additional development funding through SACE programmes." },
              ].map((item) => (
                <div key={item.funder} className="rounded-2xl border border-forest-100 dark:border-forest-800 bg-white dark:bg-forest-900 p-5">
                  <p className="font-semibold text-forest-900 dark:text-forest-50 mb-1">{item.funder}</p>
                  <p>{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">Which teaching subjects are most funded?</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { subject: "Mathematics", demand: "Highest — critical shortage at all levels" },
                { subject: "Physical Sciences", demand: "Very high — especially in rural schools" },
                { subject: "Accounting", demand: "High — secondary school shortage" },
                { subject: "Foundation Phase (Gr R–3)", demand: "Very high — early childhood priority" },
                { subject: "English / Languages", demand: "High — LoLT shortage in many provinces" },
                { subject: "Life Sciences", demand: "Moderate — consistent demand" },
                { subject: "Technology / CAT", demand: "Growing — digital skills priority" },
                { subject: "Special Needs Education", demand: "High — significant shortage nationally" },
              ].map((item) => (
                <div key={item.subject} className="rounded-xl border border-forest-100 dark:border-forest-800 bg-forest-50 dark:bg-forest-900 p-3">
                  <p className="font-semibold text-forest-900 dark:text-forest-50 text-sm">{item.subject}</p>
                  <p className="text-xs text-forest-500 dark:text-forest-400 mt-0.5">{item.demand}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">What teaching bursaries require</h2>
            <ul className="space-y-2.5">
              {[
                "South African citizenship — Funza Lushaka and government programmes are citizens only",
                "Acceptance at an accredited BEd or PGCE programme at a public university",
                "Studying a priority subject or phase — Mathematics, Science, Foundation Phase are most funded",
                "Commitment to teaching in a public school — most teaching bursaries have a service obligation",
                "A genuine motivation for choosing teaching as a career — not just the bursary",
                "Good academic standing — most programmes expect at least 60% overall",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 list-none">
                  <CheckCircle size={14} className="text-forest-500 dark:text-forest-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link to="/opportunities/field/teaching" className="inline-flex items-center gap-2 rounded-xl bg-forest-600 dark:bg-forest-500 px-5 py-3 text-sm font-medium text-white hover:bg-forest-700 transition">
            All teaching opportunities <ArrowRight size={15} />
          </Link>
          <Link to="/guides/how-to-apply-for-a-bursary" className="inline-flex items-center gap-2 rounded-xl border border-forest-300 dark:border-forest-700 px-5 py-3 text-sm font-medium text-forest-700 dark:text-forest-300 hover:bg-forest-100 dark:hover:bg-forest-800 transition">
            How to apply guide <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </>
  );
}
