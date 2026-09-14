import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, CheckCircle, AlertCircle } from "lucide-react";
import { useBursaries } from "../../hooks/useBursaries";
import { slugify } from "../../utils/slug";
import { daysUntil } from "../../utils/deadline";

const OG_IMG = "https://i.postimg.cc/d3T437Xk/45C7EB18-47F5-4CD3-9509-3A1092AF188E.png";

export default function ArticleNoClosingDateBursaries() {
  const { bursaries, loading } = useBursaries();

  // Bursaries with no deadline or "rolling" / "open" in deadline field
  const openBursaries = bursaries
    .filter((b) => {
      const deadline = b.deadline?.toLowerCase() || "";
      return (
        deadline === "" ||
        deadline === "none" ||
        deadline === "open" ||
        deadline === "rolling" ||
        deadline.includes("rolling") ||
        deadline.includes("open") ||
        deadline.includes("ongoing") ||
        daysUntil(b.deadline) === null
      );
    })
    .slice(0, 8);

  return (
    <>
      <Helmet>
        <title>Bursaries With No Closing Date You Can Apply for Anytime | Ithuba</title>
        <meta name="description" content="Find South African bursaries with no fixed closing date — rolling applications you can submit any time of year. Updated regularly with open bursaries and rolling programmes." />
        <link rel="canonical" href="https://ithubahub.co.za/articles/bursaries-with-no-closing-date" />
        <meta property="og:title" content="Bursaries With No Closing Date in South Africa | Ithuba" />
        <meta property="og:description" content="South African bursaries with rolling or no fixed closing date — programmes you can apply to any time of year." />
        <meta property="og:url" content="https://ithubahub.co.za/articles/bursaries-with-no-closing-date" />
        <meta property="og:image" content={OG_IMG} />
        <meta name="twitter:title" content="Bursaries With No Closing Date in South Africa | Ithuba" />
        <meta name="twitter:description" content="South African bursaries with rolling applications — no fixed deadline, apply any time of year." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "headline": "Bursaries You Can Apply for With No Closing Date in South Africa",
              "url": "https://ithubahub.co.za/articles/bursaries-with-no-closing-date",
              "publisher": { "@type": "Organization", "name": "Ithuba", "url": "https://ithubahub.co.za" },
              "datePublished": "2026-09-06",
              "dateModified": "2026-09-06",
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ithubahub.co.za" },
                { "@type": "ListItem", "position": 2, "name": "Articles", "item": "https://ithubahub.co.za/articles" },
                { "@type": "ListItem", "position": 3, "name": "Bursaries With No Closing Date", "item": "https://ithubahub.co.za/articles/bursaries-with-no-closing-date" },
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
          <span className="text-forest-800 dark:text-forest-200 font-medium">Bursaries with no closing date</span>
        </nav>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center rounded-full bg-forest-100 dark:bg-forest-800 px-3 py-1 text-xs font-medium text-forest-600 dark:text-forest-300">Funding Guide</span>
            <span className="text-xs text-forest-400 dark:text-forest-500">Updated September 2026 · 6 min read</span>
          </div>
          <h1 className="font-display text-3xl font-semibold text-forest-900 dark:text-forest-50 sm:text-4xl leading-snug">
            Bursaries you can apply for with no closing date
          </h1>
          <p className="mt-4 text-sm leading-7 text-forest-600 dark:text-forest-400">
            Most bursaries have fixed annual deadlines — miss them and you wait another year. But some programmes accept applications on a rolling basis, have no fixed closing date, or remain open until their funding quota is filled. These are worth knowing about, especially if you've missed the main application window for the year.
          </p>
        </div>

        {/* Important notice */}
        <div className="mb-10 flex gap-3 rounded-2xl border border-gold-200 dark:border-gold-900/40 bg-gold-50 dark:bg-gold-900/10 p-5">
          <AlertCircle size={18} className="text-gold-600 dark:text-gold-400 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-forest-900 dark:text-forest-50 mb-1">Always verify before applying</p>
            <p className="text-sm leading-6 text-forest-700 dark:text-forest-300">
              Rolling and open-deadline bursaries can close without notice once their funding allocation is exhausted. Even if a bursary has no published closing date, apply as early as possible — first-come allocations are common. Always confirm current status directly with the funder before investing time in an application.
            </p>
          </div>
        </div>

        {/* Live open bursaries */}
        {openBursaries.length > 0 && (
          <div className="mb-10">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50">Open bursaries in our directory</h2>
              <Link to="/bursaries" className="text-xs font-medium text-forest-600 dark:text-forest-400 hover:text-forest-900 dark:hover:text-white transition flex items-center gap-1">Browse all <ArrowRight size={11} /></Link>
            </div>
            {loading ? (
              <div className="space-y-3">{[1,2,3].map((i) => <div key={i} className="h-20 rounded-2xl bg-forest-100 dark:bg-forest-800 animate-pulse" />)}</div>
            ) : (
              <div className="space-y-3">
                {openBursaries.map((b, i) => (
                  <div key={b.id || i} className="flex gap-4 rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 p-4 transition hover:border-forest-400 hover:shadow-sm">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-forest-100 dark:bg-forest-800 text-forest-600 dark:text-forest-300 font-bold text-sm">{i + 1}</div>
                    <div className="flex-1 min-w-0">
                      <span className="inline-flex items-center rounded-full bg-green-100 dark:bg-green-900/30 px-2 py-0.5 text-xs text-green-700 dark:text-green-300 mb-0.5">Open</span>
                      <p className="font-semibold text-forest-900 dark:text-forest-50 text-sm">{b.name}</p>
                      <p className="text-xs text-forest-500 dark:text-forest-400">{b.funder}{b.field_of_study ? ` · ${b.field_of_study}` : ""}</p>
                      {b.value && <p className="text-xs text-forest-400 mt-0.5">{b.value}</p>}
                    </div>
                    <div className="flex flex-col gap-1.5 shrink-0 justify-center">
                      <Link to={`/bursaries/${slugify(b.name)}`} className="inline-flex items-center gap-1 text-xs font-medium text-forest-600 dark:text-forest-400 hover:text-forest-900 dark:hover:text-white transition">Details <ArrowRight size={11} /></Link>
                      {b.apply_url && <a href={b.apply_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-medium text-forest-600 dark:text-forest-400 hover:text-forest-900 dark:hover:text-white transition">Apply <ExternalLink size={11} /></a>}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="space-y-8 text-sm leading-7 text-forest-700 dark:text-forest-300">

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">What "no closing date" actually means</h2>
            <p>When a bursary has no published closing date, it usually means one of three things:</p>
            <div className="mt-4 space-y-3">
              {[
                { type: "Rolling intake", desc: "The funder reviews applications as they arrive and awards bursaries throughout the year until the budget is exhausted. These can close at any time without notice. Apply immediately — waiting costs you your place in the queue." },
                { type: "Quota-based closing", desc: "The programme closes once a set number of positions are filled, not on a calendar date. The closing date is effectively unknown in advance. Early applications are always advantaged." },
                { type: "Genuinely open", desc: "Some university trust bursaries, small NGO programmes, and municipal bursaries have no formal closing date and accept applications year-round. These are rare but exist. Allocations are typically small." },
              ].map((item) => (
                <div key={item.type} className="rounded-2xl border border-forest-100 dark:border-forest-800 bg-white dark:bg-forest-900 p-4">
                  <p className="font-semibold text-forest-900 dark:text-forest-50 mb-1">{item.type}</p>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">Programmes known for rolling or flexible intake</h2>
            <div className="space-y-4">
              {[
                {
                  name: "University financial aid offices",
                  detail: "Most South African universities maintain a bursary fund that accepts applications throughout the year from registered students in financial need. These are not widely advertised but are available at every public university. Contact your university's financial aid office directly — many students don't know this option exists. Allocation is typically on a first-come, first-served basis within the available budget.",
                },
                {
                  name: "NSFAS appeals and late applications",
                  detail: "NSFAS has a formal application window (September to January) but also accepts late applications and has an appeals process that runs throughout the year. If you missed the main window, submitting a late application with a motivating letter explaining your circumstances is worth doing — late applicants are processed if funding remains available.",
                },
                {
                  name: "SETA learnerships and bursaries",
                  detail: "Sector Education and Training Authorities (SETAs) post learnership and bursary opportunities throughout the year as they become available. There is no single annual deadline — opportunities are published on an ad hoc basis. Checking the relevant SETA website monthly is the most reliable way to catch these.",
                },
                {
                  name: "Small NGO and trust bursaries",
                  detail: "Many smaller foundations and trusts — particularly those focused on specific communities, regions, or surnames — have no formal closing date and a small allocation. These are rarely advertised nationally. The most reliable way to find them is through your university financial aid office, your local municipality, or community organisations in your area.",
                },
                {
                  name: "Employer study assistance programmes",
                  detail: "If you are already employed, many South African companies offer study assistance to existing employees with no annual closing date. This covers part-time and distance learning while you work. Check with your HR department — this is one of the most underused bursary-equivalent options available to working students.",
                },
              ].map((item) => (
                <div key={item.name} className="rounded-2xl border border-forest-100 dark:border-forest-800 bg-white dark:bg-forest-900 p-5">
                  <p className="font-semibold text-forest-900 dark:text-forest-50 mb-2">{item.name}</p>
                  <p>{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">What to do if you've missed all the main deadlines</h2>
            <div className="space-y-3">
              {[
                { step: "01", title: "Contact your university financial aid office immediately", body: "This is always your first move. Every public university has emergency bursary funds, institutional grants, and access to rolling external bursaries. Many students who assume they have no options find funding through this route." },
                { step: "02", title: "Apply to NSFAS as a late applicant", body: "Submit your NSFAS application even after the window closes. Include a letter explaining why you missed the deadline. Late applications are processed when funding allows and are worth submitting." },
                { step: "03", title: "Check SETA websites monthly", body: "SETAs post opportunities irregularly throughout the year. Set a monthly reminder to check the relevant SETA for your field. Opportunities are often posted and filled within weeks." },
                { step: "04", title: "Research community and municipal bursaries", body: "Your local municipality, ward councillor, and community organisations sometimes administer small bursaries with no formal deadline. These are not well-advertised — ask directly." },
                { step: "05", title: "Prepare for next year's main window", body: "Use the remaining time to write your motivation letter, gather documents, improve your academic results, and set calendar reminders for every major bursary opening next year. Missing deadlines once is understandable. Missing them twice is avoidable." },
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
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">When do most bursaries open?</h2>
            <p className="mb-4">Knowing the typical bursary calendar helps you plan ahead so you're never in this position again:</p>
            <div className="rounded-2xl border border-forest-200 dark:border-forest-700 overflow-hidden">
              <div className="grid grid-cols-3 bg-forest-800 dark:bg-forest-900 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-forest-200">
                <span>Period</span>
                <span>What opens</span>
                <span>Action</span>
              </div>
              <div className="divide-y divide-forest-100 dark:divide-forest-800 bg-white dark:bg-forest-900">
                {[
                  { period: "Jan–Feb",    what: "Some corporate bursaries for new applicants",       action: "Check Eskom, Sasol, Anglo American" },
                  { period: "Mar–Apr",    what: "Funza Lushaka opens; NRF postgrad applications",    action: "Apply if studying teaching or postgrad" },
                  { period: "May–Jun",    what: "Mid-year corporate bursary intake",                 action: "Check MTN, Transnet, bank bursaries" },
                  { period: "Jul–Aug",    what: "Government department bursaries open",              action: "Apply to DoH, DoA, DoJ bursaries" },
                  { period: "Sep–Oct",    what: "NSFAS opens; most major bursaries open",            action: "Highest activity — apply to everything" },
                  { period: "Nov–Dec",    what: "Closing season for most bursaries",                 action: "Submit outstanding applications urgently" },
                ].map((row) => (
                  <div key={row.period} className="grid grid-cols-3 gap-3 px-4 py-3 text-xs">
                    <p className="font-semibold text-forest-800 dark:text-forest-200">{row.period}</p>
                    <p className="text-forest-600 dark:text-forest-400">{row.what}</p>
                    <p className="text-forest-500 dark:text-forest-400">{row.action}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">Tips for rolling and open-deadline applications</h2>
            <ul className="space-y-2.5">
              {[
                "Apply as early as possible — rolling allocations are first-come and close without warning",
                "Keep a ready-to-submit application pack — updated CV, certified ID, academic transcripts, proof of registration, and motivation letter — so you can apply to any opportunity within 48 hours of it being posted",
                "Set Google Alerts for 'bursary application open South Africa' and your field of study to catch new opportunities as they are posted",
                "Check the Ithuba directory regularly — we update bursary status as deadlines change and new opportunities are added",
                "Follow your university financial aid office on social media — rolling and emergency bursary opportunities are often announced there first",
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
