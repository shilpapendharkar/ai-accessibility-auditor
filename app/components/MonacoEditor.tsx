// app/audit/components/MonacoEditor.tsx
import dynamic from "next/dynamic";

const MonacoEditor = dynamic(() => import("@monaco-editor/react"), { ssr: false });

export default function Editor() {
  return (
    <MonacoEditor
      height="80vh"
      defaultLanguage="javascript"
      defaultValue="// Paste JSX here..."
    />
  )
}