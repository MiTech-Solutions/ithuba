import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, ExternalLink, CheckCircle } from "lucide-react";
import { useBursaries } from "../../hooks/useBursaries";
import { slugify } from "../../utils/slug";
import { deadlineBadge, daysUntil } from "../../utils/deadline";

const OG_IMG = "https://i.postimg.cc/d3T437Xk/45C7EB18-47F5-4CD3-9509-3A1092AF188E.png";

export default function ArticleNursingMedicineBursaries() {
  const { bursaries, loading } = useBursaries();

  const medBursaries = bursaries
    .filter((b) => {
      const field = b.field_of_study?.toLowerCase() || "";
      return field.includes("medicine") || field.includes("health") || field.includes("nursing") || field.includes("medical") || field === "all fields";
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
        <title>Best Bursaries for Nursing & Medicine Students in South Africa | Ithuba</title>
        <meta name="description" content="Find the best bursaries for nursing, medicine, and healthcare students in South Africa. Department of Health, hospital groups, and NGO funding with application links." />
        <link rel="canonical" href="https://ithubahub.co.za/articles/best-bursaries-for-nursing-and-medicine-students" />
        <meta property="og:title" content="Best Bursaries for Nursing & Medicine Students in South Africa | Ithuba" />
        <meta property="og:description" content="The best South African bursaries for nursing, medicine and healthcare students — with deadlines, requirements and application links." />
        <meta property="og:url" content="https://ithubahub.co.za/articles/best-bursaries-for-nursing-and-medicine-students" />
        <meta property="og:image" content={OG_IMG} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={OG_IMG} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "headline": "Best Bursaries for Nursing and Medicine Students in South Africa",
              "description": "A guide to the best South African bursaries for nursing and medicine students.",
              "url": "https://ithubahub.co.za/articles/best-bursaries-for-nursing-and-medicine-students",
              "publisher": { "@type": "Organization", "name": "Ithuba", "url": "https://ithubahub.co.za" },
              "datePublished": "2026-07-20",
              "dateModified": "2026-07-20",
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ithubahub.co.za" },
                { "@type": "ListItem", "position": 2, "name": "Articles", "item": "https://ithubahub.co.za/articles" },
                { "@type": "ListItem", "position": 3, "name": "Nursing & Medicine Bursaries", "item": "https://ithubahub.co.za/articles/best-bursaries-for-nursing-and-medicine-students" },
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
          <span className="text-forest-800 dark:text-forest-200 font-medium">Nursing & medicine bursaries</span>
        </nav>

        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center rounded-full bg-forest-100 dark:bg-forest-800 px-3 py-1 text-xs font-medium text-forest-600 dark:text-forest-300">Field Guide</span>
            <span className="text-xs text-forest-400 dark:text-forest-500">Updated July 2026 · 7 min read</span>
          </div>
          <h1 className="font-display text-3xl font-semibold text-forest-900 dark:text-forest-50 sm:text-4xl leading-snug">
            Best bursaries for nursing and medicine students in South Africa
          </h1>
          <p className="mt-4 text-sm leading-7 text-forest-600 dark:text-forest-400">
            South Africa has a critical shortage of healthcare workers. The country needs doctors, nurses, pharmacists, physiotherapists, and allied health professionals across both the public and private sectors. This shortage translates directly into bursary opportunities — the government, hospital groups, and NGOs all fund students in the health sciences.
          </p>
        </div>

        {/* Live bursaries */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50">Health sciences bursaries in our directory</h2>
            <Link to="/bursaries/field/medicine" className="text-xs font-medium text-forest-600 dark:text-forest-400 hover:text-forest-900 dark:hover:text-white transition flex items-center gap-1">
              View all <ArrowRight size={11} />
            </Link>
          </div>
          {loading ? (
            <div className="space-y-3">{[1,2,3].map((i) => <div key={i} className="h-20 rounded-2xl bg-forest-100 dark:bg-forest-800 animate-pulse" />)}</div>
          ) : medBursaries.length === 0 ? (
            <div className="rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 p-6 text-center">
              <p className="text-sm text-forest-500 dark:text-forest-400">No health sciences bursaries currently listed.</p>
              <Link to="/bursaries" className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-forest-600 hover:text-forest-900 transition">Browse all bursaries <ArrowRight size={13} /></Link>
            </div>
          ) : (
            <div className="space-y-3">
              {medBursaries.map((b, i) => {
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
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">Why healthcare is heavily funded</h2>
            <p>South Africa has approximately 9 doctors per 100,000 people — far below the WHO recommended ratio of 23 per 100,000. The public healthcare system is severely understaffed, and the Department of Health consistently lists nurses, doctors, pharmacists, and allied health professionals as critical skills.</p>
            <p className="mt-3">For students, this translates into genuine urgency from funders. The Department of Health funds students across all nine provinces. Hospital groups like Netcare and Mediclinic fund nursing students in exchange for employment. NGOs fund students in underserved communities. The funding landscape is broad and genuine.</p>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">Key funders to know</h2>
            <div className="space-y-4">
              {[
                { funder: "Department of Health (National & Provincial)", detail: "The largest funder of healthcare students in South Africa. Each province has its own bursary programme with slightly different criteria and deadlines. Priority is given to students who will work in public healthcare after graduating. Applications typically open in August and close in November." },
                { funder: "Netcare Nursing Education", detail: "Netcare funds nursing students through its nursing college programme. Students study and do clinical training at Netcare facilities and are typically employed by Netcare after qualifying. A clear path from funding to employment." },
                { funder: "Mediclinic Southern Africa", detail: "Mediclinic offers bursaries for nursing and allied health students, particularly in disciplines where they have staff shortages. Strong academic results and a commitment to the private healthcare sector are important." },
                { funder: "NSFAS", detail: "NSFAS funds medical and nursing students at public universities and nursing colleges. The income threshold applies, but medical degrees are eligible. Note that medical degrees are long — NSFAS funding may need to cover 6 years for MBChB." },
                { funder: "South African Medical Research Council (SAMRC)", detail: "Funds postgraduate research in health sciences. Not for undergraduate students, but worth knowing for those planning research careers in medicine or public health." },
              ].map((item) => (
                <div key={item.funder} className="rounded-2xl border border-forest-100 dark:border-forest-800 bg-white dark:bg-forest-900 p-5">
                  <p className="font-semibold text-forest-900 dark:text-forest-50 mb-1">{item.funder}</p>
                  <p>{item.detail}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">What healthcare bursaries typically require</h2>
            <ul className="space-y-2.5">
              {[
                "South African citizenship or permanent residence",
                "Strong matric results — especially in Life Sciences, Mathematics or Mathematical Literacy",
                "Acceptance at a recognised medical or nursing programme",
                "For government bursaries: demonstrated commitment to working in the public sector",
                "Community service commitment for some provincial bursaries",
                "Clear motivation connecting your background to healthcare and your intended community impact",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckCircle size={14} className="text-forest-500 dark:text-forest-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">Healthcare disciplines that attract bursaries</h2>
            <div className="grid gap-3 sm:grid-cols-2">
              {[
                { discipline: "Medicine (MBChB)",         demand: "Highest demand — critical shortage nationwide" },
                { discipline: "Nursing",                  demand: "Very high demand — public and private sector" },
                { discipline: "Pharmacy",                 demand: "High demand — urban and rural shortages" },
                { discipline: "Physiotherapy",            demand: "Growing demand — rehabilitation sector" },
                { discipline: "Occupational therapy",     demand: "Consistent demand — public health focus" },
                { discipline: "Dietetics",                demand: "Growing demand — public health priority" },
                { discipline: "Radiography",              demand: "Steady demand — hospital-based" },
                { discipline: "Emergency medical care",   demand: "High demand — EMS sector shortage" },
              ].map((item) => (
                <div key={item.discipline} className="rounded-xl border border-forest-100 dark:border-forest-800 bg-forest-50 dark:bg-forest-900 p-3">
                  <p className="font-semibold text-forest-900 dark:text-forest-50 text-sm">{item.discipline}</p>
                  <p className="text-xs text-forest-500 dark:text-forest-400 mt-0.5">{item.demand}</p>
                </div>
              ))}
            </div>
          </section>

          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">Tips for healthcare bursary applications</h2>
            <div className="space-y-4">
              {[
                { title: "Emphasise community motivation", body: "Healthcare bursaries — especially government ones — respond strongly to students who can articulate why they want to serve South African communities. Be specific about which community you come from and how your experience shaped your decision to pursue healthcare." },
                { title: "Apply to provincial and national programmes separately", body: "The national Department of Health and each provincial department run separate bursary programmes. Apply to both the national programme and your home province's programme. They have different deadlines and different pools of funding." },
                { title: "Don't overlook nursing colleges", body: "Hospital group nursing colleges like those run by Netcare and Mediclinic are often overlooked by students who only consider university programmes. These routes lead to registered nursing qualifications, employment, and a structured career path." },
                { title: "Long degrees need long-term planning", body: "A medical degree is 6 years. An NSFAS bursary or corporate bursary that only covers 4 years leaves a funding gap in years 5 and 6. Plan for this — apply for continuation funding, bursaries specific to final years, or part-time work as a community healthcare worker." },
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
          <Link to="/bursaries/field/medicine" className="inline-flex items-center gap-2 rounded-xl bg-forest-600 dark:bg-forest-500 px-5 py-3 text-sm font-medium text-white hover:bg-forest-700 transition">
            All health sciences bursaries <ArrowRight size={15} />
          </Link>
          <Link to="/guides/how-to-apply-for-a-bursary" className="inline-flex items-center gap-2 rounded-xl border border-forest-300 dark:border-forest-700 px-5 py-3 text-sm font-medium text-forest-700 dark:text-forest-300 hover:bg-forest-100 dark:hover:bg-forest-800 transition">
            How to apply guide <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </>
  );
}
