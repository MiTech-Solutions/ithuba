import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, CheckCircle } from "lucide-react";
import { useBursaries } from "../../hooks/useBursaries";
import { slugify } from "../../utils/slug";
import { deadlineBadge, daysUntil } from "../../utils/deadline";

const OG_IMG = "https://i.postimg.cc/d3T437Xk/45C7EB18-47F5-4CD3-9509-3A1092AF188E.png";

export default function ArticleLawBursaries() {
  const { bursaries, loading } = useBursaries();

  const lawBursaries = bursaries
    .filter((b) => {
      const field = b.field_of_study?.toLowerCase() || "";
      return field.includes("law") || field.includes("legal") || field === "all fields";
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
        <title>Best Bursaries for Law Students in South Africa | Ithuba</title>
        <meta name="description" content="Find the best bursaries for law students in South Africa. Government, corporate, and NGO funding for LLB and legal studies students — with application links and deadlines." />
        <link rel="canonical" href="https://ithubahub.co.za/articles/best-bursaries-for-law-students" />
        <meta property="og:title" content="Best Bursaries for Law Students in South Africa | Ithuba" />
        <meta property="og:description" content="The best South African bursaries for law students — government departments, law firms, and corporate funders with deadlines and application links." />
        <meta property="og:url" content="https://ithubahub.co.za/articles/best-bursaries-for-law-students" />
        <meta property="og:image" content={OG_IMG} />
        <meta name="twitter:title" content="Best Bursaries for Law Students in South Africa | Ithuba" />
        <meta name="twitter:description" content="The best South African bursaries for law students — with deadlines and application links." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "headline": "Best Bursaries for Law Students in South Africa",
              "url": "https://ithubahub.co.za/articles/best-bursaries-for-law-students",
              "publisher": { "@type": "Organization", "name": "Ithuba", "url": "https://ithubahub.co.za" },
              "datePublished": "2026-08-31",
              "dateModified": "2026-08-31",
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ithubahub.co.za" },
                { "@type": "ListItem", "position": 2, "name": "Articles", "item": "https://ithubahub.co.za/articles" },
                { "@type": "ListItem", "position": 3, "name": "Law Bursaries", "item": "https://ithubahub.co.za/articles/best-bursaries-for-law-students" },
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
          <span className="text-forest-800 dark:text-forest-200 font-medium">Law bursaries</span>
        </nav>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center rounded-full bg-forest-100 dark:bg-forest-800 px-3 py-1 text-xs font-medium text-forest-600 dark:text-forest-300">Field Guide</span>
            <span className="text-xs text-forest-400 dark:text-forest-500">Updated August 2026 · 7 min read</span>
          </div>
          <h1 className="font-display text-3xl font-semibold text-forest-900 dark:text-forest-50 sm:text-4xl leading-snug">
            Best bursaries for law students in South Africa
          </h1>
          <p className="mt-4 text-sm leading-7 text-forest-600 dark:text-forest-400">
            Law is one of South Africa's most competitive fields of study — and one where bursary funding, while available, requires more targeted searching than engineering or finance. This guide covers who funds law students, what they look for, and how to position yourself as a strong candidate.
          </p>
        </div>

        {/* Live bursaries */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50">Law bursaries in our directory</h2>
            <Link to="/opportunities/field/law" className="text-xs font-medium text-forest-600 dark:text-forest-400 hover:text-forest-900 dark:hover:text-white transition flex items-center gap-1">
              View all <ArrowRight size={11} />
            </Link>
          </div>
          {loading ? (
            <div className="space-y-3">{[1,2,3].map((i) => <div key={i} className="h-20 rounded-2xl bg-forest-100 dark:bg-forest-800 animate-pulse" />)}</div>
          ) : lawBursaries.length === 0 ? (
            <div className="rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 p-6 text-center">
              <p className="text-sm text-forest-500 dark:text-forest-400">No law bursaries currently listed.</p>
              <Link to="/bursaries" className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-forest-600 hover:text-forest-900 transition">Browse all bursaries <ArrowRight size={13} /></Link>
            </div>
          ) : (
            <div className="space-y-3">
              {lawBursaries.map((b, i) => {
                const badge = deadlineBadge(b.deadline);
                return (
                  <div key={b.id || i} className="flex gap-4 rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 p-4 transition hover:border-forest-400 hover:shadow-sm">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-forest-100 dark:bg-forest-800 text-forest-600 dark:text-forest-300 font-bold text-sm">{i + 1}</div>
                    <div className="flex-1 min-w-0">
                      {badge && <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs ${badge.classes} mb-0.5`}>⏱ {badge.label}</span>}
                      <p className="font-semibold text-forest-900 dark:text-forest-50 text-sm">{b.name}</p>
                      <p className="text-xs text-forest-500 dark:text-forest-400">{b.funder}{b.deadline ? ` · Closes ${b.deadline}` : ""}</p>
                      {b.value && <p className="text-xs text-forest-400 dark:text-forest-500 mt-0.5">{b.value}</p>}
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
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">Why law has fewer bursaries than STEM fields</h2>
            <p>Engineering, medicine, and IT attract bursaries because large companies need those graduates to run their operations. Law is different — most large corporates have small in-house legal teams and don't rely on a constant pipeline of law graduates the way Eskom relies on electrical engineers.</p>
            <p className="mt-3">This doesn't mean funding is unavailable — it means you need to look in the right places. The best sources of law bursaries are government departments and state institutions that need large numbers of legal professionals, large law firms running structured recruitment programmes, and NGOs working in human rights, environmental law, or access to justice.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">Key funders for law students</h2>
            <div className="space-y-4">
              {[
                { funder: "Department of Justice and Constitutional Development", detail: "The largest single employer of lawyers in South Africa funds law students who commit to serving in the public sector. Priority is given to students who will work in areas of critical need — magistrate courts, the NPA, and legal aid offices. Applications typically open in the second half of the year." },
                { funder: "Legal Aid South Africa", detail: "Legal Aid SA funds law students through its bursary programme, with a preference for students who will join the organisation after qualifying. As the primary provider of free legal services to indigent South Africans, Legal Aid SA offers genuine public interest legal work and a clear career path for graduates committed to access to justice." },
                { funder: "National Prosecuting Authority (NPA)", detail: "The NPA funds selected law students as part of its talent pipeline for prosecutors. Competition is high and the selection process includes an assessment of your suitability for prosecutorial work. Students who express a genuine commitment to criminal justice and public prosecution are best positioned." },
                { funder: "Large law firms (candidate attorney programmes)", detail: "Firms like Cliffe Dekker Hofmeyr, ENSafrica, Bowmans, and others run bursary programmes linked to candidate attorney placements. These are competitive but come with structured mentorship and a guaranteed articles placement. The trade-off is typically a commitment to complete your articles at the firm." },
                { funder: "Rhodes University and UCT law faculties", detail: "Both universities offer merit-based bursaries for high-achieving law students. These are academic awards rather than career-linked bursaries and typically cover tuition only. Check the financial aid office at your institution directly." },
              ].map((item) => (
                <div key={item.funder} className="rounded-2xl border border-forest-100 dark:border-forest-800 bg-white dark:bg-forest-900 p-5">
                  <p className="font-semibold text-forest-900 dark:text-forest-50 mb-1">{item.funder}</p>
                  <p>{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">What law bursary applications look for</h2>
            <ul className="space-y-2.5">
              {[
                "Strong matric results — particularly in English, History, and Mathematics or Mathematical Literacy",
                "Genuine articulation of why you chose law and which area of practice interests you",
                "For government bursaries: a stated commitment to public service and an understanding of South Africa's legal system and its challenges",
                "For law firm bursaries: commercial awareness and an interest in the firm's practice areas",
                "Leadership, debating, or community involvement — law is a profession that rewards communication skills",
                "Good academic standing at university if you're already studying — most law bursaries require a 60%+ average",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 list-none">
                  <CheckCircle size={14} className="text-forest-500 dark:text-forest-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">Law specialisations and where funding is most available</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { spec: "Criminal law",          funding: "NPA, Legal Aid SA, Department of Justice" },
                { spec: "Commercial law",        funding: "Large law firms, banks, corporates" },
                { spec: "Constitutional law",    funding: "NGOs, human rights organisations" },
                { spec: "Environmental law",     funding: "NGOs, Department of Environment" },
                { spec: "Labour law",            funding: "CCMA, Department of Labour" },
                { spec: "Intellectual property", funding: "Tech companies, pharmaceutical firms" },
                { spec: "Tax law",               funding: "SARS, accounting firms" },
                { spec: "Land and property",     funding: "Department of Agriculture, Land Reform" },
              ].map((item) => (
                <div key={item.spec} className="rounded-xl border border-forest-100 dark:border-forest-800 bg-forest-50 dark:bg-forest-900 p-3">
                  <p className="font-semibold text-forest-900 dark:text-forest-50 text-sm">{item.spec}</p>
                  <p className="text-xs text-forest-500 dark:text-forest-400 mt-0.5">{item.funding}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">Tips specific to law bursary applications</h2>
            <div className="space-y-4">
              {[
                { title: "Know which area of law you want to practise", body: "'I want to be a lawyer' is not enough. 'I want to specialise in commercial litigation and am interested in your firm's dispute resolution practice' is. Law bursary panels — especially at firms — want to see that you've thought about what kind of lawyer you want to become and why that aligns with their work." },
                { title: "For government bursaries — understand the public sector context", body: "If you're applying to the Department of Justice or Legal Aid SA, you need to demonstrate genuine understanding of South Africa's access to justice challenges, the backlog in courts, and why you want to work in that environment. Students who frame their motivation purely around career advancement tend not to succeed here." },
                { title: "Debating and mooting experience matters", body: "If your university has a mooting programme or debating society, join it. Law firms and government funders value oral advocacy skills, and demonstrating this experience in your application is a genuine differentiator." },
                { title: "Don't overlook NSFAS", body: "If your household income qualifies, NSFAS funds LLB students at public universities without any field restriction or work-back obligation. It's worth applying regardless of other applications." },
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
          <Link to="/opportunities/field/law" className="inline-flex items-center gap-2 rounded-xl bg-forest-600 dark:bg-forest-500 px-5 py-3 text-sm font-medium text-white hover:bg-forest-700 transition">
            All law opportunities <ArrowRight size={15} />
          </Link>
          <Link to="/guides/how-to-apply-for-a-bursary" className="inline-flex items-center gap-2 rounded-xl border border-forest-300 dark:border-forest-700 px-5 py-3 text-sm font-medium text-forest-700 dark:text-forest-300 hover:bg-forest-100 dark:hover:bg-forest-800 transition">
            How to apply guide <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </>
  );
}
