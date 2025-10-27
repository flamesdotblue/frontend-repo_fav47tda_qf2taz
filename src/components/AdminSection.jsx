import { useState } from 'react';
import { Package, Settings, Users } from 'lucide-react';

export default function AdminSection() {
  const [tab, setTab] = useState('products');

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-indigo-100 p-2 text-indigo-600"><Settings /></div>
          <h2 className="text-2xl font-semibold tracking-tight">Admin Dashboard</h2>
        </div>
        <div className="inline-flex overflow-hidden rounded-lg border">
          <button onClick={() => setTab('products')} className={`px-4 py-2 text-sm ${tab === 'products' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}>Products</button>
          <button onClick={() => setTab('users')} className={`px-4 py-2 text-sm ${tab === 'users' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}>Users</button>
          <button onClick={() => setTab('settings')} className={`px-4 py-2 text-sm ${tab === 'settings' ? 'bg-indigo-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}>Settings</button>
        </div>
      </div>

      {tab === 'products' && <ProductsPanel />}
      {tab === 'users' && <UsersPanel />}
      {tab === 'settings' && <SettingsPanel />}
    </section>
  );
}

function Card({ children }) {
  return <div className="rounded-xl border bg-white p-5 shadow-sm">{children}</div>;
}

function ProductsPanel() {
  const [form, setForm] = useState({ name: '', price: '', stock: '' });
  const [list, setList] = useState([
    { id: 'p-1', name: 'Bananas', price: 0.69, stock: 120 },
    { id: 'p-2', name: 'Orange Juice', price: 3.99, stock: 40 },
    { id: 'p-3', name: 'Eggs (12)', price: 2.99, stock: 85 },
  ]);

  const addProduct = (e) => {
    e.preventDefault();
    if (!form.name || !form.price) return;
    setList((prev) => [
      { id: `p-${Date.now()}`, name: form.name, price: parseFloat(form.price), stock: parseInt(form.stock || '0', 10) },
      ...prev,
    ]);
    setForm({ name: '', price: '', stock: '' });
  };

  return (
    <div className="grid gap-6 md:grid-cols-3">
      <Card>
        <div className="mb-4 flex items-center gap-2 text-indigo-600"><Package className="h-5 w-5" /><h3 className="font-semibold">Add Product</h3></div>
        <form onSubmit={addProduct} className="space-y-3">
          <div>
            <label className="mb-1 block text-sm text-gray-600">Name</label>
            <input value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" placeholder="e.g., Strawberries" />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="mb-1 block text-sm text-gray-600">Price ($)</label>
              <input type="number" step="0.01" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" placeholder="0.00" />
            </div>
            <div>
              <label className="mb-1 block text-sm text-gray-600">Stock</label>
              <input type="number" value={form.stock} onChange={(e) => setForm({ ...form, stock: e.target.value })} className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" placeholder="0" />
            </div>
          </div>
          <button className="w-full rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700">Save Product</button>
          <p className="text-xs text-gray-500">This demo updates only in your browser for now.</p>
        </form>
      </Card>

      <div className="md:col-span-2 space-y-3">
        <Card>
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2 text-indigo-600"><Package className="h-5 w-5" /><h3 className="font-semibold">Products</h3></div>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">{list.length} total</span>
          </div>
          <div className="divide-y">
            {list.map((p) => (
              <div key={p.id} className="grid grid-cols-6 items-center gap-3 py-3 text-sm">
                <div className="col-span-3 font-medium">{p.name}</div>
                <div className="col-span-1 text-gray-600">${p.price.toFixed(2)}</div>
                <div className="col-span-1 text-gray-600">{p.stock} in stock</div>
                <div className="col-span-1 text-right">
                  <button className="rounded-md px-3 py-1 text-indigo-600 hover:bg-indigo-50">Edit</button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}

function UsersPanel() {
  const users = [
    { id: 'u-1', name: 'Ava Stone', email: 'ava@example.com', role: 'Admin' },
    { id: 'u-2', name: 'Liam Brooks', email: 'liam@example.com', role: 'Customer' },
    { id: 'u-3', name: 'Mia Chen', email: 'mia@example.com', role: 'Customer' },
  ];

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <div className="flex items-center gap-2 text-indigo-600"><Users className="h-5 w-5" /><span className="font-semibold">Users</span></div>
          <p className="mt-2 text-3xl font-bold">{users.length}</p>
          <p className="text-sm text-gray-500">Active accounts</p>
        </Card>
        <Card>
          <div className="flex items-center gap-2 text-indigo-600"><Package className="h-5 w-5" /><span className="font-semibold">Orders</span></div>
          <p className="mt-2 text-3xl font-bold">128</p>
          <p className="text-sm text-gray-500">Last 30 days</p>
        </Card>
        <Card>
          <div className="flex items-center gap-2 text-indigo-600"><Settings className="h-5 w-5" /><span className="font-semibold">Issues</span></div>
          <p className="mt-2 text-3xl font-bold">3</p>
          <p className="text-sm text-gray-500">Open tickets</p>
        </Card>
      </div>
      <Card>
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-indigo-600"><Users className="h-5 w-5" /><h3 className="font-semibold">Recent Users</h3></div>
          <span className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-600">{users.length} total</span>
        </div>
        <div className="divide-y">
          {users.map((u) => (
            <div key={u.id} className="grid grid-cols-6 items-center gap-3 py-3 text-sm">
              <div className="col-span-2 font-medium">{u.name}</div>
              <div className="col-span-3 text-gray-600">{u.email}</div>
              <div className="col-span-1 text-right"><span className="rounded-full bg-indigo-50 px-2 py-1 text-xs text-indigo-600">{u.role}</span></div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

function SettingsPanel() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <Card>
        <h3 className="mb-2 font-semibold">Store Settings</h3>
        <div className="space-y-3 text-sm">
          <div>
            <label className="mb-1 block text-gray-600">Store name</label>
            <input className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" defaultValue="FreshMart" />
          </div>
          <div>
            <label className="mb-1 block text-gray-600">Support email</label>
            <input className="w-full rounded-lg border px-3 py-2 outline-none focus:ring-2 focus:ring-indigo-500" defaultValue="support@freshmart.com" />
          </div>
          <button className="rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-700">Save changes</button>
        </div>
      </Card>
      <Card>
        <h3 className="mb-2 font-semibold">Payments</h3>
        <p className="text-sm text-gray-600">Connect your payment provider to accept online orders. This is a demo view.</p>
        <div className="mt-3 inline-flex overflow-hidden rounded-lg border">
          <button className="bg-white px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Connect Stripe</button>
          <button className="bg-white px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">Connect PayPal</button>
        </div>
      </Card>
    </div>
  );
}
