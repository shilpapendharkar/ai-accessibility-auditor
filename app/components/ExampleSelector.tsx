import { exampleSnippets } from "../lib/examples";

export default function ExampleSelector({ setCode }: { setCode: (code: string) => void }) {
  return (
    <div className="flex gap-2 mb-4">
      {exampleSnippets.map((snippet) => (
        <button
          key={snippet.name}
          onClick={() => setCode(snippet.code)}
          className="px-3 py-1 border rounded hover:bg-gray-100"
        >
          {snippet.name}
        </button>
      ))}
    </div>
  );
}