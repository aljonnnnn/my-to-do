import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "todo",
  initialState: [
    {
      id: 1,
      task: "Learn Redux",
      done: false,
    },
    {
      id: 2,
      task: "Learn Tailwind",
      done: false,
    },
    {
      id: 3,
      task: "Learn Next js",
      done: false,
    },
    {
      id: 4,
      task: "Learn TypeScript",
      done: false,
    },
    {
      id: 5,
      task: "Learn Node js",
      done: false,
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      const newTask = {
        id: Math.floor(Math.random() * 5000),
        task: action.payload,
        done: false,
      };
      state.push(newTask);
    },
    deleteTodo: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
    toggleComplete: (state, action) => {
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    },
  },
});

export const { addTodo, deleteTodo, toggleComplete } = todoSlice.actions;
export default todoSlice.reducer;
