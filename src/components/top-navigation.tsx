import { Grid, Home, ShoppingCart } from "lucide-react";

const TopNavigation = () => {
  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#4F00C8] rounded-full flex items-center justify-center">
            <div className="w-4 h-4 border-2 border-white rounded-full border-t-transparent animate-spin-slow"></div>
          </div>
          <span className="text-xl font-bold text-gray-900">TechStore</span>
        </div>

        <div className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
          <a
            href="#"
            className="flex items-center gap-1.5 hover:text-[#4F00C8] transition-colors"
          >
            <Home size={18} /> Home
          </a>
          <a
            href="#"
            className="flex items-center gap-1.5 hover:text-[#4F00C8] transition-colors"
          >
            <Grid size={18} /> Categories
          </a>
          <a
            href="#"
            className="flex items-center gap-1.5 hover:text-[#4F00C8] transition-colors"
          >
            <ShoppingCart size={18} /> Cart
          </a>
        </div>
      </div>
    </nav>
  );
};

export default TopNavigation;
