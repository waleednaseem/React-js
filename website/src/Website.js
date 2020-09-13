import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Component/Header'
import Footer from './Component/Footer'



export default class Website extends Component {
  render() {
    return (
     <React.Fragment>
       <Header />
        {/* <img src={require('"./images/img1.png"')} /> */}
       <Footer/>
     </React.Fragment>
    )
  }
}
