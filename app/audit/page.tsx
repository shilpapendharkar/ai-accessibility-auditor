// app/audit/page.tsx

import MonacoEditor from "../components/MonacoEditor";
import AIResultPanel from "./components/AIResultPanel";

export default function AuditPage() {
  return (
    <div className="flex h-screen p-6 space-x-6">
      <div className="flex-1">
        <MonacoEditor />
      </div>
      <div className="w-96">
        <AIResultPanel />
      </div>
    </div>
  )
}