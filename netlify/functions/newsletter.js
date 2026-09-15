/**
 * Newsletter subscription handler
 * POST /api/newsletter
 *
 * 1. Validates email
 * 2. Appends to Google Sheet via Sheets API
 * 3. Forwards to Formspree for email notification
 */

const SHEET_ID       = process.env.NEWSLETTER_SHEET_ID;
const API_KEY        = process.env.VITE_GOOGLE_SHEETS_API_KEY;
const FORMSPREE_URL  = process.env.FORMSPREE_NEWSLETTER_URL;
const TAB            = "Sheet1";

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin":  "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Content-Type": "application/json",
  };
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

exports.handler = async function (event) {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: corsHeaders(), body: "" };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: corsHeaders(),
      body: JSON.stringify({ error: "Method not allowed" }),
    };
  }

  let body;
  try {
    body = JSON.parse(event.body);
  } catch {
    return {
      statusCode: 400,
      headers: corsHeaders(),
      body: JSON.stringify({ error: "Invalid request body" }),
    };
  }

  const { email, name = "" } = body;

  if (!email || !isValidEmail(email)) {
    return {
      statusCode: 400,
      headers: corsHeaders(),
      body: JSON.stringify({ error: "A valid email address is required" }),
    };
  }

  const subscribedAt = new Date().toISOString();

  // ── 1. Append to Google Sheet ─────────────────────────────────────────────
  try {
    const sheetsUrl = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${TAB}:append?valueInputOption=USER_ENTERED&key=${API_KEY}`;
    const sheetsRes = await fetch(sheetsUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        values: [[name.trim(), email.trim().toLowerCase(), subscribedAt]],
      }),
    });
    if (!sheetsRes.ok) {
      const err = await sheetsRes.text();
      console.error("Sheets API error:", err);
    }
  } catch (err) {
    console.error("Failed to write to sheet:", err.message);
    // Don't block — still send Formspree notification
  }

  // ── 2. Formspree notification to email ───────────────────────────────────
  try {
    await fetch(FORMSPREE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        _subject: `New Ithuba newsletter subscriber — ${email}`,
        name:     name || "Not provided",
        email,
        subscribed_at: subscribedAt,
      }),
    });
  } catch (err) {
    console.error("Formspree error:", err.message);
  }

  return {
    statusCode: 200,
    headers: corsHeaders(),
    body: JSON.stringify({ success: true, message: "Subscribed successfully" }),
  };
};
