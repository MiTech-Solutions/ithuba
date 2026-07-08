/**
 * Parses a deadline string like "31 March 2027" into a Date object.
 * Returns null if unparseable.
 */
export function parseDeadline(str = "") {
  if (!str || str.toLowerCase() === "varies" || str.toLowerCase() === "ongoing") return null;
  const d = new Date(str);
  return isNaN(d.getTime()) ? null : d;
}

/**
 * Returns days remaining until the deadline.
 * Negative means it has passed.
 * Returns null if no valid deadline.
 */
export function daysUntil(str = "") {
  const d = parseDeadline(str);
  if (!d) return null;
  const now  = new Date();
  now.setHours(0, 0, 0, 0);
  d.setHours(0, 0, 0, 0);
  return Math.round((d - now) / (1000 * 60 * 60 * 24));
}

/**
 * Returns badge config for a deadline string.
 * { label, classes } or null if no badge needed.
 */
export function deadlineBadge(str = "") {
  const days = daysUntil(str);
  if (days === null) return null;
  if (days < 0)   return { label: "Closed",           classes: "bg-red-100 text-red-600 dark:bg-red-900/40 dark:text-red-400" };
  if (days === 0) return { label: "Closes today",      classes: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300 font-semibold" };
  if (days <= 7)  return { label: `${days}d left`,     classes: "bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300" };
  if (days <= 30) return { label: `${days}d left`,     classes: "bg-gold-100 text-gold-700 dark:bg-gold-900/40 dark:text-gold-300" };
  return null; // No badge for far-future deadlines
}

/**
 * Sorts bursaries by deadline — soonest first, no deadline last.
 * Closed bursaries go to the very end.
 */
export function sortByDeadline(bursaries = []) {
  return [...bursaries].sort((a, b) => {
    const dA = daysUntil(a.deadline);
    const dB = daysUntil(b.deadline);

    // Both null — keep original order
    if (dA === null && dB === null) return 0;
    // Null goes after real dates
    if (dA === null) return 1;
    if (dB === null) return -1;
    // Closed (negative) goes last
    if (dA < 0 && dB >= 0) return 1;
    if (dB < 0 && dA >= 0) return -1;
    return dA - dB;
  });
}
