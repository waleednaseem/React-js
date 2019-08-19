import React, { Component } from 'react';
import Header from './Component/Header'
import Memegenerator from './Component/memegenerator'

class App extends Component {
 
  render() { 
    return ( 
      <div>
        <Header />
        <Memegenerator />
      </div>
    )
  }
}
 
export default App;