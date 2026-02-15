# Smart Order - iPad App for Consumer Goods Merchandiser

A modern, responsive iPad UI for the Smart Order app, designed for consumer goods merchandisers. Built with React, TypeScript, and Tailwind CSS.

## Features

### ✨ Header Section
- Back button with label
- Clean "Smart Order" title (centered, large typography)
- AI Assistant icon (blue gradient button with lightning icon)

### 🎯 Navigation Tabs
- **AI Recommended** (active state with blue background)
- **All** products
- **Promotions** tab
- Smooth transitions between tabs

### 🔍 Search & Filter Bar
- Search input with icon
- **Pre-fill AI Suggestions** toggle switch (enabled by default)
- Filter button with icon
- Aesthetic and intuitive layout

### 📦 Content Area
- Expandable space for future enhancements
- Placeholder grid layout (3 columns)
- Ready for:
  - Product lists and cards
  - Order details
  - AI recommendations
  - Analytics and insights

## Design Highlights

- **iPad-Optimized**: Full screen utilization with generous spacing
- **Modern Aesthetics**: Clean white cards, subtle shadows, blue accent colors
- **Responsive Layout**: Flexbox and grid for perfect alignment
- **Apple-style**: Native system fonts and smooth interactions
- **Accessibility**: Proper button states and clear visual hierarchy

## Project Structure

```
smart-order-ipad-app/
├── src/
│   ├── components/
│   │   ├── Header.tsx          # Main header with title and icons
│   │   ├── NavigationTabs.tsx   # Tab navigation
│   │   ├── SearchAndFilters.tsx # Search bar and filters
│   │   └── ContentArea.tsx      # Expandable content placeholder
│   ├── App.tsx                 # Main app component
│   ├── main.tsx                # Entry point
│   └── index.css               # Global styles
├── index.html                  # HTML template
├── vite.config.ts             # Vite configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will open in your browser at `http://localhost:5173`

### Build

```bash
npm run build
```

## Dependencies

- **React 18**: UI library
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icons
- **Vite**: Lightning-fast build tool

## Future Enhancements

The content area is designed to easily accommodate:

1. **Product Catalog Section**
   - Product cards with images
   - Stock levels and pricing
   - Quick add-to-order functionality

2. **AI Recommendations Widget**
   - Personalized product suggestions
   - Based on shelf space and sales data
   - One-click ordering

3. **Analytics Dashboard**
   - Sales trends
   - Promotion performance
   - Store compliance metrics

4. **Promotional Tools**
   - Active campaigns
   - Deal management
   - Offer scheduling

5. **Store Management**
   - Store information
   - Stock availability
   - Order history

## Browser Support

- Safari (latest)
- Chrome (latest)
- Firefox (latest)
- Edge (latest)

## Color Scheme

- **Primary**: Blue (`#2563eb`)
- **Background**: Slate 50-100 (`#f8fafc` - `#f1f5f9`)
- **Cards**: White (`#ffffff`)
- **Text**: Slate 700-900 (`#334155` - `#0f172a`)
- **Borders**: Slate 200 (`#e2e8f0`)

## License

Proprietary - Consumer Goods Merchandiser Application
