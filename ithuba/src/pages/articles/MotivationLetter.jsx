import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, XCircle } from "lucide-react";

const OG_IMG = "https://i.postimg.cc/d3T437Xk/45C7EB18-47F5-4CD3-9509-3A1092AF188E.png";

const doList = [
  "Address the letter to a specific person or department if the name is available",
  "Open with a strong first sentence that immediately states who you are and what you're applying for",
  "Mention the funder by name — show you know who they are and what they do",
  "Be specific about your field of study and why you chose it",
  "Connect your career goals directly to the funder's industry or mission",
  "Include one specific achievement or experience that sets you apart",
  "Mention your financial situation briefly if the bursary is need-based",
  "Close with a clear, confident statement of intent",
  "Keep it to one page — no exceptions",
  "Proofread at least three times and ask someone else to read it",
];

const dontList = [
  "Open with 'I am writing to apply for...' — it's the most overused opening in bursary applications",
  "Copy a template from the internet — funders read thousands of letters and spot them instantly",
  "Use vague phrases like 'I am hardworking, dedicated, and passionate'",
  "Write more than one page",
  "Use the same letter for every application without tailoring it",
  "Make spelling or grammar mistakes — they signal carelessness",
  "Exaggerate or fabricate achievements",
  "Forget to mention the specific bursary you're applying for",
];

const structure = [
  {
    section: "Opening paragraph",
    guide: "State who you are, what you are studying or plan to study, and which bursary you are applying for. Mention something specific about the funder that drew you to their programme — not just that you need money.",
    example: "I am a Grade 12 student at Pretoria Boys High School, currently completing my matric with a focus on Mathematics and Physical Science. I am applying for the Eskom Bursary Programme as part of my plan to study Electrical Engineering at the University of Pretoria — a field I have been drawn to since volunteering with a community electrification project in 2024.",
  },
  {
    section: "Who you are",
    guide: "In two to three sentences, describe your background, your academic strengths, and any relevant experience. This is not your CV — pick one or two highlights that are most relevant to this application.",
    example: "I achieved distinctions in Mathematics, Physical Science, and Life Sciences in my Grade 11 exams. Outside the classroom, I serve as the captain of my school's robotics team, which reached the national finals of the SARC competition in 2025 — an experience that deepened my interest in electrical systems and problem-solving under pressure.",
  },
  {
    section: "Why this field",
    guide: "Explain your choice of study with specificity. What problem do you want to solve? What drew you to this discipline? A student who can articulate a real reason for their field of study always stands out.",
    example: "South Africa's energy crisis has made electrical engineering feel urgent to me in a way that abstract career advice never could. I want to be part of the generation of engineers who help the country transition to a more reliable and sustainable grid — and I believe a career at Eskom would put me at the centre of that work.",
  },
  {
    section: "Why this funder",
    guide: "One paragraph, specific to this organisation. Mention their work, their values, or a specific project that resonates with you. Never use generic phrases like 'a reputable company with a strong track record.'",
    example: "Eskom's investment in the Medupi and Kusile projects, and more recently its focus on renewable integration through the Just Energy Transition programme, represents exactly the kind of large-scale infrastructure challenge I want to contribute to. I am particularly interested in the transmission and distribution side of the business.",
  },
  {
    section: "Your financial situation",
    guide: "For need-based bursaries, include a brief, dignified statement of your financial circumstances. For merit-based or corporate bursaries, this is less important — focus on your goals instead.",
    example: "My family is a single-income household and my mother's salary as a nurse does not cover the full cost of a university education. A bursary from Eskom would make my studies possible and allow me to focus entirely on my academic performance.",
  },
  {
    section: "Closing paragraph",
    guide: "End with a confident, forward-looking statement. Express genuine enthusiasm for the opportunity — not desperation. Mention that you would welcome the opportunity to discuss your application further.",
    example: "I am committed to completing my degree with the academic results and professional character that would make Eskom proud of its investment. I would welcome the opportunity to discuss my application and am available for an interview at your convenience. Thank you for your consideration.",
  },
];

export default function ArticleMotivationLetter() {
  return (
    <>
      <Helmet>
        <title>How to Write a Winning Bursary Motivation Letter | Ithuba</title>
        <meta
          name="description"
          content="Step-by-step guide to writing a strong bursary motivation letter in South Africa. Includes structure, examples, do's and don'ts, and a complete sample letter."
        />
        <meta name="description" content="Step-by-step guide to writing a bursary motivation letter — structure, examples, do's and don'ts, and a final checklist." />
        <link rel="canonical" href="https://ithubahub.co.za/articles/how-to-write-a-bursary-motivation-letter" />
        <meta property="og:title" content="How to Write a Winning Bursary Motivation Letter | Ithuba" />
        <meta property="og:description" content="Step-by-step guide to writing a bursary motivation letter that stands out — structure, examples, do's and don'ts." />
        <meta property="og:url" content="https://ithubahub.co.za/articles/how-to-write-a-bursary-motivation-letter" />
        <meta property="og:image" content={OG_IMG} />
        <meta name="twitter:title" content="How to Write a Winning Bursary Motivation Letter | Ithuba" />
        <meta name="twitter:description" content="Step-by-step guide to writing a bursary motivation letter that stands out — structure, examples and checklist." />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={OG_IMG} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "headline": "How to Write a Winning Bursary Motivation Letter",
              "description": "Step-by-step guide to writing a strong bursary motivation letter with structure, examples, and a complete sample.",
              "url": "https://ithubahub.co.za/articles/how-to-write-a-bursary-motivation-letter",
              "publisher": { "@type": "Organization", "name": "Ithuba", "url": "https://ithubahub.co.za" },
              "datePublished": "2026-07-20",
              "dateModified": "2026-07-20",
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://ithubahub.co.za" },
                { "@type": "ListItem", "position": 2, "name": "Articles", "item": "https://ithubahub.co.za/articles" },
                { "@type": "ListItem", "position": 3, "name": "Motivation Letter Guide", "item": "https://ithubahub.co.za/articles/how-to-write-a-bursary-motivation-letter" },
              ],
            },
          ],
        })}</script>
      </Helmet>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-forest-500 dark:text-forest-400">
          <Link to="/" className="hover:text-forest-800 dark:hover:text-white transition">Home</Link>
          <span>/</span>
          <Link to="/articles" className="hover:text-forest-800 dark:hover:text-white transition">Articles</Link>
          <span>/</span>
          <span className="text-forest-800 dark:text-forest-200 font-medium">Motivation letter guide</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center rounded-full bg-forest-100 dark:bg-forest-800 px-3 py-1 text-xs font-medium text-forest-600 dark:text-forest-300">Application Guide</span>
            <span className="text-xs text-forest-400 dark:text-forest-500">Updated July 2026 · 9 min read</span>
          </div>
          <h1 className="font-display text-3xl font-semibold text-forest-900 dark:text-forest-50 sm:text-4xl leading-snug">
            How to write a winning bursary motivation letter
          </h1>
          <p className="mt-4 text-sm leading-7 text-forest-600 dark:text-forest-400">
            The motivation letter is where most bursary applications are won or lost. Two students with identical results will be separated entirely by the quality of their letter. This guide walks you through every section, shows you real examples, and tells you exactly what to avoid.
          </p>
        </div>

        <div className="space-y-10 text-sm leading-7 text-forest-700 dark:text-forest-300">

          {/* Why it matters */}
          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">Why the motivation letter matters so much</h2>
            <p>
              Your matric or university results tell a funder what you've achieved. Your motivation letter tells them who you are, why you've chosen your field, and whether you're likely to make good use of their investment. For competitive bursaries where hundreds of applicants have similar results, the letter is often the deciding factor.
            </p>
            <p className="mt-3">
              Bursary panels read thousands of letters. They can spot a copied template in the first sentence. They notice when a student mentions the wrong company name — which happens more than you'd think when letters are reused without editing. A generic letter signals that you're not serious. A specific, well-written letter signals that you are.
            </p>
          </section>

          {/* Structure */}
          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-5">The six-part structure — with examples</h2>
            <p className="mb-6">Every strong bursary motivation letter follows roughly the same structure. Here's each section explained with an example written for a fictional Eskom engineering bursary application.</p>
            <div className="space-y-6">
              {structure.map((item, i) => (
                <div key={item.section} className="rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 overflow-hidden">
                  <div className="flex items-center gap-3 px-5 py-3 border-b border-forest-100 dark:border-forest-800 bg-forest-50 dark:bg-forest-800/60">
                    <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-forest-600 dark:bg-forest-500 text-white text-xs font-bold shrink-0">
                      {i + 1}
                    </span>
                    <p className="font-semibold text-forest-900 dark:text-forest-50 text-sm">{item.section}</p>
                  </div>
                  <div className="p-5 space-y-3">
                    <p className="text-forest-600 dark:text-forest-400">{item.guide}</p>
                    <div className="rounded-xl bg-forest-50 dark:bg-forest-800/40 border border-forest-100 dark:border-forest-800 p-4">
                      <p className="text-xs font-semibold uppercase tracking-wider text-forest-400 dark:text-forest-500 mb-2">Example</p>
                      <p className="text-forest-800 dark:text-forest-200 italic leading-6">{item.example}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Do's and don'ts */}
          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-5">Do's and don'ts</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-forest-500 dark:text-forest-400 mb-4">Do</p>
                <ul className="space-y-2.5">
                  {doList.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-forest-700 dark:text-forest-300">
                      <CheckCircle size={13} className="text-forest-500 dark:text-forest-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl border border-red-100 dark:border-red-900/30 bg-white dark:bg-forest-900 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-red-400 dark:text-red-500 mb-4">Don't</p>
                <ul className="space-y-2.5">
                  {dontList.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-forest-700 dark:text-forest-300">
                      <XCircle size={13} className="text-red-400 dark:text-red-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Tailoring */}
          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">How to tailor your letter for each application</h2>
            <p>
              You should never send the same letter to two different funders. But that doesn't mean rewriting from scratch every time. Build a strong base letter with your personal story, your field choice, and your achievements — these sections stay roughly the same. Then customise the funder-specific paragraphs for each application.
            </p>
            <p className="mt-3">
              The minimum changes for each application:
            </p>
            <ul className="mt-3 space-y-2">
              {[
                "Replace the funder's name throughout",
                "Rewrite the 'why this funder' paragraph completely",
                "Adjust the opening sentence to reference the specific bursary",
                "Tweak the closing paragraph if the funder has specific programmes or values you want to reference",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-forest-500 dark:bg-forest-400" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-4">
              Before submitting, do a find-and-replace search for the previous funder's name to make sure no old references remain. This sounds obvious but it's a mistake that eliminates otherwise strong applications every year.
            </p>
          </section>

          {/* Format */}
          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">Formatting and presentation</h2>
            <div className="rounded-2xl border border-forest-200 dark:border-forest-700 bg-forest-50 dark:bg-forest-900 p-5 space-y-3">
              {[
                { label: "Length",      value: "One page maximum. If it runs onto a second page, cut it." },
                { label: "Font",        value: "Arial or Times New Roman, size 11 or 12. No decorative fonts." },
                { label: "Margins",     value: "Standard margins (2.5cm). Don't reduce them to squeeze in more text." },
                { label: "Format",      value: "PDF for digital submissions. Never send a Word document unless specifically asked." },
                { label: "File name",   value: "Firstname_Lastname_MotivationLetter.pdf — not 'motivation letter final v3 ACTUAL FINAL.pdf'" },
                { label: "Letterhead", value: "Not required but adds professionalism. Include your name, email, and phone number at the top." },
              ].map((item) => (
                <div key={item.label} className="flex gap-3">
                  <span className="text-xs font-semibold text-forest-500 dark:text-forest-400 w-24 shrink-0 pt-0.5">{item.label}</span>
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Final check */}
          <section>
            <h2 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 mb-3">Before you submit — final checklist</h2>
            <div className="space-y-2">
              {[
                "Read it out loud — awkward sentences become obvious when spoken",
                "Ask a parent, teacher, or trusted adult to read it and give honest feedback",
                "Check that every mention of the funder's name is correct",
                "Confirm the letter is one page and saved as a PDF",
                "Check that your contact details are correct if included",
                "Read it one final time the next morning with fresh eyes",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle size={14} className="text-forest-500 dark:text-forest-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link to="/bursaries" className="inline-flex items-center gap-2 rounded-xl bg-forest-600 dark:bg-forest-500 px-5 py-3 text-sm font-medium text-white hover:bg-forest-700 transition">
            Browse bursaries to apply for <ArrowRight size={15} />
          </Link>
          <Link to="/guides/common-bursary-interview-questions" className="inline-flex items-center gap-2 rounded-xl border border-forest-300 dark:border-forest-700 px-5 py-3 text-sm font-medium text-forest-700 dark:text-forest-300 hover:bg-forest-100 dark:hover:bg-forest-800 transition">
            Interview questions guide <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </>
  );
}
