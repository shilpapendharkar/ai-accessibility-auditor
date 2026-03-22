// components/Navbar.tsx
export default function Navbar() {
  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <h1 className="font-bold text-xl">AI Accessibility Platform</h1>
      <div className="flex space-x-6 text-blue-600 font-medium">
        <a href="/" className="border-b-2 border-blue-600">Dashboard</a>
        <a href="/audit">New Audit</a>
        <a href="/history">History</a>
        <a href="/settings">Settings</a>
      </div>
    </nav>
  )
}