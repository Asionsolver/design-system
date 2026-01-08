export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  isFavorite?: boolean;
}
