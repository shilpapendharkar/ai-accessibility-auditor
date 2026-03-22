/**
 * Notification utilities (placeholders)
 *
 * Implement concrete integrations (Slack webhook, SendGrid, SES, etc.) in production.
 */

export async function sendSlackWebhook(webhookUrl: string, message: string) {
  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: message }),
    });
    if (!res.ok) throw new Error(`Slack webhook failed: ${res.status}`);
    return true;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("sendSlackWebhook error:", err);
    return false;
  }
}

export async function sendEmailPlaceholder(to: string, subject: string, body: string) {
  // Placeholder: integrate with SendGrid/Postmark/SES
  // For demo, just log to server console and return success.
  // eslint-disable-next-line no-console
  console.log(`Sending email to ${to}: ${subject}\n${body}`);
  return true;
}
