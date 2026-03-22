"use client";

import { useState } from "react";

type Issue = {
  title: string;
  description: string;
  severity?: "high" | "medium" | "low";
};

export default function AIResultPanel({ issues }: { issues: Issue[] }) {

  const [copySuccess, setCopySuccess] = useState("");

  function getSeverityStyle(severity?: string) {
    switch (severity) {
      case "high":
        return "bg-red-100 text-red-700";
      case "medium":
        return "bg-yellow-100 text-yellow-700";
      case "low":
        return "bg-green-100 text-green-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  }

  function handleCopy(issue: Issue) {
    const text = `${issue.title}\n${issue.description}`;
    navigator.clipboard.writeText(text);
    setCopySuccess("Copied!");
    setTimeout(() => setCopySuccess(""), 2000);
  }

  function copyAllIssues() {
    const text = issues
      .map((i) => `${i.title}\n${i.description}`)
      .join("\n\n");

    navigator.clipboard.writeText(text);
    setCopySuccess("All issues copied!");
    setTimeout(() => setCopySuccess(""), 2000);
  }

  function exportReport() {
    const blob = new Blob([JSON.stringify(issues, null, 2)], {
      type: "application/json",
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");

    a.href = url;
    a.download = "accessibility-report.json";
    a.click();
  }

  function accessibilityScore() {
    if (issues?.length === 0) return 100;

    const penalty = issues?.length * 5;
    return Math.max(100 - penalty, 0);
  }

  return (
    <div className="h-full bg-white border-l p-4 overflow-y-auto flex flex-col">

      {/* Header */}

      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold">
          Accessibility Results
        </h2>

        <div className="flex gap-2">

          <button
            onClick={copyAllIssues}
            className="text-xs bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
          >
            Copy All
          </button>

          <button
            onClick={exportReport}
            className="text-xs bg-blue-600 text-white px-2 py-1 rounded hover:bg-blue-700"
          >
            Export Report
          </button>

        </div>
      </div>

      {/* Score */}

      <div className="mb-4 p-3 rounded bg-gray-50 border">
        <p className="text-sm text-gray-600">
          Accessibility Score
        </p>

        <p className="text-2xl font-bold">
          {accessibilityScore()} / 100
        </p>
      </div>

      {copySuccess && (
        <div className="text-green-600 text-xs mb-2">
          {copySuccess}
        </div>
      )}

      {/* Empty State */}

      {issues?.length === 0 && (
        <p className="text-sm text-gray-500">
          Run an audit to see accessibility issues.
        </p>
      )}

      {/* Issues */}

      <div className="flex flex-col gap-4">

        {issues?.map((issue, index) => (

          <div
            key={index}
            className="border rounded-lg p-3 bg-gray-50 shadow-sm"
          >

            <div className="flex items-center justify-between mb-2">

              <h3 className="font-medium">
                {issue.title}
              </h3>

              {issue.severity && (
                <span
                  className={`text-xs px-2 py-1 rounded ${getSeverityStyle(
                    issue.severity
                  )}`}
                >
                  {issue.severity.toUpperCase()}
                </span>
              )}

            </div>

            <p className="text-sm text-gray-600 mb-3">
              {issue.description}
            </p>

            <div className="flex gap-2">

              <button
                onClick={() => handleCopy(issue)}
                className="text-xs bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
              >
                Copy
              </button>

              <button
                className="text-xs bg-purple-600 text-white px-2 py-1 rounded hover:bg-purple-700"
              >
                Fix with AI
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}