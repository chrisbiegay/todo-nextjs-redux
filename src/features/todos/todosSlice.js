import { createSlice } from "@reduxjs/toolkit"

/*
 * The term "slice" refers to a collection of Redux reducer logic and actions for a single feature in the app.
 * This file contains the Redux-related code for the to-do feature, similar to the "ducks" pattern.
 * Redux Toolkit provides a nice way of managing reducers, demonstrated by the createSlice() function below.
 */

const initialState = {
  todosList: []
}

/**
 * Configures the reducers for the slice of the Redux state used for managing to-do data.
 */
export const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    // Add a to-do to the list.
    add: (state, action) => {
      let newTodosList = [...state.todosList]
      newTodosList.push(action.payload)

      return {
        ...state,
        todosList: newTodosList,
      }
    },
    // Delete a to-do from the list. (Note that "delete" is a keyword, making it inconvenient as an action name.)
    deleteTodo: (state, action) => {
      // action.payload is a 'to-do' object, which looks like:
      // {
      //   description: {string}
      // }

      const todoItemIndex = state.todosList.findIndex(todo => todo.description === action.payload.description)

      if (todoItemIndex < 0) {
        console.warn(`Tried to delete nonexistent to-do with description: "${action.payload.description}"`)
        return state
      } else {
        let newTodosList = [...state.todosList]
        newTodosList.splice(todoItemIndex, 1)

        return {
          ...state,
          todosList: newTodosList,
        }
      }
    },
  },
})

// Action creators
export const { add, deleteTodo } = todosSlice.actions

// Selectors
export const selectTodos = (state) => state.todos.todosList

export default todosSlice.reducer
