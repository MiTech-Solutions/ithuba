// Single source of truth for all category definitions.
// Used by CategoryPage, CategoryIndex, Footer, and sitemap.

export const CATEGORY_TYPES = {
  type: {
    label: "Funder type",
    param: "type",
    filterKey: "funder_type",
    values: [
      {
        slug: "government",
        label: "Government Bursaries",
        description:
          "Bursaries funded by South African government departments and state-owned entities. These typically include NSFAS, department-specific programmes, and SOE bursaries from Eskom, Transnet, and others.",
        metaDescription:
          "Browse South African government bursaries including NSFAS, Eskom, Transnet, and department-funded programmes. Free, searchable directory updated regularly.",
      },
      {
        slug: "corporate",
        label: "Corporate Bursaries",
        description:
          "Bursaries offered by South African and multinational companies. Corporate bursaries often include vacation work, mentorship, and employment opportunities after graduation.",
        metaDescription:
          "Browse corporate bursaries in South Africa from companies like Sasol, Anglo American, Standard Bank, and MTN. Find funding with employment pathways.",
      },
      {
        slug: "ngo",
        label: "NGO & Foundation Bursaries",
        description:
          "Bursaries from non-governmental organisations, foundations, and trusts. These often target specific demographics, fields of study, or regions and can be highly competitive.",
        metaDescription:
          "Browse NGO and foundation bursaries in South Africa. Find funding from the Allan Gray Orbis Foundation, Rhodes University, and other non-profit funders.",
      },
    ],
  },
  field: {
    label: "Field of study",
    param: "field",
    filterKey: "field_of_study",
    values: [
      { slug: "engineering",   label: "Engineering Bursaries",    description: "Bursaries for students studying civil, mechanical, electrical, chemical, and mining engineering at South African universities.",           metaDescription: "Find engineering bursaries in South Africa. Browse funding from Eskom, Sasol, Transnet, Anglo American, and more for all engineering disciplines." },
      { slug: "finance",       label: "Finance & Accounting Bursaries", description: "Bursaries for students studying finance, accounting, auditing, actuarial science, and related commerce disciplines.",          metaDescription: "Browse finance and accounting bursaries in South Africa. Find funding from banks, audit firms, and financial institutions for commerce students." },
      { slug: "it",            label: "IT & Technology Bursaries", description: "Bursaries for students studying information technology, computer science, software engineering, and related tech disciplines.",      metaDescription: "Find IT and technology bursaries in South Africa. Browse funding from MTN, Telkom, Vodacom, and tech companies for computer science and IT students." },
      { slug: "medicine",      label: "Medicine & Health Bursaries", description: "Bursaries for students studying medicine, nursing, pharmacy, physiotherapy, and other health sciences.",                        metaDescription: "Browse medicine and health bursaries in South Africa. Find funding for medical, nursing, pharmacy, and allied health students." },
      { slug: "business",      label: "Business & Management Bursaries", description: "Bursaries for students studying business management, entrepreneurship, marketing, and related disciplines.",                  metaDescription: "Browse business and management bursaries in South Africa. Find funding for students in business, entrepreneurship, and management programmes." },
      { slug: "law",           label: "Law Bursaries",             description: "Bursaries for students pursuing LLB and other law qualifications at South African universities.",                                    metaDescription: "Find law bursaries in South Africa. Browse funding opportunities for LLB and legal studies students." },
      { slug: "teaching",      label: "Teaching & Education Bursaries", description: "Bursaries for students studying education and pursuing teaching qualifications, often linked to NSFAS and government programmes.", metaDescription: "Browse teaching and education bursaries in South Africa. Find funding for students pursuing teaching qualifications and education degrees." },
      { slug: "science",       label: "Science Bursaries",         description: "Bursaries for students studying natural sciences, mathematics, physics, chemistry, and related STEM fields.",                       metaDescription: "Find science bursaries in South Africa. Browse funding for students studying natural sciences, mathematics, physics, and chemistry." },
    ],
  },
  province: {
    label: "Province",
    param: "province",
    filterKey: "province",
    values: [
      { slug: "gauteng",        label: "Gauteng Bursaries",        description: "Bursaries available to students based in or studying in Gauteng, as well as national bursaries open to Gauteng residents.",         metaDescription: "Browse bursaries available in Gauteng, South Africa. Find provincial and national funding opportunities for students in Johannesburg, Pretoria, and surrounding areas." },
      { slug: "western-cape",   label: "Western Cape Bursaries",   description: "Bursaries available to students in the Western Cape, including Cape Town and surrounding areas, plus national programmes.",         metaDescription: "Browse bursaries available in the Western Cape, South Africa. Find funding opportunities for students in Cape Town and the broader Western Cape." },
      { slug: "kwazulu-natal",  label: "KwaZulu-Natal Bursaries",  description: "Bursaries available to students in KwaZulu-Natal, including Durban and surrounding regions, plus national programmes.",           metaDescription: "Browse bursaries available in KwaZulu-Natal, South Africa. Find funding opportunities for students in Durban and the broader KZN region." },
      { slug: "eastern-cape",   label: "Eastern Cape Bursaries",   description: "Bursaries available in the Eastern Cape, including Port Elizabeth (Gqeberha) and East London, plus national programmes.",         metaDescription: "Browse bursaries available in the Eastern Cape, South Africa. Find funding opportunities for students in Gqeberha, East London, and surrounding areas." },
      { slug: "national",       label: "National Bursaries",       description: "Bursaries open to students across all South African provinces with no provincial restriction.",                                    metaDescription: "Browse national bursaries available to all South African students regardless of province. Find funding open to applicants from any province." },
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
export function matchesCategory(bursary, dimension, slug) {
  const dim = CATEGORY_TYPES[dimension];
  if (!dim) return false;
  const val = (bursary[dim.filterKey] || "").toLowerCase();
  if (dimension === "province") {
    return val === slug.replace("-", " ") || val === "national";
  }
  // field matching — partial (e.g. "All fields" bursaries should show under each field)
  if (dimension === "field") {
    return val.toLowerCase().includes(slug) || val === "all fields";
  }
  return val === slug;
}
