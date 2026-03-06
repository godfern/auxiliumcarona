import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const CONTACT_EMAIL = 'auxiliumcarona@gmail.com';

const SUBJECT_LABELS: Record<string, string> = {
  admissions: 'Admissions Inquiry',
  academics: 'Academic Information',
  general: 'General Information',
  feedback: 'Feedback',
  other: 'Other',
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, subject, message } = body;

    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: firstName, lastName, email, subject, message' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact the administrator.' },
        { status: 503 }
      );
    }

    const resend = new Resend(apiKey);
    const subjectLabel = SUBJECT_LABELS[subject] ?? subject;
    const emailSubject = `[Auxilium Contact] ${subjectLabel} - ${firstName} ${lastName}`;

    const html = `
      <h2>New message from Auxilium School website</h2>
      <p><strong>From:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Phone:</strong> ${escapeHtml(phone || 'Not provided')}</p>
      <p><strong>Subject:</strong> ${escapeHtml(subjectLabel)}</p>
      <hr />
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replaceAll('\n', '<br />')}</p>
    `;

    const { data, error } = await resend.emails.send({
      from: 'Auxilium School Website <onboarding@resend.dev>',
      to: [CONTACT_EMAIL],
      replyTo: email,
      subject: emailSubject,
      html,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error('Contact form error:', err);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again later.' },
      { status: 500 }
    );
  }
}

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return String(text).replaceAll(/[&<>"']/g, (m) => map[m] ?? m);
}
