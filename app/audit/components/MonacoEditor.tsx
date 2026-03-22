"use client";

import dynamic from "next/dynamic";
import { useState } from "react";

const Editor = dynamic(() => import("@monaco-editor/react"), { ssr: false });

export default function MonacoEditor({ setResults }: { setResults: (issues: any[]) => void }) {

  const [code, setCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function runAudit() {

    try {

      setLoading(true);
      setError("");

      const res = await fetch("/api/audit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ code })
      });

      if (!res.ok) {
        throw new Error("Audit failed");
      }

      const data = await res.json();

      setResults(data.issues);

    } catch (err) {

      setError("AI audit failed. Please try again.");

    } finally {

      setLoading(false);

    }
  }

  return (
    <div className="h-full flex flex-col gap-4">

      <Editor
        height="70vh"
        defaultLanguage="javascript"
        onChange={(value: any) => setCode(value)}
      />

      {/* Error Message */}

      {error && (
        <div className="text-red-500 text-sm">
          {error}
        </div>
      )}

      {/* Button */}

      <button
        onClick={runAudit}
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded cursor-pointer hover:bg-blue-700 disabled:opacity-50 flex items-center justify-center gap-2"
      >

        {loading ? (
          <>
            <span className="animate-spin">⚙</span>
            Running Audit...
          </>
        ) : (
          "Run AI Audit"
        )}

      </button>

    </div>
  );
}