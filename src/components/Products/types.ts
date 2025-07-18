export interface IProductReview {
  id: number;
  rating: number;
  comment: string;
  reviewerName: string;
  date: string;
}

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  stock: number;
  category: string;
  thumbnail: string;
  reviews: IProductReview[];
  brand: string;
  availabilityStatus: string;
}
