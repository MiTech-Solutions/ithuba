import { useEffect, useState } from "react";

const SHEET_ID  = import.meta.env.VITE_SCHOLARSHIPS_SHEET_ID;
const API_KEY   = import.meta.env.VITE_GOOGLE_SHEETS_API_KEY;
const TAB       = "Published";
const CACHE_KEY = "ithuba_scholarships_cache";

let memoryCache = null;

function rowToObject(headers, row) {
  const obj = {};
  headers.forEach((h, i) => {
    obj[h.trim()] = (row[i] || "").trim();
  });
  return obj;
}

export function useScholarships() {
  const [scholarships, setScholarships] = useState(memoryCache || []);
  const [loading, setLoading]           = useState(!memoryCache);
  const [error, setError]               = useState(null);

  useEffect(() => {
    if (memoryCache) return;

    try {
      const cached = sessionStorage.getItem(CACHE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        memoryCache = parsed;
        setScholarships(parsed);
        setLoading(false);
        return;
      }
    } catch {}

    async function fetch_data() {
      try {
        const url  = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${TAB}?key=${API_KEY}`;
        const res  = await fetch(url);
        // 400 usually means the sheet tab exists but has no data yet
        if (res.status === 400) { setScholarships([]); setLoading(false); return; }
        if (!res.ok) throw new Error(`Sheets API error: ${res.status}`);
        const json = await res.json();
        const [headers, ...rows] = json.values || [];
        if (!headers) { setScholarships([]); return; }
        const data = rows.map((row) => rowToObject(headers, row));
        memoryCache = data;
        try { sessionStorage.setItem(CACHE_KEY, JSON.stringify(data)); } catch {}
        setScholarships(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetch_data();
  }, []);

  return { scholarships, loading, error };
}
