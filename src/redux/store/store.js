import { createStore } from "redux";
import { todoReducer } from "../todos/todoReducer";


export const store = createStore(todoReducer)