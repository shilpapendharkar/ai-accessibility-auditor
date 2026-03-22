"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

export default function AnalyticsChart() {

  const data = [
    { day: "Mon", issues: 12 },
    { day: "Tue", issues: 9 },
    { day: "Wed", issues: 15 },
    { day: "Thu", issues: 6 },
    { day: "Fri", issues: 11 }
  ];

  return (
    <div className="bg-white shadow rounded-lg p-6">
      <h2 className="text-lg font-semibold mb-4">
        Accessibility Issues Trend
      </h2>

      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="issues" stroke="#2563eb" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>

    </div>
  );
}