import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const ABOUT_IMG = "https://images.unsplash.com/photo-1707155923365-248bb3f86a3a?q=80&w=1470&auto=format&fit=crop";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About Ithuba | South Africa's Free Bursary Directory</title>
        <meta name="description" content="Ithuba is a free South African bursary directory helping students find funding opportunities from government, corporate, and NGO funders." />
        <link rel="canonical" href="https://ithubahub.co.za/about" />
      </Helmet>

      {/* Hero image banner */}
      <div className="relative h-56 sm:h-72 overflow-hidden bg-forest-900">
        <img
          src={ABOUT_IMG}
          alt="South African students"
          loading="eager"
          decoding="async"
          className="h-full w-full object-cover object-center opacity-50 dark:opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-900/80 via-forest-900/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-8 sm:px-6 lg:px-8 mx-auto max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-gold-300 mb-2">About</p>
          <h1 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            What is Ithuba?
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="space-y-6 text-sm leading-7 text-forest-700 dark:text-forest-300">
          <p>
            <strong className="text-forest-900 dark:text-forest-100">Ithuba</strong> means{" "}
            <em>opportunity</em> in Zulu and Xhosa. It's a free, independent
            directory of bursaries available to South African students — built
            to make finding funding simpler, faster, and more accessible.
          </p>

          <p>
            Finding a bursary in South Africa currently means navigating dozens
            of disconnected websites, outdated PDFs, and university notice
            boards. Ithuba brings everything into one place — searchable by
            field of study, province, funder type, and study level.
          </p>

          <p>
            We list bursaries from government departments, corporate funders,
            and NGOs. Every listing includes the bursary value, deadline,
            requirements, and a direct link to apply. There are no middlemen
            and no fees — just the opportunity.
          </p>

          <p>
            Ithuba is free to use and always will be. We're funded through
            display advertising, which keeps the directory accessible to every
            student regardless of their financial situation.
          </p>

          <div className="rounded-2xl border border-forest-200 dark:border-forest-700 bg-forest-50 dark:bg-forest-900 p-6 my-8">
            <h2 className="font-display text-lg font-semibold text-forest-900 dark:text-forest-50 mb-3">
              How we keep listings current
            </h2>
            <p>
              Listings are reviewed and updated regularly. Bursary providers
              can submit their own listings directly through our submission
              form, and we encourage funders to keep their information up to
              date. If you notice outdated or incorrect information, please
              contact us.
            </p>
          </div>

          <div className="rounded-2xl border border-forest-200 dark:border-forest-700 bg-forest-50 dark:bg-forest-900 p-6">
            <h2 className="font-display text-lg font-semibold text-forest-900 dark:text-forest-50 mb-3">
              Disclaimer
            </h2>
            <p>
              Ithuba provides bursary information for reference purposes only.
              While we make every effort to keep listings accurate, we
              recommend verifying all details directly with the funder before
              applying. Ithuba is not affiliated with any of the listed funders
              and does not facilitate applications or payments.
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link
            to="/bursaries"
            className="inline-flex items-center gap-2 rounded-xl bg-forest-600 dark:bg-forest-500 px-5 py-3 text-sm font-medium text-white hover:bg-forest-700 transition"
          >
            Browse bursaries <ArrowRight size={15} />
          </Link>
          <Link
            to="/submit"
            className="inline-flex items-center gap-2 rounded-xl border border-forest-300 dark:border-forest-700 px-5 py-3 text-sm font-medium text-forest-700 dark:text-forest-300 hover:bg-forest-100 dark:hover:bg-forest-800 transition"
          >
            Submit a bursary
          </Link>
        </div>
      </div>
    </>
  );
}
