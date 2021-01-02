import React,{useContext} from 'react'
import {TodoContext} from './TodoContext'

export default function Todos({todo}) {
    const {tickTodo}=useContext(TodoContext)

    function tickTodos(){
        tickTodo(todo.id)
    }
    
    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.complete} onChange={tickTodos}/>
                {todo.name}
                
            </label>
        </div>
    )
}
