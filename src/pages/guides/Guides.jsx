import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen } from "lucide-react";

const guides = [
  {
    path: "/guides/how-to-apply-for-a-bursary",
    title: "How to apply for a bursary in South Africa",
    description: "A step-by-step walkthrough from checking eligibility to surviving the interview. Includes a full document checklist.",
    tag: "Applications",
    readTime: "6 min read",
  },
  {
    path: "/guides/documents-you-need-before-applying",
    title: "Documents you need before applying for a bursary",
    description: "Full checklist of every document you'll need — certified IDs, academic transcripts, proof of income, motivation letters, and references.",
    tag: "Preparation",
    readTime: "5 min read",
  },
  {
    path: "/guides/common-bursary-interview-questions",
    title: "Common bursary interview questions",
    description: "17 questions you're likely to face in a bursary interview — about yourself, the funder, your academics, and situational scenarios — with tips on how to answer each.",
    tag: "Interviews",
    readTime: "7 min read",
  },
  {
    path: "/guides/difference-between-bursaries-and-scholarships",
    title: "The difference between a bursary and a scholarship",
    description: "Understand work-back obligations, funding coverage, eligibility differences, and which type of funding suits your situation.",
    tag: "Fundamentals",
    readTime: "4 min read",
  },
];

export default function Guides() {
  return (
    <>
      <Helmet>
        <title>Student Guides — Bursaries in South Africa | Ithuba</title>
        <meta
          name="description"
          content="Free guides for South African students on bursaries — how to apply, what documents you need, bursary vs scholarship, interview tips, and more."
        />
        <link rel="canonical" href="https://ithubahub.co.za/guides" />
        <meta property="og:title" content="Student Guides | Ithuba" />
        <meta property="og:description" content="Free guides to help South African students find and apply for bursaries successfully." />
        <meta property="og:url" content="https://ithubahub.co.za/guides" />
        <meta property="og:image" content="https://i.postimg.cc/d3T437Xk/45C7EB18-47F5-4CD3-9509-3A1092AF188E.png" />
        <meta property="og:image" content="https://i.postimg.cc/d3T437Xk/45C7EB18-47F5-4CD3-9509-3A1092AF188E.png" />
        <meta property="og:image" content="https://i.postimg.cc/d3T437Xk/45C7EB18-47F5-4CD3-9509-3A1092AF188E.png" />
      </Helmet>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">

        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-forest-500 dark:text-forest-400">Resources</p>
          <h1 className="mt-2 font-display text-3xl font-semibold text-forest-900 dark:text-forest-50 sm:text-4xl">
            Student guides
          </h1>
          <p className="mt-3 text-sm leading-7 text-forest-600 dark:text-forest-400 max-w-xl">
            Practical, plain-language guides to help South African students navigate the bursary application process from start to finish.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {guides.map((guide) => (
            <Link
              key={guide.path}
              to={guide.path}
              className="group flex flex-col rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 p-6 transition hover:border-forest-400 dark:hover:border-forest-500 hover:shadow-lg hover:-translate-y-0.5"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-forest-100 dark:bg-forest-800 text-forest-600 dark:text-forest-300">
                  <BookOpen size={15} />
                </div>
                <span className="text-xs font-medium text-forest-500 dark:text-forest-400">{guide.tag}</span>
                <span className="ml-auto text-xs text-forest-400 dark:text-forest-500">{guide.readTime}</span>
              </div>
              <h2 className="font-semibold text-forest-900 dark:text-forest-50 leading-snug mb-2 group-hover:text-forest-700 dark:group-hover:text-white transition">
                {guide.title}
              </h2>
              <p className="text-sm leading-6 text-forest-500 dark:text-forest-400 flex-1">
                {guide.description}
              </p>
              <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-forest-600 dark:text-forest-400 group-hover:text-forest-900 dark:group-hover:text-white transition">
                Read guide <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/bursaries"
            className="inline-flex items-center gap-2 rounded-xl bg-forest-600 dark:bg-forest-500 px-6 py-3 text-sm font-medium text-white hover:bg-forest-700 transition"
          >
            Browse all bursaries <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </>
  );
}
