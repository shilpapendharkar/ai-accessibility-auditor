/**
 * Minimal exporter utilities.
 *
 * These functions provide simple CSV and text-to-file helpers. For production PDF
 * exports consider using a library like pdfkit, Puppeteer (HTML -> PDF), or
 * serverless PDF services.
 */

export function auditToCSV(audit: { id?: string; code: string; result: string; createdAt?: string }) {
  const header = ["id", "createdAt", "code", "result"];
  const row = [audit.id ?? "", audit.createdAt ?? new Date().toISOString(), JSON.stringify(audit.code), JSON.stringify(audit.result)];
  const lines = [header.join(","), row.join(",")];
  return lines.join("\n");
}

export function downloadFile(filename: string, content: string, mime = "text/plain") {
  // Client-side helper: create a blob and trigger download. Call from browser code.
  if (typeof window === "undefined") {
    throw new Error("downloadFile is a client-side helper");
  }

  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

// Placeholder PDF exporter: return a simple Blob URL in the browser.
export function exportAuditAsPlainTextFile(audit: { id?: string; code: string; result: string }) {
  const content = `Audit ID: ${audit.id ?? "-"}\n\nCODE:\n${audit.code}\n\nRESULT:\n${audit.result}`;
  if (typeof window === "undefined") throw new Error("Client-side only");
  downloadFile(`audit-${audit.id ?? Date.now()}.txt`, content, "text/plain");
}
