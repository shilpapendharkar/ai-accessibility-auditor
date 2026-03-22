"use client";
import { useEffect, useState } from "react";
import { exportAuditAsPlainTextFile } from "../../../utils/pdfExporter";

/**
 * AIResultPanel
 * - Listens for a custom `ai-audit:result` event dispatched on window with
 *   { detail: { result: string, auditId?: string } }
 * - Falls back to window.__aiAuditResult if present
 * - Provides copy and export buttons
 */
export default function AIResultPanel() {
  const [result, setResult] = useState<string | null>(null);
  const [auditId, setAuditId] = useState<string | null>(null);

  useEffect(() => {
    // hydrate from global if available
    if (typeof window !== "undefined") {
      const anyWin = window as any;
      if (anyWin.__aiAuditResult) {
        const existing = anyWin.__aiAuditResult;
        setResult(existing?.result ? String(existing.result) : String(existing));
        setAuditId(existing?.auditId ?? null);
      }
    }

    const handler = (e: Event) => {
      const ev = e as CustomEvent<any>;
      const data = ev?.detail ?? null;
      if (!data) return;
      const res = typeof data === "string" ? data : data.result;
      const id = typeof data === "object" ? data.auditId ?? null : null;
      setResult(res ?? String(data));
      setAuditId(id);
    };

    window.addEventListener("ai-audit:result", handler as EventListener);
    return () => window.removeEventListener("ai-audit:result", handler as EventListener);
  }, []);

  const handleCopy = async () => {
    if (!result) return;
    try {
      await navigator.clipboard.writeText(result);
      // simple feedback could be added later
    } catch (err) {
      // ignore
    }
  };

  const handleExport = () => {
    if (!result) return;
    exportAuditAsPlainTextFile({ id: auditId ?? undefined, code: "", result });
  };

  const handleClear = () => {
    setResult(null);
    setAuditId(null);
    // clear global
    if (typeof window !== "undefined") (window as any).__aiAuditResult = null;
  };

  return (
    <div className="p-4 bg-white rounded shadow-sm h-full flex flex-col">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold">Audit Result</h3>
        <div className="flex items-center gap-2">
          <button onClick={handleCopy} className="text-sm px-2 py-1 border rounded">Copy</button>
          <button onClick={handleExport} className="text-sm px-2 py-1 border rounded">Export</button>
          <button onClick={handleClear} className="text-sm px-2 py-1 border rounded">Clear</button>
        </div>
      </div>

      <div className="flex-1 overflow-auto">
        {result ? (
          <pre className="whitespace-pre-wrap text-sm">{result}</pre>
        ) : (
          <div className="text-sm text-gray-500">No audit results yet. Run an audit from the editor.</div>
        )}
      </div>
    </div>
  );
}
