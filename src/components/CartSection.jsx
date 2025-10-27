import { useMemo, useState } from 'react';
import { Minus, Plus, ShoppingCart, Trash2 } from 'lucide-react';

const initialItems = [
  { id: 'apple', name: 'Fresh Apples (1kg)', price: 3.49, qty: 2, image: 'https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?q=80&w=1200&auto=format&fit=crop' },
  { id: 'milk', name: 'Organic Milk (1L)', price: 1.99, qty: 1, image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop' },
  { id: 'bread', name: 'Wholegrain Bread', price: 2.49, qty: 1, image: 'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?q=80&w=1200&auto=format&fit=crop' },
];

export default function CartSection() {
  const [items, setItems] = useState(initialItems);

  const updateQty = (id, delta) => {
    setItems((prev) =>
      prev
        .map((it) => (it.id === id ? { ...it, qty: Math.max(0, it.qty + delta) } : it))
        .filter((it) => it.qty > 0)
    );
  };

  const removeItem = (id) => {
    setItems((prev) => prev.filter((it) => it.id !== id));
  };

  const totals = useMemo(() => {
    const subtotal = items.reduce((sum, it) => sum + it.price * it.qty, 0);
    const shipping = subtotal > 25 || subtotal === 0 ? 0 : 4.99;
    const tax = subtotal * 0.07;
    const total = subtotal + tax + shipping;
    return { subtotal, shipping, tax, total };
  }, [items]);

  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-6 flex items-center gap-3">
        <div className="rounded-xl bg-emerald-100 p-2 text-emerald-600"><ShoppingCart /></div>
        <h2 className="text-2xl font-semibold tracking-tight">Your Cart</h2>
        <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">{items.length} items</span>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="md:col-span-2 space-y-4">
          {items.length === 0 ? (
            <div className="rounded-xl border border-dashed p-10 text-center text-gray-600">
              Your cart is empty. Start adding some fresh picks!
            </div>
          ) : (
            items.map((it) => (
              <div key={it.id} className="flex items-center gap-4 rounded-xl border bg-white p-4 shadow-sm">
                <img src={it.image} alt={it.name} className="h-16 w-16 rounded-lg object-cover" />
                <div className="flex-1">
                  <p className="font-medium">{it.name}</p>
                  <p className="text-sm text-gray-500">${it.price.toFixed(2)} each</p>
                </div>
                <div className="flex items-center gap-2">
                  <button aria-label="Decrease quantity" onClick={() => updateQty(it.id, -1)} className="rounded-md border px-2 py-1 text-gray-700 hover:bg-gray-50">
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-8 text-center font-medium">{it.qty}</span>
                  <button aria-label="Increase quantity" onClick={() => updateQty(it.id, 1)} className="rounded-md border px-2 py-1 text-gray-700 hover:bg-gray-50">
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
                <div className="w-24 text-right font-semibold">${(it.price * it.qty).toFixed(2)}</div>
                <button aria-label={`Remove ${it.name}`} onClick={() => removeItem(it.id)} className="rounded-md p-2 text-red-500 hover:bg-red-50">
                  <Trash2 className="h-5 w-5" />
                </button>
              </div>
            ))
          )}
        </div>

        <aside className="space-y-4">
          <div className="rounded-xl border bg-white p-5 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold">Order Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between text-gray-600"><span>Subtotal</span><span>${totals.subtotal.toFixed(2)}</span></div>
              <div className="flex justify-between text-gray-600"><span>Tax (7%)</span><span>${totals.tax.toFixed(2)}</span></div>
              <div className="flex justify-between text-gray-600"><span>Shipping</span><span>{totals.shipping === 0 ? 'Free' : `$${totals.shipping.toFixed(2)}`}</span></div>
              <div className="my-3 h-px bg-gray-200" />
              <div className="flex justify-between text-base font-semibold"><span>Total</span><span>${totals.total.toFixed(2)}</span></div>
            </div>
            <button disabled={items.length === 0} className="mt-5 w-full rounded-lg bg-emerald-600 px-4 py-3 font-medium text-white transition hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-60">
              Proceed to Checkout
            </button>
            <p className="mt-2 text-center text-xs text-gray-500">Free shipping on orders over $25</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
