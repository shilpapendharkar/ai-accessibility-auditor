"use client";

import { useState } from "react";
import MonacoEditor from "./components/MonacoEditor";
import AIResultPanel from "./components/AIResultPanel";

export default function AuditPage() {
  const [results, setResults] = useState([]);

  return (
    <div className="flex gap-6 p-6 h-screen">

      {/* Editor */}

      <div className="flex-1">
        <MonacoEditor setResults={setResults as (issues: any[]) => void} />
      </div>

      {/* Results */}

      <div className="w-96">
        <AIResultPanel results={results} />
      </div>

    </div>
  );
}