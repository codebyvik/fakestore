export interface ProductStateType {
  productList: {
    list: ProductListItem[] | null;
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
  mrp: number;
  rating: {
    rate: number;
    count: number;
  };
}

export interface ProductListItem {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  mrp: number;
}
