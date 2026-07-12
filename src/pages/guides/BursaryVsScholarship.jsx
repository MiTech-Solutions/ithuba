import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const comparisons = [
  {
    aspect: "Definition",
    bursary: "Financial aid awarded based on need and academic merit, usually tied to a work-back agreement with the funder.",
    scholarship: "Financial award based primarily on academic or sporting excellence, with no work-back obligation in most cases.",
  },
  {
    aspect: "Who funds it",
    bursary: "Typically funded by companies, government departments, or NGOs who want to develop talent in a specific field.",
    scholarship: "Typically funded by universities, trusts, or private donors who want to reward achievement.",
  },
  {
    aspect: "Work-back obligation",
    bursary: "Usually yes — corporate bursaries often require you to work for the funder for a period equal to the years funded after graduation.",
    scholarship: "Usually no — scholarships are awarded without expecting employment in return.",
  },
  {
    aspect: "Income consideration",
    bursary: "Many bursaries consider household income as part of the selection criteria, especially government bursaries like NSFAS.",
    scholarship: "Most scholarships are purely merit-based and do not consider financial need.",
  },
  {
    aspect: "Field of study",
    bursary: "Most corporate bursaries are field-specific — an engineering company funds engineering students, a bank funds finance students.",
    scholarship: "Scholarships can be broad (any field) or specific, depending on the awarding institution.",
  },
  {
    aspect: "What it covers",
    bursary: "Often covers tuition, accommodation, meals, books, and a monthly stipend — a more comprehensive package.",
    scholarship: "Typically covers tuition only, though prestigious scholarships may include living allowances.",
  },
  {
    aspect: "Application process",
    bursary: "Usually involves an application form, academic records, motivation letter, and often an interview.",
    scholarship: "Often requires proof of achievement (academic results, awards) and a motivation letter. Some are automatic based on results.",
  },
  {
    aspect: "Examples in South Africa",
    bursary: "NSFAS, Sasol Bursary, Eskom Bursary, Allan Gray Orbis Foundation Bursary, Anglo American Bursary.",
    scholarship: "University merit scholarships, Rhodes Scholarship, Mandela Rhodes Scholarship, Mastercard Foundation Scholars Programme.",
  },
];

export default function GuideBursaryVsScholarship() {
  return (
    <>
      <Helmet>
        <title>Bursary vs Scholarship — What's the Difference? | Ithuba Guide</title>
        <meta
          name="description"
          content="What is the difference between a bursary and a scholarship in South Africa? Understand work-back agreements, funding coverage, eligibility, and which one is right for you."
        />
        <link rel="canonical" href="https://ithubahub.co.za/guides/difference-between-bursaries-and-scholarships" />
        <meta property="og:title" content="Bursary vs Scholarship — What's the Difference? | Ithuba" />
        <meta property="og:description" content="Understand the key differences between bursaries and scholarships in South Africa — funding, obligations, eligibility, and more." />
        <meta property="og:url" content="https://ithubahub.co.za/guides/difference-between-bursaries-and-scholarships" />
        <meta property="og:image" content="https://ithubahub.co.za/logo.svg" />
      </Helmet>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-forest-500 dark:text-forest-400">
          <Link to="/" className="hover:text-forest-800 dark:hover:text-white transition">Home</Link>
          <span>/</span>
          <Link to="/guides" className="hover:text-forest-800 dark:hover:text-white transition">Guides</Link>
          <span>/</span>
          <span className="text-forest-800 dark:text-forest-200 font-medium">Bursary vs Scholarship</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-forest-500 dark:text-forest-400">Student guide</p>
          <h1 className="mt-2 font-display text-3xl font-semibold text-forest-900 dark:text-forest-50 sm:text-4xl leading-snug">
            The difference between a bursary and a scholarship
          </h1>
          <p className="mt-4 text-sm leading-7 text-forest-600 dark:text-forest-400 max-w-2xl">
            The terms bursary and scholarship are often used interchangeably in South Africa, but they are meaningfully different. Understanding the distinction helps you apply for the right opportunities and go in with the right expectations.
          </p>
        </div>

        {/* Quick summary cards */}
        <div className="grid gap-4 sm:grid-cols-2 mb-10">
          <div className="rounded-2xl border border-forest-200 dark:border-forest-700 bg-forest-50 dark:bg-forest-900 p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-forest-500 dark:text-forest-400 mb-2">Bursary</p>
            <h2 className="font-display text-lg font-semibold text-forest-900 dark:text-forest-50 mb-3">Need + merit, with obligations</h2>
            <p className="text-sm leading-6 text-forest-600 dark:text-forest-400">
              Awarded by companies or government to fund your studies in exchange for working with them after graduation. Often covers everything — tuition, accommodation, and a stipend.
            </p>
          </div>
          <div className="rounded-2xl border border-gold-200 dark:border-gold-900/40 bg-gold-50 dark:bg-gold-900/10 p-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-gold-600 dark:text-gold-400 mb-2">Scholarship</p>
            <h2 className="font-display text-lg font-semibold text-forest-900 dark:text-forest-50 mb-3">Merit only, no strings attached</h2>
            <p className="text-sm leading-6 text-forest-600 dark:text-forest-400">
              Awarded for academic or sporting excellence. No work-back obligation. Usually covers tuition only, though prestigious scholarships may include living costs.
            </p>
          </div>
        </div>

        {/* Comparison table */}
        <div className="rounded-2xl border border-forest-200 dark:border-forest-700 overflow-hidden mb-10">
          <div className="grid grid-cols-3 bg-forest-800 dark:bg-forest-900 px-4 py-3 text-xs font-semibold uppercase tracking-wider text-forest-200">
            <span>Aspect</span>
            <span>Bursary</span>
            <span>Scholarship</span>
          </div>
          <div className="divide-y divide-forest-100 dark:divide-forest-800 bg-white dark:bg-forest-900">
            {comparisons.map((row) => (
              <div key={row.aspect} className="grid grid-cols-3 gap-4 px-4 py-4 text-sm">
                <p className="font-medium text-forest-800 dark:text-forest-200">{row.aspect}</p>
                <p className="text-forest-600 dark:text-forest-400 leading-6">{row.bursary}</p>
                <p className="text-forest-600 dark:text-forest-400 leading-6">{row.scholarship}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Which is right for you */}
        <div className="rounded-2xl border border-forest-200 dark:border-forest-700 bg-forest-50 dark:bg-forest-900 p-6 mb-10">
          <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-4">
            Which should you apply for?
          </h2>
          <div className="space-y-4 text-sm leading-7 text-forest-600 dark:text-forest-400">
            <p>
              <strong className="text-forest-800 dark:text-forest-200">Apply for a bursary if</strong> you have a clear career direction, are studying in a field that companies actively recruit from (engineering, finance, IT, medicine), and are comfortable with the idea of working for the funder after graduation. The work-back period is often a positive — you graduate with a job guaranteed and relevant experience already building.
            </p>
            <p>
              <strong className="text-forest-800 dark:text-forest-200">Apply for a scholarship if</strong> you have strong academic results and want maximum flexibility after graduation — to pursue postgraduate study, work abroad, or explore different employers without obligation.
            </p>
            <p>
              <strong className="text-forest-800 dark:text-forest-200">Apply for both simultaneously</strong> if you qualify. There is no conflict in holding a scholarship while applying for a bursary, and having one can strengthen your application for the other.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-3">
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
