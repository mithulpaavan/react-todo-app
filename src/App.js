import React, {useState, createContext, useEffect} from 'react'
import InputBox from './components/input-box';
import Todos from './components/todos';

export const appContext = createContext(null)

function App() {
  const [Todo, setTodo] = useState([]);
  
  useEffect(()=>{
    const Todos = JSON.parse(localStorage.getItem("Todos"));
    if(Todos){
      setTodo(Todos)
      console.log(Todos)
    }
  },[])

  const toggleComplete = (todoObj) =>{
    const todo = [...Todo];
    const index = Todo.indexOf(todoObj)
    todo[index] = {...Todo[index]}
    todo[index].isCompleted = !todo[index].isCompleted
    setTodo(todo);
     localStorage.setItem("Todos",JSON.stringify(todo))
  }

  const editTheTodo = (todoObj) => {
    var newText = prompt("Edit the todo",todoObj.value);
    const todo = [...Todo];
    const index = Todo.indexOf(todoObj)
    todo[index] = {...Todo[index]}
    if(newText !== null){
      todo[index].value = newText;
    }
    setTodo(todo);
    localStorage.setItem("Todos",JSON.stringify(todo))
    
  }

  const deleteTodo = (todoObj) =>{
    const todo = Todo.filter(t=>t.id !== todoObj.id);
    setTodo(todo);
    localStorage.setItem("Todos",JSON.stringify(todo))
  }

  return (<>
  <appContext.Provider value={{Todo, setTodo, toggleComplete, editTheTodo, deleteTodo}}>
  <div className="To-Do-Wrapper">
     <InputBox />
     <Todos />
  </div>
  </appContext.Provider>
    </>
  );
}

export default App;
