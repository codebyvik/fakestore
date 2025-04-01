import { Suspense } from "react";
import { Route, Routes } from "react-router";
import { routeNames } from "./routes";
import { pageRoutes } from "./page-routes";
import Loader from "@/components/shared/loader/loader";

const { LandingPage, ProductDetails, CartPage } = pageRoutes;

const LoadingFallback = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    <Loader size={20} />
  </div>
);

const AppRoutes = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path={routeNames.productDetails} element={<ProductDetails />} />
        <Route path={routeNames.cart} element={<CartPage />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
