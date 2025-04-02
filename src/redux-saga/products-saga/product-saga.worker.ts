import { takeLatest } from "redux-saga/effects";
import { fetchAllProducts, fetchProductDetails } from "@/redux/product-slice";
import { fetchAllProductsSaga, fetchProductDetailsSaga } from "./product-saga.watcher";

function* productSagas() {
  yield takeLatest(fetchAllProducts, fetchAllProductsSaga);
  yield takeLatest(fetchProductDetails, fetchProductDetailsSaga);
}

export default productSagas;
