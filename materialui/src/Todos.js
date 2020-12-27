import React from 'react'

export default function Todos({todo,tickTodo}) {
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
