import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../todos/todoSlice";

const reducer = {
  todo: todoReducer,
};

export const store = configureStore({ reducer });
