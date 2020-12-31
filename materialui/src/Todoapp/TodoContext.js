import React,{createContext,useState,useRef} from 'react'
import { v4 as uuidv4 } from 'uuid'


export const TodoContext=createContext({})

export const TodoProvider=({children})=>{
    const todoRef=useRef()
    const [todo ,setTodo]= useState([])

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
    return<TodoContext.Provider value={{todo,addTodo,del,tickTodo,setTodo}}>
        {children}
    </TodoContext.Provider>
}
