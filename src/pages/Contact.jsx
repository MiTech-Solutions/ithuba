import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Mail, Send, CheckCircle, MapPin } from "lucide-react";

const FORMSPREE_URL = "https://formspree.io/f/mojowpbw";

export default function Contact() {
  const [form, setForm]           = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState(null);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...form, _subject: `Ithuba contact: ${form.subject}` }),
      });
      if (!res.ok) throw new Error("Submission failed. Please try again.");
      setSubmitted(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  const inputClass = "w-full rounded-xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 px-4 py-3 text-sm text-forest-900 dark:text-forest-100 outline-none placeholder:text-forest-400 focus:border-forest-500 dark:focus:border-forest-400 transition";
  const labelClass = "block text-sm font-medium text-forest-700 dark:text-forest-300 mb-1.5";

  if (submitted) {
    return (
      <div className="mx-auto max-w-lg px-4 py-24 text-center sm:px-6">
        <div className="flex justify-center">
          <CheckCircle size={48} className="text-forest-500 dark:text-forest-400" />
        </div>
        <h2 className="mt-4 font-display text-2xl font-semibold text-forest-900 dark:text-forest-50">
          Message received
        </h2>
        <p className="mt-3 text-sm leading-7 text-forest-600 dark:text-forest-400">
          Thanks for reaching out. We'll get back to you at{" "}
          <span className="font-medium text-forest-800 dark:text-forest-200">{form.email}</span>{" "}
          within 2–3 business days.
        </p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Contact Us | Ithuba</title>
        <meta
          name="description"
          content="Get in touch with the Ithuba team. Questions about bursary listings, submissions, or the directory? We'd love to hear from you."
        />
        <link rel="canonical" href="https://ithuba.app/contact" />
      </Helmet>

      <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-semibold uppercase tracking-widest text-forest-500 dark:text-forest-400">
            Get in touch
          </p>
          <h1 className="mt-2 font-display text-3xl font-semibold text-forest-900 dark:text-forest-50 sm:text-4xl">
            Contact us
          </h1>
          <p className="mt-3 max-w-lg text-sm leading-7 text-forest-600 dark:text-forest-400">
            Have a question about a listing, want to report outdated information,
            or just want to say hello? Fill in the form and we'll get back to you.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {/* Contact details sidebar */}
          <div className="space-y-4 lg:col-span-1">

            <div className="rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-forest-100 dark:bg-forest-800 text-forest-600 dark:text-forest-300">
                  <Mail size={16} />
                </div>
                <p className="text-sm font-semibold text-forest-800 dark:text-forest-200">Email</p>
              </div>
              <a
                href="mailto:info@ithuba.app"
                className="text-sm text-forest-600 dark:text-forest-400 hover:text-forest-900 dark:hover:text-white transition underline underline-offset-2"
              >
                info@ithuba.app
              </a>
            </div>

            <div className="rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-forest-100 dark:bg-forest-800 text-forest-600 dark:text-forest-300">
                  <MapPin size={16} />
                </div>
                <p className="text-sm font-semibold text-forest-800 dark:text-forest-200">Based in</p>
              </div>
              <p className="text-sm text-forest-600 dark:text-forest-400">South Africa</p>
            </div>

            {/* Common topics */}
            <div className="rounded-2xl border border-forest-200 dark:border-forest-700 bg-forest-50 dark:bg-forest-900/60 p-5">
              <p className="text-xs font-semibold uppercase tracking-wider text-forest-500 dark:text-forest-400 mb-3">
                Common topics
              </p>
              <ul className="space-y-2 text-sm text-forest-600 dark:text-forest-400">
                {[
                  "Reporting outdated bursary info",
                  "Questions about submissions",
                  "Listing corrections or updates",
                  "Partnerships or advertising",
                  "General enquiries",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-forest-400 dark:bg-forest-500 shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Contact form */}
          <form onSubmit={handleSubmit} className="space-y-4 lg:col-span-2">
            <div className="rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 p-6 space-y-4">

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className={labelClass}>Your name *</label>
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. Sipho Dlamini"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className={labelClass}>Email address *</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className={inputClass}
                  />
                </div>
              </div>

              <div>
                <label className={labelClass}>Subject *</label>
                <select
                  required
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className={inputClass + " cursor-pointer"}
                >
                  <option value="">Select a topic</option>
                  <option value="Outdated bursary information">Outdated bursary information</option>
                  <option value="Bursary submission question">Bursary submission question</option>
                  <option value="Listing correction">Listing correction or update</option>
                  <option value="Partnership or advertising">Partnership or advertising</option>
                  <option value="General enquiry">General enquiry</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className={labelClass}>Message *</label>
                <textarea
                  required
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Tell us what's on your mind..."
                  className={inputClass + " resize-none"}
                />
              </div>

              {error && (
                <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-forest-600 dark:bg-forest-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-forest-700 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? "Sending…" : <><Send size={15} /> Send message</>}
              </button>

              <p className="text-xs text-center text-forest-400 dark:text-forest-500">
                We typically respond within 2–3 business days.
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
