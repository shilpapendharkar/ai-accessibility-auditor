// components/Sidebar.tsx
export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-50 p-4 flex flex-col space-y-6">
      <div className="text-gray-800 font-semibold">Welcome, User!</div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded">New Audit</button>
      <button className="bg-gray-200 px-4 py-2 rounded">History</button>
    </aside>
  )
}