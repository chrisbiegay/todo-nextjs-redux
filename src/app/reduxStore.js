import { configureStore } from "@reduxjs/toolkit"
import todosReducer from "../features/todos/todosSlice"

export function makeStore() {
  return configureStore({
    reducer: { todos: todosReducer },
  })
}

const store = makeStore()

export default store
