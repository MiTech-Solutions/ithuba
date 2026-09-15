const SHEET_ID = process.env.VITE_GOOGLE_SHEET_ID;
const API_KEY  = process.env.VITE_GOOGLE_SHEETS_API_KEY;
const TAB      = "Published";

function rowToObject(headers, row) {
  const obj = {};
  headers.forEach((h, i) => { obj[h.trim()] = (row[i] || "").trim(); });
  return obj;
}

function slugify(str = "") {
  return str.toLowerCase().replace(/[^a-z0-9\s-]/g, "").trim().replace(/\s+/g, "-").replace(/-+/g, "-");
}

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin":  "*",
    "Access-Control-Allow-Methods": "GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  };
}

export const handler = async function (event) {
  if (event.httpMethod === "OPTIONS") return { statusCode: 204, headers: corsHeaders(), body: "" };
  if (event.httpMethod !== "GET") return { statusCode: 405, headers: corsHeaders(), body: JSON.stringify({ error: "Method not allowed" }) };

  let allBursaries = [];
  try {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${TAB}?key=${API_KEY}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Sheets API responded with ${res.status}`);
    const json = await res.json();
    const [headers, ...rows] = json.values || [];
    if (!headers) return { statusCode: 200, headers: corsHeaders(), body: JSON.stringify({ count: 0, data: [] }) };
    allBursaries = rows.map((row) => rowToObject(headers, row));
  } catch (err) {
    return { statusCode: 502, headers: corsHeaders(), body: JSON.stringify({ error: "Failed to fetch bursary data", detail: err.message }) };
  }

  allBursaries = allBursaries.map((b) => ({ ...b, slug: slugify(b.name), url: `https://ithubahub.co.za/bursaries/${slugify(b.name)}` }));

  const q = event.queryStringParameters || {};
  let filtered = allBursaries;

  if (q.type)     filtered = filtered.filter((b) => b.funder_type?.toLowerCase() === q.type.toLowerCase());
  if (q.field)    filtered = filtered.filter((b) => b.field_of_study?.toLowerCase().includes(q.field.toLowerCase()) || b.field_of_study?.toLowerCase() === "all fields");
  if (q.province) filtered = filtered.filter((b) => b.province?.toLowerCase().includes(q.province.toLowerCase()) || b.province?.toLowerCase() === "national");
  if (q.level)    filtered = filtered.filter((b) => b.study_level?.toLowerCase().includes(q.level.toLowerCase()) || b.study_level?.toLowerCase() === "all levels");
  if (q.featured) filtered = filtered.filter((b) => b.featured === "true");
  if (q.search) {
    const s = q.search.toLowerCase();
    filtered = filtered.filter((b) => b.name?.toLowerCase().includes(s) || b.funder?.toLowerCase().includes(s) || b.field_of_study?.toLowerCase().includes(s) || b.description?.toLowerCase().includes(s));
  }

  const limit  = Math.min(parseInt(q.limit) || 100, 100);
  const offset = parseInt(q.offset) || 0;
  const paged  = filtered.slice(offset, offset + limit);

  return {
    statusCode: 200,
    headers: corsHeaders(),
    body: JSON.stringify({
      meta: { total: filtered.length, count: paged.length, limit, offset, source: "Ithuba Bursary Directory — https://ithubahub.co.za", docs: "https://ithubahub.co.za/api-docs" },
      data: paged,
    }),
  };
};
