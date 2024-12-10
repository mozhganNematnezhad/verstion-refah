export interface IProductCard {
  href: string;
  id: number;
  image: string | null;
  description: string;
  title: string;
  location: string;
  discount: number;
  price: number;
  width?: string;
  isAdedd?: boolean;
}
