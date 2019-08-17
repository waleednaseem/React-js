import React, { Component } from 'react';

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
      <form onSubmit={this.submitform}>
      <lable>
     Your first name : <input type="text" name="FirstName" placeholder="First name" onChange={this.handleChange}/>
     </lable>
     <br />
     <lable>
     Your Last name : <input type="text" name="LastName" placeholder="Last name" onChange={this.handleChange}/>
     </lable>
     <br />
     <lable>
     Your gender: 
     Male<input type="radio" name="gender" value="male" checked={this.state.gender === "male"}  onChange={this.handleChange}/> 
     Female<input type="radio" name="gender" value="female" checked={this.state.gender === "female"} onChange={this.handleChange}/>
     </lable>
     <br />
     your location your location :
      <select value={this.state.location} name="location" onChange={this.handleChange}>
        <option value="dubai">dubai</option>
        <option value="pakistan">pakistan</option>
        <option value="london">london</option>
        <option value="America">America</option>
     </select>
     <br />
      <lable>
   Do you agree with my form ? <input type="checkbox" name="istrue" checked={this.state.istrue} onChange={this.handleChange}/>
      
      </lable>
      <br />
      <button>submit form</button>
      </form>
      <label>
      Your name : {this.state.FirstName} {this.state.LastName}<br />
      Your gender : {this.state.gender}<br />
      your location : {this.state.location}<br />
      your agreement : {this.state.istrue ? "You have agreed our agreement " : "dis-agreed"}<br />
      </label>

    </div>
     )
  }
}
 
export default App;