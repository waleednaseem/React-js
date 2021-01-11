import React,{useReducer} from 'react'

function reducer(state,action) {
        switch (action.type) {
            case 'inc':
                return {count: state.count +1}
                break;
            case 'dec':
                return {count: state.count -1}
                break;
        
            default:
                break;
        }
    
}

export default function Counting() {
    const [state,dispatch]=useReducer(reducer,{count:0})
    return (
        <>
            <button onClick={()=>dispatch({type: 'inc'})}>+</button>
            <h1>(example from reducer){state.count}</h1>
            <button onClick={()=>dispatch({type: 'dec'})}>-</button>
        </>
    )
}
