import { lazy } from "react";

const LandingPage = lazy(() => import("../pages/landing/landing-page"));
const ProductDetails = lazy(() => import("../pages/product-details/product-details"));
const CartPage = lazy(() => import("../pages/cart/cart-page"));

export const pageRoutes = {
  LandingPage,
  ProductDetails,
  CartPage,
};
