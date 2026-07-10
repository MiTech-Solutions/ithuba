import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useDarkMode } from "../../hooks/useDarkMode";

const navItems = [
  { label: "Bursaries",        path: "/bursaries" },
  { label: "Categories",       path: "/categories" },
  { label: "About",            path: "/about" },
  { label: "Contact",          path: "/contact" },
  { label: "Submit a Bursary", path: "/submit" },
];

export default function Navbar() {
  const [dark, setDark]       = useDarkMode();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // ── #10 Scroll shadow behaviour ───────────────────────────────────────────
  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 12); }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkClass = ({ isActive }) =>
    `relative text-sm font-medium transition-colors duration-200 ${
      isActive
        ? "text-gold-500 dark:text-gold-400"
        : "text-forest-700 dark:text-forest-300 hover:text-forest-900 dark:hover:text-white"
    }`;

  return (
    <header
      className={`sticky top-0 z-40 border-b border-forest-200 dark:border-forest-800 bg-cream/90 dark:bg-forest-950/90 backdrop-blur-xl transition-shadow duration-300 ${
        scrolled ? "shadow-md shadow-forest-900/10 dark:shadow-forest-950/40" : "shadow-none"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link to="/" className="flex items-center group" aria-label="Ithuba home">
          <img
            src="/logo.svg"
            alt="Ithuba Bursary Directory"
            className="h-10 w-auto dark:brightness-[1.15] transition-opacity group-hover:opacity-85"
          />
        </Link>

        {/* Desktop nav — #9 animated sliding underline */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={linkClass}>
              {({ isActive }) => (
                <span className="relative inline-block">
                  {item.label}
                  <span
                    className={`absolute -bottom-[18px] left-0 h-0.5 rounded-full bg-gold-500 dark:bg-gold-400 transition-all duration-300 ease-out ${
                      isActive ? "w-full opacity-100" : "w-0 opacity-0"
                    }`}
                  />
                </span>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 text-forest-600 dark:text-forest-300 transition hover:border-forest-400 dark:hover:border-forest-500"
          >
            {dark
              ? <Sun  size={16} className="transition-transform rotate-0 hover:rotate-12" />
              : <Moon size={16} className="transition-transform rotate-0 hover:-rotate-12" />
            }
          </button>

          <Link
            to="/bursaries"
            className="hidden sm:inline-flex items-center rounded-xl bg-forest-600 dark:bg-forest-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-forest-700 dark:hover:bg-forest-400 hover:shadow-md"
          >
            Browse bursaries
          </Link>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 text-forest-600 dark:text-forest-300 md:hidden transition hover:border-forest-400"
            aria-label="Toggle menu"
          >
            <span className={`transition-transform duration-200 ${menuOpen ? "rotate-90" : "rotate-0"}`}>
              {menuOpen ? <X size={16} /> : <Menu size={16} />}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile menu — slide down */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-forest-200 dark:border-forest-800 bg-cream dark:bg-forest-950 px-4 py-4">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={linkClass}
                onClick={() => setMenuOpen(false)}
              >
                {({ isActive }) => (
                  <span className={isActive ? "text-gold-500 dark:text-gold-400" : ""}>
                    {item.label}
                  </span>
                )}
              </NavLink>
            ))}
            <Link
              to="/bursaries"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center justify-center rounded-xl bg-forest-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-forest-700 transition"
            >
              Browse bursaries
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
