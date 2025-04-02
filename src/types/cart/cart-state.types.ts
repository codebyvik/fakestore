import { ProductListItem } from "../products/product-state.types";

export type cartStateType = {
  products: cartProductsType[];
  isLoading: boolean;
};

export type cartProductsType = ProductListItem & {
  qty: number;
};
