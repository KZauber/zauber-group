import Anthropic from "@anthropic-ai/sdk";
import { Resend } from "resend";
import type { Handler } from "@netlify/functions";

const anthropic = new Anthropic({ apiKey: process.env.Claude_Key });
const resend = new Resend(process.env.Resend_API_Key);

const CORS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

export const handler: Handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return { statusCode: 204, headers: CORS, body: "" };
  }

  if (event.httpMethod !== "POST") {
    return { statusCode: 405, headers: CORS, body: "Method not allowed" };
  }

  let body: {
    firstName: string;
    businessName: string;
    website: string;
    cityState: string;
    email: string;
    businessType: string;
  };

  try {
    body = JSON.parse(event.body || "{}");
  } catch {
    return { statusCode: 400, headers: CORS, body: "Invalid JSON" };
  }

  const { firstName, businessName, website, cityState, email, businessType } = body;

  if (!firstName || !businessName || !email) {
    return { statusCode: 400, headers: CORS, body: "Missing required fields" };
  }

  // ── Build the assessment prompt ──────────────────────────────────────
  const assessmentPrompt = `You are the Digital Presence Assessment Expert for Zauber Group. A ${businessType || "local service"} business has just purchased their Visibility Report. Generate a comprehensive, personalized assessment report.

BUSINESS INFORMATION:
- Business Name: ${businessName}
- Website: ${website || "Not provided"}
- Location: ${cityState}
- Business Type: ${businessType}

Generate a detailed Visibility Report in the following exact HTML format. Make it specific to this business type and location. Be direct, honest, and actionable. Use your knowledge of what businesses like this typically struggle with.

Use this HTML template — fill in ALL sections with specific, personalized content:

<div style="font-family: 'Georgia', serif; max-width: 700px; margin: 0 auto; color: #1a1a1a; background: #fff;">

  <!-- Header -->
  <div style="background: #0d1526; padding: 40px; text-align: center;">
    <div style="color: #c9a84c; font-size: 13px; letter-spacing: 3px; text-transform: uppercase; margin-bottom: 12px;">Zauber Group</div>
    <div style="color: #fff; font-size: 28px; font-weight: bold; margin-bottom: 8px;">Visibility Report</div>
    <div style="color: #c9a84c; font-size: 20px;">${businessName}</div>
    <div style="color: #aaa; font-size: 14px; margin-top: 8px;">${cityState} · ${new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</div>
  </div>

  <!-- Overall Score -->
  <div style="background: #f8f7f4; padding: 32px; text-align: center; border-bottom: 3px solid #c9a84c;">
    <div style="font-size: 13px; letter-spacing: 2px; text-transform: uppercase; color: #666; margin-bottom: 8px;">Overall Visibility Score</div>
    <div style="font-size: 64px; font-weight: bold; color: #0d1526;">[SCORE]/100</div>
    <div style="font-size: 16px; color: #888; margin-top: 4px;">Grade: [LETTER GRADE] — [1-sentence honest summary of where they stand]</div>
  </div>

  <!-- Score Grid -->
  <div style="padding: 32px; background: #fff;">
    <div style="font-size: 13px; letter-spacing: 2px; text-transform: uppercase; color: #666; margin-bottom: 20px; text-align: center;">Category Breakdown</div>
    <table style="width: 100%; border-collapse: collapse;">
      <tr style="border-bottom: 1px solid #eee;">
        <td style="padding: 12px 8px; font-size: 15px;">Google Business Profile</td>
        <td style="padding: 12px 8px; text-align: right; font-weight: bold; font-size: 18px; color: [grade color];">[GRADE]</td>
      </tr>
      <tr style="border-bottom: 1px solid #eee;">
        <td style="padding: 12px 8px; font-size: 15px;">AI Search Visibility</td>
        <td style="padding: 12px 8px; text-align: right; font-weight: bold; font-size: 18px; color: [grade color];">[GRADE]</td>
      </tr>
      <tr style="border-bottom: 1px solid #eee;">
        <td style="padding: 12px 8px; font-size: 15px;">Website & Mobile</td>
        <td style="padding: 12px 8px; text-align: right; font-weight: bold; font-size: 18px; color: [grade color];">[GRADE]</td>
      </tr>
      <tr style="border-bottom: 1px solid #eee;">
        <td style="padding: 12px 8px; font-size: 15px;">Reviews & Reputation</td>
        <td style="padding: 12px 8px; text-align: right; font-weight: bold; font-size: 18px; color: [grade color];">[GRADE]</td>
      </tr>
      <tr style="border-bottom: 1px solid #eee;">
        <td style="padding: 12px 8px; font-size: 15px;">Social Media</td>
        <td style="padding: 12px 8px; text-align: right; font-weight: bold; font-size: 18px; color: [grade color];">[GRADE]</td>
      </tr>
      <tr style="border-bottom: 1px solid #eee;">
        <td style="padding: 12px 8px; font-size: 15px;">Paid Advertising</td>
        <td style="padding: 12px 8px; text-align: right; font-weight: bold; font-size: 18px; color: [grade color];">[GRADE]</td>
      </tr>
      <tr>
        <td style="padding: 12px 8px; font-size: 15px;">Lead Capture & Follow-Up</td>
        <td style="padding: 12px 8px; text-align: right; font-weight: bold; font-size: 18px; color: [grade color];">[GRADE]</td>
      </tr>
    </table>
  </div>

  <!-- Category Details -->
  <div style="padding: 0 32px 32px;">

    [For each of the 7 categories, generate a section like this:]

    <div style="margin-bottom: 28px; padding: 24px; background: #f8f7f4; border-left: 4px solid [grade color]; border-radius: 0 8px 8px 0;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <div style="font-size: 17px; font-weight: bold;">[Category Name]</div>
        <div style="font-size: 24px; font-weight: bold; color: [grade color];">[GRADE]</div>
      </div>
      <p style="font-size: 14px; line-height: 1.7; color: #444; margin: 0;">[2-3 specific sentences about this category for a ${businessType} in ${cityState}. What they likely have, what they're missing, why it matters. Be specific and direct.]</p>
    </div>

    [END REPEAT]

  </div>

  <!-- Top 3 Fixes -->
  <div style="background: #0d1526; padding: 32px; color: white;">
    <div style="font-size: 13px; letter-spacing: 2px; text-transform: uppercase; color: #c9a84c; margin-bottom: 20px; text-align: center;">Your 3 Biggest Opportunities</div>

    <div style="margin-bottom: 20px; padding: 20px; background: rgba(255,255,255,0.05); border-radius: 8px; border-left: 3px solid #c9a84c;">
      <div style="font-size: 16px; font-weight: bold; color: #c9a84c; margin-bottom: 6px;">1. [Fix Title]</div>
      <p style="font-size: 14px; color: #ccc; margin: 0; line-height: 1.6;">[Specific fix and why it will generate more leads for a ${businessType}]</p>
    </div>

    <div style="margin-bottom: 20px; padding: 20px; background: rgba(255,255,255,0.05); border-radius: 8px; border-left: 3px solid #c9a84c;">
      <div style="font-size: 16px; font-weight: bold; color: #c9a84c; margin-bottom: 6px;">2. [Fix Title]</div>
      <p style="font-size: 14px; color: #ccc; margin: 0; line-height: 1.6;">[Specific fix and impact]</p>
    </div>

    <div style="padding: 20px; background: rgba(255,255,255,0.05); border-radius: 8px; border-left: 3px solid #c9a84c;">
      <div style="font-size: 16px; font-weight: bold; color: #c9a84c; margin-bottom: 6px;">3. [Fix Title]</div>
      <p style="font-size: 14px; color: #ccc; margin: 0; line-height: 1.6;">[Specific fix and impact]</p>
    </div>
  </div>

  <!-- CTA -->
  <div style="padding: 32px; text-align: center; background: #f8f7f4;">
    <div style="font-size: 20px; font-weight: bold; margin-bottom: 8px;">Ready to Fix What's Broken?</div>
    <p style="color: #666; margin-bottom: 24px; font-size: 15px;">Zauber Group helps ${businessType}s in ${cityState} get found, trusted, and contacted by the right clients.</p>
    <a href="https://zaubergroup.com" style="background: #c9a84c; color: #0d1526; padding: 14px 32px; text-decoration: none; font-weight: bold; border-radius: 6px; font-size: 15px;">Let's Talk — zaubergroup.com</a>
    <p style="color: #999; font-size: 12px; margin-top: 20px;">Prepared by Zauber Group · ${cityState}</p>
  </div>

</div>

IMPORTANT INSTRUCTIONS:
- Replace ALL placeholder text in brackets with real, specific content
- Assign realistic grades based on what's typical for a ${businessType} in ${cityState} — most local service businesses score C or D in AI Search and Lead Capture
- Use grade colors: A=#22c55e, B=#84cc16, C=#eab308, D=#f97316, F=#ef4444
- The overall score should be a number 0-100 (convert GPA: A=90-100, B=75-89, C=60-74, D=45-59, F=0-44)
- Make every section feel personal and specific to their business type and market
- Do NOT include any template instructions or brackets in your output — only the filled-in HTML
- Return ONLY the HTML, no markdown, no explanation`;

  let reportHtml: string;

  try {
    const message = await anthropic.messages.create({
      model: "claude-sonnet-4-5",
      max_tokens: 3000,
      messages: [{ role: "user", content: assessmentPrompt }],
    });

    const content = message.content[0];
    if (content.type !== "text") throw new Error("Unexpected response type");
    reportHtml = content.text;
  } catch (err) {
    console.error("Claude API error:", err);
    return { statusCode: 500, headers: CORS, body: "Report generation failed" };
  }

  // ── Send to customer ─────────────────────────────────────────────────
  try {
    await resend.emails.send({
      from: "Zauber Group <reports@zaubergroup.com>",
      to: email,
      subject: `Your Visibility Report — ${businessName}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; max-width: 700px; margin: 0 auto;">
          <p style="font-size: 16px;">Hi ${firstName},</p>
          <p style="font-size: 16px; color: #444;">Your Visibility Report for <strong>${businessName}</strong> is ready. Here's what we found:</p>
          ${reportHtml}
          <p style="margin-top: 32px; color: #888; font-size: 13px;">
            Questions? Reply to this email or visit <a href="https://zaubergroup.com">zaubergroup.com</a>
          </p>
        </div>
      `,
    });

    // ── Notify Kelly ─────────────────────────────────────────────────
    await resend.emails.send({
      from: "Visibility Report Bot <reports@zaubergroup.com>",
      to: "kelly@zaubergroup.com",
      subject: `New Report Delivered — ${businessName}`,
      html: `<p>New report delivered to <strong>${email}</strong></p>
             <p>Business: ${businessName} (${businessType}) — ${cityState}</p>
             <p>Website: ${website || "Not provided"}</p>`,
    });
  } catch (err) {
    console.error("Email send error:", err);
    return { statusCode: 500, headers: CORS, body: "Email delivery failed" };
  }

  return {
    statusCode: 200,
    headers: CORS,
    body: JSON.stringify({ success: true }),
  };
};
