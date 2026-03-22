"use client";

import ReactDiffViewer from "react-diff-viewer-continued";

export default function CodeDiffViewer() {

  const oldCode = `<button>Submit</button>`;

  const newCode = `<button aria-label="Submit form">Submit</button>`;

  return (
    <div className="bg-white rounded shadow p-4">

      <h3 className="font-semibold mb-3">
        AI Suggested Fix
      </h3>

      <ReactDiffViewer
        oldValue={oldCode}
        newValue={newCode}
        splitView={true}
      />

      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Apply Fix
      </button>

    </div>
  );
}