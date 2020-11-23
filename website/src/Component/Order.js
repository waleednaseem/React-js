import React from 'react'
import moment from 'moment'
import CheckoutProduct from './CheckoutProduct'

function Order({order}) {
    return (
        <div>
            <h2>order</h2>
            <p>{moment.unix(order.data.created).format('MMMM Do YYYY , h:mma')}</p>
            <p>
            <small>{order.id}</small>
            </p>    
            {order.data.basket?.map(item =>(
                <CheckoutProduct 
                    id={item.id}
                    image={item.image}
                    price={item.price}
                    rating={item.rating}
                    hideButton
                />
            ))}
        </div>
    )
}

export default Order
