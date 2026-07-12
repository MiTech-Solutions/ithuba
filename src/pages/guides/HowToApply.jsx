import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Check your eligibility first",
    body: "Before spending time on an application, confirm you meet the core requirements — citizenship, academic results, field of study, and household income limits where applicable. Most bursaries are open to South African citizens or permanent residents only. Some require a minimum average (often 60–70%), and income-based bursaries like NSFAS have a household income cap of R350,000 per year.",
  },
  {
    number: "02",
    title: "Gather your documents early",
    body: "The biggest reason students miss bursary deadlines is document delays. Start collecting certified copies of your ID, matric certificate or latest academic results, proof of registration or acceptance from a university, proof of household income (payslips or SASSA letters), and a bank statement. Certified copies must be certified by a commissioner of oaths — most police stations offer this for free.",
  },
  {
    number: "03",
    title: "Write a strong motivation letter",
    body: "Most bursary applications include a personal motivation or essay. This is where students lose or win the application. Be specific — mention your field of study, your career goals, and why this bursary specifically. Avoid generic statements like 'I am hardworking and dedicated.' Instead, connect your background to your goals and explain what you will contribute after graduating. Keep it to one page unless told otherwise.",
  },
  {
    number: "04",
    title: "Apply to multiple bursaries simultaneously",
    body: "There is no rule against applying for more than one bursary at a time. In fact, it is encouraged. Most corporate bursaries are highly competitive and acceptance rates are low. Cast a wide net — apply to government bursaries, corporate programmes, and NGO funders at the same time. Keep a spreadsheet tracking each application, the deadline, documents required, and its status.",
  },
  {
    number: "05",
    title: "Submit before the deadline — not on it",
    body: "Online systems often crash on deadline day due to volume. Submit at least three to five days before the closing date. If the application is postal, allow two weeks for delivery. Late applications are almost never accepted regardless of the reason.",
  },
  {
    number: "06",
    title: "Follow up professionally",
    body: "Two to three weeks after submitting, it is acceptable to send a brief, professional email confirming receipt of your application and reiterating your interest. Keep it short. This is also useful if you have not received an acknowledgement of receipt, which many funders send automatically.",
  },
  {
    number: "07",
    title: "Prepare for an interview",
    body: "Many bursaries — especially corporate ones — include an interview stage. This is not just an academic assessment. Funders want to see that you understand their industry, have clear career goals, and will represent them well. Research the company or organisation before the interview. Dress professionally. Prepare to answer why you chose your field of study and where you see yourself in five years.",
  },
];

export default function GuideHowToApply() {
  return (
    <>
      <Helmet>
        <title>How to Apply for a Bursary in South Africa | Ithuba Guide</title>
        <meta
          name="description"
          content="Step-by-step guide to applying for a bursary in South Africa. From checking eligibility to preparing documents, motivation letters, and interviews. Free advice from Ithuba."
        />
        <link rel="canonical" href="https://ithubahub.co.za/guides/how-to-apply-for-a-bursary" />
        <meta property="og:title" content="How to Apply for a Bursary in South Africa | Ithuba" />
        <meta property="og:description" content="Step-by-step guide to applying for a South African bursary — eligibility, documents, motivation letters, and interviews." />
        <meta property="og:url" content="https://ithubahub.co.za/guides/how-to-apply-for-a-bursary" />
        <meta property="og:image" content="https://ithubahub.co.za/logo.svg" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "How to Apply for a Bursary in South Africa",
          "description": "A step-by-step guide to successfully applying for a South African bursary.",
          "step": steps.map((s, i) => ({
            "@type": "HowToStep",
            "position": i + 1,
            "name": s.title,
            "text": s.body,
          })),
        })}</script>
      </Helmet>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-forest-500 dark:text-forest-400">
          <Link to="/" className="hover:text-forest-800 dark:hover:text-white transition">Home</Link>
          <span>/</span>
          <Link to="/guides" className="hover:text-forest-800 dark:hover:text-white transition">Guides</Link>
          <span>/</span>
          <span className="text-forest-800 dark:text-forest-200 font-medium">How to apply</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-forest-500 dark:text-forest-400">Student guide</p>
          <h1 className="mt-2 font-display text-3xl font-semibold text-forest-900 dark:text-forest-50 sm:text-4xl leading-snug">
            How to apply for a bursary in South Africa
          </h1>
          <p className="mt-4 text-sm leading-7 text-forest-600 dark:text-forest-400">
            Applying for a bursary is competitive but very achievable with the right preparation. This guide walks you through every step from checking eligibility to surviving the interview.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-8">
          {steps.map((step) => (
            <div key={step.number} className="flex gap-5">
              <div className="flex flex-col items-center">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest-600 dark:bg-forest-500 text-white text-xs font-bold">
                  {step.number}
                </div>
                <div className="mt-2 w-px flex-1 bg-forest-200 dark:bg-forest-800" />
              </div>
              <div className="pb-8">
                <h2 className="font-semibold text-forest-900 dark:text-forest-50 text-base mb-2">
                  {step.title}
                </h2>
                <p className="text-sm leading-7 text-forest-600 dark:text-forest-400">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick checklist */}
        <div className="mt-10 rounded-2xl border border-forest-200 dark:border-forest-700 bg-forest-50 dark:bg-forest-900 p-6">
          <h2 className="font-display text-lg font-semibold text-forest-900 dark:text-forest-50 mb-4">
            Application checklist
          </h2>
          <ul className="space-y-2.5">
            {[
              "Certified copy of South African ID",
              "Certified copy of matric certificate or latest academic transcript",
              "Proof of university acceptance or registration",
              "Proof of household income (payslips, SASSA letter, or affidavit)",
              "Bank statement (last 3 months)",
              "Motivation letter (1 page)",
              "Curriculum Vitae (CV)",
              "Two academic or character references",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-forest-700 dark:text-forest-300">
                <CheckCircle size={15} className="text-forest-500 dark:text-forest-400 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link
            to="/bursaries"
            className="inline-flex items-center gap-2 rounded-xl bg-forest-600 dark:bg-forest-500 px-5 py-3 text-sm font-medium text-white hover:bg-forest-700 transition"
          >
            Browse bursaries <ArrowRight size={15} />
          </Link>
          <Link
            to="/guides/documents-you-need-before-applying"
            className="inline-flex items-center gap-2 rounded-xl border border-forest-300 dark:border-forest-700 px-5 py-3 text-sm font-medium text-forest-700 dark:text-forest-300 hover:bg-forest-100 dark:hover:bg-forest-800 transition"
          >
            Documents guide <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </>
  );
}
