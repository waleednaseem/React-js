export const initialState ={
    basket: [],
    user: null,
};

const reducer=(state, action) =>{
    switch(action.type){
        case 'Add_to_basket':
            //logic
            return {
                ...state,
                basket: [...state.basket , state.item]
            };
            break;
        case 'Delete_from_basket':
            //logic
            return {state};
            break;
        default:
            return state;
    }
}
export default reducer;