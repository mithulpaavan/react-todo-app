import React,{useContext,useRef} from 'react'
import  {appContext} from '../App'
import { v4  } from 'uuid'
import 'font-awesome/css/font-awesome.css'

const InputBox = () => {
    const {setTodo, Todo} =  useContext(appContext)
    const InputRef = useRef(null)

    const addTodo = ()=>{
        let value = InputRef.current.value;
        if(value === "") return;

        value.trim(); //removes the blank space

        const newTodos = [...Todo, {
            id:v4(),
            value:value, 
            isCompleted:false, 
            todoEdit:""
        }]

        setTodo(newTodos)

       InputRef.current.value = "";

        localStorage.setItem("Todos",JSON.stringify(newTodos))
    }

    return ( 
        <>
        <div className="input-container">
        <input type="text" className="todo-text" ref={InputRef}/>
        <div className="icon" onClick={addTodo}>
        <i className="addTodo fa fa-2x fa-plus"></i>        
        </div>
        </div>
        </>
     );
}
 
export default InputBox;