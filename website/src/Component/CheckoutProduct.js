import React from 'react'
import {useStateValue} from '../StateProvider'

function CheckoutProduct({id,title,image,price,rating}) {
    const [{basket},dispatch] = useStateValue();
    
    const RemoveFromBasket=()=>{
        dispatch({
            type: "Delete_from_basket",
            id: id,
        });
    }
    return (
        
            <div style={checkoutProduct}>
                <img src={image} style={ProductImage} alt=""/>
                <div style={productinfo}>
                    <div>
                        <p style={productTitle}>{title}</p>
                        <p style={productPrice}>
                            <small> $</small>
                            <strong>{price}</strong>
                        </p>
                    </div>
                    
                    <div style={ProductRating}>
                        {Array(rating)
                        .fill()
                        .map((_,i) =>(
                            <p>*</p>
                        ))}
                    </div>
                    <button style={button} onClick={RemoveFromBasket}>
                            Remove Item
                    </button>
                </div>
            </div>
        
    )
}
const checkoutProduct = {
    display: 'flex',
    
}
const ProductImage={
    objectFit:'fit',
    width:'260px',
    height:'200px' 
}
const productinfo={
    paddingLeft: '20px',
    height:'180px'
}
const productPrice={
    color:'black',
    marginTop:'-10px'
}
const ProductRating={
    display: 'flex',
    color: 'white',
    fontSize: '30px',
    marginTop:'-20px'
}
const button={
    backgroundColor: 'gold',
    border:'1px solid',
    marginBottom:'auto',
    color:'black',
    borderColor: 'gold'
}
const productTitle={
    fontSize: '17px',
    fontWeight:'800'
}
export default CheckoutProduct
