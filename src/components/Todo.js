import EditModal from "./editModal";
import { useState } from "react";

const Todo = (props) => {

    const {setTodoList, editToggle, todoList, setEditToggle, todo, id, remove, edit} = props 

  const [editInput, setEditInput] = useState('')
  // handle edit
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
    setTodoList(newList)
    setEditToggle(false)
}

    return <div className="todo">
    <p>{todo}</p>
    <button onClick={() => remove(id)}>Remove</button>
    <button onClick={() => setEditToggle(!editToggle)}>Edit</button>

    {editToggle && <EditModal 
        handleEditSubmit={handleEditSubmit} 
        handleEditChange={handleEditChange} 
        editInput={editInput} 
        setEditInput={setEditInput} 
        />
      }

    </div>
}

export default Todo;