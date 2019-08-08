import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import config from './Config/config';

export default class Signin extends Component {
  
  constructor(){
    super();

  this.state={
    Email : '',
    Password: ''
  };
   this.handleChange= this.handleChange.bind(this);
   this.handleSubmit= this.handleSubmit.bind(this);
  
  }

  render() {
    return (
      <div className="form-center">
        <form onSubmit={this.handleSubmit} className="formField" >
          <div>
            <label className="form-form" htmlFor="Email">
              Email
            </label>
            <input className="form-input" type="email" id="email" placeholder="type your email" name="Email"  />
          </div>   
          <div>
            <label className="form-form">
              Password
            </label>
            <input className="form-input" type="Password" id="Password" name="Password" placeholder="type your password" />
          </div>
          <div className="form-form">
            <button className="sign-button" onClick={Signin} >Sign in</button><p className="pp">or</p> <Link to="/Signup" className="sign-link">Create your account now</Link>
          </div>
        </form>
      </div>  
    );
  }
}
 