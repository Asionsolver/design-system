import { useState } from "react";
import {
  ShoppingCart,
  Home,
  Grid,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import ProductCard from "../../components/product-card";
import { products } from "../../data/product-data";
import type { Product } from "../../types/types";

const Products = () => {
  const [productList, setProductList] = useState<Product[]>(products);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 3;
  // Toggle Functionality
  const toggleFavorite = (id: number) => {
    setProductList((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, isFavorite: !product.isFavorite }
          : product
      )
    );
  };
  return (
    <div className="min-h-screen bg-[#F9FAFB] font-sans pb-16">
      {/* Navbar */}
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

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {productList.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onToggleFavorite={toggleFavorite}
            />
          ))}
        </div>
        {/* Pagination Section */}
        <div className="flex justify-center items-center gap-2 mt-8">
          {/* Previous Button */}
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="w-11 h-11 flex items-center justify-center rounded-xl border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Page Numbers */}
          <div className="flex items-center gap-2 mx-2">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`w-11 h-11 flex items-center justify-center rounded-xl text-sm font-bold transition-all
                  ${
                    currentPage === page
                      ? "bg-[#4F00C8] text-white shadow-lg shadow-purple-200"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
              >
                {page}
              </button>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            className="w-11 h-11 flex items-center justify-center rounded-xl border border-gray-300 text-gray-600 hover:bg-gray-50 transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </main>
    </div>
  );
};

export default Products;
