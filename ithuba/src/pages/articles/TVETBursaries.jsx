import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, AlertCircle } from "lucide-react";

const OG_IMG = "https://i.postimg.cc/d3T437Xk/45C7EB18-47F5-4CD3-9509-3A1092AF188E.png";

const faqs = [
  {
    q: "Does NSFAS fund TVET college students?",
    a: "Yes — NSFAS funds students at public TVET colleges on the same basis as university students. Income eligibility applies (household income below R350,000/year). NSFAS at TVET covers registration fees, tuition, accommodation if living away from home, and a transport allowance. Apply via myNSFAS.org.za.",
  },
  {
    q: "Can I get a bursary for an N4–N6 programme?",
    a: "Yes. NSFAS funds N4–N6 programmes at public TVET colleges. Some SETA bursaries also fund N4–N6 students in their relevant sectors — for example, merSETA funds N4–N6 students in engineering trades, and CETA funds construction-related programmes.",
  },
  {
    q: "Are there bursaries for trade qualifications like plumbing or electrical?",
    a: "Yes — SETAs are the primary funders of trade and vocational qualifications. The relevant SETA for your trade will fund apprenticeships and learnerships in that sector. Contact the SETA responsible for your industry directly. merSETA covers engineering trades, EWSETA covers electrical and water, and CETA covers construction trades.",
  },
  {
    q: "Can I apply for corporate bursaries as a TVET student?",
    a: "Some corporate bursaries are available to TVET students, particularly in engineering, construction, and trades. However, most corporate bursaries specify 'university students' or require a National Qualification at NQF level 5 or higher. Check each bursary's eligibility requirements carefully before applying.",
  },
  {
    q: "What is an N+1 bursary?",
    a: "An N+1 bursary (also called a bursary with exemption) allows TVET college graduates who achieve merit results to continue directly into a university programme. Some universities and funders offer bridging bursaries for this pathway. Contact your institution's financial aid office for information specific to your programme.",
  },
];

const setas = [
  { name: "merSETA", sector: "Manufacturing, engineering, related trades", programmes: "N4–N6 engineering, apprenticeships, learnerships" },
  { name: "CETA", sector: "Construction, property", programmes: "Building trades, construction management, quantity surveying" },
  { name: "EWSETA", sector: "Energy, water", programmes: "Electrical trades, water treatment, renewable energy" },
  { name: "TETA", sector: "Transport, logistics", programmes: "Motor mechanics, aviation, logistics learnerships" },
  { name: "W&RSETA", sector: "Wholesale and retail", programmes: "Retail management, supply chain learnerships" },
  { name: "AgriSETA", sector: "Agriculture, food processing", programmes: "Agricultural programmes, food technology" },
  { name: "CATHSSETA", sector: "Tourism, hospitality, sport", programmes: "Hospitality programmes, tourism management" },
  { name: "FASSET", sector: "Financial services", programmes: "Financial accounting, tax learnerships" },
];

export default function ArticleTVETBursaries() {
  return (
    <>
      <Helmet>
        <title>Bursaries for TVET College Students in South Africa | Ithuba</title>
        <meta name="description" content="Find bursaries for TVET college students in South Africa. NSFAS, SETA funding, and corporate bursaries for N4–N6 and trade qualification students." />
        <link rel="canonical" href="https://ithubahub.co.za/articles/bursaries-for-tvet-college-students" />
        <meta property="og:title" content="Bursaries for TVET College Students in South Africa | Ithuba" />
        <meta property="og:description" content="Find bursaries for TVET college students — NSFAS, SETA funding, and corporate bursaries for N4–N6 and trade qualification students." />
        <meta property="og:url" content="https://ithubahub.co.za/articles/bursaries-for-tvet-college-students" />
        <meta property="og:image" content={OG_IMG} />
        <meta name="twitter:title" content="Bursaries for TVET College Students in South Africa | Ithuba" />
        <meta name="twitter:description" content="NSFAS, SETA funding, and corporate bursaries for TVET and trade qualification students in South Africa." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "headline": "Bursaries for TVET College Students in South Africa",
              "url": "https://ithubahub.co.za/articles/bursaries-for-tvet-college-students",
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
                { "@type": "ListItem", "position": 3, "name": "TVET Bursaries", "item": "https://ithubahub.co.za/articles/bursaries-for-tvet-college-students" },
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
          <span className="text-forest-800 dark:text-forest-200 font-medium">TVET bursaries</span>
        </nav>

        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center rounded-full bg-forest-100 dark:bg-forest-800 px-3 py-1 text-xs font-medium text-forest-600 dark:text-forest-300">Student Guide</span>
            <span className="text-xs text-forest-400 dark:text-forest-500">Updated August 2026 · 7 min read</span>
          </div>
          <h1 className="font-display text-3xl font-semibold text-forest-900 dark:text-forest-50 sm:text-4xl leading-snug">
            Bursaries for TVET college students in South Africa
          </h1>
          <p className="mt-4 text-sm leading-7 text-forest-600 dark:text-forest-400">
            TVET college students are often told that bursaries are only for university students. This is not true. NSFAS funds TVET students, SETAs fund trade and vocational qualifications, and some corporate bursaries are open to TVET students in relevant fields. This guide explains exactly what's available and how to access it.
          </p>
        </div>

        {/* Important notice */}
        <div className="mb-10 flex gap-3 rounded-2xl border border-forest-200 dark:border-forest-700 bg-forest-50 dark:bg-forest-900 p-5">
          <AlertCircle size={18} className="text-forest-500 dark:text-forest-400 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-forest-900 dark:text-forest-50 mb-1">TVET students qualify for NSFAS</p>
            <p className="text-sm leading-6 text-forest-700 dark:text-forest-300">
              Many TVET students don't know they qualify for NSFAS. If your household income is below R350,000 per year and you are enrolled at a public TVET college, apply at myNSFAS.org.za. Applications open in September each year for the following academic year.
            </p>
          </div>
        </div>

        <div className="space-y-8 text-sm leading-7 text-forest-700 dark:text-forest-300">

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">NSFAS for TVET students — what it covers</h2>
            <p>NSFAS funding for TVET students covers the following costs at public TVET colleges:</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {[
                { item: "Registration fees", detail: "Full registration fee covered" },
                { item: "Tuition fees", detail: "Full tuition covered for your programme" },
                { item: "Accommodation allowance", detail: "If you live away from home" },
                { item: "Transport allowance", detail: "For students commuting to campus" },
                { item: "Book allowance", detail: "For learning materials" },
                { item: "Personal care allowance", detail: "Monthly living allowance" },
              ].map((item) => (
                <div key={item.item} className="rounded-xl border border-forest-100 dark:border-forest-800 bg-white dark:bg-forest-900 p-3">
                  <p className="font-semibold text-forest-900 dark:text-forest-50 text-sm">{item.item}</p>
                  <p className="text-xs text-forest-500 dark:text-forest-400 mt-0.5">{item.detail}</p>
                </div>
              ))}
            </div>
            <p className="mt-4">To maintain NSFAS funding, you must pass at least 50% of your registered subjects per semester and progress through your programme. NSFAS funds the full N4–N6 cycle for engineering and business studies programmes.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">SETA funding — the biggest opportunity most TVET students miss</h2>
            <p>Sector Education and Training Authorities (SETAs) are government bodies that fund training and skills development in specific industries. Each SETA has a budget for bursaries, learnerships, and apprenticeships in its sector. For TVET students in vocational and trade programmes, SETAs are often the most direct route to funding.</p>
            <p className="mt-4 font-medium text-forest-900 dark:text-forest-50">Which SETA funds your programme:</p>
            <div className="mt-3 rounded-2xl border border-forest-200 dark:border-forest-700 overflow-hidden">
              <div className="grid grid-cols-3 bg-forest-800 dark:bg-forest-900 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-forest-200">
                <span>SETA</span>
                <span>Sector</span>
                <span>Programmes funded</span>
              </div>
              <div className="divide-y divide-forest-100 dark:divide-forest-800 bg-white dark:bg-forest-900">
                {setas.map((s) => (
                  <div key={s.name} className="grid grid-cols-3 gap-2 px-4 py-3 text-xs">
                    <p className="font-semibold text-forest-800 dark:text-forest-200">{s.name}</p>
                    <p className="text-forest-600 dark:text-forest-400">{s.sector}</p>
                    <p className="text-forest-600 dark:text-forest-400">{s.programmes}</p>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-3 text-xs text-forest-400 dark:text-forest-500">Contact the relevant SETA directly through their website to enquire about current bursary, learnership, and apprenticeship opportunities.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">Learnerships vs bursaries — what's the difference?</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 p-5">
                <p className="font-semibold text-forest-900 dark:text-forest-50 mb-2">Bursary</p>
                <ul className="space-y-1.5 text-xs">
                  {["Covers cost of your existing studies", "You remain a full-time student", "May have a work-back obligation", "Applied for before or during study"].map(i => (
                    <li key={i} className="flex items-start gap-2"><CheckCircle size={11} className="text-forest-500 shrink-0 mt-0.5" />{i}</li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 p-5">
                <p className="font-semibold text-forest-900 dark:text-forest-50 mb-2">Learnership</p>
                <ul className="space-y-1.5 text-xs">
                  {["Combines work experience with learning", "You receive a monthly stipend while learning", "Leads to a formal NQF qualification", "Applied for through an employer or SETA"].map(i => (
                    <li key={i} className="flex items-start gap-2"><CheckCircle size={11} className="text-forest-500 shrink-0 mt-0.5" />{i}</li>
                  ))}
                </ul>
              </div>
            </div>
            <p className="mt-4">Both are legitimate pathways. Learnerships are particularly valuable for TVET students because they combine income (stipend) with qualification — you earn while you learn.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">How to access SETA funding</h2>
            <div className="space-y-3">
              {[
                { step: "01", title: "Identify your relevant SETA", body: "Your field of study determines your SETA. An engineering student at TVET falls under merSETA. A hospitality student falls under CATHSSETA. Use the table above to identify yours." },
                { step: "02", title: "Visit the SETA website directly", body: "Each SETA publishes its bursary and learnership opportunities on its own website. There is no central portal — you need to check the relevant SETA's site. Opportunities are typically advertised in the first quarter of each year." },
                { step: "03", title: "Contact your TVET college's financial aid office", body: "Your college's financial aid staff often know which SETAs are currently funding students in your field. They may also have relationships with local employers offering learnerships. This is often the fastest route to SETA-linked funding." },
                { step: "04", title: "Apply to NSFAS in parallel", body: "SETA and NSFAS funding are not mutually exclusive. Apply for NSFAS regardless of whether you're pursuing SETA funding — if you qualify financially, you should have both in place." },
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
