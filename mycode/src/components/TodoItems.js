import React from 'react'

function TodoItems(props){
    const styling={
        fontStyle: 'italic',
        color:'ffffff',
        textDecoration: 'line-through'
      }
    return(
        <div>
            <input type="checkbox" 
            checked={props.data.completed}
            onChange={()=> props.handleChange(props.data.id)}
            />
            <p style ={props.data.completed ? styling : null }>{props.data.text}</p>
        </div>
    )
}

export default TodoItems