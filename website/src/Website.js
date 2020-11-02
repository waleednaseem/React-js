import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Header'
import Footer from './Component/Footer'
import Home from './Component/Home'
import { BrowserRouter as Router, Switch ,Route} from 'react-router-dom'
import "./App.css"
import Checkout from './Component/Checkout'
import Login from './Component/Login'



export default class Website extends Component {
  render() {
    return (
     <React.Fragment>
       <Router>
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
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
}
// const homeRow ={
//   display: 'flex',
//   zIndex : '1',
//   marginLeft: '5px',
//   marginRight: '5px',
// }


