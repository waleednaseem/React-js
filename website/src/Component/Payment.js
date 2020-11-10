import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, {useState} from 'react'
import {useStateValue} from '../StateProvider'
import CheckoutProduct from './CheckoutProduct'
import CurrencyFormat from 'react-currency-format'
import {getBasketTotal} from '../reducer'

function Payment() {
    const [{basket},user] = useStateValue();
    const stripe= useStripe();
    const Elements =useElements();
    const [error, setError] = useState(null);
    const [disables, setDisabled]= useState(true);

    const handleSubmit=(e)=>{

    }
    const onHandleChange= event =>{
        setDisabled(event.empty);
        setError(event.error? event.error.message :'');
    }
    return (
        <div style={{backgroundColor:'white'}}>
            <div style={adress}>
                <h1>Adress for shipping </h1>
                <p>kwhfk   fowefj   ow</p>
                <p>kwhfk   post 0999</p>
                <p>Duabi</p>
            </div>
                
            <div style={payment_item}>
                <h1 style={{margin: '0 20px'}}>Your have selected {basket.length} product</h1>
                {basket?.map(item =>(
                    <CheckoutProduct 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />                    
                ))}
            </div>
            <div style={payment_section}>
                <div style={payment_title}>
                    <h3>Payment Method</h3>
                </div>
                <div style={payment_detail}>
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={onHandleChange}/>
                        
                        <CurrencyFormat 
                            renderText={(value)=> (
                            <h3>Total value: {value}</h3>)}

                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={'text'}
                                thousandSeparator={true}
                                prefix={'$'}
                        />
                        <button disabled={processing || disabled || succeeded}>
                            <span>{processing? <p>processeing</p> :'buy now'}</span>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
const adress={
    margin: '0 20px',
    flex: '0.2',
    borderBottom:'1px solid gray'
}
const payment_section={
    display: 'flex',
    padding: '20px',
    margin: '0 20px',
    borderBottom:'1px solid gray',
    borderTop:'1px solid gray'
}
const payment_title={
    flex: '0.2'
}
const payment_detail ={
    flex :'0.8'
}
const payment_item={
    flex: '0.8',
}
export default Payment
