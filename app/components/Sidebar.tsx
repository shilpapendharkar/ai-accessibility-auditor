"use client";

import Link from "next/link";
import { LayoutDashboard, Search, History, Settings } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-white border-r h-screen p-6 flex flex-col">

      {/* Logo */}
      <div className="text-xl font-bold text-blue-600 mb-10">
        AI Auditor
      </div>

      {/* Navigation */}
      <nav className="flex flex-col space-y-4">

        <Link
          href="/"
          className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 hover:bg-gray-100 p-3 rounded-lg transition"
        >
          <LayoutDashboard size={18} />
          <span>Dashboard</span>
        </Link>

        <Link
          href="/audit"
          className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 hover:bg-gray-100 p-3 rounded-lg transition"
        >
          <Search size={18} />
          <span>New Audit</span>
        </Link>

        <Link
          href="/history"
          className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 hover:bg-gray-100 p-3 rounded-lg transition"
        >
          <History size={18} />
          <span>Audit History</span>
        </Link>

        <Link
          href="/settings"
          className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 hover:bg-gray-100 p-3 rounded-lg transition"
        >
          <Settings size={18} />
          <span>Settings</span>
        </Link>

      </nav>

      {/* Bottom User Section */}
      <div className="pt-10 border-t">

        <div className="flex items-center space-x-3">

          <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
            S
          </div>

          <div>
            <p className="text-sm font-medium">Shilpa</p>
            <p className="text-xs text-gray-500">UI Architect</p>
          </div>

        </div>

      </div>

    </aside>
  );
}