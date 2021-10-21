import React, {useState} from "react"
import {useDispatch} from "react-redux"
import {add} from "./todosSlice"

/**
 * A component allowing to-do items to be added.
 */
export const AddTodo = () => {
  const dispatch = useDispatch()
  const [description, setDescription] = useState("")

  function addTodo(e) {
    e.preventDefault()
    if (description) {
      dispatch(add({
        description,
      }))
      setDescription("")
    }
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
          onChange={(e) => {setDescription(e.target.value)}}/>

        <input type="submit" value="Add To-Do" onClick={addTodo}/>
      </form>
    </div>
  )
}
