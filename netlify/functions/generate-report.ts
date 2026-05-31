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

// Grade colors
const gradeColor = (g: string) => {
  if (g === "A") return "#22c55e";
  if (g === "B") return "#84cc16";
  if (g === "C") return "#eab308";
  if (g === "D") return "#f97316";
  return "#ef4444";
};

// Convert letter grade to 0–100 score
const gradeToScore = (g: string) => {
  if (g === "A") return Math.floor(Math.random() * 11) + 90;
  if (g === "B") return Math.floor(Math.random() * 15) + 75;
  if (g === "C") return Math.floor(Math.random() * 15) + 60;
  if (g === "D") return Math.floor(Math.random() * 15) + 45;
  return Math.floor(Math.random() * 45);
};

interface CategoryData {
  name: string;
  grade: string;
  description: string;
}

interface ReportData {
  overallGrade: string;
  overallSummary: string;
  categories: CategoryData[];
  opportunities: { title: string; description: string }[];
}

function buildReportHtml(
  businessName: string,
  cityState: string,
  businessType: string,
  data: ReportData,
  dateStr: string
): string {
  const overallScore = gradeToScore(data.overallGrade);

  const categoryRows = data.categories
    .map(
      (c) => `
      <tr style="border-bottom: 1px solid #eee;">
        <td style="padding: 12px 8px; font-size: 15px;">${c.name}</td>
        <td style="padding: 12px 8px; text-align: right; font-weight: bold; font-size: 18px; color: ${gradeColor(c.grade)};">${c.grade}</td>
      </tr>`
    )
    .join("");

  const categoryDetails = data.categories
    .map(
      (c) => `
    <div style="margin-bottom: 28px; padding: 24px; background: #f8f7f4; border-left: 4px solid ${gradeColor(c.grade)}; border-radius: 0 8px 8px 0;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
        <div style="font-size: 17px; font-weight: bold;">${c.name}</div>
        <div style="font-size: 24px; font-weight: bold; color: ${gradeColor(c.grade)};">${c.grade}</div>
      </div>
      <p style="font-size: 14px; line-height: 1.7; color: #444; margin: 0;">${c.description}</p>
    </div>`
    )
    .join("");

  const opportunityBlocks = data.opportunities
    .map(
      (o, i) => `
    <div style="${i < data.opportunities.length - 1 ? "margin-bottom: 20px;" : ""} padding: 20px; background: rgba(255,255,255,0.05); border-radius: 8px; border-left: 3px solid #c9a84c;">
      <div style="font-size: 16px; font-weight: bold; color: #c9a84c; margin-bottom: 6px;">${i + 1}. ${o.title}</div>
      <p style="font-size: 14px; color: #ccc; margin: 0; line-height: 1.6;">${o.description}</p>
    </div>`
    )
    .join("");

  return `<div style="font-family: 'Georgia', serif; max-width: 700px; margin: 0 auto; color: #1a1a1a; background: #fff;">

  <!-- Header -->
  <div style="background: #0d1526; padding: 40px; text-align: center;">
    <div style="color: #c9a84c; font-size: 13px; letter-spacing: 3px; text-transform: uppercase; margin-bottom: 12px;">Zauber Group</div>
    <div style="color: #fff; font-size: 28px; font-weight: bold; margin-bottom: 8px;">Visibility Report</div>
    <div style="color: #c9a84c; font-size: 20px;">${businessName}</div>
    <div style="color: #aaa; font-size: 14px; margin-top: 8px;">${cityState} · ${dateStr}</div>
  </div>

  <!-- Overall Score -->
  <div style="background: #f8f7f4; padding: 32px; text-align: center; border-bottom: 3px solid #c9a84c;">
    <div style="font-size: 13px; letter-spacing: 2px; text-transform: uppercase; color: #666; margin-bottom: 8px;">Overall Visibility Score</div>
    <div style="font-size: 64px; font-weight: bold; color: #0d1526;">${overallScore}/100</div>
    <div style="font-size: 16px; color: #888; margin-top: 4px;">Grade: ${data.overallGrade} — ${data.overallSummary}</div>
  </div>

  <!-- Score Grid -->
  <div style="padding: 32px; background: #fff;">
    <div style="font-size: 13px; letter-spacing: 2px; text-transform: uppercase; color: #666; margin-bottom: 20px; text-align: center;">Category Breakdown</div>
    <table style="width: 100%; border-collapse: collapse;">
      ${categoryRows}
    </table>
  </div>

  <!-- Category Details -->
  <div style="padding: 0 32px 32px;">
    ${categoryDetails}
  </div>

  <!-- Top Opportunities -->
  <div style="background: #0d1526; padding: 32px; color: white;">
    <div style="font-size: 13px; letter-spacing: 2px; text-transform: uppercase; color: #c9a84c; margin-bottom: 20px; text-align: center;">Your 3 Biggest Opportunities</div>
    ${opportunityBlocks}
  </div>

  <!-- CTA -->
  <div style="padding: 32px; text-align: center; background: #f8f7f4;">
    <div style="font-size: 20px; font-weight: bold; margin-bottom: 8px;">Ready to Fix What's Broken?</div>
    <p style="color: #666; margin-bottom: 24px; font-size: 15px;">Zauber Group helps ${businessType}s in ${cityState} get found, trusted, and contacted by the right clients.</p>
    <a href="https://zaubergroup.com" style="background: #c9a84c; color: #0d1526; padding: 14px 32px; text-decoration: none; font-weight: bold; border-radius: 6px; font-size: 15px;">Let's Talk — zaubergroup.com</a>
    <p style="color: #999; font-size: 12px; margin-top: 20px;">Prepared by Zauber Group · ${cityState}</p>
  </div>

  <!-- Book a Call -->
  <div style="padding: 32px; text-align: center; background: #0d1526;">
    <div style="font-size: 16px; color: #ccc; margin-bottom: 16px;">Want help fixing what's in this report?</div>
    <a href="https://calendly.com/kelly-zaubergroup/free-strategy-call" style="background: #c9a84c; color: #0d1526; padding: 14px 32px; text-decoration: none; font-weight: bold; border-radius: 6px; font-size: 15px;">Book a Free Strategy Call →</a>
    <p style="color: #666; font-size: 12px; margin-top: 16px;">30 minutes · No pressure · Kelly will walk you through exactly what to fix first</p>
  </div>

</div>`;
}

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

  // ── Ask Claude for JSON data only (fast — ~2-3s) ─────────────────────
  const dataPrompt = `You are a digital marketing expert analyzing a ${businessType || "local service"} business called "${businessName}" located in ${cityState}${website ? ` with website ${website}` : ""}.

Score this business across 7 categories. Most local service businesses score C or D in AI Search and Lead Capture. Be realistic and direct.

Return ONLY valid JSON. Keep ALL descriptions to ONE sentence maximum. No markdown, no explanation:
{"overallGrade":"C","overallSummary":"one honest sentence","categories":[{"name":"Google Business Profile","grade":"B","description":"One sentence specific to a ${businessType} in ${cityState}."},{"name":"AI Search Visibility","grade":"D","description":"One sentence."},{"name":"Website & Mobile","grade":"C","description":"One sentence."},{"name":"Reviews & Reputation","grade":"B","description":"One sentence."},{"name":"Social Media","grade":"C","description":"One sentence."},{"name":"Paid Advertising","grade":"D","description":"One sentence."},{"name":"Lead Capture & Follow-Up","grade":"D","description":"One sentence."}],"opportunities":[{"title":"Short title","description":"One sentence fix."},{"title":"Short title","description":"One sentence fix."},{"title":"Short title","description":"One sentence fix."}]}`;

  let reportData: ReportData;

  try {
    const message = await anthropic.messages.create({
      model: "claude-sonnet-4-5",
      max_tokens: 600,
      messages: [{ role: "user", content: dataPrompt }],
    });

    const content = message.content[0];
    if (content.type !== "text") throw new Error("Unexpected response type");

    // Strip any markdown code fences if present
    const jsonText = content.text.replace(/^```(?:json)?\s*/i, "").replace(/\s*```\s*$/i, "").trim();
    reportData = JSON.parse(jsonText);
  } catch (err) {
    console.error("Claude API error:", err);
    return { statusCode: 500, headers: CORS, body: "Report generation failed" };
  }

  // ── Build HTML from template ─────────────────────────────────────────
  const dateStr = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
  const reportHtml = buildReportHtml(businessName, cityState, businessType || "local service", reportData, dateStr);

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

    // ── Notify Kelly ──────────────────────────────────────────────────
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
    body: JSON.stringify({ success: true, reportData }),
  };
};
