import { useState } from "react";
import { Mail, ArrowRight, CheckCircle, Loader } from "lucide-react";

export default function NewsletterSignup({ variant = "section" }) {
  const [email, setEmail]       = useState("");
  const [name, setName]         = useState("");
  const [status, setStatus]     = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    if (!email) return;
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong");
      setStatus("success");
      setEmail("");
      setName("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  }

  // ── Success state ─────────────────────────────────────────────────────────
  if (status === "success") {
    return (
      <div className={`flex flex-col items-center text-center gap-3 ${variant === "bar" ? "py-2" : "py-6"}`}>
        <CheckCircle size={28} className="text-forest-500 dark:text-forest-400" />
        <div>
          <p className="font-semibold text-forest-900 dark:text-forest-50">You're subscribed!</p>
          <p className="text-sm text-forest-500 dark:text-forest-400 mt-0.5">
            We'll let you know when new bursaries and opportunities are added.
          </p>
        </div>
      </div>
    );
  }

  // ── Bar variant (above footer) ────────────────────────────────────────────
  if (variant === "bar") {
    return (
      <div className="bg-forest-800 dark:bg-forest-900 border-t border-forest-700 dark:border-forest-800">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-forest-700 dark:bg-forest-800 text-gold-400">
                <Mail size={16} />
              </div>
              <div>
                <p className="text-sm font-semibold text-white">Stay in the loop</p>
                <p className="text-xs text-forest-300 dark:text-forest-400">New bursaries and deadlines, straight to your inbox.</p>
              </div>
            </div>
            <div className="flex gap-2 flex-1 sm:max-w-sm">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 rounded-xl border border-forest-600 dark:border-forest-700 bg-forest-700 dark:bg-forest-800 px-4 py-2.5 text-sm text-white placeholder:text-forest-400 outline-none focus:border-gold-400 transition"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="shrink-0 inline-flex items-center gap-1.5 rounded-xl bg-gold-500 px-4 py-2.5 text-sm font-semibold text-forest-950 transition hover:bg-gold-400 disabled:opacity-60"
              >
                {status === "loading"
                  ? <Loader size={15} className="animate-spin" />
                  : <><ArrowRight size={15} /></>
                }
              </button>
            </div>
          </form>
          {status === "error" && (
            <p className="mt-2 text-xs text-red-400">{errorMsg}</p>
          )}
        </div>
      </div>
    );
  }

  // ── Section variant (homepage CTA) ───────────────────────────────────────
  return (
    <div className="mx-auto max-w-xl text-center">
      <div className="flex justify-center mb-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-forest-100 dark:bg-forest-800 text-forest-600 dark:text-forest-300">
          <Mail size={22} />
        </div>
      </div>
      <h3 className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50">
        Never miss a bursary deadline
      </h3>
      <p className="mt-2 text-sm leading-6 text-forest-500 dark:text-forest-400">
        Get notified when new bursaries and scholarships are added. No spam — just opportunities.
      </p>

      <form onSubmit={handleSubmit} className="mt-6 space-y-3">
        <div className="grid gap-3 sm:grid-cols-2">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name (optional)"
            className="w-full rounded-xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 px-4 py-3 text-sm text-forest-900 dark:text-forest-100 outline-none placeholder:text-forest-400 focus:border-forest-500 dark:focus:border-forest-400 transition"
          />
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="w-full rounded-xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 px-4 py-3 text-sm text-forest-900 dark:text-forest-100 outline-none placeholder:text-forest-400 focus:border-forest-500 dark:focus:border-forest-400 transition"
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-forest-600 dark:bg-forest-500 px-6 py-3 text-sm font-semibold text-white transition hover:bg-forest-700 disabled:opacity-60"
        >
          {status === "loading"
            ? <><Loader size={15} className="animate-spin" /> Subscribing...</>
            : <>Subscribe — it's free <ArrowRight size={15} /></>
          }
        </button>
        {status === "error" && (
          <p className="text-xs text-red-500 dark:text-red-400">{errorMsg}</p>
        )}
        <p className="text-xs text-forest-400 dark:text-forest-500">
          No spam. Unsubscribe anytime by emailing mitechsolutionsza@gmail.com
        </p>
      </form>
    </div>
  );
}
