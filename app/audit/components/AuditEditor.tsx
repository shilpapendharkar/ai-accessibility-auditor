"use client";
import React from "react";
import Editor from "@monaco-editor/react";

type Props = {
  code: string;
  setCode: (c: string) => void;
  height?: string;
};

export default function AuditEditor({ code, setCode, height = "400px" }: Props) {
  const handleChange = (value: string | undefined) => {
    // Monaco's onChange can return string | undefined
    if (typeof value === "string") setCode(value);
  };

  return (
    <div>
      <label className="block font-medium mb-2">Code to audit</label>
      <div className="border rounded overflow-hidden mb-2">
        <Editor
          height={height}
          defaultLanguage="typescript"
          language="typescript"
          value={code}
          theme="vs-dark"
          onChange={handleChange}
          options={{
            automaticLayout: true,
            wordWrap: "on",
            minimap: { enabled: false },
            fontSize: 13,
            tabSize: 2,
          }}
        />
      </div>
      <p className="text-xs text-gray-500">Tip: Monaco Editor provides syntax highlighting and better editing UX. Use TypeScript/TSX for JSX-aware highlighting.</p>
    </div>
  );
}
