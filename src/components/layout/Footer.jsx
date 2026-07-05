import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-forest-200 dark:border-forest-800 bg-forest-50 dark:bg-forest-950">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-forest-600 dark:bg-forest-500">
                <BookOpen size={16} className="text-white" />
              </div>
              <span className="font-display text-xl font-semibold text-forest-900 dark:text-forest-50">
                Ithuba
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-6 text-forest-600 dark:text-forest-400">
              South Africa's free bursary directory. Helping students find
              funding opportunities to open doors to education.
            </p>
            <p className="mt-4 text-xs text-forest-500 dark:text-forest-500">
              Ithuba means <em>opportunity</em> in Zulu and Xhosa.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-forest-500 dark:text-forest-500">
              Explore
            </p>
            <ul className="mt-4 space-y-3 text-sm text-forest-600 dark:text-forest-400">
              <li><Link to="/bursaries" className="hover:text-forest-900 dark:hover:text-white transition">All Bursaries</Link></li>
              <li><Link to="/bursaries?type=government" className="hover:text-forest-900 dark:hover:text-white transition">Government Bursaries</Link></li>
              <li><Link to="/bursaries?type=corporate" className="hover:text-forest-900 dark:hover:text-white transition">Corporate Bursaries</Link></li>
              <li><Link to="/bursaries?type=ngo" className="hover:text-forest-900 dark:hover:text-white transition">NGO Bursaries</Link></li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-forest-500 dark:text-forest-500">
              Site
            </p>
            <ul className="mt-4 space-y-3 text-sm text-forest-600 dark:text-forest-400">
              <li><Link to="/about" className="hover:text-forest-900 dark:hover:text-white transition">About</Link></li>
              <li><Link to="/submit" className="hover:text-forest-900 dark:hover:text-white transition">Submit a Bursary</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-forest-900 dark:hover:text-white transition">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-forest-900 dark:hover:text-white transition">Terms</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-forest-200 dark:border-forest-800 pt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <p className="text-xs text-forest-500 dark:text-forest-500">
            © {new Date().getFullYear()} Ithuba. All rights reserved.
          </p>
          <p className="text-xs text-forest-500 dark:text-forest-500">
            Bursary information is provided for reference only. Always verify
            details directly with the funder.
          </p>
        </div>
      </div>
    </footer>
  );
}
