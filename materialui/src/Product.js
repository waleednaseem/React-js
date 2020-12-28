import React from 'react'

function Product(props) {
    return (
        <div>
            <h1>Example of props</h1>
            <h1>{props.id}</h1>
           <p> {props.title}</p>
        </div>
    )
}

export default Product
