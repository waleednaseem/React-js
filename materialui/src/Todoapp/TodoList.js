import React,{useContext} from 'react'
import Todos from './Todos'
import {TodoContext} from './TodoContext'

export default function TodoList() {
    const {todo}=useContext(TodoContext)
    return (
       todo.map(todo =>{return <Todos key={todo.id} todo={todo} />})
    )
}
