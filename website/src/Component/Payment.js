import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, {useState} from 'react'
import {useStateValue} from '../StateProvider'
import CheckoutProduct from './CheckoutProduct'
import CurrencyFormat from 'react-currency-format'
import {getBasketTotal} from '../reducer'
import instance from './Axios'

function Payment() {
    const [{basket},user] = useStateValue();
    const stripe= useStripe();
    const Elements =useElements();
    const [error, setError] = useState(null);
    const [disabled, setDisabled]= useState(true);
    const [succeeded,setSucceeded]=useState(false);
    const [processing,setProcessing]=useState('');
    const [clientSecret,setClientSecret]=useState('');
    
    useEffect(() => {
        const getClientSecret = async () =>{
            const response = await axios({
                method:'post',
                url:`/payment/create?total=${getBasketTotal(basket)* 100}`
            })
            setClientSecret(response.data.clientSecret);
        }   
        getClientSecret();     
    }, [basket])

    const handleSubmit=async (e)=>{
        e.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card: Elements.getElement(CardElement)
            }
        }).then(({paymentIntent})=>{
            setSucceeded(true);
            setError(null);
            setProcessing('/order')
        })
    }
    const onHandleChange = event =>{
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
                            <span>{processing? <p>processing</p> :'buy now'}</span>
                        </button>
                            {error && <div>{error}</div>}
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
