import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Search, BookOpen, Users, Star, Briefcase, GraduationCap, MapPin } from "lucide-react";
import { useBursaries } from "../hooks/useBursaries";
import { matchesCategory } from "../data/categories";
import BursaryCard from "../components/bursaries/BursaryCard";
import TrustBar from "../components/home/TrustBar";

const HERO_IMG         = "https://images.unsplash.com/photo-1497271679421-ce9c3d6a31da?q=80&w=1471&auto=format&fit=crop";
const HOW_IT_WORKS_IMG = "https://images.unsplash.com/photo-1683530014248-a085edbfc942?q=80&w=1470&auto=format&fit=crop";
const CATEGORIES_IMG   = "https://cdn.pixabay.com/photo/2014/10/14/20/14/library-488690_960_720.jpg";

// ── Animated count-up hook ────────────────────────────────────────────────────
function useCountUp(target, duration = 1800) {
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);

  useEffect(() => {
    if (target === null) return;
    const start     = performance.now();
    const from      = 0;
    const to        = typeof target === "number" ? target : null;
    if (to === null) { setValue(target); return; }

    function tick(now) {
      const elapsed  = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased    = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(from + (to - from) * eased));
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, duration]);

  return value;
}

// ── Stat item — slides in from right, counts up ───────────────────────────────
function StatItem({ label, target, suffix = "", delay = 0 }) {
  const ref                   = useRef(null);
  const [visible, setVisible] = useState(false);
  const [pulsed, setPulsed]   = useState(false);
  const count                 = useCountUp(visible ? (typeof target === "number" ? target : null) : null);

  // Fire pulse once the count reaches the target
  useEffect(() => {
    if (typeof target === "number" && count === target && count > 0 && !pulsed) {
      setPulsed(true);
    }
  }, [count, target, pulsed]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="text-center transition-all duration-700"
      style={{
        opacity:         visible ? 1 : 0,
        transform:       visible ? "translateX(0)" : "translateX(40px)",
        transitionDelay: `${delay}ms`,
      }}
    >
      <p
        className={`text-3xl font-bold text-forest-800 dark:text-forest-100 tabular-nums ${
          pulsed ? "animate-[pulse-once_0.45s_ease_forwards]" : ""
        }`}
      >
        {typeof target === "number" ? count : target}{suffix}
      </p>
      <p className="text-xs text-forest-500 dark:text-forest-400 mt-1 tracking-wide">{label}</p>
    </div>
  );
}

// ── Stats bar ─────────────────────────────────────────────────────────────────
function StatsBar({ total }) {
  return (
    <section className="border-b border-forest-200 dark:border-forest-800 bg-white dark:bg-forest-900">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-6 divide-x divide-forest-100 dark:divide-forest-800">
          <StatItem label="Bursaries listed" target={total ?? 0} delay={0} />
          <StatItem label="Funder types"     target={3}          delay={150} />
          <StatItem label="Fields of study"  target={12}         suffix="+" delay={300} />
        </div>
      </div>
    </section>
  );
}

const HIGHLIGHT_CATEGORIES = [
  { dimension: "type",     slug: "government",   label: "Government",   icon: Briefcase },
  { dimension: "type",     slug: "corporate",    label: "Corporate",    icon: Briefcase },
  { dimension: "field",    slug: "engineering",  label: "Engineering",  icon: GraduationCap },
  { dimension: "field",    slug: "finance",      label: "Finance",      icon: GraduationCap },
  { dimension: "field",    slug: "it",           label: "IT",           icon: GraduationCap },
  { dimension: "field",    slug: "medicine",     label: "Medicine",     icon: GraduationCap },
  { dimension: "province", slug: "gauteng",      label: "Gauteng",      icon: MapPin },
  { dimension: "province", slug: "western-cape", label: "Western Cape", icon: MapPin },
];

export default function Home() {
  const { bursaries, loading } = useBursaries();
  const featured = bursaries.filter((b) => b.featured === "true").slice(0, 3);

  function countFor(dimension, slug) {
    if (loading) return null;
    return bursaries.filter((b) => matchesCategory(b, dimension, slug)).length;
  }

  return (
    <>
      <Helmet>
        <title>Ithuba — South Africa's Free Bursary Directory</title>
        <meta name="description" content="Find bursaries and funding opportunities for South African students. Search government, corporate, and NGO bursaries by field of study, province, and study level. Free and updated regularly." />
        <link rel="canonical" href="https://ithubahub.co.za/" />
        <meta property="og:title" content="Ithuba — South Africa's Free Bursary Directory" />
        <meta property="og:description" content="Find bursaries and funding opportunities for South African students. Free, searchable, and updated regularly." />
        <meta property="og:url" content="https://ithubahub.co.za/" />
        <meta property="og:image" content={HERO_IMG} />
      </Helmet>

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-forest-900 dark:bg-forest-950 min-h-[520px] flex items-center">
        <div className="absolute inset-0">
          <img
            src={HERO_IMG}
            alt=""
            role="presentation"
            loading="eager"
            decoding="async"
            className="h-full w-full object-cover object-center opacity-35 dark:opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-900/95 via-forest-900/75 to-forest-900/30 dark:from-forest-950/98 dark:via-forest-950/80 dark:to-forest-950/40" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-gold-400/30 bg-gold-400/10 px-4 py-1.5 text-sm text-gold-300 animate-[fadeSlideUp_0.5s_ease_0.1s_both]">
                <Star size={13} fill="currentColor" />
                Free for all South African students
            </div>
            <h1 className="mt-5 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl animate-[fadeSlideUp_0.5s_ease_0.25s_both]">
              Search hundreds of
            <span className="block text-gold-400">South African bursaries,</span>
            <span className="block text-white/90 text-3xl sm:text-4xl lg:text-5xl font-normal mt-1">
              internships &amp; learnerships — for free.
            </span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-8 text-forest-200 animate-[fadeSlideUp_0.5s_ease_0.4s_both]">
              Ithuba is South Africa's free bursary directory. Government, corporate, and NGO funding — all in one place, verified and updated regularly. No fees. No sign-up. Just opportunity.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center animate-[fadeSlideUp_0.5s_ease_0.55s_both]">
              <Link to="/bursaries" className="inline-flex items-center justify-center gap-2 rounded-xl bg-gold-500 px-6 py-3.5 text-sm font-semibold text-forest-950 transition hover:bg-gold-400 hover:shadow-lg hover:shadow-gold-500/25">
                <Search size={16} /> Browse all bursaries
              </Link>
              <Link to="/submit" className="inline-flex items-center justify-center gap-2 rounded-xl border border-forest-400/50 px-6 py-3.5 text-sm font-medium text-forest-100 transition hover:bg-forest-700/50">
                Submit a bursary <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <TrustBar />
      {/* ── Stats bar ────────────────────────────────────────────────── */}
      <StatsBar total={loading ? null : bursaries.length} />

      {/* ── Featured bursaries ───────────────────────────────────────── */}
      {(loading || featured.length > 0) && (
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-forest-500 dark:text-forest-400">Featured</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-forest-900 dark:text-forest-50 sm:text-3xl">
                Highlighted opportunities
              </h2>
            </div>
            <Link to="/bursaries" className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-forest-600 dark:text-forest-400 hover:text-forest-900 dark:hover:text-white transition">
              View all <ArrowRight size={14} />
            </Link>
          </div>
          {loading ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => <div key={i} className="h-48 rounded-2xl bg-forest-100 dark:bg-forest-800 animate-pulse" />)}
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((b, i) => <BursaryCard key={b.id || i} bursary={b} index={i} />)}
            </div>
          )}
          <div className="mt-8 text-center">
            <Link to="/bursaries" className="inline-flex items-center gap-2 rounded-xl bg-forest-600 dark:bg-forest-500 px-6 py-3 text-sm font-medium text-white transition hover:bg-forest-700">
              Browse all bursaries <ArrowRight size={15} />
            </Link>
          </div>
        </section>
      )}

      {/* ── How it works — image + steps ─────────────────────────────── */}
      <section className="border-t border-forest-200 dark:border-forest-800 bg-forest-50 dark:bg-forest-900/40">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">

            {/* Image */}
            <div className="relative rounded-3xl overflow-hidden h-72 lg:h-[440px] shadow-lg">
              <img
                src={HOW_IT_WORKS_IMG}
                alt="Student studying"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-forest-900/15 dark:bg-forest-900/40" />
            </div>

            {/* Steps */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-forest-500 dark:text-forest-400">How it works</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-forest-900 dark:text-forest-50 sm:text-3xl">
                Find your funding in three steps.
              </h2>
              <div className="mt-8 space-y-8">
                {[
                  { step: "01", icon: Search,   title: "Search & filter",  body: "Browse by field of study, province, funder type, or study level to find bursaries relevant to you." },
                  { step: "02", icon: BookOpen, title: "Read the details",  body: "Each listing shows the bursary value, deadline, requirements, and a direct link to the funder's application." },
                  { step: "03", icon: Users,    title: "Apply directly",    body: "Ithuba links you directly to the funder. No middlemen, no fees — just the opportunity." },
                ].map((item) => (
                  <div key={item.step} className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-forest-100 dark:bg-forest-800 text-forest-600 dark:text-forest-300">
                      <item.icon size={18} />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-gold-500 dark:text-gold-400 mb-1">{item.step}</p>
                      <h3 className="font-semibold text-forest-900 dark:text-forest-50">{item.title}</h3>
                      <p className="mt-1.5 text-sm leading-6 text-forest-600 dark:text-forest-400">{item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Browse by category — with subtle image background ────────── */}
      <section className="relative overflow-hidden border-t border-forest-200 dark:border-forest-800">
        <div className="absolute inset-0">
          <img
            src={CATEGORIES_IMG}
            alt=""
            role="presentation"
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-center opacity-8 dark:opacity-5"
          />
          <div className="absolute inset-0 bg-white/95 dark:bg-forest-950/97" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-forest-500 dark:text-forest-400">Browse by category</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-forest-900 dark:text-forest-50 sm:text-3xl">
                Find what's relevant to you.
              </h2>
            </div>
            <Link to="/categories" className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-forest-600 dark:text-forest-400 hover:text-forest-900 dark:hover:text-white transition">
              All categories <ArrowRight size={14} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {HIGHLIGHT_CATEGORIES.map((cat) => {
              const count = countFor(cat.dimension, cat.slug);
              return (
                <Link
                  key={`${cat.dimension}-${cat.slug}`}
                  to={`/bursaries/${cat.dimension}/${cat.slug}`}
                  className="group flex flex-col rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 p-4 transition hover:border-forest-400 dark:hover:border-forest-500 hover:shadow-sm"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-forest-100 dark:bg-forest-800 text-forest-600 dark:text-forest-300">
                      <cat.icon size={15} />
                    </div>
                    {count !== null ? (
                      <span className="inline-flex items-center rounded-full bg-forest-100 dark:bg-forest-800 px-2 py-0.5 text-xs font-semibold text-forest-700 dark:text-forest-300">
                        {count}
                      </span>
                    ) : (
                      <span className="h-5 w-7 rounded-full bg-forest-100 dark:bg-forest-800 animate-pulse" />
                    )}
                  </div>
                  <p className="text-sm font-semibold text-forest-900 dark:text-forest-50 leading-snug">{cat.label}</p>
                  <p className="mt-0.5 text-xs text-forest-500 dark:text-forest-400 capitalize">
                    {cat.dimension === "type" ? "Funder type" : cat.dimension === "field" ? "Field of study" : "Province"}
                  </p>
                  <div className="mt-3 flex items-center gap-1 text-xs font-medium text-forest-600 dark:text-forest-400 group-hover:text-forest-900 dark:group-hover:text-white transition">
                    Browse <ArrowRight size={11} className="transition-transform group-hover:translate-x-0.5" />
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="mt-6 text-center sm:hidden">
            <Link to="/categories" className="inline-flex items-center gap-1.5 text-sm font-medium text-forest-600 dark:text-forest-400 hover:text-forest-900 dark:hover:text-white transition">
              View all categories <ArrowRight size={13} />
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────── */}
      <section className="border-t border-forest-200 dark:border-forest-800 bg-forest-50 dark:bg-forest-900/50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl font-semibold text-forest-900 dark:text-forest-50 sm:text-3xl">
            Know of a bursary we're missing?
          </h2>
          <p className="mt-3 text-forest-600 dark:text-forest-400 max-w-md mx-auto text-sm leading-7">
            Help other students by submitting a bursary to our directory. It's free and takes less than two minutes.
          </p>
          <Link to="/submit" className="mt-6 inline-flex items-center gap-2 rounded-xl bg-gold-500 px-6 py-3 text-sm font-semibold text-forest-950 transition hover:bg-gold-400">
            Submit a bursary <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
