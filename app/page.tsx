// app/page.tsx
import RecentAuditsCard from "./audit/components/RecentAuditsCard";
import AnalyticsChart from "./audit/components/AnalyticsChart";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function Dashboard() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 space-y-6">
          <div className="grid grid-cols-3 gap-6">
            <RecentAuditsCard />
            <AnalyticsChart />
            <div className="bg-white rounded shadow p-4">Additional Widget</div>
          </div>
        </main>
      </div>
    </div>
  )
}