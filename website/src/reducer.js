export const initialState ={
    basket: [],
    user: null,
};
export const getBasketTotal=(basket)=> basket?.reduce((amount, item)=> item.price + amount ,0);

const reducer=(state, action) =>{
    
    switch(action.type){
        case 'Set_user':
            return{
                ...state,
                user: action.user
            };
            
        case 'Empty_basket':
            return{
                ...state,
                basket: []
            };
            break;
        case 'Add_to_basket':
            return {
                ...state,
                basket: [...state.basket , action.item]
            };
            break;
        case 'Delete_from_basket':
            let newBasket=[...state.basket];
            const index= state.basket.findIndex(
                (basketItem)=> basketItem.id === action.id
            );
            if (index>=0){
                newBasket.splice(index,1);
            }else{
                console.warn(`cant remove product (id : ${action.id})`);
            }
            return {...state , basket: newBasket};
            break;
        default:
            return state;
    }
}
export default reducer;