import type { Product } from "../types/types";

export const products: Product[] = [
  {
    id: 1,
    title: "Premium Headphones",
    description:
      "High-quality wireless headphones with active noise cancellation and 30-hour...",
    price: 299.99,
    rating: 4.5,
    reviews: 4.5,
  },
  {
    id: 2,
    title: "Smart Watch Pro",
    description:
      "Feature-rich smartwatch with health tracking, GPS and cellular connectivity",
    price: 199.99,
    rating: 4.2,
    reviews: 4.2,
  },
  {
    id: 3,
    title: "Laptop Backpack",
    description:
      "Water-resistant laptop backpack with anti-theft features and USB charging...",
    price: 79.99,
    rating: 4.0,
    reviews: 4,
    isFavorite: true,
  },
  {
    id: 4,
    title: "Wireless Keyboard",
    description:
      "Mechanical wireless keyboard with RGB backlight and ergonomic design",
    price: 129.99,
    rating: 4.7,
    reviews: 4.7,
  },
  {
    id: 5,
    title: "Gaming Mouse",
    description:
      "High-precision gaming mouse with customizable buttons and RGB lighting",
    price: 89.99,
    rating: 4.8,
    reviews: 4.8,
  },
  {
    id: 6,
    title: "Portable SSD",
    description:
      "1TB portable SSD with USB-C connectivity and military-grade...",
    price: 159.99,
    rating: 4.6,
    reviews: 4.6,
  },
  {
    id: 7,
    title: "Wireless Earbuds",
    description:
      "True wireless earbuds with spatial audio and transparency mode",
    price: 149.99,
    rating: 4.4,
    reviews: 4.4,
  },
  {
    id: 8,
    title: "Ultra HD Monitor",
    description:
      "32-inch 4K monitor with HDR support and USB-C hub functionality",
    price: 399.99,
    rating: 4.9,
    reviews: 4.9,
  },
];
