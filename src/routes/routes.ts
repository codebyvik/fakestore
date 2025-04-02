export const routeNames = {
  // landing page
  home: import.meta.env.MODE === "development" ? "/" : "/fakestore/",
  //  Product Details page
  productDetails:
    import.meta.env.MODE === "development" ? "/product/:id" : "/fakestore/product/:id",
  // cart page
  cart: import.meta.env.MODE === "development" ? "/cart" : "/fakestore/cart",
};

export const baseRoutes = {
  //  Product Details page
  productDetails: import.meta.env.MODE === "development" ? "/product" : "/fakestore/product",
};
