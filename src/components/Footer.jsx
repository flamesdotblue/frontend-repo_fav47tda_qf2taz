export default function Footer() {
  return (
    <footer id="contact" className="mt-12 border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
          <div>
            <h3 className="font-semibold text-gray-900">FreshMart</h3>
            <p className="mt-2 text-gray-600">
              Your neighborhood supermarket for everything fresh, delivered fast.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Shop</h4>
            <ul className="mt-2 space-y-2 text-gray-600">
              <li><a className="hover:text-gray-900" href="#categories">All Categories</a></li>
              <li><a className="hover:text-gray-900" href="#featured">Featured Deals</a></li>
              <li><a className="hover:text-gray-900" href="#">Gift Cards</a></li>
              <li><a className="hover:text-gray-900" href="#">Weekly Ad</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Help</h4>
            <ul className="mt-2 space-y-2 text-gray-600">
              <li><a className="hover:text-gray-900" href="#">Delivery Options</a></li>
              <li><a className="hover:text-gray-900" href="#">Returns</a></li>
              <li><a className="hover:text-gray-900" href="#">Support</a></li>
              <li><a className="hover:text-gray-900" href="#">Accessibility</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">Get the latest</h4>
            <p className="mt-2 text-gray-600">Sign up for weekly deals and seasonal picks.</p>
            <form className="mt-3 flex gap-2">
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="flex-1 rounded-lg border border-gray-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-500"
              />
              <button className="px-4 py-2 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-700">Join</button>
            </form>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>© {new Date().getFullYear()} FreshMart. All rights reserved.</p>
          <div className="mt-3 md:mt-0 flex items-center gap-4">
            <a href="#" className="hover:text-gray-700">Privacy</a>
            <a href="#" className="hover:text-gray-700">Terms</a>
            <a href="#" className="hover:text-gray-700">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
