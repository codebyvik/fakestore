import { SagaIterator } from "@redux-saga/types";
import { call } from "redux-saga/effects";
import { handleApiCall } from "../api-handler";
import { productAPI } from "@/api";
import {
  fetchAllProductsError,
  fetchAllProductsSuccess,
  fetchProductDetailsError,
  fetchProductDetailsSuccess,
} from "@/redux/product-slice";

export function* fetchAllProductsSaga(action: any): SagaIterator {
  yield call(
    handleApiCall,
    productAPI.productListAPI,
    action.payload,
    fetchAllProductsSuccess,
    fetchAllProductsError
  );
}

export function* fetchProductDetailsSaga(action: any): SagaIterator {
  yield call(
    handleApiCall,
    productAPI.productDetailsAPI,
    action.payload,
    fetchProductDetailsSuccess,
    fetchProductDetailsError
  );
}
