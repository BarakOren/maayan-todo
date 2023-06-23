import { useState } from "react";

const Todo2 = ({remove, todo, number, id, todoList, setTodoList }) => {
 
    const [editInput, setEditInput] = useState("")
    const [toggle, setToggle] = useState(false);

    const handleEditChange = (event) => {
        event.preventDefault();
        setEditInput(event.target.value)
    }

    const handleUpdate = () => {
        let newList = todoList.map(todo => {
            if(todo.id === id){
                todo.todo = editInput
            }
            return todo;
        })


        // לעדכן את הרשימה
        setTodoList(newList)
        setToggle(false)
        setEditInput("")
    }

    return <div className="todo">
    <p>{number}</p>
    <p>{todo}</p>
    <button onClick={() => remove(id)}>Remove</button>
    <button onClick={() => setToggle(!toggle)}>Edit</button>

    {toggle && <div> 
    <input 
    type="text"
    onChange={handleEditChange}
    value={editInput} />
        
    <button onClick={() => handleUpdate()}>Update</button>
    </div>
    }

    
    </div>
}

export default Todo2;