import { Link, Outlet } from "react-router-dom";
import { Coffee, Instagram, Mail, Phone } from "lucide-react";

function Layout() {
  return (
    <div className="min-h-screen bg-cream">
      <header className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-soft-gray">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Coffee className="w-8 h-8 text-warm-sage" />
              <span className="font-seasons text-2xl text-charcoal">Vintage Cafe</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/about" className="nav-link">About</Link>
              <Link to="/menu" className="nav-link">Menu</Link>
              <Link to="/reviews" className="nav-link">Reviews</Link>
              <Link to="/visit" className="nav-link">Visit</Link>
              <Link to="/contact" className="nav-link">Contact</Link>
            </div>
          </div>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="bg-charcoal text-cream py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center space-x-2">
              <Coffee className="w-6 h-6 text-warm-sage" />
              <span className="font-seasons text-xl">Vintage Cafe</span>
            </div>
            <p className="font-montserrat text-sm text-warm-gray">
              © 2026 Vintage Cafe. Crafted with love, coffee, and community.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="text-warm-gray hover:text-warm-sage transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-warm-gray hover:text-warm-sage transition-colors duration-200">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="text-warm-gray hover:text-warm-sage transition-colors duration-200">
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Layout;
