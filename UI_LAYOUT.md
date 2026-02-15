# Smart Order iPad App - UI Layout Overview

## Screen Layout (iPad 11-inch, 2160 x 1668px)

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                            HEADER SECTION (100px)                          │
│  ← Back  │  "Smart Order" (centered, large)  │  🚀 AI Assistant Icon      │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│              NAVIGATION TABS (60px)                                        │
│  ┌──────────────────┐  ┌────────┐  ┌─────────────┐                        │
│  │ ⭐ AI Recommended│  │  All   │  │ Promotions  │                        │
│  └──────────────────┘  └────────┘  └─────────────┘                        │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│                    SEARCH & FILTERS BAR (70px)                            │
│  ┌──────────────────────────────────┐  ┌─────────────────┐  ┌──┐ ┌──┐   │
│  │ 🔍 Search...                     │  │ Pre-fill AI ⚪  │  │📊│ │🔘│   │
│  └──────────────────────────────────┘  └─────────────────┘  └──┘ └──┘   │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│                         CONTENT AREA                                       │
│                    (Expandable for future use)                             │
│                                                                             │
│  ┌───────────────────────────────────────────────────────────────────────┐ │
│  │                                                                       │ │
│  │                    Content Area Placeholder                          │ │
│  │                     (Ready for enhancements)                         │ │
│  │                                                                       │ │
│  │     Tab: AI-RECOMMENDED | Search: "user query"                       │ │
│  │                                                                       │ │
│  └───────────────────────────────────────────────────────────────────────┘ │
│                                                                             │
│  ┌──────────────────┐  ┌──────────────────┐  ┌──────────────────┐        │
│  │                  │  │                  │  │                  │        │
│  │   Card Slot 1    │  │   Card Slot 2    │  │   Card Slot 3    │        │
│  │                  │  │                  │  │                  │        │
│  └──────────────────┘  └──────────────────┘  └──────────────────┘        │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Component Architecture

```
App.tsx (Main Container)
├── Header.tsx
│   ├── Back Button
│   ├── Title "Smart Order"
│   └── AI Assistant Icon
├── NavigationTabs.tsx
│   ├── AI Recommended Tab (Active)
│   ├── All Tab
│   └── Promotions Tab
├── SearchAndFilters.tsx
│   ├── Search Input
│   ├── Pre-fill AI Suggestions Toggle
│   ├── Filter Button
│   └── Chart/Analytics Button
└── ContentArea.tsx
    ├── Main Content Placeholder
    └── 3-Column Grid (expandable)
```

## Color Palette

| Element | Color | Usage |
|---------|-------|-------|
| Primary Button | #2563EB (Blue) | Active tabs, main actions |
| Background | #F8FAFC (Slate 50) | Page background |
| Card Background | #FFFFFF (White) | Cards and surfaces |
| Border | #E2E8F0 (Slate 200) | Dividers and borders |
| Text Primary | #0F172A (Slate 900) | Main text |
| Text Secondary | #475569 (Slate 600) | Secondary text |
| Icon Color | #64748B (Slate 500) | Icon tint |

## Typography

- **Title**: 36px, Bold (Font: System Font)
- **Headings**: 24px, Semibold
- **Body**: 16px, Regular
- **Small**: 14px, Regular
- **Micro**: 12px, Regular

## Spacing

- **Padding**: 8px, 16px, 24px, 32px, 48px
- **Gap**: 12px, 16px, 24px
- **Margin**: 16px, 24px, 32px

## Interactive States

### Buttons
- **Default**: Gray background, hover effect
- **Active**: Blue background, white text
- **Disabled**: Slate 100 background, gray text

### Toggles
- **Off**: Gray background, white thumb
- **On**: Blue background, white thumb (translated right)

### Search Input
- **Default**: Slate 100 background, slate border
- **Focus**: Slate 100 background, slate 300 border
- **Filled**: Shows search query with text

## Future Enhancement Areas

1. **Product Cards** - Grid layout with images, pricing, stock
2. **Order Management** - Order history, cart, checkout flow
3. **Analytics** - Sales trends, promotions performance
4. **Store Info** - Location, compliance, metrics
5. **Notifications** - Alerts, system messages
6. **Settings** - User preferences, store configuration

## Responsive Considerations

- Desktop: Full layout (iPad view)
- Tablet: Maintained spacing and proportions
- Mobile: Stack layout (if needed in future)

## Performance Optimizations

- Component-based architecture for reusability
- Tailwind CSS for minimal CSS overhead
- Lucide React icons (lightweight SVG)
- Lazy loading ready for content sections
