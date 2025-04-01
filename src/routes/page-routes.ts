import { lazy } from "react";

const LandingPage = lazy(() => import("../pages/landing/landing-page"));
const ProductDetails = lazy(() => import("../pages/product-details/product-details"));

export const pageRoutes = {
  LandingPage,
  ProductDetails,
};
