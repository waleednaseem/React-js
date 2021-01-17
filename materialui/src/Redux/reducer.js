

const initialState={
    todo:[]
}
const reducer=(state=initialState , action)=>{
    switch (action.type) {
        case 'addTodo':
            return {todo:[action.payload,...state.todo]}
            break;
        case 'delTodo':
            const todois=state.todo.filter(todo=> todo.id !== action.id)
            return {todo: todois} 
        default:
            return state
            break;
    }
}
export default reducer