import { Helmet } from "react-helmet-async";

export default function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Ithuba</title>
        <meta name="description" content="Ithuba privacy policy. How we collect, use, and protect your data in compliance with South African data protection laws." />
        <meta name="robots" content="noindex, follow" />
        <link rel="canonical" href="https://ithubahub.co.za/privacy-policy" />
              <meta property="og:title" content="Privacy Policy | Ithuba" />
        <meta property="og:description" content="Ithuba privacy policy — how we collect, use, and protect your personal information." />
        <meta property="og:image" content="https://i.postimg.cc/d3T437Xk/45C7EB18-47F5-4CD3-9509-3A1092AF188E.png" />
        <meta name="twitter:title" content="Privacy Policy | Ithuba" />
        <meta name="twitter:description" content="Ithuba privacy policy — how we collect, use, and protect your personal information." />
        <meta name="twitter:image" content="https://i.postimg.cc/d3T437Xk/45C7EB18-47F5-4CD3-9509-3A1092AF188E.png" />
              <meta property="og:url" content="https://ithubahub.co.za/privacy-policy" />
      </Helmet>

      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-forest-500 dark:text-forest-400">Legal</p>
          <h1 className="mt-3 font-display text-3xl font-semibold text-forest-900 dark:text-forest-50">Privacy Policy</h1>
          <p className="mt-2 text-sm text-forest-500 dark:text-forest-400">Last updated: June 25, 2026</p>

          <div className="mt-8 space-y-6 text-sm leading-7 text-forest-700 dark:text-forest-300">
            {[
              { title: "1. Overview", body: "Ithuba values your privacy. This policy explains how information is collected, used, and protected when you use this website." },
              { title: "2. Information we collect", body: "We may collect limited technical information such as browser type, device, pages visited, and session duration. We do not collect personally identifiable information unless you choose to provide it via the bursary submission form." },
              { title: "3. Google Analytics", body: "We use Google Analytics to understand how visitors use Ithuba. This collects anonymised usage data. Google may use this data in accordance with its own Privacy Policy at policies.google.com/privacy." },
              { title: "4. Google AdSense", body: "We use Google AdSense to display advertisements. AdSense may use cookies to personalise ads based on your browsing history. You can opt out of personalised advertising at google.com/settings/ads." },
              { title: "5. Bursary submissions", body: "Information submitted via the Submit a Bursary form is used solely for the purpose of reviewing and publishing bursary listings. Contact email addresses provided are not shared or used for marketing." },
              { title: "6. How to control cookies", body: "You can limit or disable cookies through your browser settings. You may also use the Google Analytics opt-out add-on at tools.google.com/dlpage/gaoptout, or manage ad personalisation at google.com/settings/ads." },
              { title: "7. Changes to this policy", body: "This policy may be updated from time to time. Changes will be reflected on this page with an updated date." },
              { title: "8. Contact", body: "For privacy-related questions, contact: mitechsolutionsza@gmail.com" },
            ].map((s) => (
              <div key={s.title}>
                <h2 className="font-semibold text-forest-900 dark:text-forest-100">{s.title}</h2>
                <p className="mt-2">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
