import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, AlertCircle } from "lucide-react";

const OG_IMG = "https://i.postimg.cc/d3T437Xk/45C7EB18-47F5-4CD3-9509-3A1092AF188E.png";

const faqs = [
  {
    q: "Does NSFAS fund postgraduate students?",
    a: "No — NSFAS funds undergraduate students only. Once you have completed your first degree, you need to find alternative funding for postgraduate study. The NRF, your university's postgraduate bursary office, and professional body bursaries are the main sources.",
  },
  {
    q: "Can I do a postgraduate degree part-time and work to fund it myself?",
    a: "Yes — many postgraduate students work full-time and study part-time, particularly for honours and master's by coursework. This is a legitimate and common approach. Some employers also fund postgraduate study as part of staff development — ask your employer whether they have a study assistance policy.",
  },
  {
    q: "Which universities offer the most postgraduate bursaries?",
    a: "Wits, UCT, Stellenbosch, UKZN, and UP tend to have the most developed postgraduate bursary infrastructure, reflecting their research output and NRF ratings. However, all public universities offer some postgraduate funding — contact the postgraduate office at your specific institution.",
  },
  {
    q: "Are there bursaries specifically for honours students?",
    a: "Yes — the NRF Honour's Scholarship, many university-specific honours bursaries, and some professional body bursaries target honours students specifically. Honours bursaries tend to be smaller than master's or PhD bursaries but are more widely available.",
  },
  {
    q: "What is an NRF rating and does it affect bursary access?",
    a: "An NRF rating is a peer-reviewed assessment of a South African researcher's international standing. It applies to your supervisor, not to you as a student. However, being supervised by a highly rated NRF researcher often means access to better-funded research projects and more available bursary opportunities within that research group.",
  },
];

export default function ArticlePostgradBursaries() {
  return (
    <>
      <Helmet>
        <title>Bursaries for Postgraduate Students in South Africa | Ithuba</title>
        <meta name="description" content="Find bursaries for postgraduate students in South Africa — honours, master's and PhD funding from the NRF, universities, and professional bodies." />
        <link rel="canonical" href="https://ithubahub.co.za/articles/bursaries-for-postgraduate-students" />
        <meta property="og:title" content="Bursaries for Postgraduate Students in South Africa | Ithuba" />
        <meta property="og:description" content="Honours, master's, and PhD bursaries in South Africa — NRF, university, professional body, and corporate postgraduate funding." />
        <meta property="og:url" content="https://ithubahub.co.za/articles/bursaries-for-postgraduate-students" />
        <meta property="og:image" content={OG_IMG} />
        <meta name="twitter:title" content="Bursaries for Postgraduate Students in South Africa | Ithuba" />
        <meta name="twitter:description" content="Honours, master's, and PhD bursaries in South Africa — NRF, university, and professional body funding." />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "headline": "Bursaries for Postgraduate Students in South Africa",
              "url": "https://ithubahub.co.za/articles/bursaries-for-postgraduate-students",
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
                { "@type": "ListItem", "position": 3, "name": "Postgraduate Bursaries", "item": "https://ithubahub.co.za/articles/bursaries-for-postgraduate-students" },
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
          <span className="text-forest-800 dark:text-forest-200 font-medium">Postgraduate bursaries</span>
        </nav>

        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center rounded-full bg-forest-100 dark:bg-forest-800 px-3 py-1 text-xs font-medium text-forest-600 dark:text-forest-300">Student Guide</span>
            <span className="text-xs text-forest-400 dark:text-forest-500">Updated August 2026 · 8 min read</span>
          </div>
          <h1 className="font-display text-3xl font-semibold text-forest-900 dark:text-forest-50 sm:text-4xl leading-snug">
            Bursaries for postgraduate students in South Africa
          </h1>
          <p className="mt-4 text-sm leading-7 text-forest-600 dark:text-forest-400">
            Postgraduate funding in South Africa works very differently from undergraduate bursaries. NSFAS stops at your first degree. The sources of funding shift to the NRF, your university, professional bodies, and in some fields, corporate funders. This guide explains the full landscape.
          </p>
        </div>

        {/* NSFAS warning */}
        <div className="mb-10 flex gap-3 rounded-2xl border border-gold-200 dark:border-gold-900/40 bg-gold-50 dark:bg-gold-900/10 p-5">
          <AlertCircle size={18} className="text-gold-600 dark:text-gold-400 shrink-0 mt-0.5" />
          <div>
            <p className="font-semibold text-forest-900 dark:text-forest-50 mb-1">NSFAS does not fund postgraduate study</p>
            <p className="text-sm leading-6 text-forest-700 dark:text-forest-300">
              NSFAS funding ends when you complete your undergraduate degree. For honours, master's, or doctoral study you need separate funding. Plan for this before your final undergraduate year.
            </p>
          </div>
        </div>

        <div className="space-y-8 text-sm leading-7 text-forest-700 dark:text-forest-300">

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">The National Research Foundation (NRF) — your most important source</h2>
            <p>The NRF is South Africa's primary funder of postgraduate research. It offers bursaries at honours, master's, doctoral, and postdoctoral levels across science, engineering, humanities, and social sciences. NRF bursaries are competitive and merit-based — your undergraduate academic record is the primary selection criterion.</p>
            <div className="mt-4 space-y-3">
              {[
                { level: "Honours", amount: "R40,000 – R60,000 per year", notes: "Competitive. Apply through your university postgraduate office." },
                { level: "Master's", amount: "R60,000 – R120,000 per year", notes: "Based on research topic alignment with NRF priority areas." },
                { level: "PhD", amount: "R80,000 – R200,000 per year", notes: "Higher amounts for strategic fields. May include travel funding." },
                { level: "Postdoctoral", amount: "R200,000 – R300,000 per year", notes: "For researchers who have completed their PhD." },
              ].map((item) => (
                <div key={item.level} className="grid grid-cols-3 gap-3 rounded-xl border border-forest-100 dark:border-forest-800 bg-white dark:bg-forest-900 px-4 py-3 text-sm">
                  <p className="font-semibold text-forest-900 dark:text-forest-50">{item.level}</p>
                  <p className="font-medium text-gold-600 dark:text-gold-400">{item.amount}</p>
                  <p className="text-forest-500 dark:text-forest-400 text-xs">{item.notes}</p>
                </div>
              ))}
            </div>
            <p className="mt-3 text-xs text-forest-400 dark:text-forest-500">Amounts are approximate and vary by field and year. Apply via nrf.ac.za — applications open annually, typically in April.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">University postgraduate bursaries</h2>
            <p>Every South African public university has a postgraduate bursary pool funded from a combination of government grants, alumni donations, and research income. These are administered through the postgraduate office or faculty and are often less competitive than NRF bursaries because fewer students apply directly to the university rather than the NRF.</p>
            <ul className="mt-3 space-y-2.5">
              {[
                "Contact your university's postgraduate office directly — don't rely on their website alone",
                "Ask your supervisor whether they have research funding that could support a bursary",
                "Check faculty-specific bursaries — many faculties have their own separate pools",
                "Apply early — university postgraduate bursaries are often awarded on a first-come basis within the budget cycle",
                "Merit scholarships from your undergraduate performance may automatically carry over — check with your institution",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 list-none">
                  <CheckCircle size={14} className="text-forest-500 dark:text-forest-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">Professional body and sector-specific postgraduate funding</h2>
            <div className="space-y-4">
              {[
                { funder: "South African Medical Research Council (SAMRC)", detail: "Funds health sciences postgraduate research — master's, PhD, and postdoctoral researchers working in public health, clinical research, and health systems. Applications through the SAMRC's research capacity development office." },
                { funder: "Water Research Commission (WRC)", detail: "Funds postgraduate research in water science, water quality, sanitation, and related engineering fields. Master's and PhD students whose research aligns with WRC priority areas can apply for project-linked bursaries." },
                { funder: "South African Institute of Chartered Accountants (SAICA)", detail: "Funds CA(SA) students through the articles process. While not a traditional postgraduate bursary, the SAICA training contract structure effectively funds postgraduate professional development for accounting graduates." },
                { funder: "Academy of Science of South Africa (ASSAf)", detail: "Recognises and occasionally funds exceptional young researchers. The ASSAf Young Scientist Awards come with associated funding and recognition." },
                { funder: "Corporate research partnerships", detail: "Companies in mining, pharmaceuticals, agriculture, and technology often co-fund postgraduate research that addresses their business challenges. Approach your supervisor about industry-linked bursaries in your field — these are often unadvertised and sourced through supervisor relationships." },
              ].map((item) => (
                <div key={item.funder} className="rounded-2xl border border-forest-100 dark:border-forest-800 bg-white dark:bg-forest-900 p-5">
                  <p className="font-semibold text-forest-900 dark:text-forest-50 mb-1">{item.funder}</p>
                  <p>{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">International postgraduate funding available to South Africans</h2>
            <div className="space-y-3">
              {[
                { name: "Mastercard Foundation Scholars Programme", detail: "Funds African students at partner universities including UCT and UKZN for master's programmes. Strong social impact focus." },
                { name: "Commonwealth Scholarship", detail: "Funds South African students for master's and PhD study at Commonwealth universities, primarily in the UK." },
                { name: "Fulbright Programme", detail: "Funds South African students for graduate study in the United States. Competitive — strong academic record and leadership profile required." },
                { name: "DAAD (German Academic Exchange Service)", detail: "Funds South African students for study and research in Germany. Programmes available at master's, PhD, and postdoctoral level." },
                { name: "Chevening Scholarship", detail: "UK government scholarship for master's study in the United Kingdom. For students with demonstrated leadership potential." },
              ].map((item) => (
                <div key={item.name} className="flex gap-3 rounded-2xl border border-forest-100 dark:border-forest-800 bg-white dark:bg-forest-900 p-4">
                  <div>
                    <p className="font-semibold text-forest-900 dark:text-forest-50 mb-1">{item.name}</p>
                    <p className="text-xs text-forest-600 dark:text-forest-400">{item.detail}</p>
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
          <Link to="/scholarships" className="inline-flex items-center gap-2 rounded-xl bg-forest-600 dark:bg-forest-500 px-5 py-3 text-sm font-medium text-white hover:bg-forest-700 transition">
            Browse scholarships <ArrowRight size={15} />
          </Link>
          <Link to="/bursaries" className="inline-flex items-center gap-2 rounded-xl border border-forest-300 dark:border-forest-700 px-5 py-3 text-sm font-medium text-forest-700 dark:text-forest-300 hover:bg-forest-100 dark:hover:bg-forest-800 transition">
            Browse bursaries <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </>
  );
}
