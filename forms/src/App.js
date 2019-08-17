import React, { Component } from 'react';
import Form from './forms/Form'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      FirstName : "",
      LastName : "",
      fav_color: "",
      description : "",
      Location : "",
      gender : "",
      istrue : false
     }
     this.handleChange=this.handleChange.bind(this)
  }
 handleChange(event){
  const {name , value ,type ,checked } =event.target
  type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name] : value}) 
 }
  render() { 
 
    return ( 
    <div>
       <Form 
       handleChange={this.handleChange}
       Data={this.state}
       />
    </div>
     )
  }
}
 
export default App;