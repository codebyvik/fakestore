import { ProductStateType } from "@/types/products/product-state.types";
import { createSlice } from "@reduxjs/toolkit";

const initialProductState: ProductStateType = {
  productList: {
    list: null,
    isFetching: false,
    isSuccess: false,
    error: null,
  },
  productDetails: {
    details: null,
    isFetching: false,
    isSuccess: false,
    error: null,
  },
};

const productSlice = createSlice({
  name: "products",
  initialState: initialProductState,
  reducers: {
    // Fetching list of products
    fetchAllProducts: (state) => {
      state.productList.isFetching = true;
    },
    fetchAllProductsSuccess: (state, action) => {
      state.productList.isFetching = false;
      state.productList.list = action.payload;
    },
    fetchAllProductsError: (state, action) => {
      state.productList.isFetching = false;
      state.productList.isSuccess = false;
      state.productList.error = action.payload;
    },
    // Fetching products Details
    fetchProductDetails: (state, _action) => {
      state.productDetails.isFetching = true;
    },
    fetchProductDetailsSuccess: (state, action) => {
      state.productDetails.isFetching = false;
      state.productDetails.details = action.payload;
    },
    fetchProductDetailsError: (state, action) => {
      state.productDetails.isFetching = false;
      state.productDetails.isSuccess = false;
      state.productList.error = action.payload;
    },
  },
});

export const {
  fetchAllProducts,
  fetchAllProductsSuccess,
  fetchAllProductsError,
  fetchProductDetails,
  fetchProductDetailsError,
  fetchProductDetailsSuccess,
} = productSlice.actions;

export default productSlice.reducer;
