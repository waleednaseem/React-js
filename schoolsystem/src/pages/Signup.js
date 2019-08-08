import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class Signup extends Component {
  
  constructor(){
    super();

    this.state={
      Email : '',
      Password: '',
      name : '',
      hasAgreed: false
    };
    this.handleChange= this.handleChange.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);

  }
  handleChange(e){
    let target= e.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    let name = target.name;

    this.setState({
      [name]: value
    });
  }
  handleSubmit(e){
    e.preventDefault();
    console.log("this is your sign up data");
    console.log(this.state);
  }  
  render() {
    return (
      <div className="form-center">
        <form onSubmit={this.handleSubmit} className="formField" >
          <div>
            <label className="form-form" htmlFor="Email">
              Email
            </label>
            <input className="form-input" type="email" id="email" placeholder="type your email" name="Email" value={this.state.Email} onChange={this.handleChange} />
          </div>   
          <div>
            <label className="form-form">
              Password
            </label>
            <input className="form-input" type="Password" id="Password" name="Password" placeholder="type your password" value={this.state.Password} onChange={this.handleChange}/>
          </div>
          <div>
            <label className="form-form">
              <input className="check" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} onChange={this.handleChange} /> do you agree with  <a className="agrement" href="#"> terms and condition</a>
            </label>
          </div>  
          <div className="form-form">
            <button className="sign-button" > Register </button> <p className="pp">or</p> <Link to="/Signin" className="sign-link">Login your Account</Link>
          </div>
        </form>
      </div>  
    );
  }
}
