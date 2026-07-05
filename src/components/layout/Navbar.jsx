import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Sun, Moon, Menu, X, BookOpen } from "lucide-react";
import { useDarkMode } from "../../hooks/useDarkMode";

const navItems = [
  { label: "Bursaries", path: "/bursaries" },
  { label: "Categories", path: "/categories" },
  { label: "About", path: "/about" },
  { label: "Submit a Bursary", path: "/submit" },
];

export default function Navbar() {
  const [dark, setDark] = useDarkMode();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `text-sm font-medium transition-colors ${
      isActive
        ? "text-gold-500 dark:text-gold-400"
        : "text-forest-700 dark:text-forest-300 hover:text-forest-900 dark:hover:text-white"
    }`;

  return (
    <header className="sticky top-0 z-40 border-b border-forest-200 dark:border-forest-800 bg-cream/90 dark:bg-forest-950/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-forest-600 dark:bg-forest-500 transition group-hover:bg-forest-700 dark:group-hover:bg-forest-400">
            <BookOpen size={16} className="text-white" />
          </div>
          <span className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50 tracking-tight">
            Ithuba
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={() => setDark(!dark)}
            aria-label="Toggle theme"
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 text-forest-600 dark:text-forest-300 transition hover:border-forest-400 dark:hover:border-forest-500"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Browse CTA */}
          <Link
            to="/bursaries"
            className="hidden sm:inline-flex items-center rounded-xl bg-forest-600 dark:bg-forest-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-forest-700 dark:hover:bg-forest-400"
          >
            Browse bursaries
          </Link>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 text-forest-600 dark:text-forest-300 md:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-forest-200 dark:border-forest-800 bg-cream dark:bg-forest-950 px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={linkClass}
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/bursaries"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center justify-center rounded-xl bg-forest-600 px-4 py-2.5 text-sm font-medium text-white"
            >
              Browse bursaries
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
