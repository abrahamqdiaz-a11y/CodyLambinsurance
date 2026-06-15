import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const OWNER_EMAIL = "calamb@acg.aaa.com";
const FROM_EMAIL = "careers@lambinsuranceagency.com";
const RESEND_API_KEY = process.env.RESEND_API_KEY ?? "";

const ROLE_LABELS: Record<string, string> = {
  "sales-agent": "Sales Agent",
  csr: "CSR / Account Manager",
  open: "Open / General",
};

function roleLabel(v: string) {
  return ROLE_LABELS[v] ?? v;
}

function fileSizeMb(bytes: number) {
  return (bytes / 1024 / 1024).toFixed(2);
}

export async function POST(req: NextRequest) {
  let formData: FormData;
  try {
    formData = await req.formData();
  } catch {
    return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
  }

  const fullName = (formData.get("fullName") as string | null)?.trim() ?? "";
  const email = (formData.get("email") as string | null)?.trim() ?? "";
  const phone = (formData.get("phone") as string | null)?.trim() ?? "";
  const role = (formData.get("role") as string | null)?.trim() ?? "sales-agent";
  const linkedin = (formData.get("linkedin") as string | null)?.trim() ?? "";
  const coverNote = (formData.get("coverNote") as string | null)?.trim() ?? "";
  const floridaLicense = (formData.get("floridaLicense") as string | null)?.trim() ?? "";
  const workAuthorized = (formData.get("workAuthorized") as string | null)?.trim() ?? "";

  if (!fullName || !email || !phone) {
    return NextResponse.json({ error: "Name, email, and phone are required." }, { status: 422 });
  }

  const resumeFile = formData.get("resume");
  if (!resumeFile || !(resumeFile instanceof File) || resumeFile.size === 0) {
    return NextResponse.json({ error: "A resume is required." }, { status: 422 });
  }

  const MAX_SIZE = 10 * 1024 * 1024; // 10 MB
  if (resumeFile.size > MAX_SIZE) {
    return NextResponse.json({ error: "Resume must be under 10 MB." }, { status: 422 });
  }

  const coverFile = formData.get("coverLetter");
  const hasCoverFile = coverFile instanceof File && coverFile.size > 0;
  if (hasCoverFile && coverFile.size > MAX_SIZE) {
    return NextResponse.json({ error: "Cover letter must be under 10 MB." }, { status: 422 });
  }

  // ── Build submission record ──────────────────────────────────────────────
  const submittedAt = new Date().toISOString();
  const submission = {
    submittedAt,
    fullName,
    email,
    phone,
    role: roleLabel(role),
    linkedin,
    workAuthorized,
    floridaLicense,
    coverNote,
    resumeFileName: resumeFile.name,
    coverLetterFileName: hasCoverFile ? (coverFile as File).name : null,
  };

  // ── Email via Resend ─────────────────────────────────────────────────────
  if (!RESEND_API_KEY) {
    // No API key — log and return success so the UX still works during local dev
    console.warn("[apply] RESEND_API_KEY not set; skipping email.");
    console.info("[apply] Submission:", JSON.stringify(submission, null, 2));
    return NextResponse.json({ ok: true });
  }

  const resend = new Resend(RESEND_API_KEY);

  // Convert file(s) to buffer for attachment
  const resumeBuffer = Buffer.from(await resumeFile.arrayBuffer());
  const attachments: { filename: string; content: Buffer }[] = [
    { filename: resumeFile.name, content: resumeBuffer },
  ];
  if (hasCoverFile) {
    const clBuffer = Buffer.from(await (coverFile as File).arrayBuffer());
    attachments.push({ filename: (coverFile as File).name, content: clBuffer });
  }

  const ownerHtml = `
<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#1e3a5f;">
  <div style="background:#0e1c32;padding:24px 32px;border-radius:12px 12px 0 0;">
    <p style="color:#97c09a;font-size:11px;letter-spacing:0.15em;text-transform:uppercase;margin:0 0 8px;">New Application</p>
    <h1 style="color:#ffffff;font-size:22px;margin:0;">Lamb Insurance Agency — Careers</h1>
  </div>
  <div style="background:#f5f0e8;padding:32px;border-radius:0 0 12px 12px;border:1px solid #e0d8cc;border-top:none;">
    <table style="width:100%;border-collapse:collapse;">
      <tr><td style="padding:8px 0;font-size:13px;color:#3a6496;font-weight:bold;width:160px;">Name</td><td style="padding:8px 0;font-size:14px;">${fullName}</td></tr>
      <tr><td style="padding:8px 0;font-size:13px;color:#3a6496;font-weight:bold;">Email</td><td style="padding:8px 0;font-size:14px;"><a href="mailto:${email}" style="color:#38653d;">${email}</a></td></tr>
      <tr><td style="padding:8px 0;font-size:13px;color:#3a6496;font-weight:bold;">Phone</td><td style="padding:8px 0;font-size:14px;"><a href="tel:${phone}" style="color:#38653d;">${phone}</a></td></tr>
      <tr><td style="padding:8px 0;font-size:13px;color:#3a6496;font-weight:bold;">Role</td><td style="padding:8px 0;font-size:14px;font-weight:bold;">${roleLabel(role)}</td></tr>
      ${linkedin ? `<tr><td style="padding:8px 0;font-size:13px;color:#3a6496;font-weight:bold;">LinkedIn</td><td style="padding:8px 0;font-size:14px;"><a href="${linkedin}" style="color:#38653d;">${linkedin}</a></td></tr>` : ""}
      ${floridaLicense ? `<tr><td style="padding:8px 0;font-size:13px;color:#3a6496;font-weight:bold;">FL License</td><td style="padding:8px 0;font-size:14px;">${floridaLicense}</td></tr>` : ""}
      <tr><td style="padding:8px 0;font-size:13px;color:#3a6496;font-weight:bold;">Work auth</td><td style="padding:8px 0;font-size:14px;">${workAuthorized}</td></tr>
      <tr><td style="padding:8px 0;font-size:13px;color:#3a6496;font-weight:bold;">Submitted</td><td style="padding:8px 0;font-size:14px;">${new Date(submittedAt).toLocaleString("en-US", { timeZone: "America/New_York" })} ET</td></tr>
    </table>
    ${coverNote ? `<div style="margin-top:20px;padding:16px;background:#fff;border-radius:8px;border:1px solid #e0d8cc;"><p style="font-size:12px;color:#3a6496;font-weight:bold;margin:0 0 8px;text-transform:uppercase;letter-spacing:0.1em;">Note from applicant</p><p style="font-size:14px;margin:0;line-height:1.6;">${coverNote}</p></div>` : ""}
    <div style="margin-top:20px;padding:16px;background:#fff;border-radius:8px;border:1px solid #e0d8cc;">
      <p style="font-size:12px;color:#3a6496;font-weight:bold;margin:0 0 8px;text-transform:uppercase;letter-spacing:0.1em;">Attachments</p>
      <p style="font-size:14px;margin:0;">📎 ${resumeFile.name} (${fileSizeMb(resumeFile.size)} MB)${hasCoverFile ? `<br>📎 ${(coverFile as File).name} (${fileSizeMb((coverFile as File).size)} MB)` : ""}</p>
    </div>
    <p style="font-size:12px;color:#8a9ab5;margin-top:24px;border-top:1px solid #e0d8cc;padding-top:16px;">This notification was sent automatically by lambinsuranceagency.com/apply</p>
  </div>
</div>`;

  const applicantHtml = `
<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;color:#1e3a5f;">
  <div style="background:#0e1c32;padding:24px 32px;border-radius:12px 12px 0 0;">
    <h1 style="color:#ffffff;font-size:22px;margin:0;">Application received</h1>
    <p style="color:#97c09a;font-size:13px;margin:8px 0 0;">Lamb Insurance Agency · Sarasota, FL</p>
  </div>
  <div style="background:#faf8f4;padding:32px;border-radius:0 0 12px 12px;border:1px solid #e0d8cc;border-top:none;">
    <p style="font-size:15px;line-height:1.7;margin:0 0 16px;">Hi ${fullName.split(" ")[0]},</p>
    <p style="font-size:15px;line-height:1.7;margin:0 0 16px;">Thank you for applying to Lamb Insurance Agency. We review every application and will reach out if it's a fit.</p>
    <div style="background:#fff;border:1px solid #e0d8cc;border-radius:8px;padding:16px 20px;margin:24px 0;">
      <p style="font-size:12px;color:#3a6496;font-weight:bold;margin:0 0 8px;text-transform:uppercase;letter-spacing:0.1em;">What's next</p>
      <p style="font-size:14px;margin:0;line-height:1.6;">Our hiring team will review your resume, typically within a few business days. If we'd like to move forward, we'll contact you by email or phone to schedule a conversation.</p>
    </div>
    <p style="font-size:14px;color:#8a9ab5;margin:24px 0 0;">Role applied for: <strong style="color:#1e3a5f;">${roleLabel(role)}</strong></p>
    <p style="font-size:14px;color:#8a9ab5;margin:4px 0 0;">Submitted: ${new Date(submittedAt).toLocaleString("en-US", { timeZone: "America/New_York" })} ET</p>
    <hr style="border:none;border-top:1px solid #e0d8cc;margin:24px 0;" />
    <p style="font-size:13px;color:#8a9ab5;margin:0;">Lamb Insurance Agency<br>5893 Whitfield Ave, Sarasota, FL 34243<br><a href="mailto:calamb@acg.aaa.com" style="color:#38653d;">calamb@acg.aaa.com</a></p>
  </div>
</div>`;

  try {
    await Promise.all([
      resend.emails.send({
        from: `Lamb Insurance Careers <${FROM_EMAIL}>`,
        to: OWNER_EMAIL,
        replyTo: email,
        subject: `New application: ${roleLabel(role)} — ${fullName}`,
        html: ownerHtml,
        attachments,
      }),
      resend.emails.send({
        from: `Lamb Insurance Agency <${FROM_EMAIL}>`,
        to: email,
        subject: "Your application to Lamb Insurance Agency",
        html: applicantHtml,
      }),
    ]);
  } catch (err) {
    console.error("[apply] Email send failed:", err);
    return NextResponse.json(
      { error: "We received your application but couldn't send a confirmation email. We'll still review it." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true, submittedAt });
}
