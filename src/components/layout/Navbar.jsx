import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Sun, Moon, Menu, X, ChevronDown } from "lucide-react";
import { useDarkMode } from "../../hooks/useDarkMode";

const navItems = [
  { label: "Categories",       path: "/categories" },
  { label: "About",            path: "/about" },
  { label: "Contact",          path: "/contact" },
  { label: "Submit",           path: "/submit" },
];

const opportunityItems = [
  { label: "Bursaries",    path: "/bursaries",    description: "Government, corporate & NGO funding" },
  { label: "Scholarships", path: "/scholarships", description: "Merit & need-based awards" },
  { label: "Internships",  path: "/internships",  description: "Graduate, student & learnerships" },
];

const resourceItems = [
  { label: "Guides",   path: "/guides",   description: "Step-by-step application guides" },
  { label: "Articles", path: "/articles", description: "In-depth funding articles" },
];

export default function Navbar() {
  const [dark, setDark]               = useDarkMode();
  const [menuOpen, setMenuOpen]       = useState(false);
  const [scrolled, setScrolled]       = useState(false);
  const [dropdownOpen, setDropdown]   = useState(false);
  const [oppDropdown, setOppDropdown] = useState(false);
  const dropdownRef                   = useRef(null);
  const oppDropdownRef                = useRef(null);
  const location                      = useLocation();

  const isResourceActive    = resourceItems.some((r) => location.pathname.startsWith(r.path));
  const isOpportunityActive = opportunityItems.some((o) => location.pathname.startsWith(o.path));

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 12); }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClick(e) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdown(false);
      }
      if (oppDropdownRef.current && !oppDropdownRef.current.contains(e.target)) {
        setOppDropdown(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Close dropdowns on route change
  useEffect(() => { setDropdown(false); setOppDropdown(false); setMenuOpen(false); }, [location.pathname]);

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
            alt="Ithuba Student Opportunities"
            className="h-10 w-auto dark:brightness-[1.15] transition-opacity group-hover:opacity-85"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">

          {/* Opportunities dropdown */}
          <div ref={oppDropdownRef} className="relative">
            <button
              onClick={() => setOppDropdown(!oppDropdown)}
              className={`relative inline-flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${
                isOpportunityActive
                  ? "text-gold-500 dark:text-gold-400"
                  : "text-forest-700 dark:text-forest-300 hover:text-forest-900 dark:hover:text-white"
              }`}
            >
              Opportunities
              <ChevronDown size={14} className={`transition-transform duration-200 ${oppDropdown ? "rotate-180" : "rotate-0"}`} />
              <span className={`absolute -bottom-[18px] left-0 h-0.5 rounded-full bg-gold-500 dark:bg-gold-400 transition-all duration-300 ease-out ${isOpportunityActive ? "w-full opacity-100" : "w-0 opacity-0"}`} />
            </button>
            {oppDropdown && (
              <div className="absolute top-[calc(100%+16px)] left-1/2 -translate-x-1/2 w-56 rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 shadow-xl shadow-forest-900/10 dark:shadow-forest-950/40 overflow-hidden animate-[fadeSlideUp_0.2s_ease]">
                {opportunityItems.map((item) => (
                  <Link key={item.path} to={item.path}
                    className="flex flex-col px-4 py-3.5 hover:bg-forest-50 dark:hover:bg-forest-800 transition border-b border-forest-100 dark:border-forest-800 last:border-0"
                  >
                    <span className="text-sm font-semibold text-forest-900 dark:text-forest-50">{item.label}</span>
                    <span className="text-xs text-forest-500 dark:text-forest-400 mt-0.5">{item.description}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navItems.map((item) => (
            <NavLink key={item.path} to={item.path} className={linkClass}>
              {({ isActive }) => (
                <span className="relative inline-block">
                  {item.label}
                  <span className={`absolute -bottom-[18px] left-0 h-0.5 rounded-full bg-gold-500 dark:bg-gold-400 transition-all duration-300 ease-out ${isActive ? "w-full opacity-100" : "w-0 opacity-0"}`} />
                </span>
              )}
            </NavLink>
          ))}

          {/* Resources dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdown(!dropdownOpen)}
              className={`relative inline-flex items-center gap-1 text-sm font-medium transition-colors duration-200 ${
                isResourceActive
                  ? "text-gold-500 dark:text-gold-400"
                  : "text-forest-700 dark:text-forest-300 hover:text-forest-900 dark:hover:text-white"
              }`}
            >
              Resources
              <ChevronDown
                size={14}
                className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : "rotate-0"}`}
              />
              {/* Active underline */}
              <span className={`absolute -bottom-[18px] left-0 h-0.5 rounded-full bg-gold-500 dark:bg-gold-400 transition-all duration-300 ease-out ${isResourceActive ? "w-full opacity-100" : "w-0 opacity-0"}`} />
            </button>

            {/* Dropdown panel */}
            {dropdownOpen && (
              <div className="absolute top-[calc(100%+16px)] left-1/2 -translate-x-1/2 w-52 rounded-2xl border border-forest-200 dark:border-forest-700 bg-white dark:bg-forest-900 shadow-xl shadow-forest-900/10 dark:shadow-forest-950/40 overflow-hidden animate-[fadeSlideUp_0.2s_ease]">
                {resourceItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="flex flex-col px-4 py-3.5 hover:bg-forest-50 dark:hover:bg-forest-800 transition border-b border-forest-100 dark:border-forest-800 last:border-0"
                  >
                    <span className="text-sm font-semibold text-forest-900 dark:text-forest-50">{item.label}</span>
                    <span className="text-xs text-forest-500 dark:text-forest-400 mt-0.5">{item.description}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
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
            Browse opportunities
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

      {/* Mobile menu */}
      <div className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}>
        <div className="border-t border-forest-200 dark:border-forest-800 bg-cream dark:bg-forest-950 px-4 py-4">
          <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-3 py-2.5 rounded-xl text-sm font-medium transition ${
                    isActive
                      ? "bg-forest-100 dark:bg-forest-800 text-gold-500 dark:text-gold-400"
                      : "text-forest-700 dark:text-forest-300 hover:bg-forest-50 dark:hover:bg-forest-800"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            {/* Opportunities section in mobile */}
            <div className="mt-1 border-t border-forest-100 dark:border-forest-800 pt-2">
              <p className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-forest-400 dark:text-forest-500">Opportunities</p>
              {opportunityItems.map((item) => (
                <NavLink key={item.path} to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-2.5 rounded-xl text-sm font-medium transition flex items-center justify-between ${
                      isActive
                        ? "bg-forest-100 dark:bg-forest-800 text-gold-500 dark:text-gold-400"
                        : "text-forest-700 dark:text-forest-300 hover:bg-forest-50 dark:hover:bg-forest-800"
                    }`
                  }
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-forest-400 dark:text-forest-500">{item.description}</span>
                </NavLink>
              ))}
            </div>

            {/* Resources section in mobile */}
            <div className="mt-1 border-t border-forest-100 dark:border-forest-800 pt-2">
              <p className="px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-forest-400 dark:text-forest-500">Resources</p>
              {resourceItems.map((item) => (
                <NavLink key={item.path} to={item.path}
                  className={({ isActive }) =>
                    `px-3 py-2.5 rounded-xl text-sm font-medium transition flex items-center justify-between ${
                      isActive
                        ? "bg-forest-100 dark:bg-forest-800 text-gold-500 dark:text-gold-400"
                        : "text-forest-700 dark:text-forest-300 hover:bg-forest-50 dark:hover:bg-forest-800"
                    }`
                  }
                >
                  <span>{item.label}</span>
                  <span className="text-xs text-forest-400 dark:text-forest-500">{item.description}</span>
                </NavLink>
              ))}
            </div>

            <Link
              to="/internships"
              className="mt-2 inline-flex items-center justify-center rounded-xl bg-forest-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-forest-700 transition"
            >
              Browse opportunities
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
