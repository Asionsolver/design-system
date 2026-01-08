import { Heart, ShoppingCart, Star } from "lucide-react";

import type { Product } from "../types/types";

type ProductCardProps = {
  product: Product;
  onToggleFavorite: (id: number) => void;
};
const ProductCard = ({ product, onToggleFavorite }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
      {/* Image Placeholder */}
      <div className="relative aspect-[3/2] bg-[#E5E7EB] flex items-center justify-center overflow-hidden">
        <img src={product.image} alt="product-image" />
        <button
          onClick={() => onToggleFavorite(product.id)}
          className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm hover:scale-110 active:scale-95 transition-all"
        >
          <Heart
            size={18}
            className={`transition-colors duration-300 ${
              product.isFavorite ? "fill-red-500 text-red-500" : "text-gray-400"
            }`}
          />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-5">
        <h3 className="text-[17px] font-bold text-gray-900 mb-1.5 line-clamp-1">
          {product.title}
        </h3>
        <p className="text-[13px] text-gray-500 leading-relaxed mb-3 line-clamp-2 h-10">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-0.5 mb-5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={14}
              className={`${
                i < 4
                  ? "fill-yellow-400 text-yellow-400"
                  : "fill-gray-200 text-gray-200"
              }`}
            />
          ))}
          <span className="text-[13px] text-gray-400 ml-1.5">
            ({product.reviews})
          </span>
        </div>

        {/* Price and Add Button */}
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-gray-900">
            ${product.price}
          </span>
          <button className="bg-[#4F00C8] hover:bg-[#3F00A0] text-white px-5 py-2 rounded-xl flex items-center gap-2 transition-colors font-medium text-sm">
            <ShoppingCart size={16} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
