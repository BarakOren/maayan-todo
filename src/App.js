import {useState} from "react";
import "./App.css"
import { v4 as uuidv4 } from 'uuid';
import Todo from "./components/Todo";
import Todo2 from "./components/Todo2";


function App() {

  const [todoList, setTodoList] = useState([])

  const [input, setInput] = useState("");

  // when input changes
  const handleChange = (event) => {
      event.preventDefault();
      setInput(event.target.value);
  }

  const Add = () => {
      const object = {
          todo: input,
          id: uuidv4()
      }

      setTodoList([...todoList, object])

  }


  //remove from list
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
    <button onClick={() => {setTodoList([])}}>Delete All</button>
    

    <div className="todoList"> 
    {todoList.map((task, index) => {
        return <Todo2 
        number={index + 1}
        key={task.id}
        todo={task.todo}
        id={task.id}
        remove={remove}
        todoList={todoList} 
        setTodoList={setTodoList}
        />
    } )}
    

    </div>


    
    </div>
  );
}

export default App;














// {todoList.map((todo) => {
//   return <Todo 
//   key={todo.id}
//   id={todo.id}
//   todo={todo.todo}
//   remove={remove}
//   todoList={todoList}
//   setTodoList={setTodoList}
//   />                 
// })}

// add to list
  // const Add = () => { 

  //     const obj = {
  //       todo: input,
  //       id: uuidv4()
  //     }

  //     setTodoList(prevArray => [...prevArray, obj])
  //     setInput("");  
  // }

   // const remove = (id) => {
  //     const newArray = todoList.filter(todo => todo.id !== id)  
  //     setTodoList(newArray)
  // }