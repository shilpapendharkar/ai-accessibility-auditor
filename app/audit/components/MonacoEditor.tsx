"use client";

import { exampleSnippets } from "@/app/lib/examples";
import dynamic from "next/dynamic";
import { useState } from "react";

const Editor = dynamic(() => import("@monaco-editor/react"), { ssr: false });

export default function MonacoEditor({
  setResults,
}: {
  setResults: (issues: any[]) => void;
}) {
  const [code, setCode] = useState("");
  const [activeSnippet, setActiveSnippet] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function runAudit() {
    try {
      setLoading(true);
      setError("");

      const res = await fetch("/api/audit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });

      if (!res.ok) {
        throw new Error("Audit failed");
      }

      const data = await res.json();
      setResults(data.issues);
    } catch (err) {
      setError("AI audit failed. Showing demo results.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="h-full flex flex-col gap-4">

      {/* Info Text */}
      <p className="text-sm text-gray-500">
        Try demo snippets or paste your own code to audit for accessibility
        issues. Click <b>Run AI Audit</b> to see results.
      </p>

      {/* Demo Buttons */}
      <div className="flex gap-3">

        <button
          onClick={() => {
            setCode(exampleSnippets.loginForm);
            setActiveSnippet("login");
          }}
          className={`px-3 py-1 rounded cursor-pointer transition
            ${
              activeSnippet === "login"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
        >
          Login Form
        </button>

        <button
          onClick={() => {
            setCode(exampleSnippets.navbar);
            setActiveSnippet("navbar");
          }}
          className={`px-3 py-1 rounded cursor-pointer transition
            ${
              activeSnippet === "navbar"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
        >
          Navbar
        </button>

        <button
          onClick={() => {
            setCode(exampleSnippets.productCard);
            setActiveSnippet("product");
          }}
          className={`px-3 py-1 rounded cursor-pointer transition
            ${
              activeSnippet === "product"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
        >
          Product Card
        </button>

      </div>

      {/* Monaco Editor */}
      <Editor
        height="70vh"
        defaultLanguage="javascript"
        value={code}
        onChange={(value) => setCode(value || "")}
        theme="vs-dark"
      />

      {/* Error Message */}
      {error && (
        <div className="text-red-500 text-sm">{error}</div>
      )}

      {/* Run Audit Button */}
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