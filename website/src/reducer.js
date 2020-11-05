export const initialState ={
    basket: [
        // {
        //     id: '12421',
        //     title: 'apple laptop',
        //     price: 300,
        //     rating:4,
        //     image:"https://cdn.vox-cdn.com/thumbor/ileb0KkWP85n-s6cVWogA0MoNrc=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/21883188/ipadair3.jpg"
        // },
    ],
    user: null,
};
export const getBasketTotal=(basket)=> basket?.reduce((amount, item)=> item.price + amount ,0);
const reducer=(state, action) =>{
    
    switch(action.type){
        case 'Set_user':
            return{
                ...state,
                user: action.user
            }
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
                console.warn('cant remove product (id : ${action.id})');
            }
            return {...state , basket: newBasket};
            break;
        default:
            return state;
    }
}
export default reducer;