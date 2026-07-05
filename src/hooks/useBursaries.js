import { useEffect, useState } from "react";

const SHEET_ID    = "1QB7gX3s4Xp6u-T__okl1vr4cwHx1EJbWLX9f0pDx7N0";
const API_KEY     = "AIzaSyBsrEpI3hkgRTVZtzmWYu7wOFU8Cmocw-8";
const TAB         = "Published";
const CACHE_KEY   = "ithuba_bursaries_cache";

// In-memory cache so navigating between pages doesn't re-fetch
let memoryCache = null;

function rowToObject(headers, row) {
  const obj = {};
  headers.forEach((h, i) => {
    obj[h.trim()] = (row[i] || "").trim();
  });
  return obj;
}

export function useBursaries() {
  const [bursaries, setBursaries] = useState(memoryCache || []);
  const [loading, setLoading]     = useState(!memoryCache);
  const [error, setError]         = useState(null);

  useEffect(() => {
    // Already in memory — skip fetch entirely
    if (memoryCache) return;

    // Try sessionStorage first
    try {
      const cached = sessionStorage.getItem(CACHE_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        memoryCache = parsed;
        setBursaries(parsed);
        setLoading(false);
        return;
      }
    } catch {}

    async function fetch_data() {
      try {
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${TAB}?key=${API_KEY}`;
        const res  = await fetch(url);
        if (!res.ok) throw new Error(`Sheets API error: ${res.status}`);
        const json = await res.json();
        const [headers, ...rows] = json.values || [];
        if (!headers) { setBursaries([]); return; }
        const data = rows.map((row) => rowToObject(headers, row));
        memoryCache = data;
        try { sessionStorage.setItem(CACHE_KEY, JSON.stringify(data)); } catch {}
        setBursaries(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetch_data();
  }, []);

  return { bursaries, loading, error };
}
