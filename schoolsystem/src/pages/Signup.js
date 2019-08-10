import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import config from './Config/config';
// import Signin from './Signin';
// import Login from './Login';

export default class Signup extends Component {
  
  constructor(props){
    super(props);

    this.state={
      Email : '',
      Password: '',
      name : '',
      hasAgreed: false
    };
    this.authListener = this.authListener.bind(this);
  }
  authListener(){
    config.auth().onAuthStateChanged((user)=>{
      if(user){
       this.setState({user});
      }else{
        this.setState({user: null});
      }
    });
  }
  SignUp(){
    const email = document.querySelector("#email").value;
    const Password = document.querySelector("#Password").value;

    config.auth().createUserWithEmailAndPassword(email , Password).then((u)=>{
      console.log("your are successfully signed in");
    }).catch((err)=>{
      console.log("Error" + err.toString());
    })
  }
  
  render() {
    return (
      <div className="form-center">
        <form onSubmit={this.SignUp} className="formField" >
          <div>
            <label className="form-form" htmlFor="Email">
              Email
            </label>
            <input className="form-input" type="email" id="email" placeholder="type your email" name="Email" />
          </div>   
          <div>
            <label className="form-form">
              Password
            </label>
            <input className="form-input" type="Password" id="Password" name="Password" placeholder="type your password"  />
          </div>
          {/* <div>
            <label className="form-form">
              <input className="check" type="checkbox" name="hasAgreed" value={this.state.hasAgreed} /> do you agree with  <a className="agrement" href="#"> terms and condition</a>
            </label>
          </div>   */}
          <div className="form-form">
            <button className="sign-button" > Register </button> <p className="pp">or</p> <Link to="/Signin" className="sign-link">Login your Account</Link>
          </div>
        </form>
      </div>  
    );
  }
}
