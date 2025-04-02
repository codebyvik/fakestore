import { cartStateType } from "@/types/cart/cart-state.types";
import { ProductListItem } from "@/types/products/product-state.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialCartState: cartStateType = {
  products: [],
  isLoading: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialCartState,
  reducers: {
    // Fetching list of products
    addToCart: (state, action: PayloadAction<ProductListItem>) => {
      let isAdded = state.products?.find((item) => item.id === action?.payload?.id);

      if (isAdded) {
        state.products = state.products.map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        state.products.push({ ...action.payload, qty: 1 });
      }
    },

    decreaseItemQty: (state, action: PayloadAction<number>) => {
      let itemDetails = state.products?.find((item) => item.id === action?.payload);

      if (itemDetails?.qty === 1) {
        // if 1 then decreasing it will 0 hence remove from cart
        let newProductList = state.products.filter((item) => item.id !== action?.payload);
        state.products = newProductList;
      } else {
        state.products = state.products.map((item) =>
          item.id === action.payload ? { ...item, qty: item.qty - 1 } : item
        );
      }
    },

    removeFromCart: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter((item) => item.id !== action.payload);
    },

    clearCart: (state) => {
      state.products = [];
    },
  },
});

export const { addToCart, removeFromCart, decreaseItemQty, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
