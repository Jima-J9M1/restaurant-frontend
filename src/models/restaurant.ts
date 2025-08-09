export interface Restaurant {
  id: string;
  name: string;
  avatar: string;
  logo: string;
  rating: string;
  open: boolean;
  price?: string;
  Price?: string;
  createdAt: string;
}

export type RestaurantUpdate = Partial<Omit<Restaurant, 'id' | 'createdAt'>>;