import {useState} from "react";
import "./App.css"
import { v4 as uuidv4 } from 'uuid';
import Todo from "./components/Todo";
import Todo2 from "./components/Todo2";


function App() {

  //List State
  const [todoList, setTodoList] = useState([])

  //Input State
  const [input, setInput] = useState("");

  // Function for input changes
  const handleChange = (event) => {
      event.preventDefault();
      setInput(event.target.value);
  }


  // function for adding a new todo
  const Add = () => {
      const object = {
          todo: input,
          id: uuidv4()
      }
      //אל תשכחי שיצרנו אובייקט כדי להכיל בו את המידע שלנו בצורה נוחה
      //וישר אחרי זה, פשוט דחפנו את האובייקט הזה לרשימה שלנו
      setTodoList([...todoList, object])

  }


  //remove from list
  const remove = (id) => {
    // אני רוצה שתשימי לב ממש טוב מאיפה מגיע הארגיומט שנקרא id
    // בסופו של, הוא מגיע מאיפה שקוראים לפונקציה 
    // שזה נמצא ב Todo2.js
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













