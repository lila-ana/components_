import { combineReducers } from "redux";
import productReducer from "../store/products/productSlice";

const rootReducer = combineReducers({
  product: productReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
