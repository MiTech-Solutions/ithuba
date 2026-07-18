import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, AlertCircle } from "lucide-react";

const documentSections = [
  {
    title: "Identity documents",
    color: "border-forest-200 dark:border-forest-700 bg-forest-50 dark:bg-forest-900",
    labelColor: "text-forest-600 dark:text-forest-400",
    docs: [
      {
        name: "Certified copy of your South African ID",
        detail: "Must be a green barcoded ID book or smart ID card. Foreign nationals may need a passport and study permit depending on the bursary. The copy must be certified — not just photocopied.",
      },
      {
        name: "Certified copy of your parent or guardian's ID",
        detail: "Required for income-based bursaries like NSFAS. Both parents' IDs may be required if both are employed.",
      },
    ],
  },
  {
    title: "Academic documents",
    color: "border-blue-200 dark:border-blue-900/40 bg-blue-50 dark:bg-blue-900/10",
    labelColor: "text-blue-600 dark:text-blue-400",
    docs: [
      {
        name: "Certified copy of your matric certificate",
        detail: "Required for first-year applicants. If your results are not yet available, a certified copy of your matric statement of results is accepted by most funders.",
      },
      {
        name: "Most recent academic transcript or results",
        detail: "For current university students, a stamped official transcript from your institution showing all completed subjects and marks. Some funders accept an unofficial printout if stamped by the registrar.",
      },
      {
        name: "Proof of university acceptance or registration",
        detail: "A letter of acceptance from the institution if you are a first-year applicant, or a proof of registration if you are already enrolled. Must show your student number, programme, and year of study.",
      },
    ],
  },
  {
    title: "Financial documents",
    color: "border-gold-200 dark:border-gold-900/40 bg-gold-50 dark:bg-gold-900/10",
    labelColor: "text-gold-600 dark:text-gold-400",
    docs: [
      {
        name: "Proof of household income",
        detail: "For employed parents: recent payslips (last 1–3 months) from their employer. For self-employed parents: a letter from an accountant or bank statements. For unemployed or SASSA recipients: a SASSA letter or an affidavit from a commissioner of oaths confirming no income.",
      },
      {
        name: "Bank statement (last 3 months)",
        detail: "A stamped bank statement from a South African bank. Some funders require this to be stamped by the bank directly, not a self-printed statement.",
      },
      {
        name: "Affidavit of financial need",
        detail: "Required by some funders in addition to or instead of income documents. This is a sworn statement made before a commissioner of oaths — available free at most police stations.",
      },
    ],
  },
  {
    title: "Personal & supporting documents",
    color: "border-forest-200 dark:border-forest-700 bg-forest-50 dark:bg-forest-900",
    labelColor: "text-forest-600 dark:text-forest-400",
    docs: [
      {
        name: "Motivation letter",
        detail: "One page explaining who you are, why you chose your field of study, your career goals, and why you are applying for this specific bursary. Tailor it to each funder — generic letters are easy to spot and rarely succeed.",
      },
      {
        name: "Curriculum Vitae (CV)",
        detail: "Keep it to two pages maximum. Include your education history, any work experience or volunteer work, extracurricular activities, and achievements. For first-year students with no work experience, leadership roles and community involvement are valuable.",
      },
      {
        name: "Two reference letters",
        detail: "Academic references from a teacher or lecturer are preferred. Character references from a community leader, religious leader, or employer are also accepted by most funders. References must include the referee's contact details and be on official letterhead where possible.",
      },
      {
        name: "Proof of residence",
        detail: "A recent utility bill, bank statement, or municipal account showing your home address. Some funders require a certified copy. A signed affidavit is accepted if you do not have a formal address.",
      },
    ],
  },
];

export default function GuideDocuments() {
  return (
    <>
      <Helmet>
        <title>Documents You Need Before Applying for a Bursary | Ithuba Guide</title>
        <meta
          name="description"
          content="Full checklist of documents required for South African bursary applications — ID, academic transcripts, proof of income, motivation letters, references, and more."
        />
        <link rel="canonical" href="https://ithubahub.co.za/guides/documents-you-need-before-applying" />
        <meta property="og:title" content="Documents You Need Before Applying for a Bursary | Ithuba" />
        <meta property="og:description" content="Full checklist of every document required for South African bursary applications — certified IDs, transcripts, proof of income, motivation letters, and references." />
        <meta property="og:url" content="https://ithubahub.co.za/guides/documents-you-need-before-applying" />
        <meta property="og:image" content="https://i.postimg.cc/d3T437Xk/45C7EB18-47F5-4CD3-9509-3A1092AF188E.png" />
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://ithubahub.co.za"},{"@type":"ListItem","position":2,"name":"Guides","item":"https://ithubahub.co.za/guides"},{"@type":"ListItem","position":3,"name":"Documents checklist","item":"https://ithubahub.co.za/guides/documents-you-need-before-applying"}]})}</script>
      </Helmet>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-forest-500 dark:text-forest-400">
          <Link to="/" className="hover:text-forest-800 dark:hover:text-white transition">Home</Link>
          <span>/</span>
          <Link to="/guides" className="hover:text-forest-800 dark:hover:text-white transition">Guides</Link>
          <span>/</span>
          <span className="text-forest-800 dark:text-forest-200 font-medium">Documents checklist</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-forest-500 dark:text-forest-400">Student guide</p>
          <h1 className="mt-2 font-display text-3xl font-semibold text-forest-900 dark:text-forest-50 sm:text-4xl leading-snug">
            Documents you need before applying for a bursary
          </h1>
          <p className="mt-4 text-sm leading-7 text-forest-600 dark:text-forest-400">
            Document delays are the most common reason students miss bursary deadlines. Start collecting and certifying everything at least two weeks before you plan to submit. This guide covers every document category you are likely to need.
          </p>
        </div>

        {/* Important notice */}
        <div className="mb-8 flex gap-3 rounded-2xl border border-gold-200 dark:border-gold-900/40 bg-gold-50 dark:bg-gold-900/10 p-4">
          <AlertCircle size={18} className="text-gold-600 dark:text-gold-400 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-forest-900 dark:text-forest-50 mb-1">About certified copies</p>
            <p className="text-sm leading-6 text-forest-600 dark:text-forest-400">
              Most bursaries require <strong className="text-forest-800 dark:text-forest-200">certified copies</strong> — not originals and not plain photocopies. A certified copy is stamped and signed by a commissioner of oaths confirming it matches the original. You can get copies certified for free at most South African Police Service (SAPS) stations.
            </p>
          </div>
        </div>

        {/* Document sections */}
        <div className="space-y-8">
          {documentSections.map((section) => (
            <div key={section.title} className={`rounded-2xl border p-6 ${section.color}`}>
              <p className={`text-xs font-semibold uppercase tracking-wider mb-4 ${section.labelColor}`}>
                {section.title}
              </p>
              <div className="space-y-5">
                {section.docs.map((doc) => (
                  <div key={doc.name}>
                    <p className="text-sm font-semibold text-forest-900 dark:text-forest-50 mb-1">
                      {doc.name}
                    </p>
                    <p className="text-sm leading-6 text-forest-600 dark:text-forest-400">
                      {doc.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Quick tips */}
        <div className="mt-10 rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 p-6">
          <h2 className="font-display text-lg font-semibold text-forest-900 dark:text-forest-50 mb-4">
            Practical tips
          </h2>
          <ul className="space-y-3">
            {[
              "Make at least five certified copies of each document — you will apply to multiple bursaries and postal applications require physical copies.",
              "Keep a dedicated folder (physical and digital) for all your bursary documents so you can apply quickly when a new opportunity opens.",
              "Scan everything. A clear PDF scan of each certified document means you can apply to online bursaries instantly without re-scanning.",
              "Check the certification date — some funders require copies certified within the last three to six months.",
              "If a parent is deceased, a death certificate and proof of any survivor benefits (SASSA, pension) may be required.",
            ].map((tip, i) => (
              <li key={i} className="flex items-start gap-3 text-sm leading-6 text-forest-600 dark:text-forest-400">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-forest-500 dark:bg-forest-400" />
                {tip}
              </li>
            ))}
          </ul>
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link
            to="/bursaries"
            className="inline-flex items-center gap-2 rounded-xl bg-forest-600 dark:bg-forest-500 px-5 py-3 text-sm font-medium text-white hover:bg-forest-700 transition"
          >
            Browse bursaries <ArrowRight size={15} />
          </Link>
          <Link
            to="/guides/how-to-apply-for-a-bursary"
            className="inline-flex items-center gap-2 rounded-xl border border-forest-300 dark:border-forest-700 px-5 py-3 text-sm font-medium text-forest-700 dark:text-forest-300 hover:bg-forest-100 dark:hover:bg-forest-800 transition"
          >
            How to apply guide <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </>
  );
}
