import React,{useContext, useEffect} from 'react'
import TodoList from './TodoList'
import {TodoContext} from './TodoContext'

const LOCAL_STORAGE_KEY='todo'

export default function Todo() {
    const {todo,setTodo,addTodo,del,todoRef}=useContext(TodoContext);

   useEffect(() => {
      const storedTodo=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
      if(storedTodo) setTodo(storedTodo)
   }, [])
    useEffect(()=>{
        localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todo))
    },[todo])
    
    return (
       <div>
           <label>TODO App (example of props and contextApi)</label> <br/>
           <input type='text' ref={todoRef} placeholder='add todo here'/>
           <button onClick={addTodo}>Add todo</button>
           <TodoList />
            <button onClick={del}>delete selected</button>
           <div>{todo.filter(todo=> !todo.complete).length}left todos</div>
       </div>
        )
}
