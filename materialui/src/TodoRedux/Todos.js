import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
export default function Todos() {
    const dispatch = useDispatch()
    const {todo}= useSelector(state => state)
    console.log(todo)
    return (
        <div>
            {todo ? todo.map( todo =>
            <div>{(todo.name)}
            <button onClick={()=> dispatch({type: 'delTodo' , id: todo.id})}>delete</button>
            </div>
            
            ) : <div>no todo found</div>}
        </div>
    )
}
