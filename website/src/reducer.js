export const initialState ={
    basket: ["waleed","ali"]
};

function reducer(state, action){
    switch(action.type){
        case 'Add_to_basket':
            //logic
            break;
        case 'Delete_from_basket':
            //logic
            break;
        default:
            return state;
    }
}
export default reducer;