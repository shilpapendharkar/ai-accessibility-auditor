"use client";

export default function AIResultPanel({ results }: { results: any[] }) {

  if (!results || results.length === 0) {
    return (
      <div className="bg-white shadow rounded-lg p-6">
        <p className="text-gray-500">
          No audit results yet.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white shadow rounded-lg p-6">

      <h2 className="text-lg font-semibold mb-4">
        AI Accessibility Results
      </h2>

      <div className="space-y-4">

        {results.map((issue, i) => (
          <div
            key={i}
            className="border-l-4 border-red-400 bg-gray-50 p-4 rounded"
          >

            <p className="font-medium">
              {issue.title}
            </p>

            <p className="text-sm text-gray-600">
              {issue.description}
            </p>

          </div>
        ))}

      </div>

    </div>
  );
}