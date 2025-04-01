import { all } from "redux-saga/effects";
import productSagas from "./products-saga/product-saga.worker";

export default function* rootSaga() {
  yield all([productSagas()]);
}
