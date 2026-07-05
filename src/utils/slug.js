/**
 * Converts a bursary name to a URL-friendly slug.
 * e.g. "Allan Gray Orbis Foundation Bursary" → "allan-gray-orbis-foundation-bursary"
 */
export function slugify(str = "") {
  return str
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

/**
 * Finds a bursary from a list by matching its slug.
 */
export function findBySlug(bursaries = [], slug = "") {
  return bursaries.find((b) => slugify(b.name) === slug) || null;
}
