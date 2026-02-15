# 📚 Component Extension Examples

This file contains example code snippets showing how to extend the existing components.

---

## 1️⃣ Adding a Product Card Component

### Create: `src/components/ProductCard.tsx`

```typescript
import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  stock: number;
  discount?: number;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (id: string) => void;
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="bg-white rounded-lg border border-slate-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      {/* Image */}
      <div className="bg-slate-100 aspect-square flex items-center justify-center relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        {product.discount && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-lg text-sm font-semibold">
            -{product.discount}%
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-slate-900 mb-2 truncate">{product.name}</h3>
        
        {/* Pricing */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-lg font-bold text-blue-600">${product.price}</span>
          {product.discount && (
            <span className="text-sm text-slate-400 line-through">
              ${Math.round(product.price / (1 - product.discount / 100))}
            </span>
          )}
        </div>

        {/* Stock */}
        <div className="mb-3 text-sm">
          <span className={product.stock > 0 ? 'text-green-600' : 'text-red-600'}>
            {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
          </span>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <button
            onClick={() => onAddToCart(product.id)}
            disabled={product.stock === 0}
            className="flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 text-white py-2 rounded-lg font-medium transition-colors"
          >
            <ShoppingCart size={18} />
            Add
          </button>
          <button className="flex items-center justify-center w-10 h-10 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors">
            <Heart size={18} className="text-slate-600" />
          </button>
        </div>
      </div>
    </div>
  );
}
```

### Usage in ContentArea:

```typescript
import ProductCard from './ProductCard';

const products = [
  { id: '1', name: 'Coca Cola 2L', image: 'url', price: 2.99, stock: 50, discount: 10 },
  { id: '2', name: 'Sprite 2L', image: 'url', price: 2.99, stock: 30 },
  { id: '3', name: 'Fanta Orange', image: 'url', price: 1.99, stock: 0 },
];

<div className="grid grid-cols-3 gap-6">
  {products.map((product) => (
    <ProductCard
      key={product.id}
      product={product}
      onAddToCart={handleAddToCart}
    />
  ))}
</div>
```

---

## 2️⃣ Adding a Recommendation Card Component

### Create: `src/components/RecommendationCard.tsx`

```typescript
import React from 'react';
import { TrendingUp, Zap } from 'lucide-react';

interface Recommendation {
  id: string;
  title: string;
  description: string;
  reason: string;
  icon: 'trending' | 'ai' | 'popular';
  action: string;
}

interface RecommendationCardProps {
  rec: Recommendation;
  onAction: () => void;
}

export default function RecommendationCard({ rec, onAction }: RecommendationCardProps) {
  const iconMap = {
    trending: <TrendingUp className="text-green-500" size={24} />,
    ai: <Zap className="text-yellow-500" size={24} />,
    popular: <span className="text-2xl">⭐</span>,
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg border border-blue-200 p-6">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">{iconMap[rec.icon]}</div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-slate-900 mb-1">{rec.title}</h3>
          <p className="text-sm text-slate-700 mb-2">{rec.description}</p>
          <p className="text-xs text-blue-600 font-medium mb-3">{rec.reason}</p>
          <button
            onClick={onAction}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
          >
            {rec.action}
          </button>
        </div>
      </div>
    </div>
  );
}
```

---

## 3️⃣ Adding a Store Stats Widget

### Create: `src/components/StoreStats.tsx`

```typescript
import React from 'react';
import { TrendingUp, Users, Package, AlertCircle } from 'lucide-react';

interface Stat {
  label: string;
  value: string | number;
  change: number;
  icon: React.ReactNode;
}

export default function StoreStats() {
  const stats: Stat[] = [
    {
      label: 'Total Sales',
      value: '$12,450',
      change: 12.5,
      icon: <TrendingUp className="text-blue-600" />,
    },
    {
      label: 'Transactions',
      value: '2,842',
      change: 8.2,
      icon: <Users className="text-green-600" />,
    },
    {
      label: 'Products Sold',
      value: '5,234',
      change: -2.1,
      icon: <Package className="text-purple-600" />,
    },
    {
      label: 'Stock Issues',
      value: '12',
      change: -15.3,
      icon: <AlertCircle className="text-red-600" />,
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {stats.map((stat, idx) => (
        <div key={idx} className="bg-white rounded-lg border border-slate-200 p-4">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-slate-600">{stat.label}</span>
            {stat.icon}
          </div>
          <div className="text-2xl font-bold text-slate-900 mb-2">{stat.value}</div>
          <div className={`text-sm font-medium ${stat.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {stat.change >= 0 ? '↑' : '↓'} {Math.abs(stat.change)}%
          </div>
        </div>
      ))}
    </div>
  );
}
```

---

## 4️⃣ Adding a Filter Panel

### Create: `src/components/FilterPanel.tsx`

```typescript
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FilterOption {
  id: string;
  label: string;
  checked: boolean;
}

export default function FilterPanel() {
  const [expanded, setExpanded] = useState({
    category: true,
    price: false,
    rating: false,
  });

  const [filters, setFilters] = useState({
    category: [
      { id: '1', label: 'Beverages', checked: false },
      { id: '2', label: 'Snacks', checked: false },
      { id: '3', label: 'Dairy', checked: false },
    ],
    price: [
      { id: '1', label: 'Under $5', checked: false },
      { id: '2', label: '$5 - $10', checked: false },
      { id: '3', label: 'Over $10', checked: false },
    ],
  });

  const handleFilterChange = (group: string, id: string) => {
    setFilters(prev => ({
      ...prev,
      [group]: prev[group as keyof typeof prev].map((item: FilterOption) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      ),
    }));
  };

  return (
    <div className="bg-white rounded-lg border border-slate-200 p-4 w-64">
      <h3 className="font-bold text-slate-900 mb-4">Filters</h3>

      {/* Category Filter */}
      <div className="mb-4">
        <button
          onClick={() => setExpanded(prev => ({ ...prev, category: !prev.category }))}
          className="flex items-center justify-between w-full p-2 hover:bg-slate-100 rounded"
        >
          <span className="font-medium text-slate-900">Category</span>
          <ChevronDown size={20} className={expanded.category ? 'rotate-180' : ''} />
        </button>
        {expanded.category && (
          <div className="ml-2 mt-2 space-y-2">
            {filters.category.map(option => (
              <label key={option.id} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={option.checked}
                  onChange={() => handleFilterChange('category', option.id)}
                  className="w-4 h-4 rounded border-slate-300"
                />
                <span className="text-sm text-slate-700">{option.label}</span>
              </label>
            ))}
          </div>
        )}
      </div>

      {/* Price Filter */}
      <div>
        <button
          onClick={() => setExpanded(prev => ({ ...prev, price: !prev.price }))}
          className="flex items-center justify-between w-full p-2 hover:bg-slate-100 rounded"
        >
          <span className="font-medium text-slate-900">Price</span>
          <ChevronDown size={20} className={expanded.price ? 'rotate-180' : ''} />
        </button>
        {expanded.price && (
          <div className="ml-2 mt-2 space-y-2">
            {filters.price.map(option => (
              <label key={option.id} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={option.checked}
                  onChange={() => handleFilterChange('price', option.id)}
                  className="w-4 h-4 rounded border-slate-300"
                />
                <span className="text-sm text-slate-700">{option.label}</span>
              </label>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
```

---

## 5️⃣ Adding State Management (useState Hook)

### Example: Enhanced ContentArea with Product List

```typescript
import React, { useState } from 'react';
import ProductCard from './ProductCard';

interface Product {
  id: string;
  name: string;
  price: number;
  stock: number;
}

export default function EnhancedContentArea() {
  const [cart, setCart] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  // Mock products - replace with API call
  const [products] = useState<Product[]>([
    { id: '1', name: 'Coca Cola', price: 2.99, stock: 50 },
    { id: '2', name: 'Sprite', price: 2.99, stock: 30 },
  ]);

  const handleAddToCart = (productId: string) => {
    setCart(prev => [...prev, productId]);
    // Show toast notification
    console.log(`Added product ${productId} to cart`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-slate-900">Products</h2>
        {cart.length > 0 && (
          <div className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-medium">
            Cart: {cart.length} items
          </div>
        )}
      </div>

      {/* Loading State */}
      {loading && (
        <div className="flex items-center justify-center h-96">
          <div className="animate-spin">⚙️</div>
        </div>
      )}

      {/* Products Grid */}
      {!loading && (
        <div className="grid grid-cols-3 gap-6">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      )}
    </div>
  );
}
```

---

## 📌 Integration Steps

1. **Create Component**: Save file in `src/components/`
2. **Import**: Add to App.tsx or parent component
3. **Use**: Add JSX to render it
4. **Style**: Use Tailwind classes (already configured)

---

## 🎯 Tips

- All components use Tailwind CSS utilities
- Icons available from `lucide-react`
- TypeScript for type safety
- Props interface for flexibility
- Functional components with React hooks

---

## 🚀 Next Level

Once comfortable with these examples:
- Add Context API for state management
- Implement Redux for complex state
- Connect to real APIs
- Add animations with Framer Motion
- Create custom hooks for logic
