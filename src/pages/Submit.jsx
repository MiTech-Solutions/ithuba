import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Send, CheckCircle } from "lucide-react";
import { useSearchParams } from "react-router-dom";

const FORMSPREE_URL = "https://formspree.io/f/mojowpbw";

const FIELDS           = ["Engineering", "Medicine", "Law", "Business", "IT", "Teaching", "Science", "Arts", "Agriculture", "Social Work", "Finance", "All fields", "Other"];
const FUNDER_TYPES     = ["Government", "Corporate", "NGO", "University", "Other"];
const LEVELS           = ["Undergraduate", "Postgraduate", "TVET", "Masters", "PhD", "All levels"];
const SCHOLARSHIP_TYPES = ["Merit", "Need-based", "Athletic", "Arts", "Community"];

export default function Submit() {
  const [searchParams]              = useSearchParams();
  const [type, setType] = useState(
    searchParams.get("type") === "scholarship" ? "scholarship" :
    searchParams.get("type") === "internship"  ? "internship"  : "bursary"
  );
  const [submitted, setSubmitted]   = useState(false);
  const [loading, setLoading]       = useState(false);
  const [error, setError]           = useState(null);

  // Base fields shared by both
  const [form, setForm] = useState({
    name: "", funder: "", funder_type: "", field_of_study: "", study_level: "",
    province: "", deadline: "", description: "", requirements: "",
    apply_url: "", contact_email: "",
    // Bursary-specific
    value: "",
    // Scholarship-specific
    scholarship_type: "", gpa_requirement: "", renewable: "", duration: "", covers: "",
  });

  // Reset form when type changes
  useEffect(() => {
    setForm({
      name: "", funder: "", funder_type: "", field_of_study: "", study_level: "",
      province: "", deadline: "", description: "", requirements: "",
      apply_url: "", contact_email: "",
      value: "", scholarship_type: "", gpa_requirement: "",
      renewable: "", duration: "", covers: "",
    });
    setError(null);
  }, [type]);

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
        body: JSON.stringify({ ...form, submission_type: type }),
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
          Submission received
        </h2>
        <p className="mt-3 text-sm leading-7 text-forest-600 dark:text-forest-400">
          Thank you for contributing to Ithuba. We'll review your {type} submission and
          add it to the directory if it meets our guidelines. This usually takes 2–5 business days.
        </p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Submit a Bursary or Scholarship | Ithuba</title>
        <meta name="description" content="Know of a bursary or scholarship that should be listed on Ithuba? Submit it for free. Help South African students discover funding opportunities." />
        <link rel="canonical" href="https://ithubahub.co.za/submit" />
        <meta property="og:title" content="Submit a Bursary or Scholarship | Ithuba" />
        <meta property="og:description" content="Submit a South African bursary or scholarship to the Ithuba directory. Free and takes less than two minutes." />
        <meta property="og:url" content="https://ithubahub.co.za/submit" />
        <meta property="og:image" content="https://i.postimg.cc/d3T437Xk/45C7EB18-47F5-4CD3-9509-3A1092AF188E.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Submit a Bursary or Scholarship | Ithuba" />
        <meta name="twitter:description" content="Submit a South African bursary or scholarship to the Ithuba directory for free." />
        <meta name="twitter:image" content="https://i.postimg.cc/d3T437Xk/45C7EB18-47F5-4CD3-9509-3A1092AF188E.png" />
      </Helmet>

      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-forest-500 dark:text-forest-400">Contribute</p>
          <h1 className="mt-2 font-display text-3xl font-semibold text-forest-900 dark:text-forest-50">
            Submit an opportunity
          </h1>
          <p className="mt-3 text-sm leading-7 text-forest-600 dark:text-forest-400">
            Know of a bursary or scholarship that should be listed here? Fill in the details below and we'll review it within a few business days. All submissions are free.
          </p>
        </div>

        {/* Type toggle */}
        <div className="mb-6 flex rounded-2xl border border-forest-200 dark:border-forest-700 bg-forest-50 dark:bg-forest-900 p-1.5 gap-1.5">
          <button type="button" onClick={() => setType("bursary")}
            className={`flex-1 rounded-xl py-2.5 text-sm font-semibold transition ${type === "bursary" ? "bg-forest-600 dark:bg-forest-500 text-white shadow-sm" : "text-forest-600 dark:text-forest-300 hover:bg-forest-100 dark:hover:bg-forest-800"}`}>
            Bursary
          </button>
          <button type="button" onClick={() => setType("scholarship")}
            className={`flex-1 rounded-xl py-2.5 text-sm font-semibold transition ${type === "scholarship" ? "bg-forest-600 dark:bg-forest-500 text-white shadow-sm" : "text-forest-600 dark:text-forest-300 hover:bg-forest-100 dark:hover:bg-forest-800"}`}>
            Scholarship
          </button>
          <button type="button" onClick={() => setType("internship")}
            className={`flex-1 rounded-xl py-2.5 text-sm font-semibold transition ${type === "internship" ? "bg-forest-600 dark:bg-forest-500 text-white shadow-sm" : "text-forest-600 dark:text-forest-300 hover:bg-forest-100 dark:hover:bg-forest-800"}`}>
            Internship
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Shared fields */}
          <div className="rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 p-6 space-y-5">
            <p className="text-sm font-semibold text-forest-800 dark:text-forest-200">
              {type === "bursary" ? "Bursary" : "Scholarship"} details
            </p>

            <div>
              <label className={labelClass}>{type === "bursary" ? "Bursary" : "Scholarship"} name *</label>
              <input required name="name" value={form.name} onChange={handleChange}
                placeholder={type === "bursary" ? "e.g. Sasol Bursary Programme" : "e.g. Rhodes Scholarship South Africa"}
                className={inputClass} />
            </div>

            <div>
              <label className={labelClass}>Funder / Organisation *</label>
              <input required name="funder" value={form.funder} onChange={handleChange}
                placeholder="e.g. Sasol Limited"
                className={inputClass} />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className={labelClass}>Funder type *</label>
                <select required name="funder_type" value={form.funder_type} onChange={handleChange} className={inputClass + " cursor-pointer"}>
                  <option value="">Select type</option>
                  {FUNDER_TYPES.map((t) => <option key={t} value={t.toLowerCase()}>{t}</option>)}
                </select>
              </div>
              <div>
                <label className={labelClass}>Study level *</label>
                <select required name="study_level" value={form.study_level} onChange={handleChange} className={inputClass + " cursor-pointer"}>
                  <option value="">Select level</option>
                  {LEVELS.map((l) => <option key={l} value={l}>{l}</option>)}
                </select>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className={labelClass}>Field of study *</label>
                <select required name="field_of_study" value={form.field_of_study} onChange={handleChange} className={inputClass + " cursor-pointer"}>
                  <option value="">Select field</option>
                  {FIELDS.map((f) => <option key={f} value={f}>{f}</option>)}
                </select>
              </div>
              <div>
                <label className={labelClass}>Province</label>
                <input name="province" value={form.province} onChange={handleChange}
                  placeholder="e.g. National or Gauteng" className={inputClass} />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {/* Bursary: value field | Scholarship: covers field */}
              {type === "bursary" ? (
                <div>
                  <label className={labelClass}>Bursary value</label>
                  <input name="value" value={form.value} onChange={handleChange}
                    placeholder="e.g. Full tuition + stipend" className={inputClass} />
                </div>
              ) : (
                <div>
                  <label className={labelClass}>What it covers</label>
                  <input name="covers" value={form.covers} onChange={handleChange}
                    placeholder="e.g. Tuition only" className={inputClass} />
                </div>
              )}
              <div>
                <label className={labelClass}>Application deadline</label>
                <input name="deadline" value={form.deadline} onChange={handleChange}
                  placeholder="e.g. 30 September 2026" className={inputClass} />
              </div>
            </div>

            {/* Scholarship-specific fields */}
            {type === "scholarship" && (
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className={labelClass}>Scholarship type *</label>
                  <select required name="scholarship_type" value={form.scholarship_type} onChange={handleChange} className={inputClass + " cursor-pointer"}>
                    <option value="">Select type</option>
                    {SCHOLARSHIP_TYPES.map((t) => <option key={t} value={t.toLowerCase()}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className={labelClass}>Minimum GPA / average</label>
                  <input name="gpa_requirement" value={form.gpa_requirement} onChange={handleChange}
                    placeholder="e.g. 70% minimum" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Duration</label>
                  <input name="duration" value={form.duration} onChange={handleChange}
                    placeholder="e.g. Full degree or 2 years" className={inputClass} />
                </div>
                <div>
                  <label className={labelClass}>Renewable?</label>
                  <select name="renewable" value={form.renewable} onChange={handleChange} className={inputClass + " cursor-pointer"}>
                    <option value="">Select</option>
                    <option value="true">Yes — renewable each year</option>
                    <option value="false">No — once-off award</option>
                  </select>
                </div>
              </div>
            )}

            <div>
              <label className={labelClass}>Description *</label>
              <textarea required name="description" value={form.description} onChange={handleChange} rows={3}
                placeholder={`Brief description of the ${type}, what it covers, and who it's for.`}
                className={inputClass + " resize-none"} />
            </div>

            <div>
              <label className={labelClass}>Requirements</label>
              <textarea name="requirements" value={form.requirements} onChange={handleChange} rows={3}
                placeholder="Eligibility criteria, academic requirements, citizenship requirements, etc. Separate with semicolons."
                className={inputClass + " resize-none"} />
            </div>

            <div>
              <label className={labelClass}>Application URL *</label>
              <input required name="apply_url" value={form.apply_url} onChange={handleChange}
                placeholder="https://..." type="url" className={inputClass} />
            </div>
          </div>

          {/* Contact */}
          <div className="rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 p-6">
            <p className="text-sm font-semibold text-forest-800 dark:text-forest-200 mb-4">Your contact</p>
            <div>
              <label className={labelClass}>Your email address *</label>
              <input required name="contact_email" value={form.contact_email} onChange={handleChange}
                type="email" placeholder="we'll only use this if we need to clarify details"
                className={inputClass} />
            </div>
          </div>

          {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-forest-600 dark:bg-forest-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-forest-700 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? "Submitting…" : <><Send size={15} /> Submit {type}</>}
          </button>

          <p className="text-xs text-center text-forest-500 dark:text-forest-500">
            Submissions are reviewed before publishing. We reserve the right to edit or decline listings that don't meet our guidelines.
          </p>
        </form>
      </div>
    </>
  );
}
