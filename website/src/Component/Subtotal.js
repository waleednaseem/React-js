import { ShoppingBasket } from '@material-ui/icons'
import React from 'react'
import CurrencyFormat from 'react-currency-format'
import {useStateValue} from '../StateProvider'
import {getBasketTotal} from '../reducer'
import { colors } from '@material-ui/core'

function Subtotal() {
    const [{basket},dispatch] = useStateValue();
    return (
        <div style={subtotal}>
            <h2>Subtotal</h2>
           
            <CurrencyFormat 
                 renderText={(value)=> (
                    <>
                        <p>
                            ({basket.length} items):<strong>
                                {value}
                            </strong>
                            <br/>
                            <small>
                                <input type="checkbox" />this order contain your stuff
                            </small>
                        </p>
                        
                    </>
                )}

                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />
            <button style={button}>proceed to checkout</button>
        </div>
    )
}
const subtotal={
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '300px',
    height:'180px',
    padding: '20px',
    backgroundColor: 'lightgray',
    border: '1px solid brown',
    borderRadius: '10px'
}
const button={
    backgroundColor:'gold',
    color:'black',
    border:'1px solid gold',
    padding: '4px',
    borderRadius: '5px',
}
export default Subtotal
