import {useState} from "react";
import "./App.css"
import { v4 as uuidv4 } from 'uuid';
import Todo from "./components/Todo";
import EditModal from "./components/editModal"

function App() {

  const [todoList, setTodoList] = useState([])
  const [input, setInput] = useState("")

  // edit input
  const [editToggle, setEditToggle] = useState(false)



  const handleChange = (event) => {
      event.preventDefault();
      setInput(event.target.value);
  }

  const Add = () => { 

      const obj = {
        todo: input,
        id: uuidv4()
      }

      setTodoList(prevArray => [...prevArray, obj])
      setInput("");
  }

  const remove = (id) => {
      const newArray = todoList.filter(todo => todo.id !== id)  
      setTodoList(newArray)
  }

 

  return (
    <div className='App'>
    <h1>To Do App</h1>

    <input 
    type="text"
    value={input}
    onChange={handleChange}
    />

    <button onClick={Add}>Add</button>

      
    <button onClick={() => setTodoList([])}>Delete All</button>
    
    
    <div className="todoList"> 
    
        {todoList.map((todo) => {
          return <Todo 
          editToggle={editToggle} 
          setEditToggle={setEditToggle} 
          todo={todo.todo} 
          id={todo.id} 
          remove={remove}
          todoList={todoList}
          setTodoList={setTodoList}
          />                 
        })}

    </div>

    
    </div>
  );
}

export default App;
