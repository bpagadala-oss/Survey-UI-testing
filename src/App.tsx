import React, { useState } from 'react';
import { Search, Filter, BarChart3, ChevronLeft, Bell, User } from 'lucide-react';
import Header from './components/Header';
import NavigationTabs from './components/NavigationTabs';
import SearchAndFilters from './components/SearchAndFilters';
import ContentArea from './components/ContentArea';

export default function App() {
  const [activeTab, setActiveTab] = useState('ai-recommended');
  const [previewEnabled, setPreviewEnabled] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col overflow-hidden">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <div className="flex-1 overflow-hidden flex flex-col">
        {/* Navigation Tabs */}
        <NavigationTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Search and Filter Bar */}
        <SearchAndFilters 
          activeTab={activeTab}
          previewEnabled={previewEnabled}
          setPreviewEnabled={setPreviewEnabled}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        {/* Content Area */}
        <ContentArea activeTab={activeTab} searchQuery={searchQuery} />
      </div>
    </div>
  );
}
