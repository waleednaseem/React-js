import React from 'react'
import Todos from './Todos'

export default function TodoList({todo}) {
    return (
       todo.map(todo =>{return <Todos key={todo.id} todo={todo}/>})
    )
}
