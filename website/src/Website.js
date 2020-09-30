import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Component/Header'
import Footer from './Component/Footer'
import { BrowserRouter as Router, Switch ,Route} from 'react-router-dom'




export default class Website extends Component {
  render() {
    return (
     <React.Fragment>
       <Router>
        <Switch>
          <Route path="/checkout">
            <h2>
              checkout 
            </h2>
          </Route>
          <Route path="/login">
            <h2>
              Login
            </h2>
          </Route>
          <Route>
            <Header />
            <h2>
             Homepage  
            </h2> 
            <Footer />
          </Route>
        </Switch>
       </Router>
     </React.Fragment>
    )
  }
}

