import { useState } from 'react';
import { ShoppingCart, Search, User, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/80 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              className="md:hidden p-2 rounded-md hover:bg-gray-100"
              aria-label="Toggle Menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            <a href="#" className="font-bold text-xl tracking-tight">
              FreshMart
            </a>
            <nav className="hidden md:flex items-center gap-6 ml-8 text-sm text-gray-600">
              <a href="#deals" className="hover:text-gray-900">Deals</a>
              <a href="#categories" className="hover:text-gray-900">Categories</a>
              <a href="#featured" className="hover:text-gray-900">Featured</a>
              <a href="#contact" className="hover:text-gray-900">Contact</a>
            </nav>
          </div>

          <div className="hidden lg:flex items-center flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                <Search className="w-4 h-4" />
              </span>
              <input
                type="text"
                placeholder="Search for fresh produce, snacks, drinks..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="lg:hidden p-2 rounded-md hover:bg-gray-100" aria-label="Search">
              <Search className="w-5 h-5" />
            </button>
            <button className="p-2 rounded-md hover:bg-gray-100" aria-label="Account">
              <User className="w-5 h-5" />
            </button>
            <button className="relative p-2 rounded-md hover:bg-gray-100" aria-label="Cart">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 inline-flex items-center justify-center text-xs font-medium bg-emerald-500 text-white rounded-full w-5 h-5">
                3
              </span>
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <nav className="grid gap-2 text-sm text-gray-700">
              <a href="#deals" className="px-3 py-2 rounded-md hover:bg-gray-100">Deals</a>
              <a href="#categories" className="px-3 py-2 rounded-md hover:bg-gray-100">Categories</a>
              <a href="#featured" className="px-3 py-2 rounded-md hover:bg-gray-100">Featured</a>
              <a href="#contact" className="px-3 py-2 rounded-md hover:bg-gray-100">Contact</a>
              <div className="px-3 pt-2">
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                    <Search className="w-4 h-4" />
                  </span>
                  <input
                    type="text"
                    placeholder="Search groceries..."
                    className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
