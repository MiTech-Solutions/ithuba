// Single source of truth for all category definitions.
// Used by OpportunityPage, CategoryPage, Categories, Footer, and sitemap.

export const CATEGORY_TYPES = {
  // ── Bursary funder types ──────────────────────────────────────────────────
  bursary_type: {
    label: "By bursary funder type",
    param: "bursary-type",
    kind: "bursary",
    filterKey: "funder_type",
    values: [
      {
        slug: "government",
        label: "Government Bursaries",
        description: "Bursaries funded by South African government departments and state-owned entities including NSFAS, Eskom, Transnet, and department-specific programmes.",
        metaDescription: "Browse South African government bursaries including NSFAS, Eskom, Transnet, and department-funded programmes. Free, searchable directory updated regularly.",
      },
      {
        slug: "corporate",
        label: "Corporate Bursaries",
        description: "Bursaries offered by South African and multinational companies. Often include vacation work, mentorship, and employment opportunities after graduation.",
        metaDescription: "Browse corporate bursaries in South Africa from companies like Sasol, Anglo American, Standard Bank, and MTN. Find funding with employment pathways.",
      },
      {
        slug: "ngo",
        label: "NGO & Foundation Bursaries",
        description: "Bursaries from non-governmental organisations, foundations, and trusts. Often target specific demographics, fields of study, or regions.",
        metaDescription: "Browse NGO and foundation bursaries in South Africa. Find funding from the Allan Gray Orbis Foundation and other non-profit funders.",
      },
    ],
  },

  // ── Scholarship types ─────────────────────────────────────────────────────
  scholarship_type: {
    label: "By scholarship type",
    param: "scholarship-type",
    kind: "scholarship",
    filterKey: "scholarship_type",
    values: [
      {
        slug: "merit",
        label: "Merit Scholarships",
        description: "Scholarships awarded based on academic excellence. No work-back obligation. Open to students with outstanding results regardless of financial need.",
        metaDescription: "Browse merit-based scholarships in South Africa. Find scholarships awarded for academic excellence with no work-back obligation.",
      },
      {
        slug: "need-based",
        label: "Need-Based Scholarships",
        description: "Scholarships that consider financial need as a primary factor. Often cover full tuition and living costs for students from lower-income households.",
        metaDescription: "Browse need-based scholarships in South Africa for students who need financial support to access higher education.",
      },
      {
        slug: "community",
        label: "Community Scholarships",
        description: "Scholarships for students who demonstrate a commitment to community service and giving back. Often tied to leadership development programmes.",
        metaDescription: "Browse community scholarships in South Africa for students with a strong record of community service and leadership.",
      },
      {
        slug: "arts",
        label: "Arts Scholarships",
        description: "Scholarships for students pursuing creative disciplines — fine arts, music, drama, film, and design. Often include portfolio requirements.",
        metaDescription: "Browse arts scholarships in South Africa for students studying creative disciplines including fine arts, music, drama, and design.",
      },
    ],
  },

  // ── Field of study (unified — applies to both) ────────────────────────────
  field: {
    label: "By field of study",
    param: "field",
    kind: "both",
    filterKey: "field_of_study",
    values: [
      { slug: "engineering", label: "Engineering",        description: "Bursaries and scholarships for civil, mechanical, electrical, chemical, and mining engineering students.",    metaDescription: "Find engineering bursaries and scholarships in South Africa. Browse funding from Eskom, Sasol, Transnet, and more." },
      { slug: "finance",     label: "Finance & Accounting", description: "Funding for students studying finance, accounting, auditing, actuarial science, and commerce.",             metaDescription: "Browse finance and accounting bursaries and scholarships in South Africa from banks, audit firms, and financial institutions." },
      { slug: "it",          label: "IT & Technology",    description: "Bursaries and scholarships for computer science, software engineering, cybersecurity, and IT students.",       metaDescription: "Find IT and technology bursaries and scholarships in South Africa from MTN, Telkom, Vodacom, and tech companies." },
      { slug: "medicine",    label: "Medicine & Health",  description: "Funding for medicine, nursing, pharmacy, physiotherapy, and other health sciences students.",                  metaDescription: "Browse medicine and health bursaries and scholarships in South Africa for medical, nursing, and allied health students." },
      { slug: "business",    label: "Business",           description: "Bursaries and scholarships for business management, entrepreneurship, marketing, and related disciplines.",    metaDescription: "Browse business and management bursaries and scholarships in South Africa." },
      { slug: "law",         label: "Law",                description: "Funding for students pursuing LLB and other law qualifications at South African universities.",               metaDescription: "Find law bursaries and scholarships in South Africa for LLB and legal studies students." },
      { slug: "teaching",    label: "Teaching & Education", description: "Bursaries and scholarships for students pursuing teaching qualifications and education degrees.",           metaDescription: "Browse teaching bursaries and scholarships in South Africa for students pursuing education degrees." },
      { slug: "science",     label: "Science",            description: "Funding for students studying natural sciences, mathematics, physics, chemistry, and STEM fields.",            metaDescription: "Find science bursaries and scholarships in South Africa for students in STEM fields." },
    ],
  },

  // ── Province (bursaries only — scholarships are mostly national) ──────────
  province: {
    label: "By province",
    param: "province",
    kind: "bursary",
    filterKey: "province",
    values: [
      { slug: "gauteng",       label: "Gauteng",       description: "Bursaries available to students based in or studying in Gauteng, plus national bursaries open to Gauteng residents.",     metaDescription: "Browse bursaries in Gauteng, South Africa. Find provincial and national funding for students in Johannesburg and Pretoria." },
      { slug: "western-cape",  label: "Western Cape",  description: "Bursaries available to students in the Western Cape including Cape Town and surrounding areas.",                          metaDescription: "Browse bursaries in the Western Cape, South Africa. Find funding for students in Cape Town and the broader Western Cape." },
      { slug: "kwazulu-natal", label: "KwaZulu-Natal", description: "Bursaries available to students in KwaZulu-Natal including Durban and surrounding regions.",                              metaDescription: "Browse bursaries in KwaZulu-Natal, South Africa. Find funding for students in Durban and the broader KZN region." },
      { slug: "eastern-cape",  label: "Eastern Cape",  description: "Bursaries available in the Eastern Cape including Port Elizabeth (Gqeberha) and East London.",                           metaDescription: "Browse bursaries in the Eastern Cape, South Africa. Find funding for students in Gqeberha and East London." },
      { slug: "national",      label: "National",      description: "Bursaries open to students across all South African provinces with no provincial restriction.",                          metaDescription: "Browse national bursaries available to all South African students regardless of province." },
    ],
  },
};

// Flat lookup: given a dimension and slug, return the category config
export function findCategory(dimension, slug) {
  const dim = CATEGORY_TYPES[dimension];
  if (!dim) return null;
  return dim.values.find((v) => v.slug === slug) || null;
}

// Match a bursary against a category filter
export function matchesCategory(item, dimension, slug) {
  const dim = CATEGORY_TYPES[dimension];
  if (!dim) return false;
  const val = (item[dim.filterKey] || "").toLowerCase();
  const s   = slug.toLowerCase();
  if (dimension === "province") {
    return val === s.replace("-", " ") || val === "national";
  }
  if (dimension === "field") {
    return val.includes(s) || val === "all fields";
  }
  if (dimension === "scholarship_type") {
    return val === s;
  }
  return val === s;
}
