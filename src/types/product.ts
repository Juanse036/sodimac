export interface ProductPrice {
  label: string;
  type: string;
  symbol: string;
  price: string;
  unit: string;
  priceWithoutFormatting: number;
}

export interface Product {
  productId: string;
  skuId: string;
  displayName: string; 
  brand: string;
  mediaUrls: string[]; 
  prices: ProductPrice[];
  model: string;
  badges: { type: string; value: string }[];
  totalReviews?:string;
  rating?:string;
  highlights?: { key: string; value: string }[];
}


export interface ApiResponse {
  data: {
    result: Product[]; 
  };
}