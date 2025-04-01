import { takeLatest } from "redux-saga/effects";
import { fetchAllProducts } from "@/redux/product-slice";
import { fetchAllProductsSaga } from "./product-saga.watcher";

function* productSagas() {
  yield takeLatest(fetchAllProducts, fetchAllProductsSaga);
}

export default productSagas;
