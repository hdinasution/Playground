import { createSlice } from "@reduxjs/toolkit";

// gunakan counterSlice agar definisi name, initialState, dan reducers secara terpusat dalam 1 fungsi
// meningkatkan keterbacaan kode.
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    increment: (state) => {
      // fungsi untuk handle action, seperti setState()
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

export const { increment, decrement } = counterSlice.actions; // digunakan untuk action pada view
export default counterSlice.reducer; // digunakan untuk regist pada store
