import {useState, useEffect} from "react";
import "./App.css"
import { v4 as uuidv4 } from 'uuid';
import Todo from "./components/Todo";
import { setCookies } from "./components/cookies";
import Cookies from 'js-cookie';

function App() {

  const [todoList, setTodoList] = useState([])
  const [input, setInput] = useState("")

  // edit input

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

      setCookies(todoList)   

  }

  const remove = (id) => {
      const newArray = todoList.filter(todo => todo.id !== id)  
      setTodoList(newArray)
      setCookies(todoList)
  }

  
  useEffect(() => {
    const cookies = Cookies.get('list')
    const arrayList = JSON.parse(cookies)
    setTodoList(arrayList)
  }, [])

  return (
    <div className='App'>
    <h1>To Do App</h1>

    <input 
    type="text"
    value={input}
    onChange={handleChange}
    />

    <button onClick={Add}>Add</button>

      
    <button onClick={() => {setCookies(todoList); setTodoList([])}}>Delete All</button>
    
    
    <div className="todoList"> 
    
        {todoList.map((todo) => {
          return <Todo 
          key={todo.id}
          id={todo.id}
          todo={todo.todo}
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
