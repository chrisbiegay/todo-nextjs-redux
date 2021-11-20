import {React, useState, useRef, useEffect} from "react"
import {useDispatch} from "react-redux"
import {addTodo as addTodoToState} from "./todosSlice"

/**
 * A component allowing to-do items to be added.
 */
export const AddTodo = () => {
  const dispatch = useDispatch()
  const [description, setDescription] = useState("")
  const descriptionFieldRef = useRef()
  let firstRender = true

  useEffect(() => {
    if (firstRender) {
      firstRender = false
      descriptionFieldRef.current.focus()
    }
  })

  function addTodo() {
    if (description) {
      dispatch(
        addTodoToState({ description })
      )
      setDescription("")
    }

    descriptionFieldRef.current.focus()
  }

  return (
    <div>
      <h2>Add To-Do</h2>
      <form>
        <input
          className="description-field"
          type="text"
          placeholder="Description"
          value={description}
          ref={descriptionFieldRef}
          onChange={(e) => {setDescription(e.target.value)}}/>

        <button type="button" onClick={addTodo}>Add To-Do</button>
      </form>
    </div>
  )
}
