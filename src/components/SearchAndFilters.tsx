import React from 'react';
import { Search, Filter, BarChart3 } from 'lucide-react';

interface SearchAndFiltersProps {
  activeTab: string;
  previewEnabled: boolean;
  setPreviewEnabled: (enabled: boolean) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function SearchAndFilters({
  activeTab,
  previewEnabled,
  setPreviewEnabled,
  searchQuery,
  setSearchQuery,
}: SearchAndFiltersProps) {
  return (
    <div className="bg-white border-b border-slate-200 px-8 py-4">
      <div className="flex items-center gap-4">
        {/* Search Bar */}
        <div className="flex-1 flex items-center bg-slate-100 rounded-lg px-4 py-2 border border-slate-200 hover:border-slate-300 transition-colors">
          <Search size={20} className="text-slate-400" />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-transparent ml-3 w-full outline-none text-slate-700 placeholder-slate-400"
          />
        </div>

        {/* Pre-fill AI Suggestions Toggle */}
        <div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-lg border border-slate-200">
          <span className="text-sm font-medium text-slate-700">Pre-fill AI Suggestions</span>
          <button
            onClick={() => setPreviewEnabled(!previewEnabled)}
            className={`relative inline-flex w-12 h-6 rounded-full transition-colors ${
              previewEnabled ? 'bg-blue-600' : 'bg-slate-300'
            }`}
          >
            <span
              className={`inline-block w-5 h-5 transform rounded-full bg-white transition-transform ${
                previewEnabled ? 'translate-x-6' : 'translate-x-0.5'
              }`}
            />
          </button>
        </div>

        {/* Filter Button */}
        <button className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg border border-slate-200 transition-colors">
          <BarChart3 size={20} className="text-slate-600" />
        </button>

        {/* Filter Icon */}
        <button className="flex items-center justify-center w-10 h-10 bg-blue-100 hover:bg-blue-200 rounded-lg transition-colors">
          <Filter size={20} className="text-blue-600" />
        </button>
      </div>
    </div>
  );
}
