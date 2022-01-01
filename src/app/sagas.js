import {select, takeEvery} from "redux-saga/effects"
import {selectTodos} from "../features/todos/todosSlice"

// Basic Redux Sagas demo

export default function* rootSaga() {
  yield takeEvery("todos/addTodo", logTodoAdded)
  yield takeEvery("todos/deleteTodo", logTodoDeleted)
}

function* logTodoAdded(action) {
  console.log(`[Saga] To-do added: "${action.payload.description}"`)
  yield logToDoList()
}

function* logTodoDeleted(action) {
  console.log(`[Saga] To-do deleted: "${action.payload.description}"`)
  yield logToDoList()
}

function* logToDoList() {
  const toDos = yield select(selectTodos)

  let formattedToDos = ""
  toDos.forEach((toDo) => {
    formattedToDos += ` * ${toDo.description}\n`
  })

  console.log(`[Saga] Current to-do list:\n${formattedToDos}`)
}
