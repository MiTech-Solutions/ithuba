import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const sections = [
  {
    category: "About you",
    color: "border-forest-200 dark:border-forest-700 bg-forest-50 dark:bg-forest-900",
    labelColor: "text-forest-600 dark:text-forest-400",
    questions: [
      {
        q: "Tell us about yourself.",
        a: "Keep it to 90 seconds. Structure it as: where you're from, what you're studying and why, one or two achievements, and why you're sitting in this interview. Avoid reciting your CV — the panel has already read it. Focus on what makes you memorable.",
      },
      {
        q: "Why did you choose this field of study?",
        a: "Be specific and honest. If there's a personal story behind it — a family member in the industry, a subject you excelled at, a problem you want to solve — share it. Generic answers like 'I've always been good at maths' don't stand out. Connect your choice to a real purpose.",
      },
      {
        q: "What are your strengths and weaknesses?",
        a: "For strengths, pick one or two that are genuinely relevant to your field and back each with an example. For weaknesses, choose something real but show you're actively working on it. Saying 'I'm a perfectionist' is overused and transparent — interviewers have heard it thousands of times.",
      },
      {
        q: "Where do you see yourself in five or ten years?",
        a: "Show ambition but ground it in reality. Mention your intended career path, how this bursary fits into that path, and ideally how your goals align with the funder's industry. Corporate funders want to see that you're thinking about contributing to their sector long-term.",
      },
      {
        q: "What extracurricular activities are you involved in?",
        a: "Mention leadership roles, community work, sport, or creative pursuits. Funders want well-rounded students who manage their time effectively and give back to their communities. Even if your involvement is modest, talk about what you learned from it.",
      },
    ],
  },
  {
    category: "About the funder",
    color: "border-blue-200 dark:border-blue-900/40 bg-blue-50 dark:bg-blue-900/10",
    labelColor: "text-blue-600 dark:text-blue-400",
    questions: [
      {
        q: "What do you know about our organisation?",
        a: "This is the question that separates prepared candidates from unprepared ones. Research the funder before your interview — their core business, recent news, values, and graduate programmes. Mention specific things you found. Even five minutes of research is obvious and appreciated.",
      },
      {
        q: "Why did you apply for this specific bursary?",
        a: "Do not say 'because I need money.' Connect the funder's industry or values to your career goals. If it's a corporate bursary, mention what appeals to you about working in their sector. If it's an NGO or government bursary, speak to your commitment to public service or social impact.",
      },
      {
        q: "Are you aware of the work-back agreement and are you comfortable with it?",
        a: "Always say yes — and mean it. If you're applying for a corporate bursary with a work-back obligation, frame it positively: guaranteed employment, mentorship, and real experience in your field. Hesitation here is a red flag for the panel.",
      },
      {
        q: "What would you bring to our organisation after graduating?",
        a: "Link your skills and field of study to specific value you could add. If you're an engineering student applying to an energy company, talk about contributing to infrastructure projects. Be specific rather than vague — 'I am hardworking and eager to learn' tells them nothing useful.",
      },
    ],
  },
  {
    category: "Academic & financial",
    color: "border-gold-200 dark:border-gold-900/40 bg-gold-50 dark:bg-gold-900/10",
    labelColor: "text-gold-600 dark:text-gold-400",
    questions: [
      {
        q: "Your results dropped in Grade 11. Can you explain that?",
        a: "Be honest and take ownership — don't blame teachers or circumstances without showing what you did about it. Explain the context briefly, then focus on what you learned and how your results recovered. Resilience and self-awareness are qualities funders actively look for.",
      },
      {
        q: "How will you manage financially while studying?",
        a: "Show you have a realistic plan. Mention any part-time work, family support, or other funding you're applying for. The panel wants to know you've thought this through and that financial pressure won't derail your studies.",
      },
      {
        q: "Are you applying for other bursaries?",
        a: "Yes — and say so honestly. Most funders expect this and respect it. It shows initiative. Add that this particular bursary is your preferred choice and explain briefly why.",
      },
    ],
  },
  {
    category: "Situational & behavioural",
    color: "border-forest-200 dark:border-forest-700 bg-forest-50 dark:bg-forest-900",
    labelColor: "text-forest-600 dark:text-forest-400",
    questions: [
      {
        q: "Tell us about a time you overcame a significant challenge.",
        a: "Use the STAR method: Situation, Task, Action, Result. Pick a real challenge — academic, personal, or community-related — and walk through how you approached it and what the outcome was. Keep it under two minutes and end on what you learned.",
      },
      {
        q: "Describe a time you led a team or took initiative.",
        a: "Even small examples count — a school project, a community initiative, a sports team. Focus on your specific contribution and what impact it had. Funders aren't only looking for school prefects; they want to see evidence that you step up when it matters.",
      },
      {
        q: "How do you handle pressure or tight deadlines?",
        a: "Give a specific example rather than a general answer. Describe a real situation where you had competing demands, how you prioritised, and what the outcome was. Avoid saying you 'work well under pressure' without evidence — show it.",
      },
      {
        q: "What would you do if you were struggling academically during your bursary?",
        a: "Show that you would take action early — speak to a lecturer, seek tutoring, communicate with the bursary holder. Funders worry about students who suffer in silence and fail quietly. Demonstrating that you'd be proactive and transparent is exactly the right answer.",
      },
    ],
  },
];

function QuestionAccordion({ q, a }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-forest-100 dark:border-forest-800 last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-start justify-between gap-4 py-4 text-left group"
      >
        <span className="text-sm font-semibold text-forest-900 dark:text-forest-50 leading-snug group-hover:text-forest-700 dark:group-hover:text-white transition">
          {q}
        </span>
        <span className="shrink-0 mt-0.5 text-forest-400 dark:text-forest-500">
          {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </span>
      </button>
      {open && (
        <p className="pb-4 text-sm leading-7 text-forest-600 dark:text-forest-400">
          {a}
        </p>
      )}
    </div>
  );
}

export default function GuideInterviewQuestions() {
  return (
    <>
      <Helmet>
        <title>Common Bursary Interview Questions & How to Answer Them | Ithuba</title>
        <meta
          name="description"
          content="Prepare for your bursary interview with this guide to common questions — about yourself, the funder, your academics, and situational questions — with tips on how to answer each one."
        />
        <link rel="canonical" href="https://ithubahub.co.za/guides/common-bursary-interview-questions" />
        <meta property="og:title" content="Common Bursary Interview Questions & Answers | Ithuba" />
        <meta property="og:description" content="17 common bursary interview questions with practical advice on how to answer each one. Prepare confidently for your next bursary interview." />
        <meta property="og:url" content="https://ithubahub.co.za/guides/common-bursary-interview-questions" />
        <meta property="og:image" content="https://i.postimg.cc/d3T437Xk/45C7EB18-47F5-4CD3-9509-3A1092AF188E.png" />
        <script type="application/ld+json">{JSON.stringify({"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"https://ithubahub.co.za"},{"@type":"ListItem","position":2,"name":"Guides","item":"https://ithubahub.co.za/guides"},{"@type":"ListItem","position":3,"name":"Interview questions","item":"https://ithubahub.co.za/guides/common-bursary-interview-questions"}]})}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": sections.flatMap(s => s.questions.map(({ q, a }) => ({
            "@type": "Question",
            "name": q,
            "acceptedAnswer": { "@type": "Answer", "text": a },
          }))),
        })}</script>
      </Helmet>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <nav className="mb-8 flex items-center gap-2 text-sm text-forest-500 dark:text-forest-400">
          <Link to="/" className="hover:text-forest-800 dark:hover:text-white transition">Home</Link>
          <span>/</span>
          <Link to="/guides" className="hover:text-forest-800 dark:hover:text-white transition">Guides</Link>
          <span>/</span>
          <span className="text-forest-800 dark:text-forest-200 font-medium">Interview questions</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-forest-500 dark:text-forest-400">Student guide</p>
          <h1 className="mt-2 font-display text-3xl font-semibold text-forest-900 dark:text-forest-50 sm:text-4xl leading-snug">
            Common bursary interview questions
          </h1>
          <p className="mt-4 text-sm leading-7 text-forest-600 dark:text-forest-400">
            Making it to a bursary interview means your application stood out. Now the panel wants to meet the person behind the paperwork. These are the questions you're most likely to face — and how to answer them well.
          </p>
          <div className="mt-4 flex items-center gap-4 text-xs text-forest-400 dark:text-forest-500">
            <span>17 questions covered</span>
            <span>·</span>
            <span>7 min read</span>
          </div>
        </div>

        {/* General tips */}
        <div className="mb-10 rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 p-6">
          <h2 className="font-display text-lg font-semibold text-forest-900 dark:text-forest-50 mb-4">
            Before you answer anything
          </h2>
          <ul className="space-y-3">
            {[
              "Research the funder thoroughly — their industry, recent news, and values. This alone separates most candidates.",
              "Prepare two or three specific stories from your life that you can adapt to different questions.",
              "Practice out loud — not just in your head. Hearing yourself answer is very different from thinking the answer.",
              "Dress professionally. First impressions matter and bursary panels often include senior staff.",
              "Bring a folder with printed copies of your documents even if you submitted digitally.",
              "Arrive at least 15 minutes early. Being late — even by one minute — ends most bursary interviews before they start.",
            ].map((tip, i) => (
              <li key={i} className="flex items-start gap-3 text-sm leading-6 text-forest-600 dark:text-forest-400">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-forest-500 dark:bg-forest-400" />
                {tip}
              </li>
            ))}
          </ul>
        </div>

        {/* Question sections */}
        <div className="space-y-8">
          {sections.map((section) => (
            <div key={section.category} className={`rounded-2xl border p-6 ${section.color}`}>
              <p className={`text-xs font-semibold uppercase tracking-wider mb-2 ${section.labelColor}`}>
                {section.category}
              </p>
              <div>
                {section.questions.map(({ q, a }) => (
                  <QuestionAccordion key={q} q={q} a={a} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Closing tip */}
        <div className="mt-10 rounded-2xl border border-forest-200 dark:border-forest-700 bg-forest-50 dark:bg-forest-900 p-6">
          <h2 className="font-display text-lg font-semibold text-forest-900 dark:text-forest-50 mb-3">
            The question they always end with
          </h2>
          <p className="text-sm leading-7 text-forest-600 dark:text-forest-400">
            <strong className="text-forest-800 dark:text-forest-200">"Do you have any questions for us?"</strong> — always say yes. Prepare two genuine questions in advance. Ask about the graduate programme, mentorship opportunities, or what the panel looks for in successful bursary holders. Saying "no, I'm fine" signals a lack of genuine interest.
          </p>
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
