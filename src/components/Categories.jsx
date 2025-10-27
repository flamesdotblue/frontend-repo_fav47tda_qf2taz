const categories = [
  { name: 'Fresh Produce', color: 'from-green-100 to-green-200', emoji: '🥬', desc: 'Fruits & veggies' },
  { name: 'Bakery', color: 'from-amber-100 to-amber-200', emoji: '🥐', desc: 'Breads & pastries' },
  { name: 'Dairy & Eggs', color: 'from-sky-100 to-sky-200', emoji: '🥛', desc: 'Milk, cheese, yogurt' },
  { name: 'Meat & Seafood', color: 'from-rose-100 to-rose-200', emoji: '🍗', desc: 'Fresh proteins' },
  { name: 'Snacks', color: 'from-fuchsia-100 to-fuchsia-200', emoji: '🍿', desc: 'Chips & treats' },
  { name: 'Beverages', color: 'from-cyan-100 to-cyan-200', emoji: '🥤', desc: 'Juice, soda, water' },
  { name: 'Pantry', color: 'from-violet-100 to-violet-200', emoji: '🧂', desc: 'Staples & sauces' },
  { name: 'Household', color: 'from-gray-100 to-gray-200', emoji: '🧻', desc: 'Home essentials' },
];

export default function Categories() {
  return (
    <section id="categories" className="py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-900">Shop by category</h2>
            <p className="mt-1 text-gray-600">Everything you need, neatly organized.</p>
          </div>
          <a href="#" className="hidden md:inline-flex text-emerald-700 hover:text-emerald-800 font-medium">View all</a>
        </div>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href="#"
              className={`group rounded-xl p-4 bg-gradient-to-br ${cat.color} ring-1 ring-black/5 hover:shadow-md transition`}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-lg bg-white/80 flex items-center justify-center text-xl shadow-sm">
                  <span aria-hidden>{cat.emoji}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">{cat.name}</h3>
                  <p className="text-xs text-gray-600">{cat.desc}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
