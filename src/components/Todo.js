import { useState } from "react";
import Cookies from 'js-cookie';
import { setCookies } from "./cookies";

const Todo = (props) => {

    const {setTodoList, todoList, id, todo, remove} = props 
  const [editInput, setEditInput] = useState('')

  const [editToggle, setEditToggle] = useState(false)

  const handleEditChange = (event) => {
    event.preventDefault();
    setEditInput(event.target.value);
} 

  const handleEditSubmit = () => {
      let newList = todoList.map(todo => {
      if(todo.id === id){
        todo.todo = editInput
      }
      return todo;
    })

    setTodoList(newList) // setting the new list
    setEditInput('') // cleaning the edit input
    setEditToggle(false) // closing the edit input
    setCookies(newList) //setting cookies

  }

    return <div className="todo">
    <p>{todo}</p>
    <button onClick={() => remove(id)}>Remove</button>
    <button onClick={() => {setEditToggle(!editToggle)}}>Edit</button>

    {editToggle && <div>
      
      <input 
      type="text"
      value={editInput}
      onChange={handleEditChange}
      /> 

      <button onClick={() => handleEditSubmit(id)}>Submit</button>

      </div>
    }
 

    </div>
}

export default Todo;