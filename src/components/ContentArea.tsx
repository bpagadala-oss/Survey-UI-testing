import React from 'react';

interface ContentAreaProps {
  activeTab: string;
  searchQuery: string;
}

export default function ContentArea({ activeTab, searchQuery }: ContentAreaProps) {
  return (
    <div className="flex-1 overflow-auto p-8">
      <div className="max-w-full">
        {/* Placeholder for content - expandable for future enhancements */}
        <div className="bg-white rounded-lg border border-slate-200 shadow-sm p-12 min-h-96">
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="mb-4 text-6xl opacity-20">📦</div>
            <h2 className="text-2xl font-semibold text-slate-400 mb-2">Content Area</h2>
            <p className="text-slate-400 mb-6 max-w-md">
              This space is reserved for future enhancements. 
              Add product lists, order details, and recommendations here.
            </p>
            <div className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-lg text-sm font-medium">
              Tab: {activeTab.toUpperCase()} {searchQuery && `| Search: "${searchQuery}"`}
            </div>
          </div>
        </div>

        {/* Additional empty space for layout structure */}
        <div className="grid grid-cols-3 gap-6 mt-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-lg border border-slate-200 shadow-sm p-6 min-h-48">
              <div className="bg-slate-100 rounded h-24 mb-4 flex items-center justify-center">
                <span className="text-4xl opacity-20">+</span>
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-slate-100 rounded w-3/4"></div>
                <div className="h-3 bg-slate-100 rounded w-1/2"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
