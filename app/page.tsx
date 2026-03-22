import RecentAuditsCard from "./audit/components/RecentAuditsCard"
import AnalyticsChart from "./audit/components/AnalyticsChart"
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"

export default function Dashboard() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">

      <Navbar />

      <div className="flex flex-1">

        <Sidebar />

        <main className="flex-1 p-6">

          {/* Metric Cards */}
          <div className="grid grid-cols-3 gap-6 mb-6">

            <div className="bg-blue-500 text-white p-6 rounded-lg">
              <h3>Total Audits</h3>
              <p className="text-3xl font-bold">128</p>
            </div>

            <div className="bg-red-500 text-white p-6 rounded-lg">
              <h3>Issues Found</h3>
              <p className="text-3xl font-bold">345</p>
            </div>

            <div className="bg-green-500 text-white p-6 rounded-lg">
              <h3>Resolved</h3>
              <p className="text-3xl font-bold">210</p>
            </div>

          </div>

          {/* Dashboard Content */}
          <div className="grid grid-cols-3 gap-6">

            <div className="col-span-2">
              <RecentAuditsCard />
            </div>

            <AnalyticsChart />

          </div>

        </main>

      </div>
    </div>
  )
}