import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Header'
import Footer from './Component/Footer'
import Home from './Component/Home'
import { BrowserRouter as Router, Switch ,Route} from 'react-router-dom'
import "./App.css"
import Checkout from './Component/Checkout'
import Payment from './Component/Payment'
import Login from './Component/Login'
import {useStateValue} from './StateProvider'
import {auth} from './Component/Firebase'
import {loadStripe} from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'

const promiss = loadStripe('pk_test_51H9tNJKZ7OXOzKt6I8IJQiehBSfxfysPGwxhp8Lw0Ok9y9rdDIpUroeGUP2AkXxh9Iz3A74E6Bk1GtgQAKpG3txF00pO2EAhR0');

export default function Website(){

    const [{user},dispatch] =useStateValue();
    useEffect(() => {
      
      const unsub = auth.onAuthStateChanged(
        (Auth_user)=>{
          if (Auth_user) {
            dispatch({
              type: 'Set_user',
              user: Auth_user
            })
          }else{
            dispatch({
              type:'Set_user',
              user: null
            })
          }
        }
      )
      return () => {
        unsub();
      }
    }, [])
     
    return (
     <React.Fragment>
       <Router>
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/payment">
            <Elements stripe={promiss}>
              <Payment/> 
            </Elements>           
          </Route>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path='/'>
              <Header />
              <Home />        
              <Footer />
          </Route>
        </Switch>
       </Router>
     </React.Fragment>
    )
  
}


