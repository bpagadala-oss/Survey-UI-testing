import React from 'react';
import { ChevronLeft, Bell, User } from 'lucide-react';

export default function Header() {
  return (
    <div className="bg-white border-b border-slate-200 shadow-sm px-8 py-4">
      <div className="flex items-center justify-between">
        {/* Left: Back Button */}
        <div className="flex items-center gap-4">
          <button className="text-blue-600 hover:text-blue-700 transition-colors">
            <ChevronLeft size={28} className="stroke-2" />
          </button>
          <span className="text-sm text-slate-500">Back</span>
        </div>

        {/* Center: Title */}
        <h1 className="text-4xl font-bold text-slate-900 tracking-tight">
          Smart Order
        </h1>

        {/* Right: Icons */}
        <div className="flex items-center gap-6">
          {/* AI Assistant Icon */}
          <button className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-shadow cursor-pointer">
            <span className="text-xl font-bold">⚡</span>
          </button>
        </div>
      </div>
    </div>
  );
}
