import { createSlice, PayloadAction } from "@reduxjs/toolkit"; // Import PayloadAction from redux toolkit
import { RootState } from "../rootReducer";

// Define your state and action types
interface ProductState {
  product: Product | null;
  productDetail: ProductDetail | null;
  loading: boolean;
  error: string | null;
}

interface Product {
  id: number;
  name: string;
}

interface ProductDetail {
  productId: number;
  id: number;
  description: string;
}

const initialState: ProductState = {
  product: null,
  productDetail: null,
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    fetchProduct: (state) => {
      state.loading = true;
    },
    fetchProductSuccess: (state, action: PayloadAction<Product>) => {
      state.loading = false;
      state.product = action.payload;
    },
    fetchProductFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    fetchProductDetail: (state) => {
      state.loading = true;
    },
    fetchProductDetailSuccess: (
      state,
      action: PayloadAction<ProductDetail>
    ) => {
      state.loading = false;
      state.productDetail = action.payload;
    },
    fetchProductDetailFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchProduct,
  fetchProductSuccess,
  fetchProductFailure,
  fetchProductDetail,
  fetchProductDetailSuccess,
  fetchProductDetailFailure,
} = productSlice.actions;

export const selectProduct = (state: RootState) => state.product.product;
export const selectProductDetail = (state: RootState) =>
  state.product.productDetail;
export const selectLoading = (state: RootState) => state.product.loading;
export const selectError = (state: RootState) => state.product.error;

export default productSlice.reducer;
