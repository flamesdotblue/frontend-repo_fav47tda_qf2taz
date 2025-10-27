import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartSection from './components/CartSection';
import AdminSection from './components/AdminSection';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <main>
        <CartSection />
        <AdminSection />
      </main>
      <Footer />
    </div>
  );
}
