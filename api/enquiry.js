// POST /api/enquiry — website enquiry form → Resend → SOVAR TECH inboxes.
//
// Runs server-side only: as a Vercel serverless function in production, and through
// the dev-server middleware in vite.config.js during `npm run dev`.
// RESEND_API_KEY is read from the server environment and never sent to the browser.

const RESEND_ENDPOINT = 'https://api.resend.com/emails';

// Must be an address on the domain verified in Resend (sovartech.com).
// Override with RESEND_FROM if a different verified sender is required.
const DEFAULT_FROM = 'SOVAR TECH <projects@sovartech.com>';
const TO = ['projects@sovartech.com'];
const CC = ['sarun@sovartech.com', 'sachin@sovartech.com'];
const SUBJECT = 'New Website Enquiry — SOVAR TECH';

const INDUSTRIES = ['Maritime', 'Oil & Gas', 'Offshore', 'Ports', 'Industrial', 'Critical Infrastructure', 'Other'];
const MAX_LENGTH = { name: 200, company: 200, email: 254, phone: 50, industry: 50, product: 200, message: 5000 };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const GENERIC_ERROR = 'Unable to send your enquiry at the moment. Please try again.';

function sendJson(res, status, body) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(body));
}

// Vercel provides a parsed req.body; the dev middleware passes the raw request stream.
async function readBody(req) {
  if (req.body && typeof req.body === 'object') return req.body;
  if (typeof req.body === 'string') return JSON.parse(req.body);
  const chunks = [];
  let size = 0;
  for await (const chunk of req) {
    size += chunk.length;
    if (size > 64 * 1024) throw new Error('Payload too large');
    chunks.push(chunk);
  }
  return chunks.length ? JSON.parse(Buffer.concat(chunks).toString('utf8')) : {};
}

const clean = (value) => (typeof value === 'string' ? value.trim() : '');

function validate(data) {
  const fields = {
    name: clean(data.name),
    company: clean(data.company),
    email: clean(data.email),
    phone: clean(data.phone),
    industry: clean(data.industry),
    product: clean(data.product),
    message: clean(data.message)
  };
  const errors = [];
  if (!fields.name) errors.push('name');
  if (!fields.email || !EMAIL_PATTERN.test(fields.email)) errors.push('email');
  if (!INDUSTRIES.includes(fields.industry)) errors.push('industry');
  if (!fields.message) errors.push('message');
  for (const [key, max] of Object.entries(MAX_LENGTH)) {
    if (fields[key].length > max) errors.push(key);
  }
  return { fields, errors: [...new Set(errors)] };
}

const escapeHtml = (value) =>
  value.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);

function buildEmail(f) {
  const rows = [
    ['Name', f.name],
    ['Company', f.company || '—'],
    ['Email', f.email],
    ['Phone', f.phone || '—'],
    ['Industry', f.industry],
    ...(f.product ? [['Product', f.product]] : [])
  ];

  const text = [
    'SOVAR TECH WEBSITE ENQUIRY',
    '',
    ...rows.flatMap(([label, value]) => [`${label}:`, value, '']),
    'Message:',
    f.message
  ].join('\n');

  const html = `<!doctype html><html><body style="margin:0;padding:24px;background:#F4F7FA;font-family:Arial,Helvetica,sans-serif;color:#1e293b;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #DCE3EA;">
<tr><td style="background:#071B3A;padding:20px 24px;color:#ffffff;font-size:16px;font-weight:bold;letter-spacing:1px;">SOVAR TECH WEBSITE ENQUIRY</td></tr>
<tr><td style="padding:24px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
${rows
  .map(
    ([label, value]) =>
      `<tr><td style="padding:6px 0;width:110px;font-size:12px;font-weight:bold;color:#071B3A;text-transform:uppercase;vertical-align:top;">${label}</td><td style="padding:6px 0;font-size:14px;">${escapeHtml(value)}</td></tr>`
  )
  .join('\n')}
</table>
<div style="margin-top:20px;font-size:12px;font-weight:bold;color:#071B3A;text-transform:uppercase;">Message</div>
<div style="margin-top:6px;font-size:14px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(f.message)}</div>
</td></tr></table></body></html>`;

  return { text, html };
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return sendJson(res, 405, { ok: false, error: 'Method not allowed.' });
  }

  let data;
  try {
    data = await readBody(req);
  } catch {
    return sendJson(res, 400, { ok: false, error: 'Invalid request.' });
  }

  // Honeypot: real visitors never see or fill the "website" field. Silently accept and drop.
  if (clean(data?.website)) {
    return sendJson(res, 200, { ok: true });
  }

  const { fields, errors } = validate(data || {});
  if (errors.length) {
    return sendJson(res, 400, { ok: false, error: 'Please check the highlighted fields and try again.', fields: errors });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('[enquiry] RESEND_API_KEY is not configured.');
    return sendJson(res, 500, { ok: false, error: GENERIC_ERROR });
  }

  const { text, html } = buildEmail(fields);

  try {
    const response = await fetch(RESEND_ENDPOINT, {
      method: 'POST',
      headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: process.env.RESEND_FROM || DEFAULT_FROM,
        to: TO,
        cc: CC,
        reply_to: fields.email,
        subject: SUBJECT,
        text,
        html
      })
    });

    if (!response.ok) {
      // Log only the status and Resend's error name — never the key or the visitor's message.
      let reason = '';
      try {
        reason = (await response.json())?.name || '';
      } catch {
        /* ignore non-JSON error bodies */
      }
      console.error(`[enquiry] Resend rejected the request: ${response.status} ${reason}`);
      return sendJson(res, 502, { ok: false, error: GENERIC_ERROR });
    }

    return sendJson(res, 200, { ok: true });
  } catch (error) {
    console.error('[enquiry] Could not reach Resend:', error?.name || 'Error');
    return sendJson(res, 502, { ok: false, error: GENERIC_ERROR });
  }
}
