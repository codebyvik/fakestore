import { Suspense } from "react";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router";
import { routeNames } from "./routes";
import { pageRoutes } from "./page-routes";

const { LandingPage, ProductDetails } = pageRoutes;

const LoadingFallback = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
    }}
  >
    {/* <Loader size={20} /> */}Loading ...
  </div>
);

const routes = createBrowserRouter([
  {
    path: routeNames.home,
    element: <LandingPage />,
  },
  {
    path: routeNames.productDetails,
    element: <ProductDetails />,
  },

  { path: "*", element: <Navigate to="/" replace /> },
]);

const AppRoutes = () => {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <RouterProvider router={routes} />
    </Suspense>
  );
};

export default AppRoutes;
