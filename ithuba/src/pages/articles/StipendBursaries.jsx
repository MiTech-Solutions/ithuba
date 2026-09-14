import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, AlertCircle } from "lucide-react";
import { useBursaries } from "../../hooks/useBursaries";
import { slugify } from "../../utils/slug";
import { deadlineBadge, daysUntil } from "../../utils/deadline";

const OG_IMG = "https://i.postimg.cc/d3T437Xk/45C7EB18-47F5-4CD3-9509-3A1092AF188E.png";

export default function ArticleStipendBursaries() {
  const { bursaries, loading } = useBursaries();

  const stipendBursaries = bursaries
    .filter((b) => {
      const value = b.value?.toLowerCase() || "";
      const desc  = b.description?.toLowerCase() || "";
      return value.includes("stipend") || value.includes("allowance") || value.includes("living") || desc.includes("stipend") || desc.includes("monthly allowance") || b.featured === "true";
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
        <title>Bursaries That Include a Monthly Stipend in South Africa | Ithuba</title>
        <meta name="description" content="Find South African bursaries that include a monthly living allowance or stipend. Know which bursaries cover more than just tuition and how much you can expect to receive." />
        <link rel="canonical" href="https://ithubahub.co.za/articles/bursaries-with-monthly-stipend" />
        <meta property="og:title" content="Bursaries That Include a Monthly Stipend in South Africa | Ithuba" />
        <meta property="og:description" content="Which South African bursaries include a monthly stipend or living allowance? Find out what to expect and which funders are most generous." />
        <meta property="og:url" content="https://ithubahub.co.za/articles/bursaries-with-monthly-stipend" />
        <meta property="og:image" content={OG_IMG} />
        <meta name="twitter:title" content="Bursaries That Include a Monthly Stipend in South Africa | Ithuba" />
        <meta name="twitter:description" content="Which South African bursaries include a monthly living allowance? Find out what to expect and who's most generous." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={OG_IMG} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "Bursaries That Include a Monthly Stipend in South Africa",
          "url": "https://ithubahub.co.za/articles/bursaries-with-monthly-stipend",
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
          <span className="text-forest-800 dark:text-forest-200 font-medium">Bursaries with stipends</span>
        </nav>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center rounded-full bg-forest-100 dark:bg-forest-800 px-3 py-1 text-xs font-medium text-forest-600 dark:text-forest-300">Funding Guide</span>
            <span className="text-xs text-forest-400 dark:text-forest-500">Updated July 2026 · 6 min read</span>
          </div>
          <h1 className="font-display text-3xl font-semibold text-forest-900 dark:text-forest-50 sm:text-4xl leading-snug">
            Bursaries that include a monthly stipend in South Africa
          </h1>
          <p className="mt-4 text-sm leading-7 text-forest-600 dark:text-forest-400">
            Tuition is only part of the cost of studying. Accommodation, food, transport, books, and daily living expenses add up quickly. Some bursaries cover only tuition — others cover everything including a monthly cash allowance. This guide explains which type of bursary is more likely to include a stipend and what you can realistically expect.
          </p>
        </div>

        {/* Live bursaries */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50">Featured bursaries from our directory</h2>
            <Link to="/bursaries" className="text-xs font-medium text-forest-600 dark:text-forest-400 hover:text-forest-900 dark:hover:text-white transition flex items-center gap-1">
              View all <ArrowRight size={11} />
            </Link>
          </div>
          {loading ? (
            <div className="space-y-3">{[1,2,3].map((i) => <div key={i} className="h-20 rounded-2xl bg-forest-100 dark:bg-forest-800 animate-pulse" />)}</div>
          ) : stipendBursaries.length === 0 ? (
            <div className="rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 p-6 text-center">
              <p className="text-sm text-forest-500 dark:text-forest-400">No bursaries currently listed.</p>
              <Link to="/bursaries" className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-forest-600 hover:text-forest-900 transition">Browse all bursaries <ArrowRight size={13} /></Link>
            </div>
          ) : (
            <div className="space-y-3">
              {stipendBursaries.map((b, i) => {
                const badge = deadlineBadge(b.deadline);
                return (
                  <div key={b.id || i} className="flex gap-4 rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 p-4 transition hover:border-forest-400 hover:shadow-sm">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-forest-100 dark:bg-forest-800 text-forest-600 dark:text-forest-300 font-bold text-sm">{i + 1}</div>
                    <div className="flex-1 min-w-0">
                      {badge && <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs ${badge.classes} mb-0.5`}>⏱ {badge.label}</span>}
                      <p className="font-semibold text-forest-900 dark:text-forest-50 text-sm">{b.name}</p>
                      <p className="text-xs text-forest-500 dark:text-forest-400">{b.funder}{b.deadline ? ` · Closes ${b.deadline}` : ""}</p>
                      {b.value && <p className="text-xs font-medium text-gold-600 dark:text-gold-400 mt-0.5">{b.value}</p>}
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
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">Tuition-only vs full bursaries — what's the difference?</h2>
            <p>A tuition-only bursary covers your university fees and nothing else. You still need to find money for accommodation, food, transport, textbooks, and daily expenses. For students from lower-income households, this gap can be significant enough to make studying impractical even with tuition covered.</p>
            <p className="mt-3">A full bursary — sometimes called a comprehensive bursary — covers tuition plus some or all of: accommodation, meals, books, transport, and a monthly personal allowance or stipend. These are the most sought-after bursaries because they allow students to focus entirely on their studies without financial pressure.</p>

            <div className="mt-5 rounded-2xl border border-forest-200 dark:border-forest-700 overflow-hidden">
              <div className="grid grid-cols-3 bg-forest-800 dark:bg-forest-900 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-forest-200">
                <span>Bursary type</span>
                <span>What's covered</span>
                <span>Who offers it</span>
              </div>
              <div className="divide-y divide-forest-100 dark:divide-forest-800 bg-white dark:bg-forest-900">
                {[
                  { type: "Tuition only",    covered: "Fees only",                                             who: "Some NGOs, university bursaries" },
                  { type: "Partial",         covered: "Tuition + accommodation or meals",                     who: "Some government departments" },
                  { type: "Comprehensive",   covered: "Tuition + accommodation + meals + stipend",            who: "NSFAS, major corporates, some NGOs" },
                  { type: "Full package",    covered: "All of the above + books, transport, and extras",      who: "Top corporate bursaries (Eskom, Sasol)" },
                ].map((row) => (
                  <div key={row.type} className="grid grid-cols-3 gap-3 px-4 py-3 text-sm">
                    <p className="font-medium text-forest-800 dark:text-forest-200">{row.type}</p>
                    <p className="text-forest-600 dark:text-forest-400">{row.covered}</p>
                    <p className="text-forest-600 dark:text-forest-400">{row.who}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">Which bursaries typically include a stipend?</h2>
            <div className="space-y-4">
              {[
                { category: "Major corporate bursaries", detail: "Eskom, Sasol, Anglo American, Transnet, MTN, and the major banks all offer comprehensive bursaries that include monthly stipends. The amount varies — R2,500 to R6,000 per month is typical, though some top-tier programmes pay more. These are also among the most competitive bursaries." },
                { category: "NSFAS", detail: "NSFAS includes a personal care allowance and transport allowance in addition to tuition and accommodation. The exact amounts are set annually and disbursed monthly. NSFAS allowances are lower than most corporate bursaries but are accessible to students who don't qualify on merit alone." },
                { category: "NGO bursaries", detail: "Some NGO bursaries include a stipend — the Allan Gray Orbis Foundation Fellowship and the Mastercard Foundation Scholars Programme are examples. These are needs-informed and tend to be generous. However, not all NGO bursaries include living costs — check each one specifically." },
                { category: "Government department bursaries", detail: "Government bursaries vary significantly. Some provincial Department of Health bursaries include accommodation and a small monthly allowance. Others cover tuition only. The bursary agreement document will specify exactly what is included." },
              ].map((item) => (
                <div key={item.category} className="rounded-2xl border border-forest-100 dark:border-forest-800 bg-white dark:bg-forest-900 p-5">
                  <p className="font-semibold text-forest-900 dark:text-forest-50 mb-1">{item.category}</p>
                  <p>{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">What to expect in stipend amounts</h2>
            <div className="rounded-2xl border border-forest-200 dark:border-forest-700 overflow-hidden">
              <div className="grid grid-cols-3 bg-forest-50 dark:bg-forest-800 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-forest-500 dark:text-forest-400">
                <span>Funder type</span>
                <span>Typical monthly stipend</span>
                <span>Notes</span>
              </div>
              <div className="divide-y divide-forest-100 dark:divide-forest-800 bg-white dark:bg-forest-900">
                {[
                  { type: "Top corporate (Sasol, Eskom)", amount: "R3,000 – R6,000/month", note: "Plus accommodation and meals" },
                  { type: "Major banks",                  amount: "R2,500 – R4,000/month", note: "Varies by institution and year" },
                  { type: "NSFAS",                        amount: "R1,265 – R2,900/month", note: "Based on institution and allowance type" },
                  { type: "NGO bursaries",                amount: "R2,000 – R5,000/month", note: "Varies significantly by programme" },
                  { type: "Government departments",       amount: "R1,000 – R2,500/month", note: "Not all government bursaries include stipend" },
                ].map((row) => (
                  <div key={row.type} className="grid grid-cols-3 gap-3 px-4 py-3 text-sm">
                    <p className="font-medium text-forest-800 dark:text-forest-200">{row.type}</p>
                    <p className="font-semibold text-gold-600 dark:text-gold-400">{row.amount}</p>
                    <p className="text-forest-500 dark:text-forest-400 text-xs">{row.note}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-3 text-xs text-forest-400 dark:text-forest-500">Amounts are estimates based on publicly available information and may vary. Always verify the exact amount in your bursary agreement.</p>
          </section>

          <div className="flex gap-3 rounded-2xl border border-gold-200 dark:border-gold-900/40 bg-gold-50 dark:bg-gold-900/10 p-5">
            <AlertCircle size={18} className="text-gold-600 dark:text-gold-400 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold text-forest-900 dark:text-forest-50 mb-1">Always read the bursary agreement</p>
              <p>The stipend amount and payment schedule must be specified in your bursary agreement. Never assume a stipend is included — confirm it in writing before accepting. Some bursaries change their stipend terms year to year.</p>
            </div>
          </div>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">How to find bursaries that include a stipend</h2>
            <p>When evaluating a bursary, look for these phrases in the description:</p>
            <ul className="mt-3 space-y-2">
              {[
                '"Full cost of study" — almost always includes a stipend',
                '"Comprehensive bursary" — covers tuition, accommodation, and living costs',
                '"Monthly allowance" or "living allowance" — explicit mention of cash payments',
                '"Stipend" — direct language for monthly cash payments to the student',
                '"Books and incidentals" — often accompanies a more comprehensive package',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-forest-500 dark:bg-forest-400" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4">If the bursary description only mentions "tuition fees" — it's tuition only. Call or email the funder to confirm before investing time in a full application if living costs are critical for you.</p>
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
