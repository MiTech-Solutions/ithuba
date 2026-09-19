import { useEffect, useState } from "react";

const SHEET_ID = import.meta.env.VITE_INTERNSHIPS_SHEET_ID;
const API_KEY  = import.meta.env.VITE_GOOGLE_SHEETS_API_KEY;
const TAB      = "Published";

function rowToObject(headers, row) {
  const obj = {};
  headers.forEach((h, i) => {
    obj[h.trim()] = (row[i] || "").trim();
  });
  return obj;
}

export function useInternships() {
  const [internships, setInternships] = useState([]);
  const [loading, setLoading]         = useState(true);
  const [error, setError]             = useState(null);

  useEffect(() => {
    if (!SHEET_ID || !API_KEY) {
      setLoading(false);
      return;
    }

    const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${TAB}?key=${API_KEY}`;

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error(`Sheets API error: ${res.status}`);
        return res.json();
      })
      .then((json) => {
        const [headers, ...rows] = json.values || [];
        if (!headers) { setInternships([]); return; }
        setInternships(rows.map((row) => rowToObject(headers, row)));
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { internships, loading, error };
}
