import { Heart, ShoppingCart, Star } from "lucide-react";

import type { Product } from "../types/types";
import Heading from "./typography/heading";

type ProductCardProps = {
  product: Product;
  onToggleFavorite: (id: number) => void;
};
const ProductCard = ({ product, onToggleFavorite }: ProductCardProps) => {
  return (
    <div className="bg-background  rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 hover:shadow-md transition-shadow group">
      {/* Image Placeholder */}
      <div className="relative aspect-3/2 flex items-center justify-center overflow-hidden">
        <img src={product.image} alt="product-image" />
        <button
          onClick={() => onToggleFavorite(product.id)}
          className="absolute top-3 right-3 w-8 h-8 bg-background rounded-full flex items-center justify-center shadow-sm hover:scale-110 active:scale-95 transition-all"
        >
          <Heart
            size={18}
            className={`transition-colors duration-300 ${
              product.isFavorite ? "fill-primary  text-primary " : "text-text "
            }`}
          />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-5">
        <Heading as="h4" color="primary">
          {" "}
          {product.title}
        </Heading>
        <p className="text-[13px] text-text/60 /60 leading-relaxed mb-3 line-clamp-2 h-10">
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
                  ? "fill-primary text-primary  "
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
          <span className="text-lg font-bold text-text ">${product.price}</span>
          <button className="bg-primary dark:bg-primary-dark hover:bg-primary/80 text-white px-5 py-2 rounded-xl flex items-center gap-2 transition-colors font-medium text-sm">
            <ShoppingCart size={16} />
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
