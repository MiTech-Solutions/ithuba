import { Helmet } from "react-helmet-async";

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms of Use | Ithuba</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 p-6 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-forest-500 dark:text-forest-400">Legal</p>
          <h1 className="mt-3 font-display text-3xl font-semibold text-forest-900 dark:text-forest-50">Terms of Use</h1>
          <p className="mt-2 text-sm text-forest-500 dark:text-forest-400">Last updated: June 25, 2026</p>

          <div className="mt-8 space-y-6 text-sm leading-7 text-forest-700 dark:text-forest-300">
            {[
              { title: "1. Acceptance", body: "By using Ithuba you agree to these terms. If you do not agree, please do not use the site." },
              { title: "2. Purpose", body: "Ithuba provides bursary information for reference purposes only. We do not guarantee the accuracy, completeness, or currency of any listing. Always verify details directly with the funder before applying." },
              { title: "3. No affiliation", body: "Ithuba is an independent directory and is not affiliated with any listed funder, institution, or government department." },
              { title: "4. Submissions", body: "By submitting a bursary listing you confirm that the information is accurate and that you have the right to submit it. We reserve the right to edit or remove listings at our discretion." },
              { title: "5. Limitation of liability", body: "Ithuba is provided as-is. We are not liable for any loss, damage, or missed opportunity arising from reliance on information found on this site." },
              { title: "6. Changes", body: "These terms may be updated at any time. Continued use of the site constitutes acceptance of the updated terms." },
              { title: "7. Contact", body: "For questions about these terms, contact: info@ithuba.app" },
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
