import { Star, Tag } from 'lucide-react';

const products = [
  { id: 1, name: 'Organic Bananas', price: 1.49, unit: 'lb', rating: 4.8, badge: 'Best Seller', color: 'from-yellow-50 to-amber-50' },
  { id: 2, name: 'Free‑Range Eggs (12ct)', price: 3.99, unit: 'dozen', rating: 4.7, badge: 'Fresh Pick', color: 'from-emerald-50 to-green-50' },
  { id: 3, name: 'Almond Milk (1L)', price: 2.49, unit: 'carton', rating: 4.5, badge: 'Dairy‑Free', color: 'from-sky-50 to-cyan-50' },
  { id: 4, name: 'Artisan Sourdough', price: 4.29, unit: 'loaf', rating: 4.9, badge: 'Bakery Fav', color: 'from-rose-50 to-pink-50' },
];

export default function FeaturedProducts() {
  return (
    <section id="featured" className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">Featured deals</h2>
            <p className="mt-1 text-gray-600">Hand‑picked favorites with great prices.</p>
          </div>
          <a href="#" className="hidden md:inline-flex text-emerald-700 hover:text-emerald-800 font-medium">See more</a>
        </div>

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div key={p.id} className={`group rounded-2xl bg-gradient-to-br ${p.color} ring-1 ring-black/5 p-4 transition hover:shadow-md`}>
              <div className="aspect-square rounded-xl bg-white/90 flex items-center justify-center text-6xl">🥑</div>
              <div className="mt-4 flex items-center justify-between">
                <h3 className="font-semibold text-gray-900 group-hover:underline">{p.name}</h3>
                <span className="inline-flex items-center gap-1 text-xs text-emerald-700 bg-emerald-100 px-2 py-1 rounded-full">
                  <Tag className="w-3 h-3" /> {p.badge}
                </span>
              </div>
              <div className="mt-1 flex items-center justify-between text-sm">
                <div className="flex items-center gap-1 text-amber-600">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="font-medium">{p.rating.toFixed(1)}</span>
                </div>
                <div className="text-gray-700">
                  <span className="text-lg font-bold text-gray-900">${p.price.toFixed(2)}</span>
                  <span className="text-gray-500"> / {p.unit}</span>
                </div>
              </div>
              <button className="mt-4 w-full inline-flex items-center justify-center px-4 py-2 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition">
                Add to cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
