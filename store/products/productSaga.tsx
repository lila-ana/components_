import { call, put, takeLatest } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  fetchProductSuccess,
  fetchProductFailure,
  fetchProductDetailSuccess,
  fetchProductDetailFailure,
} from "../products/productSlice";
import { CallEffect, PutEffect } from "redux-saga/effects";

interface Product {
  id: number;
  name: string;
}

interface ProductDetail {
  productId: number;
  id: number;
  description: string;
}

type AxiosProductResponse = AxiosResponse<Product>;
type AxiosProductDetailResponse = AxiosResponse<ProductDetail>;

function* fetchProductSaga(
  action: PayloadAction<number>
): Generator<
  | CallEffect<AxiosProductResponse>
  | PutEffect<typeof fetchProductSuccess | typeof fetchProductFailure>,
  void,
  AxiosProductResponse
> {
  try {
    const response: AxiosProductResponse = yield call(
      axios.get,
      `https://api.example.com/products/${action.payload}`
    );
    yield put(fetchProductSuccess(response.data));
  } catch (error: any) {
    yield put(fetchProductFailure(error.message));
  }
}

function* fetchProductDetailSaga(
  action: PayloadAction<{ productId: number; detailId: number }>
): Generator<
  | CallEffect<AxiosProductDetailResponse>
  | PutEffect<
      typeof fetchProductDetailSuccess | typeof fetchProductDetailFailure
    >,
  void,
  AxiosProductDetailResponse
> {
  try {
    const { productId, detailId } = action.payload;
    const response: AxiosProductDetailResponse = yield call(
      axios.get,
      `https://api.example.com/products/${productId}/details/${detailId}`
    );
    yield put(fetchProductDetailSuccess(response.data));
  } catch (error) {
    yield put(fetchProductDetailFailure(error.message));
  }
}

function* productSaga() {
  yield takeLatest(fetchProduct.type, fetchProductSaga);
  yield takeLatest(fetchProductDetail.type, fetchProductDetailSaga);
}

export default productSaga;
