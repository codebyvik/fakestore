export interface ProductStateType {
  productList: {
    list: ProductDetailsType[] | null;
    isFetching: boolean;
    isSuccess: boolean;
    error: any;
  };
  productDetails: {
    details: ProductDetailsType | null;
    isFetching: boolean;
    isSuccess: boolean;
    error: any;
  };
}

export interface ProductDetailsType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
