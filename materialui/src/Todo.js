import React,{useState,useRef, useEffect} from 'react'
import TodoList from './TodoList'
import { v4 as uuidv4 } from 'uuid'

const LOCAL_STORAGE_KEY='todo'

export default function Todo({todo,setTodo}) {
    
    const todoRef=useRef()
   useEffect(() => {
      const storedTodo=JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
      if(storedTodo) setTodo(storedTodo)
   }, [])
    useEffect(()=>{
        localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(todo))
    },[todo])
    function tickTodo(id){
        const newTodo=[...todo]
        const todos= newTodo.find(todo => todo.id === id)
        todos.complete = !todos.complete
        setTodo(newTodo)
    }
    function del(){
        const newTodo=todo.filter(todo=>!todo.complete)
        
        setTodo(newTodo)
    }
    function addTodo(e){
        const name= todoRef.current.value
        if(name=== '')return
        setTodo(prev =>{
            return [...prev,{id:uuidv4(),name:name,complete:false}]
        })
        todoRef.current.value=null
    }
    return (
       <div>
           <label>TODO App</label> <br/>
           <input type='text' ref={todoRef} placeholder='add todo here'/>
           <button onClick={addTodo}>Add todo</button>
           <TodoList todo={todo} tickTodo={tickTodo}/>
            <button onClick={del}>delete selected</button>
           <div>{todo.filter(todo=> !todo.complete).length}left todos</div>
       </div>
        )
}
