import React from 'react'
import Product from './Product'
  
  export default function Home() {
      return (
          <div style={home}>
               <div style={homeRow}>
                    <Product 
                        id={19} 
                        title='my product'
                        price={11.98}
                        rating={5} 
                        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"/>
                    <Product 
                        id={15} 
                        title='my product'
                        price={11.98}
                        rating={5} 
                        image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"/>
                </div> 

                <div style={homeRow}>
                    <Product 
                    id={1} 
                    title='my product'
                    price={11.98}
                    rating={5} 
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"/>
                    <Product 
                    id={12} 
                    title='my product'
                    price={11.98}
                    rating={5} 
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"/>
                    <Product 
                    id={13} 
                    title='my product'
                    price={11.98}
                    rating={5} 
                    image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2019/July/amazonbasics_520x520._SY304_CB442725065_.jpg"/>

                </div>  
          </div>
      )
  }
  const homeRow ={
    display: 'flex',
    zIndex : '1',
    marginLeft: '5px',
    marginRight: '5px',
  }
  const home={
      maxWidth: '97%',
      marginRight:'auto',
      marginLeft: 'auto',
  }