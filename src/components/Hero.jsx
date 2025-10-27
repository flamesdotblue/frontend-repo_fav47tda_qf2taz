export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-emerald-100" aria-hidden="true" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700 ring-1 ring-inset ring-emerald-200">Fresh. Fast. Friendly.</span>
            <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
              Your daily groceries, delivered in minutes
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-xl">
              Shop fresh produce, pantry staples, and household essentials. Schedule same‑day delivery or free pickup at checkout.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#featured" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-emerald-600 text-white font-medium shadow hover:bg-emerald-700 transition">
                Shop Featured Deals
              </a>
              <a href="#categories" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-white text-gray-900 font-medium ring-1 ring-gray-200 hover:ring-gray-300 transition">
                Browse Categories
              </a>
            </div>
            <dl className="mt-8 grid grid-cols-3 gap-6 text-sm text-gray-700">
              <div>
                <dt className="font-semibold">Delivery</dt>
                <dd className="text-gray-600">As fast as 30 mins</dd>
              </div>
              <div>
                <dt className="font-semibold">Savings</dt>
                <dd className="text-gray-600">Daily promos</dd>
              </div>
              <div>
                <dt className="font-semibold">Quality</dt>
                <dd className="text-gray-600">100% freshness</dd>
              </div>
            </dl>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-600 shadow-lg">
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col">
                <div className="mt-auto grid grid-cols-3 gap-3">
                  {["Strawberries","Avocados","Broccoli","Cereal","Pasta","Olive Oil","Eggs","Milk","Yogurt"].map((item, idx) => (
                    <div key={idx} className="rounded-lg bg-white/95 backdrop-blur p-3 text-center shadow-sm">
                      <div className="w-10 h-10 mx-auto rounded-full bg-emerald-100" />
                      <p className="mt-2 text-xs font-medium text-gray-800 truncate">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
