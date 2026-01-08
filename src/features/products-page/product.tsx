import { useState } from "react";
import ProductCard from "../../components/product-card";
import { products } from "../../data/product-data";
import type { Product } from "../../types/types";
import Pagination from "../../components/pagination";
import TopNavigation from "../../components/top-navigation";
import Heading from "../../components/typography/heading";

const Products = () => {
  const [productList, setProductList] = useState<Product[]>(products);
  const [currentPage, setCurrentPage] = useState(1);

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
    <div className="min-h-screen font-sans pb-16">
      {/* Navbar */}
      <TopNavigation />
      <Heading as="h2">Explore Products</Heading>
      <p className="text-center text-gray-600">
        Discover the lates products in the market
      </p>
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
        <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </main>
    </div>
  );
};

export default Products;
