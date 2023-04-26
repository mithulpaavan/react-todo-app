import React, {useContext} from 'react'
import  {appContext} from '../App'

const Todos = () => {
    
    const {Todo, toggleComplete, editTheTodo, deleteTodo} = useContext(appContext)

    return ( 
        <>
        <div className="todos">
            {
                Todo.map((t)=>(
                    <div className={t.isCompleted ? "todo-container completed" : "todo-container"} key={t.id}>
                        <span className={t.isCompleted ? "text-todo text-underline" : "text-todo"}>{t.value}</span>
                        <div className="icon-container">
                            <i className={t.isCompleted ? "fa fa-times fa-lg" : "fa fa-check fa-lg"} onClick={()=>toggleComplete(t)}></i>
                            <i className="fa fa-edit fa-lg" onClick={()=>editTheTodo(t)}></i>
                            <i className="fa fa-trash fa-lg" onClick={()=>deleteTodo(t)}></i>
                        </div>
                    </div>
                ))
            }
        </div>
        </>
     );
}
 
export default Todos;