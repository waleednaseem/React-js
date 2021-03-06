import { ShoppingBasket, ShoppingBasketOutlined } from '@material-ui/icons';
import React from 'react'
import {useStateValue} from '../StateProvider'
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

function Checkout() {
    const [{basket ,user}] = useStateValue();
    return (
        <div style={checkout}>
            <div style={baskets}>
                {
                    basket?.length === 0 ? (
                        <div>
                            <h2>your basket is empty</h2>
                        </div>
                    ):(
                        <div>
                            <h2>Here's your basket </h2>
                            {basket?.map((item) =>(
                                <CheckoutProduct 
                                    id={item.id}
                                    title={item.title}
                                    image={item.image}
                                    price={item.price}
                                    rating={item.rating} 
                                /> 
                            )
                            )}
                        </div>
                    )
                }
            </div>
                {basket.length > 0 && (
                    <div>
                        <Subtotal />
                    </div>
                )}
        </div>
    )
}
const checkout={
    display:'flex'
}
const baskets={
    width:"89%"
}

export default Checkout
