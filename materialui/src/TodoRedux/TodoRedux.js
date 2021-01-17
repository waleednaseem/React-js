import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import Todos from './Todos'

export default function TodoRedux() {
     const dispatch = useDispatch()
     const [name,setName]=useState()
     const storeTodo=(e)=>{
         e.preventDefault();
         dispatch({type:'addTodo',payload:{id:uuidv4(),name}})
         setName('')
     }
    return (
        <div> 
            <h5>Todo app with REDUX</h5>
            <form onSubmit={storeTodo}>
                <input type='text' placeholder='add todos' value={name} onChange={(e)=> setName(e.target.value)} />
                <input type='submit' value="addTodo" />
                
            </form>
            <Todos/>
        </div>
    )
}
