import zIndex from '@material-ui/core/styles/zIndex'
import React from 'react'
import {useStateValue} from '../StateProvider'

function Product({id,title,price,rating,image}) {
    const [{basket}, dispatch] = useStateValue();    
    const addToBasket =() =>{
           dispatch({
            type: "Add_to_basket",
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
           });
        }; 
    return (
        <div style={productDiv}>
          <div style={productInfo}> 
          <p>{title}</p>
            <p style={productPrice}>
                <small>$</small> 
                <strong>{price}</strong> 
            </p>
            <div style={productRating}>
                {
                    Array(rating)
                    .fill()
                    .map((_) => (<p>*</p>))
                }
            </div>
          </div>
          <img src={image} style={pImage} alt=""/>
            <button style={buttons} onClick={addToBasket}>
                Add to card
            </button>
        </div>
    )
}
const productDiv={
    display : 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '10px',
    padding: '10px',
    width : '100%',
    maxHeight: '400px',
    minWidth: '100px',
    backgroundColor: 'white',
    zIndex:'1'
}
const productPrice={
    
}
const productRating={
    display : 'flex'
}
const productInfo={
    height : '100px',
    marginBottom: '15px'
}
const pImage={
    maxHeight: '200px',
    width : '100%',
    objectFit : 'contain',
    marginBottom :'10px'
}
const buttons ={
    backgroundColor : '#f0c14b',
    border: '1px solid'
}



export default Product
