import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./actions/counterSlice";

const store = configureStore({
  reducer: { counter: counterSlice },
});
console.log("store created", store.getState());

// fungsi untuk melihat perubahan pada store
store.subscribe(() => {
  console.log("store changed : ", store.getState());
});

export default store; // digunakan untuk props pada provider di main file
