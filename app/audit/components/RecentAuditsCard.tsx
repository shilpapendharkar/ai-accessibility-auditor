// app/audit/components/RecentAuditsCard.tsx

export default function RecentAuditsCard() {
  const audits = [
    {
      date: "2024-04-22",
      component: "Login Form",
      issues: 5,
      status: "Fixed",
    },
    {
      date: "2024-04-20",
      component: "Hero Section",
      issues: 8,
      status: "Pending",
    },
    {
      date: "2024-04-19",
      component: "Navbar",
      issues: 2,
      status: "Done",
    },
  ];

  return (
    <div className="bg-white shadow rounded-lg p-6 col-span-2">
      <h2 className="text-lg font-semibold mb-4">Recent Audits</h2>

      <table className="w-full text-sm">
        <thead>
          <tr className="text-gray-500 border-b">
            <th className="text-left py-2">Date</th>
            <th className="text-left py-2">Component</th>
            <th className="text-left py-2">Issues</th>
            <th className="text-left py-2">Status</th>
          </tr>
        </thead>

        <tbody>
          {audits.map((audit, index) => (
            <tr key={index} className="border-b">
              <td className="py-2">{audit.date}</td>
              <td>{audit.component}</td>
              <td>{audit.issues}</td>

              <td>
                <span
                  className={`px-2 py-1 rounded text-xs font-medium
                    ${
                      audit.status === "Fixed"
                        ? "bg-green-100 text-green-700"
                        : audit.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-blue-100 text-blue-700"
                    }`}
                >
                  {audit.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}