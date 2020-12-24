import React,{useRef} from 'react'
import TodoList from './TodoList'
import uuid from 'uuid/v4'

export default function Todo({todo,setTodo}) {
    const todoRef=useRef()

    function addTodo(e){
        const name= todoRef.current.value
        if(name=== '')return
        setTodo(prev =>{
            return [...prev,{id:1,name:name,complete:false}]
        })
        todoRef.current.value=null
    }
    return (
       <div>
           <label>TODO App</label> <br/>
           <input type='text' ref={todoRef} placeholder='add todo here'/>
           <button onClick={addTodo}>Add todo</button>
           <TodoList todo={todo}/>
       </div>
        )
}
