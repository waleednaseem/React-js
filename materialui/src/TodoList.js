import React from 'react'
import Todos from './Todos'

export default function TodoList({todo,tickTodo}) {
    return (
       todo.map(todo =>{return <Todos key={todo.id} tickTodo={tickTodo} todo={todo}/>})
    )
}
