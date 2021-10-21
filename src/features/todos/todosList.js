import React from "react"
import {useSelector, useDispatch} from "react-redux"
import {selectTodos, deleteTodo as deleteTodoFromState} from "./todosSlice"

/**
 * A component which lists the to-do items.
 */
export const ToDosList = (params) => {
  const todos = useSelector(selectTodos)
  const dispatch = useDispatch()

  function deleteTodo(event, todo) {
    event.preventDefault()
    dispatch(deleteTodoFromState(todo))
  }

  return (
    <div>
      <h2>{params.heading}</h2>
      <div className="container todo-list-container">
        {
          todos.map(todo => (
            <div className="row" key={todo.description}>
              <div className="ten columns">&#x2022; {todo.description}</div>
              <div className="two columns">
                <a href="#" onClick={(event) => {deleteTodo(event, todo)}}>Delete</a>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}
