import { ShieldCheck, BadgeCheck, ExternalLink, RefreshCw } from "lucide-react";

const cues = [
  {
    icon: ShieldCheck,
    text: "Manually reviewed",
    sub: "Every listing is verified before publishing",
  },
  {
    icon: BadgeCheck,
    text: "No application fees",
    sub: "Ithuba is completely free to use",
  },
  {
    icon: ExternalLink,
    text: "Direct apply links",
    sub: "We link straight to the funder — no middlemen",
  },
  {
    icon: RefreshCw,
    text: "Updated regularly",
    sub: "New bursaries added as they open",
  },
];

export default function TrustBar() {
  return (
    <section className="border-b border-forest-200 dark:border-forest-800 bg-forest-50 dark:bg-forest-900/60">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {cues.map((cue, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center gap-2 sm:flex-row sm:items-start sm:text-left sm:gap-3"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-forest-100 dark:bg-forest-800 text-forest-600 dark:text-forest-300">
                <cue.icon size={17} />
              </div>
              <div>
                <p className="text-sm font-semibold text-forest-900 dark:text-forest-50 leading-snug">
                  {cue.text}
                </p>
                <p className="mt-0.5 text-xs leading-5 text-forest-500 dark:text-forest-400 hidden sm:block">
                  {cue.sub}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}