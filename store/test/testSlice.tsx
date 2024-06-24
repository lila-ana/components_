import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Test {
  id: number;
  title: string;
  completed: boolean;
}

interface TestState {
  tests: Test[];
}

const initialState: TestState = {
  tests: [],
};

const testSlice = createSlice({
  name: "tests",
  initialState,
  reducers: {
    addTest: (state, action: PayloadAction<Test>) => {
      state.tests.push(action.payload);
    },
    updateTest: (state, action: PayloadAction<Test>) => {
      const index = state.tests.findIndex(
        (test) => test.id === action.payload.id
      );
      if (index !== -1) {
        state.tests[index] = action.payload;
      }
    },
    deleteTest: (state, action: PayloadAction<number>) => {
      state.tests = state.tests.filter((test) => test.id !== action.payload);
    },
  },
});

export const { addTest, updateTest, deleteTest } = testSlice.actions;

export default testSlice.reducer;
