export default function ResultPanel({ result }: { result: string }) {
  return (
    <div className="bg-gray-100 p-4 rounded">
      <h2 className="font-semibold mb-2">Audit Result</h2>
      <pre>{result}</pre>
    </div>
  );
}