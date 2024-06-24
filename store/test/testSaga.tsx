import { takeLatest, put, call } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { Test } from "./testSlice";
import { API_BASE_URL } from "@/config/endpoint";

function* fetchTests() {
  try {
    // Replace this with your API call to fetch tests
    const tests: Test[] = yield call(`${API_BASE_URL}/test`);

    // Dispatch the action to store the tests in the Redux store
    yield put({ type: "tests/fetchTestsSuccess", payload: tests });
  } catch (error) {
    // Handle error
    yield put({ type: "tests/fetchTestsFailure", payload: error.message });
  }
}

function* testSaga() {
  yield takeLatest("tests/fetchTests", fetchTests);
}

export default testSaga;
